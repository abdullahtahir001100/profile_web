"use client";

import React, { useRef } from "react";
import Section from "@/components/section";

export default function ProjectsSection() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const projects = [
        { 
            title: "Portfolio", 
            desc: "Main personal portfolio showcasing full-stack capabilities.", 
            link: "https://portfolio.abdullahtahir.me/",
            img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2000&auto=format&fit=crop" 
        },
        { 
            title: "Learn Platform", 
            desc: "Educational resource for web development and tech.", 
            link: "https://learn.abdullahtahir.me/",
            img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop" 
        },
        { 
            title: "Build Hub", 
            desc: "Project staging and development showcase.", 
            link: "https://build.abdullahtahir.me/",
            img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop" 
        },
        { 
            title: "ACR System", 
            desc: "Advanced reporting and management tool.", 
            link: "https://acr.abdullahtahir.me/",
            img: "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2070&auto=format&fit=crop" 
        },
        { 
            title: "SMZ Enterprises", 
            desc: "Enterprise-level business solution and dashboard.", 
            link: "https://smzenterprises.abdullahtahir.me/",
            img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" 
        },
        { 
            title: "InkByHand", 
            desc: "Artistic stationery e-commerce platform.", 
            link: "https://inkbyhand.store/",
            img: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=2070&auto=format&fit=crop" 
        },
        { 
            title: "JaveHandmade Store", 
            desc: "Premium handcrafted goods marketplace.", 
            link: "https://www.javehandmade.store/",
            img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2000&auto=format&fit=crop" 
        },
        { 
            title: "SocialControl", 
            desc: "Unified social media command center.", 
            link: "https://socialcontrol.abdullahtahir.me/",
            img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop" 
        },
        { 
            title: "GitHub Profile", 
            desc: "Open source contributions and repositories.", 
            link: "https://github.com/abdullahtahir001100",
            img: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=2088&auto=format&fit=crop" 
        },
    ];

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
        }
    };

    return (
        <Section title="Projects">
            <div style={{ position: "relative", width: "100%" }}>
                {/* Custom Nav Buttons */}
                <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginBottom: "15px" }}>
                    <button 
                        onClick={() => scroll("left")}
                        style={{ padding: "8px", border: "1px solid #e5e7eb", background: "#fff", cursor: "pointer", display: "flex", alignItems: "center" }}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
                    </button>
                    <button 
                        onClick={() => scroll("right")}
                        style={{ padding: "8px", border: "1px solid #e5e7eb", background: "#fff", cursor: "pointer", display: "flex", alignItems: "center" }}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
                    </button>
                </div>

                {/* Carousel Wrapper */}
                <div 
                    ref={scrollRef}
                    style={{
                        display: "flex",
                        overflowX: "auto",
                        gap: "20px",
                        scrollSnapType: "x mandatory",
                        msOverflowStyle: "none",
                        scrollbarWidth: "none",
                        WebkitOverflowScrolling: "touch",
                    }}
                >
                    {projects.map((project, index) => (
                        <a
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                minWidth: "320px",
                                flexShrink: 0,
                                border: "1px solid #e5e7eb",
                                textDecoration: "none",
                                color: "inherit",
                                scrollSnapAlign: "start",
                                display: "block",
                                backgroundColor: "#fff"
                            }}
                        >
                            <img 
                                src={project.img} 
                                alt={project.title}
                                style={{
                                    width: "100%",
                                    height: "180px",
                                    objectFit: "cover",
                                    borderBottom: "1px solid #e5e7eb",
                                    display: "block"
                                }}
                            />

                            <div style={{ padding: "20px" }}>
                                <h3 style={{ fontSize: "1rem", fontWeight: "700", textTransform: "uppercase", margin: 0 }}>
                                    {project.title}
                                </h3>
                                <p style={{ fontSize: "0.875rem", color: "#6b7280", marginTop: "8px", lineHeight: "1.5" }}>
                                    {project.desc}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </Section>
    );
}
