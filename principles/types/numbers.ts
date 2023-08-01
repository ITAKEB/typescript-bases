(() => {
    let avengers: number = 10

    console.log(avengers)

    const villians = 20


    if (avengers < villians) {
        console.log("We are in problems")
    } else {
        console.log("We are saved")
    }

    avengers = Number("123A") // NaN (Not a number is consider a number in ts)
    console.log({ avengers })


})()