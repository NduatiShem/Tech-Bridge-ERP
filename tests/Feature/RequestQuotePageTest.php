<?php

it('renders the request a quote page', function () {
    $response = $this->get('/request-quote');

    $response->assertOk();
    $response->assertInertia(fn ($page) => $page->component('RequestQuote'));
});

it('exposes a branded document title for the request quote page', function () {
    $response = $this->get('/request-quote');

    $response->assertOk();
    $response->assertSee('TechBridge Solutions', false);
});
