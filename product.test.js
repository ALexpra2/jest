const { resetProducts, addProduct, removeProduct, getProducts, getProduct, updateProduct } = require('./product');

beforeEach(() => {
    resetProducts();
});

//! ADDProduct

describe('Adding Products', () => {
    it('should add a product', () => {
        addProduct('apple', 2);
        expect(getProducts()).toContainEqual({ id: 1, name: 'apple', price: 2 });
    });
    
    //si pongo return en la función no me hace falta lanzar addproduct antes
    it('should add a product', () => {
        expect(addProduct('apple', 2)).toContainEqual({ id: 1, name: 'apple', price: 2 });
    });
    
    //si el nombre ya existe no me deja crear el producto
    it('should fail when adding a repeated product', () => {
        addProduct('apple', 2);
        expect(() => addProduct('apple', 2)).toThrow('Product already exists');
    });

    it('should fail when adding a product with no name', () => {
        expect(() => addProduct(undefined, 2)).toThrow('Name and price must be declared');
    });

    it('should fail when adding a product with no price', () => {
        expect(() => addProduct('apple')).toThrow('Name and price must be declared');
    });
});

beforeEach(() => {
    resetProducts();
});

//! renoveProduct


describe('Removing Products', () => {
    //test producto eliminado correctamente
    it('should remove a product', () => {
        addProduct('apple', 2);
        removeProduct(1);
        expect(getProducts()).toEqual([]);
    });

    //Intentar eliminar un producto que no existe
    it('Should throw an error if the product does not exists', () =>{
        expect(() => removeProduct(99)).toThrow('Product does not exist')
    })
});

beforeEach(() => {
    resetProducts();
});

//! getProduct

describe('Getting a single product', () => {
    it('should get a product', () => {
        addProduct('apple', 2);
        expect(getProduct(1)).toEqual({ id: 1, name: 'apple', price: 2 });
    });
});

beforeEach(() => {
    resetProducts();
});

//! updateProduct

describe('Updating Products', () => {

    //test producto actualizado correctamente
    it('should update a product', () => {
        addProduct('apple', 2);
        updateProduct(1, 'banana', 3);
        expect(getProduct(1)).toEqual({ id: 1, name: 'banana', price: 3});
    });

    it('should fail when updating a product that does not exists', () => {
        expect(() => updateProduct(2, 'pear', 4)).toThrow('Product does not exists');
    });

    it('should only update the price', () => {
        addProduct('apple', 2);
        updateProduct(1, undefined, 3);
        expect(getProduct(1)).toEqual({ id: 1, name: 'apple', price: 3});
    });

    it('should only update the name', () => {
        addProduct('apple', 2);
        updateProduct(1, 'banana');
        expect(getProduct(1)).toEqual({ id: 1, name: 'banana', price: 2 });
    });
});
