var a = new Promise ((resolve, reject) => {
	resolve('成功');
	reject('失败');
})
.then(
	value => {
		console.log(value);
	},
	err => {
		console.log(err);
	}
)
.catch(
	() => {
		console.log('报错啦');
	}
)