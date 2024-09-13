import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from '../component/Product';
import './Products.css';

interface Products {
    id: number;
    name: string;
    description: string;
    price: number;
    image_url: string;
    createdAt: string;
}

const Products = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [products, setProducts] = useState<Products[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Products[]>([]);
    const [filterCriteria, setFilterCriteria] = useState({
        name: '',
        minPrice: '',
        maxPrice: ''
    });

    const loadProducts = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/products');
            setProducts(response.data);
            setFilteredProducts(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        loadProducts();
    }, []);

    const toggleFilter = () => {
        setIsFilterOpen(!isFilterOpen);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilterCriteria({
            ...filterCriteria,
            [e.target.name]: e.target.value,
        });
    };

    const applyFilters = () => {
        let filtered = products;

        if (filterCriteria.name) {
            filtered = filtered.filter(product =>
                product.name.toLowerCase().includes(filterCriteria.name.toLowerCase())
            );
        }

        if (filterCriteria.minPrice) {
            filtered = filtered.filter(product =>
                product.price >= parseFloat(filterCriteria.minPrice)
            );
        }

        if (filterCriteria.maxPrice) {
            filtered = filtered.filter(product =>
                product.price <= parseFloat(filterCriteria.maxPrice)
            );
        }

        setFilteredProducts(filtered);
    };

    useEffect(() => {
        applyFilters();
    }, [filterCriteria]);

    return (
        <div className='products'>
            <div className={isFilterOpen ? 'open-filter open' : 'open-filter'} onClick={toggleFilter}>
                <span>&laquo;</span>
            </div>
            <div className={isFilterOpen ? 'products-filter open' : 'products-filter'}>
                <div className="filter-section">
                    <input
                        type="text"
                        name="name"
                        placeholder="Filter by name"
                        value={filterCriteria.name}
                        onChange={handleInputChange}
                    />
                    <div className="price-filter">
                        <input
                            type="number"
                            name="minPrice"
                            placeholder="Min price"
                            value={filterCriteria.minPrice}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            name="maxPrice"
                            placeholder="Max price"
                            value={filterCriteria.maxPrice}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
            </div>
            <div className={isFilterOpen ? 'products-container open' : 'products-container'}>
                {filteredProducts.map((product) => (
                    <Product key={product.id} id={product.id} name={product.name} description={product.description} price={product.price} img={product.image_url} />
                ))}
            </div>
        </div>
    );
}

export default Products;
