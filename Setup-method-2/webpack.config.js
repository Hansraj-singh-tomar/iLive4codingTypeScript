const path = require("path");

module.exports = {
    entry : "./src/index.ts", // entry means, kha se hamara file milega 
    output : {  // hamara jo file ka bundle banega usse ham kha rakhne vale hai 
        filename : "bundle.min.js",
        path : path.resolve(__dirname,"dist"),
    },
    module : {
        rules : [
            {
                test : /\.ts$/, // test karo vo file jiski ending .ts se ho rhi hai usse hame compile karna hai  
                include : [path.resolve(__dirname,"src")],
                use : "ts-loader",  // agar unhe aisi koi ts file milti hai to usme use kar lo ts-loader jo uss file ko compile kar dega ts se js me 
            },
        ]
    },
    resolve : {
      extensions : [".ts",".js"]
    },
    // devServer : {
    //     contentBase : path.join(__dirname,"dist"),
    //     compress : true,
    // },
    devServer: {
        static: {
          directory: path.join(__dirname, "dist")
        },
        compress : true,
    },    
    mode : "development" 
}

// iske baad src folder ke andar package.json file me script ke andar "build" : "webpack" kar dena hai 
// and then command chalayenge E:\iLive4codingTypeScript\Setup-method-2> npm run build
// uske baad dist folder ke andar ek file milegi bundle.min.js
// or uss file ko ham index.html file me import kar lenge <script src="./bundle.min.js"></script>

// ek error dekhane ko milegi vo hai Module not found: Error: Can't resolve './utils/sum' in 'E:\iLive4codingTypeScript\Setup-method-2\src'
// iss error ke liye me webpack ko btaunga ki kon kon si file ko apko karna hai resolve 
// resolve : {
//       extensions : [".ts",".js"]
// }

// Bonus 
// html file par gya and then page ko reload kiiya but agar hame autoserver mil jaye to vo kaisa rhega mtlb ham kuch change kare to vo automatically compile ho jaye and browser bhi reload ho jaye to vo kaise hoga
// npm install --save-dev webpack-cli
// npm install -D webpack-dev-server
// npm install --save-dev webpack-dev-server
// and then package.json file me likhenge
// "scripts": { 
//     "serve": "webpack serve",
// }
// and then webpack.config.js file me add karenge
// devServer: {
//     static: {
//       directory: path.join(__dirname, "dist")
//     },
//     compress : true,
// },
// E:\iLive4codingTypeScript\Setup-method-2> npm run serve
// ab hame http://localhost:8080/ par output dekhne ko milega
