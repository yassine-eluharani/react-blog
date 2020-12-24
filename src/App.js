import './App.css';

function App() {
  const title = "Welcome to the blog";
  const likes = 1;
  const link = "http://www.google.com"


  return (
    <div className="App">
     <div className="content">
       <h1>
         { title }       
       </h1>
       <p>Likes { likes } times</p>
         <p>{ 10 }</p>
         <p>{"Hello world"}</p>
         <p>{ [1,54,3] }</p>
         <p>{ Math.random() * 10 }</p>
         <a href={link}>Google sites</a>
     </div>
    </div>
  );
}

export default App;
