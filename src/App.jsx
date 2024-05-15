import './style.css'

import Header from "./components/Header";
import Intro from "./sections/Intro";
import Section2 from "./sections/Section-2"
import Section3 from "./sections/Section-3"
import Footer from "./components/Footer"

const App = () => {
  return (
  <>
    <Header/>
    <main>
    <Intro/>
    <Section2/>
    <Section3/>
    </main>
    <Footer/>
    </>
  );
};

export default App;