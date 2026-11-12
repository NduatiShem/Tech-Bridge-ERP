<?php

/** Extract hero photograph (woman + tablet) from approved pricing PNG — not circular. */

$source = __DIR__ . '/../design-references/Pricing/TechBridge ERP Pricing Plans Page.png';
$target = __DIR__ . '/../public/images/marketing/pricing/hero-photograph.png';

if (! extension_loaded('gd')) {
    fwrite(STDERR, "GD extension missing\n");
    exit(1);
}

$image = @imagecreatefrompng($source);
if ($image === false) {
    $image = @imagecreatefromjpeg(__DIR__ . '/../public/images/marketing/pricing/landing-reference.jpg');
}
if ($image === false) {
    fwrite(STDERR, "Could not load pricing reference\n");
    exit(2);
}

$width = imagesx($image);
$height = imagesy($image);

// Woman + tablet only (exclude benefits card on the right of comp).
$cropX = (int) round($width * 0.42);
$cropY = (int) round($height * 0.07);
$cropW = (int) round($width * 0.32);
$cropH = (int) round($height * 0.40);

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
