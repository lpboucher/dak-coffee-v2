export const buildImageUrl = (
    path,
    transformationName="",
    repoName="dak-coffee-roasters",
    resource="image",
    type="upload",
    version="v1572362369"
    ) => {
    const baseURI = "https://res.cloudinary.com";
    const transformation = buildTransformationString(transformationName)
    return `${baseURI}/${repoName}/${resource}/${type}/${transformation}${version}/${path}`
}

const buildTransformationString = (transformation) => {
    if (transformation === "") {
        return ""
    }
    return `${transformation}/`
}