{
    // Type of
    type Alphanumeric = number | string;

    const add = (param1: Alphanumeric, param2: Alphanumeric): Alphanumeric  => {
       if (typeof param1 === "number" && typeof param2 === "number") {
            return param1 + param2;
       } else {
           return param1.toString() + param2.toString();
       }
    }

    const result1: Alphanumeric = add(2, 3)
    console.log(result1)

    // In
    type NormalUser = {
        name: string,
    }

    type AdminUser = {
        name: string,
        role: 'ADMIN'
    }

    const getUser = (user: NormalUser | AdminUser) => {
        if('role' in user) {
            console.log(user.name, user.role);
        } else {
            console.log('Normal User')
        }
    }

    const normalUser: NormalUser = {
        name: 'Normal',
    }

    const adminUser: AdminUser = {
        name: 'Admin',
        role: 'ADMIN',
    }

    getUser(adminUser)
    getUser(normalUser)
}