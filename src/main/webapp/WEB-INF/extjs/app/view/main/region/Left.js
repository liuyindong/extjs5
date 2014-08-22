/**
 * 
 */
Ext.define("rdec.view.main.region.Left",{
	extend : 'Ext.panel.Panel',
	alias : 'widget.mainleft',
	
	defaults: {
	    bodyStyle: 'padding:15px'
	},
	
	alias : 'widget.mainleft', 
	
	layout : {
		type : 'accordion',
		animate : true
	},
	glyph : 0xf0c9,
	
    collapsible : true, // 可以折叠隐藏
    
	collapseMode : 'mini', // 折叠陷藏模式
    
    title:'系统菜单',

	split : true,
	
	width : 200,
	
	items : [
	 {
		title : '用户列表'
	 }, 
	 {
		title : '招生总览'
	 }, 
	 {
		title : '数据统计'
	}]

   
})