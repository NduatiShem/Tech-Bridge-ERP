<?php

it('renders the inventory module marketing page', function () {
    $response = $this->get('/modules/inventory');

    $response->assertOk();
    $response->assertInertia(fn ($page) => $page->component('modules/Inventory'));
});

it('exposes a branded document title for the inventory page', function () {
    $response = $this->get('/modules/inventory');

    $response->assertOk();
    $response->assertSee('TechBridge Solutions', false);
});
