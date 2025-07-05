import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
// Add your imports here
import Homepage from "pages/homepage";
import BrandDesignerStories from "pages/brand-designer-stories";
import IndividualProductExperience from "pages/individual-product-experience";
import AccountStyleProfile from "pages/account-style-profile";
import CommunityStyleGallery from "pages/community-style-gallery";
import NotFound from "pages/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your routes here */}
        <Route path="/" element={<Homepage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/brand-designer-stories" element={<BrandDesignerStories />} />
        <Route path="/individual-product-experience" element={<IndividualProductExperience />} />
        <Route path="/account-style-profile" element={<AccountStyleProfile />} />
        <Route path="/community-style-gallery" element={<CommunityStyleGallery />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;