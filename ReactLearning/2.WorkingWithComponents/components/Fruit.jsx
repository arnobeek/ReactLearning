export default function Fruit({name, price, emoji, soldout}){
    return(
        <>
            {/* {emoji} {name} ${price} */}
            {price>5 ? (<li>{emoji} {name} ${price} {soldout ? "SoldOut" : ""}</li>) : ("")}
    
        </>
    )
}