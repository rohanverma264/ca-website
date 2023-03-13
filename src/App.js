import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import Navbar from './components/navbar';
import AboutPage from "./pages/about";
import HomePage from "./pages/home";
import ServicesPage from "./pages/services";
import './App.css';
import ContactPage from "./pages/contact/contact";
import GST from "./pages/gst";
import FinancialServices from "./pages/financialServices";
import Tax from "./pages/tax";
import CompanyFormation from "./pages/companyFormation";
import CMA from "./pages/cma";
import Printing from "./pages/printing";
import ROC from "./pages/roc";
import TradeLicense from "./pages/tradeLicense";
import MSME from "./pages/msme";
import IEC from "./pages/iec";

function App() {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/gst" element={<GST />} />
        <Route path="/services/company-formation" element={<CompanyFormation />} />
        <Route path="/services/financial-services" element={<FinancialServices />} />
        <Route path="/services/accounting" element={<Tax />} />
        <Route path="/services/cma-data" element={<CMA />} />
        <Route path="/services/printing" element={<Printing />} />
        <Route path="/services/roc" element={<ROC />} />
        <Route path="/services/trade-license" element={<TradeLicense />} />
        <Route path="/services/msme" element={<MSME />} />
        <Route path="/services/iec" element={<IEC />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
