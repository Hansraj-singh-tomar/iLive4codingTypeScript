// // what are access modifiers ?
// // why need access modifiers ?
// // Public access modifier.
// // Private access modifier.

// // Bydefault Public hi rehta hai

// class Users2{
//     private name=""; 
//     setName(name){
//         this.name=name;
//     }
//     displayName(){
//        console.log(this.name);
//        this.getNameLength();  
//     }
//     private getNameLength(){
//         console.log(this.name.length); 
//     }
// }

// let u1 = new Users();
// u1.setName("hansraj");
// // u1.name="sidhu";  // yha ham name ki value ko change nhi kar sakte hai kyonki name ek private propety hai isliye isse sirf class ke andar hi use kar sakte hai 
// u1.displayName();  // hansraj
// // u1.getNameLength(); // 7  // getNameLength function ko private karne par mujhe ye length nhi provide karega konoki getNameLength() ek private function hai and jise ham sirf class ke andar hi use kar sakte hai 