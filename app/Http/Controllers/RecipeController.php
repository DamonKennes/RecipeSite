<?php

namespace App\Http\Controllers;

use App\Models\Recipe;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RecipeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index(Request $request)
    {
        return Inertia::render('Recipes/Index', [
            "results" => Recipe::search($request['query'])->paginate(15),
            "recommendations" => Recipe::skip(5000)->take(5)->get(),
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Recipe  $recipe
     * @return \Inertia\Response
     */
    public function show(Recipe $recipe, Request $request)
    {
        $user = $recipe->users()->whereId($request->user()->id)->first();
        if ($user){
            $recipe->rating = $user->pivot->rating;
        }else{
            $recipe->rating = 0;
        }
        return Inertia::render('Recipes/Show', [
            'recipe' => $recipe
        ]);
    }

    public function update(Recipe $recipe, Request $request){
        $request->validate(['rating' => 'required|integer']);
        $user = $recipe->users()->whereId($request->user()->id)->first();
        if ($user){
            $user->recipes()->updateExistingPivot($recipe, [
                'rating' => $request['rating']
            ]);
        }else{
            $recipe->users()->attach($request->user(), ['rating' => $request['rating']]);
        }
        return redirect()->back();
    }

}
