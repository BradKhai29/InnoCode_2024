<template>
    <div :id="elementIdRef" class="drag-and-drop-container" draggable="true">
        <div
            :id="elementIdRef + 'header'"
            class="drag-and-drop"
            draggable="true"
        >
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        const element = document.getElementById(this.elementIdRef);
        if (element == null) {
            return;
        }

        this.setUpDragAndDrop(element);
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
            element.addEventListener("dragstart", this.handleDrag);

            let elementMoveOffsetX = 0,
                elementMoveOffsetY = 0,
                cursorPositionX = 0,
                cursorPositionY = 0;
            if (document.getElementById(element.id + "header")) {
                // if present, the header is where you move the DIV from:
                document.getElementById(element.id + "header").onmousedown =
                    dragMouseDown;
            } else {
                // otherwise, move the DIV from anywhere inside the DIV:
                element.onmousedown = dragMouseDown;
            }

            function dragMouseDown(event) {
                event = event || window.event;
                event.preventDefault();

                // get the mouse cursor position at startup:
                cursorPositionX = event.clientX;
                cursorPositionY = event.clientY;

                element.onmouseup = stopDragElement;
                document.onmouseup = stopDragElement;
                // call a function whenever the cursor moves:
                document.onmousemove = dragElement;
            }

            function dragElement(event) {
                event = event || window.event;
                event.preventDefault();

                // calculate the new cursor position:
                elementMoveOffsetX = cursorPositionX - event.clientX;
                elementMoveOffsetY = cursorPositionY - event.clientY;

                // Update again the mouse cursor position.
                cursorPositionX = event.clientX;
                cursorPositionY = event.clientY;

                // set the element's new position:
                element.style.left = element.offsetLeft - elementMoveOffsetX + "px";
                element.style.top = element.offsetTop - elementMoveOffsetY + "px";
            }

            function stopDragElement() {
                // stop moving when mouse button is released:
                document.onmouseup = null;
                document.onmousemove = null;
            }
        },
        handleDrag(event) {
            event.dataTransfer.setData("text", event.target.id);
        }
    },
};
</script>

<style scoped>
.drag-and-drop-container {
    position: absolute;
    z-index: 9;
}

.drag-and-drop {
    cursor: move;
    z-index: 10;
}
</style>