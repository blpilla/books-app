<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\WeatherController;

// Rotas de Autenticação
Route::post('/auth/login', [AuthController::class, 'login']);
Route::post('/auth/register', [AuthController::class, 'register']);

Route::middleware('auth:api')->group(function () {
    Route::get('books', [BookController::class, 'index']);
    Route::post('books', [BookController::class, 'store']);
    Route::get('books/{id}', [BookController::class, 'show']);
    Route::put('books/{id}', [BookController::class, 'update']);
    Route::delete('books/{id}', [BookController::class, 'destroy']);

    Route::get('/weather', [WeatherController::class, 'getWeather']);
});
