import React from 'react'
import Animations from './Animations';



function Popup({ finalScore, restart })

{
	return (

<div>

<div class="relative flex justify-center items-center z-10">
  <div id="menu" class="w-full h-full bg-gray-900 bg-opacity-80 top-0 fixed sticky-0">
  <Animations />
    <div class="2xl:container  2xl:mx-auto py-48 px-4 md:px-28 flex justify-center items-center">
      <div class="w-96 md:w-auto dark:bg-gray-800 relative flex flex-col justify-center items-center bg-white py-16 px-4 md:px-24 xl:py-24 xl:px-36">
        <div role="banner">
   <img src='https://img.itch.zone/aW1nLzY3MjIwODYucG5n/original/ikx0H9.png'/>
        </div>
        <div class="mt-12">
          <h1 role="main" class="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-center text-gray-800"> {finalScore}  </h1>
        </div>
        <div class="mt">
          <button className='box-result' onClick={restart}>Play Again!</button>
        </div>
      </div>
    </div>
  </div>
</div>
</div>


	)
}
export default Popup;

