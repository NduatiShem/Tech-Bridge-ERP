<?php

it('renders the solutions page', function () {
    $response = $this->get('/solutions');

    $response->assertOk();
    $response->assertInertia(fn ($page) => $page->component('Solutions'));
});

it('exposes a branded document title for the solutions page', function () {
    $response = $this->get('/solutions');

    $response->assertOk();
    $response->assertSee('TechBridge Solutions', false);
});
