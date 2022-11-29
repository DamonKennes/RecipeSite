<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/inertia-vue3';
import SearchBar from "@/Components/SearchBar.vue";
import { Inertia } from "@inertiajs/inertia";
import { watch } from "vue";
import { ref } from "vue";

const props = defineProps({
    results: {
        type: Object,
        default: () => ({}),
    },
});
let search = ref('');
watch(search, (value) => {
    Inertia.get(
        "/recipes",
        { query: value },
        {
            preserveState: true,
        }
    );
});

</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 text-gray-900">You're logged in!</div>
                    <div class='max-w-md mx-auto'>
                        <div class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                            <div class="grid place-items-center h-full w-12 text-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>

                            <input
                                class="peer h-full w-full outline-none text-sm text-gray-700 pr-2 border-0"
                                type="text"
                                id="search"
                                placeholder="Search something.."
                                v-model="search"
                            />
                        </div>
                    </div>
                    <div v-for="recipe in results.data" class="flex h-20">
                        <img :src="recipe.image_url" alt="Recipe picture" class="w-20"/>
                        <h1>{{recipe.name}}</h1>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
