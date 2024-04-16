import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home,About,Projects,Contact } from './pages/index';

const router = createBrowserRouter({
    path:"/3js_portfolio_kumarrishav/",
    element : <App/>,
    children:[
        {
        path:"/3js_portfolio_kumarrishav/",
        element: <Home/>
        },
        {
        path:"/3js_portfolio_kumarrishav/Contact",
        element: <Contact/>
        },
        {
            path:"/3js_portfolio_kumarrishav/About",
            element: <About/>
        },
        {
            path:"/3js_portfolio_kumarrishav/Projects",
            element: <Projects/>
        },


    ]

})

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
    // <App/>
);