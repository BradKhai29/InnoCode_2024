<template>
    <nav class="navbar navbar-expand-lg bg-secondary-subtle">
        <div class="container">
            <router-link class="navbar-brand m-0 bg-light rounded px-2" to="/">
                <figure class="m-0" style="width: 96px">
                    <img
                        class="img-fluid"
                        src="@/assets/images/fpt_education.png"
                        alt=""
                    />
                </figure>
            </router-link>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div
                class="collapse navbar-collapse mt-2 mt-md-0"
                id="navbarSupportedContent"
            >
                <ul class="navbar-nav mb-2 mx-auto mb-lg-0 fw-bold">
                    <li class="nav-item">
                        <router-link
                            class="nav-link p-2 rounded bg-fpt-blue text-light"
                            aria-current="page"
                            to="/digital"
                            >Chuyển đổi số</router-link>
                    </li>
                    <li class="nav-item mx-md-2 my-md-0 my-2">
                        <router-link
                            class="nav-link p-2 rounded bg-fpt-orange text-light"
                            to="/ai"
                            >AI và bán dẫn</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link
                            class="nav-link p-2 rounded bg-fpt-green text-light"
                            to="/education"
                            >Giáo dục và môi trường</router-link
                        >
                    </li>
                </ul>
            </div>
            <button class="btn btn-warning">Đăng nhập</button>
        </div>
    </nav>
</template>