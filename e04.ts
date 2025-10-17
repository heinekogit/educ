function getUserMessage(user: { name: string; age: number }): string {
  if (user.age < 18) {
    return `${user.name} is a minor.`;
  } else {
    return `${user.name} is an adult.`;
  }
}

// テスト
console.log(getUserMessage({ name: "Taro", age: 17 }));   // Taro is a minor.
console.log(getUserMessage({ name: "Hanako", age: 20 })); // Hanako is an adult.


// 短くすると
function getUserMessage(user: { name: string; age: number }): string {
  return `${user.name} is ${user.age < 18 ? "a minor" : "an adult"}.`;
}


