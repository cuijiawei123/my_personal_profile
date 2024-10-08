import Experties from "./components/Experties/Experties";
import Header from "./components/Header/Header";
import css from "./styles/app.module.scss"
import Hero from "./components/Hero/Hero";
import Work from "./components/Work/Work";
import Portfolio from './components/Portfolio/Portfolio';
import People from "./components/People/People";
import Footer from "./components/Footer/Footer";
import { useTranslation } from 'react-i18next';


const App = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  //don't forget to add font link in index.html
  return <div className={`bg-primary ${css.container}`}>
    <Header/>
    <Hero/>
    <Experties/>
    <Work/>
    <Portfolio/>
    <People/>
    <Footer/>
  </div>
};

export default App;
