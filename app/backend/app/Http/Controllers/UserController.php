<?php

namespace App\Http\Controllers;

use App\Helper\UserService;
use App\Helper\UserLocationRegisterHelper;
use App\Helper\UserAddInterestHelper;

use Illuminate\Http\Request;

use App\Models\Master_country;
use App\Models\Master_interest;
use App\Models\User;
use App\Models\User_conversations;
use App\Models\User_matches;

class UserController extends Controller
{
    
    public function register(Request $request)
    {
        $response = (new UserService($request->email, $request->password, $request->name))->register($request->devicename);
        return response()->json($response);
    }

    public function login(Request $request)
    {
        $response = (new UserService($request->email, $request->password))->login();
        return response()->json($response);
    }

    public function getLocation()
    {
        $country = Master_country::all();
        return response()->json($country);
    }

    public function userLocationRegister(Request $request)
    { 
        $response = (new UserLocationRegisterHelper($request->status, $request->user, $request->country))->location();
        return response()->json($response);
    }

    public function getInterest()
    {
        $interest = Master_interest::all();
        return response()->json($interest);
    }

    public function UserAddInterest(Request $request)
    {
        $response = (new UserAddInterestHelper($request->status, $request->user, $request->interest))->addInterest();
    }

    public function getMatches(Request $request)
    {
        //no validation (based on interests, location etc)
        $potential_match = User::where('id', '!=', $request->user['id'])->get();

        return response()->json($potential_match);
    }

    // public function postMatches(Request $request)
    // {
    //     $user1 = User_conversations::where('user_id',$request->user['id'])->first();
    //     $potential_match = User::where('id', '!=', $request->user['id'])->get();

    //     foreach($potential_match as $match)
    //     {
    //         //no validation
    //         User_matches::create(['user_conversations_id'=>$user1['id'] ,'user_id'=>$match['id']]);
    //     }
    //     // return response()->json($user_matches); 
    // }

    public function swipe(Request $request)
    {
        $current_user = User_conversations::where('user_id',$request['user'])->value('id');
        // $user_convo = User_conversations::where('user_id', $current_user)->value('id');
        $matches = user_matches::where('user_conversations_id',$current_user)->where('user_id',$request['match_id'])->get();

        $potential_match = User::where('id', '!=', $request['user'] )->get();

        if ( $matches->isEmpty() )
        {
            foreach($potential_match as $match)
            {
                User_matches::create(['user_conversations_id'=>$current_user ,'user_id'=>$match['id'] ]);
            }

            $matches = user_matches::where('user_conversations_id',$current_user)->where('user_id',$request['match_id'])->get();

            foreach($matches as $match)
            {
                $match['is_match'] = $request['match'];
                $match->save();
            }
        }
        else
        {
            foreach($matches as $match)
            {
                $match['is_match'] = $request['match'];
                $match->save();
            }
        }
    }
   
}
