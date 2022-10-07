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
function  value1(){
	return new Promise(function (resolve , reject){
      console.log("this is rejected");
			reject();
	})
}
function  value2(){
	return new Promise(function (resolve , reject){
    console.log("this is resolved");
			resolve();
	})
}
function  value3(){
	return new Promise(function (resolve , reject){
    console.log("this is resolved");
			resolve();
	})
}
Promise.all([value1(), value2(), value3()])
  .then(function(){
    console.log("this is success");
  })
  .catch(function(){
    console.log("this is error");
  })