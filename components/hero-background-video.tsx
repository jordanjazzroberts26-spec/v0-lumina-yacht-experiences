"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Image from "next/image"

const POSTER = "/images/hero.jpg"
const VIDEO_DESKTOP = "/videos/hero.mp4"
const VIDEO_MOBILE = "/videos/hero-mobile.mp4"

type BackgroundMode = "poster" | "video" | "image"

function canAutoplayVideo(): boolean {
  if (typeof window === "undefined") return false
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false

  const connection = (
    navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string }
    }
  ).connection

  if (connection?.saveData) return false
  if (connection?.effectiveType === "slow-2g" || connection?.effectiveType === "2g") {
    return false
  }

  return true
}

function pickInitialVideoSrc(): string {
  if (typeof window === "undefined") return VIDEO_DESKTOP
  return window.matchMedia("(max-width: 768px)").matches ? VIDEO_MOBILE : VIDEO_DESKTOP
}

export function HeroBackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [mode, setMode] = useState<BackgroundMode>("poster")
  const [videoSrc, setVideoSrc] = useState<string | null>(null)
  const [videoReady, setVideoReady] = useState(false)

  useEffect(() => {
    if (!canAutoplayVideo()) {
      setMode("image")
      return
    }

    setVideoSrc(pickInitialVideoSrc())
    setMode("video")
  }, [])

  const handleVideoError = useCallback(() => {
    setVideoReady(false)

    if (videoSrc === VIDEO_MOBILE) {
      setVideoSrc(VIDEO_DESKTOP)
      return
    }

    setMode("image")
  }, [videoSrc])

  useEffect(() => {
    const video = videoRef.current
    if (!video || mode !== "video" || !videoSrc) return

    video.load()

    const playVideo = async () => {
      try {
        await video.play()
      } catch {
        handleVideoError()
      }
    }

    void playVideo()

    const handleVisibility = () => {
      if (document.hidden) {
        video.pause()
        return
      }

      void video.play().catch(() => {
        /* ignore resume errors */
      })
    }

    document.addEventListener("visibilitychange", handleVisibility)
    return () => document.removeEventListener("visibilitychange", handleVisibility)
  }, [mode, videoSrc, handleVideoError])

  return (
    <div className="absolute inset-0">
      <Image
        src={POSTER}
        alt="Luxury yacht at golden hour"
        fill
        className={`object-cover transition-opacity duration-700 ${
          mode === "video" && videoReady ? "opacity-0" : "opacity-100"
        }`}
        priority
        quality={90}
      />

      {mode === "video" && videoSrc && (
        <video
          ref={videoRef}
          key={videoSrc}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={POSTER}
          aria-hidden
          onLoadedData={() => setVideoReady(true)}
          onError={handleVideoError}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      {/* Dark overlay for text readability */}
      <div
        className="absolute inset-0 bg-twilight-deep/55"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-harbor-deep/50 via-twilight/35 to-harbor-deep/60"
        aria-hidden
      />
    </div>
  )
}
