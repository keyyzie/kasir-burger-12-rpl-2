<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $credentials = $request->only('email', 'password');
        if (!Auth::attempt($credentials)) {
            throw new HttpResponseException(response()->json(['errors' => ['message' => 'Invalid email or password. Please try again.']], 401));
        }

        return new UserResource(Auth::user());
    }

    public function getUser()
    {
        return new UserResource(Auth::user());
    }

    public function logout()
    {
        if (!Auth::check()) {
            throw new HttpResponseException(response()->json(['errors' => ['message' => 'User is not authenticated.']], 401));
        }

        auth()->logout();
        return response()->json(['message' => 'Logout successful']);
    }
}
