const { resetProducts, addProduct, removeProduct, getProducts, getProduct, updateProduct } = require('./product');

beforeEach(() => {
    resetProducts();
});

describe('Adding Products', () => {
    it('should add a product', () => {
        addProduct('apple', 2);
        expect(getProducts()).toContainEqual({ id: 1, name: 'apple', price: 2 });
    });

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

describe('Removing Products', () => {
    it('should remove a product', () => {
        addProduct('apple', 2);
        removeProduct(1);
        expect(getProducts()).toEqual([]);
    });
});

beforeEach(() => {
    resetProducts();
});

describe('Getting a single product', () => {
    it('should get a product', () => {
        addProduct('apple', 2);
        expect(getProduct(1)).toEqual({ id: 1, name: 'apple', price: 2 });
    });
});

beforeEach(() => {
    resetProducts();
});

describe('Updating Products', () => {
    it('should update a product', () => {
        addProduct('apple', 2);
        updateProduct(1, 'banana', 3);
        expect(getProduct(1)).toEqual({ id: 1, name: 'banana', price: 3});
    });

    it('should fail when updating a product that does not exist', () => {
        expect(() => updateProduct(2, 'pear', 4)).toThrow('Product does not exist');
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
