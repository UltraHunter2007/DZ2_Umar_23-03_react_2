import './App.css';
import { Routes, Route } from 'react-router-dom'
import PostList from "./pages/PostList/PostList";
import Layout from "./components/Layout/Layout";
import AddPost from "./pages/AddPost/AddPost";

function App() {
    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route path='/' element={<PostList/>}/>
                <Route path='/create' element={<AddPost/>}/>
            </Route>
        </Routes>
    );
}

export default App;