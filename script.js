


let marka = ['bmw', 'nissan', 'hundai']

let model = [
    ['f10', 'f30', 'm5', 'x5'],
    ['sunny', 'juke', 'maxima'],
    ['sonata', 'accent', 'elantra'],

]

let images =[
    [ "https://images.unsplash.com/photo-1635770311293-b09d08a522fc?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
'https://images.unsplash.com/photo-1655940645013-c2e6cd16b177?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
'https://images.unsplash.com/photo-1637610904926-ba7bf77de172?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
[ "https://images.unsplash.com/photo-1635770311293-b09d08a522fc?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
'https://images.unsplash.com/photo-1655940645013-c2e6cd16b177?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
'https://images.unsplash.com/photo-1637610904926-ba7bf77de172?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
[ "https://images.unsplash.com/photo-1635770311293-b09d08a522fc?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
'https://images.unsplash.com/photo-1655940645013-c2e6cd16b177?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
'https://images.unsplash.com/photo-1637610904926-ba7bf77de172?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
]
console.log(images[0][0])
markaSelect()

function markaSelect() {
    let marka_select = document.getElementById('marka');
    let data = `<option value="" selected disabled> Secin</option>`
    marka.forEach((item, index) => {
        data += `<option value="${index}">${item}</option>`
    });
    marka_select.innerHTML = data;
}

function modelSelect(){
    let model_select = document.getElementById('model');
    let marka_select_value = document.getElementById('marka').value;
    let data = `<option value="" selected disabled> Secin</option>`
   for(let i = 0 ; i < model[marka_select_value].length; i++) {
       data += `<option value="${i}"> ${model[marka_select_value][i]}</option>`
    
    };
    model_select.innerHTML = data;
}

function photoSelect(){

}