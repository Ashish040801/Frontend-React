import React from 'react'
import { TbCross } from 'react-icons/tb'

const PopUp = ({show,item,onClose}) => {
    if(!show){
        return null;
    }
    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;

    return (
        <>
            <div className=' min-h-screen w-full fixed left-0 right-0 top-0 flex items-center justify-center bg-amber-500 opacity-25'>
                <div className=' bg-yellow-700 w-4/6 h-max p-5 relative box-border ring-2 ring-slate-300 border-of border-cyan-50	 overflow-hidden font-normal'>
                    <button className='absolute top-2 right-2' onClick={onClose}><TbCross size={28} color='white' /></button>
                    <div className='w-full flex mt-8 gap-6'>
                        <img className="w-32" src={thumbnail} alt="" />
                        <div className='text-white font-medium text-xl'>
                            <h2 className=' font-bold text-4xl underline '>{item.volumeInfo.title}</h2>
                            <h3 className=' text-blue-700'>{item.volumeInfo.authors}</h3>
                            <h4>{item.volumeInfo.publisher}<span className='mx-2'>{item.volumeInfo.publishedDate}</span></h4> <br />
                            <a className=" border-spacing-1 bg-green-700 p-2 rounded" href={item.volumeInfo.previewLink}><button>More</button></a>
                        </div>
                    </div>
                    <h4 className='mt-4 text-white'>{item.volumeInfo.description}</h4>
                </div>
            </div>
        </>
    )
}

export default PopUp
