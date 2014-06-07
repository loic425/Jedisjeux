<?php

namespace JDJ\ComptaBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * CptaTypeadresse
 */
class CptaTypeadresse
{
    /**
     * @var integer
     */
    private $id;

    /**
     * @var string
     */
    private $libelle;

    /**
     * @var \Doctrine\Common\Collections\Collection
     */
    private $idfacture;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->idfacture = new \Doctrine\Common\Collections\ArrayCollection();
    }

    /**
     * Get id
     *
     * @return integer 
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set libelle
     *
     * @param string $libelle
     * @return CptaTypeadresse
     */
    public function setLibelle($libelle)
    {
        $this->libelle = $libelle;

        return $this;
    }

    /**
     * Get libelle
     *
     * @return string 
     */
    public function getLibelle()
    {
        return $this->libelle;
    }

    /**
     * Add idfacture
     *
     * @param \JDJ\ComptaBundle\Entity\Facture $idfacture
     * @return CptaTypeadresse
     */
    public function addIdfacture(\JDJ\ComptaBundle\Entity\Facture $idfacture)
    {
        $this->idfacture[] = $idfacture;

        return $this;
    }

    /**
     * Remove idfacture
     *
     * @param \JDJ\ComptaBundle\Entity\Facture $idfacture
     */
    public function removeIdfacture(\JDJ\ComptaBundle\Entity\Facture $idfacture)
    {
        $this->idfacture->removeElement($idfacture);
    }

    /**
     * Get idfacture
     *
     * @return \Doctrine\Common\Collections\Collection 
     */
    public function getIdfacture()
    {
        return $this->idfacture;
    }

    /**
     * @return string
     */
    public function __toString(){
        return $this->getId().' - '.$this->getLibelle();
    }
}
