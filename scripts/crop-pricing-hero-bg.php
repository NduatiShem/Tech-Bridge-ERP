<?php

$source = __DIR__ . '/../public/images/marketing/pricing/landing-reference.jpg';
$target = __DIR__ . '/../public/images/marketing/pricing/hero-background.jpg';

$image = imagecreatefromjpeg($source);
$width = imagesx($image);
$height = imagesy($image);

$cropH = (int) round($height * 0.42);
$cropped = imagecrop($image, ['x' => 0, 'y' => 0, 'width' => $width, 'height' => $cropH]);

imagejpeg($cropped, $target, 92);
imagedestroy($image);
imagedestroy($cropped);

echo "Wrote {$target}\n";
