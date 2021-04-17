<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Invoice;
use App\Models\InvoiceProduct;

class InvoiceController extends Controller
{
    public function store(Request $request)
    {
        // dd( $request->all() );
        $request->validate([
            'receipt_number' => 'required',
            'total_amount' => 'required',
            'cash' => 'required',
            'change' => 'required',
            'products' => 'required'
        ]);

        $invoice = new Invoice;
        $invoice->receipt_number    = $request->receipt_number;
        $invoice->total_amount      = $request->total_amount;
        $invoice->cash              = $request->cash;
        $invoice->change            = $request->change;
        $invoice->user_id           = auth()->user()->id;
        $invoice->save();

        foreach($request->products as $product)
        {
            $invoice_product = new InvoiceProduct;
            $invoice_product->product_id = $product['id'];
            $invoice_product->invoice_id = $invoice->id;
            $invoice_product->quantity = $product['qty'];
            $invoice_product->price = $product['price'];
            $invoice_product->sub_total = $product['qty']*$product['price'];
            $invoice_product->save();
        }

        return response()->json(['success' => 1, 'message' => 'Invoice store succeed']);
    }
}
