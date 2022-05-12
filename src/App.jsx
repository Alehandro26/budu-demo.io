import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Loading from "./components/Loading";
import Main from "./components/Main";
import Price from "./components/Price";
import Services from "./components/Services";
import Slide from "./components/Slide";

function App() {
  return (
    <>
      <Header></Header>
      <Main></Main>
      <Slide></Slide>
      <Services></Services>
      <Price></Price>
      <Loading></Loading>
      <Footer></Footer>
    </>
  );
}

export default App;
