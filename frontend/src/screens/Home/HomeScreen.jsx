import React from 'react';
import Video from '../../components/video/video';
import CardMenu from '../../components/CardMenuSet/CardMenu';
import Meta from '../../components/Helmet/Meta';
import Carousel from './carousel';
import services4 from "../../images/services4.png";
import "../../components/services.css"

const HomeScreen = () => {

    return (
        <>
        
            <Meta />
            {/* <Video/> */}
            <div className='container'><Carousel/></div>
            
            <CardMenu />

            <div style={{ marginTop: "20px" }}></div>
          <div className="h-1/2 bg-evergreen bg-grey mt-3 p-9">
            <div
              className="flex justify-center flex-col p-9 rounded"
              style={{ backgroundColor: "rgba(216, 245, 222, 1)" }}
            >
              <h1 className="text-4xl mt-2 font-bold  m-auto text-center">
                Our Services
              </h1>
              <p className="mt-3 text-lg font-semibold text-center">
                Following are the services that KisankeSaath provides for
                Farmers
              </p>

              <div className="container1">
              <img src={services4} className="image" alt="" />
              </div>
            </div>
          </div>

        </>
    )
}

export default HomeScreen;
