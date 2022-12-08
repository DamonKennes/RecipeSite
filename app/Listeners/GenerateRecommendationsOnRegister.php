<?php

namespace App\Listeners;

use App\Jobs\UpdateRecommendations;
use Illuminate\Auth\Events\Registered;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class GenerateRecommendationsOnRegister
{

    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  \Illuminate\Auth\Events\Registered  $event
     * @return void
     */
    public function handle(Registered $event)
    {
        UpdateRecommendations::dispatch();
    }
}
