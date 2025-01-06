import './App.css';

function App() {
    return (
      <div className="container"> 
      <img src="https://cyberchimps.com/wp-content/uploads/2019/03/best-blogging-platforms.jpg" alt="description" />
        <div className="form"> 
            <form>
              <h1>Create an Account</h1>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
                
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
                
                <button type="submit">Submit</button> <br/>
                <p>already have an account?<a href=""> login</a></p>
            </form> 
        </div>
        </div>
    );
}

export default App;
