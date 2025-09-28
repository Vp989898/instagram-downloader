'use client'

import { motion } from 'framer-motion'
import { Instagram, Download, Globe, Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isDark, setIsDark] = useState(false)
  const [language, setLanguage] = useState('en')

  useEffect(() => {
    const theme = localStorage.getItem('theme')
    const lang = localStorage.getItem('language') || 'en'
    setIsDark(theme === 'dark')
    setLanguage(lang)
    
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    localStorage.setItem('theme', newTheme ? 'dark' : 'light')
    
    if (newTheme) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ar' : 'en'
    setLanguage(newLang)
    localStorage.setItem('language', newLang)
  }

  const text = {
    en: {
      title: 'InstaDownloader',
      subtitle: 'Download Instagram content easily'
    },
    ar: {
      title: 'إنستا داونلودر',
      subtitle: 'تحميل محتوى إنستغرام بسهولة'
    }
  }

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50 sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="relative">
              <Instagram className="h-8 w-8 text-purple-600" />
              <Download className="h-4 w-4 text-blue-500 absolute -bottom-1 -right-1" />
            </div>
            <div className={language === 'ar' ? 'text-right' : 'text-left'}>
              <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                {text[language as keyof typeof text].title}
              </h1>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                {text[language as keyof typeof text].subtitle}
              </p>
            </div>
          </motion.div>

          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="relative"
            >
              <Globe className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 text-xs font-bold">
                {language.toUpperCase()}
              </span>
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  )
}