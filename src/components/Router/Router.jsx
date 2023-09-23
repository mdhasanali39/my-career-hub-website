import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Statistics from "../Pages/Statistics/Statistics";
import AppliedJobs from "../Pages/AppliedJobs/AppliedJobs";
import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Pages/Home/Home";
import JobDetails from "../Jobs/JobDetails/JobDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>
            },
            {
                path: '/applied_jobs',
                element: <AppliedJobs></AppliedJobs>,
                loader: ()=> fetch('/public/jobs.json') // this is a bad practice
            },
            {
                path:'/:id',
                element: <JobDetails></JobDetails>,
                loader: ()=> fetch('/public/jobs.json') // this is a bad practice
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            }
        ]
    }
])
export default router;