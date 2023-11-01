<?php
 
namespace App\Models;
 
use Illuminate\Database\Eloquent\Model;
 
class User_matches extends Model
{
    protected $fillable = [
        'user_conversations_id',
        'user_id',
        'is_match',
    ];

    protected $table = 'user_matches';
}