interface Person {
    name: string;
    age?: number;
}

interface Guy {
    profession: string;
}

// ab hame Person object ko Guy object me extend karna hai to ham kya karenge 
interface Guy extends Person {
    profession: string;
} 