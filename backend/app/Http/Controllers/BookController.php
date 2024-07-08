<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;
use Carbon\Carbon;

class BookController extends Controller
{
    public function index(Request $request)
    {
        $perPage = $request->get('per_page', 10);
        $title = $request->get('title');
        $author = $request->get('author');

        $query = Book::query();

        if ($title) {
            $query->where('title', 'LIKE', "%$title%");
        }

        if ($author) {
            $query->where('author', 'LIKE', "%$author%");
        }

        $books = $query->paginate($perPage);
        $books->each(function ($book) {
            $book->published_at = Carbon::parse($book->published_at)->format('d/m/Y H:i:s');
        });

        return response()->json($books);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'description' => 'required',
            'author' => 'required',
            'number_of_pages' => 'required|integer',
        ], [
            'title.required' => 'O campo título é obrigatório.',
            'description.required' => 'O campo descrição é obrigatório.',
            'author.required' => 'O campo autor é obrigatório.',
            'number_of_pages.required' => 'O campo número de páginas é obrigatório (inteiro).',
            'number_of_pages.integer' => 'O campo número de páginas deve ser um número inteiro.',
        ]);

        $book = new Book($request->all());
        $book->published_at = now();
        $book->save();

        $book->published_at = Carbon::parse($book->published_at)->format('d/m/Y H:i:s');

        return response()->json($book, 201);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'sometimes|required',
            'description' => 'sometimes|required',
            'author' => 'sometimes|required',
            'number_of_pages' => 'sometimes|required|integer',
        ], [
            'title.required' => 'O campo título é obrigatório.',
            'description.required' => 'O campo descrição é obrigatório.',
            'author.required' => 'O campo autor é obrigatório.',
            'number_of_pages.required' => 'O campo número de páginas é obrigatório (inteiro).',
            'number_of_pages.integer' => 'O campo número de páginas deve ser um número inteiro.',
        ]);

        $book = Book::findOrFail($id);
        $book->update($request->all());
        $book->published_at = Carbon::parse($book->published_at)->format('d/m/Y H:i:s');

        return response()->json($book);
    }

    public function show($id)
    {
        $book = Book::findOrFail($id);
        $book->published_at = Carbon::parse($book->published_at)->format('d/m/Y H:i:s');
        return response()->json($book);
    }

    public function destroy($id)
    {
        Book::destroy($id);
        return response()->json(null, 204);
    }
}
