<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



Route::get('/', function () {
    return Inertia::render('Dashboard', [
        'canLogin' => route::has('login'),
        'canRegister' => route::has('register'),
    ]);
});

// ->middleware(['auth', 'verified'])->name('dashboard')

Route::get('/course', function () {
    return Inertia::render('Hal/Course');
});

require __DIR__.'/auth.php';
