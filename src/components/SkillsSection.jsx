import { useState } from "react";
import { cn } from "../lib/utils";


const skills = [
  // Frontend
  { name: "HTML/CSS", level: 90, category: "frontend" },
  { name: "JavaScript", level: 85, category: "frontend" },
  { name: "React", level: 80, category: "frontend" },
  { name: "Next.js", level: 75, category: "frontend" },

  // Backend
  { name: "Java", level: 80, category: "backend" },
  { name: "Spring Boot", level: 65, category: "backend" },
  { name: "Python", level: 85, category: "backend" },
  { name: "Flask", level: 75, category: "backend" },
  { name: "Node.js", level: 70, category: "backend" },
  { name: "Express.js", level: 70, category: "backend" },
  { name: "C#", level: 65, category: "backend" },

  // Databases
  { name: "PostgreSQL", level: 75, category: "databases" },
  { name: "MongoDB", level: 70, category: "databases" },
  { name: "SQL", level: 75, category: "databases" },

  // Cloud & DevOps
  { name: "Microsoft Azure", level: 85, category: "cloud" },
  { name: "Azure Functions", level: 85, category: "cloud" },
  { name: "Terraform", level: 80, category: "cloud" },
  { name: "Bicep", level: 70, category: "cloud" },
  { name: "Docker", level: 65, category: "cloud" },

  // Tools
  { name: "Git & GitHub", level: 90, category: "tools" },
  { name: "Postman", level: 85, category: "tools" },
  { name: "Jenkins", level: 50, category: "tools" },
  { name: "Firebase", level: 65, category: "tools" },
];

const categories = ["all", "frontend", "backend", "databases", "cloud", "tools"]

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter(
        skill => activeCategory === "all" || skill.category === activeCategory
    );

    return <section id="skills" className="py-24 px-4 relative bg-secondary/30">

        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary"> Skills</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button 
                    key={key} 
                    onClick={() => setActiveCategory(category)}
                    className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                    activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bd-secondary"
                    )}
                    >
                        {category}
                    </button>
                ))}
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill, key) => (
                    <div 
                        key={key} 
                        className="bg-card p-6 rounded-lg shadow-xs card-hover"
                    >
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg">
                                {skill.name}
                            </h3>
                        </div>
                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                            <div 
                            className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out" 
                            style={{width: skill.level + "%"}}
                            />
                        </div>
                        <div className="text-right mt-1">
                            <span className="text-sm text-muted-foreground">
                                {skill.level}%
                            </span>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    </section>
}