
const getCroppedImageUrl = (url: string) => {
    const index = url.indexOf('media/') + 'media/'.length;
    return url.slice(0,index) + 'crop/600/400/' + url.slice(index);
}

export default getCroppedImageUrl;


// helps to optimise the image by cropping the image according to our card size 