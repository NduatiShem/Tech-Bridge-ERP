<?php

it('renders the contact us page', function () {
    $response = $this->get('/contact');

    $response->assertOk();
    $response->assertInertia(fn ($page) => $page->component('ContactUs'));
});

it('exposes a branded document title for the contact page', function () {
    $response = $this->get('/contact');

    $response->assertOk();
    $response->assertSee('TechBridge Solutions', false);
});
