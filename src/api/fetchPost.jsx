import { requester } from "../requester";


export const getRequest = async() => {
    try{
        const { data } = await requester.get('posts')
        return data
    } catch (e) {
        console.log(e)
    }
}

export const postRequest = async( data ) => {
    requester.post('/posts', data)
    .then(() => {
        console.log('Success')
    })
    .catch(() => {
        console.log('Fail')
    })
}