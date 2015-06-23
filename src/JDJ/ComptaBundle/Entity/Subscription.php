<?php
/**
 * Created by PhpStorm.
 * User: loic_fremont
 * Date: 18/05/2015
 * Time: 15:53
 */

namespace JDJ\ComptaBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;

/**
 * @author Loïc Frémont <lc.fremont@gmail.com>
 *
 * @ORM\Entity(repositoryClass="JDJ\ComptaBundle\Entity\Repository\SubscriptionRepository")
 * @ORM\Table(name="cpta_subscription")
 */
class Subscription 
{
    /**
     * @var integer
     *
     * @ORM\Column(type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var \DateTime
     *
     * @Gedmo\Timestampable(on="create")
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @var \DateTime
     *
     * @ORM\Column(type="datetime")
     */
    private $startAt;

    /**
     * @var \DateTime
     *
     * @ORM\Column(type="datetime")
     */
    private $endAt;

    /**
     * @var bool
     *
     * @ORM\Column(type="boolean")
     */
    private $toBeRenewed;

    /**
     * @var Bill
     *
     * @ORM\ManyToOne(targetEntity="Bill", inversedBy="subscriptions")
     * @ORM\JoinColumn(nullable=false)
     */
    private $bill;

    /**
     * @var Product
     *
     * @ORM\ManyToOne(targetEntity="Product")
     * @ORM\JoinColumn(nullable=false)
     */
    private $product;

    /**
     * @var Customer
     *
     * @ORM\ManyToOne(targetEntity="Customer", inversedBy="subscriptions")
     * @ORM\JoinColumn(nullable=false)
     */
    private $customer;

    /**
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param int $id
     * @return $this
     */
    public function setId($id)
    {
        $this->id = $id;

        return $this;
    }

    /**
     * @return \DateTime
     */
    public function getCreatedAt()
    {
        return $this->createdAt;
    }

    /**
     * @param \DateTime $createdAt
     * @return $this
     */
    public function setCreatedAt(\DateTime $createdAt = null)
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    /**
     * @return \DateTime
     */
    public function getStartAt()
    {
        return $this->startAt;
    }

    /**
     * @param \DateTime $startAt
     * @return $this
     */
    public function setStartAt(\DateTime $startAt = null)
    {
    $this->startAt = $startAt;

    return $this;
    }

    /**
     * @return \DateTime
     */
    public function getEndAt()
    {
        return $this->endAt;
    }

    /**
     * @param \DateTime $endAt
     * @return $this
     */
    public function setEndAt(\DateTime $endAt = null)
    {
        $this->endAt = $endAt;

        return $this;
    }

    /**
     * @return boolean
     */
    public function isToBeRenewed()
    {
        return $this->toBeRenewed;
    }

    /**
     * @param boolean $toBeRenewed
     * @return $this
     */
    public function setToBeRenewed($toBeRenewed)
    {
        $this->toBeRenewed = $toBeRenewed;

        return $this;
    }

    /**
     * @return Bill
     */
    public function getBill()
    {
        return $this->bill;
    }

    /**
     * @param Bill $bill
     * @return $this
     */
    public function setBill(Bill $bill = null)
    {
        $this->bill = $bill;

        return $this;
    }

    /**
     * @return Product
     */
    public function getProduct()
    {
        return $this->product;
    }

    /**
     * @param Product $product
     * @return $this
     */
    public function setProduct(Product $product = null)
    {
        $this->product = $product;

        return $this;
    }

    /**
     * @return Customer
     */
    public function getCustomer()
    {
        return $this->customer;
    }

    /**
     * @param Customer $customer
     * @return $this
     */
    public function setCustomer(Customer $customer = null)
    {
        $this->customer = $customer;

        return $this;
    }
}