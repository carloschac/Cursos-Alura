<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Serie;
use DB;


class SeriesController extends Controller
{
    public function index()
    {
        $series = Serie::all();
        
        return view('series.index')->with('series',$series);
    }

    public function create() {
        return view('series.create');
    }

    public function store(Request $request) {
        $nomeSerie = $request->input('nome');
        $serie = new Serie();
        $serie->nome = $nomeSerie;
        $serie->save();
        return redirect('/series');
    }

    public function delete($id) {
        $serie = Serie::find($id);
        $serie->delete();
        return redirect('/series');
    }
    
}
