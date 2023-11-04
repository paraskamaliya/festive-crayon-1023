import React from 'react'
import { Text } from "@chakra-ui/react";

const Home = () => {
  return (
    <section id='hero' style={{ marginTop: "2rem", height: "70vh", backgroundColor: "#91D9A8", fontFamily: "Nunito" }}>
      <h1 className='head-text'>Create great designs</h1>
      <Text>Turn ideas into outstanding designs with high-quality vectors, photos, videos, mockups, and more</Text>
    </section>
  )
}

export default Home