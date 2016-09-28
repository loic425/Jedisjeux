<?php

/*
 * This file is part of Jedisjeux project.
 *
 * (c) Jedisjeux
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace AppBundle\Form\Type;

use Sylius\Bundle\VariationBundle\Form\Type\VariantType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\FormBuilderInterface;

/**
 * @author Loïc Frémont <loic@mobizel.com>
 */
class ProductVariantType extends VariantType
{
    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        parent::buildForm($builder, $options);

        $builder
            ->add('images', CollectionType::class, array(
                'type' => 'app_product_variant_image',
                'allow_add' => true,
                'allow_delete' => true,
                'by_reference' => false,
                'prototype' => true,
                'widget_add_btn' => array('label' => "label.add_image"),
                'show_legend' => false, // dont show another legend of subform
                'options' => array( // options for collection fields
                    'label_render' => false,
                    'horizontal_input_wrapper_class' => "col-lg-8",
                    'widget_remove_btn' => array('label' => "label.remove_this_image"),
                )
            ))
            ->add('designers', EntityType::class, array(
                'label' => 'label.designers',
                'class' => 'AppBundle:Person',
                'required' => false,
                'expanded' => false,
                'multiple' => true,
            ))
            ->add('artists', EntityType::class, array(
                'label' => 'label.artists',
                'class' => 'AppBundle:Person',
                'required' => false,
                'expanded' => false,
                'multiple' => true,
            ))
            ->add('publishers', EntityType::class, array(
                'label' => 'label.publishers',
                'class' => 'AppBundle:Person',
                'required' => false,
                'expanded' => false,
                'multiple' => true,
            ))
            ->remove('presentation');
    }

    /**
     * @return string
     */
    public function getName()
    {
        return 'sylius_product_variant';
    }
}
