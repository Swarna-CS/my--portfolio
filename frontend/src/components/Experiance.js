import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants/data";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience, index }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
        color: "#fff",
        borderRadius: "20px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(20px)",
        // position: "relative",
      }}
      contentArrowStyle={{ 
        borderRight: "7px solid #1a1a2e",
        filter: "drop-shadow(0 0 10px rgba(26, 26, 46, 0.3))"
      }}
      date={experience.date}
      iconStyle={{ 
        background: experience.iconBg,
        border: "3px solid #fff",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3), 0 0 0 4px rgba(255, 255, 255, 0.1)",
      }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[70%] h-[70%] object-contain rounded-full'
          />
        </div>
      }
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" id="experience"></div>
      
      {/* Floating particles animation */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20 animate-pulse" 
             style={{
               top: '20%',
               left: '80%',
               animationDelay: `${index * 0.2}s`
             }}></div>
        <div className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-30 animate-pulse" 
             style={{
               top: '60%',
               left: '90%',
               animationDelay: `${index * 0.3}s`
             }}></div>
        <div className="absolute w-1.5 h-1.5 bg-pink-400 rounded-full opacity-25 animate-pulse" 
             style={{
               top: '80%',
               left: '85%',
               animationDelay: `${index * 0.4}s`
             }}></div>
      </div> */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        {/* Header Section */}
        <div className="mb-6">
          <motion.h3 
            className='text-white text-[24px] font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {experience.title}
          </motion.h3>
          <motion.p
            className='text-gray-300 text-[16px] font-semibold flex items-center'
            style={{ margin: 0 }}
            whileHover={{ color: "#60a5fa" }}
            transition={{ duration: 0.3 }}
          >
            <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
            {experience.company_name}
          </motion.p>
        </div>

       

        {/* Key Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
          viewport={{ once: true }}
        >
          <h4 className="text-gray-300 text-[14px] font-semibold mb-4 uppercase tracking-wider">
           Responsibilities & Achievements
          </h4>
          <ul className='space-y-3'>
            {experience.points.map((point, pointIndex) => (
              <motion.li
                key={`experience-point-${pointIndex}`}
                className='text-gray-100 text-[14px] pl-6 tracking-wider relative leading-relaxed'
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.1 + pointIndex * 0.1 + 0.4 
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  x: 4,
                  color: "#e0e7ff"
                }}
              >
                {/* Custom bullet point */}
                <motion.span 
                  className="absolute left-0 top-2 w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: index * 0.1 + pointIndex * 0.1 + 0.5,
                    type: "spring",
                    stiffness: 300
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.5, rotate: 180 }}
                />
                <span className="block">
                  {point}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>


         {/* Technologies Section */}
        {experience.technologies && (
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            viewport={{ once: true }}
          >

            <h4 className="text-gray-300 flex items-center gap-3 text-[14px] mt-3 font-bold mb-3 uppercase tracking-wider">
                          <span className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></span>
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, techIndex) => (
                <motion.span
                  key={`tech-${techIndex}`}
                  className="px-3 py-1.5 text-[12px] font-medium rounded-full border border-gray-600 hover:border-blue-400 transition-all duration-300 cursor-pointer"
                  style={{
                    background: "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%)",
                    color: "#e5e7eb",
                    backdropFilter: "blur(10px)",
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgba(59, 130, 246, 0.2)",
                    color: "#60a5fa",
                    boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: index * 0.1 + techIndex * 0.05,
                    type: "spring",
                    stiffness: 300
                  }}
                  viewport={{ once: true }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline lineColor="rgba(59, 130, 246, 0.3)">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              index={index}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");