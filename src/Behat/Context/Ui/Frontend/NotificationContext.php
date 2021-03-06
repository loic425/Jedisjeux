<?php

/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Behat\Context\Ui\Frontend;

use App\Behat\NotificationType;
use App\Behat\Service\NotificationCheckerInterface;
use Behat\Behat\Context\Context;

/**
 * @author Arkadiusz Krakowiak <arkadiusz.krakowiak@lakion.com>
 */
final class NotificationContext implements Context
{
    /**
     * @var NotificationCheckerInterface
     */
    private $notificationChecker;

    /**
     * @param NotificationCheckerInterface $notificationChecker
     */
    public function __construct(NotificationCheckerInterface $notificationChecker)
    {
        $this->notificationChecker = $notificationChecker;
    }

    /**
     * @Then I should be notified that it has been successfully created
     */
    public function iShouldBeNotifiedItHasBeenSuccessfullyCreated()
    {
        $this->notificationChecker->checkNotification('has been successfully created.', NotificationType::success());
    }

    /**
     * @Then I should be notified that it has been successfully edited
     */
    public function iShouldBeNotifiedThatItHasBeenSuccessfullyEdited()
    {
        $this->notificationChecker->checkNotification('has been successfully updated.', NotificationType::success());
    }

    /**
     * @Then I should be notified that it has been successfully deleted
     */
    public function iShouldBeNotifiedThatItHasBeenSuccessfullyDeleted()
    {
        $this->notificationChecker->checkNotification('has been successfully deleted.', NotificationType::success());
    }
}
