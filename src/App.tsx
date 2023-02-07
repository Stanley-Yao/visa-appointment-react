import React, { useState, useEffect } from 'react';
import './App.css';
import AppBar from './components/shared/AppBar';
import { Api } from './utils/apis';
import { AvailableDateObject } from './types';

function App() {

  const [data, setData] = useState<AvailableDateObject[]>([])

  useEffect(() => {
    const getDates = async () => {
      const dates = await Api.getDates('Canada', 'USA')
      setData(dates.data.Items)
    }
    getDates()
  }, [])

  return (
    <div>
      <AppBar />
      <h1 className="text-3xl font-bold underline">
        Hello world

      </h1>
      <div>
        {
          data?.length > 0 &&
          data.map(d => <div> {JSON.stringify(d)} </div>)
        }

      </div>
    </div>
  );
}

export default App;
