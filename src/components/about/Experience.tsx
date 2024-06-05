import { motion } from "framer-motion"
import { MutableRefObject } from "react"
import { LifeTimeExperience } from "./LineTimeExperience"

type Experience = {
    experienceRef:MutableRefObject<null>,
    isExperienceRefInView:boolean
}

const jobs = [
    {
        title:"Construction Inspector in Represas Patagonia| Technical Office",
        company:"FUNDACIÓN FACULTAD DE INGENIERIA. UNLP",
        description:[
          "Create data management system in a technical office during my work on the inspection of the southernmost dam in the world",
          "Analyzed data using Python to prepare reports of significant importance for both my employer and the client.",
          "Developed task automations, including system integrations with Trello, Dropbox, and automated email sending.",
          "Developed a chatbot using AI language models (LLM) to interact with information from the database."
        ],
        period:"10/2022 - Present",
        skills:["Python", "Django", "Gunicorn", "Nginx", "Jupyter Notebooks","Scikit-learn", "Seaborn","Numpy", "Pandas"]
    },
    {
        title:"Intern in Computational Mechanics Area",
        company:"FUNDACIÓN FACULTAD DE INGENIERIA. UNLP",
        description:[
          "Automate the development of mesoscopic models of concrete for researching recycled materials for construction.",
          "Evaluated results, analyzed data, and iteratively improved models.",
          "Co-author of an article published on Elsevier"

        ],
        importantLinks:[{name:"Article", link:"https://www.sciencedirect.com/science/article/abs/pii/S0013794423004915?CMX_ID=&SIS_ID=&dgcid=STMJ_AUTH_SERV_PUBLISHED&utm_acid=279567591&utm_in=DM402628"}],
        period:"03/2021 - 09/2022",
        skills:["Python", "Jupyter Notebooks", "Seaborn","Numpy", "Pandas", "Abaqus"]
    },
    {
      title:"Collaborator in entrepreneurship",
      company:"CUCHUCAMBIAZO",
      description:[
        "Extract data from an Instagram API.",
        "Export data to Excel and PostgreSQL Database.",
        "Develop a software with a graphical interface so that the client is able to extract and visualize the information",
        "Collaborate with the client to understand and solve problems"

      ],
      period:"08/2021 - 08/2022",
      skills:["Python", "PostgreSQL","Numpy", "Pandas"]
  },

]

export const Experience = ({experienceRef, isExperienceRefInView}: Experience) => {
    return (
        <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ opacity:0 }}
              animate={isExperienceRefInView ? { opacity:1 } : {}}
              transition={{ duration: 1 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ opacity:0 }}
              animate={isExperienceRefInView ? { opacity:1 } : {}}
              transition={{ duration: 1 }}
              className=""
            >
                
                {
                    jobs.map((job, index) => (
                        <LifeTimeExperience
                        key={index}
                        side={index % 2 === 0 ? "left" : "right"}
                        title={job.title}
                        description={job.description}
                        company={job.company}
                        importantLinks={job.importantLinks && job.importantLinks}
                        period={job.period}
                        skills={job.skills}
                        />
                    ))
                }
            </motion.div>
          </div>
    )
}