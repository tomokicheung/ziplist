function zipList(list1: string[], list2: number[]): (string | number)[] {
  const result: (string | number)[] = [];

  for (let i = 0; i < list1.length; i++) {
    result.push(list1[i]);
    result.push(list2[i]);
  }

  return result;
}

// function using functional Array methods
function zipListTheFunctionalWay(list1: string[], list2: number[]): (string | number)[] {
  const pairs = list1.map((item, index) => [item, list2[index]]);
  return pairs.reduce(
    (acc, pair) => acc.concat(pair),
    [] as (string | number)[],
  );
}

// tests
console.log(zipList(['a', 'b', 'c'], [1, 2, 3])); // ['a', 1, 'b', 2, 'c', 3]
console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3])); // ['a', 1, 'b', 2, 'c', 3]
