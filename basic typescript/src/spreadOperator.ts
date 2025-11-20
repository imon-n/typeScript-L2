// spread Operator

const friends = ["Rahim", "Karim"];
const schoolFriends = ["pintu", "chintu", "bulbul"];
const collageFriends = ["somrat", "abid", "rana", "sakib"];

friends.push(...schoolFriends);
friends.push(...collageFriends);

// console.log(friends);

const user = { name: "Mezba", phoneNo: "01900000" };
const otherInfo = { hobby: "outing", favouriteColor: "Black" };
const userInfo = { ...user, ...otherInfo };

// console.log(userInfo);

// // rest operator
const sendInvite = (...friends: string[]) => {
  friends.forEach((friend: string) =>
    console.log(`Send invitation to ${friend}`)
  );
};
sendInvite("rana", "kana", "joni");
