type X = {
    a: string;
    b: number;
};

type Y = {
    c: string;
    d: number;
};

// ab hame x ki value ko y me extend karna hai to ham kya karenge 

type Y = X & {
    c: string;
    d: number;
}

// In this exp it will give us error that it's missing some values a and b
// but if i remove this = X & from type Y = X & { ... } here it will work fine
 
let y: Y = {
    c: "hasnraj",
    d: 42
}

// interface and type works same but their syntex is different 
// but we use interface because it's very easy  
