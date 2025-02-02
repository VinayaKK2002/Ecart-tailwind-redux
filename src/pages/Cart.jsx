import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import { incrementQuantity, removeCartItem,decrementQuantity, emptyCart } from '../redux/slice/cartSlice'

const Cart = () =>{
    const navigate=useNavigate()
    const [cartTotal,setCartTotal]=useState(0)

    const userCart=useSelector(state=>state.cartReducer)
    const dispatch=useDispatch()

    useEffect(()=>{
        if (userCart?.length>0) {
            setCartTotal(userCart?.map((item)=>item.totalPrice).reduce((a1,a2)=>a1+a2))
            
        }
    },[userCart])

    const handleDecrementQuantity=(product)=>{
        if (product?.quantity>1) {
            dispatch(decrementQuantity(product?.id))
            
        }else{
            dispatch(removeCartItem(product?.id))

        }

    }

    const checkout=()=>{
        dispatch(emptyCart())
        alert("order confirmed... thank you for purchase")
        //redirect to home
        navigate('/')
    }
    return(
        <>
        <Header/>
        <div style={{paddingTop:'100px'}} className='px-5 '>
           {
               userCart?.length>0?
                <div>
                <h1 className='text-5xl font-bold text-blue-600'>cart summery</h1>
                <div className='grid grid-cols-3 gap-4 mt-5'>
                    <div className='col-span-2 border rounded p-5 shadow'>
                        <table className='table-auto w-full'>
                            <thead>
                                <tr>
                                    <td className='font-semibold'>#</td>
                                    <td className='font-semibold'>Name</td>
                                    <td className='font-semibold'>Image</td>
                                    <td className='font-semibold'>Quantity</td>
                                    <td className='font-semibold'>Price</td>
                                    <td className='font-semibold'>...</td>
                                </tr>
                            </thead>
                            <tbody>
                               {
                                   userCart?.map((product,index)=>(
                                    <tr>
                                    <td>{index+1}</td>
                                    <td>{product?.title}</td>
                                    <td><img width={'50px'} height={'70px'} src={product?.thumbnail} alt="" /></td>
                                    <td>
                                        <div className='flex'>
                                            <button onClick={()=>handleDecrementQuantity(product)} className='font-bold'>-</button>
                                            <input style={{width:'40px'}} type="text" className='border p-1 rounded mx-1 ' value={product?.quantity} readOnly />
                                            <button onClick={()=>dispatch(incrementQuantity(product?.id))} className='font-bold'>+</button>
                                        </div>
                                    </td>
                                    <td>$ {product?.totalPrice}</td>
                                    <td><button onClick={()=>dispatch(removeCartItem(product?.id))} className='text-red-600'><i className='fa-solid fa-trash '></i></button></td>
                                </tr>

                                   ))
                               }
                            </tbody>

                        </table>
                        <div className='float-right mt-5 '>
                            <button onClick={()=>dispatch(emptyCart())} className='bg-red-600 rounded p-2 text-white'>Empty cart</button>
                            <Link to={'/'} className='bg-blue-600 ms-3 rounded p-2 text-white'> shop more....</Link>

                        </div>

                    </div>
                   
                   
                    <div className='col-span-1'>
                    <div className='border rounded shadow p-5'>
                        <h2 className='text-2xl font-bold my-4'>Total amount: <span className='text-red-600'>${cartTotal}</span></h2>
                        <hr />
                        <button onClick={checkout} className='bg-green-600 rounded p-2 text-white w-full mt-4'>check out</button>
                    </div>
                    

                </div>
                
                </div>
               
            </div>
             : 
             <div className='flex justify-center item-center h-screen'>
                <img src="https://media3.giphy.com/media/GXYlkqTQaY6okgGEhn/giphy.gif?cid=6c09b952sra7x9s3fqb1b7tv7ymo5s7t46ly4tlrd4jxybup&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s" alt="" />
                <h1 className='text-3xl text-red-600'>your cart is empty</h1>
            </div>
           }
        </div>
        
        
        
        
        </>

    )
}


export default Cart