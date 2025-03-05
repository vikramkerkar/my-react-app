import { useState } from 'react';

import { IWeatherDetails } from './WeatherDetails';


interface IAddNewLocationProps {
    setData: (data:IWeatherDetails[]) => void;
    existingData: IWeatherDetails[];
}
const AddNewLocation = ({setData, existingData}:IAddNewLocationProps ) => {
    const [showInput, setShowInput] = useState(false)


    const getLocationDetails = async (query:string) => {

        const url = `https://api.weatherapi.com/v1/current.json?key=c87c30597f48494a8a765602250801&q=${query}`;
         
        try {
        const res = await fetch(url);
        const data = await res.json();
        const filtered = existingData?.filter(wdata => wdata.location.name !== data.location.name)
        console.log(filtered)
        setData([ ...filtered || [], data as IWeatherDetails])
        } catch(error) {
            console.log(error)
        }

    }

    const handleInput = (e:React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        if (query.length > 2) {
            getLocationDetails(query)
        }
    }

    return <div className="size-[400px] bg-blue-500 text-white flex justify-center items-center gap-y-3 flex-col rounded-lg" >

            <button className="text-black w-[50px] h-[50px] text-center rounded-[40px] opacity-25" onClick={() => setShowInput(true)}>
                <span className="text-[30px] relative top-[-10px] left-[-4px]">+</span></button>
            <div className="center-content font-bold">Add new location</div>
        <p>{showInput && <input placeholder="Enter location" className="text-center" onChange={handleInput} />}</p>
    </div>
}

export default AddNewLocation