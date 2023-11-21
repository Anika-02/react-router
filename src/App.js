import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './components/UserList';
import AlbumList from './components/AlbumList';
import PhotoList from './components/PhotoList';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<UserList />} />
                <Route path="/albums/:userId" element={<AlbumList />} />
                <Route path="/photos/:albumId" element={<PhotoList />} />
            </Routes>
        </Router>
    );
};

export default App;
