<?php

it('renders the asset management module marketing page', function () {
    $response = $this->get('/modules/asset-management');

    $response->assertOk();
    $response->assertInertia(fn ($page) => $page->component('modules/AssetManagement'));
});

it('exposes a branded document title for the asset management page', function () {
    $response = $this->get('/modules/asset-management');

    $response->assertOk();
    $response->assertSee('TechBridge Solutions', false);
});
