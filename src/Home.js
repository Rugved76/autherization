import React from 'react';

const App = () => {
    const handleClick = () => {
        window.open('https://github.com/Rugved76/')
    }
    return (
        <div className="container mt-5">
            <h1>Welcome to My Website</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis dolor vitae neque elementum fermentum. Aenean varius tincidunt orci in gravida. Fusce posuere vestibulum metus, id iaculis eros pharetra vel. Morbi fringilla est sed nisi finibus efficitur. Vestibulum lobortis diam eu mi ullamcorper eleifend. Nullam eleifend arcu non elementum rutrum.</p>
            <button onClick={handleClick} className="btn" style={{ border: '1px solid white' }}>Github</button>
        </div>
    );
};

export default App;
