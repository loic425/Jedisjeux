<?php

/*
 * This file is part of the Jedisjeux project.
 *
 * (c) Jedisjeux
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\View;

use Pagerfanta\View\TwitterBootstrap4View;

class FrontendView extends TwitterBootstrap4View
{
    protected function getDefaultProximity()
    {
        return 1;
    }
}
