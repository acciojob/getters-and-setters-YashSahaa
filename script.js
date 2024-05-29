//complete this code
class Person {
	constructor(name,age){
		this.username = name;
		this.userage = age;
	}
	get name(){
		return this.username;
	}
	set name(name){
		this.username = name;
	}
	get age(){
		return this.userage;
	}
	
	set age(age){
		this.userage = age;
	}
}

class Student extends Person {
	constructor(name,age){
		super(name,age);
	}
	study(){
		console.log(this.name +" is studying");
	}
}

class Teacher extends Person {
	constructor(name,age){
		super(name,age);
	}
	teach(){
		console.log(this.name +" is teaching");
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
