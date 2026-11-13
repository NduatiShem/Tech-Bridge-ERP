<?php

it('renders the about us page', function () {
    $response = $this->get('/about');

    $response->assertOk();
    $response->assertInertia(fn ($page) => $page->component('AboutUs'));
});

it('exposes a branded document title for the about page', function () {
    $response = $this->get('/about');

    $response->assertOk();
    $response->assertSee('TechBridge Solutions', false);
});
