<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class WeatherService
{
    private const API_URL = 'https://api.hgbrasil.com/weather';
    private const API_KEY = '6740e252';

    public function fetchWeather($userIp): array
    {
        $response = Http::get(self::API_URL, [
            'key' => self::API_KEY,
            'user_ip' => $userIp
        ]);

        if ($response->successful()) {
            return $response->json();
        }

        return ['error' => 'Falha ao carregar API do tempo.'];
    }
}
