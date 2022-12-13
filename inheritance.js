
class Parents {
    constructor(name){
        this.Father = "SK Saiful Islam";
    }
}

class child extends Parents {
    constructor(name){
        super();
        this.Name = name;
    }

    getfullName (){
        return this.Name + " " + this.Father;
    }
}

const child1 = new child("Mehedi Hasan");
// const parent1 = new Parents("SK Saiful Islam");
console.log(child1);
console.log(child1.getfullName());