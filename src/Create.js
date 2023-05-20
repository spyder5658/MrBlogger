import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [isPending,setIsPending]=useState(false);
  const history = useHistory()
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true)
    const blog = { title, body, author };
    setAuthor("");
    setBody("");
    setTitle("");
    fetch('http://localhost:8000/blogs',{
        method:'Post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(blog)
    }).then(()=>{
        console.log('blog added');
        setIsPending(false)
        history.push('/')
    })
  };
  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label> Blog Body</label>
        <textarea
          type="text"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <label>Blog Author:</label>
        <input
          type="text"
          required
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        />
        {!isPending&&<button>Add Blog</button>}
        {isPending && <button disabled>Adding..</button>}
      </form>
    </div>
  );
};

export default Create;
