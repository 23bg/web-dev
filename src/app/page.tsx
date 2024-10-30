import Image from "next/image";
import Navbar from "./component/navnar";
import Footer from "./component/footer";
import Homme from "./component/home";
import Courds from "./component/courds";

export default function Home() {
  return <div >
    <div className="container">
    <Navbar/>
    </div>
    <div className="">
      <Homme/>
    </div>
    <div>
      <Courds/>
    </div>
    <div className="  bottom-0 w-full">
    <Footer/>
    </div>
  
  
  </div>
}
