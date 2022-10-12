import React from "react";
import GoogleMapReact from 'google-map-react';
import { GrLocation } from "react-icons/gr";
import { AiFillStar } from "react-icons/ai";
import { Filter } from '../../Components'
import filter_alt from '../../assets/filter_alt.png';
import mapcar from '../../assets/mapcar.png';
import { Link } from "react-router-dom";


const AnyReactComponent = ({ text }) => <div>{text}</div>;


// AIzaSyAd0LxzOi5motUV6ZJNigzBGH_D_6Mic

// AIzaSyBTNNAmliJk6iXrSGYbbED_OXun6PSAPU8

export default function SimpleMap() {
    const defaultProps = {
        center: {
            lat: 50.543336,
            lng: 7.120329
        },
        zoom: 15,

    };

    return (
        // Important! Always set the container height explicitly
        <div className="relative "  style={{overflowX : 'hidden'}}>
            <div className='absolute z-10 top-5 w-full left-2 mt-1'>
                <div className='flex justify-around items-center mt-5'>
                    <div className='flex justify-between items-center'>
                        <p className='text-[14px] font-[600] text-[#636B75] flex items-center bg-white rounded-l-md p-2'><GrLocation /> Aktueller Standort</p>
                        <Filter />
                    </div>
                    <div className='bg-black p-2 rounded-lg '>
                        <img className='w-6' src={filter_alt} />
                    </div>
                </div>
            </div>
            <div style={{ height: '93vh', width: '100%' }}>

                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyBTNNAmliJk6iXrSGYbbED_OXun6PSAPU8" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                    options={{ disableDefaultUI: true, zoomControl: false }}

                >

                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="Auto"
                    />
                </GoogleMapReact>
            </div>
            <div className="absolute bottom-32 rounded-xl right-12">
                <Link to='/startsite/cars'>
                    <div className="bg-white p-1 rounded-xl shadow-xl ">
                        <img src={mapcar} />
                        <div className='mx-4 flex items-end justify-between'>
                            <div>
                                <p className='mt-1 font-black text-[20px] font-[600]'>Autoname</p>
                                <p className='mt-1 text-[#838D95] text-[12px] font-[400]'>Model 3</p>
                                <p className='mt-1 text-[#7D7AFF] font-[600] text-[18px]'>30 € <span className='text-[#838D95] text-[12px] font-[400]'>für 2 std</span>  </p>
                            </div>
                            <span className='bg-[#FFC53D] text-white text-sm flex items-center rounded-lg py-1 px-2'><AiFillStar /> 5.0</span>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}