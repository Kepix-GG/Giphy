let api = "https://api.giphy.com/v1/gifs/search?q="
let key = "TGTrVLUXT8Dj2qVlS9nTjnwFL7cnBvQ9"
let secondStr = "&api_key=" + key


const search = async() =>{
    let input = document.querySelector('#input')
    let url = api + input.value + secondStr + '&limit=10'
    
    let responce = await fetch(url)
    let req = await responce.json()

    console.log (req)

    let arr = req.data
    console.log(arr)
    
    let div = document.querySelector('.output')

    div.innerHTML = ''
    input.value = ''

    arr.forEach(el=> {
        let io = document.createElement('iframe')
        io.src = el.embed_url
        div.append(io)
        
    });



}