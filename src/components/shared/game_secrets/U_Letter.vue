<template>
    <div class="py-4 px-5 rounded my-shadow bg-light text-dark">
        <span class="display-6 fw-bold fst-italic">U</span>
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