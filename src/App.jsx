import { useState, useEffect, useRef, useCallback } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar.jsx'
import Home from './Home.jsx'
import Seo from './seo/Seo.jsx'

function Loader({ onFinish }) {
  const [exit, setExit] = useState(false)
  const videoRef = useRef(null)
  const hasFinishedRef = useRef(false)

  const handleEnd = useCallback(() => {
    if (hasFinishedRef.current) {
      return
    }

    hasFinishedRef.current = true
    setExit(true)

    setTimeout(() => {
      onFinish()
    }, 600)
  }, [onFinish])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2
    }
    const fallback = setTimeout(() => {
      handleEnd()
    }, 3000)

    return () => clearTimeout(fallback)
  }, [handleEnd])

  return (
    <div className={`loader-wrapper ${exit ? 'loader-exit' : ''}`}>
      <video
        ref={videoRef}
        muted
        playsInline
        onEnded={handleEnd}
        onLoadedData={() => videoRef.current?.play()}
        className="loader-video"
      >
        <source src="/loading.mp4" type="video/mp4" />
      </video>
    </div>
  )
}

function App() {
  const [loading, setLoading] = useState(true)

  if (loading) {
    return <Loader onFinish={() => setLoading(false)} />
  }

  return (
    <div className="hide-scrollbar">
      <Seo />
      <Navbar />
      <Home />
    </div>
  )
}

export default App
