function $(selector)
{
    var elements;
    if('.' === selector[0]){
       var className = selector.substring(1, selector.length);
       elements = document.getElementsByClassName(className);
        return elements;
    } else if('<' === selector[0] && '>' === selector[selector.length - 1] ){
        var tagName = selector.substring(1, selector.length - 1);
       return document.createElement(tagName);
    }
    else if ('#' === selector[0]){
        var idName = selector.substring(1, selector.length);
        elements = document.getElementById(idName);
        return elements;
    }
}
//wrapper for setAttribute
HTMLElement.prototype.attr = function(attrName, attrVal)
{
    this.setAttribute(attrName, attrVal);
    
    return this;
}
////wrapper for innerText 
HTMLElement.prototype.text = function(text)
{
    this.innerText = text;
    
    return this;
}
HTMLElement.prototype.html = function(html)
{
    if(undefined === html){
        return this.innerHTML;
    }
    this.innerHTML = html;
    
    return this;
}
////wrapper for appendChild
HTMLElement.prototype.append = function(child)
{
    for (i = 0; i < arguments.length; i++) {
        this.appendChild(arguments[i]);
    }
        return this;
}

HTMLElement.prototype.appendTo = function(parent)
{
    parent.appendChild(this);
    
    return this;
}

HTMLElement.prototype.addClass = function(className)
{
    if(this.className) {
        this.className += ' ';
    }
    
    this.className += className;
    
    return this;
}
HTMLElement.prototype.css = function(prop, val)
{
    if(undefined === val) {
        return this.style[prop];
    }
    
    this.style[prop] = val;
    
    return this;
}
HTMLElement.prototype.prop = function(propName, propVal)
{
	if (undefined === propVal) {
		return this[propName];
	} 
    return this[propName] = propVal, this;
 }
HTMLElement.prototype.on = function(eventName, delegate)
{
    return this.addEventListener(eventName, delegate), this;
}
HTMLElement.prototype.toggleClass = function(className){
    if (this.classList.contains(className)){
        this.classList.remove(className);
    } else {
        this.classList.add(className);
    }
    return this;
}