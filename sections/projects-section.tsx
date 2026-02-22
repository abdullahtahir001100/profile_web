import Section from "@/components/section";
import Image from "next/image";

export default function ProjectsSection() {
    const projects = [
        {
            title: "SMZ Enterprises",
            description: "A comprehensive enterprise-level business solution.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop", 
            link: "https://vikingarmoryblades.com/" 
        },
        {
            title: "JaveHandmade Store",
            description: "A premium e-commerce platform for handcrafted goods.",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2000&auto=format&fit=crop",
            link: "https://www.javehandmade.store/"
        },
        {
            title: "InkByHand",
            description: "Custom e-commerce experience for artistic stationery.",
            image: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=2070&auto=format&fit=crop",
            link: "https://inkbyhand.store/"
        },
       
        {
            title: "Hotel Management System",
            description: "Full-stack booking and administrative dashboard.",
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
            link: "#"
        },
    ];

    return (
        <Section title="Projects">
            <div className="flex flex-wrap justify-center items-center gap-4 mr-auto">
                {projects.map((project) => (
                    <a 
                        key={project.title} 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:-translate-y-0.5 transition duration-300 max-w-75 border border-gray-200 rounded-xl block"
                    >
                        <Image
                            className="rounded-t-xl h-42 object-fit"
                            src={project.image}
                            alt={project.title}
                            width={300}
                            height={170}
                        />
                        <div className="p-4">
                            <h3 className="text-base font-medium">
                                {project.title}
                            </h3>
                            <p className="text-gray-500 mt-1">
                                {project.description}
                            </p>
                        </div>
                    </a>
                ))}
            </div>
        </Section>
    );
}