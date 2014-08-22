
/**
 * 这里存放了Grid的列renderer的各种自定义的方法
 */

Ext.onReady(function() {

	// 可以制作一个控件，来修改这二个属性，达到可以修改金额单位的目的
	Ext.monetaryText = '万'; // 加在数字后面的金额单位
	Ext.monetaryUnit = 10000;

	// Ext.monetary = '亿';
	// Ext.monetaryUnit = 10000*10000;

	if (Ext.util && Ext.util.Format) {

		Ext.apply(Ext.util.Format, {

			// 金额字段
			monetaryRenderer : function(val, metaData, model, row, col, store,
					gridview) {
				if (val) {
					if (Ext.monetaryUnit && Ext.monetaryUnit != 1)
						val = val / Ext.monetaryUnit;
					// 正数用蓝色显示，负数用红色显示,必须css和返回的值分开来设置，否则不能autoSize()
					metaData.style = 'color:' + (val > 0 ? 'blue' : 'red') + ';'
					return Ext.util.Format.number(val, '0,000.00') + Ext.monetaryText;
				} else
					return ''; // 如果为0,则不显示
			},

			// 日期
			dateRenderer : function(val, metaData, model, row, col, store, gridview) {
				metaData.style = 'color:#a40;';
				return Ext.util.Format.date(val, 'Y-m-d');
			},

			// 整型变量
			floatRenderer : function(val, metaData, model, row, col, store, gridview) {
				metaData.style = 'color:' + (val > 0 ? 'blue' : 'red') + ';'
				return val == 0 ? '' : val;
			},

			// 整型变量
			intRenderer : function(val, metaData, model, row, col, store, gridview) {
				metaData.style = 'color:' + (val > 0 ? 'blue' : 'red') + ';';
				// ';float:right;'; 这个去掉了，不然行业编辑的时候位置不对
				return val == 0 ? '' : val;
			},

			// 百分比
			percentRenderer : function(v, metaData, model) {
				v = v * 100;
				var v1 = v > 100 ? 100 : v;
				v1 = v1 < 0 ? 0 : v1;
				var v2 = parseInt(v1 * 2.55).toString(16);
				if (v2.length == 1)
					v2 = '0' + v2;
				return Ext.String
						.format(
								'<div>'
										+ '<div style="float:left;border:1px solid #008000;height:15px;width:100%;">'
										+ '<div style="float:left;text-align:center;width:100%;color:blue;">{0}%</div>'
										+ '<div style="background: #FAB2{2};width:{1}%;height:13px;"></div>'
										+ '</div></div>', v, v1, v2);
			},

			// 对模块的namefields字段加粗显示
			nameFieldRenderer : function(val, metaData, model, row, col, store,
					gridview) {
				metaData.style = 'font-weight:bold;';
				return val;
			}

		})
	};
});
