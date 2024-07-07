"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "./ui/button"
import Image from "next/image"

const slides = [
  {
    headOne: "Lessons and insights",
    headTwo: "from 8 years",
    subHead: "Where to grow your business as a photographer: site or social media?",
    image: "/Illustration.png",
    button: "Register"
  },

  {
    headOne: "Our Vision",
    headTwo: "from 8 years",
    subHead: "Help every phototgrapher to start their journey",
    image: "/photographer.jpg",
    button: "Read more"
  },

  {
    headOne: "Our Services",
    headTwo: "from 8 years",
    subHead: "Build awesome websites for out client with excellent user experience",
    image: "/website.png",
    button: "Enquire"
  },
]

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="xl:w-[90%] lg:w-[90%] md:w-[90%] sm:w-[80%] w-[70%] xl:h-[600px] lg:h-[600px] md:h-[600px] sm:h-[700px] h-[700px]"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index} className="xl:w-[90%] lg:w-[90%] md:w-[90%] sm:w-[80%] w-[70%] xl:h-[600px] lg:h-[600px] md:h-[600px] sm:h-[700px] h-[700px]">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-6 shadow-md">
                  <div className="w-full h-full flex xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col justify-center items-center">
                    <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full w-full xl:h-full lg:h-full md:h-full sm:h-[350px] h-[250px] flex flex-col justify-center items-center xl:order-1 lg:order-1 md:order-1 sm:order-2 order-2">
                      <span className="w-full xl:h-[200px] lg:h-[200px] md:h-[200px] sm:h-[auto] h-[auto] flex xl:justify-end lg:justify-end md:justify-end sm:justify-start justify-start items-start flex-col sm:mt-4 mt-4">
                        <h2 className="xl:text-3xl lg:text-3xl md:text-2xl sm:text-xl text-xl font-semibold my-2 xl:ml-20 lg:ml-20 md:ml-20 sm:ml-0 ml-0">{slide.headOne}</h2>
                        <h2 className="xl:text-3xl lg:text-3xl md:text-2xl sm:text-xl text-xl font-semibold my-2 xl:ml-20 lg:ml-20 md:ml-20 sm:ml-0 ml-0 text-green-500">{slide.headTwo}</h2>
                      </span>
                      <span className="w-full xl:h-[200px] lg:h-[200px] md:h-[200px] sm:h-[auto] h-[auto] flex justify-start items-start flex-col">
                      <p className="xl:text-lg lg:text-lg md:text-lg sm:text-base text-base font-normal my-2 xl:ml-20 lg:ml-20 md:ml-20 sm:ml-0 ml-0">{slide.subHead}</p>
                      <Button className="text-sm font-normal my-2 xl:ml-20 lg:ml-20 md:ml-20 sm:ml-0 ml-0 bg-green-500 text-white">{slide.button}</Button>
                      </span>
                    </div>
                    <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full w-full xl:h-full lg:h-full md:h-full sm:h-[350px] h-[200px] flex justify-center items-center xl:order-2 lg:order-2 md:order-2 sm:order-1 order-1 p-5 xl:mt-0 lg:mt-0 md:mt-4 sm:mt-2 mt-2">
                      <Image src={`${slide.image}`} alt="slideImage" width={400} height={400}/>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
