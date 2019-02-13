

// async function a (num) {
// 	await console.log(num);
// 	console.log('我是最后一句');
// }
// a('await执行啦')


// var p = new Promise((resolve, reject) => {
// 	resolve('resolve');
// 	console.log('resolve之后的一句')
// }).then((n) => {
// 	console.log(n)
// })

// 下面这道题是今日头条的面试题，尝试理解打印出来的值得顺序 (核心：理解 async await 的执行顺序)

async function async1() {
    console.log("async1 start"); // 2
    await async2();
    await console.log(6666) // 6
    await console.log(7777) // 8
    console.log("async1 end"); // 9
    return 999;
}

async function async2() {
   console.log( 'async2'); // 3
}

console.log("script start");  // 1

setTimeout(function () {
    console.log("settimeout"); // 11
},0);

async1().then((num) => {
	console.log(num); // 10
});

new Promise(function (resolve) {
    console.log("promise1"); // 4
    resolve();
})
.then(function () {
    console.log("promise2"); // 7
});

console.log('script end'); // 5