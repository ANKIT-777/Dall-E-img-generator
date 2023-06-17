import React,{useState, useEffect}from 'react';

import { Loader , FormField , Cards } from '../componenets';

const RenderCard = ({data,title}) =>{
  if(data?.length>0) {
    return data.map((post) => <Card key = {post._id} {...post} />)
    }
    return (
      <h2 className="mt-5 font-bold text-[#6469ff] text-xl uppercase">
        {title}
      </h2>
    )
}
const Home = () => {
  const [loading, setloading] = useState(false);
  const [allPost, setAllpost] = useState(null);
  const [searchText, setSearchText] = useState('');
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
      {searchText && (
        <h2 className = "font-medium text-[#666e75] text-xl mb-3">
          Showing results from <span className = " text-[#222328]">
            {searchText}</span>


        </h2>
      )}
      <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-col-2 grid-cols-1 gap-3 ">
        {searchText ? ( 
          <RenderCards 
          data = {[]}
          title = "No Results Found"
          />
        )
        : (
          <RenderCard 
          data = {[]}
          title= "No posts found" 
          />
        )}
        

      </div>

      </>)}
      </div>

    </section>

  )
}

export default Home