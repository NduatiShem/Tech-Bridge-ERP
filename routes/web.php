<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

require __DIR__.'/website.php';

Route::middleware(['auth'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
