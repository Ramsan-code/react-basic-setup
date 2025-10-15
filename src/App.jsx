import "./App.css";

function App() {
  const fname = "Ramsan";
   const lname = "Dota";
  const email = "Ramsan@gmail.com";
  const age = 23;
  const isPresent = true;

  return (
    <>
      <div>
        <h2>Name:{fname}{lname}</h2>
        <h2>Name with inisial : {lname.charAt().toLocaleUpperCase()}.{fname}</h2>
        <h2>Email:{email}</h2>
        <h2>Age:{age * 1}</h2>
        <h4>Status:{isPresent ? "present" : "absent"}</h4>
      </div>
    </>
  );
}

export default App;
