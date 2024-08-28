import React, { useEffect, useState } from 'react'
import { FaCarSide, FaQuestion } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'


const ProductDetail = () => {
    const { id } = useParams()
    const products = useSelector(state => state.product.products)
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        console.log("Fetching product with id:", id);
        const newProduct = products.find(product => product.id === parseInt(id))
        console.log("Found product:", newProduct);
        if (newProduct) {
            setProduct(newProduct)
        } else {
            setError('Product not found')
        }
        setLoading(false)
    }, [id, products])

    if (loading) return <div>Loading...</div>
    if (error) return <div>{error}</div>
    if (!product) return <div>No product data available</div>

    return (
        <div className='container mx-auto py-8 px-4 md:px-16 lg:px-24'>
            <div className='flex flex-col md:flex-row gap-x-16'>
                <div className='md:w-1/2 py-4 shadow-md md:px-8 h-96 flex justify-center'>
                    <img src={product.image} alt={product.name} className='h-full object-cover' />
                </div>

                <div className='md:w-1/2 p-4 shadow-md md:p-16 flex flex-col items-center gap-y-2'>
                    <h2 className='text-3xl font-semibold mb-2'>{product.name}</h2>
                    <p className='text-xl font-semibold text-gray-800 mb-4'>${product.price}</p>
                    <div className='flex items-center mb-4 gap-x-2'>
                        <input id="quantity" type="number" min="1" className='border p-1 w-16' aria-label="Quantity" />
                        <button className='bg-amber-600 py-1.5 px-4 hover:bg-amber-800' aria-label="Add to Cart">Add To Cart</button>
                    </div>
                    <div className='flex flex-col gap-y-4 mt-4'>
                        <p className='flex items-center'>
                            <FaCarSide className='mr-1'/>
                            Delivery & Return
                        </p>
                        <p className='flex items-center'>
                            <FaQuestion className='mr-1'/>
                            Ask A Question
                        </p>
                    </div>
                </div>
            </div>
            <div className='mt-8'>
                <h3 className='text-xl font-bold mb-2'>Product Description</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam voluptates sed voluptatem labore sequi! Incidunt tempore, consequatur modi voluptas adipisci nostrum veniam iure laudantium iusto, minima perferendis, culpa recusandae saepe?</p>
            </div>
        </div>
    )
}

export default ProductDetail
