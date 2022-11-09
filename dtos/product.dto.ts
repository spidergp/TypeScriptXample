class ProductDTO {
    id: Number;
    name: any;
    description: any;
    image: any;
    price: any;
    stock: any;
	constructor( id:Number, name:String, description:String, price:Number, stock:Number ) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.price = price;
		if (stock) this.stock = stock;
	}
}

export default ProductDTO;
