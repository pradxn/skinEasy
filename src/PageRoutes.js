import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import App from './App';
import ComingSoon from './components/ComingSoon.js';
import SebaTest from './components/SebaTest.js';
import PricingTable from './components/Pages/PricingTable.js';
import LoginPage from './components/Pages/LoginPage.js';
import AboutUsPage from './components/Pages/AboutUsPage.js';

import Cleanser from './components/Elements/Cleanser.js';
import ProductPage from './components/Elements/ProductPage.js';

const LandingPage = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} />

                <Route path="/scalp" element={<ComingSoon />} />
                <Route path="/hair" element={<ComingSoon />} />
                <Route path="/face" element={<ComingSoon />} />
                <Route path="/body" element={<ComingSoon />} />
                <Route path="/intimate" element={<ComingSoon />} />
                <Route path="/makeup" element={<ComingSoon />} />
                <Route path="/services" element={<ComingSoon />} />

                <Route path="/account" element={<LoginPage />} />
                <Route path="/forgot-password" element={<ComingSoon />} />

                <Route path="/analyze" element={<SebaTest />} />

                <Route path="/search" element={<ComingSoon />} />

                <Route path="scalp/balanced" element={<ComingSoon />} />
                <Route path="scalp/combination" element={<ComingSoon />} />
                <Route path="scalp/dry" element={<ComingSoon />} />
                <Route path="scalp/oily" element={<ComingSoon />} />

                <Route path="hair/coily" element={<ComingSoon />} />
                <Route path="hair/curly" element={<ComingSoon />} />
                <Route path="hair/straight" element={<ComingSoon />} />
                <Route path="hair/wavey" element={<ComingSoon />} />

                <Route path="face/balanced" element={<ComingSoon />} />
                <Route path="face/combination" element={<ComingSoon />} />
                <Route path="face/dry" element={<ComingSoon />} />
                <Route path="face/normal" element={<ComingSoon />} />
                <Route path="face/oily" element={<ComingSoon />} />
                
                <Route path="body/combination" element={<ComingSoon />} />
                <Route path="body/dry" element={<ComingSoon />} />
                <Route path="body/normal" element={<ComingSoon />} />
                <Route path="body/oily" element={<ComingSoon />} />
                <Route path="body/sensitive" element={<ComingSoon />} />

                <Route path="intimate/armpits" element={<ComingSoon />} />
                <Route path="intimate/genitals" element={<ComingSoon />} />
                <Route path="intimate/glutes" element={<ComingSoon />} />
                <Route path="intimate/innerglutes" element={<ComingSoon />} />
                <Route path="intimate/innerthighs" element={<ComingSoon />} />

                <Route path="/cleanser" element={<Cleanser />} />
                <Route path="/toner" element={<ComingSoon />} />
                <Route path="/moisturizer" element={<ComingSoon />} />
                <Route path="/serum" element={<ComingSoon />} />
                <Route path="/spf" element={<ComingSoon />} />
                <Route path="/lip-balm" element={<ComingSoon />} />
                <Route path="/body-wash" element={<ComingSoon />} />
                <Route path="/shampoo" element={<ComingSoon />} />
                <Route path="/conditioner" element={<ComingSoon />} />

                <Route path="/about" element={<AboutUsPage />} />
                <Route path="/grading-method" element={<ComingSoon />} />
                <Route path="/barcode" element={<ComingSoon />} />
                <Route path="/consult" element={<ComingSoon />} />
                <Route path="/home-consult" element={<ComingSoon />} />
                <Route path="/shop" element={<ComingSoon />} />
                <Route path="/api-ref" element={<PricingTable />} />
                <Route path="/business" element={<ComingSoon />} />
                <Route path="/blog" element={<ComingSoon />} />
                <Route path="/sitemap" element={<ComingSoon />} />

                <Route path="/legal" element={<ComingSoon />} />
                <Route path="/privacy" element={<ComingSoon />} />

                <Route path="/cetaphil-daily-cleanser" element={<ProductPage />} />
                <Route path="/orders" element={<ComingSoon />} />
                <Route path="/cart" element={<ComingSoon />} />
            </Routes>
        </Router>
    )
}

export default LandingPage
