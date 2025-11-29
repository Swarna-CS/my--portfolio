import React, { useState } from 'react'
import { motion } from "framer-motion";
import { COMPANY_PROJECTS, PERSONAL_PROJECTS } from '../constants/data'


// Sample data - replace with your actual data


function Projects() {
  const [activeTab, setActiveTab] = useState('company');
  
  const currentProjects = activeTab === 'company' ? COMPANY_PROJECTS : PERSONAL_PROJECTS;

  return (
    <div className='border-b border-neutral-900 pb-4' id='projects'>
      <motion.h1 
        whileInView={{opacity: 1, y:0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 0.5}}
        className='my-20 text-center text-5xl'>Projects</motion.h1>
      
      {/* Tab Buttons */}
      <div className='flex justify-center gap-4 mb-12'>
        <button
          onClick={() => setActiveTab('company')}
          className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
            activeTab === 'company'
              ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/50'
              : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700'
          }`}
        >
          Company Projects
        </button>
        <button
          onClick={() => setActiveTab('own')}
          className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
            activeTab === 'own'
              ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/50'
              : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700'
          }`}
        >
          Personal Projects
        </button>
      </div>

      {/* Projects Grid */}
      <motion.div 
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='grid gap-10 lg:grid-cols-1'
      >
        {
          currentProjects.map((project, index) => (
            <div key={index} className='grid gap-3 px-4 py-2'>
              <motion.div 
                whileInView={{opacity: 1, x:0}}
                initial={{opacity: 0, x: -100}}
                transition={{duration: 1}}>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <img src={project.image} 
                    className='mb-6 rounded w-full h-44 object-cover'
                    alt={project.title} />
                </a>
              </motion.div>

              <motion.div 
                whileInView={{opacity: 1, x:0}}
                initial={{opacity: 0, x: 100}}
                transition={{duration: 1}}>
                <h6 className='mb-2 font-semibold text-2xl hover:text-purple-900 transition duration-200'>{project.title}</h6>
                <p className='mb-4 text-neutral-400 text-[17px]'>{project.description}</p>
                <div className='flex flex-wrap'>
                  {project.technologies.map((tech, index) => (
                    <span key={index} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-600'>{tech}</span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))
        }
      </motion.div>
    </div>
  )
}

export default Projects