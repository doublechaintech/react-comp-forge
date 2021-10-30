// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        {
          path: '/test',
          component: '../pages/test/test-page',
        },
        {
          path: '/datagrid',
          component: './datagrid',
        },
        {
          path: '/newgrid',
          component: './newgrid',
        },
        {
          path: '/',
          component: '../pages/index',
        },
      ],
    },
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: false,
        dynamicImport: false,
        title: 'react-comp-forge',
        dll: false,
        routes: {
          exclude: [/components\//],
        },
      },
    ],
  ],
};
