<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('item_id')->nullable()->comment('商品ID');
            $table->integer('item_num')->nullable()->comment('購入個数');
            $table->string('name')->nullable()->comment('名前');
            $table->string('prefecture')->nullable()->comment('住所（都道府県）');
            $table->string('address')->nullable()->comment('住所（市区町村）');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
}
