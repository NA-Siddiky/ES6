const person = { name: 'Mr. Sid', age: 7, job: "system Engineer", gfName: "Bolbo na", address: "Kushtia", phone: "01712378303", friends: ['habbu', 'kablu', 'jablu'] };

// const { phone } = person;

const complexObject = {
    names: "Mohobbot",
    info: {
        address: 'Kola Bagan',
        street: 'Dhanmondi 32'
    }
}

const { street } = complexObject.info;
console.log(street);

// console.log(person.gfName);      //process-1 /
// const gfName = person.gfName;
// console.log(gfName);

// console.log(person.phone)
// const phone = person.phone;      //process-2 /
// console.log(phone)

// console.log(gfName, phone);

const { phone } = person;  ////process-3 /
// console.log(phone);

const gfName = person.gfName;
// console.log(phone, gfName);

const { job, age, address, sellary } = person;
// console.log(age, job, age, sellary, address)


const friends = ['Sakib Khan', 'Arman Khan', 'salman Khan', 'Gobber Khan']

const [goodFriend, betterFriend, ...restOfFriends] = friends;
// console.log(goodFriend, betterFriend, restOfFriends)
