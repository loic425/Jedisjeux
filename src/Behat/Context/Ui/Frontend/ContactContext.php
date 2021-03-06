<?php

/*
 * This file is part of Jedisjeux.
 *
 * (c) Loïc Frémont
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

declare(strict_types=1);

namespace App\Behat\Context\Ui\Frontend;

use App\Behat\NotificationType;
use App\Behat\Page\Frontend\Contact\ContactPage;
use App\Behat\Service\NotificationCheckerInterface;
use Behat\Behat\Context\Context;
use FriendsOfBehat\PageObjectExtension\Page\PageInterface;
use Webmozart\Assert\Assert;

class ContactContext implements Context
{
    /**
     * @var ContactPage
     */
    private $contactPage;

    /**
     * @var NotificationCheckerInterface
     */
    private $notificationChecker;

    /**
     * @param ContactPage                  $contactPage
     * @param NotificationCheckerInterface $notificationChecker
     */
    public function __construct(
        ContactPage $contactPage,
        NotificationCheckerInterface $notificationChecker
    ) {
        $this->contactPage = $contactPage;
        $this->notificationChecker = $notificationChecker;
    }

    /**
     * @When I want to request contact
     */
    public function iWantToRequestContact()
    {
        $this->contactPage->open();
    }

    /**
     * @When I specify the first name as :firstName
     * @When I do not specify the first name
     */
    public function iSpecifyTheFirstName($firstName = null)
    {
        $this->contactPage->specifyFirstName($firstName);
    }

    /**
     * @When I specify the last name as :lastName
     * @When I do not specify the last name
     */
    public function iSpecifyTheFLastName($lastName = null)
    {
        $this->contactPage->specifyLastName($lastName);
    }

    /**
     * @When I specify the email as :email
     * @When I do not specify the email
     */
    public function iSpecifyTheEmail($email = null)
    {
        $this->contactPage->specifyEmail($email);
    }

    /**
     * @When I specify the message as :message
     * @When I do not specify the message
     */
    public function iSpecifyTheMessage($message = null)
    {
        $this->contactPage->specifyMessage($message);
    }

    /**
     * @When I send it
     * @When I try to send it
     */
    public function iSendIt()
    {
        $this->contactPage->send();
    }

    /**
     * @Then I should be notified that the contact request has been submitted successfully
     */
    public function iShouldBeNotifiedThatTheContactRequestHasBeenSubmittedSuccessfully()
    {
        $this->notificationChecker->checkNotification(
            'Your contact request has been submitted successfully.',
            NotificationType::success()
        );
    }

    /**
     * @Then /^I should be notified that the (email|message) is required$/
     */
    public function iShouldBeNotifiedThatElementIsRequired($element)
    {
        $this->assertFieldValidationMessage(
            $this->contactPage,
            $element,
            sprintf('Please enter your %s.', $element)
        );
    }

    /**
     * @Then I should be notified that the email is invalid
     */
    public function iShouldBeNotifiedThatEmailIsInvalid()
    {
        $this->assertFieldValidationMessage(
            $this->contactPage,
            'email',
            'This email is invalid.'
        );
    }

    /**
     * @Then I should be notified that a problem occurred while sending the contact request
     */
    public function iShouldBeNotifiedThatAProblemOccurredWhileSendingTheContactRequest()
    {
        $this->notificationChecker->checkNotification(
            'A problem occurred while sending the contact request. Please try again later.',
            NotificationType::failure()
        );
    }

    /**
     * @param PageInterface $page
     * @param string        $element
     * @param string        $expectedMessage
     */
    private function assertFieldValidationMessage(PageInterface $page, $element, $expectedMessage)
    {
        Assert::same($page->getValidationMessageFor($element), $expectedMessage);
    }
}
