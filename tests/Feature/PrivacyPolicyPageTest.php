<?php

it('renders the privacy policy page', function () {
    $response = $this->get('/privacy-policy');

    $response->assertOk();
    $response->assertInertia(fn ($page) => $page->component('PrivacyPolicy'));
});

it('exposes a branded document title for the privacy page', function () {
    $response = $this->get('/privacy-policy');

    $response->assertOk();
    $response->assertSee('TechBridge Solutions', false);
});
