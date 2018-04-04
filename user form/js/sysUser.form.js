function SysUserForm(options) {
    var $form = document.createElement('form');
        $form.setAttribute('id', 'userForm');
    
    options.parent = $form;
    let $formTable = document.createElement('table'),
        $formTbody = document.createElement('tbody'),
        $row = $formTbody.insertRow(),
        $cell0 = $row.insertCell(),
        $cell1 = $row.insertCell();
    $formTable.appendChild($formTbody);
    options.parent.appendChild($formTable);
    
    options.parent = $cell0;
    createLeftTable(options);
    options.parent = $cell1;
    createRightTable(options);
    
    return $form;
};
function createLeftTable(options){
    
    var $leftTable = document.createElement('table'),
        $leftTbody = document.createElement('tbody');
        $leftTable.setAttribute('id', 'leftTable');
    var leftMatrix = options.data.leftMatrix;
    
        $leftTable.appendChild($leftTbody);
    
    options.parent.appendChild($leftTable);
    
    options.parent = $leftTable;
    
    for(let i = 0; i < leftMatrix.length; i++){
        options.data = leftMatrix[i];
		createRow0(options);
    }
};

function createRow0(options){
    var row0 = options.parent.insertRow(-1);
    var data0 = options.data;
    for(let i = 0; i < data0.length; i++){
        options = data0[i];
        options.parent = row0;
        createCell0(options);
    }
};
function createCell0(options){
    
    if('th' === options.tagName) {
        var th0 = document.createElement('th');
        options.parent.appendChild(th0);
        var label0 = document.createElement('label');
        label0.innerHTML = options.th;
        label0.setAttribute('for', options.label);
        th0.appendChild(label0);
    } else {
        var td0 = options.parent.insertCell(1);
        if ('select' === options.tagName){
        var select0 = document.createElement('select');
        var option0 = document.createElement('option');
        option0.innerHTML = 'Select';
        select0.appendChild(option0);
        td0.appendChild(select0);
    } else {
        var input0 = document.createElement('input');
        input0.type = options.type;
        input0.setAttribute ('id', options.id);
        input0.placeholder = options.placeholder;
        input0.name = options.name;
        td0.appendChild(input0);
            }
        }
};
function createRightTable(options){
    
    var rightTable = document.createElement('table');
    rightTable.setAttribute('id', 'rightTable');
    options.data = source;
    var rightMatrix = options.data.rightMatrix;

    var rightTbody = document.createElement('tbody');
    rightTable.appendChild(rightTbody);
    
    options.parent.appendChild(rightTable);
    
    options.parent = rightTable;
    
    for(let i = 0; i < rightMatrix.length; i++){
        options.data = rightMatrix[i];
		createRow1(options);
    }
         createInput(options);
    var imgDiv = document.createElement('div'),
        img = document.createElement('img');
    imgDiv.setAttribute('id', 'imgWrapper');
    img.src = '#';
    img.setAttribute('id', 'imgLoad');
    img.setAttribute('accept', 'image/*');
    imgDiv.appendChild(img);
    options.parent.appendChild(imgDiv);
};

function createRow1(options){
    var row1 = options.parent.insertRow(-1);
    var data1 = options.data;
    for(let i = 0; i < data1.length; i++){
        options = data1[i];
        options.parent = row1;
        createCell1(options);
    }
};
function createCell1(options) {
    options.cities = [];
    if('th' === options.tagName ) {
        var th1 = document.createElement('th');
        options.parent.appendChild(th1);
        var label1 = document.createElement('label');
        label1.innerHTML = options.th;
        label1.setAttribute('for', options.label);
        th1.appendChild(label1);
    } else {
        var td1 = options.parent.insertCell(1);
        td1.setAttribute('id', options.id);
        if('select' === options.tagName) {
            var ddlCountry = document.createElement('select');
            ddlCountry.setAttribute('id', options.id);
            let option = document.createElement('option');
                option.innerHTML = 'Choose Country';
                ddlCountry.appendChild(option);
            switch(options.id) {
                case 'country':
                options.data = countries;
                for(let country of options.data) {
                    var countryOption = document.createElement('option');
                    countryOption.setAttribute('id', country.id);
                    countryOption.setAttribute('name', country.id);
                    countryOption.setAttribute('value', country.id);
                    countryOption.innerHTML = country.name;
                    ddlCountry.appendChild(countryOption);
                }
                ddlCountry.addEventListener('change', function (e) {
                    options.cities = getCities(this.value);
                    var createCityOption = document.getElementById('citySelect');
                    createCityOption.innerHTML = '';
                    var cityMatrix = options.cities;
                    for(let i = 0; i < cityMatrix.length; i++) {
                        var option2 = document.createElement('option');
                        options.data = cityMatrix[i];
                        option2.innerHTML = options.data.city;
                        option2.setAttribute('id', options.data.id);
                        createCityOption.appendChild(option2);
                    }
                });
                    td1.appendChild(ddlCountry);
                break;
                case 'city':
                citySelect = document.createElement('select');
                citySelect.setAttribute('id', 'citySelect');
                var cityOption = document.createElement('option');
                cityOption.innerHTML = 'First Choose Country';
                citySelect.appendChild( cityOption);
                var cityMatrix = options.cities;
                    td1.appendChild(citySelect);
                break;
                } 
        } else if('textarea' === options.tagName) {
                var textarea = document.createElement('textarea');
                textarea.setAttribute('id', 'text');
                textarea.rows = '5';
                textarea.cols =  '25';
                textarea.style.resize = 'none';
                textarea.placeholder = 'Call me...';
                td1.appendChild(textarea);
        } else {
              options.parent = td1;
        }
    }
};
function createInput(options){
    var parent = options.parent;
    options.data = source;
    var inputMatrix = options.data.inputMatrix;
    for(let i = 0; i < inputMatrix.length; i++) {
        options.data = inputMatrix[i];
        var data = options.data;
            for (let i = 0; i < data.length; i++){
                var ruby = document.createElement('ruby'),
                     rt = document.createElement('rt'),
                     rb = document.createElement('rb'),
                     label = document.createElement('label'),
                     input1 = document.createElement('input');
                ruby.appendChild(rb);
                ruby.appendChild(rt);
             
                options = data[i];
                input1.type = options.type;
                input1.name = options.name;
                input1.value = options.value;
                input1.setAttribute('id', options.id);
                label.innerHTML = options.text;
                label.setAttribute('class', 'label');
                label.setAttribute('for', options.label);
                rt.appendChild(label);
                rb.appendChild(input1);
                if('radio' === options.type){
                      parent = document.getElementById('firstTd');
                    
                    } else {
                            parent = document.getElementById('secondTd');
                        }
//                parent.appendChild(ruby);
        }
    }
}   
function getCities(parentId) {
    if(null == parentId){
        return cities;
    }
    return cities.filter(function(city){
        return city.countryId == parentId;
    });
}
var title = new MovingTitle('Desired title...', 300, 100);
title.init();
     
function MovingTitle(writeText, interval, visibleLetters) {
    var _instance = {};

    var _currId = 0;
    var _numberOfLetters = writeText.length;

    function updateTitle() {
        _currId += 1;
        if(_numberOfLetters <= _currId) {
            _currId = 0; 
        }

        var startId = _currId;
        var endId = startId + visibleLetters;
        var finalText;
        if(_numberOfLetters <= endId) {
            finalText = writeText.substring(startId, endId);
        } else {
            var cappedEndId = _numberOfLetters;
            endId = endId - cappedEndId;

            finalText = writeText.substring(startId, cappedEndId) + writeText.substring(0, endId);
        }

        document.title = finalText; 
    }

    _instance.init = function() {
        setInterval(updateTitle, interval);
    };

    return _instance;
}