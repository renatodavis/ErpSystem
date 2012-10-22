Ext.define('EXT.store.Categorias', {
    extend: 'Ext.data.Store',
    model: 'EXT.model.Categoria',
    proxy: {
        type: 'ajax',
        url: 'Home/Listar',
        reader: {
            type: 'json'
        }
    }
});