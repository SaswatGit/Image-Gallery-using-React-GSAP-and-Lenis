import React from 'react';
import '../css/Gallery.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  document.title = "ImageGal | Gallery";

  function openImage(event) {
    const target = event.currentTarget;
    target.classList.toggle("open-img");
  }

  
  return (
    <>
      <div id="gallery" >
        <div className="image" onClick={openImage} >
          <img src='https://cdn.pixabay.com/photo/2015/07/31/06/50/forest-868715_640.jpg' alt='img' />
        </div>
        <div className="image" onClick={openImage} >
          <img src='https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg' alt='img' />
        </div>
        <div className="image" onClick={openImage} >
          <img src='https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_640.jpg' alt='img' />
        </div>
        <div className="image" onClick={openImage} >
          <img src='https://cdn.pixabay.com/photo/2018/02/13/23/41/nature-3151869_640.jpg' alt='img' />
        </div>
        <div className="image" onClick={openImage} >
          <img src='https://cdn.pixabay.com/photo/2015/07/05/10/18/tree-832079_640.jpg' alt='img' />
        </div>
        <div className="image" onClick={openImage} >
          <img src='https://cdn.pixabay.com/photo/2018/11/17/22/15/trees-3822149_640.jpg' alt='img' />
        </div>
        <div className="image" onClick={openImage} >
          <img src='https://cdn.pixabay.com/photo/2012/08/06/00/53/bridge-53769_640.jpg' alt='img' />
        </div>
        <div className="image" onClick={openImage} >
          <img src='https://cdn.pixabay.com/photo/2013/07/18/10/56/railroad-163518_640.jpg' alt='img' />
        </div>
        <div className="image" onClick={openImage} >
          <img src='https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600' alt='img' />
        </div>
        <div className="image" onClick={openImage} >
          <img src='https://images.pexels.com/photos/234272/pexels-photo-234272.jpeg?auto=compress&cs=tinysrgb&w=600' alt='img' />
        </div>
        <div className="image" onClick={openImage} >
          <img src='https://images.pexels.com/photos/1276518/pexels-photo-1276518.jpeg?auto=compress&cs=tinysrgb&w=600' alt='img' />
        </div>
        <div className="image" onClick={openImage} >
          <img src='https://images.pexels.com/photos/534164/pexels-photo-534164.jpeg?auto=compress&cs=tinysrgb&w=600' alt='img' />
        </div>
      </div>
    </>
  )
}

export default Gallery;