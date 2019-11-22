import React from 'react';

import Hero from '../presentation/global/Hero';
import SingleDescriptionLayout from '../layouts/SingleDescriptionLayout';
import CategoryContainer from '../containers/categories/CategoryContainer';
import NewsletterContainer from '../containers/newsletter/NewsletterContainer';

const header = 'https://res.cloudinary.com/dak-coffee-roasters/image/upload/v1574416315/Heros/Header_Christmas_o2pk2d.jpg'

const Christmas = () => {
    return (
    <>
        <Hero
            bgImage={header}
            overlay={{
                text: "hero.christmas",
                loc: "bottom-left",
                height: "50vh"
            }}
        />
        <SingleDescriptionLayout 
            description={"sections.christmas.description"}
        />
        <CategoryContainer categoryId={'5dd80b1b0bd5c074cf9ae866'}/>
        <CategoryContainer categoryId={'5da86cbd7fed123fd9a3f0e8'}/>
        <NewsletterContainer />
    </>
    );
};

export default Christmas;