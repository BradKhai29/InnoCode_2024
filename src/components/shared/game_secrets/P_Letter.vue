<template>
    <div class="py-4 px-5 rounded my-shadow bg-fpt-orange text-light">
        <span v-if="isCollected" class="position-absolute top-0 start-100 translate-middle badge bg-success rounded-pill">
            <span class="text-light text-decoration-none">&#10003;</span>
        </span>
        <span class="display-6 fw-bold fst-italic">P</span>
    </div>
</template>

<script>
export default {
    props: {
        collected: Boolean,
    },
    computed: {
        isCollected() {
            if (this.collected == null) {
                return false;
            }

            return this.collected;
        }
    }
}
</script>