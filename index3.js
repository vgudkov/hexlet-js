const test = (row) => {
  const firstMember = Math.abs(row[0]);
  const isEven = (number) => number % 2 === 0;

  const result = row.reduce((acc, item) => {
    if (isEven(firstMember) === isEven(item)) {
      acc.push(item);
    }
    return acc;
  }, []);

  return result;
};

const test1 = test([-1, 0, 1, -3, 10, -2]);
const test2 = test([2, 0, 1, -3, 10, -2]);
console.log(test1);
console.log(test2);
