import BodyServer from "@/components/BodyServer";
import Container from "@/components/Container";
import HeaderBanner from "@/components/HeaderBanner";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <HeaderBanner/>
      <BodyServer/>
    </Container>
  );
}
