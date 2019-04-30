<?php
/**
 * Created by PhpStorm.
 * User: loic
 * Date: 14/03/2016
 * Time: 13:07.
 */

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use EWZ\Bundle\RecaptchaBundle\Validator\Constraints as Recaptcha;
use JMS\Serializer\Annotation as JMS;
use Sylius\Component\Review\Model\ReviewerInterface;
use Sylius\Component\Customer\Model\Customer as BaseCustomer;
use Sylius\Component\User\Model\UserInterface;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @author Loïc Frémont <loic@mobizel.com>
 *
 * @ORM\Entity
 * @ORM\Table(name="sylius_customer")
 *
 * @JMS\ExclusionPolicy("all")
 */
class Customer extends BaseCustomer implements CustomerInterface, ReviewerInterface
{
    /**
     * @Recaptcha\IsTrue
     */
    public $recaptcha;

    /**
     * @var UserInterface
     *
     * @ORM\OneToOne(targetEntity="Sylius\Component\User\Model\UserInterface", mappedBy="customer", cascade={"persist"})
     *
     * @Assert\Valid()
     */
    private $user;

    /**
     * @var Avatar
     *
     * @ORM\ManyToOne(targetEntity="App\Entity\Avatar" , cascade={"persist"})
     * @JMS\Expose
     */
    private $avatar;

    /**
     * @var string
     *
     * @ORM\Column(type="string", nullable=true, unique=true)
     */
    private $code;

    /**
     * @var Collection|ProductSubscription[]
     *
     * @ORM\OneToMany(targetEntity="ProductSubscription", mappedBy="subscriber", cascade={"persist", "remove"}, orphanRemoval=true)
     */
    private $productSubscriptions;

    public function __construct()
    {
        parent::__construct();

        $this->productSubscriptions = new ArrayCollection();
    }


    /**
     * @return Avatar|null
     */
    public function getAvatar(): ?Avatar
    {
        return $this->avatar;
    }

    /**
     * @param Avatar $avatar
     */
    public function setAvatar(?Avatar $avatar): void
    {
        $this->avatar = $avatar;
    }

    /**
     * @return string|null
     */
    public function getCode(): ?string
    {
        return $this->code;
    }

    /**
     * @param string|null $code
     */
    public function setCode(?string $code): void
    {
        $this->code = $code;
    }

    /**
     * @return UserInterface|null
     */
    public function getUser(): ?UserInterface
    {
        return $this->user;
    }

    /**
     * @param UserInterface|null $user
     */
    public function setUser(?UserInterface $user): void
    {
        if ($this->user === $user) {
            return;
        }

        \Webmozart\Assert\Assert::nullOrIsInstanceOf($user, AppUserInterface::class);

        $previousUser = $this->user;
        $this->user = $user;

        if ($previousUser instanceof AppUserInterface) {
            $previousUser->setCustomer(null);
        }

        if ($user instanceof AppUserInterface) {
            $user->setCustomer($this);
        }
    }

    /**
     * @return ProductSubscription[]|Collection
     */
    public function getProductSubscriptions(): Collection
    {
        return $this->productSubscriptions;
    }

    /**
     * @param ProductSubscription $subscription
     *
     * @return bool
     */
    public function hasProductSubscription(ProductSubscription $subscription): bool
    {
        return $this->productSubscriptions->contains($subscription);
    }

    /**
     * @param ProductSubscription $subscription
     */
    public function addProductSubscription(ProductSubscription $subscription): void
    {
        if (!$this->hasProductSubscription($subscription)) {
            $this->productSubscriptions->add($subscription);
            $subscription->setSubscriber($this);
        }
    }

    /**
     * @param ProductSubscription $subscription
     */
    public function removeProductSubscription(ProductSubscription $subscription): void
    {
        $this->productSubscriptions->removeElement($subscription);
        $subscription->setSubscriber(null);
    }

    /**
     * @return string
     */
    public function __toString(): string
    {
        if (null === $user = $this->user) {
            return parent::__toString();
        }

        return $user->getUsername();
    }
}
