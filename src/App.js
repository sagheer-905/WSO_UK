import './App.css';
import Home from './Pages/Home';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Navbar from './Component/Home/Header/Navbar';
import Wishlist from './Pages/Wishlist';
import Aboutus from './Pages/Aboutus';
import Contact from './Pages/Contact';
import Career from './Pages/Career';
import Blog from './Pages/Blog';
import Faq from './Pages/Faq';
import Product from './Pages/Product';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import RetunPolicy from './Pages/RetunPolicy';
import DeliveryInformation from './Pages/DeliveryInformation';
import TermsCondition from './Pages/TermsCondition';
import TermsSevises from './Pages/TermsSevises';
import RefundPolicy from './Pages/RefundPolicy';
import Klarna from './Pages/Klarna';
import Giveaway from './Pages/Giveaway';
import Cartpage from './Pages/Cartpage';
import Checkoutpage from './Pages/Checkoutpage';
import Login from './Pages/Login';
import Registration from './Pages/Registration';
import Marketplace from './Pages/Marketplace';
import MarketpalcesallerList from './Pages/MarketpalcesallerList';
import Collection from './Pages/Collection';
import AffiliateProgram from './Pages/AffiliateProgram';
import AffiliateTool from './Pages/AffiliateTool';
import AffiliateComissions from './Pages/AffiliateComissions';
import AffiliateReporting from './Pages/AffiliateReporting';
import Affiliatecontact from './Pages/Affiliatecontact';



function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navbar/>}>
        <Route index element={<Home/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/aboutus' element={<Aboutus/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/careers' element={<Career/>}/>
        <Route path='/Blog' element={<Blog/>}/>
        <Route path='/Faq' element={<Faq/>}/>
        <Route path='/product/:id' element={<Product/>}/>
        <Route path='/privacypolicy' element={<PrivacyPolicy/>}/>
        <Route path='/retunspolicy' element={<RetunPolicy/>}/>
        <Route path='/deliveryinformation' element={<DeliveryInformation/>}/>
        <Route path='/termcondition' element={<TermsCondition/>}/>
        <Route path='/paylater' element={<Klarna/>}/>
        <Route path='/termservices' element={<TermsSevises/>}/>
        <Route path='/refund' element={<RefundPolicy/>}/>
        <Route path='/giveaway' element={<Giveaway/>}/>
        <Route path='/cartpage' element={<Cartpage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/registration' element={<Registration/>}/>
        <Route path='/sellerlist' element={<MarketpalcesallerList/>}/>
        <Route path='/collection/:id' element={<Collection/>}/>
        <Route path='*' element={<Home/>}/>
      </Route>
      <Route path='/checkout' element={<Checkoutpage/>}/>
      <Route path='/marketplace' element={<Marketplace/>}/>
      <Route path='/AffiliateProgram' element={<AffiliateProgram/>}/>
      <Route path='/AffiliateTool' element={<AffiliateTool/>}/>
      <Route path='/AffiliateComissions' element={<AffiliateComissions/>}/>
      <Route path='/AffiliateReporting' element={<AffiliateReporting/>}/>
      <Route path='/Affiliatecontact' element={<Affiliatecontact/>}/>
    </Routes>
    </BrowserRouter>

  );
}

export default App;
