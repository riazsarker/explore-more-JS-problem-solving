function publicBusFare(people) {
    const busCapacity = 50;
    const microCapacity = 11;
    const busCount = Math.floor(people / busCapacity);
    const remainingPeople = people - (busCount * busCapacity);
    const microCount = Math.floor(remainingPeople / microCapacity);
    const publicBusPeople = remainingPeople - (microCount * microCapacity);
    const publicBusFare = publicBusPeople * 250;
  
    return publicBusFare;
  }
  
  const people = 235;
  const fare = publicBusFare(people);
  
  console.log(`The total public bus fare is: ${fare} rupees.`);

  