import MainPage from "./components/MainPage";
import NotePage from "./components/NotePage"
import { createRouter, createWebHistory } from "vue-router";


const routes = [
    {
        path: '/',
        component: MainPage,

    },
    {
        path: '/notes/:id',
        component: NotePage,
        name: 'NotePage',
        props: true
    },

]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;