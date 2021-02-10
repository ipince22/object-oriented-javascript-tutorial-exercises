class Person{
	//the constructor receives 3 params
	constructor(year, month, date){
		this._birthday = new Date(year, month, date);
	}
	
	getAge() { // birthday is a date
	    let ageDifMs = Date.now() - this._birthday.getTime();
	    let ageDate = new Date(ageDifMs); // milliseconds from epoch
	    return Math.abs(ageDate.getUTCFullYear() - 1970);
	}
	canDrinkAlcohol (){
        var flag = false;
        let age = this.getAge();
        if (age>=21) {
            flag=true;
        }else{
            flag:false;
        } 
        return flag;
    }
	
}

let mario = new Person(1985, 10, 20);
console.log(mario.canDrinkAlcohol());
