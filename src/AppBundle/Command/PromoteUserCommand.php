<?php

/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace AppBundle\Command;

use Sylius\Component\User\Model\UserInterface;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;

/**
 * @author Loïc Frémont <loic@mobizel.com>
 */
class PromoteUserCommand extends AbstractRoleCommand
{
    /**
     * {@inheritdoc}
     */
    protected function configure()
    {
        $this
            ->setName('sylius:user:promote')
            ->setDescription('Promotes a user by adding roles.')
            ->setDefinition(array(
                new InputArgument('email', InputArgument::REQUIRED, 'Email'),
                new InputArgument('roles', InputArgument::IS_ARRAY, 'Security roles'),
                new InputOption('super-admin', null, InputOption::VALUE_NONE, 'Set the user as a super admin'),
            ))
            ->setHelp(<<<EOT
The <info>sylius:user:promote</info> command promotes a user by adding security roles

  <info>php app/console fos:user:promote matthieu@email.com</info>
EOT
            );
    }

    /**
     * {@inheritdoc}
     */
    protected function executeRoleCommand(OutputInterface $output, UserInterface $user, array $securityRoles)
    {
        $error = false;

        foreach ($securityRoles as $securityRole) {
            if ($user->hasRole($securityRole)) {
                $output->writeln(sprintf('<error>User "%s" did already have "%s" security role.</error>', (string)$user, $securityRole));
                $error = true;
                continue;
            }

            $user->addRole($securityRole);
            $output->writeln(sprintf('Scurity role <comment>%s</comment> has been added to user <comment>%s</comment>', $securityRole, (string)$user));
        }

        if (!$error) {
            $this->getEntityManager()->flush();
        }
    }
}
