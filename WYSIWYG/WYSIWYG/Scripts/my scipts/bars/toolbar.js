$(() => {
	window.ToolBar = ToolBar;
	function ToolBar(options) {
		var that = this;

		Bar.call(that, options);

		that.$divs = [];
		for (var i = 0; i < 30; i++) {
			that.$divs[i] = $('<span />');
			that.$elem.append(that.$divs[i]);
		}

		//options.$parent = that.$elem;
	}
})
