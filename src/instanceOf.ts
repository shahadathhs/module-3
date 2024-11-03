{
    // Instanceof guard
    class InstanceOf {
        name: string;
        constructor(name: string) {
            this.name = name;
        }

        makeSound(){
            console.log("Instance of Sound")
        }
    }

    class Child extends InstanceOf {
        constructor(name: string) {
            super(name);
        }

        makeCry(){
            console.log("Cry");
        }
    }

    class Cat extends InstanceOf {
        constructor(name: string) {
            super(name);
        }

        makeMaew() {
            console.log("Maew");
        }
    }

    const child = new Child("child");
    const cat = new Cat("cat name");

    const getAny = (any: InstanceOf) => {
        if(any instanceof Child){
            any.makeCry()
        } else if (any instanceof Cat ){
            any.makeMaew()
        } else {
            console.log('Something went wrong')
        }
    }

    getAny(child)

    const isChild = (pa: Child | Cat): boolean => {
        return pa instanceof Child
    }

    const isChildTrue = (pa: Child): pa is Child => {
        return true
    }
}