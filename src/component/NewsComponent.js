import React from 'react';

const CARD_CLASSES = 'bg-card rounded-lg shadow-lg overflow-hidden';


const NewsCard = ({ imgSrc, altText, title, date, description }) => {
    return (
        <div className={CARD_CLASSES}>
            <img src={imgSrc} alt={altText} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-muted-foreground">{date}</p>
                <p>{description}</p>
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
        </div>
    );
};

const NewsComponent = () => {
    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold text-center mb-6">News from JMT</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <NewsCard
                    imgSrc="/images/image5.jpeg"
                    altText="Noodle Prawn"
                    title="Noodle Prawn: The New Sensation!"
                    date="2024-10-19"
                    description="Try our new Noodle Prawn, you won't regret it!"
                />
                <NewsCard
                    imgSrc="/images/image6.jpeg"
                    altText="Imported Prawn Noodles"
                    title="Imported Prawn Noodles"
                    date="2024-10-19"
                    description="We import the best Noodles Prawn, don't miss out!"
                />
                <NewsCard
                    imgSrc="/images/image7.jpeg"
                    altText="Special Offer"
                    title="Special Offer for Customers!"
                    date="2024-10-19"
                    description="Buy one, get two! It's not a joke!"
                />
                <NewsCard
                    imgSrc="/images/image8.jpeg"
                    altText="Our Address"
                    title="Our Address: Come Visit!"
                    date="2024-10-19"
                    description="6, Mohirm Chandra Das, Kolkata. We are waiting for you!"
                />
            </div>
        </div>
    );
};

export default NewsComponent;
