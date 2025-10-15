import "./App.css";

function Header() {
  return (
    <>
      <div className="head">
        <h1 > Head-React</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit obcaecati iste provident, quidem distinctio veritatis accusamus magni soluta dolor. Maxime rem quis quae impedit rerum recusandae modi, iure officiis suscipit!</p>
      </div>
    </>
  );
}
function Welcome() {
  return (
    <>
      <div className="welcome">
        <h1 > Welcome-React</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor voluptatibus autem perspiciatis, accusantium voluptatem qui cum, atque quidem voluptates quae, est facere ipsum illum natus similique exercitationem perferendis. Et, culpa.</p>
      </div>
    </>
  );
}
function Footer() {
  return (
    <>
      <div className="footer">
        <h1 > Footer-React </h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, voluptas! Amet impedit temporibus dolores accusamus necessitatibus quidem sunt modi id laboriosam, voluptatum aliquid est totam maxime tempore quam velit quisquam.</p>
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <div>
         <Header />
        <Welcome />
        <Footer />
       
      </div>
    </>
  );
}

export default App;
