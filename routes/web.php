<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use App\Models\Listing;
use App\Http\Controllers\ListingController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [ListingController::class,'get_home_web']); 
Route::get('/listing/{list}',[ListingController::class,'get_listing_web']);
Route::get('/lists',function(){
    $lists = App\Models\Listing::first();
    echo(gettype($lists->amenity_wifi));    
});
Route::get('/saved',[ListingController::class,'get_saved_web']);

Auth::routes();
// Route::get('/addsampleuser',function(){
//     App\Models\User::create(['name'=>'user1name',
//                              'email'=>'user1@test.com',
//                              'password'=>bcrypt('123456')]);
// });