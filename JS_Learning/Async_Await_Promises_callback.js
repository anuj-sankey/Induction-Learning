//Callback , Promises, Async , Await

const datas = [
    {
        name: "Anuj",
        profession: "SDE"
    },
    {
        name: "Amit",
        profession: "CTO"
    },
];

//Callback
//Whenever the data is incoming late or adding some time then the we will use the callback
//That is will update the change without doing any fault
// function getdatas(){
//     setTimeout(() => {
//         let output = "";
//         datas.forEach((data, index) => {
//             output += `<li>${data.name}</li>`
//         })
//         document.body.innerHTML = output;
//     }, 1000);
// }

// function createdata(newData, callback){
//     setTimeout(()=>{
//         datas.push(newData);
//         callback();
//     }, 2000);
// }

// createdata({name: "Vivek", profession: "SWE"}, getdatas);

// getdatas();

//Promises
function getdatas() {
    setTimeout(() => {
        let output = "";
        datas.forEach((data, index) => {
            output += `<li>${data.name}</li>`
        })
        document.body.innerHTML = output;
    }, 1000);
}

function createdata(newData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            datas.push(newData);
            let error = false;

            if (!error) {
                resolve();
            } else {
                reject("Error");
            }
            getdatas
        }, 2000);
    })
}

// createdata({ name: "Vivek", profession: "SWE" }).then(getdatas).catch(err => console.log('Error Occured', err));

//Async & Await

async function start(){
    await createdata({name:"Vivek", profession:"SWE"})
    getdatas();
}

start();