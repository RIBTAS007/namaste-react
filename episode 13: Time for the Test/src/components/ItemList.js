import { useDispatch } from 'react-redux';
import { CDN_URL } from '../utils/constant';
import { addItem } from '../utils/cartSlice';

ItemList = ({items}) =>{

  const dispatch = useDispatch();

   handleAddItem = (item)=>{
      // dispatch an action
      dispatch(addItem(item));
   };

    return(
        <div>
         {items.map((item) => (
          <div key={item.card.info.id} data-testid="foodItems" className="p-2 m-2 flex border border-gray-200 border-b-2 text-left justify-between">
           
            <div className='w-9/12'>
            <div className="py-2">
                <span >{item.card.info.name}</span>
                <span className="">- ₹ {item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
                <p className="text-xs">{item.card.info.description}</p>
            </div>
            </div>
            <div className='w-3/12 p-4'>
            <div className='absolute'>
            <button className='p-2 mx-6 bg-black text-white shadow-lg'
              onClick={() => handleAddItem(item)}
            >Add +</button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} alt={item.card.info.name} className="rounded-lg"/>
            </div>
          </div>
          ))}
         
        </div>
    );
};

export default ItemList;