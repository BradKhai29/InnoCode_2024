<template>
    <div :id="elementIdRef" draggable="true">
        <div class="drag-and-drop">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dragAndDropElement: null,
        };
    },
    mounted() {
        this.dragAndDropElement = document.getElementById(this.elementIdRef);
        if (this.dragAndDropElement == null) {
            return;
        }

        this.setUpDragAndDrop(this.dragAndDropElement);
    },
    props: {
        elementId: String,
    },
    computed: {
        elementIdRef() {
            if (this.elementId == null) {
                return 1;
            }

            return this.elementId;
        },
    },
    methods: {
        /**
         * @param {HTMLElement} element Element to set up drag and drop.
         */
        setUpDragAndDrop(element) {
            element.addEventListener("dragstart", this.handleDragStart);
            element.addEventListener("drag", this.handleDrag);
            element.addEventListener("dragend", this.handleDragEnd);
        },
        handleDrag() {
            this.dragAndDropElement.classList.add("hide");
        },
        /**
         * @param {DragEvent} event EventObject to handle drag.
         */
        handleDragStart(event) {
            event.dataTransfer.setData("elementId", this.elementIdRef);
        },
        handleDragEnd() {
            this.dragAndDropElement.classList.remove("hide");
        },
    },
};
</script>

<style scoped>
.hide {
    transition: 0.01s;
    opacity: 0;
}
</style>