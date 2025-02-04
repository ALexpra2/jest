let products = [];
let id = 0;

function resetProducts() {
    products = [];
    id = 0;
}

function addProduct(name, price) {
    if (!name || !price) {
        throw new Error('Name and price must be declared');
    }
    if (products.some(product => product.name === name)) {
        throw new Error('Product already exists');

        //Se puede poner como  
        // if (products.some(product => product.name === name)) throw new Error('Product already exists');
        //en una sola linea
    }
    // Crear el producto y añadirlo al array products
    id = products.length +1;
    const product = {
        id,  
        name,
        price
    };

    products.push(product);
    //lo ponemos para no llamar a la funcion en el test
    return products
}

function removeProduct(id) {
    const index = products.findIndex(product => product.id === id);
    //findIndex develve el indice o -1 si no ls encuentra
    if (index === -1) {
        throw new Error('Product does not exists');
    }
    products.splice(index, 1);
    //tambien podemos hacer   products = products.find(product => product.id !== id);
}

function getProducts() {
    return products;
}

function getProduct(productId) {
    const product = products.find(product => product.id === productId);
    if (!product) {
        throw new Error('Product does not exists');
    }
    return product;
}

function updateProduct(productId, name, price) {
    const product = products.find(product => product.id === productId);
    if (!product) {
        throw new Error('Product does not exists');
    }
    if (name) product.name = name;
    if (price) product.price = price;
}

module.exports = { resetProducts, addProduct, removeProduct, getProducts, getProduct, updateProduct };
