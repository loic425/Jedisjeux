<?php

/*
 * This file is part of Jedisjeux.
 *
 * (c) Loïc Frémont
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Behat\Context\Setup;

use App\Behat\Service\SharedStorageInterface;
use App\Entity\Person;
use App\Entity\Product;
use App\Fixture\Factory\ExampleFactoryInterface;
use App\Formatter\StringInflector;
use Behat\Behat\Context\Context;
use Doctrine\ORM\EntityManagerInterface;
use Sylius\Component\Product\Model\ProductInterface;
use Sylius\Component\Product\Model\ProductVariantInterface;
use Sylius\Component\Resource\Factory\FactoryInterface;
use Sylius\Component\Resource\Repository\RepositoryInterface;
use Sylius\Component\Taxonomy\Model\TaxonInterface;

/**
 * @author Loïc Frémont <loic@mobizel.com>
 */
class ProductContext implements Context
{
    /**
     * @var SharedStorageInterface
     */
    protected $sharedStorage;

    /**
     * @var ExampleFactoryInterface
     */
    protected $productFactory;

    /**
     * @var FactoryInterface
     */
    protected $productVariantFactory;

    /**
     * @var RepositoryInterface
     */
    protected $productRepository;

    /**
     * @var EntityManagerInterface
     */
    protected $manager;

    /**
     * @param SharedStorageInterface  $sharedStorage
     * @param ExampleFactoryInterface $productFactory
     * @param FactoryInterface        $productVariantFactory
     * @param RepositoryInterface     $productRepository
     * @param EntityManagerInterface  $manager
     */
    public function __construct(
        SharedStorageInterface $sharedStorage,
        ExampleFactoryInterface $productFactory,
        FactoryInterface $productVariantFactory,
        RepositoryInterface $productRepository,
        EntityManagerInterface $manager
    ) {
        $this->sharedStorage = $sharedStorage;
        $this->productFactory = $productFactory;
        $this->productVariantFactory = $productVariantFactory;
        $this->productRepository = $productRepository;
        $this->manager = $manager;
    }

    /**
     * @Given there is (also) a product :name
     * @Given there is a product :name, created at :date
     *
     * @param string $name
     */
    public function productHasName($name, $date = 'now')
    {
        /** @var Product $product */
        $product = $this->productFactory->create([
            'name' => $name,
            'created_at' => $date,
            'status' => Product::PUBLISHED,
            'mechanisms' => [],
            'themes' => [],
            'designers' => [],
            'artists' => [],
            'publishers' => [],
            'min_duration' => null,
            'max_duration' => null,
            'box_content' => null,
        ]);

        $this->productRepository->add($product);
        $this->sharedStorage->set('product', $product);
    }

    /**
     * @Given there is a product :name, released :date
     * @Given there is also a product :name, released :date
     *
     * @param string $name
     */
    public function productHasNameAndReleaseDate($name, $date = 'now')
    {
        /** @var Product $product */
        $product = $this->productFactory->create([
            'name' => $name,
            'released_at' => $date,
            'status' => Product::PUBLISHED,
            'mechanisms' => [],
            'themes' => [],
            'designers' => [],
            'artists' => [],
            'publishers' => [],
            'min_duration' => null,
            'max_duration' => null,
        ]);

        $this->productRepository->add($product);
        $this->sharedStorage->set('product', $product);
    }

    /**
     * @Given there is a product :name with :status status
     *
     * @param string $name
     */
    public function productHasNameWithStatus($name, $status)
    {
        /** @var Product $product */
        $product = $this->productFactory->create([
            'name' => $name,
            'status' => str_replace(' ', '_', $status),
            'mechanisms' => [],
            'themes' => [],
            'designers' => [],
            'artists' => [],
            'publishers' => [],
        ]);

        $this->productRepository->add($product);
        $this->sharedStorage->set('product', $product);
    }

    /**
     * @Given /^(this product) has "([^"]+)" in its box$/
     * @Given /^(this product) also has "([^"]+)" in its box$/
     */
    public function productHasContent(Product $product, $boxContent)
    {
        $boxContentItems = null !== $product->getBoxContent() ? explode("\n", $product->getBoxContent()) : [];

        $boxContentItems[] = $boxContent;

        $product->setBoxContent(implode("\n", $boxContentItems));
        $this->manager->flush($product);
    }

    /**
     * @Given /^(this product) has ("[^"]+" mechanism)$/
     * @Given /^(this product) also has ("[^"]+" mechanism)$/
     */
    public function productHasMechanism(Product $product, TaxonInterface $mechanism)
    {
        $product->addMechanism($mechanism);
        $this->manager->flush($product);
    }

    /**
     * @Given /^(this product) has ("[^"]+" theme)$/
     * @Given /^(this product) also has ("[^"]+" theme)$/
     */
    public function productHasTheme(Product $product, TaxonInterface $theme)
    {
        $product->addTheme($theme);
        $this->manager->flush($product);
    }

    /**
     * @Given /^(this product) is designed by ("[^"]+" person)$/
     * @Given /^(this product) is also designed by ("[^"]+" person)$/
     */
    public function productHasDesigner(Product $product, Person $person)
    {
        $product->getFirstVariant()->addDesigner($person);
        $this->manager->flush($product->getFirstVariant());
    }

    /**
     * @Given /^(this product) is drawn by ("[^"]+" person)$/
     * @Given /^(this product) is also drawn by ("[^"]+" person)$/
     */
    public function productHasArtist(Product $product, Person $person)
    {
        $product->getFirstVariant()->addArtist($person);
        $this->manager->flush($product->getFirstVariant());
    }

    /**
     * @Given /^(this product) is published by ("[^"]+" person)$/
     * @Given /^(this product) is also published by ("[^"]+" person)$/
     */
    public function productHasPublisher(Product $product, Person $person)
    {
        $product->getFirstVariant()->addPublisher($person);
        $this->manager->flush($product->getFirstVariant());
    }

    /**
     * @Given /^(this product) takes (\d+) minutes$/
     */
    public function productTakesMinutes(Product $product, int $minDuration)
    {
        $product->setMinDuration($minDuration);
        $this->manager->flush($product);
    }

    /**
     * @Given /^(this product) can be played from (\d+) years$/
     */
    public function productCanBePlayedFromAge(Product $product, int $minAge)
    {
        $product->setMinAge($minAge);
        $this->manager->flush($product);
    }

    /**
     * @Given /^(this product) can be played from (\d+) to (\d+) players$/
     */
    public function productCanBePlayedFromToPlayers(Product $product, int $minPlayerCount, int $maxPlayerCount)
    {
        $product->setMinPlayerCount($minPlayerCount);
        $product->setMaxPlayerCount($maxPlayerCount);
        $this->manager->flush($product);
    }

    /**
     * @Given /^(this product) can only be played with (\d+) players$/
     */
    public function productCanOnlyBePlayedWithPlayerCount(Product $product, int $playerCount)
    {
        $product->setMinPlayerCount($playerCount);
        $product->setMaxPlayerCount($playerCount);
        $this->manager->flush($product);
    }

    /**
     * @Given /^the (product "[^"]+") has(?:| a| an) "([^"]+)" variant$/
     * @Given /^(this product) has(?:| a| an) "([^"]+)" variant$/
     * @Given /^(this product) has "([^"]+)", "([^"]+)" and "([^"]+)" variants$/
     */
    public function theProductHasVariants(ProductInterface $product, ...$variantNames)
    {
        foreach ($variantNames as $name) {
            $this->createProductVariant(
                $product,
                $name,
                StringInflector::nameToUppercaseCode($name)
            );
        }
    }

    /**
     * @param ProductInterface $product
     * @param string $productVariantName
     * @param string $code
     * @param int $position
     *
     * @return ProductVariantInterface
     *
     * @throws \Doctrine\ORM\ORMException
     * @throws \Doctrine\ORM\OptimisticLockException
     */
    private function createProductVariant(
        ProductInterface $product,
        $productVariantName,
        $code,
        $position = null
    ) {
        /** @var ProductVariantInterface $variant */
        $variant = $this->productVariantFactory->createNew();

        $variant->setName($productVariantName);
        $variant->setCode($code);
        $variant->setProduct($product);
        $variant->setPosition((null === $position) ? null : (int) $position);

        $product->addVariant($variant);

        $this->manager->flush();
        $this->sharedStorage->set('variant', $variant);

        return $variant;
    }
}
