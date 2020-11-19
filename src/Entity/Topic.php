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

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use JMS\Serializer\Annotation as JMS;
use Knp\DoctrineBehaviors\Model\Timestampable\Timestampable;
use Sylius\Component\Resource\Model\ResourceInterface;
use Sylius\Component\Taxonomy\Model\TaxonInterface;
use Sylius\Component\Customer\Model\CustomerInterface;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @author Loïc Frémont <lc.fremont@gmail.com>
 *
 * @ORM\Entity
 * @ORM\Table("jdj_topic")
 *
 * @JMS\ExclusionPolicy("all")
 */
class Topic implements ResourceInterface
{
    use IdentifiableTrait,
        Timestampable;

    /**
     * @var string
     *
     * @ORM\Column(type="string", unique=true)
     */
    protected $code;

    /**
     * @var string
     *
     * @ORM\Column(type="string")
     *
     * @Assert\NotBlank()
     *
     * @JMS\Expose
     */
    protected $title;

    /**
     * @var CustomerInterface
     *
     * @ORM\ManyToOne(targetEntity="Sylius\Component\Customer\Model\CustomerInterface")
     * @ORM\JoinColumn(nullable=false)
     */
    protected $author;

    /**
     * @var Post
     *
     * @ORM\OneToOne(targetEntity="App\Entity\Post", inversedBy="parent", cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=true, onDelete="SET NULL")
     *
     * @Assert\Valid()
     */
    protected $mainPost;

    /**
     * @var ArrayCollection
     *
     * @ORM\OneToMany(targetEntity="App\Entity\Post", mappedBy="topic", cascade={"persist", "remove"},  orphanRemoval=true)
     */
    protected $posts;

    /**
     * @var int
     *
     * @ORM\Column(type="integer")
     * @JMS\Expose
     */
    protected $postCount;

    /**
     * @var int
     *
     * @ORM\Column(type="integer")
     */
    protected $viewCount = 0;

    /**
     * @var \DateTime
     *
     * @ORM\Column(type="datetime", nullable=true)
     */
    protected $lastPostCreatedAt;

    /**
     * @var Taxon
     *
     * @ORM\ManyToOne(targetEntity="Sylius\Component\Taxonomy\Model\TaxonInterface")
     */
    protected $mainTaxon;

    /**
     * @var GamePlay
     *
     * @ORM\OneToOne(targetEntity="App\Entity\GamePlay", mappedBy="topic")
     */
    protected $gamePlay;

    /**
     * @var Article
     *
     * @ORM\OneToOne(targetEntity="App\Entity\Article", mappedBy="topic")
     */
    protected $article;

    /**
     * @var ArrayCollection|CustomerInterface[]
     *
     * @ORM\ManyToMany(targetEntity="Sylius\Component\Customer\Model\CustomerInterface")
     * @ORM\JoinTable(name="jdj_topic_follower",
     *      inverseJoinColumns={@ORM\JoinColumn(name="customerinterface_id", referencedColumnName="id")}
     * )
     */
    protected $followers;

    /**
     * Topic constructor.
     */
    public function __construct()
    {
        $this->code = uniqid('topic_');
        $this->posts = new ArrayCollection();
        $this->followers = new ArrayCollection();
        $this->postCount = 0;
    }

    public function getCode(): ?string
    {
        return $this->code;
    }

    public function setCode(?string $code): void
    {
        $this->code = $code;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(?string $title): void
    {
        $this->title = $title;
    }

    public function getPostCount(): int
    {
        return $this->postCount;
    }

    public function setPostCount(int $postCount): void
    {
        $this->postCount = $postCount;
    }

    public function getViewCount(): int
    {
        return $this->viewCount;
    }

    public function setViewCount(int $viewCount): void
    {
        $this->viewCount = $viewCount;
    }

    public function getLastPostCreatedAt(): ?\DateTime
    {
        return $this->lastPostCreatedAt;
    }

    public function setLastPostCreatedAt(?\DateTime $lastPostCreatedAt): void
    {
        $this->lastPostCreatedAt = $lastPostCreatedAt;
    }

    public function getFirstPost(): ?Post
    {
        $firstPost = $this->posts->first();

        return $firstPost ?: null;
    }

    public function getLastPost(): ?Post
    {
        $lastPost = $this->posts->last();

        return $lastPost ?: null;
    }

    /**
     * @return CustomerInterface|Customer|null
     */
    public function getAuthor(): ?CustomerInterface
    {
        return $this->author;
    }

    public function setAuthor(?CustomerInterface $author): void
    {
        $this->author = $author;
    }

    public function getMainPost(): ?Post
    {
        return $this->mainPost;
    }

    public function setMainPost(?Post $mainPost): void
    {
        $this->mainPost = $mainPost;
    }

    /**
     * @return Post[]|Collection
     */
    public function getPosts(): Collection
    {
        return $this->posts;
    }

    public function addPost(Post $post): void
    {
        if (!$this->hasPost($post)) {
            $this->posts->add($post);
            $post->setTopic($this);
        }
    }

    public function removePost(Post $post): void
    {
        $this->posts->removeElement($post);
        $post->setTopic(null);
    }

    public function hasPost(Post $post): bool
    {
        return $this->posts->contains($post);
    }

    /**
     * @return Taxon|TaxonInterface|null
     */
    public function getMainTaxon(): ?TaxonInterface
    {
        return $this->mainTaxon;
    }

    public function setMainTaxon(?TaxonInterface $mainTaxon): void
    {
        $this->mainTaxon = $mainTaxon;
    }

    public function getGamePlay(): ?GamePlay
    {
        return $this->gamePlay;
    }

    public function setGamePlay(?GamePlay $gamePlay): void
    {
        $this->gamePlay = $gamePlay;
    }

    public function getArticle(): ?Article
    {
        return $this->article;
    }

    public function setArticle(?Article $article): void
    {
        $this->article = $article;
    }

    /**
     * @return Collection|CustomerInterface[]
     */
    public function getFollowers(): Collection
    {
        return $this->followers;
    }

    public function addFollower(CustomerInterface $follower): void
    {
        if (!$this->hasFollower($follower)) {
            $this->followers->add($follower);
        }
    }

    public function removeFollower(CustomerInterface $follower): void
    {
        $this->followers->removeElement($follower);
    }

    public function hasFollower(CustomerInterface $follower): bool
    {
        return $this->followers->contains($follower);
    }

    /**
     * @param bool $nullForFirstPage
     */
    public function getLastPageNumber($nullForFirstPage = true): ?int
    {
        $pageNumber = ceil($this->postCount / 10);

        if ($nullForFirstPage) {
            return $pageNumber > 1 ? $pageNumber : null;
        }

        return $pageNumber;
    }

    public function __toString(): string
    {
        return $this->getTitle();
    }
}
