import Main from '../components/Main.vue';
import Details from '../components/Details.vue';
import Inventory from '../components/Inventory.vue';
import Wish1 from '../components/Wish1.vue';
import Wish10 from '../components/Wish10.vue';

export const routes = [
    {
        path: "/",
        component: Main,
    },
    {
        path: "/details",
        component: Details,
    },
    {
        path: "/inventory",
        component: Inventory,
    },
    {
        path: "/wish1",
        component: Wish1,
    },
    {
        path: "/wish10",
        component: Wish10,
    },
]