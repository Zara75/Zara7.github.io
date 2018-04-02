function $(id) {
    return document.getElementById(id);
};
Element.prototype.val = function(val) {
    return undefined === val ? this.value : (this.value = val, this);
};

function $$(functor){
    document.addEventListener('DOMContentLoaded', functor, false);
};