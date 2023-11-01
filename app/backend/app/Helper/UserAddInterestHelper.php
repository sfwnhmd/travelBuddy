<?php

namespace App\Helper;

use App\Models\User_location;
use App\Models\User_interest;
use App\Models\Master_country;
use App\Models\Master_interest;
use App\Models\User;

use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rules\Password;

class UserAddInterestHelper {

    public $status, $user, $interest;

    public function __construct($status, $user, $interest)
    {
        $this->status = $status;
        $this->user = $user;
        $this->interest = $interest;
        
    }

    public function addInterest()
    {
        
        //NO VALIDATION YET
        $interest = Master_interest::where('id',$this->interest['id'])->first();
        $user = User::where('id',$this->user['id'])->first();
 
        $user_interest = User_interest::create(['user_id'=>$user['id'],'interest_id'=>$interest['id']]);
        return response()->json(['status' => true, 'message' => 'Interest Succesfully added!', 'user' => $user]);
        
    }

}


?>