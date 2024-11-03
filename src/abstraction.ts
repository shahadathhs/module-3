{
    // abstraction
    // 1. interface
    // 2. abstract

    // idea
    interface Vehicle1 {
        startEngine(): void;
        stopEngine(): void;
        move(): void;
    }

    // real implementation
    class Car implements Vehicle1 {
        startEngine(): void {
            console.log(`startEngine`);
        }
        stopEngine(): void {
            console.log(`stopEngine`);
        }
        move(): void {
            console.log(`move`);
        }
        test(){
            console.log(`test`);
        }
    }

    const toyota = new Car ();
    toyota.startEngine()

    // abstract class
    abstract class Car2 {
        abstract startEngine(): void
        abstract stopEngine(): void
        abstract  move(): void
    }
    class Car3 extends Car2 {
        startEngine(): void {
            console.log(`startEngine`);
        }
        stopEngine(): void {
            console.log(`stopEngine`);
        }
        move(): void {
            console.log(`move`);
        }
        test(){
            console.log(`test`);
        }
    }

    const car1 = new Car3 ();
    car1.test()
}