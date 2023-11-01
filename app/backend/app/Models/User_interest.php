<?php
 
namespace App\Models;
 
use Illuminate\Database\Eloquent\Model;
 
class User_interest extends Model
{
    protected $fillable = [
        'user_id',
        'interest_id',
    ];

    protected $table = 'user_interest';
}