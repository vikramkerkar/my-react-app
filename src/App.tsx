
import { useState } from 'react'
import './App.css'
import AddNewLocation from './components/AddNewLocation'
import WeatherDetails from './components/WeatherDetails';

import { IWeatherDetails } from './components/WeatherDetails';


function App() {

  const [data, setData] = useState<null | IWeatherDetails[]>(null);

  return (
    <div className="flex justify-center items-center w-screen h-screen gap-10 flex-wrap">
    {data && data.length > 0 && !data[data.length-1]?.error && data?.map((weatherData) => <WeatherDetails data={weatherData as IWeatherDetails}/>)}
     
      <AddNewLocation existingData={data as IWeatherDetails[]} setData={setData}/>
      {/* {data?.error  && <div className="text-red">An error occurred</div>} */}
    </div>
  )
}

export default App
