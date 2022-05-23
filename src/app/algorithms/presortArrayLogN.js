function presortArrayLogN(array) {
  presort(array); // need to presort array; must assume array is sorted so will not count this towards time complexity; only animating log n with time delay
  return array;
}

let presort = (array) => {
  array.sort((a, b) => {
    return a - b;
  });
};

export default presortArrayLogN;
