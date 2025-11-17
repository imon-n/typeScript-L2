// nullable type

const getUser = (input: string | null) => {
  if (input) {
    console.log(`from db ${input}`);
  } else {
    console.log(`from db: all user`);
  }
};
// getUser("imon")
getUser(null);

//-------------------
const discountCalculator = (input: unknown) => {
  if (typeof input === "number") {
    const discountedPrice = input * 0.1;
    console.log(discountedPrice);
  } else if (typeof input === "string") {
    // const splited = input.split(" ");
    // console.log(splited[0]);
    const [discountedPrice] = input.split(" ");
    console.log(Number(discountedPrice) * 0.1);
  } else {
    console.log("wrong Input");
  }
};

// discountCalculator(100);
// discountCalculator("100 TK");
// discountCalculator(null);


// void -----------
const throwError = (msg: string): never => {
  throw new Error(msg);
};

throwError("Error...");