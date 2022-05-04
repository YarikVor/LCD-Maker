var baseBlock = document.createElement("div");
baseBlock.classList.add("big");
document.body.appendChild(baseBlock);

const Width = 5, Heigth = 7;

for(let i = 0; i < Width * Heigth; i++){
    let temp = document.createElement("div");
    temp.classList.add("tiny");
    temp.value = true;
    var fun = (temp) => {
        temp.value = !temp.value;
        if(temp.value){
            temp.style.backgroundColor = "#fff";
        }else{
            temp.style.backgroundColor = "#000";
        }
    }
    temp.addEventListener("click", (e)=>{
        fun(temp);
    });

    baseBlock.appendChild(temp);

}

var baseDiv = document.createElement("div");
baseDiv.classList.add("base");
document.body.appendChild(baseDiv);

var convertButton = document.createElement("button");
convertButton.innerText = "Convert";
convertButton.classList.add("cnvBtt");
document.getElementsByClassName("base")[0].appendChild(convertButton);

var clearButton = document.createElement("button");
clearButton.innerText = "Clear";
clearButton.classList.add("clrBtt");
document.getElementsByClassName("base")[0].appendChild(clearButton);



var textAreaBlock = document.createElement("textarea");
textAreaBlock.classList.add("txtArea");
document.body.appendChild(textAreaBlock);

convertButton.addEventListener("click", ()=>{
    let str = "{\n";
    let num = 0;
    for(let i = 0; i < Heigth; i++){
        num = 0
        for(let j = 0; j < Width; j++){
            num <<= 1;
            num += baseBlock.getElementsByClassName("tiny")[i * 5 + j].value ? 0 : 1;
        }
        console.log(Math.floor(Math.log2(num)));
        str += "0b" + "0".repeat(4 - (num == 0 ? 0 : Math.floor(Math.log2(num)))) + num.toString(2) + ",\n";
    }
    str += "}";
    textAreaBlock.value = str;
});

clearButton.addEventListener("click", ()=>{
    for(let i = 0; i < Width * Heigth; i++){
        let temp = baseBlock.getElementsByClassName("tiny")[i];
        temp.value = true;
        temp.style.backgroundColor = "#fff";
    }    
});