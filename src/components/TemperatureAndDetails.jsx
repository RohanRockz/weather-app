import React from 'react'
import{
    UilArrowUp,
    UilArrowDown,
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
} from "@iconscout/react-unicons";
import { formatToLocalTime, iconUrlFromCode } from '../services/weatherService';

function TemperatureAndDetails({weather:{
details,icon,temp,temp_min,temp_max,sunrise,sunset,speed,humidity,feels_like,timezone
}}) {
  return (
    <div>
    <div className="flex items-center justify-center py-6 text-3xl text-cyan-300">
        <p>{details}</p>
    </div>
    <div className="flex flex-row items-center justify-around text-white py-3">
    <img src={iconUrlFromCode(icon)} alt="" className="w-40"/>
    <p className="text-6xl">{`${temp.toFixed()}°`}</p>
    <div className="flex flex-col space-y-2">
        <div className="flex font-medium text-lg items-center justify-around">
            <UilTemperature size={25} className="mr-1"/>
            Real feel:
            <span className="font-medium ml-1">{`${feels_like.toFixed()}°`}</span>
        </div>
        <div className="flex font-medium text-lg items-center justify-center">
            <UilTear size={25} className="mr-1"/>
            Humidity:
            <span className="font-medium ml-1">{`${humidity.toFixed()}%`}</span>
        </div>
        <div className="flex font-medium text-lg items-center justify-center">
            <UilWind size={25} className="mr-1"/>
            Wind:
            <span className="font-medium ml-1">{`${speed.toFixed()}kmph`}</span>
        </div>
        
    </div>

    </div>
    <div className="flex flex-row items-center justify-center
    space-x-2 text-white text-lg py-3">

    <UilSun/>
    <p className="font-light">Rise:
    <span className="font-medium ml-1">{formatToLocalTime(sunrise,timezone,"hh:mm a")}</span>
    </p>
    <p className="font-light">|</p>
    <UilSunset/>
    <p className="font-light">Set:
    <span className="font-medium ml-1">{formatToLocalTime(sunset,timezone,"hh:mm a")}</span>
    </p>
    <p className="font-light">|</p>
    <UilSun/>
    <p className="font-light">High:
    <span className="font-medium ml-1">{`${temp_max.toFixed()}°`}</span>
    </p>
    <p className="font-light">|</p>
    <UilSun/>
    <p className="font-light">Low:
    <span className="font-medium ml-1">{`${temp_min.toFixed()}°`}</span>
    </p>
    
    </div>
      
    </div>
  )
}

export default TemperatureAndDetails
