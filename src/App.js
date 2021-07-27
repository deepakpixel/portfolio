import { useState } from 'react';
import Swal from 'sweetalert2';

import Footer from './componenrs/Footer/Footer';
import Header from './componenrs/Header/Header';
import Hero from './componenrs/Hero/Hero';
import './css/styles.css';

function App() {
  const [theme, setTheme] = useState(0);
  Swal.fire({
    title: 'Information',
    text: 'Website under maintainance',
    icon: 'info',
    confirmButtonText: 'See you later then',
  });
  return (
    // <h1>App running</h1>
    <div className="App">
      {/* <Header /> */}
      <Hero themeState={(theme, setTheme)} />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
