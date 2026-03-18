import Section from "@/components/section";

export default function ProjectsSection() {
    const projects = [
        {
            title: "Portfolio",
            description: "Main personal portfolio showcasing full-stack capabilities.",
            link: "https://portfolio.abdullahtahir.me/",
        },
        {
            title: "Learn Platform",
            description: "Educational resource for web development and tech.",
            link: "https://learn.abdullahtahir.me/",
        },
        {
            title: "Build Hub",
            description: "Project staging and development showcase.",
            link: "https://build.abdullahtahir.me/",
        },
        {
            title: "ACR System",
            description: "Advanced reporting and management tool.",
            link: "https://acr.abdullahtahir.me/",
        },
        {
            title: "SMZ Enterprises",
            description: "Enterprise-level business solution and dashboard.",
            link: "https://smzenterprises.abdullahtahir.me/",
        },
        {
            title: "InkByHand",
            description: "Artistic stationery e-commerce platform.",
            link: "https://inkbyhand.store/",
        },
        {
            title: "JaveHandmade Store",
            description: "Premium handcrafted goods marketplace.",
            link: "https://www.javehandmade.store/",
        },
        {
            title: "SocialControl",
            description: "Unified social media command center.",
            link: "https://socialcontrol.abdullahtahir.me/",
        },
        {
            title: "GitHub Profile",
            description: "Open source contributions and repositories.",
            link: "https://github.com/abdullahtahir001100",
        },
    ];

    return (
        <Section title="Projects">
            {/* Carousel Container */}
            <div className="flex overflow-x-auto gap-4 pb-4 no-scrollbar scroll-smooth">
                {projects.map((project) => (
                    <a
                        key={project.title}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="min-w-[300px] border border-gray-300 bg-white transition-colors hover:bg-gray-50 flex flex-col"
                    >
                        {/* Placeholder SVG - Sharp Edges */}
                        <div className="bg-gray-100 h-40 flex items-center justify-center border-b border-gray-300">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="square" strokeLinejoin="miter" className="text-gray-400">
                                <rect x="3" y="3" width="18" height="18" />
                                <path d="M3 9h18M9 21V9" />
                            </svg>
                        </div>
                        
                        <div className="p-4">
                            <h3 className="text-base font-bold uppercase tracking-tight">
                                {project.title}
                            </h3>
                            <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                                {project.description}
                            </p>
                            <div className="mt-4 text-xs font-semibold text-blue-600 uppercase">
                                View Project &rarr;
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </Section>
    );
}
