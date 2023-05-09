import Authenticate from "../Pages/Authenticate/Authenticate";
import VideoPage from "../Pages/VideosPage/VideoPage";

const authenticateRoute = [
    { path: '/', component: Authenticate }
]

const videoRoute = [
    { path: '/video', component: VideoPage }
]

export const routes = [...authenticateRoute, ...videoRoute]