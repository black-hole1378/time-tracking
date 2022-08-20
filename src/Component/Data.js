export class User {
  constructor(name, imageAddress) {
    this.name = name;
    this.image = imageAddress;
  }
}

export class Comment {
  constructor(id, content, createAt, score, user) {
    this.id = id;
    this.content = content;
    this.createAt = createAt;
    this.score = score;
    this.user = user;
  }
}

const fruits = ["Mohammad", "Ali", "yasin", "Ahmad"];

const leaves = ["Mohammad Yasin", "Mohammad Hammid"];

const newArray = fruits.concat(leaves);

console.log(newArray);

fruits.shift();
console.log(fruits.toString());

fruits.splice(1, 0, "Barat");

console.log(fruits.toString());
