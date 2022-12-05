<script>
import StarIcon from "@/Components/StarIcon.vue";

export default {
    name: "Stars",
    data() {
        return {
            rated: this.initialRating !== 0,
            rating: this.initialRating,
        }
    },
    props: {
        initialRating: {type: Number, default: 0},
        numberOfStars: { type: Number, default: 5 },
        activeColor: { type: String, default: "#ff9999" },
        inactiveColor: { type: String, default: "#555" },
    },
    computed: {
        emptyStars() {
            return this.numberOfStars - this.rating;
        },

        filledStars() {
            return this.rating;
        },
        starList() {
            const list = [];
            for (let i = 0; i < this.numberOfStars; i++) {
                list[i] = this.starColor(i+1);
            }
            return list;
        }

    },
    components: {
        StarIcon
    },
    methods: {
        changeRating(i) {
            this.rated = true;
            this.rating = i+1;
            this.$emit("change-rating", this.rating);
        },
        starColor(i) {
            return i <= this.rating;
        }
    }
}
</script>

<template>
<div>
    <button v-for="(filled, index) in starList" :key="index" @click="changeRating(index)">
        <StarIcon v-if="filled" :color="activeColor"></StarIcon>
        <StarIcon v-else :color="inactiveColor"></StarIcon>
    </button>
    <div class="text-xs">
        <div v-if="rated">{{rating}} of {{numberOfStars}}</div>
        <div v-else>Not yet rated.</div>
    </div>
</div>
</template>
