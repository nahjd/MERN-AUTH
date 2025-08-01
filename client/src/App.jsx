import './App.css';
import axios from 'axios';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './router/router.jsx';

axios.defaults.baseURL = 'https://mern-auth-1-9902.onrender.com';
axios.defaults.withCredentials = true;

const router = createBrowserRouter(routes);

function App() {
  return (
    <>
    <ThemeProvider>
       <LanguageProvider>
      <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
      <RouterProvider router={router} />
      </LanguageProvider>
      </ThemeProvider>
      
    </>
  );
}

export default App;
