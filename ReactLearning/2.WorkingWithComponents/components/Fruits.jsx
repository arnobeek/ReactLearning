import Fruit from "./Fruit"

export default function Fruits(){
    // const fruits = ["Mangoes","Apples","Bananas","Oranges", "Pineapples"]
    const fruits = [
        {
            name:"Apple",
            price:10,
            emoji:"🍎",
            soldout:false
        },
        {
            name:"Mango",
            price:6,
            emoji:"🥭",
            soldout:false
        },
        {
            name:"Banana",
            price:2,
            emoji:"🍌",
            soldout:true
        },
        {
            name:"Orange",
            price:5,
            emoji:"🍊",
            soldout:false
        },
        {
            name:"Pineapple",
            price:8,
            emoji:"🍍",
            soldout:true
        },
    ]

    return(
        <div>
            <ul>
                {fruits.map((fruit)=>(
                    // <li>{fruit.emoji} {fruit.name} ${fruit.price}</li>
                    <Fruit name={fruit.name} price={fruit.price} emoji={fruit.emoji} soldout={fruit.soldout}/>
                ))}
            </ul>
            
        </div>
    )
}