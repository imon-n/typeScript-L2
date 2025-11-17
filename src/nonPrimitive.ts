// array, object

let bazarlist: string[] = ["eggs", "milk", "sugar"];

// bazarlist.push(12); // eta hbe na
bazarlist.push("hjj");

// console.log(bazarlist);


// let mixedArr: (string | number)[] = ["eggs",12, "milk",3, "sugar"];

// mixedArr.push(true) // eta hbe na , karon only string and number hote hbe

// // let coordinates:[number, number] = [20,30,50]; // ekane 3 ta num raka jabe na,

// let couple:[string, string] = ['husband', 'wife']

// let nameAndRoll: [string, number] = ['imon',93]

// let nameAndRoll: [string,string, number] = ['dhaka','chittagong',430];



const user: {
    readonly institute: string, // just, get access but not possible to change/reassigned it
    orginazation:string,
    name:"xyz", // here xyz works as a type
    firstName: string;
    secondName?: string; // optional type
    lastName: string;
    isMarried: boolean;
} = {
    name:"xyz",
    institute:"cu eee",
    orginazation:"level 2",
    firstName: "nur",
    lastName: "forhan",
    isMarried: true,
}

user.orginazation = "phitron"
// user.name = "abc" // eta, hbe na karon, xyz eta type hisebe kaj kortece
// user.institute
console.log(user.institute);

console.log(user.orginazation);
// console.log(user.name); // eta, hbe na karon, xyz eta type hisebe kaj kortece