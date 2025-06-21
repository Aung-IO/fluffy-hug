"use client"
import ElementList from "./components/ElementList";
import Loading from "./components/Loading";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])
  return (
    <div>
      {/* show loading image while loading */}
      {isLoading ? (
        <Loading />
      ) : (
      <ElementList/>
      )}
    </div>
  )
}
