import ProfilePic from './assets/profile-pic.jpg';


function Card(){
    return(
        <div className="card" >
            <img src={ProfilePic} alt="Profile Picture" className='profile-pic'/>
            <h2 className='card-title'>Arnold Beeka</h2>
            <p className='card-text'>I make webistes and play video games</p>
            
        </div>

    );

}

export default Card;