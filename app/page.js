"use client";

import { useState } from "react";

import Navbar from "@/components/NavBar/Navbar";
import Footer from "@/components/Footer/Footer";
import Container from "@/components/Container/Container";
import SubContainer from "@/components/SubContainer/SubContainer";
import Card from "@/components/Card/Card";

import { handleCheckout } from "@/lib/handleCheckout";

import { CheckoutModal } from "@/modals/modal";

import Hero from "@/sections/Hero";
import Phone from "@/sections/Phone";
import About from "@/sections/About";
import Accessibility from "@/sections/Accessibility";
import Integrations from "@/sections/Integrations";
import PepTalking from "@/sections/PepTalking";

const Page = () => {
  const [open, setOpen] = useState(false);

  const toogleModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      <Container>
        <SubContainer>
          <Navbar toogleModal={toogleModal} />
          <Card>
            <Hero />
            <Phone />
            <About />
            <Accessibility />
            <div className="bg-black relative w-full">
              <Integrations />
            </div>
            <PepTalking />
            <div className="bg-black relative w-full">
              <Footer />
            </div>
          </Card>
        </SubContainer>
        <CheckoutModal
          open={open}
          closeModal={closeModal}
          handleCheckout={handleCheckout}
        />
      </Container>
    </>
  );
};

export default Page;
