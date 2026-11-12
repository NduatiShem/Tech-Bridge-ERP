<?php

it('renders the all modules overview page', function () {
    $response = $this->get('/modules');

    $response->assertOk();
    $response->assertInertia(fn ($page) => $page->component('modules/Index'));
});

it('uses a branded page title via the layout', function () {
    $response = $this->get('/modules');

    $response->assertOk();
    $response->assertSee('TechBridge Solutions', false);
});
