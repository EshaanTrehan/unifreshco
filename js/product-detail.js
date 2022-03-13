document.querySelectorAll('.product-img-item').forEach(e => {
    e.addEventListener('click', () => {
        let img = e.querySelector('img').getAttribute('src')
        document.querySelector('#product-img > img').setAttribute('src', img)
    })
})

document.querySelector('#view-all-description').addEventListener('click', () => {
    let content = document.querySelector('.product-detail-description-content')
    content.classList.toggle('active')
    document.querySelector('#view-all-description').innerHTML = content.classList.contains('active') ? 'view less' : 'view all'
})
// images\
let products = [
    {
        name: 'Laundary',
        image1: './images/Laundary.webp',
        image2: './images/laundary 3.jpg',
        old_price: '200',
        curr_price: '300'
    },
    {
        name: 'Stationary',
        image1: './images/Stationary.webp',
        image2: './images/Stationary1.jpg',
        old_price: '250',
        curr_price: '100'
    },
    {
        name: 'Cleaning Pack',
        image1: './images/cleaning pack.webp',
        image2: './images/cleaning pack2.jpg',
        old_price: '600',
        curr_price: '450'
    },
    {
        name: 'Bedsheet',
        image1: './images/Bedsheet.png',
        image2: './images/bedsheet1.jpg',
        old_price: '600',
        curr_price: '300'
    },
    {
        name: 'Iron',
        image1: './images/IRON.WEbp',
        image2: './images/iron2.jpg',
        old_price: '1400',
        curr_price: '1200'
    },
    {
        name: 'Hanger',
        image1: './images/Hanger.png',
        image2: './images/hanger2.jpg',
        old_price: '100',
        curr_price: '80'
    },
]

let product_list = document.querySelector('#related-products')

renderProducts = (products) => {
    products.forEach(e => {
        let prod = `
            <div class="col-4 col-md-6 col-sm-12">
                <div class="product-card">
                    <div class="product-card-img">
                        <img src="${e.image1}" alt="">
                        <img src="${e.image2}" alt="">
                    </div>
                    <div class="product-card-info">
                        <div class="product-btn">
                            <a href="./product-detail.html" class="btn-flat btn-hover btn-shop-now">shop now</a>
                            <button class="btn-flat btn-hover btn-cart-add">
                                <i class='bx bxs-cart-add'></i>
                            </button>
                            <button class="btn-flat btn-hover btn-cart-add">
                                <i class='bx bxs-heart'></i>
                            </button>
                        </div>
                        <div class="product-card-name">
                            ${e.name}
                        </div>
                        <div class="product-card-price">
                            <span><del>${e.old_price}</del></span>
                            <span class="curr-price">${e.curr_price}</span>
                        </div>
                    </div>
                </div>
            </div>
        `
        product_list.insertAdjacentHTML("beforeend", prod)
    })
}

renderProducts(products)