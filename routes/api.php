<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Listing;
use App\Http\Controllers\ListingController;
use App\Http\Controllers\UserController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('listing/{list}',[ListingController::class,'get_listing_api']);
Route::get('/',[ListingController::class,'get_home_api']);
Route::get('/saved',[ListingController::class,'get_saved_api']);
Route::post('/user/toggle_saved',[UserController::class,'toggle_saved'])->middleware('auth:api');