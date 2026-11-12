<?php

it('renders the manufacturing module marketing page', function () {
    $response = $this->get('/modules/manufacturing');

    $response->assertOk();
    $response->assertInertia(fn ($page) => $page->component('modules/Manufacturing'));
});

it('exposes a branded document title for the manufacturing page', function () {
    $response = $this->get('/modules/manufacturing');

    $response->assertOk();
    $response->assertSee('TechBridge Solutions', false);
    $response->assertDontSee('- Laravel', false);
});

it('returns placeholder for unimplemented module slugs', function () {
    $response = $this->get('/modules/not-implemented-slug');

    $response->assertOk();
    $response->assertInertia(fn ($page) => $page->component('Placeholder'));
});
