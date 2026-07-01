import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from './context/AuthContext.jsx';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AuthProvider>
       <Toaster
              position="top-center"
              toastOptions={{
                style: {
                  background: "#18181b",
                  color: "#fff",
                  border: "1px solid #27272a",
                },
              }}
            />
     <App />
     </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
