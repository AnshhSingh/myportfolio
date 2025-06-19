'use client';
import { Globe, Github } from "lucide-react";
// import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ProjectJsonLd from "@/components/ProjectJsonLd";
import React from "react";

const projects = [
	{
		id: 1,
		title: "Ecom",
		description: "An ecom wbesite built using react with CMS.",
		technologies: ["React.JS", "Strapi", "Tailwind CSS"],
		github: "https://github.com/AnshhSingh/Ecom", // Has live link
		live: "https://appproject-git-main-anshhsingh.vercel.app/",
	},
	{
		id: 2,
		title: "PDF RAG",
		description:
			"Allows users to upload and parse PDFs and then query indexed document content using LlamaIndex to process request",
		technologies: [
			"React.js",
			"Python",
			"Fastapi",
			"huggingface LLM",
			"Llamaindex",
		],
		github: "https://github.com/AnshhSingh/RAG_PDF_Backend",
		live: "https://colab.research.google.com/drive/1Xha2XgoOQQ8oLurqG8-g0LyrIONF7fkd?usp=sharing",
	},

	{
		id: 3,
		title: "Micro Bench",
		description: "Benchmark Arduino boards and determine performance using a score",
		technologies: ["Arduino"],
		github: "https://github.com/AnshhSingh/microcontrollerbench",
		live: "",
	},
	{
		id: 4,
		title: "Imageconv",
		description: "High speed image conversion web app",
		technologies: ["Next.JS", "Express.js", "sharp"],
		github: "https://github.com/AnshhSingh/imageconv",
		live: "",
	},
];

export default function Projects() {
	return (
		<div className="min-h-screen flex items-center justify-center p-4 pt-20">
			<div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_2px),linear-gradient(to_bottom,#f0f0f0_2px,transparent_1px)] bg-[size:6rem_4rem]"></div>
			<motion.div className="container max-w-7xl w-full px-4">
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
					className="text-4xl md:text-6xl font-bold tracking-tight text-center mb-8"
				>
					My Projects
				</motion.h1>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project) => (
						<motion.div
							key={project.id}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, ease: "easeOut" }}
							whileHover={{ scale: 1.05 }} // Hover effect
							className="bg-card rounded-lg border border-primary/20 shadow-lg p-6 space-y-4"
						>
							{/* Project Title */}
							<h2 className="text-2xl font-bold text-primary">
								{project.title}
							</h2>

							{/* Project Description */}
							<p className="text-muted-foreground">
								{project.description}
							</p>

							{/* Technologies Used */}
							<div className="flex flex-wrap gap-2">
								{project.technologies.map((tech, index) => (
									<span
										key={index}
										className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
									>
										{tech}
									</span>
								))}
							</div>

							<div className="flex gap-4">
								<motion.a
									href={project.github}
									target="_blank"
									rel="noopener noreferrer"
									className="text-muted-foreground hover:text-primary transition-colors"
								>
									<Github size={24} />
								</motion.a>

								{project.live && (
									<motion.a
										href={project.live}
										target="_blank"
										rel="noopener noreferrer"
										className="text-muted-foreground hover:text-primary transition-colors"
									>
										<Globe size={24} />
									</motion.a>
								)}
							</div>
						</motion.div>
					))}
				</div>

				{/* Add structured data for all projects (hidden from UI) */}
				{projects.map((project) => (
					<React.Fragment key={`jsonld-${project.id}`}>
						<ProjectJsonLd
							projectData={{
								title: project.title,
								description: project.description,
								github: project.github,
								url: project.live,
								technologies: project.technologies,
							}}
						/>
					</React.Fragment>
				))}
			</motion.div>
		</div>
	);
}
