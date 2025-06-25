import { Link } from "react-router-dom";

function Home(){

    const posts = [
        {
            id:1,
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elementum nisi vitae magna eleifend, ut feugiat purus lacinia.",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elementum nisi vitae magna eleifend, ut feugiat purus lacinia.",
            img:"https://images.pexels.com/photos/32549559/pexels-photo-32549559.jpeg"
        },
        {
            id:2,
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elementum nisi vitae magna eleifend, ut feugiat purus lacinia.",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elementum nisi vitae magna eleifend, ut feugiat purus lacinia.",
            img:"https://images.pexels.com/photos/32549559/pexels-photo-32549559.jpeg"
        },
        {
            id:3,
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elementum nisi vitae magna eleifend, ut feugiat purus lacinia.",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elementum nisi vitae magna eleifend, ut feugiat purus lacinia.",
            img:"https://images.pexels.com/photos/32549559/pexels-photo-32549559.jpeg"
        },
        {
            id:4,
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elementum nisi vitae magna eleifend, ut feugiat purus lacinia.",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elementum nisi vitae magna eleifend, ut feugiat purus lacinia.",
            img:"https://images.pexels.com/photos/32549559/pexels-photo-32549559.jpeg"
        },
        {
            id:5,
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elementum nisi vitae magna eleifend, ut feugiat purus lacinia.",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elementum nisi vitae magna eleifend, ut feugiat purus lacinia.",
            img:"https://images.pexels.com/photos/32549559/pexels-photo-32549559.jpeg"
        }
    ]

    return(
        <div className="home">
            <div className="posts">
                {posts.map((post) => (
                    <div className="post" key={post.id}>
                        <div className="img">
                            <img src={post.img}  alt="" />
                        </div>
                        <div className="content">
                            <Link to={`/post/${post.id}`} className="link">
                            <h1>{post.title}</h1>
                            </Link>
                            <p>{post.desc}</p>
                            <button>Read More</button>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    )

}
export default Home;