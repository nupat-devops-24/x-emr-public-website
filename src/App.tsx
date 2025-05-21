import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainContent from './pages/MainContent';

const App: React.FC = () => {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <MainContent />
                <Footer />
            </div>
        </Router>
    );
};

export default App;