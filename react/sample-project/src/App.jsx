import Navbar from "./Components/Navbar"
// import './assets/css/style.css'
const App=() =>{
  const data={
    appname:"Hello"
  }
  const logodata = "mylogo"
  const test="Hello World"
  return(
    <>
    <p className="text-yellow-500">{test}</p>
    <Navbar appdata={data} logo={logodata}/>
    </>
  )
}
export default App