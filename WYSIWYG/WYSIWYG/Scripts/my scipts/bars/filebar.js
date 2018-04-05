$(() => {
    window.FileBar = FileBar;
    function FileBar(options) {
        var that = this;
		Bar.call(that, options);

		$('fileBar').on('click', 'div', (e) => {
			var fileName = $(e.target).text();
			$('fileBar > div').removeAttr('id');
			$(e.target).attr('id', 'currFile');
			//alert(1);
			//debugger
			$.ajax({
				type: 'POST',
				url: 'ReadFile',
				data: { name: fileName },
				success: (res) => {
					console.log(123);
					$('content').html(res);
				},
				error: () => {
					console.log(321);
				}
			})
			//Ajax -> ReadFile
		});
	}
})
