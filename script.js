total = 0
math = prompt("сколько будет 2+2 " )
    if(math === "4") 
        { total +=10 } 
sun = prompt("Солнце встает на востоке?")
    if(sun === "да" )
     { total +=10 }
    
del = prompt("Сколько будет 5/0")
        if(del === "на ноль делить нельзя")
        { total +=10 }
sky = prompt("Какого цвета небо?")
       if(sky == "синее") 
       { total +=10 }
allAnswer = prompt("Какой правильный ответ на главный вопрос жизни, вселенной и всего такого")
    if(allAnswer == "42") 
    { total +=10 } 
alert(total)
