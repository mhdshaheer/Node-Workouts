// const fs = require('fs')

// const numbers = [1,4,3,2,5]

// const promise = new Promise((resolve,reject)=>{
//     if(numbers.includes(3)){
//          resolve();
//     }
// });

// promise.then(()=>{
//     fs.writeFileSync('./out.txt','utf-8');
//     console.log("write done")
// }).catch((err)=>{
//     console.log(err)
// })

// const obj = {
//     myName : 'shaheer',
//     age : '22'
// }
// const {myName} = obj
// console.log(myName)
// function printData(place){
//     console.log(this.myName + " " + this.age + " " + place)
// }
// printData.apply(obj,['mukkam'])

//

// function first(a){
//     return function(b){
//         console.log(a+b)
//         // return a+b
//     }
// }
// first(12,(4))

// function * Generator(){
//     for(let i=1;i<=100;i++){
//         yield i;
//     }
// }
// const gen = new Generator();
// const arr = []
// for(let i =0;i<100;i++){
//     arr[i]=gen.next()
// }
// for(let j=100,j)

// const num = [1,2,5,3,6,9,6]

// num.reduce((acc,curr,index,array)=>{
//     if(curr%2==0){
//         if(acc>curr){
//             return curr
//         }else{
//             return acc
//         }
//     }

// })


// function callBack(){
//         console.log('callback...')
// }
// function justFun(call){
//         call()
// }
// justFun(callBack)


// duplicate delete

// const num = [1,2,5,1,1,4,2];
// const out = num.reduce((acc,curr,index,array)=>{
    //     if(!acc.includes(curr))
    //         acc.push(curr);
//     return acc;
// },[]);
// console.log(out);

// const a =[1,2,4,10]
// const num =2;

// if(a.includes(num)){
    //     console.log('present')
    // }else{
        //     console.log('not')
        // }
        
// const express = require('express')
// const app = express()
// const middleware = (req,res,next)=>{
//     console.log("KJGDSKJUGDF")
//     // next()
// }
// // app.use(middleware)
// app.listen(3002,()=>{
//     console.log('server is running..')
// });


// app.get('/',middleware,(req,res)=>{
//     res.send('hai')
    
// });
// app.post('/',(req,res)=>{

// })


// function forClosure1(){
//     let a = 10;
//     console.log(a,'first');
//     function forClosure2(){
//         let a = 15
//         console.log(a,'second');
//         function forClosure3(){
//             console.log(a,'third');
//         }
//         forClosure3()
//     }
//     return forClosure2
// }
// const hi = forClosure1();
// hi()
// const map = new WeakMap();
// const obj = {}
// map.set(obj,'saurav');
// console.log(map.has(obj1))


// const a = 3.3;
// if(a%1!=0){
//     console.log('it is a fraction')
// }else{
//     console.log('it is not fraction')
// }

// const map = new WeakMap();
// const obj = {'name':1}
// map.set(obj,'shaheer');
// console.log(map.get(obj))
 
// const fs = require('fs')
// const wish = 'HELLO';
// const promise = new Promise((resolve,reject)=>{
//     if(wish.includes('L')){
//         resolve(9)
//     }
//     else{
//         reject('no L')
//     }
// }).then((data)=>{
//     fs.writeFileSync('./outttt.txt',data.toString(),'utf-8');
// }).catch((err)=>{
//     console.log(err)
// })

// const obj = {
//     name : 'shaheer',
//     age : 22,
//     place : 'mukkam'
// }


// const arr = [1,4,2,76,8]

// for(let key in arr){
//     console.log(key,arr[key])
// }

//===============================
// # SHALLOW COPY & DEEP COPY
//================================

// const num = [1,2,4,[3,5]];

// // const forShallow = [...num]
// const forDeep = JSON.parse(JSON.stringify(num))
// forDeep[3][0]= 'shhhhh';
// console.log(forDeep)
// console.log(num)

// (function sum(){
//     console.log(1+7);
// })();

// const hai = 'shaheer';
// const d = hai.padEnd(20,'+')
// console.log(d);

// function justFun(){
//     const promise = new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(11)
//         }, 4000);
//     })
//     return promise;
// }

// async function sum(){
//     console.log('first done')
//     const data = await justFun();
//     console.log(data)
//     console.log('second done')
// }
// sum();


// const arr = [1,2,6,8,3,0,10];
// const n = 3;
// const a = arr.splice(n,2)
// console.log(arr)
// console.log(arr.indexOf(6))
// let temp = 0;
// for(let i = 0;i<=arr.length;i++){
//     if(arr[i]==n){
//         temp = arr[i];
//         arr[i] = arr[i+1];
//         arr[i+1] = temp;
//     }
// }

// Use(err,req,res,next)
// Use(req,res,next)

// function ur(a=10,b){
//     console.log(a,b)
// }
// ur(undefined,2)


// const array = [1, 2, 2, 3, 4, 4, 5];
// // console.log(array.indexOf(2))
// const uniqueArray = array.filter((value, index) => {
//     return array.indexOf(value) === index;
// });
// console.log(uniqueArray);

// const out = array.filter((item,index,arr)=>{
//     return arr.indexOf(item)===index;
// })
// console.log(out)

//=========================================
//---------second largest element----------
//=========================================

// const nums = [3,4,6,1,9,5,7]
// let max = nums[0];
// let sMax ;
// for(let i = 1;i<nums.length;i++){
//     if(max<nums[i]){
//         sMax = max;
//         max = nums[i];
//     }else if(max>nums[i] && sMax<nums[i]){
//         sMax = nums[i];
//     }
// }
// console.log(max,sMax);

//=========================================
//------unique element using filter--------
//=========================================

// const arr = [1,5,5,4,3,7,2,4,3];
// const out = arr.filter((item,index)=>{
//     return arr.indexOf(item) == index
// });
// console.log(out)

//=========================================
//------unique element using filter--------
//=========================================

// "use strict"
// a = 7;  

// const bin = a.toString(2)
// console.log(bin)


// const EventEmitter = require('events');
// const eEmitter = new EventEmitter();
// eEmitter.on('forName',(name)=>{
//     console.log(`name is : ${name}`)
// })
// eEmitter.emit('forName','shaheer')

// const eventEmitter = require('events');
// const forEmit = new eventEmitter();

// forEmit.on('printAge',(age)=>{
//     console.log(`age is : ${age}`)
// });

// forEmit.emit('printAge',7);

// function Car(color,wheel){
//     this.color=color;
//     this.wheel=wheel;
//     console.log(this.color,this.wheel);
// }
// const cars = new Car('red',4);

// const _name1= 'shaheer1';
// console.log(_name1);
// const $name2= 'shaheer2';
// console.log($name2)

// const arr = [1,3,6,8,2,4,7]
// const out = arr.reduce((acc,curr)=>{
//     let [sMax,max]=acc;
//     if(max<curr){
//         sMax=max
//         max =curr      
//     }else if(sMax<max && sMax>curr){
//         sMax = curr
//     }
//     return [max,sMax]
// },[-Infinity,-Infinity])
// console.log(out)

// app.get('/',(req,res)=>{
//     const readFile= fs.readFileSync('./demo.txt','utf-8')
//     console.log(readFile)
// })

// app.use((err,req,res,next)=>{

// })
// app.use((req,res,next)=>{

// })