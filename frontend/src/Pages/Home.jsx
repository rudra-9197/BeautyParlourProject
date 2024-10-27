import About from "../Components/About";
import Service from "../Components/Service";
import RowBar from "../Components/Rowbar";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div className="w-screen h-screen p-0 b-0 font-">
      <div>
        <Nav></Nav>
      </div>
      <div>
        <RowBar></RowBar>
      </div>

      <div>
        <About></About>
      </div>

      <div className="shadow-lg ">
        <Service></Service>
      </div>

      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
