<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'author',
        'number_of_pages',
    ];

    protected $dates = ['published_at'];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->published_at = $model->freshTimestamp();
        });
    }
}
