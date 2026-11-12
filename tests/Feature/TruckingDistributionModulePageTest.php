<?php

it('renders the trucking and distribution module marketing page', function () {
    $response = $this->get('/modules/trucking-distribution');

    $response->assertOk();
    $response->assertInertia(fn ($page) => $page->component('modules/TruckingDistribution'));
});

it('exposes a branded document title for the trucking and distribution page', function () {
    $response = $this->get('/modules/trucking-distribution');

    $response->assertOk();
    $response->assertSee('TechBridge Solutions', false);
});
