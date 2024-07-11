<template>
    <BaseLayout>
        <div class="px-4 py-5 mb-5 text-center my-shadow">
            <div class="container">
                <figure class="row">
                    <img
                        class="w-75 d-block mx-auto mb-4 img-fluid"
                        src="@/assets/images/digital_trans/digital_trans_2.jpg"
                    />
                </figure>
            </div>

            <h1 class="display-5 fw-bold">Bạn đang ở trang Chuyển đổi số</h1>

            <div class="col-lg-6 mx-auto">
                <p class="lead mb-4">
                    Ở trang này, sẽ có 2 trang nhỏ để bạn tìm kiếm bí ẩn của
                    phần này.
                </p>
                <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <button
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                        class="btn btn-primary btn-lg px-4 my-shadow"
                    >
                        Xem bí ẩn
                    </button>
                </div>
            </div>
        </div>
        <!-- Modal -->
        <div
            class="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
        >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">
                            2 vật phẩm có thể thu thập
                        </h1>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div class="modal-body d-flex justify-content-center gap-3">
                        <FLetter :collected="getF"/>
                        <ELetter :collected="getE"/>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">
                            Đã hiểu
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <section class="container">
            <div class="row mb-2">
                <div class="col-md-6">
                    <div
                        class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
                    >
                        <div class="col-auto d-none d-lg-block">
                            <figure class="figure-article m-0">
                                <img class="img-fluid h-100" src="@/assets/images/digital_trans/digital_trans_article_1.jpg" alt="">
                            </figure>
                        </div>
                        <div class="col p-4 d-flex flex-column position-static">
                            <h3 class="mb-0">Bắt nhịp chuyển đổi số</h3>
                            <div class="mb-2 invisible">.</div>
                            <p class="card-text mb-auto">
                                Hành trình tham gia vào công cuộc chuyển đổi số của FPT.
                            </p>
                            <router-link to="/digital/first" class="stretched-link">Xem ngay</router-link>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div
                        class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
                    >
                        <div class="col p-4 d-flex flex-column position-static">
                            <h3 class="mb-2">Câu chuyển chuyển đổi số tại FPT</h3>
                            <p class="mb-auto">
                                Dự án chuyển đối số tại FPT có nhiều điểm thú vị.
                            </p>
                            <router-link to="/digital/second" class="stretched-link">Xem ngay</router-link>
                        </div>
                        <div class="col-auto d-none d-lg-block">
                            <figure class="figure-article m-0">
                                <img class="img-fluid h-100" src="@/assets/images/digital_trans/digital_trans_article_2.jpg" alt="">
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </BaseLayout>
</template>

<script>
import BaseLayout from "@/layouts/BaseLayout.vue";
import FLetter from "@/components/shared/game_secrets/F_Letter.vue";
import ELetter from "@/components/shared/game_secrets/E_Letter.vue";
import itemBagManager, { itemsToAchieve } from "@/helpers/ItemBagManager";


export default {
    components: {
        FLetter,
        ELetter,
        BaseLayout,
    },
    data() {
        return {
            getF: false,
            getE: false,
        }
    },
    mounted() {
        this.getF = itemBagManager.isAchievedById(itemsToAchieve.FLetter.itemId);
        this.getE = itemBagManager.isAchievedById(itemsToAchieve.ELetter.itemId);
    }
};
</script>

<style scoped>
.figure-article {
    width: 200px;
    height: 250px;
}
</style>