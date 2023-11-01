<?php

namespace App\Helper;

use App\Models\User_location;
use App\Models\Master_country;
use App\Models\User;

use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rules\Password;

class UserLocationRegisterHelper {

    public $status, $user, $country;

    public function __construct($status, $user, $country)
    {
        $this->status = $status;
        $this->user = $user;
        $this->country = $country;
        
    }

    public function Location()
    {
        //NO VALIDATION YET
        $country = Master_country::where('id',$this->country['id'])->first();
        $user = User::where('id',$this->user['id'])->first();
 
        $user_location = User_location::create(['user_id'=>$user['id'],'country_id'=>$country['id']]);
        return ['status' => true, 'message' => 'Succesfully added!', 'user' => $user];
    }

}


?>