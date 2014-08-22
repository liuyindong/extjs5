/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('rdec.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'rdec',
        
        user:{
        	name:'张三'
        }
    }
});