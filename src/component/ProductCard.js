import React from "react";


const ProductCard = ({ imageSrc, altText, title, price, description, whatsappNumber }) => {
    return (
      <div className="border rounded-lg p-4 shadow-lg">
        <img className="w-full h-32 object-cover rounded-lg" src={imageSrc} alt={altText} />
        <h3 className="text-lg font-semibold mt-2">{title}</h3>
        {/* <p className="text-gray-500">{price}</p> */}
        <p className="text-gray-500">{description}</p>
  
        <a
          href={`https://wa.me/${+919836811565}?text=Hello,%20I%20am%20interested%20in%20your%20product:%20${title}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-green-500 text-white hover:bg-green-600 mt-2 w-full p-2 rounded">
            Contact on WhatsApp
          </button>
        </a>
      </div>
    );
  };
  

export default ProductCard