;(function(){
  
    let arr = [];

    alert('Здравствуйте! Введите значение, а функция покажет это число или текст');

    let promptValue;
    
    do {
        promptValue = prompt("Ведите значние: число или текстовое значнеие (буква, слово или предложение)", '=)');
        if (promptValue != null){arr.push(promptValue)};
    } while (promptValue)

    function whatIsIt(val) {
        if (isNaN(val)){
            return ` ${val} - текст`;
        } else {
            return ` ${val} - число`;
        }
    }

    function map(fun, array) {
        let newArray = [];

        array.forEach(element => newArray.push(fun(element)));
        return newArray;
    }

    let result = map(whatIsIt, arr);

    console.log(`Это введенный массив: ${arr} `);
    console.log(`А этот массив результирующий: ${result} `);

})();