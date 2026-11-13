<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', fn () => Inertia::render('Home'))->name('home');

Route::get('/modules', fn () => Inertia::render('modules/Index'))->name('modules.index');

Route::get('/modules/{slug}', function (string $slug) {
    $pages = [
        'hr-payroll' => 'modules/HrPayroll',
        'inventory' => 'modules/Inventory',
        'manufacturing' => 'modules/Manufacturing',
        'procurement' => 'modules/Procurement',
        'finance' => 'modules/Finance',
        'asset-management' => 'modules/AssetManagement',
        'sales-crm' => 'modules/SalesCrm',
        'reports-analytics' => 'modules/ReportsAnalytics',
        'trucking-distribution' => 'modules/TruckingDistribution',
    ];

    if (isset($pages[$slug])) {
        return Inertia::render($pages[$slug]);
    }

    return Inertia::render('Placeholder', ['pageTitle' => 'Module: '.str($slug)->headline()]);
})->name('modules.show');

Route::get('/solutions', fn () => Inertia::render('Placeholder', ['pageTitle' => 'Solutions & Industries']))->name('solutions');
Route::get('/pricing', fn () => Inertia::render('Pricing'))->name('pricing');
Route::get('/about', fn () => Inertia::render('AboutUs'))->name('about');
Route::get('/resources', fn () => Inertia::render('Placeholder', ['pageTitle' => 'Resources & Blog']))->name('resources');
Route::get('/blog', fn () => Inertia::render('Placeholder', ['pageTitle' => 'Blog']))->name('blog');
Route::get('/documentation', fn () => Inertia::render('Placeholder', ['pageTitle' => 'Documentation']))->name('documentation');
Route::get('/contact', fn () => Inertia::render('Placeholder', ['pageTitle' => 'Contact Us']))->name('contact');
Route::get('/book-demo', fn () => Inertia::render('Placeholder', ['pageTitle' => 'Book a Demo']))->name('book-demo');
Route::get('/request-quote', fn () => Inertia::render('Placeholder', ['pageTitle' => 'Request a Quote']))->name('request-quote');
Route::get('/why-techbridge', fn () => Inertia::render('Placeholder', ['pageTitle' => 'Why TechBridge']))->name('why-techbridge');
Route::get('/faqs', fn () => Inertia::render('FaqsSupport'))->name('faqs');
Route::get('/case-studies', fn () => Inertia::render('Placeholder', ['pageTitle' => 'Case Studies']))->name('case-studies');
Route::get('/privacy-policy', fn () => Inertia::render('Placeholder', ['pageTitle' => 'Privacy Policy']))->name('privacy-policy');
Route::get('/terms-of-service', fn () => Inertia::render('Placeholder', ['pageTitle' => 'Terms of Service']))->name('terms-of-service');
