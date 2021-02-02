class Parent {
    constructor(name) {
        this.fatherName = "swisenager";
    }
}

class Child extends Parent {
    constructor(name) {
        super(name)
        this.name = name;
    }
    getFullName() {
        return this.name + " " + this.fatherName;
    }
}

// class GrandChild extends Child {             //Problem using a function in class/
//     add = (name1, name2) => name1 + name2;
//     adding = add("Sakib", "Khan");

//     getGrandlName() {
//         return add;
//     }
// }

class Test extends GrandChild{

}












const baby = new Child("Arnold")
const baby2 = new Child("Tom cruse");
// const baby3 = new Child("Sakib Khan")
console.log(baby.getFullName());
console.log(baby2);
// console.log(baby3.getGrandlName());