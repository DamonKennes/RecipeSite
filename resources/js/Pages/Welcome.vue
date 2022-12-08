<script setup>
import { Head, Link } from '@inertiajs/inertia-vue3';
import ApplicationLogo from "@/Components/ApplicationLogo.vue";

defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
});
</script>

<template>
    <Head title="Welcome" />

    <div
        class="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0"
    >

        <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
            <div class="flex justify-center pt-8 sm:justify-start sm:pt-0">
                <ApplicationLogo class="fill-current text-center w-40 h-40 mx-auto"></ApplicationLogo>
            </div>

            <div class="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow sm:rounded-lg">
                <div class="grid grid-cols-1 md:grid-cols-2 rounded text-center">

                    <div class="p-6">
                        <Link :href="route('login')" class="text-xl text-gray-700 dark:text-gray-500">Log in</Link>
                    </div>
                    <div class="p-6 border-t border-gray-200 dark:border-gray-700 md:border-t-0 md:border-l rounded text-center">
                        <Link
                            v-if="canRegister"
                            :href="route('register')"
                            class="text-xl text-gray-700 dark:text-gray-500"
                        >Register</Link>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
