"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  SelectContent,
  Select,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { useContext } from "react";
import { LocaleContext } from "../locale-provider";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: { id: "Telepon / WhatsApp", en: "Phone / WhatsApp" },
    decription: "(+62) 8953 3212 4746 ",
    link: "https://wa.me/62895332124746",
  },
  {
    icon: <FaEnvelope />,
    title: { id: "Surel", en: "Email" },
    decription: "viergiansoka@gmail.com",
    link: "mailto:viergiansoka@gmail.com",
  },
  {
    icon: <FaInstagram />,
    title: { id: "Instagram", en: "Instagram" },
    decription: "@v.iergi190",
    link: "https://www.instagram.com/v.iergi190",
  },
  {
    icon: <FaLinkedin />,
    title: { id: "LinkedIn", en: "LinkedIn" },
    decription: "linkedin.com/in/viergi-159344273/",
    link: "https://www.linkedin.com/in/viergi-159344273/",
  },
  {
    icon: <FaGithub />,
    title: { id: "GitHub", en: "GitHub" },
    decription: "@Viergi",
    link: "https://github.com/Viergi",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: { id: "Alamat", en: "Address" },
    decription: "Depok, Jawa Barat, Indonesia",
    link: "https://www.google.com/maps/place/Depok,+Kota+Depok,+Jawa+Barat/@-6.3878486,106.8177975,24015m/data=!3m2!1e3!4b1!4m6!3m5!1s0x2e69ec0828bcde9f:0x301576d150524f0!8m2!3d-6.4024844!4d106.7942405!16s%2Fg%2F11bc5t6tnv?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D",
  },
];

const placeholder = {
  id: {
    title: "Mari kita berkerja sama",
    name: "Nama",
    email: "Surel",
    phone: "Nomor Telepon",
    service: "Pilih layanan",
    message: "Ketik pesan di sini",
  },
  en: {
    title: "Let's work together",
    name: "Name",
    email: "Email",
    phone: "Phone number",
    service: "Select a service",
    message: "Type your message here",
  },
};

// style container yang di comment flex flex-col xl:flex-row gap-[30px]"

const Contact = () => {
  const { locale } = useContext(LocaleContext);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex pt-8 ">
          {/* form */}
          <div className="flex justify-center w-full items-center xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10 md:grid  md:grid-cols-2 md:px-4">
              {info.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="flex items-center gap-6 group cursor-pointer"
                  >
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent group-hover:text-accent-hover rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60 group-hover:text-accent-hover duration-300">
                        {item.title[locale]}
                      </p>
                      <h3 className="text-sm md:text-lg lg:text-xl group-hover:text-accent-hover duration-300">
                        <a href={item.link} target="_blank">
                          {item.decription}
                        </a>
                      </h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;

{
  /* form */
}
{
  /* <div className="xl:w-[54%] order-2 xl:order-none">
            <h3 className="text-4xl text-accent pb-6">
              {placeholder[locale].title}
            </h3>
            <form
              action=""
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl "
            >
              <div className="grid grid-cols-1 gap-6">
                <Input type="text" placeholder={placeholder[locale].name} />
                <Input type="email" placeholder={placeholder[locale].email} />
                <Input type="phone" placeholder={placeholder[locale].phone} />
              </div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={placeholder[locale].service} />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>{placeholder[locale].service}</SelectLabel>
                    <SelectItem value="est">Web development</SelectItem>
                    <SelectItem value="mst">Web design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                className="h-[200px]"
                placeholder={placeholder[locale].message}
              />
              <Button size="md" className="max-w-40">
                {locale == "en" ? "Send Message" : "Kirim Pesan"}
              </Button>
            </form>
          </div> */
}
{
  /* info */
}
{
  /* flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0 */
}
