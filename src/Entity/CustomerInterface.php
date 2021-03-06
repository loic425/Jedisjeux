<?php

/*
 * This file is part of AppName.
 *
 * (c) Monofony
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Entity;

use Sylius\Component\Customer\Model\CustomerInterface as BaseCustomerInterface;
use Sylius\Component\User\Model\UserAwareInterface;
use Sylius\Component\User\Model\UserInterface;

interface CustomerInterface extends BaseCustomerInterface, UserAwareInterface
{
    /**
     * @return User|Userinterface|null
     */
    public function getUser(): ?UserInterface;

    /**
     * @param User|UserInterface|null $user
     *
     * @return $this
     */
    public function setUser(?UserInterface $user);
}
