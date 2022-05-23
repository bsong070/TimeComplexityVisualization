function nlognSortAlgorithm(array) {
  let animations = [];
  if (array.length < 2) return array;
  let auxArray = array.map((x) => x);
  nlognSortRecursion(array, 0, array.length - 1, auxArray, animations);
  return animations;
}

let nlognSortRecursion = (array, start, end, auxArray, animations) => {
  if (start === end) return;

  let middle = Math.floor((start + end) / 2);

  nlognSortRecursion(auxArray, start, middle, array, animations);
  nlognSortRecursion(auxArray, middle + 1, end, array, animations);

  mergeSort(array, start, middle, end, auxArray, animations);
};

let mergeSort = (array, start, middle, end, auxArray, animations) => {
  let k = start;
  let i = start;
  let j = middle + 1;
  while (i <= middle && j <= end) {
    animations.push([i, j]);
    animations.push([i, j]);
    if (auxArray[i] <= auxArray[j]) {
      animations.push([k, auxArray[i]]);
      array[k++] = auxArray[i++];
    } else {
      animations.push([k, auxArray[j]]);
      array[k++] = auxArray[j++];
    }
  }
  while (i <= middle) {
    animations.push([i, i]);
    animations.push([i, i]);
    animations.push([k, auxArray[i]]);
    array[k++] = auxArray[i++];
  }
  while (j <= end) {
    animations.push([j, j]);
    animations.push([j, j]);
    animations.push([k, auxArray[j]]);
    array[k++] = auxArray[j++];
  }
};

export default nlognSortAlgorithm;
