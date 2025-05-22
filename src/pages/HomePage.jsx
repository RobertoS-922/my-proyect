import HeaderComponent from "../components/HeaderComponent"

function HomePage() {
  const saySomething = () =>{
    console.log("Di Algo");
    alert("Ahora");
  }
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <div>HomePage</div>
      <hr />
      <button onClick={saySomething}>Pulsar Click</button>
    </>
    
  )
}

export default HomePage