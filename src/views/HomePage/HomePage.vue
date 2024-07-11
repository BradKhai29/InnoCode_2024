<template>
    <BaseLayout>
        <HeroSection/>
        <section id="explore-section" class="container mt-5">
            <div class="row mt-5 mb-3 text-center">
                <h4 class="display-6 fst-italic">
                    Những điều thú vị sẽ được ẩn ở mỗi trang
                </h4>
                <p class="display-6 fw-bold">Bạn nhớ khám phá nhé</p>
            </div>
            <div class="row mb-5 justify-content-center">
                <h4 class="d-flex justify-content-center w-75">
                    <span class="separator flex-fill border border-dark"></span>
                    <span class="mx-3">
                        <span class="px-2 rounded my-shadow text-light bg-dark"
                            >3 chủ đề</span
                        >
                        để bạn khám phá
                    </span>
                    <span class="separator flex-fill border border-dark"></span>
                </h4>
            </div>

            <div class="row mb-5">
                <DigitalTransformationCard />
                <EducationAndEnvironment />
                <AiAndSemiconductorCard />
            </div>
            <!-- /.row -->
        </section>
    </BaseLayout>
</template>

<script>
import BaseLayout from "@/layouts/BaseLayout.vue";
import HeroSection from "@/components/feats/HomePage/HeroSection.vue";
import DigitalTransformationCard from "@/components/feats/HomePage/DigitalTransformationCard.vue";
import AiAndSemiconductorCard from "@/components/feats/HomePage/AiAndSemiconductorCard.vue";
import EducationAndEnvironment from "@/components/feats/HomePage/EducationAndEnvironmentCard.vue";

export default {
    name: "HelloWorld",
    components: {
        HeroSection,
        BaseLayout,
        DigitalTransformationCard,
        AiAndSemiconductorCard,
        EducationAndEnvironment,
    },
    props: {
        msg: String,
    },
};
</script>
