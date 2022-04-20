// Return random array with the specified lenght in parameters

const RandomArray = (array, length) => {
    console.log("là");
    for (var i = array.length - 1; i > 0; i--) {
        console.log("ici");
        var j = Math.floor(Math.random() * (i + 1));
        console.log(j);
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    console.log(array)
    return array.slice(0,length);
}

export default RandomArray;
