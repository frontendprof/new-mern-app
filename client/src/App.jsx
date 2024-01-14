import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="container py-3 mx-auto flex-grow">
            <Home />
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}
