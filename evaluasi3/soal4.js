class Animal {
    constructor(name, isMammal){
        this.name = name
        this.isMammal = isMammal
    }
}
class Frog extends Animal{
    constructor(name, isMammal){
        super(name, isMammal)
        this.name = name
        this.isMammal = isMammal
    }
    jump(){
        console.log('Hop Hop');
    }
}
class Ape extends Animal{
    constructor(name, is){
        super(name, isMammal)
        this.name = name
        this.isMammal = isMammal
    }
    
    yell(){
        console.log('Auooo');
    }
}
let myFrog = new Frog('Dani', '55')
let myApe = new Ape('Mala', '22')