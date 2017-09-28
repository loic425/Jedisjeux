<?php

/*
 * This file is part of Jedisjeux.
 *
 * (c) Loïc Frémont
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace AppBundle\Validator\Constraints;

use AppBundle\Entity\Product;
use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\ConstraintValidator;
use Symfony\Component\Validator\Exception\ValidatorException;

/**
 * @author Loïc Frémont <loic@mobizel.com>
 */
class MaxPlayerCountGreaterThanOrEqualMinPlayerValidator extends ConstraintValidator
{
    /**
     * {@inheritdoc}
     */
    public function validate($product, Constraint $constraint)
    {
        if (!$product instanceof Product) {
            throw new ValidatorException(sprintf("product should be an instance of %s", Product::class));
        }

        if (null === $product->getJoueurMin()) {
            return;
        }

        if (null === $product->getJoueurMax()) {
            return;
        }

        if ($product->getJoueurMin() > $product->getJoueurMax()) {
            $this->context->buildViolation($constraint->message)
                ->atPath('joueurMin')
                ->addViolation();
        }
    }
}
