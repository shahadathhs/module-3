{
    class Person {
        getSleep(){
            console.log('I am sleeping 8 hours');
        }
    }

    class Student extends Person {
        getSleep(){
            console.log('I am sleeping 7 hours');
        }
    }

    class Develpoer extends Person {
        getSleep(){
            console.log('I am sleeping 6 hours');
        }
    }

    const getSleepingHours = (param: Person) => {
        param.getSleep()
    }

    const person1 = new Student();
    const person2 = new Develpoer();
    const person3 = new Person();

    getSleepingHours(person1)
    getSleepingHours(person2)

    class Shape {
        getArea(): number {
            return 1;
        }
    }

    class Circle extends Shape {
        radius: number;

        constructor(radius: number) {
            super();
            this.radius = radius;
        }

        getArea(): number {
            return Math.PI * this.radius * this.radius;
        }
    }

    class Rectangle extends Shape {
        height: number;
        width: number;

        constructor(height: number, width: number) {
            super();
            this.height = height;
            this.width = width;
        }

        getArea(): number {
            return this.height * this.width;
        }


    }
    const getShapeArea = (param: Shape) => {
        console.log(param.getArea());
    }

    const shapeArea1 = new Shape();
    const shapeArea2 = new Circle(10);
    const shapeArea3 = new Rectangle(10, 20);
}