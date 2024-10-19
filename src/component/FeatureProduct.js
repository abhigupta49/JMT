import React from 'react';
import ProductCard from './ProductCard';


const FeaturedProducts = () => {
  return (
    <div className="bg-background p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <ProductCard
          imageSrc="/images/image1.jpeg"
          altText="Noodles Prawn Delight"
          title="Noodles Prawn Delight"
          price="₹150"
          description="Savor the taste of our premium Noodles Prawn, a culinary masterpiece!"
        />
        <ProductCard
          imageSrc="https://placehold.co/300x200"
          altText="Spicy Noodles Prawn"
          title="Spicy Noodles Prawn"
          price="₹180"
          description="Turn up the heat with our Spicy Noodles Prawn, for the bold!"
        />
        <ProductCard
          imageSrc="https://placehold.co/300x200"
          altText="Noodles Prawn Combo"
          title="Noodles Prawn Combo"
          price="₹300"
          description="Get the ultimate experience with our Noodles Prawn Combo!"
        />
        <ProductCard
          imageSrc="https://placehold.co/300x200"
          altText="Noodles Prawn Family Pack"
          title="Noodles Prawn Family Pack"
          price="₹500"
          description="Perfect for gatherings, our Family Pack is a noodle lover's dream!"
        />
      </div>
    </div>
  );
};



export default FeaturedProducts;


