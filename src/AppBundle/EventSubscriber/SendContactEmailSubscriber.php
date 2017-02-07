<?php

/**
 * This file is part of Jedisjeux
 *
 * (c) Loïc Frémont
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace AppBundle\EventSubscriber;

use AppBundle\Emails;
use AppBundle\Entity\ContactRequest;
use AppBundle\Event\ContactRequestEvents;
use Sylius\Component\Mailer\Sender\SenderInterface;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\EventDispatcher\GenericEvent;

/**
 * @author Loïc Frémont <loic@mobizel.com>
 */
class SendContactEmailSubscriber implements EventSubscriberInterface
{
    /**
     * @var SenderInterface
     */
    protected $sender;

    /**
     * @param SenderInterface $sender
     */
    public function __construct(SenderInterface $sender)
    {
        $this->sender = $sender;
    }

    /**
     * {@inheritdoc}
     */
    public static function getSubscribedEvents()
    {
        return array(
            ContactRequestEvents::POST_CREATE => 'onPostCreate',
        );
    }

    /**
     * @param GenericEvent $event
     */
    public function onPostCreate(GenericEvent $event)
    {
        /** @var ContactRequest $contactRequest */
        $contactRequest = $event->getSubject();

        /**
         * TODO send email at jedisjeux@jedisjeux.net and a copy to customer ?
         */
        $this->sender->send(Emails::CONTACT_REQUEST, array($contactRequest->getEmail()), array(
            'contact_request' => $contactRequest,
        ));
    }
}