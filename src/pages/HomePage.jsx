import HeaderComponent from "../components/HeaderComponent";
import './HomePage.css';

function HomePage() {
  const saySomething = () => {
    console.log("Di Algo");
    alert("Ahora");
  };

  return (
    <>
      <HeaderComponent />
      <div className="homePage">
        <h2>HomePage</h2>
        <hr />
        <button onClick={saySomething}>Pulsar Click</button>
      </div>
    </>
  );
}

export default HomePage;
