import React,{useState} from 'react'
import PopUp from './PopUp';


export default function Books({ book }) {
  const [show,setShow] = useState(false)
  const [bookItem,setBookItem] = useState();
  console.log(book)
  return (
    <>
      {
        book.map((item) => {
          let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
          let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
          if (thumbnail !== undefined && amount !== undefined) {
            return (
              <>
                <div className=' w-48 bg-orange-600 h-max rounded-md p-2 text-center hover:scale-90' onClick={() => {setShow(true);setBookItem(item)}}>
                  <img className="w-full aspect-square object-cover" src={thumbnail} alt="" />
                  <div className='text-white font-medium'>
                    <h3>{item.volumeInfo.title}</h3>
                    <p className='tracking-wider w-full bg-amber-500 '>&#8377;{amount}</p>
                  </div>
                </div>
                <PopUp show={show} item={bookItem} onClose={() => setShow(false)} />
              </>
            )
          }

        })
      }

    </>
  )
}
