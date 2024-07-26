import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner';
import { Product } from '../components/Product';
import data from '../data'

export const Home = () => {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    
    async function fetchProductData(){
        setLoading(true);
        try{
            setPosts(data);
        }
        catch(error){
            console.log("Something went wrong");
            setPosts([]);
        }
        setLoading(false);
    }

    useEffect(()=>{
        fetchProductData();
    }, [])
  return (
    <div className='mt-5'>
        {
            loading ? <Spinner/> : posts.length > 0 ? 
            (
                <div className='w-11/12 flex flex-wrap justify-center ml-5'>
                    {
                        posts.map((post) => (
                            <Product key = {post.id} post = {post}/>
                        ))
                    }
                </div>
            ) : 
            <div>
                <p>No Data Found</p>
            </div>
        }
    </div>
  )
}
