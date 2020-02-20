/*
Function: wrapOrStuff
	Creates a new element and wraps it around or stuffs it inside an existing element.
	
Parameters:
	type - whether to wrap or stuff
	el - the element to wrap or stuff
	tag - the tag of the new el to create
	property - an array of properties to assign to the new tag
	value - an array of values for the properties

Dependencies:
	none

Returns:
	n/a

Change Log:
	2007.05.13	ALP	- Initial version
	2007.05.26	ALP - Modified to make property and value optional. Added return this.newEl. 
*/
function wrapOrStuff(type,el,tag,property,value) {
	this.type = type;
	this.el = ada$(el);
	this.tag = tag.toUpperCase();
	this.property = property || false;
	this.value = value || false;
	this.newEl = document.createElement(this.tag);
	if (this.property) {
		var propLength = this.property.length;
		for (var i=0; i<propLength; i++) {
			newEl[this.property[i]] = this.value[i];
		}
	}
	switch (this.type) {
		case('wrap'):
			this.parent = this.el.parentNode;
			this.parent.insertBefore(this.newEl,this.el);
			var oldEl = this.parent.removeChild(this.el);
			this.newEl.appendChild(oldEl);
			break;
		case('stuff'):
			this.parent = this.el;
			if (this.parent.firstChild) {
				this.el = this.parent.firstChild;
				var oldEl = this.parent.removeChild(this.el);
				this.newEl.appendChild(oldEl);
			}
			this.parent.appendChild(this.newEl);
			break;
	}
	//return this.newEl;
}
