import React, { useEffect, useState } from 'react'
import {Sun} from "lucide-react"
import {Moon} from "lucide-react"
import {motion} from 'framer-motion'

const settingVariant = {
    hover: {
        scale: 1.1,
    }
}
export default function ThemeButton() {
    const [theme, setTheme] = useState("dark")

    const onThemeChange = () => {
        setTheme(prevTheme => {
            if (prevTheme === "light") {
                return "dark";
            } else {
                return "light";
            }
        });
    };

    useEffect(()=>{
        document.querySelector('html').classList.remove("light", "dark"); //if any one of the class is already present, first remove it

    document.querySelector('html').classList.add(theme); //add the current theme to the class
    }, [theme])
  return (
    <>
        <motion.button className='w-[60px] h-[60px] absolute rounded-full bg-slate-950 bottom-8 right-12 z-50 shadow-2xl flex items-center justify-center cursor-pointer dark:bg-white'
        type='button'
        onClick={onThemeChange}
        variants={settingVariant}
        whileHover="hover"
        drag
        dragConstraints={{left: 0, right: 0, top: 0, bottom: 0}}
        >
          {theme === "dark"?<Sun size={40} />:<Moon color='#ffffff' size={40}/>}
        </motion.button>
    </>
  )
}

