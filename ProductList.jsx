import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css'; // Assuming you create a CSS file for styling

function ProductList() {
  const dispatch = useDispatch();
  
  // Retrieve the cart items to calculate total quantity and check added status
  const cartItems = useSelector(state => state.cart.items);
  
  // Calculate total items for the Cart Icon
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Local state to handle disabled buttons visually (optional, but good for UI feedback)
  const [addedToCart, setAddedToCart] = useState({});

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prevState) => ({
       ...prevState,
       [plant.name]: true, // Mark this specific plant as added
    }));
  };

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        {
          name: "Snake Plant",
          image: "https://images.unsplash.com/photo-1599598425947-735d4681ee59?q=80&w=1000&auto=format&fit=crop",
          description: "Produces oxygen at night, perfect for the bedroom.",
          cost: "$15"
        },
        {
          name: "Spider Plant",
          image: "https://images.unsplash.com/photo-1572688484279-a21214531278?q=80&w=1000&auto=format&fit=crop",
          description: "Filters formaldehyde and xylene from the air.",
          cost: "$12"
        },
        {
          name: "Peace Lily",
          image: "https://images.unsplash.com/photo-1593691509543-c55fb32e7355?q=80&w=1000&auto=format&fit=crop",
          description: "Removes mold spores and purifies the air.",
          cost: "$18"
        },
        {
          name: "Boston Fern",
          image: "https://images.unsplash.com/photo-1628659972621-0a46b9658e4a?q=80&w=1000&auto=format&fit=crop",
          description: "Adds humidity to the air and removes toxins.",
          cost: "$20"
        },
        {
          name: "Rubber Plant",
          image: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?q=80&w=1000&auto=format&fit=crop",
          description: "Easy to grow and excellent for removing toxins.",
          cost: "$17"
        },
        {
          name: "Aloe Vera",
          image: "https://images.unsplash.com/photo-1567331711402-50950c406085?q=80&w=1000&auto=format&fit=crop",
          description: "Medicinal plant that also purifies the air.",
          cost: "$14"
        }
      ]
    },
    {
      category: "Aromatic Fragrant Plants",
      plants: [
        {
          name: "Lavender",
          image: "https://images.unsplash.com/photo-1598282386862-299f074d2839?q=80&w=1000&auto=format&fit=crop",
          description: "Calming scent, great for relaxation.",
          cost: "$30"
        },
        {
          name: "Jasmine",
          image: "https://images.unsplash.com/photo-1592323363821-b8449748b19e?q=80&w=1000&auto=format&fit=crop",
          description: "Sweet fragrance, beautiful white flowers.",
          cost: "$18"
        },
        {
          name: "Rosemary",
          image: "https://images.unsplash.com/photo-1593482594519-d75d5ec34563?q=80&w=1000&auto=format&fit=crop",
          description: "Invigorating scent, often used in cooking.",
          cost: "$15"
        },
        {
          name: "Mint",
          image: "https://images.unsplash.com/photo-1626469601053-b26388484f23?q=80&w=1000&auto=format&fit=crop",
          description: "Refreshing aroma, easy to grow.",
          cost: "$10"
        },
        {
          name: "Lemon Balm",
          image: "https://images.unsplash.com/photo-1625624738596-f94a86b24cb4?q=80&w=1000&auto=format&fit=crop",
          description: "Citrusy scent, repels mosquitoes.",
          cost: "$14"
        },
        {
          name: "Hyacinth",
          image: "https://images.unsplash.com/photo-1610488941783-a9805ec08c3e?q=80&w=1000&auto=format&fit=crop",
          description: "Strong, sweet fragrance with colorful blooms.",
          cost: "$22"
        }
      ]
    },
    {
      category: "Insect Repellent Plants",
      plants: [
        {
          name: "Oregano",
          image: "https://images.unsplash.com/photo-1533216832629-d5a278631b14?q=80&w=1000&auto=format&fit=crop",
          description: "Contains compounds that repel insects.",
          cost: "$10"
        },
        {
          name: "Marigold",
          image: "https://images.unsplash.com/photo-1616853689626-444a8069d37f?q=80&w=1000&auto=format&fit=crop",
          description: "Natural pest deterrent for gardens.",
          cost: "$8"
        },
        {
          name: "Geraniums",
          image: "https://images.unsplash.com/photo-1456577435136-12349e2170b6?q=80&w=1000&auto=format&fit=crop",
          description: "Known to repel mosquitoes and gnats.",
          cost: "$20"
        },
        {
          name: "Basil",
          image: "https://images.unsplash.com/photo-1618386401062-8e121e7d0130?q=80&w=1000&auto=format&fit=crop",
          description: "Repels flies and mosquitoes.",
          cost: "$9"
        },
        {
          name: "Chives",
          image: "https://images.unsplash.com/photo-1596727546306-03f434771960?q=80&w=1000&auto=format&fit=crop",
          description: "Deters aphids and Japanese beetles.",
          cost: "$12"
        },
        {
          name: "Catnip",
          image: "https://images.unsplash.com/photo-1601332766336-390b17130dfc?q=80&w=1000&auto=format&fit=crop",
          description: "Highly effective mosquito repellent.",
          cost: "$15"
        }
      ]
    }
  ];

  const styleObj = {
    backgroundColor: '#4CAF50',
    color: '#fff!important',
    padding: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '20px',
  }
  const styleObjUl = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '1100px',
  }
  const styleA = {
    color: 'white',
    fontSize: '30px',
    textDecoration: 'none',
  }

  return (
    <div>
      {/* 1. Navigation Bar */}
      <div className="navbar" style={styleObj}>
        <div className="tag">
           <div className="luxury">
               <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="" />
               <a href="/" style={{textDecoration:'none'}}>
                 <div>
                    <h3 style={{color:'white'}}>Paradise Nursery</h3>
                    <i style={{color:'white'}}>Where Green Meets Serenity</i>
                 </div>
               </a>
           </div>
          
        </div>
        <div style={styleObjUl}>
            <div> <a href="#" onClick={(e)=>e.preventDefault()} style={styleA}>Plants</a></div>
            <div> <a href="#" onClick={(e)=>e.preventDefault()} style={styleA}><h1 className='cart'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="68" width="68"><rect width="156" height="156" fill="none"></rect><circle cx="80" cy="216" r="12"></circle><circle cx="184" cy="216" r="12"></circle><path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="#faf9f9" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" id="mainIconPathAttribute"></path></svg></h1></a></div>
        </div>
      </div>

      {/* 2. Product Grid */}
      <div className="product-grid">
        {plantsArray.map((category, index) => (
          <div key={index}>
            <h1 className="category-title"><div>{category.category}</div></h1>
            <div className="product-list">
              {category.plants.map((plant, plantIndex) => (
                <div className="product-card" key={plantIndex}>
                  <div className="product-title">{plant.name}</div>
                  <img className="product-image" src={plant.image} alt={plant.name} />
                  <div className="product-price">{plant.cost}</div>
                  <div className="product-description">{plant.description}</div>
                  <button 
                    className={`product-button ${addedToCart[plant.name] ? 'added-to-cart' : ''}`}
                    onClick={() => handleAddToCart(plant)}
                    disabled={addedToCart[plant.name]} // Disable button if added
                  >
                    {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
