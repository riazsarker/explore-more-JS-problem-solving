function radToDeg(radians) {
    return +(radians * (180 / Math.PI)).toFixed(2);
  }
  
  const radians = 1;
  const degrees = radToDeg(radians);
  
  console.log(`${radians} radians is equal to ${degrees} degrees.`);
