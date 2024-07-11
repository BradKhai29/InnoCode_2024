<template>
    <section id="app_body" class="container-fluid p-0 position-relative">
        <NavigationBar />

        <section id="main">
            <slot name="default"></slot>
        </section>

        <section id="footer">
            <slot name="footer"></slot>
        </section>
        <ItemBag />
    </section>
</template>

<script>
import NavigationBar from "@/components/shared/NavigationBar.vue";
import ItemBag from "@/components/shared/ItemBag.vue";

export default {
    components: {
        NavigationBar,
        ItemBag,
    },
};
</script>