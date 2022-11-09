import Container from "../dal/repositories/base.rep.js";
import { Request, Response } from 'express';
import Producto from '../dal/models/producto';

class ProductoService extends Container{
    constructor() {
		super(Producto);
	}
    
    async getProducts()  {

        const listProducts = await Producto.findAll()

    return listProducts;
    }
}

const woProductoSVC = new ProductoService();

export default woProductoSVC;