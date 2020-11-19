<?php

/*
 * This file is part of the Jedisjeux project.
 *
 * (c) Jedisjeux
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Tests\Behat\Page\Frontend\GamePlay;

use FriendsOfBehat\PageObjectExtension\Page\SymfonyPage;
use Behat\Mink\Element\NodeElement;
use Webmozart\Assert\Assert;

class ShowPage extends SymfonyPage
{
    /**
     * {@inheritdoc}
     */
    public function getRouteName(): string
    {
        return 'app_frontend_game_play_show';
    }

    /**
     *
     */
    public function getPostWithComment(string $comment): ?NodeElement
    {
        // Remove tags to search on DOM
        $comment = strip_tags($comment);

        return $this->getDocument()->find('css', sprintf('#comments .comment:contains("%s")', $comment));
    }

    /**
     *
     */
    public function getRemoveButtonFromPostWithComment(string $comment): ?NodeElement
    {
        $postItem = $this->getPostWithComment($comment);
        Assert::notNull($postItem);

        return $postItem->find('css', 'button.btn-confirm');
    }
}
