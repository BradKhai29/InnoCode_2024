<template>
    <div class="col-lg-4 d-flex flex-column">
        <figure
            class="mx-auto rounded-circle overflow-hidden my-shadow"
            style="width: 140px; height: 140px"
        >
            <img
                class="w-100 h-100"
                src="@/assets/images/digital_trans/digital_trans.webp"
                alt=""
            />
        </figure>

        <h4 class="text-center">
            <router-link to="/digital" class="text-dark text-decoration-none">Chuyển đổi số</router-link>
        </h4>
        <p class="text-center d-flex flex-column">
            <span>
                Chuyển đổi số đang là chủ đề nóng rất được chú trọng không chỉ thế giới
            </span>
            <span>
                mà FPT cũng rất quan tâm.
            </span>
        </p>
        <p class="text-center">
            <router-link class="text-decoration-none py-2 px-3 rounded my-shadow bg-fpt-blue text-white" to="/digital">
                Khám phá &raquo;
            </router-link>
        </p>
    </div>
</template>