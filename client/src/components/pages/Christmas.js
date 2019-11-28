import React, { lazy, Suspense } from 'react';

import Hero from '../presentation/global/Hero';
import Loader from '../utils/SimpleLoader';
import SingleDescriptionLayout from '../layouts/SingleDescriptionLayout';

const CategoryContainer = lazy(() => import('../containers/categories/CategoryContainer'));
const NewsletterContainer = lazy(() => import('../containers/newsletter/NewsletterContainer'));

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
        <Suspense fallback={<Loader />}>
            <CategoryContainer categoryId={'5dd80b1b0bd5c074cf9ae866'}/>
            <CategoryContainer categoryId={'5da86cbd7fed123fd9a3f0e8'}/>
            <NewsletterContainer />
        </Suspense> 
    </>
    );
};

export default Christmas;