import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from "./router.jsx";
import {RouterProvider} from "react-router-dom";
import MainContextProvider from "./Context/MainContextProvider";
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <MainContextProvider>
        <RouterProvider router={router} />
      </MainContextProvider>
        {/*<App />*/}
  </StrictMode>,
)
