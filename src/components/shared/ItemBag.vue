<template>
    <div class="position-absolute bottom-0 end-0 rounded-circle m-5">
        <button
            type="button"
            class="p-2 bg-fpt-orange my-shadow"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
        >
            <span
                class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-fpt-green"
            >
                {{ totalCollectedItems }}
                <span class="visually-hidden">unread messages</span>
            </span>
            <figure class="btn-item-bag m-0">
                <img class="img-fluid" src="@/assets/icons/ic_item_bag.png" />
            </figure>
        </button>
    </div>

    <!-- Modal -->
    <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog container">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                        Vật phẩm đã thu thập được ({{ totalCollectedItems }} /
                        {{ maxCollectedItems }})
                    </h1>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div
                    class="modal-body d-flex flex-wrap gap-2 justify-content-between"
                >
                    <FLetter v-if="getF"/>
                    <PLetter v-if="getP"/>
                    <TLetter v-if="getT"/>
                    <ELetter v-if="getE"/>
                    <DLetter v-if="getD"/>
                    <ULetter v-if="getU"/>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary">
                        Đến trang bí mật
                    </button>
                    <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-dismiss="modal"
                    >
                        Đóng
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FLetter from "./game_secrets/F_Letter.vue";
import PLetter from "./game_secrets/P_Letter.vue";
import TLetter from "./game_secrets/T_Letter.vue";
import ELetter from "./game_secrets/E_Letter.vue";
import DLetter from "./game_secrets/D_Letter.vue";
import ULetter from "./game_secrets/U_Letter.vue";

import itemBagManager, { itemsToAchieve } from "@/helpers/ItemBagManager";

export default {
    components: {
        FLetter,
        PLetter,
        TLetter,
        ELetter,
        DLetter,
        ULetter,
    },
    data() {
        return {
            callbackId: null,
            totalCollectedItems: 0,
            maxCollectedItems: 0,
            getF: false,
            getP: false,
            getT: false,
            getE: false,
            getD: false,
            getU: false,
        };
    },
    mounted() {
        this.callbackId = Math.floor(Math.random() * 1000);
        this.updateItemBag();

        itemBagManager.addUpdateCallback(`item_bag_${this.callbackId}`, this.updateItemBag);
    },
    unmounted() {
        itemBagManager.removeCallback(this.callbackId);
    },
    methods: {
        getTotalCollectedItems() {
            return itemBagManager.getTotalCollectedItems();
        },
        getMaxCollectedItems() {
            return itemBagManager.getMaxCollectedItems();
        },
        updateItemBag() {
            this.totalCollectedItems = this.getTotalCollectedItems();
            this.maxCollectedItems = this.getMaxCollectedItems();

            this.getF = itemBagManager.isAchievedById(itemsToAchieve.FLetter.itemId);
            this.getP = itemBagManager.isAchievedById(itemsToAchieve.PLetter.itemId);
            this.getT = itemBagManager.isAchievedById(itemsToAchieve.TLetter.itemId);
            this.getE = itemBagManager.isAchievedById(itemsToAchieve.ELetter.itemId);
            this.getD = itemBagManager.isAchievedById(itemsToAchieve.DLetter.itemId);
            this.getU = itemBagManager.isAchievedById(itemsToAchieve.ULetter.itemId);
        },
    },
};
</script>

<style scoped>
.btn-item-bag {
    --size: 32px;
    width: var(--size);
    height: var(--size);
}
</style>