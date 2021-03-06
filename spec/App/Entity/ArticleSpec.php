<?php

namespace spec\App\Entity;

use App\Entity\Article;
use App\Entity\ArticleImage;
use App\Entity\ArticleReview;
use App\Entity\Block;
use App\Entity\Taxon;
use App\Entity\Topic;
use Doctrine\Common\Collections\Collection;
use PhpSpec\ObjectBehavior;
use Prophecy\Argument;
use Sylius\Component\Customer\Model\CustomerInterface;
use Sylius\Component\Product\Model\ProductInterface;
use Sylius\Component\Resource\Model\ResourceInterface;
use Sylius\Component\Taxonomy\Model\TaxonInterface;

class ArticleSpec extends ObjectBehavior
{
    function it_is_initializable()
    {
        $this->shouldHaveType(Article::class);
    }

    function it_implements_resource_interface()
    {
        $this->shouldImplement(ResourceInterface::class);
    }

    function its_code_is_mutable()
    {
        $this->setCode("ARTICLE1");
        $this->getCode()->shouldReturn("ARTICLE1");
    }

    function it_has_no_title_by_default()
    {
        $this->getTitle()->shouldReturn(null);
    }

    function its_title_is_mutable()
    {
        $this->setTitle("Awesome title");
        $this->getTitle()->shouldReturn("Awesome title");
    }

    function it_can_get_name()
    {
        $this->setTitle('Awesome title');
        $this->getName()->shouldReturn('Awesome title');
    }

    function its_slug_is_mutable()
    {
        $this->setSlug("awesome-title");
        $this->getSlug()->shouldReturn("awesome-title");
    }

    function its_not_publishable_by_default()
    {
        $this->isPublishable()->shouldReturn(false);
    }

    function it_can_be_publishable()
    {
        $this->setPublishable(false);
        $this->setPublishable(true);
        $this->isPublishable()->shouldReturn(true);
    }

    function it_has_no_publish_start_date_by_default()
    {
        $this->getPublishStartDate()->shouldReturn(null);
    }

    function its_publish_start_date_is_mutable(\DateTime $startDate)
    {
        $this->setPublishStartDate($startDate);
        $this->getPublishStartDate()->shouldReturn($startDate);
    }

    function it_has_no_publish_end_date_by_default()
    {
        $this->getPublishEndDate()->shouldReturn(null);
    }

    function its_publish_end_date_is_mutable(\DateTime $endDate)
    {
        $this->setPublishEndDate($endDate);
        $this->getPublishEndDate()->shouldReturn($endDate);
    }

    function its_status_is_new_by_default()
    {
        $this->getStatus()->shouldReturn(Article::STATUS_NEW);
    }

    function its_status_is_mutable()
    {
        $this->setStatus(Article::STATUS_PENDING_PUBLICATION);
        $this->getStatus()->shouldReturn(Article::STATUS_PENDING_PUBLICATION);
    }

    function its_short_description_is_mutable()
    {
        $this->setShortDescription("This is an awesome description.");
        $this->getShortDescription()->shouldReturn("This is an awesome description.");
    }

    function its_average_rating_is_mutable()
    {
        $this->setAverageRating(7.66);
        $this->getAverageRating()->shouldReturn(7.66);
    }

    function its_material_rating_is_mutable()
    {
        $this->setMaterialRating(7.66);
        $this->getMaterialRating()->shouldReturn(7.66);
    }

    function its_rules_rating_is_mutable()
    {
        $this->setRulesRating(7.66);
        $this->getRulesRating()->shouldReturn(7.66);
    }

    function its_lifetime_rating_is_mutable()
    {
        $this->setLifetimeRating(7.66);
        $this->getLifetimeRating()->shouldReturn(7.66);
    }

    function its_view_count_is_mutable()
    {
        $this->setViewCount(42);
        $this->getViewCount()->shouldReturn(42);
    }

    function it_is_not_a_review_article_by_default()
    {
        $this->shouldNotBeReviewArticle();
    }

    function it_could_be_a_review_article(TaxonInterface $taxon)
    {
        $taxon->getCode()->willReturn(Taxon::CODE_REVIEW_ARTICLE);
        $this->setMainTaxon($taxon);

        $this->shouldBeReviewArticle();
    }

    function it_is_not_a_report_article_by_default()
    {
        $this->shouldNotBeReportArticle();
    }

    function it_could_be_a_report_article(TaxonInterface $taxon)
    {
        $taxon->getCode()->willReturn(Taxon::CODE_REPORT_ARTICLE);
        $this->setMainTaxon($taxon);

        $this->shouldBeReportArticle();
    }

    function it_has_no_main_image_by_default()
    {
        $this->getMainImage()->shouldReturn(null);
    }

    function its_main_image_is_mutable(ArticleImage $image)
    {
        $this->setMainImage($image);
        $this->getMainImage()->shouldReturn($image);
    }

    function it_has_no_main_taxon_by_default()
    {
        $this->getMainTaxon()->shouldReturn(null);
    }

    function its_main_taxon_is_mutable(TaxonInterface $taxon)
    {
        $this->setMainTaxon($taxon);
        $this->getMainTaxon()->shouldReturn($taxon);
    }

    function it_has_no_topic_by_default()
    {
        $this->getTopic()->shouldReturn(null);
    }

    function its_topic_is_mutable(Topic $topic)
    {
        $topic->getArticle()->willReturn(null);

        $topic->setArticle($this)->shouldBeCalled();

        $this->setTopic($topic);
        $this->getTopic()->shouldReturn($topic);
    }

    function it_initializes_blocks_collection_by_default()
    {
        $this->getBlocks()->shouldHaveType(Collection::class);
    }

    function it_adds_block(Block $block)
    {
        $block->setArticle($this)->shouldBeCalled();

        $this->addBlock($block);
        $this->hasBlock($block)->shouldReturn(true);
    }

    function it_removes_block(Block $block)
    {
        $this->addBlock($block);
        $this->removeBlock($block);
        $this->hasBlock($block)->shouldReturn(false);
    }

    function it_initializes_reviews_collection_by_default(): void
    {
        $this->getReviews()->shouldHaveType(Collection::class);
    }

    function it_adds_review(ArticleReview $review)
    {
        $review->setReviewSubject($this)->shouldBeCalled();

        $this->addReview($review);
        $this->hasReview($review)->shouldReturn(true);
    }

    function it_removes_review(ArticleReview $rev)
    {
        $this->addReview($rev);
        $this->removeReview($rev);
        $this->hasReview($rev)->shouldReturn(false);
    }

    function its_product_is_mutable(ProductInterface $product)
    {
        $this->setProduct($product);
        $this->getProduct()->shouldReturn($product);
    }

    function its_author_is_mutable(CustomerInterface $author)
    {
        $this->setAuthor($author);
        $this->getAuthor()->shouldReturn($author);
    }
}
