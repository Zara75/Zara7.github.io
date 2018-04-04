function Popup (options) {
    var $popup = document.createElement('table');
        $popup.classList.add('mainTable');
    
    options.$popup = $popup;
    
    Popup.createTitlebar(options);
    Popup.createContainer(options);
    Popup.createButtonbar(options);
    
    options.parent.appendChild($popup);
    
    Popup.close({$popup: options.$popup});
    return $popup;
}
Popup.open = function(options){
    options.$popup.style.display = 'inline-block';
    undefined != options.popupClass && options.$popup.classList.add('popup');
    if(options.$popup.onopen) {
        options.$popup.onopen();
    }
    options.$popup.$titlebar.text('User: ' + options.getTitle(options.model));
    if(options.isModal) {
        console.log(parent);
        Popup.createDimLayer({parent: $popup});
        return $popup;
    }
}
Popup.createDimLayer = function(options) {
    var $dimLayer = document.createElement('div');
        $dimLayer.setAttribute('id', 'dimLayer');
        $dimLayer.classList.add('dim_layer');
        main.appendChild($dimLayer);
    $dimLayer.onclick = function () {
        alert('hi');
    }
//    $dimLayer.onfocus = function() {
//        
//    };
}
Popup.close = function(options){
    options.$popup.style.display = 'none';
    if(options.$popup.onclose) {
        options.$popup.onclose();
    }
}
Popup.createTitlebar = function(options) {
    var $titlebar = options.$popup.createTHead(),
        $row = $titlebar.insertRow(),
        $cell = $row.insertCell();
    
    $titlebar.setAttribute('id', 'mainThead');
    $titlebar.$cell = $cell;
    $titlebar.text = function (text) {
        this.$cell.innerText = text;
        for (let i = 0; i < 3; i++) {
            var $minMaxCloseBtn = document.createElement('span');
            $minMaxCloseBtn.classList.add('min_max_close');
            $minMaxCloseBtn.setAttribute('id', 'button' + i);
            $cell.appendChild($minMaxCloseBtn);
        };
        var close = document.getElementById('button0');
        close.onclick = function (e) {
            $popup.style.display = 'none';
            var $dimLayer = document.getElementsByClassName('dim_layer')[0];
            $dimLayer.classList.remove('dim_layer');
           
        };
        var minMax = document.getElementById('button2');
        minMax.onclick = function (e) {
            $mainTable.style.display = ($mainTable.style.display == 'none') ? '' : 'none';
            $footer.style.display = ($footer.style.display == 'inline-block') ? '' : 'inline-block';
            $footer.appendChild($theadTd);
            //                $cardContainer[0].classList.remove('gridTable');
            if ($mainTable.style.display !== 'none') {
                $mainThaed.prepend($theadTd);
            };
        }
        var fullScreen = document.getElementById('button1');
        fullScreen.onclick = function (e) {
            $form.classList.toggle('fullScreen');
            $mainTable.classList.toggle('fullScreen');
        };
    }
    options.$popup.$titlebar = $titlebar;
}
Popup.createContainer = function(options) {
    var $container = options.$popup.createTBody(),
        $row = $container.insertRow();
        $cell = $row.insertCell();
        $container.cell = $cell;
        if(options.$contentForm){
            $container.cell.appendChild(options.$contentForm);  
        }
}
Popup.createButtonbar = function(options) {
    
    
}