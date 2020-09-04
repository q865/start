const isPerfect = (num) => {
  let result = 1;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      result += i;
    }
  }
  return result === num;
};

export default isPerfect;
