@extends('layouts.app')
@section('content')
<div class="container-fluid h-100">
    <div class="row justify-content-center h-100">
        <div class="col-md-4 col-xl-3 chat">
            <!-- <friend-list :friendlist="friendlist" :chatwithuserid="chatwithuserid"> </friend-list> -->
        </div>
        <div class="col-md-8 col-xl-6 chat">
            <div class="card">
                <chat-messages :messages="messages" :user="{{ Auth::user() }}" :chatwith="{{$chatwith}}"></chat-messages>
                <chat-form v-on:messagesent="addMessage" :user="{{ Auth::user() }}" :chatwith="{{$chatwith}}"></chat-form>
            </div>
        </div>
    </div>
</div>
@endsection