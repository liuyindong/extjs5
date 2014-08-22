
/**
 * 系统主页的顶部区域，主要放置系统名称，菜单，和一些快捷按钮
 */
Ext.define('rdec.view.main.region.Top', 
{
	extend : 'Ext.toolbar.Toolbar',

	alias : 'widget.maintop', // 定义了这个组件的xtype类型为maintop
		
	uses:['rdec.ux.ButtonTransparent'],

	defaults : {
		xtype : 'buttontransparent'
	},

	items : [ '->',{
		text : '首页',
		glyph : 0xf1c0
	}]

});