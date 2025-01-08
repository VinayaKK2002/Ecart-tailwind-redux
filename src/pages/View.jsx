import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import { addToWishlist } from '../redux/slice/wishlistSlice'

const View = () =>{
  const dispatch=useDispatch()
  const userWishlist=useSelector(state=>state.wishlistReducer)
  const [product,setProduct]=useState({})
  
    const {id} =useParams()
    console.log(id);
    // const {allProducts}=useSelector(state=>state.productReducer)
    // console.log(allProducts);

    useEffect(()=>{
      if (sessionStorage.getItem("allproducts")) {
        const allProducts =JSON.parse(sessionStorage.getItem("allproducts"))
        console.log(allProducts.find(item=>item.id==id));
        setProduct(allProducts.find(item=>item.id==id))
        
      }
      // allProducts.find(item=>item.id==id)
      console.log(product);


      
    },[])

    const handleWishlist=()=>{
      const existingProduct=userWishlist?.find(item=>item?.id==id)
      if (existingProduct) {
        alert("product already in your wishlist")
        
      }else{
        dispatch(addToWishlist(product))
      }
    }

    return(
        <>
        <Header/>
        <div className='flex flex-col mx-5'>
            <div className='grid grid-cols-2 items-center h-screen'>
                <div>
                  <img width={'100%'} height={'200px'} src={product?.thumbnail} alt="" />
                  <div className='flex justify-between mt-5'>
                               <button onClick={handleWishlist} className='bg-blue-600 text-white p-2 rounded'>add to wishlist</button>
                               <button className='bg-green-600 text-white p-2 rounded'>add to cart</button>
  
                  </div>
                </div>

                 <div>
                     <h3 className='font-bold'>PID:{product?.id}</h3>
                     <h1 className='text-5xl font-bold'>{product?.title}</h1>
                     <h4 className='font-bold text-red-600 text-2xl'>$ {`${product?.price}`}</h4>
                     <h4>Brand : {product?.brand}</h4>
                     <h4>Category : {product?.category}</h4>
                     <p>
                         <span className='font-bold'>Discription </span>:{product?.description}
                        
                     </p>
                     <h3 className='font-bold'>Client Review</h3>
                     {
                       product?.reviews?.length>0?
                       product?.reviews?.map(item=>(
                         <div key={item.date} className='shadow-border p-2 mb-2'>
                           <h5>
                             <span className='font-bold'>{item?.reviewerName}</span>: <span>{item?.comment}</span>
                           </h5>
                           <p>Rating :{item?.rating} <i className='fa-solid fa-star text-yellow-400'></i> </p>

                         </div>

                       ))

                       
                       :
                       <div>No review yet!!!</div>
                     }
                 </div>
            </div>
        </div>

        
        
        </>

    )
}


export default View