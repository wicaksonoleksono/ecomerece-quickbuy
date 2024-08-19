import React from "react";
import LayoutNoSearch from "@/components/LayoutComponent/LayoutNoSearch";
import SellerPromotionInput from "@/components/PromotionComponent/SellerPromotionInput"; 

const Index = () => {
  return (
    <LayoutNoSearch className="promotion-page bg-white">
      <SellerPromotionInput />
    </LayoutNoSearch>
  );
};

export default Index;
