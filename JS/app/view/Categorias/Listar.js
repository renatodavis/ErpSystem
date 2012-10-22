Ext.define('EXT.view.Categorias.Listar', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.listaCategorias',
    store: 'Categorias',
    title: 'Todos Categorias',

    requires: [
        'Ext.grid.plugin.CellEditing',
        'Ext.form.field.Text',
        'Ext.toolbar.TextItem'
    ],
    initComponent: function () {

        this.editing = Ext.create('Ext.grid.plugin.CellEditing');
        Ext.apply(this,{
            iconCls: 'icon-grid',
            frame: true,
            plugins: [this.editing],
            dockedItems: [{
                xtype: 'toolbar',
                items: [{
                    iconCls: 'icon-add',
                    text: 'Add',
                    scope: this,
                    handler: this.onAddClick
                }, {
                    iconCls: 'icon-delete',
                    text: 'Delete',
                    disabled: false,
                    itemId: 'delete',
                    scope: this,
                    handler: this.onDeleteClick
                }]
            }]
            

        });


        this.columns = [
            { header: 'Código', dataIndex: 'CategoryID' },
            { header: 'Nome', dataIndex: 'CategoryName' }
            
        ];

        this.callParent(arguments);
    },
    onAddClick: function () {
        Ext.MessageBox.show({
            title: 'Incluíndo...',
            msg: 'Incluído com sucesso! ',
            icon: Ext.MessageBox.INFO,
            buttons: Ext.Msg.OK
        });
    },
    onDeleteClick: function(){
        Ext.MessageBox.show({
            title: 'Exclusão',
            msg: 'Excluído com sucesso!',
            icon: Ext.MessageBox.INFO,
            buttons: Ext.Msg.OK
        });
    },
});



