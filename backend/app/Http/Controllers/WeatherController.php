<?php

namespace App\Http\Controllers;

use App\Services\WeatherService;
use Illuminate\Http\Request;

class WeatherController extends Controller
{
    private $weatherService;

    public function __construct(WeatherService $weatherService)
    {
        $this->weatherService = $weatherService;
    }

    public function getWeather(Request $request)
    {
        $userIp = $request->input('user_ip') ?? request()->ip();
        $weatherData = $this->weatherService->fetchWeather($userIp);

        return response()->json($weatherData);
    }
}
