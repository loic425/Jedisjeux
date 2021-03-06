<?php

namespace spec\App\EventSubscriber;

use App\AppEvents;
use App\Entity\Post;
use App\Entity\Topic;
use App\EventSubscriber\CalculatePostCountByTopicSubscriber;
use App\Updater\PostCountByTopicUpdater;
use Doctrine\ORM\EntityManagerInterface;
use PhpSpec\ObjectBehavior;
use Prophecy\Argument;
use Symfony\Component\EventDispatcher\GenericEvent;

class CalculatePostCountByTopicSubscriberSpec extends ObjectBehavior
{
    function let(PostCountByTopicUpdater $updater, EntityManagerInterface $entityManager)
    {
        $this->beConstructedWith($updater, $entityManager);
    }

    function it_is_initializable()
    {
        $this->shouldHaveType(CalculatePostCountByTopicSubscriber::class);
    }

    function it_subscribes_to_post_create_event()
    {
        $this::getSubscribedEvents()->shouldReturn([
            AppEvents::POST_POST_CREATE => 'onPostCreate',
        ]);
    }

    function it_updates_topic(
        GenericEvent $event,
        PostCountByTopicUpdater $updater,
        Post $post,
        Topic $topic,
        EntityManagerInterface $entityManager
    ): void {
        $event->getSubject()->willReturn($post);
        $post->getTopic()->willReturn($topic);

        $updater->update($topic)->shouldBeCalled();
        $entityManager->flush()->shouldBeCalled();

        $this->onPostCreate($event);
    }

    function it_does_not_update_when_post_has_no_topic(
        GenericEvent $event,
        PostCountByTopicUpdater $updater,
        Post $post
    ): void {
        $event->getSubject()->willReturn($post);
        $post->getTopic()->willReturn(null);

        $updater->update(Argument::type(Topic::class))->shouldNotBeCalled();

        $this->onPostCreate($event);
    }
}
