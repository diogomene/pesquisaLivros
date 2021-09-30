async function fetcher(querry){
    return new Promise((resolve, reject)=>{
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${querry}`).then(
            res=>{
                res.json().then(
                    result=>resolve(result)
                )
            }
        )
    })
}
function infoLoader(result){
    try{
    const {title="Sem título", authors="Sem autor", description="Sem descrição",infoLink="#"} = result.volumeInfo
    const img = result.volumeInfo.imageLinks.thumbnail
    return({title:title, autor:authors[0], description:description,
    link:infoLink, img:img})
    }catch(e){
        
    }
    
}
export {fetcher, infoLoader}
