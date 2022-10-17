import React from 'react'
import NavbarComponent from "../Components/NavbarComponent"
import BackgroundImagesComponent from "../Components/HomeComponents/BackgroundImagesComponent"
import WelcomeTextComponent from "../Components/HomeComponents/WelcomeTextComponent"
import ParallaxComponent from "../Components/HomeComponents/ParallaxComponent"
import HireMeComponent from "../Components/HomeComponents/HireMeComponent"
import GalleryComponent from "../Components/HomeComponents/GalleryComponent"
import TestimonialComponent from "../Components/HomeComponents/TestimonialComponent"
import BlogComponent from "../Components/HomeComponents/BlogComponent"
import FormComponent from "../Components/HomeComponents/FormComponent"
import FooterComponent from "../Components/FooterComponent"




export default function HomePage() {
    return (
    <div>
        <NavbarComponent />
        <BackgroundImagesComponent />
        <WelcomeTextComponent />
        <ParallaxComponent />
        <HireMeComponent />
        <GalleryComponent />
        <TestimonialComponent />
        < BlogComponent/>
        < FormComponent />
        < FooterComponent />
    </div>
    )
}
