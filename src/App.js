import { Route, Routes } from "react-router-dom";
import Home  from "./Pages/Home";
import User from "./Pages/User";
import Follower from "./Pages/Follower";
import Repo from "./Pages/Repo";
import Following from "./Pages/Following";

const App=()=> {
    return(
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:id/repo" element={<Repo/>}/>
        <Route path="/:id/followers" element={<Follower/>}/>
        <Route path="/:id/following" element={<Following/>}/>
        <Route path="/:id" element={<User/>}/>
      </Routes>
    )
}

export default App;
