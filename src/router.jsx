import {createBrowserRouter} from "react-router-dom";
import App from "./App.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import MySchedule from "./pages/MySchedule.jsx";
import ClassDetails from "./pages/ClassDetails.jsx";
const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '',
                element: <App />,
            },
            {
                path: 'my-schedule',
                element: <MySchedule />,
            },
            {
                path: 'class',
                children: [
                    {
                        path: '',
                        // element: <ClassDetails />,
                    },
                    {
                        path: ':classId',
                        element:  <ClassDetails />,
                    },
                ]
            }
        ]

    }
])

export default router;