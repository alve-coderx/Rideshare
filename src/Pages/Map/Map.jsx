import React from "react";
import GoogleMapReact from 'google-map-react';
import { GrLocation } from "react-icons/gr";
import { Filter } from '../../Components';
import filter_alt from '../../assets/filter_alt.png';
import MapCard from "../../Components/MapCard";


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
        <div className="relative " style={{ overflowX: 'hidden' }}>
            <div className='absolute z-10 top-5 w-full left-2 mt-1'>
                <div className='flex justify-around items-center mt-5 lg:mx-32 md:mx-24'>
                    <div className='bg-white flex justify-between lg:w-[60rem] md:w-[40rem] w-64 rounded-lg shadow-2xl'>
                        <p className='text-[14px] font-[600] text-[#636B75] flex items-center bg-white p-2 rounded-lg'><GrLocation /> Aktueller Standort</p>
                        <Filter />
                    </div>
                    <div className='bg-black p-2 rounded-lg '>
                        <img className='w-8' src={filter_alt} />
                    </div>
                </div>
            </div>
            <div style={{ height: '100vh', width: '100%' }}>

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
            <div className="absolute bottom-[2rem] rounded-xl lg:left-64 flex">
                <div className="hidden lg:block md:block">
                    <MapCard />
                </div>
                <div>
                    <MapCard />
                </div>
            </div>
        </div>
    );
}