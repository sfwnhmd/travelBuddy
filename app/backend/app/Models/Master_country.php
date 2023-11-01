<?php
 
namespace App\Models;
 
use Illuminate\Database\Eloquent\Model;
 
class Master_country extends Model
{
    protected $fillable = [
        'name'
    ];

    protected $table = 'master_country';
}