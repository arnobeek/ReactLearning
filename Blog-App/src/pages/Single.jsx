import { Link } from "react-router-dom";
import Menu from "../components/Menu";

function Single(){

    return(
        <div className="single">
            <div className="content">
                <img src="https://images.pexels.com/photos/32549559/pexels-photo-32549559.jpeg" alt="img" />
                <div className="user">
                    <img src="https://images.pexels.com/photos/32549559/pexels-photo-32549559.jpeg" alt="" />
                    <div className="info">
                        <span>Arnold</span>
                        <p>Posted 2 days ago</p>
                    </div>
                    <div className="edit">
                        <Link to={`/write?edit=2`}>
                            <img src="src\assets\edit.png" alt="edit" />
                        </Link>
                        
                        <img src="" alt="delete" />
                    </div>
                    
                </div>
                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elementum nisi vitae magna eleifend, ut feugiat purus lacinia.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elementum nisi vitae magna eleifend, ut feugiat purus lacinia.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elementum nisi vitae magna eleifend, ut feugiat purus lacinia.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elementum nisi vitae magna eleifend, ut feugiat purus lacinia.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elementum nisi vitae magna eleifend, ut feugiat purus lacinia.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elementum nisi vitae magna eleifend, ut feugiat purus lacinia.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elementum nisi vitae magna eleifend, ut feugiat purus lacinia.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elementum nisi vitae magna eleifend, ut feugiat purus lacinia.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elementum nisi vitae magna eleifend, ut feugiat purus lacinia.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elementum nisi vitae magna eleifend, ut feugiat purus lacinia.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elementum nisi vitae magna eleifend, ut feugiat purus lacinia.
                        
                    </p>
                
            </div>
            <Menu />
        </div>
    )

}
export default Single;