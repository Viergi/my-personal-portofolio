import {
  FaCss3,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiPhp,
  SiPostgresql,
  SiTypescript,
} from "react-icons/si";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

//!
const home = {
  id: {
    title: "Halo, saya",
    description:
      "Saya adalah seorang pengembang web yang bersemangat dalam coding. Saya membuat website yang keren dan mudah digunakan",
    cv: "Unduh CV",
  },
  en: {
    title: "Hello, I'm ",
    description:
      "I'm a passionate web developer specializing in coding. I build websites that are both visually appealing and easy to use.",
    cv: "Download CV",
  },
};

//? services
const services = {
  id: [
    {
      num: "01",
      title: "Web Development",
      description:
        "Saya membangun website modern dan responsif yang disesuaikan dengan kebutuhan bisnis Anda. Mulai dari desain hingga pengembangan, saya memastikan website Anda memiliki performa terbaik, tampilan yang menarik, dan mudah digunakan di berbagai perangkat.",
      href: "",
    },
    {
      num: "02",
      title: "UI/UX Design",
      description:
        "Saya menciptakan desain antarmuka (UI) yang menarik dan pengalaman pengguna (UX) yang optimal. Saya fokus pada riset pengguna, arsitektur informasi, dan desain interaksi untuk menghasilkan produk digital yang intuitif dan menyenangkan digunakan.",
      href: "",
    },
    {
      num: "03",
      title: "SEO",
      description:
        "Saya membantu meningkatkan visibilitas website Anda di mesin pencari seperti Google. Melalui strategi SEO yang komprehensif, saya optimalkan website Anda agar mendapatkan peringkat lebih tinggi dan mendatangkan lebih banyak pengunjung potensial.",
      href: "",
    },
  ],
  en: [
    {
      num: "01",
      title: "Web Development",
      description:
        "I build modern and responsive websites tailored to your business needs. From design to development, I ensure your website has top performance, attractive looks, and is easy to use on various devices.",
      href: "",
    },
    {
      num: "02",
      title: "UI/UX Design",
      description:
        "I create attractive user interface (UI) design and optimal user experience (UX). I focus on user research, information architecture, and interaction design to produce digital products that are intuitive and enjoyable to use.",
      href: "",
    },
    {
      num: "03",
      title: "SEO",
      description:
        "I help improve your website's visibility on search engines like Google. Through a comprehensive SEO strategy, I optimize your website to get higher rankings and bring in more potential visitors.",
      href: "",
    },
  ],
};

//! about
const about = {
  id: {
    title: "Tentang Saya",
    description:
      "Saya adalah seorang pengembang web yang bersemangat dan berpengalaman, dengan fokus pada menciptakan solusi digital yang inovatif dan berdampak. Saya terus berupaya untuk mengembangkan keahlian saya dan memberikan yang terbaik bagi setiap proyek yang saya tangani.",
    info: [
      {
        fieldName: "Nama",
        fieldValue: "Viergi",
      },
      {
        fieldName: "Telepon",
        fieldValue: "(+62) 8953 3212 4746",
      },
      {
        fieldName: "Pengalaman",
        fieldValue: "1+ Tahun",
      },
      {
        fieldName: "Kewarganegaraan",
        fieldValue: "Indonesia",
      },
      {
        fieldName: "Freelance",
        fieldValue: "Tersedia",
      },
      {
        fieldName: "Bahasa",
        fieldValue: "Indonesia, Inggris",
      },
      {
        fieldName: "Surel",
        fieldValue: "viergiansoka@gmail.com",
      },
    ],
  },
  en: {
    title: "About me",
    description:
      "I am a passionate and experienced web developer, with a focus on creating innovative and impactful digital solutions. I continue to strive to develop my skills and give my best to every project I handle.",
    info: [
      {
        fieldName: "Name",
        fieldValue: "Viergi",
      },
      {
        fieldName: "Phone",
        fieldValue: "(+62) 895 332 124 746",
      },
      {
        fieldName: "Experience",
        fieldValue: "1+ Years",
      },
      {
        fieldName: "Nationality",
        fieldValue: "Indonesia",
      },
      {
        fieldName: "Freelance",
        fieldValue: "Available",
      },
      {
        fieldName: "Languages",
        fieldValue: "Indonesia, English",
      },
      {
        fieldName: "Email",
        fieldValue: "viergiansoka@gmail.com",
      },
    ],
  },
};

//* experience
const experience = {
  id: {
    icon: "/assets/resume/bagde.svg",
    title: "Pengalaman Saya",
    description:
      "Perjalanan karir saya yang terus berkembang, membangun solusi digital inovatif dan berharga bagi berbagai klien dan perusahaan.",
    items: [
      {
        company: "Tech Solutions Inc",
        position: "Pengembang Full Stack",
        duration: "2022 - Sekarang",
      },
      {
        company: "Web Design Studio",
        position: "Intern Pengembang Front End",
        duration: "Musim Panas 2021",
      },
      {
        company: "Eccomerce Start Up",
        position: "Pekerja Lepas",
        duration: "2020 - 2021",
      },
    ],
  },
  en: {
    icon: "/assets/resume/bagde.svg",
    title: "My Experience",
    description:
      "My ever-evolving career journey, building innovative and valuable digital solutions for various clients and companies.",
    items: [
      {
        company: "Tech Solutions Inc",
        position: "Full Stack Developer",
        duration: "2022 - Present",
      },
      {
        company: "Web Design Studio",
        position: "Front End Developer Intern",
        duration: "Summer 2021",
      },
      {
        company: "Eccomerce Start Up",
        position: "Freelancer",
        duration: "2020 - 2021",
      },
    ],
  },
};

//? education
const education = {
  id: {
    icon: "/assets/resume/cap.svg",
    title: "Pendidikan Saya",
    description:
      "Fondasi pendidikan saya yang kuat, membekali saya dengan pengetahuan dan keterampilan yang dibutuhkan untuk sukses di dunia pengembangan web.",
    items: [
      {
        institution: "Indosat Ooredoo Hutchison",
        degree: "Lulusan ID Camp Alur Front-End",
        duration: "2023 - 2024",
      },
      {
        institution: "Indosat Ooredoo Hutchison",
        degree: "Lulusan ID Camp Alur React",
        duration: "2024 - 2025",
      },
      {
        institution: "Universitas Bina Sarana Informatika",
        degree: "Jurusan Teknologi Informasi",
        duration: "2022 - 2026",
      },
    ],
  },
  en: {
    icon: "/assets/resume/cap.svg",
    title: "My Education",
    description:
      "My strong educational foundation has equipped me with the knowledge and skills needed to succeed in the world of web development.",
    items: [
      {
        institution: "Indosat Ooredoo Hutchison",
        degree: "Front-End Track ID Camp Graduate",
        duration: "2023 - 2024",
      },
      {
        institution: "Indosat Ooredoo Hutchison",
        degree: "React Track ID Camp Graduate",
        duration: "2024 - 2025",
      },
      {
        institution: "Bina Sarana Informatika University",
        degree: "Information Technology Major",
        duration: "2022 - 2026",
      },
    ],
  },
};

//! skills
const skills = {
  id: {
    title: "Keahlian saya",
    description:
      "Kumpulan keahlian teknis yang saya kuasai, memungkinkan saya untuk membangun website modern dan berkualitas tinggi.",
  },
  en: {
    title: "My Skills",
    description:
      "A collection of technical skills that I have mastered, enabling me to build modern and high-quality websites.",
  },
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiLaravel />,
      name: "Laravel",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <SiPhp />,
      name: "Php",
    },
    {
      icon: <FaGithub />,
      name: "Github",
    },
    {
      icon: <SiMysql />,
      name: "Sql",
    },
    {
      icon: <SiPostgresql />,
      name: "Postgresql",
    },
    {
      icon: <SiMongodb />,
      name: "Mongo DB",
    },
    {
      icon: <FaGitAlt />,
      name: "Git",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
  ],
};

const projects = [
  {
    num: "01",
    category: "Fullstack",
    title: { en: "Katakita", id: "Katakita" },
    description: {
      en: "Katakita is a text-based social media application with Laravel v.12 complete with user authentication features, creating posts, post reactions (like, comment), follow and following.",
      id: "Aplikasi Katakita sosial media berbasis text dengan LARAVEL v.12 lengkap dengan fitur otentikasi pengguna, membuat post, reaksi post (like, comment), follow dan following.",
    },
    stack: [
      {
        name: "Laravel",
      },
      {
        name: "Tailwindcss",
      },
      {
        name: "Prisma",
      },
    ],
    image: "/assets/work/thumb5.png",
    live: "https://katakita-production.up.railway.app/",
    github: "https://github.com/Viergi/katakita",
  },
  {
    num: "02",
    category: "frontend",
    title: { en: "Film Vista", id: "Film Vista" },
    description: {
      en: "An interactive movie discovery app built with React and the TMDb API. Features user authentication to save favorite films, search by title or genre, and view detailed movie pages for an immersive experience.",
      id: "Aplikasi katalog film interaktif berbasis React dengan API TMDb. Dilengkapi autentikasi pengguna untuk menyimpan film favorit, pencarian berdasarkan judul atau genre, dan halaman detail film untuk pengalaman yang imersif.",
    },
    stack: [
      {
        name: "NextJs",
      },
      {
        name: "Tailwindcss",
      },
      {
        name: "Prisma",
      },
      {
        name: "Zod",
      },
    ],
    image: "/assets/work/thumb4.png",
    live: "https://web-movie-vista.vercel.app/",
    github: "https://github.com/Viergi/web-movie",
  },
  {
    num: "03",
    category: "frontend",
    title: { en: "ThreadSky", id: "ThreadSky" },
    description: {
      en: "Interactive forum web application using React, equipped with Redux state management for efficient data management. This application offers essential features such as user authentication and the ability to like and dislike each post, thus enhancing the interaction experience between users.",
      id: "Aplikasi web forum interaktif menggunakan React, dilengkapi dengan manajemen status Redux untuk manajemen data yang efisien. Aplikasi ini menawarkan fitur-fitur penting seperti autentikasi pengguna dan kemampuan untuk menyukai dan tidak menyukai setiap posting, sehingga meningkatkan pengalaman interaksi antar pengguna.",
    },
    stack: [
      {
        name: "React",
      },
      {
        name: "Redux",
      },
      {
        name: "Tailwindcss",
      },
      {
        name: "Javascript",
      },
    ],
    image: "/assets/work/thumb1.png",
    live: "https://threadsky-sjdt.vercel.app/",
    github: "https://github.com/Viergi/Threadsky",
  },
  {
    num: "04",
    category: "Frontend",
    title: { en: "Notes App", id: "Aplikasi Catatan" },
    description: {
      en: "Simple Notes App to save and organize your notes. With a clean and intuitive interface, you can quickly create new notes, archive them, or search existing notes and includes authentication features.",
      id: "Aplikasi catatan sederhana untuk menyimpan dan mengatur catatan Anda. Dengan antarmuka yang bersih dan intuitif, Anda dapat dengan cepat membuat catatan baru, mengarsipkannya, atau mencari catatan yang sudah ada dan dilengkapi fitur autentikasi.",
    },
    stack: [
      {
        name: "Vite.js",
      },
      {
        name: "React",
      },
      {
        name: "CSS",
      },
    ],
    image: "/assets/work/thumb2.png",
    live: "https://notes-app-viergi.netlify.app/",
    github: "https://github.com/Viergi/notes-app",
  },
  {
    num: "05",
    category: "frontend",
    title: { en: "Restaurant Catalog", id: "Katalog Restoran" },
    description: {
      en: "This website provides a wide variety of restaurants from various regions in Indonesia, complete with their menus. The website retrieves data from an API.",
      id: "Website ini menyediakan berbagai macam restoran dari berbagai daerah di Indonesia lengkap dengan menu yang disajikan, Website ini mengambil data yang bersumber dari API.",
    },
    stack: [
      {
        name: "Javascript",
      },
      {
        name: "SCSS",
      },
      {
        name: "Webpack",
      },
    ],
    image: "/assets/work/thumb3.png",
    live: "https://tastetopia.netlify.app/",
    github: "https://github.com/Viergi/restaurant-catalogue",
  },
];

// ! daftar sertifikat ganti dari experiance
const certificate = {
  id: {
    icon: "/assets/resume/bagde.svg",
    title: "Sertifikat saya",
    description:
      "Kumpulan sertifikasi dan pelatihan yang menunjukkan keahlian teknis saya dalam pengembangan web dan bidang terkait.",
  },
  en: {
    icon: "/assets/resume/bagde.svg",
    title: "My Certificate",
    description:
      "A collection of certifications and training that showcase my technical expertise in web development and related fields.",
  },
  ref: [
    {
      link: "https://drive.google.com/file/d/1GFVElrg8hbyGnBft51uE5blyLmqt0Iap/view?usp=sharing",
      file: "assets/certificate/react_mahir_idcamp.jpg",
    },
    {
      link: "https://drive.google.com/file/d/1166eRBHW-gn843Kt1jfirfzOLbnAY5Kh/view?usp=sharing",
      file: "assets/certificate/react_menengah_idcamp.jpg",
    },
    {
      link: "https://drive.google.com/file/d/1dkt8NXxxxPSuKI1KMBBTTTexfMxE6Rsd/view?usp=sharing",
      file: "assets/certificate/FE_mahir_idcamp.png",
    },
    {
      link: "https://drive.google.com/file/d/1Yy-RxlMaLIn71PusyuQg6O7iaizRkJfp/view?usp=drive_link",
      file: "assets/certificate/react_expert.jpg",
    },
    {
      link: "https://drive.google.com/file/d/11TVM1EKgJtTfhnaDHntT2T9aiepm3s2F/view?usp=sharing",
      file: "assets/certificate/react_fundamental.jpg",
    },
    {
      link: "https://drive.google.com/file/d/19llUk2JzUD95NrAK1Y-rIING1kxrgo_y/view?usp=drive_link",
      file: "assets/certificate/fundamental_FE_web.png",
    },
    {
      link: "https://drive.google.com/file/d/1Cx7cyKvf2mOUh9hzCyzUhgEcvpygggVY/view?usp=sharing",
      file: "assets/certificate/dasar_git_github.png",
    },
    {
      link: "https://drive.google.com/file/d/1LJaI57cFMIIgjEjBC0DH7Z9vmGXSrSz2/view?usp=drive_link",
      file: "assets/certificate/backend_pemula.png",
    },
    {
      link: "https://drive.google.com/file/d/1cPz_mnXHaoRZb9GE4_GHjEb9myXPnhi5/view?usp=sharing",
      file: "assets/certificate/dasar_web.png",
    },
    {
      link: "https://drive.google.com/file/d/16lUdqSy9XnK3eOesR5KSQnz4aruR6Uz_/view?usp=drive_link",
      file: "assets/certificate/belajar_AI.png",
    },
    {
      link: "https://drive.google.com/file/d/19J0P6HLxmpMLXh2TNU29FTKEK1dnUxfj/view?usp=sharing",
      file: "assets/certificate/dasar_sql.png",
    },
    {
      link: "https://drive.google.com/file/d/1ho_Qv2C3xrs-E3pJSdBlw8KCJQYwIwBa/view?usp=sharing",
      file: "assets/certificate/ML_pemula.png",
    },
    {
      link: "https://drive.google.com/file/d/1ho_Qv2C3xrs-E3pJSdBlw8KCJQYwIwBa/view?usp=sharing",
      file: "assets/certificate/pemograman_python.png",
    },
  ],
};

export {
  home,
  services,
  about,
  experience,
  education,
  skills,
  projects,
  certificate,
};
