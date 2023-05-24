import {useEffect, useState} from "react";
import {getRequest, postRequest} from "../../api/fetchPost";
import {useNavigate} from "react-router-dom";


const AddPost = ({}) => {

    const [ title, setTitle ] = useState('')
    const [ body, setBody ] = useState('')
    const [ lastId, setLastId ] = useState(100)
    const navigate = useNavigate()

      useEffect(() => {
        getRequest().then((data) => {
            setLastId(data.length + 1)
        })
    }, [])


    const handleInputTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleInputBody = (e) => {
        setBody(e.target.value)
    }

    const handleClick = () => {
        const json = {
            userId: 1,
            id: lastId,
            title: title,
            body: body
        }
        setLastId(prevState => prevState += 1)
        setTitle('')
        setBody('')

        postRequest(json)
        navigate('/')

    }

    return(
        <>
            <input type="text" placeholder="Title" value={title} onInput={handleInputTitle} />
            <input type="text" placeholder="Body" value={body} onInput={handleInputBody}/>
            <button onClick={handleClick}>Submit</button>
        </>
    )
}


export default AddPost