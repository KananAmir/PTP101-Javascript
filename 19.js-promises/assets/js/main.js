// promises

const promise = new Promise((resolve, reject) => {
    let success = true
    if (success) {
        resolve('success')
    } else {
        reject('fail')
    }
})

// console.log(promise);

// promise states: pending
// promise states: fulfilled
// promise states: rejected


// blocks: then, catch, finally 


// promise.then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log('finally block');
// })



const myPromise = new Promise((res, rej) => {
    const students = ['farman', 'elmira', 'elmir', 'maryam']

    // students.length = 0

    if (students.length > 0) {
        res(students)
    } else {
        rej('no student!')
    }
})


// promise chaning

myPromise.then((result) => {
    result.pop()
    return result
}).
    then((data) => {
        data.push('murad')
        return data
    }).
    then((data) => {
        console.log(data);
    }).
    catch((err) => {
        console.log(err);
    })

