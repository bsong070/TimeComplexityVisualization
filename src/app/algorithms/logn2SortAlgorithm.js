function logn2SortAlgorithm(array) {
  const animations = [];

  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    for (let j = i; j < array.length; j++) {
      animations.push([minIndex, j]);
      if (array[j] < array[minIndex]) {
        animations.push([i, array[j]]);
        animations.push([minIndex, j]);
        animations.push([j, array[i]]);

        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      } else {
        animations.push([i, array[minIndex]]);
        animations.push([minIndex, j]);
        animations.push([i, array[minIndex]]);
      }
    }
  }
  return animations;
}

export default logn2SortAlgorithm;
