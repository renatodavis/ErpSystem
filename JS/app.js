Ext.application({
    name: 'EXT',
    appFolder: 'JS',

    controllers: [
        'Categorias'
    ],


    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'border',
            items: [
		    {
		        region: 'west',
		        width: 180,
		        //height: 150,
		        split: true,
		        title: 'Menu do Sistema',
		        collapsible: true,
		        layout: {
		            type: 'accordion',
		            animate: true,
		            fill: true
		        },
		        items: [{
		            title: 'Cadastros',
		            iconCls: 'icon-user-add',
		            html: '<div><a href="http://desenvolvendosistemaerp.blogspot.com/">    Teste   </a></div>'
		            

		        }, {
		            title: 'Movimentações',
		            iconCls: 'icon-user-add'
		            //html: 'Panel content!'
		        }, {
		            title: 'Relatórios',
		            iconCls: 'icon-user-add'
		            //html: 'Panel content!'
		        }],

		        listeners: {
		            itemclick: function () {
		                debugger;
		                this.addTab();
		            }
		        }
		        // could use a TreePanel or AccordionLayout for navigational items
		    }, {
		        region: 'south',
		        title: 'South Panel',
		        collapsible: true,
		        html: 'Information goes here',
		        split: true,
		        height: 100,
		        minHeight: 100
		    }, {
		        region: 'east',
		        title: 'East Panel',
		        collapsible: true,
		        split: true,
		        width: 150
		    }, {
		        region: 'center',
		        xtype: 'listaCategorias'


		    }]

        });
    }
});