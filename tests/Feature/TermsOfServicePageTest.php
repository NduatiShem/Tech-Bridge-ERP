<?php

it('renders the terms of service page', function () {
    $response = $this->get('/terms-of-service');

    $response->assertOk();
    $response->assertInertia(fn ($page) => $page->component('TermsOfService'));
});

it('exposes a branded document title for the terms page', function () {
    $response = $this->get('/terms-of-service');

    $response->assertOk();
    $response->assertSee('TechBridge Solutions', false);
});
