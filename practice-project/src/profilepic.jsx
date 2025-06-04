
function Profilepic(){
    const imgurl = './src/assets/profile-pic.jpg';
    const handleClick = (e) => e.target.style.display = "none";
    return(
        <img onClick={e => handleClick(e)} src={imgurl} alt="profilepic"></img>
    );

}
export default Profilepic;