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
                'item_name' => 'Tシャツ',
                'price' => 3000,
                'description' => 'Tシャツです。',
                'image_filename' => 't-shirt.png'
            ],
            [
                'item_name' => 'Yシャツ',
                'price' => 4000,
                'description' => 'Yシャツです。',
                'image_filename' => 'y-shirt.png'
            ],
            [
                'item_name' => 'ショートパンツ',
                'price' => 1500,
                'description' => 'ショートパンツです。',
                'image_filename' => 's-pants.png'
            ],
                        [
                'item_name' => 'ロングパンツ',
                'price' => 1500,
                'description' => 'ロングパンツです。',
                'image_filename' => 'l-pants.png'
            ],
            [
                'item_name' => 'ハット',
                'price' => 1000,
                'description' => 'ハットです。',
                'image_filename' => 'hat.png'
            ],
            [
                'item_name' => 'スニーカー',
                'price' => 5500,
                'description' => 'スニーカーです。',
                'image_filename' => 'sneakers.png'
            ],
        ]);
    }
}
