import photos from "../mocks/photos";

// mock function to get similar photos based on id
export function getSimilarPhotos(id){
    return photos[0].similar_photos;
}