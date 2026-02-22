import Section from "@/components/section";
import Image from "next/image";

export default function ExperienceSection() {
    const experience = [
        {
            image: "data:image/jpeg;base64,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",
            title: "Sr. Software engineer",
            company: "Shalimar Group of Company",
            location: "Pakistan",
            start: "Jan 2026",
            end: "Present",
            description: [
                "Lead end-to-end development of large-scale, high-performance systems used by millions of users.",
                "Mentor junior engineers, conduct code reviews, and uphold engineering best practices.",
            ],
        },
        {
            image: "https://www.herosols.com/_next/image?url=https%3A%2F%2Fherosolutions.com.pk%2Ftalal%2Fherosol_backend%2Fuploads%2Fimages%2F9cfdf10e8fc047a44b08ed031e1f0ed1_1740565346_2387.png&w=640&q=75",
            title: "Full Stack developer",
            company: "Herosolutions",
            location: "Pakistan",
            start: "May 2024",
            end: "Dec 2025",
            description: [
                "Full-stack development of large-scale, high-performance systems used by millions of users.",
                "Mentor junior engineers, conduct code reviews, and uphold engineering best practices.",
            ],
        },
    ];

    return (
        <Section title="Experience">
            <div className="space-y-6">
                {experience.map((experience) => (
                    <div key={experience.title} className="w-full border border-gray-200 p-6 rounded-xl">
                        <div className="flex flex-col md:flex-row items-start gap-3 md:items-center justify-between w-full text-gray-500">
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                                    <Image
                                        src={experience.image}
                                        alt={experience.title}
                                        width={25}
                                        height={25}
                                    />
                                </div>
                                <div>
                                    <h3 className="text-base font-medium text-gray-800">
                                        {experience.title}
                                    </h3>
                                    <div>{experience.company}</div>
                                </div>
                            </div>
                            <div>{experience.start} - {experience.end}</div>
                        </div>
                        <ul className="list-disc px-5 mt-6 text-gray-500 space-y-2">
                            {experience.description.map((description) => (
                                <li key={description}>{description}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
}