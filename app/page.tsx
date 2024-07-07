"use client"

import { CarouselPlugin } from "@/components/carousel";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { motion } from 'framer-motion';
import CountMotion from "@/components/CountMotion";


export default function Home() {
  return (
    <main className="m-0 p-0 w-[100vw] h-screen flex flex-col justify-start items-center">
      <div className="w-full xl:h-[600px] lg:h-[600px] md:h-[600px] sm:h-[700px] h-[700px] flex justify-center items-center mt-10">
        <CarouselPlugin />
      </div>

      <div className="w-[full] h-[auto] flex flex-col justify-start items-center">
        <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex justify-center items-center flex-col">
          <h3 className="xl:text-3xl lg:text-3xl md:text=2xl sm:text-xl text-xl font-semibold">Our Clients</h3>
          <p className="xl:text-lg lg:text-lg md:text-lg sm:text-sm text-sm mt-2 px-5">We have been working with some Fortune 500+ clients</p>
        </motion.div>

        <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full h-[auto flex flex-row justify-around items-center flex-wrap mt-10">
          <span className="m-5 w-[150px] h-[150px] flex justify-center items-center animate-oscillate-y">
            <Image src={'/logo1.png'} alt="logo 1" width={48} height={48} />
          </span>

          <span className="m-5 w-[150px] h-[150px] flex justify-center items-center animate-oscillate-y">
            <Image src={'/logo2.png'} alt="logo 2" width={48} height={48} />
          </span>

          <span className="m-5 w-[150px] h-[150px] flex justify-center items-center animate-oscillate-y">
            <Image src={'/logo3.png'} alt="logo 3" width={48} height={48} />
          </span>

          <span className="m-5 w-[150px] h-[150px] flex justify-center items-center animate-oscillate-y">
            <Image src={'/logo4.png'} alt="logo 4" width={48} height={48} />
          </span>

          <span className="m-5 w-[150px] h-[150px] flex justify-center items-center animate-oscillate-y">
            <Image src={'/logo5.png'} alt="logo 5" width={48} height={48} />
          </span>

          <span className="m-5 w-[150px] h-[150px] flex justify-center items-center animate-oscillate-y">
            <Image src={'/logo6.png'} alt="logo 6" width={48} height={48} />
          </span>

          <span className="m-5 w-[150px] h-[150px] flex justify-center items-center animate-oscillate-y">
            <Image src={'/logo7.png'} alt="logo 7" width={48} height={48} />
          </span>
        </motion.div>
      </div>

      <div className="w-ful h-[auto] flex flex-col justify-start items-center">
        <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full h-[auto] flex justify-center items-center flex-col">
          <h3 className="xl:text-3xl lg:text-3xl md:text-2xl sm:text-xl text-xl my-1 font-semibold">Manage your entire community</h3>
          <h3 className="xl:text-3xl lg:text-3xl md:text-2xl sm:text-xl text-xl my-1 font-semibold">in a single system</h3>
          <p className="xl:text-lg lg:text-lg md:text-lg sm:text-sm text-sm my-1">Who is Nextcent suitable for?</p>
        </motion.div>

        <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full h-[auto] flex flex-row justify-center items-center flex-wrap">
          <div className="max-w-[300px] max-h-[300px] flex flex-col justify-center items-center mx-5 my-5">
            <span className="flex justify-center items-center w-full h-[100px]">
              <Image src={'/icon1.png'} alt="icon 1" width={65} height={56} />
            </span>
            <span className="flex justify-start items-center w-full h-[200px] flex-col">
              <h4 className="text-xl font-medium text-center">Membership</h4>
              <h4 className="text-xl font-medium text-center">Organisations</h4>
              <p className="text-sm font-normal mt-2 text-center">Our membership management software provides full automation of membership renewals and payments</p>
            </span>
          </div>

          <div className="max-w-[300px] max-h-[300px] flex flex-col justify-center items-center mx-5 my-5">
            <span className="flex justify-center items-center w-full h-[100px]">
              <Image src={'/icon2.png'} alt="icon 2" width={65} height={56} />
            </span>
            <span className="flex justify-start items-center w-full h-[200px] flex-col">
              <h4 className="text-xl font-medium text-center">National</h4>
              <h4 className="text-xl font-medium text-center">Associations</h4>
              <p className="text-sm font-normal mt-2 text-center">Our membership management software provides full automation of membership renewals and payments</p>
            </span>
          </div>

          <div className="max-w-[300px] max-h-[300px] flex flex-col justify-center items-center mx-5 my-5">
            <span className="flex justify-center items-center w-full h-[100px]">
              <Image src={'/icon3.png'} alt="icon 3" width={65} height={56} />
            </span>
            <span className="flex justify-start items-center w-full h-[200px] flex-col">
              <h4 className="text-xl font-medium text-center">Clubs And</h4>
              <h4 className="text-xl font-medium text-center">Groups</h4>
              <p className="text-sm font-normal mt-2 text-center">Our membership management software provides full automation of membership renewals and payments</p>
            </span>
          </div>
        </motion.div>
      </div>

      <div className="w-full h-[auto] flex xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col">
        <motion.div 
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full w-full h-[auto] flex justify-center items-center">
          <Image src={'/rafiki.png'} alt="Rafiki" width={450} height={320} />
        </motion.div>
        <motion.div 
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full w-full h-[auto] flex justify-start items-start flex-col px-10">
          <h3 className="xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-lg font-semibold py-1">The unseen of spending three</h3>
          <h3 className="xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-lg font-semibold py-1">years at Pixelgrade</h3>
          <p className="text-base py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
          <Button className="bg-green-500 text-white text-base font-normal py-3">Learn More</Button>
        </motion.div>
      </div>

      <div className="w-full h-[auto] flex xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col mt-24 bg-blue-50 py-10">
        <motion.div 
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full w-full h-[auto] flex justify-center xl:items-start lg:items-start md:items-start sm:items-center items-center flex-col px-10">
          <h3 className="xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-lg font-semibold xl:ml-24 lg:ml-24 md:ml-24 sm:ml-0 ml-0 py-1">Helping a local</h3>
          <h3 className="xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-lg font-semibold xl:ml-24 lg:ml-24 md:ml-24 sm:ml-0 ml-0 text-green-500 py-1">business reinvent itself</h3>
          <p className="xl:text-base lg:text-base md:text-base sm:text-sm text-sm font-normal xl:ml-24 lg:ml-24 md:ml-24 sm:ml-0 ml-0 py-2">We reached here with our hard work and dedication</p>
        </motion.div>

        <motion.div 
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full w-full h-[auto] flex justify-center items-center flex-col px-10">
          <div className="w-full h-[auto] flex xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col justify-center items-center mt-5">
            <div className="w-[260px] h-[auto] flex flex-row justify-center items-center">
              <span className="w-[50px] h-[50px] flex justify-center items-center">
                <Image src={'/icon5.png'} alt="icon 5" width={48} height={48} />
              </span>
              <span className="xl:w-[150px] lg:w-[150px] md:w-[150px] sm:w-[100px] w-[100px] h-[auto]  flex flex-col justify-center items-center mx-3">
                <div className="w-full h-[36px] flex justify-start items-center text-xl font-semibold"><CountMotion value={2245341} speed={1}/></div>
                <div className="w-full h-[24px] flex justify-start items-center text-xl"><p className="text-sm">Members</p></div>
              </span>
            </div>
            <div className="w-[260px] h-[auto]  flex flex-row justify-center items-center">
              <span className="w-[50px] h-[50px] flex justify-center items-center">
                <Image src={'/icon6.png'} alt="icon 6" width={48} height={48} />
              </span>
              <span className="xl:w-[150px] lg:w-[150px] md:w-[150px]  sm:w-[100px] w-[100px] h-[auto]  flex flex-col justify-center items-center mx-3">
                <div className="w-full h-[36px] flex justify-start items-center text-xl font-semibold"><CountMotion value={46328} speed={1}/></div>
                <div className="w-full h-[24px] flex justify-start items-center text-xl"><p className="text-sm">Clubs</p></div>
              </span>
            </div>
          </div>

          <div className="w-full h-[auto] flex xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col justify-center items-center xl:flex lg:flex md:flex-none mt-5">
            <div className="w-[260px] h-[auto]  flex flex-row justify-center items-center">
              <span className="w-[50px] h-[50px] flex justify-center items-center">
                <Image src={'/icon7.png'} alt="icon 7" width={48} height={48} />
              </span>
              <span className="xl:w-[150px] lg:w-[150px] md:w-[150px] sm:w-[100px] w-[100px] h-[auto]  flex flex-col justify-center items-center mx-3">
                <div className="w-full h-[36px] flex justify-start items-center text-xl font-semibold"><CountMotion value={828867} speed={1}/></div>
                <div className="w-full h-[24px] flex justify-start items-center text-xl"><p className="text-sm">Event Bookings</p></div>
              </span>
            </div>
            <div className="w-[260px] h-[auto]  flex flex-row justify-center items-center">
              <span className="w-[50px] h-[50px] flex justify-center items-center">
                <Image src={'/icon8.png'} alt="icon 8" width={48} height={48} />
              </span>
              <span className="xl:w-[150px] lg:w-[150px] md:w-[150px] sm:w-[100px] w-[100px] h-[auto] flex flex-col justify-center items-center mx-3">
                <div className="w-full h-[36px] flex justify-start items-center text-xl font-semibold"><CountMotion value={1926436} speed={1}/></div>
                <div className="w-full h-[24px] flex justify-start items-center text-xl"><p className="text-sm">Payments</p></div>
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="w-full h-[auto] flex xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col mt-20">
        <motion.div 
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full w-full h-[auto] flex justify-center items-center">
          <Image src={'/pana.png'} alt="pana" width={442} height={443} />
        </motion.div>
        <motion.div 
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full w-full h-[auto] flex flex-col justify-center items-start my-5">
          <h3 className="w-full xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-lg font-semibold my-2 px-5">How to design your site footer like we did</h3>
          <p className="w-full text-sm font-normal px-5"> a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
          <Button className="bg-green-500 text-white text-base font-normal my-2 mx-5">Learn More</Button>
        </motion.div>
      </div>

      <div className="w-full h-[auto] flex xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col mt-20">
        <motion.div 
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full w-full h-[auto] flex justify-center items-center">
          <Image src={'/image9.png'} alt="pana" width={326} height={326} />
        </motion.div>
        <motion.div 
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full w-full h-[auto] flex flex-col justify-center items-start">
          <div className="flex justify-center items-center">
            <p className="text-sm font-normal px-5">Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
          </div>
          <div className="flex flex-row justify-center items-center my-5">
            <span className="flex justify-center items-center mx-2 my-3">
              <span className="flex justify-center items-center mx-2">
                <Image src={'/logo1.png'} alt="logo 1" width={48} height={48} />
              </span>

              <span className="flex justify-center items-center mx-2">
                <Image src={'/logo2.png'} alt="logo 2" width={48} height={48} />
              </span>

              <span className="flex justify-center items-center mx-2">
                <Image src={'/logo3.png'} alt="logo 3" width={48} height={48} />
              </span>

              <span className="flex justify-center items-center mx-2">
                <Image src={'/logo4.png'} alt="logo 4" width={48} height={48} />
              </span>

              <span className="flex justify-center items-center mx-2">
                <Image src={'/logo5.png'} alt="logo 5" width={48} height={48} />
              </span>

              <span className="flex justify-center items-center mx-2">
                <Image src={'/logo6.png'} alt="logo 6" width={48} height={48} />
              </span>

              <span className="flex justify-center items-center mx-2">
                <Image src={'/logo7.png'} alt="logo 7" width={48} height={48} />
              </span>
            </span>
            <span className="flex justify-center items-center mx-2">
            <p className="text-sm font-normal text-green-400">Meet all customers</p><MdOutlineArrowRightAlt className="mx-2 text-green-400"/>
            </span>
          </div>
        </motion.div>
      </div>

      <div className="w-full h-[auto] flex-col mt-20 flex justify-center items-center">
        <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full h-[auto] flex flex-col justify-center items-center">
          <h3 className="xl:text-3xl lg:text-2xl md:text-xl sm:text-xl text-xl font-semibold my-2">Caring is the new marketing</h3>
          <p className="w-[500px] text-base font-normal px-5 text-center">The Nexcent blog is the best place to read about the latest membership insights, trends and more. See whose joining the community, read about how our community are increasing their membership income and lots more.​</p>
        </motion.div>
        <div className="w-[full h-[auto] flex flex-row justify-center items-center flex-wrap my-5">
          <motion.div 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-[380px] h-[auto] flex flex-col justify-center items-center mx-5 my-5">
            <div className="flex justify-center items-center">
              <Image src={'/image18.png'} alt="image 18" width={368} height={286}/>
            </div>
            <div className="w-[300px] h-[100px] bg-white relative -top-14 right-0 z-10 rounded-sm shadow-lg flex flex-col justify-center items-center">
              <p className="text-sm font-normal w-[full] text-center">Creating Streamlined Safeguarding Processes with OneRen</p>
              <span className="flex flex-row justify-center items-center my-2"><p className="text-sm font-normal text-green-400">Read More</p><MdOutlineArrowRightAlt className="mx-2 text-green-400"/></span>
            </div>
          </motion.div>

          <motion.div 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-[380px] h-[auto] flex flex-col justify-center items-center mx-5 my-5">
            <div className="flex justify-center items-center">
              <Image src={'/image19.png'} alt="image 19" width={368} height={286}/>
            </div>
            <div className="w-[300px] h-[100px] bg-white relative -top-14 right-0 z-10 rounded-sm shadow-lg flex flex-col justify-center items-center">
              <p className="text-sm font-normal w-[full] text-center">What are your safeguarding responsibilities and how can you manage them?</p>
              <span className="flex flex-row justify-center items-center my-2"><p className="text-sm font-normal text-green-400">Read More</p><MdOutlineArrowRightAlt className="mx-2 text-green-400"/></span>
            </div>
          </motion.div>

          <motion.div 
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-[380px] h-[auto] flex flex-col justify-center items-center mx-5 my-5">
            <div className="flex justify-center items-center">
              <Image src={'/image20.png'} alt="image 20" width={368} height={286}/>
            </div>
            <div className="w-[300px] h-[100px] bg-white relative -top-14 right-0 z-10 rounded-sm shadow-lg flex flex-col justify-center items-center">
              <p className="text-sm font-normal w-[full] text-center">Revamping the Membership Model with Triathlon Australia</p>
              <span className="flex flex-row justify-center items-center my-2"><p className="text-sm font-normal text-green-400">Read More</p><MdOutlineArrowRightAlt className="mx-2 text-green-400"/></span>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="w-full h-[auto] flex flex-col mt-20 justify-center items-center">
        <h3 className="xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-lf font-semibold my-1">Pellentesque suscipit</h3>
        <h3 className="xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-lf font-semibold my-1">fringilla libero eu.</h3>
        <Button className="bg-green-500 my-5"><span className="flex flex-row justify-center items-center bg-green-500"><p className="text-sm font-normal text-white">Get a Demo</p><MdOutlineArrowRightAlt className="mx-2 text-white"/></span></Button>
      </motion.div>
      <Footer/>

    </main>
  );
}
