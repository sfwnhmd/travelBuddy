<?php
 
namespace App\Models;
 
use Illuminate\Database\Eloquent\Model;
 
class User_conversations extends Model
{
    protected $fillable = [
        'user_id',
    ];

    protected $table = 'user_conversations';
}