//react setup
//components
//rendering lists
//click event
//React hooks
//useState
//onChange
//updater function
//updating state of objects
// useEffect

import Header from './Header.jsx'
import Food from './Food.jsx'
import Footer from './Footer.jsx'
import Card from './Card.jsx'
import Button from './Button.jsx';
import Student from './Student.jsx';
import UserGreeting from './UserGreeting.jsx';
import List from './List.jsx';
import Profilepic from './profilepic.jsx';
import MyComponent from './MyComponent.jsx';
import Onchange from './Onchange.jsx';
import CarObject from './CarObject.jsx';
import Car from './Car.jsx';
import Effect from './Effect.jsx';
import SizeAdjuster from './SizeAdjuster.jsx';

function App() {
  const fruits = [{id: 1,name: "apple", calories: "apple"}, {id: 2,name: "banana", calories: 105}, {id: 3,name:"orange", calories: 45}, {id: 4,name: "coconut", calories: 159}, {id: 5,name: "pineapple", calories: 37}];
  const vegetables = [{id: 1,name: "potatoes", calories: 110}, {id: 2,name: "celery", calories: 15}, {id: 3,name:"carrots", calories: 25}, {id: 4,name: "corn", calories: 63}, {id: 5,name: "broccoli", calories: 50}];
  
  return (
    <>
    <Header />
    <UserGreeting isLoggedIn={true}/>
    <Student name='Babayaga' age={25} isStudent={true}/>
    <Student name='Patrick' age={30} isStudent={false}/>
    <Student name='Squidward' age={50} isStudent={false}/>
    <Student name='Sandy' age={27} isStudent={true}/>
    <Student />
    {fruits.length > 0 ? <List items={fruits} category="fruits"/> : null}
    {vegetables.length > 0 ? <List items={vegetables} category="vegetables"/> : null}
    <Card />
    <Card />
    <Button />
    <Profilepic />
    <Food />
    <MyComponent />
    <Onchange />
    <CarObject />
    <Car />
    <Effect />
    <SizeAdjuster />
    <Footer />
    </>
  );
}

export default App
