type User = {
    id:number,
    name:{
        firstName:string,
        lastName: string,
    },
    gender: 'male' | 'female',
    contactNo: string,
    address:{
        division: string,
        city: string
    }
}


const user1: User = {
    id: 123,
    name:{
        firstName: 'mr. rana',
        lastName: 'X'
    },
    gender: 'male',
    contactNo: '2874874',
    address:{
        division:'mym',
        city: 'myme'
    }
}

const user2: User = {
    id: 123,
    name:{
        firstName: 'mst',
        lastName: 'y'
    },
    gender: 'female',
    contactNo: '11283984',
    address:{
        division:'dha',
        city: 'ddd'
    }
}


type IsAdmin = boolean;
// const isAdmin: boolean = true;
const isAdmin: IsAdmin = true;

type Name = string;
const myName: Name = "Me. X"


// function
type AddFunc = (num1:number, num2:number) => number;
const add: AddFunc = (num1,num2) => num1 + num2;