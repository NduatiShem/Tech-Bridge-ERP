<?php

it('renders the hr and payroll module marketing page', function () {
    $response = $this->get('/modules/hr-payroll');

    $response->assertOk();
    $response->assertInertia(fn ($page) => $page->component('modules/HrPayroll'));
});

it('exposes a branded document title for the hr payroll page', function () {
    $response = $this->get('/modules/hr-payroll');

    $response->assertOk();
    $response->assertSee('TechBridge Solutions', false);
});
