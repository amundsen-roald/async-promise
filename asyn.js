const wait = ms => new Promise(resolve => setTimeout(resolve, ms, '我被打印出来了')).then(value => {console.log(value)});
async function fn(){
	await wait(1000);
}
fn()