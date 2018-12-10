<?php declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20181207160714 extends AbstractMigration
{
    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs

        $this->addSql('ALTER TABLE jdj_product_image ADD product_id INT DEFAULT NULL');
        $this->addSql('CREATE INDEX IDX_5AEDC6F54584665A ON jdj_product_image (product_id)');
        $this->addSql('ALTER TABLE jdj_product_image DROP FOREIGN KEY FK_C6B77D5D3B69A9AF');
        $this->addSql('ALTER TABLE jdj_product_image DROP INDEX idx_c6b77d5d3b69a9af');
        $this->addSql('ALTER TABLE jdj_product_image ADD CONSTRAINT FK_5AEDC6F54584665A FOREIGN KEY (product_id) REFERENCES sylius_product (id)');
        $this->addSql('ALTER TABLE jdj_product_image ADD CONSTRAINT FK_5AEDC6F53B69A9AF FOREIGN KEY (variant_id) REFERENCES sylius_product_variant (id)');
        $this->addSql('CREATE INDEX IDX_5AEDC6F53B69A9AF ON jdj_product_image (variant_id)');
        $this->addSql('UPDATE jdj_product_image image INNER JOIN sylius_product_variant spv on image.variant_id = spv.id SET image.product_id = spv.product_id');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE jdj_product_image DROP FOREIGN KEY FK_5AEDC6F53B69A9AF');
        $this->addSql('DROP INDEX IDX_5AEDC6F53B69A9AF ON jdj_product_image');
        $this->addSql('UPDATE jdj_product_image image SET image.product_id = null');
    }
}
