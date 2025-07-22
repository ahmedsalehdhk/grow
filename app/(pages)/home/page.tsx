import React from 'react'

const Home = () => {
  return (
    <div className='h-full flex flex-col'>
      <h1 className="text-lg md:text-xl font-bold mb-5 md:mb-10">Home</h1>
      <div className="home-content-container flex flex-col md:flex-row flex-1 gap-5">
        <div className="actions flex-1 md:grow rounded-xl shadow-md p-5 order-2 md:order-1 bg-white">Actions</div>
        <div className="player-stats flex-3 md:grow flex flex-col gap-5 order-1 md:order-2">
          <div className="player flex-3 md:flex-8 rounded-xl shadow-md p-5 bg-white">Player</div>
          <div className="stats flex-1 md:flex-4 rounded-xl shadow-md p-5 bg-white">Stats</div>
        </div>
      </div>
    </div>
  )
}

export default Home
