{
  class Animal {
    // name: string;
    // species: string;

    constructor(public name: string, public species: string){}
    // {
    //   this.name = name;
    //   this.species = species;
    // }

    makeSound(){
      console.log("Animal sound")
    }
  }

  const dog = new Animal("dog name", "dog")

  const cat = new Animal("cat name", "cat")

  cat.makeSound()
}