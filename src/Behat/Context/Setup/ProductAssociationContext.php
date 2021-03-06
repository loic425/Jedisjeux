<?php

/*
 * This file is part of Jedisjeux.
 *
 * (c) Loïc Frémont
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

declare(strict_types=1);

namespace App\Behat\Context\Setup;

use App\Behat\Service\SharedStorageInterface;
use App\Entity\ProductInterface;
use Behat\Behat\Context\Context;
use Doctrine\Common\Persistence\ObjectManager;
use Sylius\Component\Product\Model\ProductAssociationInterface;
use Sylius\Component\Product\Model\ProductAssociationTypeInterface;
use Sylius\Component\Product\Model\ProductAssociationTypeTranslationInterface;
use Sylius\Component\Resource\Factory\FactoryInterface;
use Sylius\Component\Resource\Repository\RepositoryInterface;

final class ProductAssociationContext implements Context
{
    /** @var SharedStorageInterface */
    private $sharedStorage;

    /** @var FactoryInterface */
    private $productAssociationTypeFactory;

    /** @var FactoryInterface */
    private $productAssociationTypeTranslationFactory;

    /** @var FactoryInterface */
    private $productAssociationFactory;

    /** @var RepositoryInterface */
    private $productAssociationTypeRepository;

    /** @var RepositoryInterface */
    private $productAssociationRepository;

    /** @var ObjectManager */
    private $objectManager;

    public function __construct(
        SharedStorageInterface $sharedStorage,
        FactoryInterface $productAssociationTypeFactory,
        FactoryInterface $productAssociationTypeTranslationFactory,
        FactoryInterface $productAssociationFactory,
        RepositoryInterface $productAssociationTypeRepository,
        RepositoryInterface $productAssociationRepository,
        ObjectManager $objectManager
    ) {
        $this->sharedStorage = $sharedStorage;
        $this->productAssociationTypeFactory = $productAssociationTypeFactory;
        $this->productAssociationTypeTranslationFactory = $productAssociationTypeTranslationFactory;
        $this->productAssociationFactory = $productAssociationFactory;
        $this->productAssociationTypeRepository = $productAssociationTypeRepository;
        $this->productAssociationRepository = $productAssociationRepository;
        $this->objectManager = $objectManager;
    }

    /**
     * @Given there is( also) a product association type :name
     * @Given there is( also) a product association type :name with a code :code
     */
    public function theStoreHasAProductAssociationType($name, $code = null)
    {
        $this->createProductAssociationType($name, $code);
    }

    /**
     * @Given /^there is(?:| also) a product association type named "([^"]+)" in ("[^"]+" locale) and "([^"]+)" in ("[^"]+" locale)$/
     */
    public function itHasVariantNamedInAndIn($firstName, $firstLocale, $secondName, $secondLocale)
    {
        $productAssociationType = $this->createProductAssociationType($firstName);

        $names = [$firstName => $firstLocale, $secondName => $secondLocale];
        foreach ($names as $name => $locale) {
            $this->addProductAssociationTypeTranslation($productAssociationType, $name, $locale);
        }

        $this->objectManager->flush();
    }

    /**
     * @Given the store has :firstName and :secondName product association types
     */
    public function theStoreHasProductAssociationTypes(...$names)
    {
        foreach ($names as $name) {
            $this->createProductAssociationType($name);
        }
    }

    /**
     * @Given /^the (product "[^"]+") has(?:| also) an (association "[^"]+") with (product "[^"]+")$/
     */
    public function theProductHasAnAssociationWithProduct(
        ProductInterface $product,
        ProductAssociationTypeInterface $productAssociationType,
        ProductInterface $associatedProduct
    ) {
        $this->createProductAssociation($product, $productAssociationType, [$associatedProduct]);
    }

    /**
     * @Given /^the (product "[^"]+") has(?:| also) an (association "[^"]+") with (products "[^"]+" and "[^"]+")$/
     */
    public function theProductHasAnAssociationWithProducts(
        ProductInterface $product,
        ProductAssociationTypeInterface $productAssociationType,
        array $associatedProducts
    ) {
        $this->createProductAssociation($product, $productAssociationType, $associatedProducts);
    }

    /**
     * @param string $name
     * @param string|null $code
     *
     * @return ProductAssociationTypeInterface
     */
    private function createProductAssociationType($name, $code = null)
    {
        if (null === $code) {
            $code = $this->generateCodeFromName($name);
        }

        /** @var ProductAssociationTypeInterface $productAssociationType */
        $productAssociationType = $this->productAssociationTypeFactory->createNew();
        $productAssociationType->setCode($code);
        $productAssociationType->setName($name);

        $this->productAssociationTypeRepository->add($productAssociationType);
        $this->sharedStorage->set('product_association_type', $productAssociationType);

        return $productAssociationType;
    }

    private function createProductAssociation(
        ProductInterface $product,
        ProductAssociationTypeInterface $productAssociationType,
        array $associatedProducts
    ) {
        /** @var ProductAssociationInterface $productAssociation */
        $productAssociation = $this->productAssociationFactory->createNew();
        $productAssociation->setType($productAssociationType);

        foreach ($associatedProducts as $associatedProduct) {
            $productAssociation->addAssociatedProduct($associatedProduct);
        }

        $product->addAssociation($productAssociation);

        $this->productAssociationRepository->add($productAssociation);
    }

    private function addProductAssociationTypeTranslation(
        ProductAssociationTypeInterface $productAssociationType,
        string $name,
        string $locale
    ) {
        /** @var ProductAssociationTypeTranslationInterface $translation */
        $translation = $this->productAssociationTypeTranslationFactory->createNew();
        $translation->setLocale($locale);
        $translation->setName($name);

        $productAssociationType->addTranslation($translation);
    }

    /**
     * @param string $name
     *
     * @return string
     */
    private function generateCodeFromName($name)
    {
        return str_replace([' ', '-'], '_', strtolower($name));
    }
}
