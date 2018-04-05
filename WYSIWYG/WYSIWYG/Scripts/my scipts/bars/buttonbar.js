$(() => {
	window.ButtonBar = ButtonBar;
	function ButtonBar(options) {
		var that = this,
			buttonNames = ['new', 'save', 'delete', 'download'];

		that.$buttons = [];	

		Bar.call(that, options);

		for (var i = 0; i < 4; i++) {
			that.$buttons[i] = $('<input type="button" />').addClass('buttonBarButtons').val(buttonNames[i]);
			console.log(that.$buttons[i]);
			that.$elem.append(that.$buttons[i]);
		}

		that.$buttons[0].click(() => {
			var fileName = window.prompt('Enter file name please.');
			$.ajax({
				type: 'POST',
				url: 'CreateFile',
				data: { name: fileName },
				success: (message) => {
					console.log(message);
					(message == "Success") && $('fileBar').append($('<div />').text(fileName));
				},
				error: () => {
					console.log(321);
				}
			});
		});

		that.$buttons[1].click(() => {
			var fileName = $('#currFile').text(),
				text = $('content').text();
			$.ajax({
				type: 'POST',
				url: 'SaveFile',
				data: { name: fileName, text: text },
				success: (res) => {
					console.log('saved');
				},
				error: () => {
					console.log('something went wrong');
				}
			});
		});

		that.$buttons[2].click(() => {
			var isSure = confirm('Are you sure?'),
				fileName = $('#currFile').text();
			if (isSure) {
				$.ajax({
					type: 'POST',
					url: 'DeleteFile',
					data: { name: fileName},
					success: () => {
						console.log('removed');
						$('fileBar #currFile').remove();
						$('content').text('');
					},
					error: () => {
						console.log('something went wrong');
					}
				});
			}
		});
        
        that.$buttons[3].click(() => {
		  alert('hi');
		});
        
        var upload = $('<input type="file"/>').addClass('uploadButton');
        that.$elem.append(upload);
	}
})
