<template>
    <section id="app_body" class="container-fluid p-0">
        <NavigationBar/>

        <section id="main">
            <slot name="default"></slot>
        </section>

        <section id="footer">
            <slot name="footer"></slot>
        </section>
    </section>
</template>

<script>
import NavigationBar from "@/components/shared/NavigationBar.vue"

export default {
    components: {
        NavigationBar,
    }
}
</script>