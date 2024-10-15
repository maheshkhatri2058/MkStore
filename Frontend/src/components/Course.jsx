import React from 'react';
import List2 from '../list2.json';
import Navbar from './Navbar';
import Card from './card';
import Footer from './footer';

const Course = () => {
  return (
    <>
  <Navbar/>
  <div className="d-flex flex-column">
    <h2 className='text text-center m-3 p-3'>learn anything at anytime</h2>
    <p className='p-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac ipsum eget nulla elementum interdum ac id turpis. Donec vel est nec velit convallis pharetra. Sed viverra, felis eu consectetur mollis, mauris purus sodales nunc, id elementum ligula nisi vel justo. Sed sagittis, erat vel viverra gravida, dui velit ornare est, in vestibulum felis velit in dolor. Nulla facilisi. Sed quis turpis</p>
  </div>
  <div className="d-flex flex m-4">
{List2.map((item,index)=>(
      <Card title={item.title} price={item.price} image={item.Image}/>
      ))}
    </div>
  <Footer/>
    </>
  )
}

export default Course
