'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link, Clipboard, AlertCircle } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { isValidInstagramUrl } from '@/lib/utils'

interface UrlInputProps {
  onSubmit: (url: string) => void
  loading: boolean
  language: string
}

export default function UrlInput({ onSubmit, loading, language }: UrlInputProps) {
  const [url, setUrl] = useState('')
  const [error, setError] = useState('')
  const [clipboardSupported, setClipboardSupported] = useState(false)

  useEffect(() => {
    setClipboardSupported('clipboard' in navigator)
  }, [])

  const text = {
    en: {
      placeholder: 'Paste Instagram URL here...',
      pasteFromClipboard: 'Paste from Clipboard',
      download: 'Download',
      invalidUrl: 'Please enter a valid Instagram URL',
      examples: 'Examples: Posts, Reels, Stories, IGTV'
    },
    ar: {
      placeholder: 'الصق رابط إنستغرام هنا...',
      pasteFromClipboard: 'لصق من الحافظة',
      download: 'تحميل',
      invalidUrl: 'يرجى إدخال رابط إنستغرام صحيح',
      examples: 'أمثلة: المنشورات، الريلز، القصص، IGTV'
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!url.trim()) {
      setError(text[language as keyof typeof text].invalidUrl)
      return
    }

    if (!isValidInstagramUrl(url)) {
      setError(text[language as keyof typeof text].invalidUrl)
      return
    }

    onSubmit(url)
  }

  const handlePasteFromClipboard = async () => {
    try {
      const clipboardText = await navigator.clipboard.readText()
      if (clipboardText) {
        setUrl(clipboardText)
        setError('')
      }
    } catch (err) {
      console.error('Failed to read clipboard:', err)
    }
  }

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="w-full max-w-2xl mx-auto"
    >
      <Card className="p-6 glass-effect border-0 shadow-xl">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Link className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              type="url"
              value={url}
              onChange={(e) => {
                setUrl(e.target.value)
                setError('')
              }}
              placeholder={text[language as keyof typeof text].placeholder}
              className={`pl-10 h-12 text-base ${language === 'ar' ? 'text-right' : 'text-left'} ${
                error ? 'border-red-500 focus-visible:ring-red-500' : ''
              }`}
              dir={language === 'ar' ? 'rtl' : 'ltr'}
            />
            {clipboardSupported && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={handlePasteFromClipboard}
                className="absolute inset-y-0 right-0 px-3"
              >
                <Clipboard className="h-4 w-4" />
              </Button>
            )}
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center space-x-2 text-red-500 text-sm"
            >
              <AlertCircle className="h-4 w-4" />
              <span>{error}</span>
            </motion.div>
          )}

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              type="submit"
              disabled={loading || !url.trim()}
              className="flex-1 h-12 text-base font-medium bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
            >
              {loading ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                />
              ) : (
                text[language as keyof typeof text].download
              )}
            </Button>
            
            {clipboardSupported && (
              <Button
                type="button"
                variant="outline"
                onClick={handlePasteFromClipboard}
                className="h-12 px-6"
              >
                {text[language as keyof typeof text].pasteFromClipboard}
              </Button>
            )}
          </div>

          <p className="text-sm text-gray-500 text-center">
            {text[language as keyof typeof text].examples}
          </p>
        </form>
      </Card>
    </motion.div>
  )
}