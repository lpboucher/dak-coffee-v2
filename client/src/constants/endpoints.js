export const getImageAddress = (transformations, name, type="Products", folder="Thumbs", extension=".png", version="v1618496837") => {
    return `${CLOUDINARY}/${transformations}/${version}/${type}/${folder}/${name}${extension}`;
}

const CLOUDINARY = "https://res.cloudinary.com/dak-coffee-roasters/image/upload";

