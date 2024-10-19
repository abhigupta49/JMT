import React from 'react';

const CARD_CLASSES = 'bg-card rounded-lg shadow-lg overflow-hidden';
const BUTTON_CLASSES = 'bg-secondary text-secondary-foreground hover:bg-secondary/80 mt-2 p-2 rounded';

const NewsCard = ({ imgSrc, altText, title, date, description }) => {
    return (
        <div className={CARD_CLASSES}>
            <img src={imgSrc} alt={altText} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-muted-foreground">{date}</p>
                <p>{description}</p>
                <button className={BUTTON_CLASSES}>Try It</button>
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
                    imgSrc="https://placehold.co/300x200"
                    altText="Noodle Prawn"
                    title="Noodle Prawn: The New Sensation!"
                    date="2024-10-19"
                    description="Try our new Noodle Prawn, you won't regret it!"
                />
                <NewsCard
                    imgSrc="https://placehold.co/300x200"
                    altText="Imported Prawn Noodles"
                    title="Imported Prawn Noodles"
                    date="2024-10-19"
                    description="We import the best Noodles Prawn, don't miss out!"
                />
                <NewsCard
                    imgSrc="https://placehold.co/300x200"
                    altText="Special Offer"
                    title="Special Offer for Customers!"
                    date="2024-10-19"
                    description="Buy one, get two! It's not a joke!"
                />
                <NewsCard
                    imgSrc="https://placehold.co/300x200"
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
