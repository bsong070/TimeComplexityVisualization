function logn2SortAlgorithm(array) {
  const animations = [];

  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    for (let j = i; j < array.length; j++) {
      animations.push([minIndex, j]); // % 2 = 1
      //animations.push([minIndex, j]);

      if (array[j] < array[minIndex]) {
        // green line || red line

        animations.push([i, array[j]]);

        animations.push([minIndex, j]); // % 2 = 1

        animations.push([j, array[i]]); // added this, make it work

        //console.log(animations);

        let temp = array[i];
        //console.log(array[j]);
        array[i] = array[j];
        array[j] = temp;

        //minIndex = j;

        //mainArray[j] = mainArray[minIndex];
      } else {
        //animations.push([minIndex, j]);

        animations.push([i, array[minIndex]]);

        animations.push([minIndex, j]);

        animations.push([i, array[minIndex]]);

        //console.log(animations);

        //animations.push([minIndex, array[i]]); // added this, make it work
      }
    }
    // let temp = array[minIndex];
    // array[minIndex] = array[i];
    // array[i] = temp;
  }
  return animations;
}

export default logn2SortAlgorithm;
