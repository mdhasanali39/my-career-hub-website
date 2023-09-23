import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Statistics from "../Pages/Statistics/Statistics";
import AppliedJobs from "../Pages/AppliedJobs/AppliedJobs";
import Blogs from "../Pages/Blogs/Blogs";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/statistics',
                element: <Statistics></Statistics>
            },
            {
                path: '/applied_jobs',
                element: <AppliedJobs></AppliedJobs>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            }
        ]
    }
])
export default router;