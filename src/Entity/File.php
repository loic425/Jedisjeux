<?php

/*
 * This file is part of jedisjeux.
 *
 * (c) Loïc Frémont
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
declare(strict_types=1);

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Knp\DoctrineBehaviors\Model\Timestampable\Timestampable;

/**
 * @ORM\MappedSuperclass
 */
abstract class File
{
    use IdentifiableTrait,
        Timestampable;

    /**
     * @var \SplFileInfo|null
     */
    protected $file;

    /**
     * @var string|null
     *
     * @ORM\Column(type="string")
     */
    private $path;

    /**
     * @return \SplFileInfo|null
     */
    public function getFile(): ?\SplFileInfo
    {
        return $this->file;
    }

    /**
     * @param \SplFileInfo|null $file
     *
     * @throws \Exception
     */
    public function setFile(?\SplFileInfo $file): void
    {
        $this->file = $file;

        if (null !== $file) {
            // It is required that at least one field changes if you are using doctrine
            // otherwise the event listeners won't be called and the file is lost
            $this->updatedAt = new \DateTimeImmutable();
        }
    }

    /**
     * @return string|null
     */
    public function getPath(): ?string
    {
        return $this->path;
    }

    /**
     * @param string|null $path
     */
    public function setPath(?string $path): void
    {
        $this->path = $path;
    }
}
