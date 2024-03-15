import React from 'react';
import { useEffect, useState } from 'react';


const Container = () => {

    const [ mood, setMood ] = useState('');


  return (
    <div className="flex flex-col h-screen pb-20">
      <h1 className='text-red-800 m-auto '>Mood Tracker</h1>
      <h2 className='m-auto'>What is your mood today ?</h2>
      {mood !== "" && <h2 data-testid='mood' className='m-auto'>You are {mood}</h2>}
      <div className='m-auto flex flex-row'>
        <button onClick={() => setMood('Happy')} className='mr-6 rounded-lg bg-green-500 text-white p-3'>Happy</button>
        <button onClick={() => setMood('Sad')} className='mr-6 rounded-lg bg-emerald-800 text-white p-3'>Sad</button>
        <button onClick={() => setMood('Angry')} className='mr-6 rounded-lg bg-red-500 text-white p-3'>Angry</button>
        <button onClick={() => setMood('Confused')} className='mr-6 rounded-lg bg-amber-500 text-white p-3'>Confused</button>
      </div>
    </div>
  )
}

export default Container