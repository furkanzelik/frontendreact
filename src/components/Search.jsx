import React, {useState} from "react";
import banner from './../assets/images/aoe-banner.png'



function Search(){

    const tags = [
        {
            id:1,
            name: 'All'
        },
        {
            id:2,
            name: 'AOE 1'
        },
        {
            id:3,
            name: 'AOE 2'
        },
        {
            id:4,
            name: 'AOE 3'
        },
        {
            id:5,
            name: 'AOE 4'
        },
    ]

    const [activeIndex,setActiveIndex]=useState(0);

    return(
        <div className='flex justify-center mt-14 flex-col px-[70] md:px-[150px]'>
            <img src={banner} className='rounded-2xl w-[9900px] ' alt='banner for age of empire'/>
            <div className='bg-white shadow-lg p-4 rounded-lg mt-[-20px] mx-[20%] flex'>
                <input type='text' placeholder='Search Your Empire' className='bg-white text-gray-500 '/>
            </div>
            <div className='flex gap-10 justify-center text-black
       mt-5'>
                {tags.map((item, index) => (
                    <ul key={item.id} onClick={() => {
                        setActiveIndex(index);
                        selectedTag(item.name)
                    }}
                        className={`${index === activeIndex ?
                            'bg-yellow-600 text-blue-900' : null} p-1 pb-2 rounded-s-md
                md:rounded-lg cursor-pointer md:px-4
                 hover:border-[1px] 
                border-b-blue-950 transition-all duration-100 ease-in-out`}>
                        <li className='line-clamp-1'>{item.name}</li>
                    </ul>
                ))}
            </div>

        </div>


    )
}

export default Search