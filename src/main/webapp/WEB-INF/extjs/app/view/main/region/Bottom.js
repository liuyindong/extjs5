/**
 * 
 */
Ext.define("rdec.view.main.region.Bottom",{
	
	extend : 'Ext.toolbar.Toolbar',

	alias : 'widget.mainbottom',
	
	defaults : {
		xtype : 'buttontransparent'
	},

	style : 'background-color : #f6f5ec;',
	
	items : [ '->',{
		bind : {
			text : '用户:{user.name}'
		},
		glyph : 0xf007
	}]
})