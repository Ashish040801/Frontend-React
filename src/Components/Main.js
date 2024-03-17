import React, { useState } from 'react'
import { TbFileSearch } from "react-icons/tb";
import Books from './Books';
import axios from 'axios';

function Main() {
    const [search, setSearch] = useState("");

    const[bookData,setBookData] = useState([]);

    const searchBook =(evt) => {
        if(evt.key === 'Enter'){
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyCAn-t74eZbrz8yGy4wO6-JzAXHSnt8q-c'+'&maxResults=25')
            .then(res=>setBookData(res.data.items))
            .catch(error=>console.log(error))
        }
    }

    return (
        <>
            <div className=' w-full flex justify-around items-center h-screen bg-amber-800 border-b-amber-300 border-b-4'>
                <div className="text-4xl flex items-center text-white justify-center font-serif  h-full w-2/3 " style={{ clipPath: "circle(90% at 2% 51%)", background: "url(./Images/Library-1.jpg)" }}>
                    <h1>A room without books is like <br />a body without a soul</h1>
                </div>
                <div className=' w-[52.3333%] gap-3 items-center flex flex-col' >
                    <h2 className='text-4xl font-bold text-white '>Find Your Book</h2>
                    <div className=' bg-slate-500 rounded-2xl w-[80%] gap-2 p-2 items-center flex justify-between'>
                        <input className='h-8 p-1 rounded-xl w-full outline-0 border-0' type="text" placeholder='Enter your Book Name' value={search} onChange={e=>setSearch(e.target.value)} onKeyPress={searchBook} />
                        <button className=''>
                            <TbFileSearch size={28} color='white' />
                        </button>
                    </div>
                    <img className=' w-3/4' src="./Images/5437683.jpg" alt="" style={{ clipPath: "ellipse(48% 50% at 50% 50%)" }} />
                </div>
            </div>
            <div className="h-max w-full grid  bg-amber-800  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 box-border place-items-center py-4">
                <Books book={bookData} />
            </div>

        </>
    )
}

export default Main
