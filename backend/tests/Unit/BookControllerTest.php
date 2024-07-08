<?php

namespace Tests\Unit;

use App\Models\Book;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class BookControllerTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        Sanctum::actingAs(User::factory()->create());
    }

    public function test_can_create_book()
    {
        $response = $this->postJson('/api/books', [
            'title' => 'Test Book',
            'description' => 'This is a test book.',
            'author' => 'Test Author',
            'number_of_pages' => 100,
        ]);

        $response->assertStatus(201)
                 ->assertJson([
                     'title' => 'Test Book',
                 ]);
    }

    public function test_can_get_books()
    {
        Book::factory()->count(3)->create();

        $response = $this->getJson('/api/books');

        $response->assertStatus(200)
                 ->assertJsonCount(3);
    }

    public function test_can_update_book()
    {
        $book = Book::factory()->create();

        $response = $this->putJson("/api/books/{$book->id}", [
            'title' => 'Updated Book',
        ]);

        $response->assertStatus(200)
                 ->assertJson([
                     'title' => 'Updated Book',
                 ]);
    }

    public function test_can_delete_book()
    {
        $book = Book::factory()->create();

        $response = $this->deleteJson("/api/books/{$book->id}");

        $response->assertStatus(204);
    }
}
