function findMaxLogN(array) {
  let maxValue = array[array.length - 1];
  let tempArray = array.map((x) => x);
  let animations = [];
  let previousIndex = 0;

  logNFindMax(tempArray, maxValue, animations, previousIndex);
  return animations;
}

let logNFindMax = (array, maxValue, animations, previousIndex) => {
  if (array.length <= 1) return array;

  let middleIndex = Math.floor(array.length / 2);
  if (array[middleIndex] < maxValue) {
    animations.push(middleIndex + previousIndex);
    array.splice(0, middleIndex);
    previousIndex += middleIndex;
  } else if (array[middleIndex] === maxValue) {
    animations.push(middleIndex + previousIndex);
    return animations;
  }
  logNFindMax(array, maxValue, animations, previousIndex);
};

export default findMaxLogN;
