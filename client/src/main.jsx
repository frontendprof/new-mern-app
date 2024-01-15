import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import ProductPage from './pages/ProductPage.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomePage />} />
      <Route path="/product/:id" element={<ProductPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
