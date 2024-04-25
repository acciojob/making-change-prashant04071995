const makeChange = (c) => {
  const quarterValue = 25;
  const dimeValue = 10;
  const nickelValue = 5;
  const pennyValue = 1;

  let q = Math.floor(c / quarterValue);
  c %= quarterValue;

  let d = Math.floor(c / dimeValue);
  c %= dimeValue;

  let n = Math.floor(c / nickelValue); 
  c %= nickelValue;

  let p = c; // Remaining amount is the number of pennies

  return { q, d, n, p };
};

const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
