<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $products = [
            [
                "name" => "Beef Burger",
                "price" => 45000,
                "image" => "img/beef-burger.png",
            ],
            [
                "name" => "Sandwich",
                "price" => 32000,
                "image" => "img/sandwich.png",
            ],
            [
                "name" => "Sawarma",
                "price" => 30000,
                "image" => "img/sawarma.png",
            ],
            [
                "name" => "Croissant",
                "price" => 16000,
                "image" => "img/croissant.png",
            ],
            [
                "name" => "Cinnamon Roll",
                "price" => 20000,
                "image" => "img/cinnamon-roll.png",
            ],
            [
                "name" => "Choco Glaze Donut with Peanut",
                "price" => 10000,
                "image" => "img/choco-glaze-donut-peanut.png",
            ],
            [
                "name" => "Choco Glazed Donut",
                "price" => 10000,
                "image" => "img/choco-glaze-donut.png",
            ],
            [
                "name" => "Red Glazed Donut",
                "price" => 10000,
                "image" => "img/red-glaze-donut.png",
            ],
            [
                "name" => "Iced Coffee Latte",
                "price" => 25000,
                "image" => "img/coffee-latte.png",
            ],
            [
                "name" => "Iced Chocolate",
                "price" => 20000,
                "image" => "img/ice-chocolate.png",
            ],
            [
                "name" => "Iced Tea",
                "price" => 15000,
                "image" => "img/ice-tea.png",
            ],
            [
                "name" => "Iced Matcha Latte",
                "price" => 22000,
                "image" => "img/matcha-latte.png",
            ]
        ];

        DB::table('products')->insert($products);

    }
}
