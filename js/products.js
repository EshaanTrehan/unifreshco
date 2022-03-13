let products = [
    {
        name: 'All in One Box',
        image1: './images/fullkitout.webp',
        image2: './images/internationalkit.webp',
        old_price: '800',
        curr_price: '700'
    },
    {
        name: 'Premium Box',
        image1: './images/ultimatekit.webp',
        image2: './images/internationalkit.webp',
        old_price: '1000',
        curr_price: '500'
    },
    {
        name: 'Bedroom Pack',
        image1: './images/bedroomkit.webp',
        image2: './images/bedroom.webp',
        old_price: '1200',
        curr_price: '800'
    },
    {
        name: 'Utensils Pack',
        image1: './images/utensils.webp',
        image2: './images/utensils2.jpg',
        old_price: '1800',
        curr_price: '1500'
    },
    {
        name: 'Lifestyle Box',
        image1: './images/pillow.webp',
        image2:'./images/bedsheet.webp',
        old_price: '2200',
        curr_price: '1800'
    },
    {
        name: 'Kitchen Box',
        image1: './images/kitchenkit.webp',
        image2: './images/kitchenkit2.webp',
        old_price: '600',
        curr_price: '550'
    },
    {
        name: 'Toiletries Box',
        image1: './images/bathroomkit.webp',
        image2: './images/bathroomkit2.webp',
        old_price: '600',
        curr_price: '550'
    },
    {
        name: 'Cleaning Pack',
        image1: './images/cleaning.webp',
        image2: './images/cleaning1.webp',
        old_price: '600',
        curr_price: '550'
    },
    {
        name: 'Snack Pack',
        image1: './images/snack2.jpg',
        image2: './images/snack.jpg',
        old_price: '600',
        curr_price: '550'
    },
    {
        name: 'Steam Iron',
        image1: './images/iron.webp',
        image2: './images/iron2.webp',
        old_price: '600',
        curr_price: '550'
    },
    {
        name: 'Freezer Locker',
        image1: './images/freezer.webp',
        image2: './images/freezer2.jpg',
        old_price: '600',
        curr_price: '550'
    },
    {
        name: 'Laundry Bag',
        image1: './images/laundry.webp',
        image2: './images/laundry2.webp',
        old_price: '600',
        curr_price: '550'
    },
]

let product_list = document.querySelector('#products')

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

let filter_col = document.querySelector('#filter-col')

document.querySelector('#filter-toggle').addEventListener('click', () => filter_col.classList.toggle('active'))

document.querySelector('#filter-close').addEventListener('click', () => filter_col.classList.toggle('active'))