;(function(){
  
    let arr = [],
    promptValue = null,
    result = null,
    enterList = document.querySelector(".enter__list");
    compList = document.querySelector(".comp__list"),

    console.log(compList);
    
    promptValue = alert('Здравствуйте! Введите значение, а функция покажет это число или текст');
    
    do {
        promptValue = prompt("Ведите значние: число или текстовое значнеие (буква, слово или предложение)", '=)');
        if (promptValue != null){arr.push(promptValue)};
    } while (promptValue)
    
    result = map(whatIsIt, arr);

    pastList(arr, enterList);
    pastList(result, compList);

    function whatIsIt(val) {
        if (isNaN(val)){
            return ` ${val} - текст`;
        } else {
            return ` ${val} - число`;
        }
    };
    
    function map(fun, array) {
        let newArray = [];
        
        array.forEach(element => newArray.push(fun(element)));
        return newArray;
    };

    function pastList(arr, elem) {
        arr.forEach(element => {

            let li = document.createElement("li");
            li.innerHTML = `<li>${element}</li>`;
            elem.append(li);
        });
    }

})();