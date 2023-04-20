// Intersection - this is help us to pick up common thing.
// inka jyada use nhi hota hai 

type BaseRes = {
    success: boolean;
    error?: string; // ? => optional hai means error ki koi value na ho 
}

type Teacher = {
    age: number;
    exp: number;
}; 

type Student = {
    class: number;
    subjects: string[];
};

type MainRes = {
    data: Teacher | Student
};

type Res = BaseRes & MainRes;

let baseRes = {
    success: true,
    error: ""
};

// function getResponseFor(resFor: string):Res | undefined {
function getResponseFor(resFor: ("teacher" | "student")):Res | undefined {
    let teacher = {
        age: 10,
        exp: 5
    };

    let student = {
        class: 5,
        subjects: [] 
    };

    if(resFor === "teacher"){
        return {data: teacher, ...baseRes};
    } else if(resFor === "student"){
        return {data: student, ...baseRes};
    }
}

getResponseFor("student")