<template>
    <head title="Dashboard" />

    <div>
        <div class="min-h-screen bg-gray-100">
            <nav class="bg-white border-b border-gray-100 fixed z-50 w-full" :class="{ 'scrolled': !atTopOfPage }" >
                <!-- Primary Navigation Menu -->
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between h-16">
                        <div class="flex">
                            <!-- Logo -->
                            <div class="shrink-0 flex items-center">
                                <Link :href="route('recipes.index')">
                                    <ApplicationLogo
                                        class="block h-9 w-auto fill-current text-gray-800"
                                    />
                                </Link>
                            </div>
                        </div>
                        <div class="my-auto w-full mx-6">
                            <SearchBar :value="search" @updated-value="updateSearch"></SearchBar>
                        </div>
                        <div class="hidden sm:flex sm:items-center sm:ml-6">
                            <!-- Settings Dropdown -->
                            <div class="ml-3 relative">
                                <Dropdown align="right" width="48">
                                    <template #trigger>
                                        <span class="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {{ $page.props.auth.user.name }}

                                                <svg
                                                    class="ml-2 -mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clip-rule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </template>

                                    <template #content>
                                        <DropdownLink :href="route('profile.edit')"> Profile </DropdownLink>
                                        <DropdownLink :href="route('logout')" method="post" as="button">
                                            Log Out
                                        </DropdownLink>
                                    </template>
                                </Dropdown>
                            </div>
                        </div>

                        <!-- Hamburger -->
                        <div class="-mr-2 flex items-center sm:hidden">
                            <button
                                @click="showingNavigationDropdown = !showingNavigationDropdown"
                                class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                            >
                                <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path
                                        :class="{
                                            hidden: showingNavigationDropdown,
                                            'inline-flex': !showingNavigationDropdown,
                                        }"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        :class="{
                                            hidden: !showingNavigationDropdown,
                                            'inline-flex': showingNavigationDropdown,
                                        }"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Responsive Navigation Menu -->
                <div
                    :class="{ block: showingNavigationDropdown, hidden: !showingNavigationDropdown }"
                    class="sm:hidden"
                >

                    <!-- Responsive Settings Options -->
                    <div class="pt-4 pb-1 border-t border-gray-200">
                        <div class="px-4">
                            <div class="font-medium text-base text-gray-800">
                                {{ $page.props.auth.user.name }}
                            </div>
                            <div class="font-medium text-sm text-gray-500">{{ $page.props.auth.user.email }}</div>
                        </div>

                        <div class="mt-3 space-y-1">
                            <ResponsiveNavLink :href="route('profile.edit')"> Profile </ResponsiveNavLink>
                            <ResponsiveNavLink :href="route('logout')" method="post" as="button">
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            <!-- Page Content -->
            <main>
                <div class="pt-16 pb-12">
                    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div v-if="!search">
                                <Slider :data ="favourites.data" text = "Your Favourites">
                                </Slider>
                                <h1 class="text-xl text-grey m-4 font-bold">Recommended for you</h1>
                                <div class="grid md:grid-cols-3 gap-1">
                                <card-with-info v-for="recipe in recommendations.data"
                                      :name="recipe.name"
                                      :image-recipe="recipe.image_url"
                                      :image-graf="recipe.pivot.image_url"
                                      :score="0"
                                      :perc ="recipe.pivot.certainty"
                                                :id="recipe.id"
                                      @open-recipe="openRecipe(recipe)"
                                ></card-with-info>
                            </div>
                                </div>
                            <div v-else>
                                <h1 class="text-xl text-grey m-4 font-bold">Search results</h1>
                                <div v-for="recipe in allResults" class="flex h-20 border-b-2 border-grey cursor-pointer" @click="openRecipe(recipe)">
                                        <img :src="recipe.image_url" alt="Recipe picture" class="w-20 object-cover"/>
                                    <h1 class="my-auto ml-4 font-semibold">{{recipe.name}}</h1>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
import VueHorizontal from "vue-horizontal";
import { Head } from '@inertiajs/inertia-vue3';
import { Link } from '@inertiajs/inertia-vue3';
import {Inertia} from "@inertiajs/inertia";
import ResponsiveNavLink from '@/Components/ResponsiveNavLink.vue';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import Dropdown from '@/Components/Dropdown.vue';
import DropdownLink from '@/Components/DropdownLink.vue';
import SearchBar from "@/Components/SearchBar.vue";
import Card from "@/Components/Card.vue";
import Slider from "@/Components/Slider.vue";

import CardWithInfo from "@/Components/CardWithInfo.vue";
export default {
    name: "IndexExpl",
    components: {CardWithInfo, Card, Head, Link, ResponsiveNavLink, ApplicationLogo, DropdownLink, Dropdown, SearchBar, VueHorizontal, Slider},
    props: {
        results: {
            type: Object,
            default: () => ({}),
        },
        recommendations: {
            type: Object,
            default: () => ({}),
        },
        favourites: {
            type: Object,
            default: () => ({}),
        }
    },
    data() {
        return {
            showingNavigationDropdown: false,
            search: "",
            atTopOfPage: true,
            allResults : [],
        }
    },
    beforeMount() {
        window.addEventListener('scroll', this.handleScroll);
        let uri = window.location.search.substring(1);
        let q = new URLSearchParams(uri).get('query');
        if (q) this.search = q;
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        updateSearch(val){
            this.search = val;
        },
        openRecipe(recipe){
            Inertia.get('/recipes/' + recipe.id);
        },
        handleScroll(){
            this.atTopOfPage = window.scrollY <= 0;
            if (this.search && (window.innerHeight + window.scrollY + 200) > document.body.scrollHeight)
                this.loadMore();
        },
        loadMore() {
            if (this.results.next_page_url === null) {
                return
            }

            this.$inertia.get(this.results.next_page_url, {}, {
                preserveState: true,
                preserveScroll: true,
                onSuccess: () => {
                    this.allResults = [...this.allResults, ...this.results.data]
                }
            })
        }
    },
    watch: {
        search(value){
            Inertia.get(
                "/recipes",
                { query: value },
                {
                    preserveState: true,
                    preserveScroll: true,
                    onSuccess: () => {this.allResults = this.results.data}
                },
            );
        }
    }
}
</script>

<style scoped>
nav.scrolled {
    @apply shadow-2xl;
    border-bottom: 0;
}
</style>
