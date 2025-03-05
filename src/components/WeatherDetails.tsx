
import { days, labels, units } from "./constants";


export interface IWeatherDetails {
    location: {
        name : string;
        region: string;
        localtime: string;
    };
    current: {
        temp_c: number;
        condition: {
            text: string
            icon: string,
        };
        vis_km: number;
        feelslike_c: number;
        humidity: number;
        wind_kph: number
    };
    error?: string;
}


 const WeatherDetails = ({data}:{data: IWeatherDetails}) => {

    const {location, current } = data;


    const date = new Date(location?.localtime);
 
    return (<div className="size-[400px] bg-blue-500 text-white flex justify-center items-center gap-y-2 flex-col rounded-lg" >

            <div className="flex flex-row">
                <img className="w-[130px] h-[130px]" src={current?.condition?.icon} />
                <div className="flex flex-col justify-center">
                    <div className="font-bold text-base">{`${location?.name}, ${location?.region}`}</div>
                    <div className="text-xs">{`${days[date.getDay()]} ${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`}</div>
                </div>
            </div>
            <div className={"text-[40px]"}>{current?.temp_c}<sup className={"text-[20px]"}>°C</sup></div>
            <div className="text-[14px]">{current?.condition?.text}</div>
            
            <div className="flex flex-row justify-evenly gap-3 text-[14px]">
                <div>{labels.visibility} {current?.vis_km} {units.km} </div>
                <div> | </div>
                <div>{labels.feelsLike} {current?.feelslike_c}<sup>{units.celsius}</sup> </div>

            </div>
            <div className="flex flex-row justify-evenly gap-3 text-[14px]">
                <div>{labels.humidity} {current?.humidity}<sup>{units.celsius}</sup> </div>
                <div> | </div>
                <div>{labels.wind} {current?.wind_kph} {units.kph} </div>
            </div>
    </div>)

}

export default WeatherDetails