import React from "react";
import GoogleMapReact from 'google-map-react';
import { GrLocation } from "react-icons/gr";
import { GoLocation } from "react-icons/go";
import { AiFillStar } from "react-icons/ai";
import Filter from '../../Components/Filter'
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
        <div className="relative" style={{ height: '100vh', width: '100%' }}>
            <div className='absolute z-10 top-10 w-full left-2  items-center mt-1'>
                <div className='flex justify-around items-center mt-5'>
                    <div className='flex justify-between items-center mt-1'>
                        <p className='text-sm text-black flex items-center border bg-white border-gray-300 rounded-l-md p-2'><GrLocation /> Aktueller Standort</p>
                        <Filter />
                    </div>
                    <div className='bg-black p-3 rounded-lg'>
                        <img className='' src={filter_alt} />
                    </div>
                </div>
            </div>
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
            <div className="absolute bottom-20  rounded-xl right-8">
                <Link to='/startsite/cars'>
                    <div className="bg-white p-1 rounded-xl shadow-xl ">
                        <img src={mapcar} />
                        <div className='mx-4 flex items-end justify-between'>
                            <div>
                                <p className='mt-1 font-black text-sm font-[900]'>Autoname</p>
                                <p className='mt-1 text-[#838D95] text-sm'>Model 3</p>
                                <p className='mt-1 text-[#7D7AFF] font-[600] text-sm'>30 € <span className='text-[#838D95] font-[400]'>für 2 std</span>  </p>
                            </div>
                            <span className='bg-[#FFC53D] text-white text-sm flex items-center rounded-lg p-1'><AiFillStar /> 5.0</span>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}