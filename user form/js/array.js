var source = {
    userMatrix: [
            [
            
                {tagName: 'th', caption: 'ID'},
                {tagName: 'th', caption: 'First Name'},
                {tagName: 'th', caption: 'Last Name'},
                {tagName: 'th', caption: 'Edit'},
                {tagName: 'th', caption: 'Delete'}

            ],
            [
                {tagName: 'td', class: 'userID'},
                {tagName: 'td', class: 'userName'},
                {tagName: 'td', class: 'userLastname'},
                {tagName: 'td', class: 'chooseUser'},
                {tagName: 'td', class: 'deleteUser'}
            ],
            [
                {tagName: 'td', class: 'userID'},
                {tagName: 'td', class: 'userName'},
                {tagName: 'td', class: 'userLastname'},
                {tagName: 'td', class: 'chooseUser'},
                {tagName: 'td', class: 'deleteUser'}
            ],
            [
                {tagName: 'td', class: 'userID'},
                {tagName: 'td', class: 'userName'},
                {tagName: 'td', class: 'userLastname'},
                {tagName: 'td', class: 'chooseUser'},
                {tagName: 'td', class: 'deleteUser'}
            ],
            [
                {tagName: 'td', class: 'userID'},
                {tagName: 'td', class: 'userName'},
                {tagName: 'td', class: 'userLastname'},
                {tagName: 'td', class: 'chooseUser'},
                {tagName: 'td', class: 'deleteUser'}
            ],
            [
                {tagName: 'td', class: 'userID'},
                {tagName: 'td', class: 'userName'},
                {tagName: 'td', class: 'userLastname'},
                {tagName: 'td', class: 'chooseUser'},
                {tagName: 'td', class: 'deleteUser'}
            ]
        
    ],
    
    leftMatrix: [
        
            [
                {th: 'First Name', tagName: 'th', label: 'firstName'}, 
                {tagName: 'input', id: 'firstName', placeholder: 'Enter your first name', className: 'cell0', type: 'text', name: 'firstName' }
            ],
            [
                {th: 'Last Name', tagName: 'th', label: 'lastName'}, 
                {tagName: 'input', id: 'lastName', placeholder: 'Enter your last name', className: 'cell0', type: 'text'}
            ],
            [
                {th: 'Age', tagName: 'th', label: 'age'}, 
                {tagName: 'input', id: 'age', placeholder: 'Age', className: 'cell0', type: 'number'}
            ],
            [
                {th: 'Password', tagName: 'th', label: 'password'}, 
                {tagName: 'input', id: 'password', placeholder: 'Enter your password', className: 'cell0', type: 'password'}
            ],
            [
                {th: 'Confirm', tagName: 'th', label: 'confirm'}, 
                {tagName: 'input', id: 'confirm', placeholder: 'Confirm your password', className: 'cell0', type: 'password'}
            ],
            [
                {th: 'Job Title', tagName: 'th', label: 'jobTitle'}, 
                {tagName: 'select', id: 'jobTitle', className: 'select'}
            ],
    ],
    rightMatrix: [
            [
                {th: 'Gander', tagName: 'th'},
                {tagName: 'input',id: 'firstTd', className: 'cell1'}
            ],
            [
                {th: 'Profit', tagName: 'th'}, 
                {tagName: 'input',id: 'secondTd', className: 'cell1'},
            ],
            [
                {th: 'Teletype', tagName: 'th', label: 'text'}, 
                {tagName: 'textarea', placeholder: 'Age', className: 'textarea', id: 'textarea'}
            ],
            [
                {th: 'Country', tagName: 'th'}, 
                {tagName: 'select',className: 'select', id: 'country'}
            ],
            [
                {th: 'City', tagName: 'th'}, 
                {tagName: 'select', className: 'select', id: 'city'}
            ],
    ],
    
    inputMatrix: [
            [
                {type: 'radio', id: 'mail', value: 'gender', name: 'gender', text: 'M', label: 'mail'},
                {type: 'radio', id: 'femail', value: 'gender', name: 'gender', text: 'F', label: 'femail'}
            ],
            [
                {type: 'checkbox', id: 'A', value: 'profil', name: 'A', text: 'A', label: 'A'},
                {type: 'checkbox', id: 'B', value: 'profil', name: 'B', text: 'B', label: 'B'},
                {type: 'checkbox', id: 'C', value: 'profil', name: 'C', text: 'C', label: 'C'}
            ],
    ],
};
var countries = [
    {id: 0, name: 'Armenia'},
    {id: 1, name: 'Russia'},
    {id: 2, name: 'China'}
    
];
var locCountries = localStorage.getItem('countries');
if(null == locCountries) {
    localStorage.setItem( 'countries', JSON.stringify(countries) );
} else {
    countries = JSON.parse(locCountries);
} 
var cities = [
    {id: 'Yerevan', city: 'Yerevan', countryId: 0},
    {id: 'Moscow', city: 'Moscow', countryId: 1},
    {id: 'Benjing', city: 'Benjing', countryId: 2}
];
var locCity = localStorage.getItem('cities');
if(null == locCity) {
    localStorage.setItem( 'cities', JSON.stringify(cities) );
} else {
    cities = JSON.parse(locCity);
}
var users = [
    {id: 0, firstName: 'Zara', lastName: 'Aghababyan' },
    {id: 1, firstName: 'Amalya', lastName: 'Khurshudyan' },
    {id: 2, firstName: 'Nikita', lastName: 'Melik-Haykazyan'},
    {id: 3, firstName: 'Rosie', lastName: 'Manukyan'}
    
];
var locUser = localStorage.getItem('users');
if(null == locUser) {
    localStorage.setItem( 'users', JSON.stringify(users) );
} else {
    users = JSON.parse(locUser);
}
var UserModel = {
    delete: function(id) {
       var locUser = localStorage.getItem('users');
        users = JSON.parse(locUser);
        users.forEach(function(item, i) {
            if(item.id == id) {
                delete users[i];
            }
        });
    }
};