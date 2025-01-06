import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () =>{
    return(
        <>
        <div style={{height:'250px' ,marginTop:'100px'}} className='flex justify-between mt-5 w-full bg-violet-600 text-white p-4'>
            <div  style={{width:'400px'}} className='intro'>
                <h5 className='text-xl font-bold'>E Cart</h5>
                <p>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors. </p>
                <p>Code licensed MIT, docs CC BY 3.0.</p>
                <p>current v5.3.2</p>


            </div>
             {/* links */}
             <div className='flex flex-col'>
                    <h5 className='text-xl font-bold'>Links</h5>
                    <Link to={'/'} style={{textDecoration:'none ',color:'white'}}>Landing page</Link>
                    <Link to={'/home'} style={{textDecoration:'none ',color:'white'}}>Home page</Link>
                    <Link to={'/history'} style={{textDecoration:'none ',color:'white'}}>Watch History page</Link>

                </div>

            <div className='flex flex-col'>
                    <h5 className='text-xl font-bold'>Guides</h5>
                    <a href="https://react.dev/" style={{textDecoration:'none ',color:'white'}} target='_blank'>React </a>
                    <a href="https://react-bootstrap.netlify.app/" style={{textDecoration:'none ',color:'white'}} target='_blank'>React bootsrap</a>
                    <a href="https://www.npmjs.com/package/react-router-dom" style={{textDecoration:'none ',color:'white'}} target='_blank'>React router</a>

            </div>
                {/* contacts */}
                <div className='flex flex-col'>
                    <h5 className='text-xl font-bold'>Contacts Us</h5>
                    <div  className='flex mt-2'>
                        <input type="text" placeholder='enter your email' className='rounded p-1'/>
                        <button className='btn btn-info'><i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                    <div className='flex justify-between mt-3'>

                        <a href="https://en.wikipedia.org/wiki/Twitter" style= {{textDecoration: "none",color: "white"}} target='_blank' >
                         <i i class="fa-brands fa-twitter"></i></a>
                        <a href="https://www.instagram.com/" style= {{textDecoration: "none",color: "white"}} target='_blank' >
                         <i i class="fa-brands fa-instagram"></i></a>
                        <a href="https://www.facebook.com/" style= {{textDecoration: "none",color: "white"}} target='_blank' >
                         <i i class="fa-brands fa-facebook"></i></a>
                        <a href="https://www.linkedin.com/feed/" style= {{textDecoration: "none",color: "white"}} target='_blank' >
                         <i i class="fa-brands fa-linkedin"></i></a>
                        <a href="https://github.com/" style= {{textDecoration: "none",color: "white"}} target='_blank' >
                         <i i class="fa-brands fa-github"></i></a>
                        <a href="https://github.com/" style= {{textDecoration: "none",color: "white"}} target='_blank' >
                         <i i class="fa-solid fa-phone"></i></a>
                    </div>
            </div>
        </div>  
        <p className='text-center mt-3'>Copyright &copy; May 2024 Batch,Media player. Built with React</p>
       
            
     </>

    )
}


export default Footer