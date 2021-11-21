exports.items=[
    {
       label:'User Profile',
       icon:'pi pi-fw pi-user',
       items:[
          {
             label:'New',
             icon:'pi pi-fw pi-plus',
          },

          {
             label:'Load',
             icon:'pi pi-fw pi-user',
          },
          {
             label:'Delete',
             icon:'pi pi-fw pi-trash'
          },
          {
             separator:true
          },
          {
             label:'Export',
             icon:'pi pi-fw pi-external-link'
          }
       ]
    },
    {
       label:'Simulation history',
       icon:'pi pi-fw pi-map',
       items:[
          {
             label:'Global Evolution',
             icon:'pi pi-fw pi-chart-line'
          },
          {
             label:'Individual',
             icon:'pi pi-fw pi-book'
          },
          {
             label:'Expert notes',
             icon:'pi pi-fw pi-book'
          },

       ]
    },
    {
       label:'New simulation',
       icon:'pi pi-fw pi-compass',
       items:[
          {
             label:'Default options',
             icon:'pi pi-fw pi-pencil',
          },
          {
             label:'Set options',
             icon:'pi pi-fw pi-cog',
          },
          {
            label: 'Load simulation file',
            icon :'pi pi-fw pi-file'
          }
       ]
    },
    {
       label:'Help',
       icon:'pi pi-fw pi-search',
       items:[
          {
             label:'About',
             icon:'pi pi-fw pi-pencil',
             to: '/about'
          },
          {
             label:'User guide',
             icon:'pi pi-fw pi-book',
          },
          {
            label: 'Instructor guide',
            icon :'pi pi-fw pi-book'
          }
       ]
    },

 ]
