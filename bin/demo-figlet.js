const figlet = require('figlet');
let { promisify } = require('util');
let asyncfiglet = promisify(require('figlet'));


// 第一种方式 callback调用
figlet('Hello World', function (err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.log(err);
        return;
    }
    console.log(data);
});


async function run() {
    let data = await asyncfiglet("Vue 3");
    console.log(data);
}
run()