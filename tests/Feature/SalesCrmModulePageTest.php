<?php

it('renders the sales and crm module marketing page', function () {
    $response = $this->get('/modules/sales-crm');

    $response->assertOk();
    $response->assertInertia(fn ($page) => $page->component('modules/SalesCrm'));
});

it('exposes a branded document title for the sales and crm page', function () {
    $response = $this->get('/modules/sales-crm');

    $response->assertOk();
    $response->assertSee('TechBridge Solutions', false);
});
