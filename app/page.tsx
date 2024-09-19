import Colab from "@/components/Colab";
import Contact from "@/components/Contact";
import Container from "@/components/Container";
import Edge from "@/components/Edge/Edge";
import Product from "@/components/Product";
import UpBlock from "@/components/UpBlock";

export default function Home() {
  return (
    <>
      <UpBlock />
      <Container className="xl:py-[140px] py-[60px] xl:space-y-[140px] space-y-[60px]">
        <Product />
        <Edge />
        <Colab />
        <Contact />
      </Container>
    </>
  );
}
