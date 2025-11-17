// ? : ternary operator : decision making
// ?? : nullish coolsecing operator => this operator work only based on null or undefined
// ?. optional chaining

const biyerjonnoEligible = (age: number) =>{
    // if(age >= 21){
    //     console.log("u r eligible");
    // } else{
    //     console.log("not eligible");
    // }
    const result = age >= 21 ? "eligible" : "not - eligible";
    // return result
    console.log(result);
}
// biyerjonnoEligible(20);


// nullis --------------------
const userTheme = undefined; // or null
// const userTheme = "red theme"
// const userTheme = ""; // only for undefined or null
const selectedTheme = userTheme ?? 'light theme'
// console.log(selectedTheme);


// nullish vs ternary--------------------------
const isAuthenticated = null;

const resultwithternary = isAuthenticated ? isAuthenticated : "You are a guest";
const resultwithNulish = isAuthenticated ?? "You are a guest";

// console.log({resultwithternary}, {resultwithNulish});



// optional chaning.................
const user: {
    address:{
        city: string
        town: string,
        postalCode?: string
    };
} = {
    address:{
        city: 'Dhaka',
        town: 'Banani',
    }
}

const postalCode = user?.address?.postalCode
console.log(postalCode);
