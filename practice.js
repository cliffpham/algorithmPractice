const classList = [];

const studentBody = [];

function createClass (id, period, cap) {
    //if id already exists in classList return error

    if (classList.find(x => x.id === id)) {
        console.log('Class already exists')
        // throw new Error('Class ID already exists')
    } else {
        classList.push({
            id: id,
            period: period,
            maxCap: cap,
            currentEnroll: 0,
            students: []
        })
    }      
    return classList;
}

function removeClass (id) {
    if (classList.findIndex(x => x.id === id) !== -1){
        // console.log(classList.findIndex(x => x.id === id))
        classList.splice(classList.findIndex(x => x.id === id), 1);
    } else {
        console.log('No class with that id found');
    }
    return classList
}

function addStudent (studentID) {
    if (studentBody.find(x => x.id === studentID)) {
        console.log('student id has already been taken')
    } else {
        studentBody.push({
            studentID: studentID,
            schedule: [],
        })
    }
    return studentBody;
}

function enrollStudent (classID, studentID) {
    const index = classList.findIndex(x => x.id === classID);
    const sIndex = studentBody.findIndex(x => x.studentID === studentID);

    console.log(classList[index].period);

    if (classList[index].currentEnrollment === classList[index].maxCap) {
        console.log('Error. Cannot enroll student, class is filled up');
    }

    if(index !== -1) {
        // check students schedule
        if(studentBody[sIndex].schedule.includes(classList[index].period)){
            console.log('Error. Student cannot enroll in this class due to a scheduling conflict')
        } else {
            // put the class period into the student's schedule
            studentBody[sIndex].schedule.push(classList[index].period);

            //push the student into the class list
            classList[index].students.push(studentID);

            //increase enrollment by 1
            classList[index].currentEnroll++;
        }
    
        } else {
        console.log('Error. That class does not exist');
    }
    return console.log(studentID + ' was successfully added to ' + classID);
}

function removeStudent (studentID) {
    // check if id exists

    const sIndex = studentBody.findIndex(x => x.studentID === studentID);

    if (sIndex === -1) {
        console.log('Error. Student does not exist');
    } else {

         // remove student from all their classes and change enrollment number

        for (let current of classList) {
            if(current.students.findIndex(x => x === studentID) !== -1) {
                current.students.splice(current.students.findIndex(x => x === studentID), 1);
                current.currentEnroll--;
         }

         // remove student from student body
         studentBody.splice(sIndex, 1);    
        }
    }
    return console.log(studentID + ' was succesfully removed');
}

    // You will be given a student ID and a class ID. 
    // Attempt to unenroll the student in the class - 
    // this can only happen if there is a student corresponding to the student ID 
    // and a class corresponding to the class ID and the student is already enrolled in the class. 
    // Report any error if the student could not be enrolled in the class. 
    // Otherwise, return the number of open spots left in the class.

function unenrollStudent (classID, studentID) {
    const cIndex = classList.findIndex(x => x.id === classID);
    const sIndex = classList[cIndex].students.findIndex(x => x === studentID);

    if (cIndex === -1) {
        console.log(classID + ' does not exist');
    }

    if(sIndex !== -1) {
        classList[cIndex].students.splice(sIndex, 1);
        classList[cIndex].currentEnroll--;

        const remove = studentBody.findIndex(x => x.studentID === studentID);
        const pIndex = studentBody[remove].schedule.findIndex(x => x === classList[cIndex].period);
        studentBody[remove].schedule.splice(pIndex, 1);
        
    } else {
        console.log('Student could not be added to the class')
    }

    console.log('Students enrolled in class: ' + classList[cIndex].currentEnroll);
}





console.log(createClass('A', 1, 15));
console.log('***********************');
// console.log(createClass('A', 1, 15));
console.log(createClass('B', 2, 15));
// console.log(createClass('C', 2, 15));
// console.log(createClass('D', 3, 15));
// console.log('***********************');
// console.log(removeClass('C'));
// console.log('***********************');
console.log(addStudent('101'));
console.log(addStudent('102'));
console.log(enrollStudent('A', '101'));
console.log(enrollStudent('B', '101'));
console.log(enrollStudent('A', '102'));
console.log(classList);
console.log(studentBody);

// console.log(removeStudent('102'));
// console.log(studentBody);
// console.log('***********************');
// console.log(unenrollStudent('A', '101'));
// console.log(enrollStudent('B', '101'));


