<?php

it('renders the procurement module marketing page', function () {
    $response = $this->get('/modules/procurement');

    $response->assertOk();
    $response->assertInertia(fn ($page) => $page->component('modules/Procurement'));
});

it('exposes a branded document title for the procurement page', function () {
    $response = $this->get('/modules/procurement');

    $response->assertOk();
    $response->assertSee('TechBridge Solutions', false);
});
