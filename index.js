

//Создание блока ошибки---------------------------------------------
class errorMessage{
    constructor(message){
        this.message = message
    }
    render(){
        const content = document.querySelector('.content')
        const block = document.createElement('div')
        block.className = 'error-message'

        const p = document.createElement('p')
        p.textContent = `${this.message}`
        block.append(p)
        
        return content.append(block)
    }
}
// Удаление ошибки--------------------------------------------
function removeError(){
    const error = document.querySelector('.error-message')
    error? error.remove(): null
}

// Прогрессбар--------------------------------------------------

const circle = document.querySelector('.progress-ring__circle')
const radius = circle.r.baseVal.value
const circumference = 2 * Math.PI * radius
const percentCircle = document.querySelector('.circle-progress')

percentCircle.addEventListener('change', function(){
    if (percentCircle.value <= 100 && percentCircle.value >= 0){
        setProgress(percentCircle.value)
        removeError()
    } else {
        const error = new errorMessage('Введите число от 0 до 100')
        error.render()
    }
    
})

circle.style.strokeDasharray = `${circumference} ${circumference}`
circle.style.strokeDashoffset = circumference


function setProgress(percent){
    const offset = circumference - percent / 100 * circumference
    circle.style.strokeDashoffset = offset
}

// Animatiom--------------------------------------------------
const animate = document.querySelector('.animation')
const aninated = document.querySelectorAll('.rotate')

animate.addEventListener('click', (event)=> {
    console.log(aninated.forEach(item => item.id
        ? item.id =''
        : item.id = 'animation'
        ))
        
})


// Hide------------------------------------------------------
const hide = document.querySelector('.hiden')
const hiden = document.querySelector('.progressbar')

hide.addEventListener('click', (event)=> {
    target = event.target
    hiden.id 
        ? hiden.id = ''  
        : hiden.id = 'hide'
})
