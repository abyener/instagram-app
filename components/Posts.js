import Post from "./Post"

const posts = [
    {
        id: "123",
        username: "abyener54",
        userImage: "https://i1.sndcdn.com/avatars-000191864169-xzno4r-t240x240.jpg",
        img: "https://i1.sndcdn.com/avatars-000191864169-xzno4r-t240x240.jpg",
        caption: "İlluminati ABY"

    },
    {
        id: "123",
        username: "abyener54",
        userImage: "https://i1.sndcdn.com/avatars-000191864169-xzno4r-t240x240.jpg",
        img: "https://i1.sndcdn.com/avatars-000191864169-xzno4r-t240x240.jpg",
        caption: "İlluminati ABY"

    },
    {
        id: "123",
        username: "abyener54",
        userImage: "https://i1.sndcdn.com/avatars-000191864169-xzno4r-t240x240.jpg",
        img: "https://i1.sndcdn.com/avatars-000191864169-xzno4r-t240x240.jpg",
        caption: "İlluminati ABY"

    },
    {
        id: "123",
        username: "abyener54",
        userImage: "https://i1.sndcdn.com/avatars-000191864169-xzno4r-t240x240.jpg",
        img: "https://i1.sndcdn.com/avatars-000191864169-xzno4r-t240x240.jpg",
        caption: "İlluminati ABY"

    },
    {
        id: "123",
        username: "abyener54",
        userImage: "https://i1.sndcdn.com/avatars-000191864169-xzno4r-t240x240.jpg",
        img: "https://i1.sndcdn.com/avatars-000191864169-xzno4r-t240x240.jpg",
        caption: "İlluminati ABY"

    },
    {
        id: "123",
        username: "abyener54",
        userImage: "https://i1.sndcdn.com/avatars-000191864169-xzno4r-t240x240.jpg",
        img: "https://i1.sndcdn.com/avatars-000191864169-xzno4r-t240x240.jpg",
        caption: "İlluminati ABY"

    },
 ]
function Posts() {
    return (
        <div>
            {posts.map((post) => (
                <Post 
                    key={post.id} 
                    id={post.id}
                    username={post.username}
                    userImage={post.userImage}
                    img={post.img}
                    caption={post.caption}
                />
            ))}
           
        </div>
    )
}

export default Posts
