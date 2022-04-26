const userLeft = false;
const userWatchingCatMeme = true;


function watchTutoriaPromise() {
    return new Promise((resolve, reject) => {

        if (userLeft) {
            reject({
                name: "User Left",
                message: '(:'
            });
        } else if (userWatchingCatMeme) {
            reject({
                name: "User watching cat meme",
                message: "WEb dev simplified < cat"
            })
        } else {
            resolve("thubs up and subscribe")
        }
    })

}

watchTutoriaPromise().then((message)=>{
    console.log("Success"+ ' ' +message)
}).catch((error)=>{
    console.log(error.name +' '+error.message);
})

// watchTutorialCallback((message) => {
//     console.log("success" + message);
// }, (error) => {
//     console.log(error.name + ' ' + error.message)
// })


// function watchTutorialCallback(callback, errorCallback) {
//     if (userLeft) {
//         errorCallback({
//             name: "User Left",
//             message: '(:'
//         });
//     } else if (userWatchingCatMeme) {
//         errorCallback({
//             name: "User watching cat meme",
//             message: "WEb dev simplified < cat"
//         })
//     } else {
//         callback("thubs up and subscribe")
//     }
// }

