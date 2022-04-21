// Return random array with the specified lenght in parameters

const RandomArray = (array, length) => {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array.slice(0,length);
}

export default RandomArray;
