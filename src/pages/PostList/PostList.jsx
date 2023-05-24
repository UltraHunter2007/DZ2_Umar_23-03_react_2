import {getRequest} from "../../api/fetchPost";
import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";


const PostList = ({}) => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        getRequest().then((data) => {
            setPosts([...data])
        })
    }, [])


    return (
        <>
            <NavLink to={'/create'}>
                <button>Create Post</button>
            </NavLink>
            {posts.map((data) => {
                return (
                    <div className={"postCard"} key={data.id}>
                        <p>{data.title}</p>
                    </div>
                )
            })}
        </> 
    )
}


export default PostList