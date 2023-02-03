import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddStudent from "../Page/AddStudent/AddStudent";
import ManageStudent from "../Page/ManageStudent/ManageStudent";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main/>,
        children:[
            {
                path:'/',
                element: <AddStudent/>
            },
            {
                path:'/ManageStudents',
                element: <ManageStudent/>
            }
        ]
    }
])

export default router;