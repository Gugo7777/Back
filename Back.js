// console.log(global);

// setTimeout(() => {
//     console.log('Hello!');
// },2000)

// let x = new Date()
// global.date = x
// console.log(global);

// console.log(__dirname, '---this is a dirname');

// console.log(__filename, '---this is a filename');

// console.log(process.argv);

// console.log(process.env);

const name1 = "Jon Snow";
const sayHi = (para) => {
    console.log(`Hello ${para}`);
}

module.exports = {
    name1: name1,
    sayHi: sayHi,
    x: 12,
}

