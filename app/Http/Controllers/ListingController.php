<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Listing;
use Illuminate\Support\Facades\Auth;

class ListingController extends Controller
{
    // 
    private function get_listings_sumaries(){
        $collection = Listing::all(['id','address','title','price_per_night']);
        $collection->transform(function($listing){
            $listing->thumb = asset('images/'.$listing->id.'/Image_1_thumb.jpg');
            return $listing;
        });
        $data = collect(['listings'=>$collection->toArray()]);
        return $data;
    }
    private function add_meta_data($collection,$request)
    {
        return $collection->merge([
            'path'=>$request->getPathInfo(),
            'auth' => Auth::check(),
            'saved' =>Auth::check()? Auth::user()->saved:[]
        ]);
    }
    public function get_listing_api(Listing $list){
        $data = $this->get_listing($list);
        return response()->json($data);
    }
    public function get_listing_web(Listing $list, Request $request){
        $data = $this->get_listing($list);
        $data = $this->add_meta_data($data,$request);
        return view('app',['data'=>$data]);
    }
    public function get_home_web(Request $request){
       $data = $this->get_listings_sumaries();
        $data = $this->add_meta_data($data,$request);
        return view('app',['data'=>$data]);
    }
    public function get_home_api(){
        $data = $this->get_listings_sumaries();
        return response()->json($data);
    }
    public function get_saved_web(Request $request){
        $data = $this->get_listings_sumaries();
         $data = $this->add_meta_data($data,$request);
         return view('app',['data'=>$data]);
     }
     public function get_saved_api(){
         $data = $this->get_listings_sumaries();
         return response()->json($data);
     }
    public function get_listing($listing){
        $model = $listing->toArray();
        for($i=1;$i<=4;$i++)
        {
            $model['image_'.$i] = asset('images/'.$listing->id.'/Image_'.$i.'.jpg');
        }
        return collect(['listing'=>$model]);
    }
}
