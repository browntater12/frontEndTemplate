/* eslint-disable no-lone-blocks */
import './App.css';
import Footer from "./Footer"
import NavBar from "./Navbar"

{/*
  Create new Button function
  props - link, value
*/}
function CreateButton(props) {
  return <a href={props.link}><button type="button" class="btn btn-primary">{props.value}</button></a>;
}

{/*
  Main App Functionality
*/}
function App() {
  return (
    <div className="App">
      <NavBar/>
      <h1>Hello World!</h1>
      <CreateButton value='Check In' link='/checkIn' />
      <CreateButton value='Check Out'/>
      <Footer/>
    </div>
  );
}

export default App;