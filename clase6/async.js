const loadData = async ()=>{

    try{
            
        const url = 'http://jsonplaceholder.typicode.com/todos/1'

        const res = await fetch(url)

        const data = await res.json()

        return data
    }
    catch{
        err=>{
            console.log(err)
        }
    }
    
}

(async ()=>{
    const resultado = await loadData()
    console.log(resultado)
})()


