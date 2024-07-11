import { createRouter, createWebHistory } from "vue-router";

// Import all views.
import HomePage from "@/views/HomePage/HomePage.vue";
import DigitalTransHomePage from "@/views/DigitalTrans/MainPage.vue";
import DigitalTransFirstPage from "@/views/DigitalTrans/FirstPage.vue";
import DigitalTransSecondPage from "@/views/DigitalTrans/SecondPage.vue";

const routes = [
	{ path: "/", component: HomePage },
	{
		path: "/digital",
		children: [
			{ path: "", component: DigitalTransHomePage },
			{ path: "first", component: DigitalTransFirstPage },
			{ path: "second", component: DigitalTransSecondPage }
		]
	}
];

const ignore = () => {};

const router = createRouter({
	history: createWebHistory(),
	routes,
	linkActiveClass: "active",
	linkExactActiveClass: "exact-active",
	scrollBehavior(to, from, savedPosition) {
		ignore(to, from, savedPosition);
		if (savedPosition) {
			return savedPosition;
		}

		return { left: 0, top: 0 };
	}
});

export default router;
