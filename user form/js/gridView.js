function GridView(options) {
	var $grid = document.createElement('table'),
        caps = options.scheme.map(function (item) {
		return item.cap;
        });
    $grid.setAttribute('id', 'gridTable');
    
	GridView.createHead({$grid: $grid, caps: caps});
	GridView.createBody({
        $grid: $grid, 
        model: options.model,
        $popup: options.$popup,
        parent: options.parent
	});
	options.parent = document.getElementsByClassName('cardContainer')[0];
	console.log(options.parent);
	options.parent.appendChild($grid);
}

GridView.createHead = function(options) {
	var $head = options.$grid.createTHead(),
		$row = $head.insertRow();

	options.caps.forEach(function(cap) {
		var $cell = $row.insertCell();
		$cell.innerHTML = cap;
    });

    var cellEdit = $row.insertCell(),
        cellDelete = $row.insertCell();

    cellEdit.innerText = 'Edit';
    cellEdit.classList.add('edit');
    cellDelete.innerText = 'Delete';
    cellDelete.classList.add('delete');
};

GridView.createBody = function(options) {
    var $body = options.$grid.createTBody(),
        data = options.model.selectAll();
    options.$grid.$body = $body;
    
    data.forEach(function (user) {
        var $row = $body.insertRow();
           
        userGridScheme.forEach(function (col) {
            var $cell = $row.insertCell();
            $cell.innerText = user[col.name];
            $cell.classList.add(col.class);
        });
        GridView.createEdit({
            $row: $row, 
            id: user.ID, 
            $popup: options.$popup,
            model: user,
            parent: options.parent
        });
        GridView.createDelete({
            $row: $row, 
            id: user.ID,
            model: User,
            $grid: options.$grid
        });
	});
};

GridView.createEdit = function (options) {
    var $cell = options.$row.insertCell(),
        $img = document.createElement('img');
    $img.setAttribute('alt', 'Edit');
    $img.src = 'images/document_edite1.png';

    $img.onclick = function () {
        Popup.open({
            $popup: options.$popup,
            getTitle: (model) => model.FirstName + ' ' + model.LastName,
            model: options.model,
            isModal: true,
            popupClass: 'popup',
            parent: options.parent
        });
  
    }
    $cell.appendChild($img);
}

GridView.createDelete = function (options) {
    var $cell = options.$row.insertCell(),
        $img = document.createElement('img');
    $img.setAttribute('alt', 'Delete');
    $img.src = 'images/delete.png';
    $img.onclick = function () {
        if (confirm('Are you sure you want to delete this user?')) {
            options.model.delete(options.id);
            options.$grid.removeChild(options.$grid.$body);

            GridView.createBody(options);
        }
    }
    $cell.appendChild($img);
}
