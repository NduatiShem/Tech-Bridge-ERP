<?php

it('renders the finance module marketing page', function () {
    $response = $this->get('/modules/finance');

    $response->assertOk();
    $response->assertInertia(fn ($page) => $page->component('modules/Finance'));
});

it('exposes a branded document title for the finance page', function () {
    $response = $this->get('/modules/finance');

    $response->assertOk();
    $response->assertSee('TechBridge Solutions', false);
});
