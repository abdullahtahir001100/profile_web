import Section from "@/components/section";
import Image from "next/image";

export default function EducationSection() {
    return (
        <Section title="Education">
            <div className="w-full border border-gray-200 p-6 rounded-xl">
                <div className="flex flex-col md:flex-row items-start gap-3 md:items-center justify-between w-full text-gray-500">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                            <Image
                                src="https://img.icons8.com/fluency/48/graduation-cap.png" // Updated to a professional education icon
                                alt="Education"
                                width={25}
                                height={25}
                                className="size-5.5"
                            />
                        </div>
                        <div>
                            <h3 className="text-base font-medium text-gray-800">
                                Intermediate in Computer Science (ICS)
                            </h3>
                            <div>Superior Group of Colleges</div>
                        </div>
                    </div>
                    <div>2022 - 2024</div> 
                </div>
                <p className="mt-6 text-gray-500">
                    Focused on the foundations of computer science, software development, and analytical problem-solving. My time at Superior College provided a strong technical base that paved the way for my journey into full-stack development and modern web technologies.
                </p>
            </div>
        </Section>
    );
}