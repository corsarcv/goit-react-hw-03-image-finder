import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";

export const ImageGallery = ({images}) =>(
    <ul className="ImageGallery">
        {images.map((image)=>(
            <ImageGalleryItem key={image.id} image={image}/>
        ))}
    </ul>
)