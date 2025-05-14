
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Apply font styles to the document
document.documentElement.style.fontFamily = 'Helvetica Neue, Helvetica, Arial, sans-serif';
document.documentElement.style.fontWeight = '300';

createRoot(document.getElementById("root")!).render(<App />);
