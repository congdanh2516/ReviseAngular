export class Product {
    private productId : string;
    private productName : string;
    private productDes : string
    private productPrice : number;

    constructor (productId? : string, productName? : string, productDes? : string, productPrice? : number) {
        productId ? this.productId = productId : this.productId = "";
        productName ? this.productName = productName : this.productName = "";
        productDes ? this.productDes = productDes : this.productDes = "";
        productPrice ? this.productPrice = productPrice : this.productPrice = 0;

        // if (product) {
        //     this.productId = product.productId;
        //     this.productName = product.productName;
        //     this.productDes = product.productDes;
        //     this.productPrice = product.productPrice;
        // }
    }

    public getProductId () : string {
        return this.productId;
    }

    public getProductName () : string {
        return this.productName;
    }

    public getProductDes () : string {
        return this.productDes;
    }

    public getProductPrice () : number {
        return this.productPrice;
    }
}