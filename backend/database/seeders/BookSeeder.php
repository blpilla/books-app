<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Book;

class BookSeeder extends Seeder
{
    public function run()
    {
        $books = [
            ['title' => 'Clean Code', 'author' => 'Robert C. Martin', 'description' => 'A Handbook of Agile Software Craftsmanship', 'number_of_pages' => 464],
            ['title' => 'The Pragmatic Programmer', 'author' => 'Andrew Hunt, David Thomas', 'description' => 'Your Journey to Mastery', 'number_of_pages' => 352],
            ['title' => 'Code Complete', 'author' => 'Steve McConnell', 'description' => 'A Practical Handbook of Software Construction', 'number_of_pages' => 960],
            ['title' => 'Refactoring', 'author' => 'Martin Fowler', 'description' => 'Improving the Design of Existing Code', 'number_of_pages' => 448],
            ['title' => 'Design Patterns', 'author' => 'Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides', 'description' => 'Elements of Reusable Object-Oriented Software', 'number_of_pages' => 395],
            ['title' => 'You Don’t Know JS', 'author' => 'Kyle Simpson', 'description' => 'ES6 & Beyond', 'number_of_pages' => 278],
            ['title' => 'JavaScript: The Good Parts', 'author' => 'Douglas Crockford', 'description' => 'Unearthing the Excellence in JavaScript', 'number_of_pages' => 176],
            ['title' => 'Eloquent JavaScript', 'author' => 'Marijn Haverbeke', 'description' => 'A Modern Introduction to Programming', 'number_of_pages' => 472],
            ['title' => 'Effective Java', 'author' => 'Joshua Bloch', 'description' => 'Best Practices for the Java Platform', 'number_of_pages' => 416],
            ['title' => 'Introduction to Algorithms', 'author' => 'Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein', 'description' => 'Comprehensive introduction to the modern study of computer algorithms', 'number_of_pages' => 1312],
            ['title' => 'Head First Design Patterns', 'author' => 'Eric Freeman, Bert Bates, Kathy Sierra, Elisabeth Robson', 'description' => 'A Brain-Friendly Guide', 'number_of_pages' => 694],
            ['title' => 'The Mythical Man-Month', 'author' => 'Frederick P. Brooks Jr.', 'description' => 'Essays on Software Engineering', 'number_of_pages' => 322],
            ['title' => 'Programming Pearls', 'author' => 'Jon Bentley', 'description' => 'Unique perspective on programming', 'number_of_pages' => 256],
            ['title' => 'Working Effectively with Legacy Code', 'author' => 'Michael Feathers', 'description' => 'Techniques for maintaining and improving legacy code', 'number_of_pages' => 456],
            ['title' => 'Domain-Driven Design', 'author' => 'Eric Evans', 'description' => 'Tackling Complexity in the Heart of Software', 'number_of_pages' => 560],
            ['title' => 'Patterns of Enterprise Application Architecture', 'author' => 'Martin Fowler', 'description' => 'Catalog of patterns to solve common problems in enterprise software development', 'number_of_pages' => 533],
            ['title' => 'Continuous Delivery', 'author' => 'Jez Humble, David Farley', 'description' => 'Reliable Software Releases through Build, Test, and Deployment Automation', 'number_of_pages' => 512],
            ['title' => 'The Art of Computer Programming', 'author' => 'Donald E. Knuth', 'description' => 'Comprehensive monograph written by Donald Knuth', 'number_of_pages' => 3168],
            ['title' => 'Test-Driven Development', 'author' => 'Kent Beck', 'description' => 'By Example', 'number_of_pages' => 240],
            ['title' => 'The Clean Coder', 'author' => 'Robert C. Martin', 'description' => 'A Code of Conduct for Professional Programmers', 'number_of_pages' => 256]
        ];

        foreach ($books as $book) {
            Book::create($book);
        }
    }
}
