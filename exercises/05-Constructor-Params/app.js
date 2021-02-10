class Person{
	constructor(name,lastname,bod){
		this._name = name;
		this._lastName = lastname;
		this._birthDate = bod;
	}
}

//do not edit below this line

let mary = new Person('Mary','Dylan','Oct 12, 2002');
console.log("Mary's instance contains:",mary);

let july = new Person('July','Mccafee','Nov 12, 2002');
console.log("July's instance contains:",july);

let testFunction = (a,b,c) => new Person(a,b,c);