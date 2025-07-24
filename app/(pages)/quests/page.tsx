import React from 'react'

const Quests = () => {
  return (
    <div className='h-full flex flex-col'>
      <h1 className="text-lg md:text-2xl font-bold mb-5 md:mb-10">Quests</h1>
      <div className="quest-content-container flex flex-col md:flex-row flex-1 gap-5">
        <div className="content-left flex-2 rounded-lg p-8 md:px-10 md:py-12 bg-white">Quests</div>
        <div className="content-right flex-1 rounded-lg p-8 md:px-10 md:py-12 bg-white">
          <h1>Found a new conquest?</h1>
        </div>
      </div>
    </div>
  )
}

export default Quests
