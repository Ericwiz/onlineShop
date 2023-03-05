export class Products{
    id: number;
    title: string;
    description: string;
    quantity: number
    price: number;
    rating: number;
    category: string
    images: []
    thumbnail: string
    image: string
    total: number

    constructor () {
        this.id = 0
        this.title = ''
        this.description = ''
        this.quantity = 3
        this.price = 0
        this.rating = 0
        this.category = ''
        this.images = []
        this.thumbnail = ''
        this.image = ''
        this.total = 0
    }
}

export class carts{
    id!: number
    products!: Products[]
    totalProduct!: number
    totalQuantity!: number
}

export interface addCart{
    userId: number,
    products: [
        {
            id: number,
            quantity: number
        }
    ],
    total: number,
    discountedTotal: number,
    totalProducts: number,
    totalQuantity: number
}

export class ProductList {
    products!: Products[]
    carts!: carts[]
    total!: number
}