const Home = () => {
    const handleCick = (e) =>{
        console.log('hello' ,e);
    }
    const handleClickAgain = (name ,e) => {
        console.log('hello ' + name + e);
    }
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick= {handleCick}>Click me</button>
            <button onClick= { (e) => handleClickAgain('Mario',e) }>Click me again</button>
        </div>
     );
}
 
export default Home;