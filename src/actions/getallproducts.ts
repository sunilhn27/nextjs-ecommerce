"use server"

export async function fetchProducts() {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();
    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }
    return products;
};
