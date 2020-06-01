import React from 'react';
import Img from 'react-cloudinary-lazy-image';

const CloudImage = ({img, maxWidth, minHeight=null, maxHeight=null,fit='cover', padding=''}) => {
    return (
      <Img
        cloudName="dak-coffee-roasters"
        imageName={img}
        fluid={{
            maxWidth: maxWidth,
        }}
        style={{
            width: '100%',
            height: '100%',
            padding: padding
        }}
        imgStyle={{
          objectFit: fit,
          minHeight: minHeight ? minHeight : null,
          maxHeight: maxHeight ? maxHeight : null
        }}
        IOParams={{ rootMargin: '100px' }}
    />
    );
};

export default CloudImage;
