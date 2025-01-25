"use client"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"
import * as icon from '../../public/icon';
import {ThemeSwitcher} from "../../components/ui/ThemeSwitcher"
import { createClient } from '../../utils/supabase/client'
import { useState } from "react";
import { useToast } from "../../components/ui/use-toast";


export default function Contact() {

  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const { toast } = useToast();
  async function send(){
if(fname==""||email==""){

alert("please enter email and firstname")

}
else{
    const supabase = createClient();
    const { data, error } = await supabase
    .from('contact')
    .insert([
      { First_name: fname, Last_name: lname, email:email,message:message },
    ])
    .select()
  }
  
  }


  return (
    <div className="w-full">
       <ThemeSwitcher></ThemeSwitcher>
      <section className="w-full pt-12 md:pt-24 lg:pt-32">
        <div className="container space-y-10 xl:space-y-16">
          <div className="grid gap-4 md:gap-16">
            <div className="flex flex-col items-start space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Contact me
                </h1>
                <p className="text-gray-500 dark:text-gray-400">Get in touch with me.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="w-full py-12 lg:py-16">
        <div className="container space-y-12">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="space-y-4">
                <div className="space-y-2 p-7">
                  <h3 className="text-2xl font-bold">Send me a message</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Have a question or want to get in touch? Send me a message and I`&apos;`ll get back to you as soon as
                    possible.
                  </p>
                </div>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First name</Label>
                      <Input value={fname} onChange={(e) => setfname(e.target.value)} id="first-name" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last name</Label>
                      <Input onChange={(e) => setlname(e.target.value)} value={lname} id="last-name" placeholder="Enter your last name" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input value={email} onChange={(e) => setemail(e.target.value)} id="email" placeholder="Enter your email" type="email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea onChange={(e) => setmessage(e.target.value)} value={message} className="min-h-[100px]" id="message" placeholder="Enter your message" />
                  </div>
                  <Button type="submit" onClick={() => send()}>Send message</Button>
                </form>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="space-y-4">
                <div className="space-y-2 p-7">
                  <h3 className="text-2xl font-bold">Contact Information</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    You can also contact me using the information below.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <icon.MailIcon className="w-6 h-6 flex-shrink-0" />
                    <div className="space-y-1.5">
                      <h4 className="font-bold">Email</h4>
                      <p>anshsingh25bd@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <icon.PhoneIcon className="w-6 h-6 flex-shrink-0" />
                    <div className="space-y-1.5">
                      <h4 className="font-bold">Phone</h4>
                      <p>+91 63594 51876</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}



