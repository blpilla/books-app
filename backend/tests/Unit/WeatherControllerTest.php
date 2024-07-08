<?php

namespace Tests\Unit;

use App\Models\User;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class WeatherControllerTest extends TestCase
{
    protected function setUp(): void
    {
        parent::setUp();
        Sanctum::actingAs(User::factory()->create());
    }

    public function test_can_get_weather()
    {
        $response = $this->getJson('/api/weather?city=Porto Alegre');

        $response->assertStatus(200)
                 ->assertJsonStructure([
                     'results' => [
                         'temp',
                         'date',
                         'time',
                         'condition_code',
                         'description',
                         'currently',
                         'cid',
                         'city',
                         'img_id',
                         'humidity',
                         'cloudiness',
                         'rain',
                         'wind_speedy',
                         'sunrise',
                         'sunset',
                         'condition_slug',
                         'city_name'
                     ]
                 ]);
    }
}
