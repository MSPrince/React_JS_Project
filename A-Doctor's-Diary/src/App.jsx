import React from 'react';
import Navbar from './component/navbar/Navbar';
import Footer from './component/footer/Footer';
import Homepage from './component/home-page/Homepage';
import Whatsapppopup from './component/whatsapppopup/Whatsapppopup';

function App() {
  return (
    <div>
      <Navbar/>
      <Homepage/>
      <Footer />
      <Whatsapppopup/>
    </div>
  );
}

export default App;
