// subahan allah
const value1 =document.getElementById('value1')
const incrementBtn1 = document.getElementById('incrementBtn1')
const decrementBtn1 = document.getElementById('decrementBtn1')

// alhamdulillah
const value2 =document.getElementById('value2')
const incrementBtn2 = document.getElementById('incrementBtn2')
const decrementBtn2 = document.getElementById('decrementBtn2')

// la ilaha illallah
const value3 =document.getElementById('value3')
const incrementBtn3 = document.getElementById('incrementBtn3')
const decrementBtn3 = document.getElementById('decrementBtn3')


// allahuakbar
const value4 =document.getElementById('value4')
const incrementBtn4 = document.getElementById('incrementBtn4')
const decrementBtn4 = document.getElementById('decrementBtn4')


let initialValue1 = 0
let initialValue2 = 0
let initialValue3 = 0
let initialValue4 = 0


// 1
incrementBtn1.addEventListener('click', function(){
    if( initialValue1 === 33){
        return alert ('Subhan Allah Complete')
    }
    initialValue1 += 1
    value1.innerText = initialValue1
})
decrementBtn1.addEventListener('click', function(){
    if( initialValue1 === 0){
        return alert ('Negative value not added')
    }
    initialValue1 -= 1
    value1.innerText = initialValue1
})

// 2
incrementBtn2.addEventListener('click', function(){
    if( initialValue2 === 33){
        return alert ('Alhamdulillah Complete')
    }
    initialValue2 += 1
    value2.innerText = initialValue2
})
decrementBtn2.addEventListener('click', function(){
    if( initialValue2 === 0){
        return alert ('Negative value not added')
    }
    initialValue2 -= 1
    value2.innerText = initialValue2
})


// 3
incrementBtn3.addEventListener('click', function(){
    if( initialValue3 === 33){
        return alert ('La Ilaha Illallah Complete')
    }
    initialValue3 += 1
    value3.innerText = initialValue3
})
decrementBtn3.addEventListener('click', function(){
    if( initialValue3 === 0){
        return alert ('Negative value not added')
    }
    initialValue3 -= 1
    value3.innerText = initialValue3
})


// 4
incrementBtn4.addEventListener('click', function(){
    if( initialValue4 === 33){
        return alert ('La Ilaha Illallah Complete')
    }
    initialValue4 += 1
    value4.innerText = initialValue4
})
decrementBtn4.addEventListener('click', function(){
    if( initialValue4 === 0){
        return alert ('Negative value not added')
    }
    initialValue4 -= 1
    value4.innerText = initialValue4
})

const resetBtn = document.getElementById('resetBtn')

resetBtn.addEventListener('click', function(){
    value1.innerText = 0;
    value2.innerText = 0;
    value3.innerText = 0;
    value4.innerText = 0;
    
    initialValue1 = 0
    initialValue2 = 0
    initialValue3 = 0
    initialValue4 = 0
})
