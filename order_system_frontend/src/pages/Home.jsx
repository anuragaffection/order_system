import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import order_system from '../assets/order_system.jpg'

function Home() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get('http://localhost:3000/product/all', {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true
            })
            // console.log(response.data.data)
            setProducts(response.data.data)
        }
        fetchProducts();
    }, [])


    const container = `bg-gray-900 text-gray-200 p-4`;
    const wrapper = `flex flex-col md:flex-row md:flex-wrap md:items-center md:justify-center gap-7 `;
    const productWrapper = `flex flex-col gap-6 bg-gray-950 p-9 rounded-lg`
    const imageWrapper = `border border-gray-700 flex items-center gap-2`;
    const imageStyle = `object-cover h-48`;
    const titleStyle = `text-yellow-400 text-2xl font-bold`;
    const priceStyle = 'font-semibold'
    const btnWrapper = 'flex justify-between text-gray-900 gap-6'
    const btnStyle = ` bg-gradient-to-r from-cyan-500 to-blue-500 text-lg font-semibold flex justify-center items-center  cursor-pointer hover:text-gray-950 p-2 rounded-md`;


    return (
        <>
            <div className={container}>
                <div className={wrapper}>
                    {
                        products.map((product) => {
                            return (
                                <div className={productWrapper} key={product._id} >
                                    <div className={imageWrapper}>
                                        <img
                                            src={(product.imageUrl) ? product.imageUrl : order_system}
                                            className={imageStyle}
                                            alt="Image"
                                        />
                                    </div>
                                    <div className={titleStyle}>{product.title}</div>
                                    <div className={priceStyle}>at INR {product.basePrice} </div>
                                    <div className={btnWrapper}>
                                        <button className={btnStyle}>
                                            <Link
                                                to={"/viewproduct"}
                                            >
                                                More Details
                                            </Link>
                                        </button>
                                        <button className={btnStyle}>
                                            Add to Cart
                                        </button>

                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div >
        </>
    )
}

export default Home



{/* <div> Discount {product.discountPercentage}% </div>
                                    <div className={dateAdminWrapper}>
                                        <div> {new Date(product.createdAt).toLocaleDateString()}</div>
                                        <div>Seller Name</div>
                                    </div> */}

{/* <div>
                                        {
                                            product.description
                                        }
                                    </div> */}