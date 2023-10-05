<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;

class TestController extends Controller {
    public function ShowForm(){//creating the custom controller
        return view('add',['result'=>""]);//add is the filename
    }
    public function Addnumber(Request $r){
        $n1 = $r->input('num1');
        $n2 = $r->input('num2');
        $sum = $n1 + $n2;
        return view('add',['result'=>$sum]);

    }
}

