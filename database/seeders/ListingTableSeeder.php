<?php

namespace Database\Seeders;


use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\DB;

class ListingTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $path = base_path().'/database/data.json';
        $file = File::get($path);
        $data = json_decode($file,true);
        DB::table('listings')->insert($data);
    }
}
