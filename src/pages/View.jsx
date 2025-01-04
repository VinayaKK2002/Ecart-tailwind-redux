import React from 'react'
import Header from '../components/Header'

const View = () =>{
    return(
        <>
        <Header/>
        <div className='flex flex-col mx-5'>
            <div className='grid grid-cols-2 items-center h-screen'>
                <img width={'100%'} height={'200px'} src="https://m.media-amazon.com/images/I/41JaRhOS3CL.jpg" alt="" />
                 <div>
                     <h3 className='font-bold'>PID:id</h3>
                     <h1 className='text-5xl font-bold'>Product Name</h1>
                     <h4 className='font-bold text-red-600 text-2xl'>$ 250</h4>
                     <h4>Brand : brand</h4>
                     <h4>Category : Category</h4>
                     <p>
                         <span className='font-bold'>Discription </span>:Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit quasi adipisci magnam tempore in repellendus voluptatem expedita, vitae ipsum labore deleniti ipsam excepturi et aliquam qui assumenda autem accusantium officiis!
                         <div className='flex justify-between mt-5'>
                             <button className='bg-blue-600 text-white p-2 rounded'>add to wishlist</button>
                             <button className='bg-green-600 text-white p-2 rounded'>add to cart</button>

                         </div>
                     </p>
                 </div>
            </div>
        </div>

        
        
        </>

    )
}


export default View