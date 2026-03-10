'use client'

import { useTheme } from "next-themes"
import { useEffect } from "react";

const WorkPage = () => {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme("light");
  }, [setTheme]);

  return (
    <div className="h-dvh lg:pt-50 lg:px-24 pt-32 px-6">
      <div className="heading-xl w-1/2">Simple to understand. <br /> <span className="dark:bg-rose bg-ink lg:w-18 lg:h-18 w-7 h-7 rounded-full inline-block lg:mr-8"/> Impossible to miss.</div>
    </div>
  )
}

export default WorkPage