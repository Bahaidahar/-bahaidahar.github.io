"use client";

import educ1 from "../../../public/projects/edudc.png";
import turk from "../../../public/projects/turk.png";
import nostudio from "../../../public/projects/nostudio.png";
import qutty from "../../../public/projects/qutty.png";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { ArrowRightIcon } from "lucide-react";

export default function Projects() {
  const t = useTranslations("Projects");

  const projects = [
    {
      title: "edudc.kz",
      image: educ1,
      techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      link: "https://edudc.kz/",
    },
    {
      title: "td.turkdunyasi.kz",
      image: turk,
      link: "https://td.turkdunyasi.kz/",
      techStack: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Docker",
        "Zustand",
      ],
    },
    {
      title: "nostudio.site",
      image: nostudio,
      link: "https://www.nostudio.site/ru",
      techStack: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Zustand",
        "Framer-motion",
      ],
    },
    {
      title: "qutty.net",
      image: qutty,
      link: "https://qutty.net/",
      techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Shadcn"],
    },
  ];

  return (
    <div className="py-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300"
      >
        {t("title")}
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            className="bg-white/10 text-card-foreground rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2"
          >
            {" "}
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col gap-2 justify-between items-start h-[230px]">
              <div>
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <div>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="bg-primary/10 text-primary px-2 py-1 rounded-md text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <Link
                target="_blank"
                href={project.link}
                className="group inline-flex items-center px-6 py-3 rounded-full dark:hover:bg-white/20 hover:bg-black/10 transition duration-300 ease-in-out"
              >
                {t("viewProject")}
                <ArrowRightIcon
                  className="ml-2 group-hover:translate-x-1 transition duration-300 ease-in-out"
                  size={20}
                />
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
