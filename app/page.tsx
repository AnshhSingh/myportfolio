
import {ThemeSwitcher} from "../components/ui/ThemeSwitcher"
import { useEffect } from "react"
import Link from "next/link"
import { CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import Image from 'next/image'
// import {NavigationIcon,Node,TypeIcon,ComponentIcon,WindIcon,Database} from ""
import * as icon from '../public/icon';
export default function mainpage() {

  
  return (

    <div className="w-full">
      <ThemeSwitcher></ThemeSwitcher>
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"></link>
   
   

  
      <section className="w-full pt-12 md:pt-24 lg:pt-32">
        <div className="container space-y-10 xl:space-y-16">
          
          <div className="grid gap-4 md:gap-16">
            
            <div className="flex flex-col items-start space-y-4">
            
              <div className="space-y-2">
              
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Portfolio.
                </h1>
               
              
              
                <p className="text-gray-500 dark:text-gray-400  "></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      <section className="w-full py-12 lg:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <Image
              alt="Hero"
              className="mx-auto overflow-hidden rounded-xl object-bottom  "
              height="550"
              src="/me.jpeg"
              width="400"
              unoptimized/>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl">Hi, I’m Ansh</h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                A passionate developer with experience in working with MERN stack, ExpressJS, nextjs, SQL and  Linux
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md border  border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50  dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  href="/contact"
                >
                  Contact
                </Link>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md border  border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800  dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  href="#" target="_blank"
                >
                  Download CV
                </Link>
              </div>
              
             
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 lg:py-16">
        <div className="container space-y-12">
          <div className="flex flex-col gap-2">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">My Projects</h2>
              <p className="text-gray-500 dark:text-gray-400">
                A collection of my work that showcases my skills and creativity.
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader className="flex items-start gap-4 p-4">
                <Image
                  alt="Profile"
                  className="rounded-full overflow-hidden"
                  height="40"
                  src="/project1.jpg"
                  style={{
                    aspectRatio: "40/40",
                    objectFit: "cover",
                  }}
                  width="40"
                />
                <div className="flex-1">
                  <h3 className="font-bold">microcontrollerbench</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                  Benchmark Arduino boards and determine performance using a score
                  </p>
                </div>
              </CardHeader>
              <CardContent className="grid items-center p-4">
                <Image
                  alt="Project One"
                  className="aspect-[2/1] object-cover rounded-lg border"
                  height="100"
                  src="/project1.jpg"
                  width="200"
                />
              </CardContent>
              <CardFooter className="flex p-4 justify-end">
                <Link
                  className="inline-flex h-6 items-center rounded-md border  border-gray-200 bg-white px-4 text-xs font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800  dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  href="https://github.com/AnshhSingh/microcontrollerbench" target="_blank"
                >
                  View Project
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="flex items-start gap-4 p-4">
                <Image
                  alt="Profile"
                  className="rounded-full overflow-hidden"
                  height="40"
                  src="/project2.jpg"
                  style={{
                    aspectRatio: "40/40",
                    objectFit: "cover",
                  }}
                  width="40"
                />
                <div className="flex-1">
                  <h3 className="font-bold">Votewiki</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    A decentralised voting app powered by blockchain
                  </p>
                </div>
              </CardHeader>
              <CardContent className="grid items-center p-4">
                <Image
                  alt="Project Two"
                  className="aspect-[2/1] object-cover rounded-lg border"
                  height="100"
                  src="/project2.jpg"
                  width="200"
                />
              </CardContent>
              <CardFooter className="flex p-4 justify-end">
                <Link
                  className="inline-flex h-6 items-center rounded-md border border-gray-200 bg-white px-4 text-xs font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  href="https://github.com/AnshhSingh/votewiki" target="_blank"
                >
                  View Project
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="flex items-start gap-4 p-4">
                <Image
                  alt="Profile"
                  className="rounded-full overflow-hidden"
                  height="40"
                  src="/project3.png"
                  style={{
                    aspectRatio: "40/40",
                    objectFit: "cover",
                  }}
                  width="40"
                />
                <div className="flex-1">
                  <h3 className="font-bold">Ecom</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    An ecom wbesite built using react with admin panel
                  </p>
                </div>
              </CardHeader>
              <CardContent className="grid items-center p-4">
                <Image
                  alt="Project Three"
                  className="aspect-[2/1] object-cover rounded-lg border"
                  height="100"
                  src="/project3.png"
                  width="200"
                />
              </CardContent>
              <CardFooter className="flex p-4 justify-end">
                <Link
                  className="inline-flex h-6 items-center rounded-md border border-gray-200  bg-white px-4 text-xs font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50  dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  href="https://github.com/AnshhSingh/Ecom" target="_blank"
                >
                  View Project
                </Link>
              </CardFooter>
            </Card>
            <Link  className=" rounded-md   border-gray-200 bg-white px-4 text-xs font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800  dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                 
                 href="#" target="_blank" >
                  
            <Card>
              <CardHeader className="flex items-center gap-4 p-40">
                <div className="flex-1">
                  <h1 className="font-bold text-5xl">See More..</h1>
                </div>
              </CardHeader>
            </Card>
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full py-12 lg:py-16">
        <div className="container space-y-12">
          <div className="flex flex-col gap-2">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">My Skills</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Here are some of the skills and technologies I work with.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
            
              <div className="flex items-center space-x-2">
                <icon.ComponentIcon className="w-5 h-5" />
                <span className="font-medium">React</span>
              </div>
              <div className="flex items-center space-x-2">
                <icon.TypeIcon className="w-5 h-5" />
                <span className="font-medium">TypeScript</span>
              </div>
              <div className="flex items-center space-x-2">
                <icon.WindIcon className="w-5 h-5" />
                <span className="font-medium">Tailwind CSS</span>
              </div>
              <div className="flex items-center space-x-2">
                <icon.NavigationIcon className="w-5 h-5" />
                <span className="font-medium">Next.js</span>
              </div>
              <div className="flex items-center space-x-2">
                <icon.Node className="w-5 h-5" />
                <span className="font-medium">NodeJS</span>
              </div>
              <div className="flex items-center space-x-2">
                <icon.Database className="w-5 h-5" />
                <span className="font-medium">SQL/NoSQL DB</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 lg:py-16">
        <div className="container space-y-12">
          <div className="flex flex-col gap-2">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Me</h2>
              <p className="text-gray-500 dark:text-gray-400">
                I’m a devloper always working to improve myself and bringing ideas to life!
              </p>
              <div className="flex items-center space-x-2">
                <icon.Location className="w-6 h-6" />
                <span className="font-medium ">Chennai, TamilNadu</span>
              </div>
              <div className=" flex p-2">
              <Link
                  className=" border-gray-200 bg-white px-4 text-xs font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 "
                  href="https://www.linkedin.com/in/ansh-singh-484215253/"
                  rel="linkedin"
                  target="_blank"
                >
                  <icon.Linkdin className="w-6 h-6" />
                </Link>
                <Link
                  className=" border-gray-200 bg-white px-4 text-xs font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  href="https://github.com/AnshhSingh"
                  rel="github"
                  target="_blank"
                >
                  <icon.Github className="w-6 h-6" /> 
                </Link>
                
                {/* <span className="font-medium">Chennai, TamilNadu</span> */}
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">

          </div>
        </div>
      </section>
    
    </div>
  )
}


