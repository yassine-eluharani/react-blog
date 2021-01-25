import { useState , useEffect } from "react";
import BlogList from "./BlogList";


const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPendig, setIsPending] = useState(true);
  const [error , setError] = useState(null);

  //const [name,setName] = useState('Mario');

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  useEffect(() => {
        setTimeout(() => {
          fetch('http://localhost:8000/blogs')
        .then(res => {
          if(!res.ok){
            throw Error('Could not fetch the data');
          }
            return res.json()
        })
        .then((data) => {  
          console.log(data)      
          setBlogs(data);
          setIsPending(false);
          setError(null);
        })
        .catch(err => {
          setError(err.message);
          setIsPending(false);
        })
      },1000)
  }, []);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPendig && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />}
      {/* <BlogList blogs={blogs.filter((blog)=> blog.author === 'mario')} title="Mario's blogs" /> */}
      {/* <button onClick= {() => setName('Luigi')} >Change Name</button>
      <p>{name}</p> */}
    </div>
  );
}
 
export default Home;



