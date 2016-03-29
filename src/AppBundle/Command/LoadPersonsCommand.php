<?php
/**
 * Created by PhpStorm.
 * User: loic
 * Date: 22/12/2015
 * Time: 13:13
 */

namespace AppBundle\Command;

use Doctrine\ORM\EntityRepository;
use JDJ\LudographieBundle\Entity\Personne;
use Sylius\Component\Resource\Factory\Factory;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;


/**
 * @author Loïc Frémont <loic@mobizel.com>
 */
class LoadPersonsCommand extends LoadCommand
{
    protected $writeEntityInOutput = true;

    /**
     * @inheritdoc
     */
    protected function configure()
    {
        $this
            ->setName('app:persons:load')
            ->setDescription('Load persons');
    }

    public function getRows()
    {
        $query = <<<EOM
select      old.id,
            case
                when old.nom_famille = '' then old.nom
                else old.nom_famille
            end as lastName,
            old.prenom as firstName,
            old.siteweb as website,
            old.description as description,
            country.id as country_id
from        jedisjeux.jdj_personnes old
left join   jdj_country country
                on CONVERT(country.name USING utf8) = CONVERT(old.nationnalite USING utf8)
where       old.id <>14
and         (old.nom_famille <> '' or old.nom <> '')
order by    old.id
EOM;

        return $this->getDatabaseConnection()->fetchAll($query);
    }

    /**
     * @inheritdoc
     */
    public function filterData(array $data)
    {
//        $data['country'] = !empty($data['country_id']) ? $this
//            ->getEntityManager()
//            ->getRepository('AppBundle:Country')
//            ->findOneBy(array('id' => $data['country_id'])) : null;

        return parent::filterData($data);
    }

    /**
     * @inheritdoc
     */
    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $this->output = $output;
        $output->writeln("<comment>Load persons</comment>");

        parent::execute($input, $output);
    }

    public function createEntityNewInstance()
    {
        return $this->getFactory()->createNew();
    }

    /**
     * @return Factory
     */
    public function getFactory()
    {
        return $this->getContainer()->get('app.factory.person');
    }

    public function getRepository()
    {
        return $this->getContainer()->get('app.repository.person');
    }

    public function getTableName()
    {
        return "jdj_person";
    }
}