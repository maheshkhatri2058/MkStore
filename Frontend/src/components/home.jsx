import React from 'react';
import List from '../list.json';
import Banner from './Banner';
import Card from './card';
import Footer from './footer';
import Navbar from './Navbar';
const home = () => {
  return (
    <>
   <Navbar/>
    <Banner/>
    <div className="d-flex  flex-wrap m-3">
   {List.map((item,index)=>(
      <Card title={item.Name} price={item.Price} image={item.Image} />
    
    ))}
    </div>
    <Footer/>
    
    </>
  )
}

export default home
