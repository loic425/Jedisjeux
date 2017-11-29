<?php
/**
 * Created by PhpStorm.
 * User: loic
 * Date: 07/03/2016
 * Time: 17:03
 */

namespace AppBundle\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
use JMS\Serializer\Annotation as JMS;
use Sylius\Component\Product\Model\ProductVariant as BaseProductVariant;

/**
 * @author Loïc Frémont <loic@mobizel.com>
 *
 * @ORM\Entity
 * @ORM\Table(name="sylius_product_variant")
 *
 * @JMS\ExclusionPolicy("all")
 */
class ProductVariant extends BaseProductVariant
{
    const RELEASED_AT_PRECISION_ON_DAY = 'on-day';
    const RELEASED_AT_PRECISION_ON_MONTH = 'on-month';
    const RELEASED_AT_PRECISION_ON_YEAR = 'on-year';

    /**
     * @var ArrayCollection|ProductVariantImage[]
     *
     * @ORM\OneToMany(targetEntity="AppBundle\Entity\ProductVariantImage", mappedBy="variant", cascade={"persist", "merge", "remove"})
     *
     * @JMS\Groups({"Detailed"})
     */
    protected $images;

    /**
     * @var \DateTime
     *
     * @ORM\Column(type="date", nullable=true)
     *
     * @JMS\Groups({"Detailed"})
     */
    protected $releasedAt;

    /**
     * @var string
     *
     * @ORM\Column(type="string", nullable=true)
     *
     * @JMS\Groups({"Detailed"})
     */
    protected $releasedAtPrecision;

    /**
     * @var string
     *
     * @ORM\Column(type="string", nullable=true)
     */
    protected $oldHref;

    /**
     * @var ProductBox|null
     *
     * @ORM\OneToOne(targetEntity="ProductBox", inversedBy="productVariant")
     */
    protected $box;

    /**
     * @var \Doctrine\Common\Collections\Collection
     *
     * @ORM\ManyToMany(targetEntity="AppBundle\Entity\Person", inversedBy="designerProducts", cascade={"persist", "merge"})
     * @ORM\JoinTable(
     *      name="jdj_designer_product_variant",
     *      joinColumns={@ORM\JoinColumn(name="productvariant_id", referencedColumnName="id")},
     *      inverseJoinColumns={@ORM\JoinColumn(name="person_id", referencedColumnName="id")}
     * )
     */
    protected $designers;

    /**
     * @var \Doctrine\Common\Collections\Collection
     *
     * @ORM\ManyToMany(targetEntity="AppBundle\Entity\Person", inversedBy="artistProducts", cascade={"persist", "merge"})
     * @ORM\JoinTable(name="jdj_artist_product_variant",
     *      joinColumns={@ORM\JoinColumn(name="productvariant_id", referencedColumnName="id")},
     *      inverseJoinColumns={@ORM\JoinColumn(name="person_id", referencedColumnName="id")}
     * )
     */
    protected $artists;

    /**
     * @var \Doctrine\Common\Collections\Collection
     *
     * @ORM\ManyToMany(targetEntity="AppBundle\Entity\Person", inversedBy="publisherProducts", cascade={"persist", "merge"})
     * @ORM\JoinTable(name="jdj_publisher_product_variant",
     *      joinColumns={@ORM\JoinColumn(name="productvariant_id", referencedColumnName="id")},
     *      inverseJoinColumns={@ORM\JoinColumn(name="person_id", referencedColumnName="id")}
     * )
     */
    protected $publishers;

    /**
     * ProductVariant constructor.
     */
    public function __construct()
    {
        parent::__construct();

        $this->images = new ArrayCollection();
        $this->designers = new ArrayCollection();
        $this->artists = new ArrayCollection();
        $this->publishers = new ArrayCollection();
        $this->code = uniqid('variant_');
    }

    /**
     * @return ProductVariantImage
     */
    public function getMainImage()
    {
        foreach ($this->images as $image) {
            if ($image->isMain()) {
                return $image;
            }
        }

        return null;
    }

    /**
     * @return ProductVariantImage
     */
    public function getMaterialImage()
    {
        foreach ($this->images as $image) {
            if ($image->isMaterial()) {
                return $image;
            }
        }

        return null;
    }

    /**
     * @param ProductVariantImage $image
     *
     * @return bool
     */
    public function hasImage(ProductVariantImage $image):bool
    {
        return $this->images->contains($image);
    }

    /**
     * @param ProductVariantImage $image
     *
     * @return $this
     */
    public function addImage(ProductVariantImage $image)
    {
        if (!$this->hasImage($image)) {
            $image->setVariant($this);
            $this->images->add($image);
        }

        return $this;
    }

    /**
     * @param ProductVariantImage $image
     *
     * @return $this
     */
    public function removeImage(ProductVariantImage $image)
    {
        $this->images->removeElement($image);

        return $this;
    }

    /**
     * @return ArrayCollection|ProductVariantImage[]
     */
    public function getImages()
    {
        return $this->images;
    }

    /**
     * @return \DateTime
     */
    public function getReleasedAt()
    {
        return $this->releasedAt;
    }

    /**
     * @param \DateTime $releasedAt
     *
     * @return $this
     */
    public function setReleasedAt($releasedAt)
    {
        $this->releasedAt = $releasedAt;

        return $this;
    }

    /**
     * @return string
     */
    public function getReleasedAtPrecision()
    {
        return $this->releasedAtPrecision;
    }

    /**
     * @param string $releasedAtPrecision
     *
     * @return $this
     */
    public function setReleasedAtPrecision($releasedAtPrecision)
    {
        $this->releasedAtPrecision = $releasedAtPrecision;

        return $this;
    }

    /**
     * @return string
     */
    public function getOldHref()
    {
        return $this->oldHref;
    }

    /**
     * @param string $oldHref
     *
     * @return $this
     */
    public function setOldHref($oldHref)
    {
        $this->oldHref = $oldHref;

        return $this;
    }

    /**
     * @return ProductBox|null
     */
    public function getBox()
    {
        return $this->box;
    }

    /**
     * @param ProductBox|null $box
     *
     * @return ProductVariant
     */
    public function setBox(ProductBox $box = null)
    {
        $this->box = $box;

        return $this;
    }

    /**
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getDesigners()
    {
        return $this->designers;
    }

    /**
     * @param Person $designer
     *
     * @return bool
     */
    public function hasDesigner(Person $designer):bool
    {
        return $this->designers->contains($designer);
    }

    /**
     * @param Person $designer
     *
     * @return $this
     */
    public function addDesigner(Person $designer)
    {
        if (!$this->hasDesigner($designer)) {
            $this->designers->add($designer);
        }

        return $this;
    }

    /**
     * @param Person $designer
     *
     * @return $this
     */
    public function removeDesigner($designer)
    {
        $this->designers->removeElement($designer);

        return $this;
    }

    /**
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getArtists()
    {
        return $this->artists;
    }

    /**
     * @param Person $artist
     *
     * @return bool
     */
    public function hasArtist(Person $artist):bool
    {
        return $this->artists->contains($artist);
    }

    /**
     * @param Person $artist
     *
     * @return $this
     */
    public function addArtist($artist)
    {
        if (!$this->hasArtist($artist)) {
            $this->artists->add($artist);
        }

        return $this;
    }

    /**
     * @param Person $artist
     *
     * @return $this
     */
    public function removeArtist($artist)
    {
        $this->artists->removeElement($artist);

        return $this;
    }

    /**
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getPublishers()
    {
        return $this->publishers;
    }

    /**
     * @param Person $publisher
     *
     * @return bool
     */
    public function hasPublisher(Person $publisher):bool
    {
        return $this->publishers->contains($publisher);
    }

    /**
     * @param Person $publisher
     *
     * @return $this
     */
    public function addPublisher($publisher)
    {
        if (!$this->publishers->contains($publisher)) {
            $this->publishers->add($publisher);
        }

        return $this;
    }

    /**
     * @param Person $publisher
     *
     * @return $this
     */
    public function removePublisher($publisher)
    {
        $this->publishers->removeElement($publisher);

        return $this;
    }

    /**
     * {@inheritdoc}
     */
    public function __toString()
    {
        $name = $this->getTranslation()->getName();

        return !empty($name) ? $name : "";
    }
}
