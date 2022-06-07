import { Product } from "./product.model";
export class CartItem extends Product{
    // private product : Product;
    private quantity : number;

    constructor (product? : Product, quantity? : number) {
        super(product?.getProductId(), product?.getProductName(), product?.getProductDes(), product?.getProductPrice());
        quantity? this.quantity = quantity :  this.quantity = 0;
    }

    // public setProduct (product : Product) {
    //     this.product
    // }
}