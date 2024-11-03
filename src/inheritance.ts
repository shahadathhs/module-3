{
    class Parent {
        name: string;
        age: number;
        address: string;

        constructor(name: string, age: number, address: string) {
            this.name = name;
            this.age = age;
            this.address = address;
        }

        getSleep(numOfHours: number) {
            console.log(`getSleep: ${numOfHours}`);
        }
    }

    class Student extends Parent {
        classC: string;

        constructor(name: string, age: number, address: string, classC: string) {
            super(name, age, address);
            this.classC = classC;
        }
    }

    const studentOne = new Student('Sajib', 12, 'BD', 'XII')

    studentOne.getSleep(2)

    class Teacher extends Parent {
        constructor(name: string, age: number, address: string) {
            super(name, age, address);
        }

        takeClass(numOfClass: number) {
            console.log(`takeClass: ${numOfClass}`);
        }
    }
}