import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const AlbumList = () => {
    const [albums, setAlbums] = useState([]);
    const { userId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
            .then(response => response.json())
            .then(data => setAlbums(data))
            .catch(error => console.error('Error fetching albums: ', error));
    }, [userId]);

    const handlePhotosClick = (albumId) => {
        navigate(`/photos/${albumId}`);
    };

    return (
        <div>
            <h2>Album List</h2>
            <ul>
                {albums.map(album => (
                    <li key={album.id}>
                        {album.title} {' '}
                        <button onClick={() => handlePhotosClick(album.id)}>Photos</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AlbumList;
