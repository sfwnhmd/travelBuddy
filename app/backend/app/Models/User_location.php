<?php
 
namespace App\Models;
 
use Illuminate\Database\Eloquent\Model;
 
class User_location extends Model
{
    protected $fillable = [
        'user_id',
        'country_id',
        'state_id',
    ];

    protected $table = 'User_location';
}