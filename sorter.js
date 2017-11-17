var students = ["Amaree", "Alan", "Edgat", 
"When a Manuel loves a woman", "Billy",
"Marlene Gallardo", "Marlene Hernandez",
"Allyson Dixon-Duart-heeeeey", "Emily Garcia",
"Lupito", "Cardo", "Geo", "Kevin", "Gilberto",
"Clemente", "Arianna", "Jerry Fonseca-Garcia", 
"Flower", "GERRRSSSSOOOOOON", "Jose Carbajal-Lopez",
"Christian Vences-Cabrera", "Estefani", "Abel", 
"Eric Tobon", "Jose", "Owens", "Daddy Anthony", 
"Jenny",]

function sortStudents(studentsArray, size){
    var groups = [ ]
    var currentGroup = [ ]


while (studentsArray.length > 0) {
    var randomNumber = Math.floor(Math.random() * studentsArray.length)
    var randomStudent = studentsArray[randomNumber]
    
    currentGroup.push(randomStudent)
    
    studentsArray.splice(randomNumber, 1)
    
    if (currentGroup.length >= size){
        groups.push(currentGroup)
        currentGroup = [ ]
    }
        
    
}

if ( currentGroup.length > 0){
    groups.push(currentGroup)
}

for (var i = 0; i < groups.length; i++){
    console.log('Group #' + (i+1) + ': ' + groups [i])
}

}

// sortStudents(students, 3)

console.log(students.sort().indexOf('Amaree'))

