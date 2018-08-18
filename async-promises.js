/*************************************
Using async and await with Promises
and error handling with Promises
*************************************/
let log = console.log;

dothings();

//  function dothings(){
//     //delay(1000).then(()=>{}).catch(err=>{})
//     let p = delay(1000).catch(err => log('err', err.message));
//     log(p);
    
//     // if(p){
//     //     log('response from Promise', p);
//     // }else{
//     //     log('No result the Promise must have rejected')
//     // }
    
// }

async function dothings(){
    //delay(1000).then(()=>{}).catch(err=>{})
    let p = await delay(1000);
    //log(p);
    
    if(p){
        log('response from Promise', p);
    }else{
        log('No result the Promise must have rejected')
    }
    
}

function delay(ms) {
    //fetch() is just a Promise too
    return new Promise((resolve, reject)=>{
        //resolve(ms);
        reject( new Error('bad things happened') )
        // setTimeout(resolve, ms, 42);
        //setTimeout(reject, ms, new Error('bad things happened'));
    })
    .catch(err=>log('err', err.message))
}
