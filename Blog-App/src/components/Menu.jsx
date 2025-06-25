function Menu(){
    
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
        <div className="menu">
            <h1>Other posts you may like</h1>
            {posts.map((post)=>(
                <div className="post" key={post.id}>
                    <img src={post.img} alt="img" />
                    <h2>{post.title}</h2>
                    <button>Read More</button>

                </div>
            ))}

        </div>

    )

}
export default Menu;