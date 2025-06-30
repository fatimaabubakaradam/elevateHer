import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Signmentor from "./Signmentor";
import SignEntrepreneur from "./Signenterprenuer";
import SignFunding from "./Signfunding";
import MentorSignup from "./MentorSignup";
import EntrepreneurSignup from "./EntrepreneurSignup"
import FundingSignup from "./FundingSignup";
import GrantsPage from "./GrantsPage";
import ConnectMentorPage from "./ConnectMentorPage";
import MarketplaceSellPage from "./MarketplaceSellPage"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin-mentor" element={<Signmentor />} />
        <Route path="/signin-entrepreneur" element={<SignEntrepreneur />} />
        <Route path="/sigin-funding" element={<SignFunding />} />
        <Route path="signup-mentor" element={<MentorSignup />} />
        <Route path="/signup-enterprenuer" element={<EntrepreneurSignup />} />
        <Route path="/funding-signup" element={<FundingSignup />} />
        <Route path="/grant-page" element={<GrantsPage />} />
        <Route path="/connect-mentor" element={<ConnectMentorPage />} />
        <Route path="/Marketplacesellpage" element={<MarketplaceSellPage />} />
      </Routes>
    </>
  );
}

export default App;
