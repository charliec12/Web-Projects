
const ram_input = document.getElementById("RAM_Input").value;
const init_ram_value = document.getElementById("ram_value").innerHTML;
const max_ram_value = document.getElementById("max_ram_value").innerHTML;
// const btn = document.querySelector("button");
const bod = document.querySelector("main");

let max_size;
let init_size;

_e('btn').onclick = function(ram_input){
    

        init_size = calcInit(ram_input);
        max_size = calcMax(init_size);
    
        init_ram_value.innerHTML = init_size;
        max_ram_value.innerHTML = max_size;
    
}

function _e(id){
    return document.getElementById(id);
}



















function changeColor() {
    bod.style.color = "blue";
}

function updateContent(ram_input){

    init_size = calcInit(ram_input);
    max_size = calcMax(init_size);

    init_ram_value.innerHTML = init_size;
    max_ram_value.innerHTML = max_size;
}

//-------------------Function-----------------

function calcInit(i){
  var conversion_value = 1024;
  var init = 1.5 * (i * conversion_value);
  
  return init;
}

function calcMax(m){
    max = m * 3;

    return max;
}
//-------------------Function-----------------
