function getPositiveNumbers(numbers) {
    const positiveNumbers = [];
  
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] < 0) {
        break;
      }
  
      positiveNumbers.push(numbers[i]);
    }
  
    return positiveNumbers;
  }
  
  const numbers = [1, 2, 3, -4, 5];
  
  const positiveNumbers = getPositiveNumbers(numbers);
  
  console.log(`The positive numbers are: ${positiveNumbers}.`);
  // Output: The positive numbers are: [1, 2, 3].
  