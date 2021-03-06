<?php

/*
 * This file is part of Jedisjeux.
 *
 * (c) Loïc Frémont
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Behat\Page\Frontend\Product;

/**
 * @author Loïc Frémont <loic@mobizel.com>
 */
class IndexByTaxonPage extends IndexPage
{
    /**
     * {@inheritdoc}
     */
    public function getRouteName(): string
    {
        return 'sylius_frontend_product_index_by_taxon';
    }
}
