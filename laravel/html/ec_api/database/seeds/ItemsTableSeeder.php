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
                'price' => 2980,
                'description' => 'ラウンドネックのTシャツです。',
                'image_filename' => 't-shirt.png'
            ],
            [
                'item_name' => 'Yシャツ',
                'price' => 3980,
                'description' => '長袖のYシャツです。',
                'image_filename' => 'y-shirt.png'
            ],
            [
                'item_name' => 'ショートパンツ',
                'price' => 4980,
                'description' => 'ショート丈のパンツです。',
                'image_filename' => 's-pants.png'
            ],
                        [
                'item_name' => 'ロングパンツ',
                'price' => 7980,
                'description' => 'ロング丈のパンツです。',
                'image_filename' => 'l-pants.png'
            ],
            [
                'item_name' => 'ハット',
                'price' => 3980,
                'description' => 'フリーサイズのハットです。',
                'image_filename' => 'hat.png'
            ],
            [
                'item_name' => 'スニーカー',
                'price' => 7980,
                'description' => 'ローカットのスニーカーです。',
                'image_filename' => 'sneakers.png'
            ],
        ]);
    }
}
