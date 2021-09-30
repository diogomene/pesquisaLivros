class Book{
    constructor(id, title, author, desc, link, img){
        this.id= id
        this.title = title;
        this.author = author;
        this.desc = desc;
        this.link = link;
        this.img = img;
    }
}
const descResolver = (book)=>{
    const descVector = book.desc.split("\n")
    let finalDesc="";
    descVector.forEach(element => {
        finalDesc+=`<p>${element}</p>`
    });
    return finalDesc
}
const render = (book, descResolver, resultados)=>{
    const html=`<div class=book id=book-${book.id}>
            <div class="bookThumb">
                <a href=${book.link}>
                    <image class="thumbImg" src=${book.img} alt="img-${book.title}">
                </a>
            </div>
            <div class="bookInfo">
                <a class="bookTitle"href=${book.link}>${book.title}</a>
                <p class="author">${book.author}</p>
                <div class="bookDescription">
                    ${descResolver(book)}
                </div>
            </div>
        </div>`
        resultados.innerHTML+=html
}

export {Book, descResolver, render}
