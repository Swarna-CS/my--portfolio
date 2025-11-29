import React from 'react'
import { SiReact } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { SiMongodb, SiTypescript, SiExpress, SiPostman, SiJest, SiTestinglibrary } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaJava , FaNode, FaGit, FaGithub, FaDocker, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiRedux } from "react-icons/si";
import { SiMysql, SiCplusplusbuilder, SiHibernate , SiQt, SiSpring    } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: {y: -10},
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    }
  },
})

function Technologies() {
  return (
    <div className='border-b border-neutral-800 pb-24' id='skills'>
      <motion.h1 
        whileInView={{opacity: 1, y:0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 1.5}}
        className='my-20 text-center text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
        Technologies
      </motion.h1>

      {/* Frontend & Backend Cards */}
      <div className='flex flex-wrap justify-center gap-8 px-4 mb-16'>
        
        {/* Frontend Card */}
        <motion.div
          whileInView={{opacity: 1, y: 0}}
          initial={{opacity: 0, y: 50}}
          transition={{duration: 1}}
          className='relative w-full lg:w-[600px] group'>
          {/* Animated Border */}
          <div className='absolute -inset-0.5 rounded-3xl opacity-75 group-hover:opacity-100 blur-sm group-hover:blur transition duration-500 animate-pulse'></div>
          
          {/* Card Content */}
          <div className='relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 rounded-3xl p-8 shadow-2xl'>
            <h2 className='text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
              Frontend Technologies
            </h2>
            <div className='flex flex-wrap items-center justify-center gap-4'>
             
              <motion.div 
                variants={iconVariants(1.5)}
                initial="initial"
                animate="animate"
                whileHover={{scale: 1.1, rotate: -5}}
                className='rounded-2xl border-2 border-neutral-700 p-4 bg-neutral-950/50 backdrop-blur-sm hover:border-orange-500 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/50'>
                <FaHtml5 className='text-6xl text-orange-500'/>
              </motion.div>

              <motion.div 
                variants={iconVariants(1.5)}
                initial="initial"
                animate="animate"
                whileHover={{scale: 1.1, rotate: 5}}
                className='rounded-2xl border-2 border-neutral-700 p-4 bg-neutral-950/50 backdrop-blur-sm hover:border-indigo-500 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/50'>
                <FaCss3Alt className='text-6xl text-indigo-500'/>
              </motion.div>

              <motion.div 
                variants={iconVariants(1.5)}
                initial="initial"
                animate="animate"
                whileHover={{scale: 1.1, rotate: 5}}
                className='rounded-2xl border-2 border-neutral-700 p-4 bg-neutral-950/50 backdrop-blur-sm hover:border-indigo-500 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/50'>
                <IoLogoJavascript className='text-6xl text-yellow-500'/>
              </motion.div>

              <motion.div 
                variants={iconVariants(1.5)}
                initial="initial"
                animate="animate"
                whileHover={{scale: 1.1, rotate: 5}}
                className='rounded-2xl border-2 border-neutral-700 p-4 bg-neutral-950/50 backdrop-blur-sm hover:border-indigo-500 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/50'>
                <SiReact className='text-6xl text-blue-500'/>
              </motion.div>

              <motion.div 
                variants={iconVariants(3.5)}
                initial="initial"
                animate="animate"
                whileHover={{scale: 1.1, rotate: -5}}
                className='rounded-2xl border-2 border-neutral-700 p-4 bg-neutral-950/50 backdrop-blur-sm hover:border-cyan-600 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-600/50'>
                <RiTailwindCssFill className='text-6xl text-cyan-600'/>
              </motion.div>
             
            {/* Version Control Card */}
        <motion.div
          whileInView={{opacity: 1, y: 0}}
          initial={{opacity: 0, y: 50}}
          transition={{duration: 1, delay: 0.3}}
          className='relative w-full md:w-80 group'>
          <div className='absolute -inset-0.5  rounded-3xl opacity-75 group-hover:opacity-100 blur transition duration-500'></div>
          <div className='relative bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl p-8 shadow-2xl'>
            <h2 className='text-2xl font-bold text-center mb-6 bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent'>Version Control</h2>
            <div className='flex flex-wrap items-center justify-center gap-4'>
              <motion.div 
                variants={iconVariants(1.5)}
                initial="initial"
                animate="animate"
                whileHover={{scale: 1.15, rotate: 360}}
                transition={{duration: 0.5}}
                className='rounded-2xl border-2 border-neutral-700 p-4 bg-neutral-950/50 backdrop-blur-sm hover:border-orange-600 transition-all duration-300 hover:shadow-lg hover:shadow-orange-600/50'>
                <FaGit className='text-6xl text-orange-600'/>
              </motion.div>

              <motion.div 
                variants={iconVariants(1.5)}
                initial="initial"
                animate="animate"
                whileHover={{scale: 1.15, rotate: 360}}
                transition={{duration: 0.5}}
                className='rounded-2xl border-2 border-neutral-700 p-4 bg-neutral-950/50 backdrop-blur-sm hover:border-white transition-all duration-300 hover:shadow-lg hover:shadow-white/50'>
                <FaGithub className='text-6xl text-white'/>
              </motion.div>
            </div>
          </div>
        </motion.div>

            </div>
          </div>
        </motion.div>

        {/* Frontend Card */}
        <motion.div
          whileInView={{opacity: 1, y: 0}}
          initial={{opacity: 0, y: 50}}
          transition={{duration: 1, delay: 0.2}}
          className='relative w-full lg:w-[600px] group'>
          {/* Animated Border */}
          <div className='absolute -inset-0.5 rounded-3xl opacity-75 group-hover:opacity-100 blur-sm group-hover:blur transition duration-500 animate-pulse'></div>
          
          {/* Card Content */}
          <div className='relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 rounded-3xl p-8 shadow-2xl'>
            <h2 className='text-3xl font-bold text-center mb-8 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent'>
              Backend Technologies
            </h2>
            <div className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div 
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                whileHover={{scale: 1.1, rotate: 5}}
                className='rounded-2xl border-2 border-neutral-700 p-4 bg-neutral-950/50 backdrop-blur-sm hover:border-yellow-500 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/50'>
                <FaJava className='text-6xl text-yellow-500'/>
              </motion.div>

              <motion.div 
                variants={iconVariants(5)}
                initial="initial"
                animate="animate"
                whileHover={{scale: 1.1, rotate: -5}}
                className='rounded-2xl border-2 border-neutral-700 p-4 bg-neutral-950/50 backdrop-blur-sm hover:border-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/50'>
                <SiSpring className='text-6xl text-green-500'/>
              </motion.div>

              <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                whileHover={{scale: 1.1, rotate: 5}}
                className='rounded-2xl border-2 border-neutral-700 p-4 bg-neutral-950/50 backdrop-blur-sm hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/50'>
                <SiCplusplusbuilder className='text-6xl text-blue-500'/>
              </motion.div>
              

              
              
              {/* Databases Card */}
        <motion.div
          whileInView={{opacity: 1, y: 0}}
          initial={{opacity: 0, y: 50}}
          transition={{duration: 1}}
          className='relative w-full md:w-80 group'>
          <div className='absolute -inset-0.5  rounded-3xl opacity-75 group-hover:opacity-100 blur transition duration-500'></div>
          <div className='relative bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl p-8 shadow-2xl'>
            <h2 className='text-2xl font-bold text-center mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent'>Databases</h2>
            <div className='flex flex-wrap items-center justify-center gap-4'>
              <motion.div 
                variants={iconVariants(6)}
                initial="initial"
                animate="animate"
                whileHover={{scale: 1.15, rotate: 360}}
                transition={{duration: 0.5}}
                className='rounded-2xl border-2 border-neutral-700 p-4 bg-neutral-950/50 backdrop-blur-sm hover:border-green-500 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50'>
                <h5 className='text-2xl text-green-500'>JDBC </h5>
              </motion.div>

              <motion.div 
                variants={iconVariants(3.5)}
                initial="initial"
                animate="animate"
                whileHover={{scale: 1.15, rotate: 360}}
                transition={{duration: 0.5}}
                className='rounded-2xl border-2 border-neutral-700 p-4 bg-neutral-950/50 backdrop-blur-sm hover:border-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/50'>
                <SiMysql className='text-6xl text-blue-400'/>
              </motion.div>
            </div>
          </div>
        </motion.div>
            </div>
          </div>
        </motion.div>

      </div>

    </div>
  )
}

export default Technologies