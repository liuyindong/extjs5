/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('rdec.view.main.Main', {
    extend: 'Ext.container.Container',

    xtype: 'app-main',
    
    initComponent : function() {
		Ext.setGlyphFontFamily('FontAwesome'); // 设置图标字体文件，只有设置了以后才能用glyph属性
		this.callParent();
	},
    
    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },
    
    uses : ['rdec.view.main.region.Top','rdec.view.main.region.Left',
            'rdec.view.main.region.Bottom','rdec.view.main.region.Center'
           ],

    items: [{
    	xtype:'maintop',
    	region : 'north' 
    },{
    	xtype:'mainleft',
    	region:'west'
    },{
    	xtype:'mainbottom',
    	region:'south'
    },
    {
    	region : 'center', // 中间面版
		xtype : 'maincenter'
    }
    ]
});
