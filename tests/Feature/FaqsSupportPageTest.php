<?php

it('renders the faqs and support page', function () {
    $response = $this->get('/faqs');

    $response->assertOk();
    $response->assertInertia(fn ($page) => $page->component('FaqsSupport'));
});

it('exposes a branded document title for the faqs page', function () {
    $response = $this->get('/faqs');

    $response->assertOk();
    $response->assertSee('TechBridge Solutions', false);
});
