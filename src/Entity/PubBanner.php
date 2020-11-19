<?php

/*
 * This file is part of the Jedisjeux project.
 *
 * (c) Jedisjeux
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @author Loïc Frémont <loic@mobizel.com>
 *
 * @ORM\Entity
 * @ORM\Table(name="jdj_pub_banner")
 */
class PubBanner extends AbstractImage
{
    /**
     * @var string
     *
     * @ORM\Column(type="string")
     */
    protected $targetUrl;

    /**
     * @var Dealer
     *
     * @ORM\ManyToOne(targetEntity="Dealer", inversedBy="pubBanners")
     */
    protected $dealer;

    public function getTargetUrl(): ?string
    {
        return $this->targetUrl;
    }

    public function setTargetUrl(?string $targetUrl): void
    {
        $this->targetUrl = $targetUrl;
    }

    public function getDealer(): ?Dealer
    {
        return $this->dealer;
    }

    public function setDealer(?Dealer $dealer): void
    {
        $this->dealer = $dealer;
    }
}
