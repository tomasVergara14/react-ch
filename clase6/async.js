const prueba = (()=>{

    try{
                
        console.log('a ver')
        const time =  setTimeout(()=>{
                console.log('ya era hora, va tercero')
                setTimeout(()=>{
                    console.log('y este va cuarto')
                },2000)
            },1000)
        //console.log(time)
        console.log('esto es segundo')
    }
    catch(err){
        console.log(err)
    }
})()

const print =  (async ()=>{
    const data = await prueba
    console.log(data)
    console.log('prnt')
})()
