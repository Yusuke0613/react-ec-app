import React from 'react';
import {Route, Routes, BrowserRouter} from "react-router-dom";
import Index from './page/index';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index />} />
                {/* add redirect for first page */}
            </Routes>
        </BrowserRouter>
    );
};

export default Router;