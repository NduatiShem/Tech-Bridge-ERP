<?php

$source = __DIR__ . '/../public/images/marketing/pricing/landing-reference.jpg';
$target = __DIR__ . '/../public/images/marketing/pricing/hero-visual-composite.png';

if (! extension_loaded('gd')) {
    fwrite(STDERR, "GD extension missing\n");
    exit(1);
}

$image = @imagecreatefromjpeg($source);
if ($image === false) {
    fwrite(STDERR, "Could not load {$source}\n");
    exit(2);
}

$width = imagesx($image);
$height = imagesy($image);

// Right-column cluster from full-page comp (person + card + arcs).
$cropX = (int) round($width * 0.52);
$cropY = (int) round($height * 0.07);
$cropW = (int) round($width * 0.44);
$cropH = (int) round($height * 0.36);

$cropped = imagecrop($image, [
    'x' => $cropX,
    'y' => $cropY,
    'width' => $cropW,
    'height' => $cropH,
]);

if ($cropped === false) {
    fwrite(STDERR, "Crop failed\n");
    exit(3);
}

imagepng($cropped, $target);
imagedestroy($image);
imagedestroy($cropped);

echo "Wrote {$target} ({$cropW}x{$cropH} from {$width}x{$height})\n";
