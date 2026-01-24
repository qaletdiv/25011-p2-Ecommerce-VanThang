import BodyServer from "@/components/BodyClient";
import Container from "@/components/Container";
import HeaderBanner from "@/components/HeaderBanner";
import HomeCategories from "@/components/HomeCategories";
import ShopByBrands from "@/components/ShopByBrands";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <Container  >
      <HeaderBanner/>
      <div className="py-10">
      <BodyServer/>
      </div>
      <HomeCategories />
      <ShopByBrands/>
    </Container>
  );
}
