Ext.define('EXT.controller.Categorias', {
    extend: 'Ext.app.Controller',
    views: ['Categorias.Listar'],
    stores: ['Categorias'],
    models: ['Categoria'],
    init: function () {
        this.getCategoriasStore().load();
    }
});