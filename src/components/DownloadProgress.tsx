'use client'

import { motion } from 'framer-motion'
import { Download, CircleCheck as CheckCircle, CircleAlert as AlertCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'

interface DownloadProgressProps {
  progress: number
  status: 'downloading' | 'completed' | 'error'
  fileName?: string
  error?: string
  onRetry?: () => void
  onReset?: () => void
  language: string
}

export default function DownloadProgress({ 
  progress, 
  status, 
  fileName, 
  error, 
  onRetry, 
  onReset,
  language 
}: DownloadProgressProps) {
  const text = {
    en: {
      downloading: 'Downloading...',
      completed: 'Download Completed!',
      error: 'Download Failed',
      retry: 'Retry',
      downloadAnother: 'Download Another',
      fileName: 'File Name'
    },
    ar: {
      downloading: 'جاري التحميل...',
      completed: 'تم التحميل بنجاح!',
      error: 'فشل التحميل',
      retry: 'إعادة المحاولة',
      downloadAnother: 'تحميل آخر',
      fileName: 'اسم الملف'
    }
  }

  const getStatusIcon = () => {
    switch (status) {
      case 'downloading':
        return (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <Download className="h-6 w-6 text-blue-600" />
          </motion.div>
        )
      case 'completed':
        return <CheckCircle className="h-6 w-6 text-green-600" />
      case 'error':
        return <AlertCircle className="h-6 w-6 text-red-600" />
      default:
        return <Download className="h-6 w-6" />
    }
  }

  const getStatusTitle = () => {
    switch (status) {
      case 'downloading':
        return text[language as keyof typeof text].downloading
      case 'completed':
        return text[language as keyof typeof text].completed
      case 'error':
        return text[language as keyof typeof text].error
      default:
        return ''
    }
  }

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-md mx-auto"
    >
      <Card className="glass-effect border-0 shadow-xl">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-2">
            {getStatusIcon()}
          </div>
          <CardTitle className="text-lg">
            {getStatusTitle()}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {status === 'downloading' && (
            <div className="space-y-2">
              <Progress value={progress} className="h-2" />
              <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                {progress}%
              </p>
            </div>
          )}

          {fileName && (
            <div className="text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                {text[language as keyof typeof text].fileName}:
              </p>
              <p className="text-sm font-medium break-all">{fileName}</p>
            </div>
          )}

          {error && (
            <div className="text-center">
              <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
            </div>
          )}

          {status === 'error' && onRetry && (
            <Button
              onClick={onRetry}
              variant="outline"
              className="w-full"
            >
              {text[language as keyof typeof text].retry}
            </Button>
          )}

          {status === 'completed' && onReset && (
            <Button
              onClick={onReset}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              {text[language as keyof typeof text].downloadAnother}
            </Button>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}