<?php

namespace App\Helper;

use App\Models\User;
use App\Models\User_conversations;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rules\Password;

class UserService {

    public $email, $password;

    public function __construct($email, $password, $name="")
    {
        $this->name = $name;
        $this->email = $email;
        $this->password = $password;
    }

    public function validateInput($auth=false)
    {
        $validationRule = $auth ? 'exists:users' : 'unique:users';
        $validator = Validator::make(['name'=>$this->name,'email'=>$this->email, 'password'=>$this->password],
        [
            // 'name' => ['required', 'string', 'max:255'], add validation for name here
            'email' => ['required', 'email:rfc,dns', $validationRule],
            'password' => ['required', 'string', Password::min(8)]
        ]
        );

        if($validator->fails())
        {
            return ['status' => false, 'message'=>$validator->errors()];
        }
        else
        {
            return ['status' => true];
        }
    }

    public function register($deviceName)
    {
        $validate = $this->validateInput();
        if($validate['status'] == false)
        {
            return $validate;
        }
        else
        {
            $user = User::create(['name'=>$this->name,'email'=>$this->email, 'password'=>Hash::make($this->password)]);
            $user_conversations = User_conversations::create(['user_id' => $user['id']]);
            $token = $user->createToken('deviceName')->plainTextToken;
            return ['status' => true, 'token' => $token, 'user' => $user]; 
        }
    }

    public function login()
    {
        $validate = $this->validateInput(true);
        if($validate['status'] == false)
        {
            return $validate;
        }
        else
        {
            $user = User::where('email', $this->email)->first();
                if(Hash::check($this->password, $user->password ))
                {
                    $token = $user->createToken('deviceName')->plainTextToken;
                    return ['status' => true, 'token' => $token, 'user' => $user]; 
                }
                else
                {
                    return ['status' => false, 'message' =>['password' => 'Incorrect Password' ]]; 
                }
            
        }
    }
}


?>