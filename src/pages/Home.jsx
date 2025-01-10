import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { fetchProducts } from '../redux/slice/proSlice'

const Home = () =>{
    const dispatch=useDispatch()

    const {allProducts,loading,errorMsg}=useSelector(state=>state.productReducer)
    // console.log(allProducts,loading,errorMsg);
    const [currentPage,setCurrentPage]=useState(1)
    const productPerPage=8
    const totalPage=Math.ceil(allProducts?.length/productPerPage)
    const currentPageProductLastIndex=currentPage * productPerPage
    const currentPageProductFirstIndex=currentPageProductLastIndex- productPerPage
    const visibleAllProduct=allProducts?.slice(currentPageProductFirstIndex,currentPageProductLastIndex)

    useEffect(()=>{
        dispatch(fetchProducts())

    },[])

    
    return(
        <>
        <Header insideHome={true}/>
        <div style={{paddingTop:'100px'}} className='container px-4 mx-auto'>
            {
                loading ?
                <div className='flex justify-center item-center my-5 text-lg'>
                    <img width={'80px'} height={'80px'}src="https://res.cloudinary.com/bytesizedpieces/image/upload/v1656084931/article/a-how-to-guide-on-making-an-animated-loading-image-for-a-website/animated_loader_gif_n6b5x0.gif" alt="" />
                    Loading...

                </div>
                :
                <div className='grid grid-cols-4 gap-4'>
                   
                    
                    {
                        
                     allProducts?.length>0 ?
                     allProducts?.map(product=>(
                        <div key={product?.id} className='rounded border p-2 shadow'>
                        <img width={'100%'} height={'100%'} src={product?.thumbnail} alt="" />
                        <div className='text-center'>
                            <h3 className='text-xl font-bold'>{product?.title}</h3>
                            <Link to={`/${product?.id}/view`} className='bg-violet-600 rounded p-1 mt-3 text-white inline-block '> View more....</Link>
                        </div>
                    </div>


                    ))
                    :
                    <div className='flex justify-center item-center my-5 text-lg font-bold text-red-600'>
                        product not found

                    </div>
                    }

                   
                    
                </div>
            }

        </div>
        </>
    )
}


export default Home