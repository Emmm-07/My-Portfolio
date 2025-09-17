import React from 'react';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            title: "Software Engineer Intern",
            company: "Hooli Software Inc.",
            duration: "December 2024 - March 2025",
            description: [
                "Developed full UI components and pages using React, TypeScript, and Tailwind CSS",
                "Built and integrated API endpoints using Golang and gRPC",
                "Designed email templates for Go-based email services"
            ],
            technologies: ["React", "TypeScript", "Tailwind CSS", "Golang", "gRPC", "Next.js", "HTML/CSS"]
        },
         {
            id: 2,
            title: "Application Engineer Intern / Intern Tech Lead",
            company: "Globaltek BPO Inc.",
            duration: "April 2025 - August 2025",
            description: [
                "Led tech team for internal app development, performed code reviews and feature recommendations",
                "Built AWS Lambda functions with SST and developed API endpoints using Next.js",
                "Managed CRON jobs and AWS CloudWatch for automated web scraper monitoring",
                "Led v1 to v2 migration of company project (APIs and UI)",
                "Implemented CI/CD workflows with GitHub Actions and unit testing with Vitest"
            ],
            technologies: ["Next.js", "React", "TypeScript", "AWS Lambda", "SST", "AWS CloudWatch", "GitHub Actions", "Husky", "Vitest"]
        },
    ];

    return (
        <section className="experience" id="experience">
            <div className="container">
                <h2>Experience</h2>
                <div className="experience-timeline">
                    {experiences.map((exp) => (
                        <div key={exp.id} className="experience-item">
                            <div className="experience-content">
                                <h3>{exp.title}</h3>
                                <h4>{exp.company}</h4>
                                <p className="duration">{exp.duration}</p>
                                <ul className="description">
                                    {exp.description.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                                <div className="technologies">
                                    {exp.technologies.map((tech, index) => (
                                        <span key={index} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;