// app/components/ThemeSwitcher.tsx
"use client";

import {useTheme} from "next-themes";
import { useEffect, useState } from "react";
import * as icon from '../../public/icon';
export function ThemeSwitcher() {
    function Check(){
        if(theme=="dark"){
            setTheme('light')
        }
        else {
            setTheme('dark')
        }
    }
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  return (
    <div>
 
      <button onClick={() => Check()}><icon.Mode className=" fixed align-bottom right-3 h-6 w-6 "/> </button>
    </div>
  )
};