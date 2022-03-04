const routes = [
  {
    // path: "/login",
    // component: () => import("../component/login-Page.vue"),
    // children: [{ path: "", component: () => import("pages/Index.vue") }],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/dasaxos",
    component: () => import("../component/login-Page.vue"),
  },
];

export default routes;
