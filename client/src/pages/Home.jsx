import React,{useState, useEffect}from 'react';
import { Loader , FormField , Cards } from '../componenets';


const Home = () => {
  const [loading,setLoading ] = useState(false);
  const [allPosts,setAllPosts] = useState([nul]);

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">
          The Community showcase
        </h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">
          Browse the Community of the University  of Texas at Austin
        </p>
      </div>

      <div className="mt-16">
        <FormField/> 
      
      </div>

      <div className="mt-10">
        {loading ? (
          <div className="flex justify-center items-center">
            <Loader/>
          </div>
        )
      : ( <>
      </>)}
      </div>

    </section>
  )
}

export default Home