//user model
function User(options) {
    this.ID = options.id;
    this.FirstName = options.firstName;
    this.LastName = options.lastName;
    this.Age = options.age;
};

User.data = [];

User.insert = function(model) {
    User.data.push(model);
    var sData = JSON.stringify(User.data);
    localStorage['users'] = sData;
}

User.insertAll = function(models) {
    models.forEach(function(item){
        User.insert(item);
    })
}

User.selectAll = function() {
    var sData = localStorage['users'];
    User.data = JSON.parse(sData);
    return User.data;
}
User.select = function(id) {
    var user = null;
    var data = User.selectAll();
    if(Array.isArray(data)) {
        user = data.filter(function(item) {
           return item.ID == id; 
        })[0];
    }
    return user;
}
User.delete = function(id) {
    var data = User.selectAll();
    data.some (function(item, i) {
        if(item.ID = id) {
            delete data[i];
            return true;
        }
    });
    var userData = User.data;
    User.deleteAll();
    User.insertAll(userData);
}

User.deleteAll = function() {
    localStorage.removeItem('users');
    User.data = [];
}