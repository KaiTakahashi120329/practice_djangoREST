import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import job from '../views/job.vue';
import jobEditor from '../views/jobEditor.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/job/:id",
        name: "job",
        component: job,
        props: true,
    },
    {
        path: "/editor",
        name: 'editor',
        component: jobEditor,
        props: true
    }
];

const router = new VueRouter({
    mode: "history",
    routes
});

export default router;
