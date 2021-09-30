import {Book, descResolver, render} from '../js/book.js'
import { fetcher, infoLoader } from '../js/apiCaller.js'

const form = document.getElementById('formulario')
const resultados = document.getElementById('results')

form.onsubmit = async e=>{
    resultados.innerHTML="";
    e.preventDefault();
    const titleBook = document.getElementById('bookName').value
    const bookInfo = await fetcher(titleBook)
    bookInfo.items.forEach((jsonLivro, i)=> {
        const{title="", autor="", description="", link="", img=""}= infoLoader(jsonLivro)
        if(title!=""){
            const booki =new Book(i+1, title, autor, description, link, img)
            render(booki, descResolver, resultados)
        }
    });
}