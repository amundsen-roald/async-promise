var a = new Promise ((resolve) => {
  resolve('我是第一');
})
.then(
	value => {
    console.log(value);
    console.log(nothing); // 这里并没有定义nothing这个变量，可以尝试注释这一行再运行一次。
	}
)
.then(
	() => {
		return new Promise((resolve, reject) => {
      resolve('我是嵌套的第二层');
      // reject('error');
    })
    .then(
      value => {
        console.log(value);
      }, error => {
        console.log(error);
      }
    )
	}
)
.then(
	() => {
    console.log('我是第三');
  }
)
.catch(
  (error) => {
    console.log('进入到catch块中，说明有报错，报错如下：');
    console.log(error);
  }
)