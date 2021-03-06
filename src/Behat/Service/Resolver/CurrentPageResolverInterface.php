<?php

/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Behat\Service\Resolver;

use FriendsOfBehat\PageObjectExtension\Page\SymfonyPageInterface;

/**
 * @author Łukasz Chruściel <lukasz.chrusciel@lakion.com>
 */
interface CurrentPageResolverInterface
{
    /**
     * @param SymfonyPageInterface[] $pages
     *
     * @return SymfonyPageInterface
     */
    public function getCurrentPageWithForm(array $pages);
}
