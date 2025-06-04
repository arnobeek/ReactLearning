
function Button (){

    let count = 0;
    const handleClick =(name) => {
        if(count < 3){
            count ++;
            console.log(`${name}, You clicked me ${count} times`);
        }else{
        console.log(`${name}, stop clicking me!!!`);
        }
    }
    const handleClick2 = (name) => console.log((`${name} stop clicking me!!`))
    const handleClick3 = (e) => e.target.textContent = "Ouch!";
    return (
        <button onDoubleClick={(e) => handleClick3(e)} className="button">Click ME</button>
    );
}

export default Button;