const routes = [
    {
        path: '/',
        component: () => import('../components/App/component')
    },
    {
        path: '/first',
        component: () => import('../components/First/component.js')
    },
    {
        path: '/two',
        component: () => import('../components/Two/component.js')
    },
    {
        path: '/thred',
        component: () => import('../components/Third/component.js')
    }
]

export default routes