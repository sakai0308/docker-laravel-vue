<?php

use Illuminate\Database\Seeder;

class ItemsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('items')->insert([
            [
              'item_name' => '商品名1',
              'price' => 300,
              'description' => 'せつめいぶん1',
              'image_filename' => 'test1.png'
            ],
            [
            'item_name' => '商品名2',
            'price' => 400,
            'description' => 'せつめいぶん2',
            'image_filename' => 'test2.png'
            ],
            [
            'item_name' => '商品名3',
            'price' => 500,
            'description' => 'せつめいぶん3',
            'image_filename' => 'test3.png'
            ],
        ]);
    }
}
