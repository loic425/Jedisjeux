<?php

/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Fixture\Factory;

use App\Entity\Person;
use App\Entity\PersonImage;
use App\Fixture\OptionsResolver\LazyOption;
use App\Formatter\StringInflector;
use Sylius\Component\Resource\Factory\FactoryInterface;
use Symfony\Component\OptionsResolver\Options;
use Symfony\Component\OptionsResolver\OptionsResolver;

/**
 * @author Loïc Frémont <lc.fremont@gmail.com>
 */
class PersonExampleFactory extends AbstractExampleFactory implements ExampleFactoryInterface
{
    /**
     * @var FactoryInterface
     */
    private $personFactory;

    /**
     * @var FactoryInterface
     */
    private $personImageFactory;

    /**
     * @var \Faker\Generator
     */
    private $faker;

    /**
     * @var OptionsResolver
     */
    private $optionsResolver;

    /**
     * @param FactoryInterface $personFactory
     * @param FactoryInterface $personImageFactory
     */
    public function __construct(
        FactoryInterface $personFactory,
        FactoryInterface $personImageFactory
    ) {
        $this->personFactory = $personFactory;
        $this->personImageFactory = $personImageFactory;

        $this->faker = \Faker\Factory::create('fr_FR');
        $this->optionsResolver = new OptionsResolver();

        $this->configureOptions($this->optionsResolver);
    }

    /**
     * {@inheritdoc}
     */
    public function create(array $options = [])
    {
        $options = $this->optionsResolver->resolve($options);

        /** @var Person $person */
        $person = $this->personFactory->createNew();
        $person->setCode($options['code']);
        $person->setFirstName($options['first_name']);
        $person->setLastName($options['last_name']);
        $person->setWebsite($options['website']);
        $person->setDescription($options['description']);

        $this->createImages($person, $options);

        return $person;
    }

    /**
     * @param Person $person
     * @param array  $options
     */
    private function createImages(Person $person, array $options)
    {
        $first = true;

        foreach ($options['images'] as $imagePath) {
            /** @var PersonImage $personImage */
            $personImage = $this->personImageFactory->createNew();
            $personImage->setPath(basename($imagePath));

            if ($first) {
                $personImage->setMain(true);
            }

            $first = false;

            file_put_contents($personImage->getAbsolutePath(), file_get_contents($imagePath));

            $person->addImage($personImage);
        }
    }

    /**
     * {@inheritdoc}
     */
    protected function configureOptions(OptionsResolver $resolver)
    {
        $resolver
            ->setDefault('first_name', function (Options $options) {
                return $this->faker->firstName;
            })

            ->setDefault('last_name', function (Options $options) {
                return $this->faker->lastName;
            })

            ->setDefault('code', function (Options $options) {
                return StringInflector::nameToCode($options['first_name'].' '.$options['last_name']);
            })

            ->setDefault('website', function (Options $options) {
                return $this->faker->url;
            })

            ->setDefault('description', function (Options $options) {
                return $this->faker->paragraphs(3, true);
            })

            ->setDefault('images', LazyOption::randomOnesImage(
                __DIR__.'/../../../tests/Resources/fixtures/people', 2
            ))
            ->setAllowedTypes('images', 'array');
    }
}
