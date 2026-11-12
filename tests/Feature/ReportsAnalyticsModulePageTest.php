<?php

it('renders the reports and analytics module marketing page', function () {
    $response = $this->get('/modules/reports-analytics');

    $response->assertOk();
    $response->assertInertia(fn ($page) => $page->component('modules/ReportsAnalytics'));
});

it('exposes a branded document title for the reports and analytics page', function () {
    $response = $this->get('/modules/reports-analytics');

    $response->assertOk();
    $response->assertSee('TechBridge Solutions', false);
});
