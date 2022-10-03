function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
}


  let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
  let temp = [];
  temp = shuffle(arr)
  console.log(arr);
  console.log(temp);