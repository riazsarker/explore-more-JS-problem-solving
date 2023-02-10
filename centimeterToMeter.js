function cmToMeter(centimeters) {
    return centimeters / 100;
  }
  
  const centimeters = 250;
  const meters = cmToMeter(centimeters);
  
  console.log(`${centimeters} centimeters is equal to ${meters} meters.`);

  