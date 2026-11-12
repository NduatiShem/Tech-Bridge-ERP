<?php

it('renders the pricing and plans page', function () {
    $response = $this->get('/pricing');

    $response->assertOk();
    $response->assertInertia(fn ($page) => $page->component('Pricing'));
});

it('exposes a branded document title for the pricing page', function () {
    $response = $this->get('/pricing');

    $response->assertOk();
    $response->assertSee('TechBridge Solutions', false);
});
