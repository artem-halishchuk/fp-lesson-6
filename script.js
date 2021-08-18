//task 1
function countSpaceBr (text) {
    let target = [" ", "<br/>"]
    let nameTraget = ["пробелов", "переводов строки"]
    let countTraget = [];
    for (let i = 0; i < target.length; i++) {
        let pos = -1;
        let found = 0;
        let count = 0;
        for (;;) {
            found = text.indexOf(target[i], pos);
            if (found == -1) {
                countTraget[i] = count;
                break;
            }
            pos = found + 1;
            count++;
        }
    }
    alert("Вы ввели стоку: \n\n" +
        text + "\n\n" +
        "в ней " + countTraget[0] + " " + nameTraget[0] +
        " и " + countTraget[1] + " " + nameTraget[1] + ".");
}
//task 2
function textGenerator (wordsN) {
    let string = '';
    for (let i = 0; i < wordsN; i++) {
        let word = '';
        let randomLengthWord = Math.round(Math.random()*(12-3+1))+3;
        console.log(`randomLengthWord = ${randomLengthWord}`)
        for (let j = 0; j < randomLengthWord; j++) {
            let randomLetter = String.fromCodePoint
            (Math.round(Math.random()*(90-65))+65);
            word += (i === 0 && j === 0) ? randomLetter : randomLetter.toLowerCase();
        }
        string += word + (i !== wordsN-1 ? " " : ".");
        word = '';
    }
    return string;
}
//task 3
function indexSearch (string, word) {
    let index = [];
    let pos = -1;
    let found = 0;
    for (let i = 0;;i++) {
        found = string.indexOf(word, pos);
        if (found === -1) break;
        index[i] = found;

        pos = found + 1;
    }
    return index;
}
//task 4
let tasks = [];
function taskArray (nameTask, mass) {
    let tempTask = nameTask.toLowerCase();
    if (mass.length < 1) mass[mass.length] = tempTask;
    else mass[mass.length] = tempTask;
    for (let i = mass.length-1; i > 0; i--) {
        if (mass[i-1] > mass[i]) {
            let temp = mass[i];
            mass[i] = mass[i-1];
            mass[i-1] = temp;
        }
    }
    return mass;
}




function sendText () {
    let enteredText = document.getElementById("areaText").value.replace(/\n/g, "<br/>");
    let inText = document.getElementById("inText");
    inText.innerHTML = enteredText;
}
function startCountSpaceBr () {
    let inText = prompt("Введите строку",
        "Белеет парус одинокой<br/>" +
               "В тумане моря голубом!..<br/>" +
               "Что ищет он в стране далекой?<br/>" +
               "Что кинул он в краю родном?..")
    countSpaceBr(inText);
}
function textGeneratorIn () {
    let wordsN = parseInt(prompt("ведите N количество слов"));
    let wordsNOut = document.querySelector(".wordsNOut");
    wordsNOut.innerHTML = wordsN;
    let textOut = document.querySelector(".search-out");
    textOut.innerHTML = textGenerator(wordsN);
}
function startIndexSearch () {
    let string = String(prompt("ведите строку для поиска",
         "Ехал Грека через реку." +
                "Видит Грека в реке рак." +
                "Сунул в реку руку Грека." +
                "Рак за руку Греку - цап."));
    let word = String(prompt("ведите слов для поиска", "Грека"));
    let getString = document.querySelector(".getString");
    getString.innerHTML = string;
    let getWord = document.querySelector(".getWord");
    getWord.innerHTML = word;
    let outIndices = document.querySelector(".outIndices");
    outIndices.innerHTML = indexSearch(string, word);
}

function startTaskArray () {

    //let tasks = ["Задача 2","Задача 12","Задача 10","Задача 52","Задача 21"]
    let taskName = String(prompt("Введите название задачи","Задача 22"));

    // let currentTaskName = document.querySelector(".currentTaskName");
    // currentTaskName.innerHTML = tasks;

    let getTaskName = document.querySelector(".getTaskName");
    getTaskName.innerHTML = taskName;

    let outTasksArray = document.querySelector(".outTasksArray");
    outTasksArray.innerHTML = taskArray(taskName, tasks);

}




