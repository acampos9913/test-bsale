var products = document.getElementById('products')
var categories = document.getElementById('categories')
var searchButton = document.getElementById('search')
var searchText = document.getElementById('search-text')
var moreButton = document.getElementById('page-item')
var stockDisponible = document.getElementById('stockDisponible')

var template_product = document.getElementById('template-product').content
var template_category = document.getElementById('template-category').content
var framentProduct = document.createDocumentFragment()
var framentCategory = document.createDocumentFragment()

let category = 0
let page = 1
let text = ""

document.addEventListener('DOMContentLoaded', () => {
    fechProduct()
    fechCategory()
})

categories.addEventListener('click', e =>{
    mostrarProductosPorCategoria(e)
})

searchButton.addEventListener('click', e =>{
    mostrarProductosPorBusqueda(e)
})

moreButton.addEventListener('click', e =>{
    mostrarProductosPorMas(e)
})

const fechProduct = async () =>{
    try {
        const res = await fetch('https://anuzxle2qe.execute-api.us-west-2.amazonaws.com/dev/api/product/category/?category=' + category + '&page=' + page + '&text=' + text , {
                method: 'GET'
                }
            )
            const data = await res.json()
            pintarProduct(data)
    } catch (error) {
        console.log("Error" + error);
    }
}

const fechCategory = async () =>{
    try {
        const res = await fetch('https://anuzxle2qe.execute-api.us-west-2.amazonaws.com/dev/api/category/get', {
            method: 'GET'
            }
        )
        
        const data = await res.json()
        pintarCategory(data)
    } catch (error) {
        console.log("Error" + error);
    }
}

const pintarProduct = data => {
    try {
        let cantidadDatos = data.length;
        if(page === 1){
            products.innerHTML = ""
            if(cantidadDatos > 0){
                stockDisponible.style.visibility = "hidden"
            }
            else{
                stockDisponible.style.visibility = "visible"
                stockDisponible.textContent = "No exiten productos disponibles"
            }
        }

        if(cantidadDatos > 0){
            moreButton.disabled = false;

            data.forEach(product => {
                template_product.getElementById('card-title').textContent = product.name
                if(product.url_image === null || product.url_image === ''){
                    template_product.getElementById('card-image').src = './image/default.png'
                }
                else{
                    template_product.getElementById('card-image').src = product.url_image
                }
                template_product.getElementById('card-price').textContent = '$ ' + product.price
        
                const clone = template_product.cloneNode(true)
                framentProduct.appendChild(clone)
            });
            products.appendChild(framentProduct)
        }
        else{
            moreButton.disabled = true;
        }
    } catch (error) {
        console.log("Error" + error);
    }
}

const pintarCategory = data => {
    try {
        data.forEach(category => {
            template_category.querySelector('a').textContent = category.name
            template_category.querySelector('a').id = category.id
    
            const clone = template_category.cloneNode(true)
            framentCategory.appendChild(clone)
        });
        categories.appendChild(framentCategory)
    } catch (error) {
        console.log("Error" + error);
    }
}

const mostrarProductosPorCategoria = e =>{
    try {
        text = searchText.value
        page = 1
        if(e.target.classList.contains('dropdown-item')){
            const product = e.target.parentElement
            category = product.querySelector('a').id
            fechProduct()
        }
    } catch (error) {
        console.log("Error" + error);
    }
}

const mostrarProductosPorBusqueda = e =>{
    text = searchText.value
    page = 1
    fechProduct()
}

const mostrarProductosPorMas = e =>{
    page = page + 1
    fechProduct()
}