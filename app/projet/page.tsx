"use client"
import React from 'react'
import {motion} from "framer-motion"

   function Projet() {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 100 }}  transition={{ duration: 0.5 }}  className='h-screen flex justify-center items-center'>
        <h1 className='bg-pblue p-5 rounded-3xl shadow-2xl animate-pulse' >Page en construction</h1>
        {/* Contenu de votre page de projet */}
      </motion.div>
    );
  }
  
  export default Projet;