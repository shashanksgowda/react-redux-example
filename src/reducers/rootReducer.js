const initState = {
    posts: [
        {id: '1', title: 'Gokakyuno jutsu', body: 'Sasuke learnt to use gokakyno jutsu for the first time'},
        {id: '2', title: 'Kage bun shinno jutsu', body: 'Naruto learnt to use Kage bun shinno jutsu for the first time'},
        {id: '3', title: 'Dai bakuno jutsu', body: 'Kisame learnt to use Dai bakuno jutsu for the first time'}
    ]
}
const rootReducer = (state = initState, action) => {
    if (action.type === 'DELETE_POST') {
        const posts = state.posts.filter(post => post.id !== action.id);
        return { 
            ...state,
            posts: posts
        }
    }
    return state;
}

export default rootReducer;