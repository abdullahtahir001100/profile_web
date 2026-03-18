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
            img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop" 
        },
        { 
            title: "Learn Platform", 
            desc: "Educational resource for web development and tech.", 
            link: "https://learn.abdullahtahir.me/",
            img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop" 
        },
        { 
            title: "Build Hub", 
            desc: "Project staging and development showcase.", 
            link: "https://build.abdullahtahir.me/",
            img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" 
        },
        { 
            title: "ACR System", 
            desc: "Advanced Employee Management and Reporting System.", 
            link: "https://acr.abdullahtahir.me/",
            img: "https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=2070&auto=format&fit=crop" 
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
            const scrollAmount = clientWidth * 0.8; // Scroll 80% of view
            const scrollTo = direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
        }
    };

    return (
        <Section title="Projects">
            <div style={{ position: "relative", width: "100%" }}>
                {/* Navigation Buttons */}
                <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px", marginBottom: "16px" }}>
                    <button 
                        onClick={() => scroll("left")}
                        style={{ 
                            padding: "10px", 
                            border: "1px solid #000", 
                            background: "#fff", 
                            cursor: "pointer", 
                            display: "flex", 
                            alignItems: "center",
                            transition: "background 0.2s"
                        }}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button 
                        onClick={() => scroll("right")}
                        style={{ 
                            padding: "10px", 
                            border: "1px solid #000", 
                            background: "#fff", 
                            cursor: "pointer", 
                            display: "flex", 
                            alignItems: "center",
                            transition: "background 0.2s"
                        }}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 5l7 7-7 7" /></svg>
                    </button>
                </div>

                {/* Carousel */}
                <div 
                    ref={scrollRef}
                    style={{
                        display: "flex",
                        overflowX: "auto",
                        gap: "24px",
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
                                minWidth: "340px",
                                flexShrink: 0,
                                border: "1px solid #e0e0e0",
                                textDecoration: "none",
                                color: "inherit",
                                scrollSnapAlign: "start",
                                backgroundColor: "#ffffff"
                            }}
                        >
                            <img 
                                src={project.img} 
                                alt={project.title}
                                style={{
                                    width: "100%",
                                    height: "190px",
                                    objectFit: "cover",
                                    borderBottom: "1px solid #e0e0e0",
                                    display: "block"
                                }}
                            />

                            <div style={{ padding: "24px" }}>
                                <h3 style={{ fontSize: "1.1rem", fontWeight: "800", textTransform: "uppercase", margin: 0, letterSpacing: "0.5px" }}>
                                    {project.title}
                                </h3>
                                <p style={{ fontSize: "0.9rem", color: "#4b5563", marginTop: "12px", lineHeight: "1.6" }}>
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
