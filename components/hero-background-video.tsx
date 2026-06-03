"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Image from "next/image"
import styles from "@/lib/hero-animation.module.css"

const POSTER = "/images/hero.jpg"
const VIDEO_DESKTOP = "/videos/hero.mp4"
const VIDEO_MOBILE = "/videos/hero-mobile.mp4"

type BackgroundMode = "poster" | "video" | "image" | "animated"

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

    setMode("animated")
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
    <div className="absolute inset-0 overflow-hidden">
      <Image
        src={POSTER}
        alt="Luxury yacht at golden hour"
        fill
        className={`object-cover transition-opacity duration-700 ${
          (mode === "video" && videoReady) || mode === "animated" ? "opacity-0" : "opacity-100"
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

      {mode === "animated" && (
        <div className={`absolute inset-0 ${styles.heroAnimation}`} aria-hidden />
      )}

      {/* Dark overlay for text readability - primary layer */}
      <div
        className="absolute inset-0 bg-black/40"
        aria-hidden
      />

      {/* Gradient overlay for visual depth and text contrast */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/50 to-black/45"
        aria-hidden
      />
    </div>
  )
}
