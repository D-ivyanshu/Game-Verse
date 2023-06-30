import noImage from '../assets/no-image-placeholder.webp'

const getCroppedImageUrl = (url: string) => {
    if (!url) return noImage;
    const index = url.indexOf('media/') + 'media/'.length;
    return url.slice(0,index) + 'crop/600/400/' + url.slice(index);
}

export default getCroppedImageUrl;


// helps to optimise the image by cropping the image according to our card size 