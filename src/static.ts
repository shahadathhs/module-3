{
    // static
    class Counter {
        static count: number = 0;

        static increment(){
            return Counter.count++;
        }

        static decrement(){
            return Counter.count--;
        }
    }

    // const instance = new Counter();
    // instance.increment()
    // console.log(instance.increment());
    //
    // const instance2 = new Counter();
    // console.log(instance2.increment());

    console.log(Counter.increment());

    console.log(Counter.increment());
}