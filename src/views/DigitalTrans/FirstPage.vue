<template>
    <BaseLayout>
        <main class="container mb-5">
            <div class="p-2 my-shadow p-md-5 mb-4 rounded bg-light mt-4 row">
                <div class="col-md-8">
                    <h1 class="display-4 fst-italic">
                        Hành trình bắt nhịp chuyển đổi số của
                        <span class="fw-bold">FPT</span>
                    </h1>
                    <p class="lead my-3">
                        FPT luôn tích cực đồng hành, hỗ trợ các địa phương phát
                        triển toàn diện các giải pháp chuyển đổi số nhằm xây
                        dựng kinh tế số - xã hội số - chính phủ số
                    </p>
                    <p class="lead mb-0">
                        <a
                            href="https://kinhtedothi.vn/fpt-hai-qua-ngotnho-chuyen-doi-so.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="p-2 bg-fpt-blue rounded text-decoration-none text-light fst-italic"
                            >Xem thêm</a
                        >
                    </p>
                </div>
                <div class="col-md-4 px-0">
                    <figure class="rounded overflow-hidden m-0 my-shadow">
                        <img
                            class="img-fluid"
                            src="@/assets/images/digital_trans/digital_trans_quiz_1.jpeg"
                        />
                    </figure>
                </div>
            </div>

            <div class="row g-5">
                <div class="col-md-8">
                    <h3
                        class="pb-4 mb-4 fst-italic border-bottom d-flex align-items-center"
                    >
                        <span>Kể từ năm</span>
                        <div
                            id="dropHere"
                            class="d-flex ms-2 p-1 rounded bg-fpt-blue border border-2 border-dark"
                        >
                            <span v-if="!answerCorrect" class="invisible"
                                >Dữ kiện còn thiếu</span
                            >
                        </div>
                        <small
                            v-if="answerCorrect"
                            class="text-small btn btn-warning fw-bold ms-auto"
                            data-bs-toggle="modal"
                            data-bs-target="#receiveItem"
                        >
                            Nhận vật phẩm.
                        </small>
                    </h3>
                    <!-- Model -->
                    <div
                        v-if="answerCorrect"
                        class="modal fade"
                        id="receiveItem"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                    >
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1
                                        class="modal-title fs-5"
                                        id="exampleModalLabel"
                                    >
                                        Bạn nhận được
                                    </h1>
                                </div>
                                <div
                                    class="modal-body d-flex justify-content-center"
                                >
                                    <FLetter />
                                </div>
                                <div class="modal-footer">
                                    <button
                                        @click="receiveItem"
                                        type="button"
                                        class="btn btn-primary"
                                        data-bs-dismiss="modal"
                                    >
                                        Nhận vật phẩm
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <article class="blog-post">
                        <h3 class="blog-post-title">
                            Đồng hành cùng các địa phương thúc đẩy chuyển đổi số
                        </h3>
                        <p>
                            Là công ty công nghệ đầu ngành, hòa cùng khát vọng
                            chung của đất nước vì một Việt Nam cường thịnh trong
                            tương lai, FPT luôn tiên phong trong các xu hướng
                            công nghệ mới góp phần thúc đẩy chuyển đổi số quốc
                            gia, để mỗi người dân là một công dân điện tử, mỗi
                            nhà lãnh đạo là một nhà lãnh đạo số, mỗi doanh
                            nghiệp là một doanh nghiệp số, mỗi chính quyền là
                            một chính quyền số.
                        </p>
                    </article>
                </div>

                <div class="col-md-4">
                    <div
                        class="position-absolute p-4 mb-3 bg-light rounded"
                        style="width: 340px"
                    >
                        <h4 class="fst-italic">Dữ kiện còn thiếu trong bài</h4>
                        <div class="mb-0 d-flex gap-2">
                            <DragAndDrop2
                                v-for="answer in answers"
                                :key="answer.id"
                                :elementId="answer.id"
                            >
                                <button
                                    class="rounded my-shadow btn btn-primary"
                                >
                                    {{ answer.year }}
                                </button>
                            </DragAndDrop2>
                        </div>
                    </div>
                    <DragAndDrop elementId="hiddenSecret">
                        <div
                            class="p-4 bg-dark text-light rounded"
                            style="width: 340px; height: 200px"
                        >
                            <h4 class="fst-italic">Vai trò của FPT</h4>
                            <p class="mb-0">
                                FPT dẫn dắt quá trình chuyển đổi số quốc gia mở
                                ra vô vàn cơ hội phát triển.
                            </p>
                            <p class="mt-4 m-0 btn btn-light">
                                Kéo để xem điều đặc biệt
                            </p>
                        </div>
                    </DragAndDrop>
                </div>
            </div>
        </main>
    </BaseLayout>
</template>

<script>
import BaseLayout from "@/layouts/BaseLayout.vue";
import DragAndDrop2 from "@/components/feats/DigitalTrans/DragAndDrop2.vue";
import DragAndDrop from "@/components/feats/DigitalTrans/DragAndDrop.vue";
import FLetter from "@/components/shared/game_secrets/F_Letter.vue";

import quizManager from "@/helpers/DigitalTransQuizManager";
import itemBagManager from "@/helpers/ItemBagManager";
import { itemsToAchieve } from "@/helpers/ItemBagManager";

export default {
    components: { BaseLayout, DragAndDrop, DragAndDrop2, FLetter },
    data() {
        return {
            answers: [
                { id: 0, year: 2014 },
                { id: 1, year: 2016 },
                { id: 2, year: 2018 },
            ],
            correctYear: 2016,
            answerCorrect: false,
            answerId: 0,
        };
    },
    mounted() {
        const dropBox = document.getElementById("dropHere");

        if (dropBox) {
            dropBox.addEventListener("dragover", this.handleDragOver);
            dropBox.addEventListener("drop", this.handleDrop);
        }

        if (quizManager.isQuestionAnswered(this.answerId)) {
            this.answerCorrect = true;
        }
    },
    methods: {
        /**
         * @param {DragEvent} event EventObject to handle drag.
         */
        handleDrop(event) {
            event.preventDefault();
            const elementId = event.dataTransfer.getData("elementId");

            const isCorrectAnswer = this.checkAnswer(elementId);

            if (isCorrectAnswer) {
                const element = document.getElementById(elementId);
                event.target.appendChild(element);
                this.answerCorrect = true;
                quizManager.setQuestionAnswer(this.answerId);
            }
        },
        handleDragOver(event) {
            event.preventDefault();
        },
        checkAnswer(elementId) {
            const isCorrectAnswer =
                this.answers[elementId].year == this.correctYear;

            return isCorrectAnswer;
        },
        receiveItem() {
            itemBagManager.addItem(itemsToAchieve.FLetter.itemId);
        },
    },
};
</script>

<style scoped>
#mydiv {
    position: absolute;
    z-index: 9;
    background-color: #f1f1f1;
    border: 1px solid #d3d3d3;
    text-align: center;
}

#mydivheader {
    padding: 10px;
    cursor: move;
    z-index: 10;
    background-color: #2196f3;
    color: #fff;
}
</style>