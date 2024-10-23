import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import { About } from './pages/About';
import { Shop } from './pages/Shop';
import { Suspense } from 'react';

const root = document.getElementById('root');
if (!root) {
   throw new Error('root was not found');
}
const container = createRoot(root);

const router = createBrowserRouter([
   { 
     path: "/", 
     element: <App />,
     children: [
       { path: "about", element: <Suspense fallback={"loading..."}><About/></Suspense> },
       { path: "shop", element: <Suspense fallback={"loading..."}><Shop/></Suspense> },
     ] 
   }
]);

container.render(<RouterProvider router={router} />);
