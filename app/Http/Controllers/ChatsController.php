<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Message;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use App\Events\MessageSent;

class ChatsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show chats
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //$userslist = User::all();
        $user = Auth::user();
        $chatwith = User::where('id','!=',$user->id)->first();
        return view('chat',compact('chatwith'));
    }

    /**
     * Show chats
     *
     * @return \Illuminate\Http\Response
     */
    public function friendList()
    {
        $user = Auth::user();
        return User::where('id','!=',$user->id)->get();
    }

    /**
     * Fetch all messages
     *
     * @return Message
     */
    public function fetchMessages()
    {
        return Message::with('user')->get();
    }

    /**
     * Persist message to database
     *
     * @param  Request $request
     * @return Response
     */
    public function sendMessage(Request $request)
    {
        try{
            $user = Auth::user();
            $message = $user->messages()->create([
                'message' => $request->input('message'),
                'send_by' => $user->id,
                'send_to' => $request->input('chatwith'),
                'message' => $request->input('message'),
            ]);

            event(new MessageSent($user, $message));

            return ['status' => 'Message Sent!'];
        } catch (\Exception $e) {
                return $e;
        }

    }
}
