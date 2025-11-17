// array desctructuring
// object desctructuring

const user = {
    id:123,
    name:{
        firstName:"nur",
        middleName: "mohammad",
        lastName: "Imon"
    },
    gender: "male",
    favouriteColor: "black",
}

const myfavouriteColor = user.favouriteColor;
// const middleName = user.name.middleName;

const {favouriteColor,name:{firstName}, gender:gen, name:{middleName:mymiddle},} = user;

// console.log(favouriteColor);
// console.log(gen);
// console.log(firstName);
// console.log(mymiddle);


// array destructuring...........
const humans = ['karim', 'rahim', 'mahik'];
const [a, b, c] = humans;
const[,,mm] = humans;
console.log(mm);
// console.log(a); // karim

