'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import UrlInput from '@/components/UrlInput'
import MediaPreview from '@/components/MediaPreview'
import DownloadProgress from '@/components/DownloadProgress'
import Features from '@/components/Features'
import Footer from '@/components/Footer'

// Mock data for demonstration
const mockMediaData = {
  id: 'sample123',
  type: 'video' as const,
  thumbnail: 'https://images.pexels.com/photos/1851415/pexels-photo-1851415.jpeg?auto=compress&cs=tinysrgb&w=400',
  title: 'Amazing Instagram Reel - Sample Content',
  duration: 45,
  views: 12500,
  author: '@sample_user',
  formats: [
    { quality: '1080p', size: 15728640, url: '#', type: 'video' as const },
    { quality: '720p', size: 10485760, url: '#', type: 'video' as const },
    { quality: '480p', size: 5242880, url: '#', type: 'video' as const },
    { quality: 'MP3', size: 2097152, url: '#', type: 'audio' as const }
  ]
}

export default function Home() {
  const [step, setStep] = useState<'input' | 'preview' | 'downloading'>('input')
  const [mediaData, setMediaData] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [downloadProgress, setDownloadProgress] = useState(0)
  const [downloadStatus, setDownloadStatus] = useState<'downloading' | 'completed' | 'error'>('downloading')
  const [language, setLanguage] = useState('en')

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en'
    setLanguage(savedLanguage)
  }, [])

  const handleUrlSubmit = async (url: string) => {
    setLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setMediaData(mockMediaData)
      setStep('preview')
      setLoading(false)
    }, 2000)
  }

  const handleDownload = async (format: any) => {
    setStep('downloading')
    setDownloadProgress(0)
    setDownloadStatus('downloading')

    // Simulate download progress
    const interval = setInterval(() => {
      setDownloadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setDownloadStatus('completed')
          return 100
        }
        return prev + 10
      })
    }, 300)
  }

  const handleReset = () => {
    setStep('input')
    setMediaData(null)
    setDownloadProgress(0)
    setDownloadStatus('downloading')
  }

  const text = {
    en: {
      hero: 'Download Instagram Content',
      subtitle: 'Download videos, reels, stories, and profile pictures from Instagram easily and quickly.',
      getStarted: 'Get Started'
    },
    ar: {
      hero: 'تحميل محتوى إنستغرام',
      subtitle: 'تحميل الفيديوهات والريلز والقصص وصور الملف الشخصي من إنستغرام بسهولة وسرعة.',
      getStarted: 'ابدأ الآن'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center py-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6 animate-gradient">
            {text[language as keyof typeof text].hero}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            {text[language as keyof typeof text].subtitle}
          </p>
        </motion.section>

        {/* Main Content */}
        <section className="py-8">
          {step === 'input' && (
            <UrlInput 
              onSubmit={handleUrlSubmit} 
              loading={loading} 
              language={language}
            />
          )}

          {step === 'preview' && mediaData && (
            <MediaPreview 
              media={mediaData} 
              onDownload={handleDownload}
              language={language}
            />
          )}

          {step === 'downloading' && (
            <DownloadProgress
              progress={downloadProgress}
              status={downloadStatus}
              fileName="instagram_video.mp4"
              onReset={handleReset}
              language={language}
            />
          )}
        </section>

        {/* Features Section */}
        {step === 'input' && <Features language={language} />}
      </main>

      <Footer language={language} />
    </div>
  )
}