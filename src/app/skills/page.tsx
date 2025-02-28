'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Code, LibraryBig, Cpu } from 'lucide-react';

const skillsData = [
  {
    title: 'Programming Languages',
    icon: <Code className="w-6 h-6" />, // Lucide icon for heading
    items: [
      { name: 'JavaScript', icon: '/icons/javascript.svg' },
      { name: 'TypeScript', icon: '/icons/typescript.svg' },
      { name: 'HTML', icon: '/icons/html.svg' },
      { name: 'Python', icon: '/icons/py.svg' },
      { name: 'C++', icon: '/icons/cpp.svg' },
      { name: 'SQL', icon: '/icons/sql.svg' },
    ],
  },
  {
    title: 'Framework/Libraries',
    icon: <LibraryBig className="w-6 h-6" />,
    items: [
      { name: 'React', icon: '/icons/react.svg' },
      { name: 'Next.js', icon: '/icons/next-js.svg' },
      { name: 'Node.js', icon: '/icons/nodejs.svg' },
      { name: 'Express', icon: '/icons/expressjs.svg' },
      { name: 'Tailwind CSS', icon: '/icons/tailwindcss.svg' },
    //   { name: 'TensorFlow', icon: '/icons/tensorflow.svg' },
    ],
  },
  {
    title: 'Tools & Technologies',
    icon: <Cpu className="w-6 h-6" />,
    items: [
      { name: 'Git', icon: '/icons/git.svg' },
      { name: 'Docker', icon: '/icons/docker.svg' },
      { name: 'AWS', icon: '/icons/aws.svg' },
      { name: 'MongoDB', icon: '/icons/mongodb.svg' },
      { name: 'PostgreSQL', icon: '/icons/postgresql.svg' },
    ],
  },
];

export default function Skills() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4  relative">
<div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_2px),linear-gradient(to_bottom,#f0f0f0_2px,transparent_1px)] bg-[size:6rem_4rem]"></div>
      <div className="container max-w-7xl w-full px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-center mb-12 md:mb-16"
        >
          Technical Skills
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-card rounded-xl border border-primary/20 p-6 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  {category.icon}
                </div>
                <h2 className="text-2xl font-bold">{category.title}</h2>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {category.items.map((item) => (
                  <motion.div
                    key={item.name}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3 px-4 py-3 bg-muted/50 rounded-lg"
                  >
                    <Image src={item.icon} alt={item.name} width={24} height={24} />
                    <span className="text-muted-foreground">{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
