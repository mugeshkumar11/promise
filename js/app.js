//promise function 
/*
let value = new Promise(function (resolve, reject){
	let a =1+1;
	if (a==2){
		resolve("success");
	}else{
		reject("error");
	}
});
value.then(function(){
	console.log("this is success");
})
.catch(function(){
	console.log("this is error");
})
*/
//promise all
function  fun1(){
	return new Promise(function (resolve , reject){
			console.log("fun1");
			reject();
	})
}
function  fun2(){
	return new Promise(function (resolve , reject){
		setTimeout (function (){
			console.log("fun2");
			resolve();
		},2000);
	})
}
function  fun3(){
	return new Promise(function (resolve , reject){
			console.log("fun3");
			resolve();
	})
}
Promise.all([fun1(),fun2(),fun3()])
  .then(function(){
    console.log("success");
  })
  .catch(function(){
    console.log("error");
  })