module.exports = {
  menuMock: [
    {
      idOption: 1,
      name: 'dashboard',
      path: '/enrollment/inicio',
      icon: 'mdiHome',
      order: 1,
      optionsList: [],
      group: 1
    },
    {
      idOption: 2,
      name: 'reports',
      path: '/dashboard/',
      icon: 'mdiChartBox',
      order: 2,
      optionsList: [],
      group: 1
    },
    {
      idOption: 3,
      name: 'qr',
      path: '/dale-other-frontend/',
      icon: 'mdiChartBox',
      order: 3,
      optionsList: [],
      group: 1
    },
    {
      idOption: '7',
      name: 'settings',
      path: '/enrollment/ajustes',
      icon: 'mdiCog',
      order: '3',
      optionsList: [
        {
          idOption: '9',
          name: 'profile',
          path: '/enrollment/perfil-cliente',
          icon: 'mdiAccount',
          order: '1',
          optionsList: [],
          group: '2',
          firstLevel: null
        },
        {
          idOption: '10',
          name: 'changePassword',
          path: '/enrollment/ajustes/cambiar-contrasena',
          icon: 'mdiHelpCircle',
          order: '1',
          optionsList: [],
          group: '2',
          firstLevel: null
        },
        {
          idOption: '11',
          name: 'brand',
          path: '/enrollment/brand',
          icon: 'mdiHelpCircle',
          order: '1',
          optionsList: [],
          group: '2',
          firstLevel: null
        }
      ],
      group: '2',
      firstLevel: true
    },
    {
      idOptions: null,
      name: 'logout',
      path: 'logout',
      group: null,
      icon: 'mdiLogoutVariant',
      optionsList: null,
      order: null
    }
  ]
};
