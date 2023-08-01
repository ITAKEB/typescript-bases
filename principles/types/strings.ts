(() => {
    const batman: string = 'bat\'mans'
    const flash: string = 'Flash'
    const volcanNegro: string = `Hero: Volcan Negro`


    console.log(batman.toUpperCase())

    //batman[10]'?' Verifica que sea nulo, si lo es, lanza is not present
    console.log(batman[10]?.toUpperCase() || "Is not present")

})()

