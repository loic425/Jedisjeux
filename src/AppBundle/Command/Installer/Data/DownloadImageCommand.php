<?php
/**
 * Created by PhpStorm.
 * User: loic_425
 * Date: 03/03/15
 * Time: 19:34
 */

namespace AppBundle\Command\Installer\Data;

use AppBundle\Entity\AbstractImage;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityRepository;
use Doctrine\ORM\QueryBuilder;
use JDJ\CoreBundle\Entity\Image;
use JDJ\CoreBundle\Service\ImageImportService;
use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;

class DownloadImageCommand extends ContainerAwareCommand
{
    /**
     * @var OutputInterface
     */
    protected $output;

    /**
     * {@inheritdoc}
     */
    protected function configure()
    {
        $this
            ->setName('app:images:download')
            ->setDescription('Download images');
    }

    /**
     * {@inheritdoc}
     */
    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $this->output = $output;

        /** @var EntityRepository $repository */
        $repository = $this->getContainer()->get('app.repository.product_variant_image');
        $queryBuilder = $repository->createQueryBuilder('o');
        $this->downloadImages($queryBuilder);

        /** @var EntityRepository $repository */
        $repository = $this->getContainer()->get('app.repository.game_play_image');
        $queryBuilder = $repository->createQueryBuilder('o');
        $this->downloadImages($queryBuilder);

        /** @var EntityRepository $repository */
        $repository = $this->getContainer()->get('app.repository.person_image');
        $queryBuilder = $repository->createQueryBuilder('o');
        $this->downloadImages($queryBuilder);

        /** @var EntityRepository $repository */
        $repository = $this->getContainer()->get('app.repository.article_image');
        $queryBuilder = $repository->createQueryBuilder('o');
        $this->downloadImages($queryBuilder);

        /** @var EntityRepository $repository */
        $repository = $this->getContainer()->get('app.repository.block_image');
        $queryBuilder = $repository->createQueryBuilder('o');
        $this->downloadImages($queryBuilder);

        /** @var EntityRepository $repository */
        $repository = $this->getContainer()->get('app.repository.product_box_image');
        $queryBuilder = $repository->createQueryBuilder('o');
        $this->downloadImages($queryBuilder, 'ludovirtuelle');
    }

    /**
     * @param QueryBuilder $queryBuilder
     * @param null|string $directory
     */
    protected function downloadImages(QueryBuilder $queryBuilder, $directory = null)
    {
        foreach ($queryBuilder->getQuery()->iterate() as $row) {
            /** @var AbstractImage $image */
            $image = $row[0];

            if (file_exists($image->getAbsolutePath())) {
                continue;
            }

            $this->output->writeln('Downloading image <comment>' . $this->getImageOriginalPath($image, $directory) . '</comment>');
            $this->downloadImage($image, $directory);


            $this->getManager()->detach($image);
            $this->getManager()->clear();
        }
    }

    /**
     * @return EntityManager|object
     */
    protected function getManager()
    {
        return $this->getContainer()->get('doctrine.orm.entity_manager');
    }

    /**
     * @param AbstractImage $image
     *
     * @return string
     */
    protected function getImageOriginalPath(AbstractImage $image, $directory = null)
    {
        if (null === $directory) {
            $directory = "800";
        }

        return "http://www.jedisjeux.net/img/" . $directory . "/" . $image->getPath();
    }

    /**
     * @param AbstractImage $image
     * @param null|string $directory
     */
    protected function downloadImage(AbstractImage $image, $directory = null)
    {
        file_put_contents($image->getAbsolutePath(), file_get_contents($this->getImageOriginalPath($image, $directory)));
    }
}