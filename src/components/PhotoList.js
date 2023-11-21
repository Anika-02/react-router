import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PhotoList = () => {
    const [photos, setPhotos] = useState([]);
    const { albumId } = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
            .then(response => response.json())
            .then(data => setPhotos(data))
            .catch(error => console.error('Error fetching photos: ', error));
    }, [albumId]);

    return (
        <div>
            <h2>Photo List</h2>
            <ul>
                {photos.map(photo => (
                    <li key={photo.id}>
                        <button>
                            <img src={photo.thumbnailUrl} alt={photo.title} />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PhotoList;
