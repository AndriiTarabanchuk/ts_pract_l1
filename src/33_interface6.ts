interface AddFunc {
  (n1: number, n2: number): number;
}

let add: AddFunc;

add = (n1, n2) => {
  return n1 + n2;
};

console.log(add(33, 12));
