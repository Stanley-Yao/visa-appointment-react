import React, { useState, useEffect } from 'react';
import './App.css';
import AppBar from './components/shared/AppBar';
import { Api } from './utils/apis';
import useDeepCompareEffect from 'use-deep-compare-effect'
import { AvailableDateObject, CheckDatesResponse } from './types';

function App() {

  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState<AvailableDateObject[]>([])

  useEffect(() => {
    const getDates = async () => {
      setIsLoading(true)
      const dates = await Api.getDates('Canada', 'USA')
      console.log("🚀 ~ file: App.tsx:12 ~ getDates ~ dates", dates)
      setIsLoading(false)
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
