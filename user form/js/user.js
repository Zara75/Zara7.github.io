document.addEventListener("DOMContentLoaded", function () {
    function createTable(options){
        var main = document.createElement('main');
        options.parent.appendChild(main);
     
        function createGrid(options) {
            options.data = source;
            let $cardContainer = document.createElement('div');
                $cardContainer.classList.add('cardContainer');
            for(let i = 0; i < 4; i++){
                var $layerDiv = document.createElement('div');
                    $layerDiv.classList.add('card');
                    $cardContainer.appendChild($layerDiv);
            }
            main.appendChild($cardContainer);
           
            var $gridTable = document.createElement('table'),
                $gridTbody = document.createElement('tbody'),
                userMatrix = options.data.userMatrix;
            for(let i = 0; i < userMatrix.length; i++){
                var $gridTr = $gridTbody.insertRow();
                var data = userMatrix[i];
                for(let j = 0; j < data.length; j++) {
                    options = data[j];
                    switch(options.tagName) {
                        case 'th': 
                            var $gridTh = document.createElement('th');
                                $gridTh.innerHTML = options.caption;
                                $gridTr.appendChild($gridTh);
                            break;
                        case 'td':
                            var $gridTd = $gridTr.insertCell(-1);
                                $gridTd.classList.add(options.class);
                            options.data = users;                
                            break;

                    };
                }
                
                var userID = $gridTr.getElementsByClassName('userID');                 
                if (userID.length) {
                    userID[0].innerHTML = options.data[i-1].id;
                }
                
                var firstName = $gridTr.getElementsByClassName('userName');  
                if (firstName.length) {
                    firstName[0].innerHTML = options.data[i-1].firstName;
                }
                var lastName = $gridTr.getElementsByClassName('userLastname');  
                if (lastName.length) {
                    lastName[0].innerHTML = options.data[i-1].lastName;
                }
                     
                var chooseUser = document.getElementsByClassName('chooseUser');
                for (let i = 0; i < chooseUser.length; i++) {
                    chooseUser[i].onclick = function() {
                        var mainForm = document.getElementById('mainForm');
                            mainForm.classList.add('show-modal');
                        main.classList.add('popup');
                        $cardContainer.classList.add('gridTable');
                    }
                }
                var deleteUser = document.getElementsByClassName('deleteUser');
                for (let i = 0; i < deleteUser.length; i++) {
                    deleteUser[i].onclick = function(){
                        if (confirm()) {
                            let userId = options.data[i-1].id;
                            UserModel.delete(userId);
                        }
                    }     
                }
            }      
     
            
            $gridTable.setAttribute('id', 'gridTable');
            $gridTable.appendChild($gridTbody);
            $cardContainer.appendChild($gridTable);
       
        }
        var $form = document.createElement('form');
            $form.setAttribute('id', 'mainForm');
            main.appendChild($form);
        var $mainTable = document.createElement('table');
            $mainTable.classList.add('mainTable');
            $form.appendChild($mainTable);
        var $mainThaed = $mainTable.createTHead();
            $mainThaed.setAttribute('id', 'mainThead');
        var $theadTr = $mainThaed.insertRow();
        var $theadTd = $theadTr.insertCell(-1);
            $theadTd.setAttribute('colspan', '2');
        var $mainHeading = document.createElement('h3');
            $mainHeading.innerHTML = 'USER APPLICATION';
            $theadTd.appendChild($mainHeading);
        var $cardContainer = document.getElementsByClassName('cardContainer');
        for (let i = 0; i < 3; i++){
                var $minMaxCloseBtn = document.createElement('span');
                $minMaxCloseBtn.classList.add('min_max_close');
                $minMaxCloseBtn.setAttribute('id', 'button' + i);
                $theadTd.appendChild($minMaxCloseBtn);
        };
        var close = document.getElementById('button0');
            close.onclick = function(e) {
                $form.classList.remove('show-modal');
                main.classList.remove('popup');
                $cardContainer[0].classList.remove('gridTable');
            };
        var minMax = document.getElementById('button2');
            minMax.onclick = function(e) {
                $mainTable.style.display = ($mainTable.style.display == 'none') ? '' : 'none';
                $footer.style.display = ($footer.style.display == 'inline-block') ? '' : 'inline-block';
                $footer.appendChild($theadTd);
//                $cardContainer[0].classList.remove('gridTable');
                if ($mainTable.style.display !== 'none') {
                    $mainThaed.prepend($theadTd);
            };
        }
        var fullScreen = document.getElementById('button1');
                fullScreen.onclick = function(e) {
                    $form.classList.toggle('fullScreen');
                    $mainTable.classList.toggle('fullScreen');
       }; 
        var mainTbody = document.createElement('tbody');
        $mainTable.appendChild(mainTbody);
        var mainTr = mainTbody.insertRow();

        var mainTd0 = mainTr.insertCell(0),
            mainTd1 = mainTr.insertCell(1),
            tfooter = $mainTable.createTFoot(),
            footTr = tfooter.insertRow(),
            footTd1 = footTr.insertCell(-1),
            footerLabel = document.createElement('label');
            choosFile = document.createElement('input'),
        footerLabel.setAttribute('for', 'choose');
        footerLabel.setAttribute('id', 'footerLabel');
        footTd1.appendChild(footerLabel);
        choosFile.type = 'file';
        choosFile.setAttribute('id', 'choose');
        choosFile.addEventListener('change', function(e){
                if (this.files && this.files[0]) {
                    var reader = new FileReader();
                    reader.addEventListener('load', function (e) {
                        var imgLoad = document.getElementById('imgLoad');
                        imgLoad.src = e.target.result;
                        imgLoad.style.visibility = 'visible';
                        imgLoad.style.width = '100';
                        imgLoad.style.height = '100';
                        });
                        reader.readAsDataURL(this.files[0]);    
                    };
    });    
    footerLabel.appendChild(choosFile);
    var footTd2 = footTr.insertCell(-1);
    var save = document.createElement('input');
    save.type = 'button';
    save.value = 'Save';
    footTd2.appendChild(save);
    var cancel = document.createElement('input');
    cancel.type = 'button';
    cancel.value = 'Cancel';
    footTd2.appendChild(cancel);
    var $footer = document.createElement('footer');
        $form.appendChild($footer);
    options.parent = mainTd0;
    createLeftTable(options);
        
    options.parent = mainTd1;
    createRightTable(options);
    
    createGrid(options);
};
function createLeftTable(options){
    
    var leftTable = document.createElement('table');
    leftTable.setAttribute('id', 'leftTable');
    var leftMatrix = options.data.leftMatrix;
    var leftThead = leftTable.createTHead();
    leftThead.innerHTML = 'User Info';
    var leftTbody = document.createElement('tbody');
    leftTable.appendChild(leftTbody);
    
    options.parent.appendChild(leftTable);
    
    options.parent = leftTable;
    
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
    var rightThead = rightTable.createTHead();
    rightThead.innerHTML = 'Security';
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
                parent.appendChild(ruby);
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
createTable({parent: document.body, data: source});
});