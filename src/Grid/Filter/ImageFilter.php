<?php

/*
 * This file is part of Jedisjeux.
 *
 * (c) Loïc Frémont
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Grid\Filter;

use Sylius\Component\Grid\Data\DataSourceInterface;
use Sylius\Component\Grid\Filtering\FilterInterface;

/**
 * @author Loïc Frémont <loic@mobizel.com>
 */
class ImageFilter implements FilterInterface
{
    /**
     * {@inheritdoc}
     */
    public function apply(DataSourceInterface $dataSource, string $name, $data, array $options = []): void
    {
        // Your filtering logic. DataSource is kind of query builder.
        // $data['value'] contains the submitted value!

        if (empty($data)) {
            return;
        }

        if ('with' === $data) {
            $dataSource->restrict($dataSource->getExpressionBuilder()->greaterThan('imageCount', 0));
        } else {
            $dataSource->restrict($dataSource->getExpressionBuilder()->equals('imageCount', 0));
        }
    }
}
