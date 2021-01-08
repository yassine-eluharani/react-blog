import {useState} from 'react';

const Home = () => {
    //let name = 'Mario';
    const [name , setName] = useState('Mario');
    const [age , setAge] = useState(25);
    const handleCick = () =>{
      setName('Luigi');
      setAge(30);
    }
    
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old </p>
            <button onClick= {handleCick}>Click me</button>
            
        </div>
     );
}
 
export default Home;