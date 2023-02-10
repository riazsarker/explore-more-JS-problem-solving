function isBestFriend(person1, person2) {
    return person1.bestFriend === person2.name && person2.bestFriend === person1.name;
  }
  
  const person1 = { name: 'John', bestFriend: 'Jane' };
  const person2 = { name: 'Jane', bestFriend: 'John' };
  
  console.log(isBestFriend(person1, person2)); // true
  
  const person3 = { name: 'Tom', bestFriend: 'Jerry' };
  const person4 = { name: 'Jerry', bestFriend: 'Mike' };
  
  console.log(isBestFriend(person3, person4)); // false
  