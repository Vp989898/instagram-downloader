'use client'

import { motion } from 'framer-motion'
import { Download, Play, Image, Music, User, Clock, Eye } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { formatDuration, formatFileSize } from '@/lib/utils'

interface MediaData {
  id: string
  type: 'video' | 'image' | 'story' | 'profile'
  thumbnail: string
  title: string
  duration?: number
  views?: number
  author: string
  formats: {
    quality: string
    size: number
    url: string
    type: 'video' | 'audio'
  }[]
}

interface MediaPreviewProps {
  media: MediaData
  onDownload: (format: any) => void
  language: string
}

export default function MediaPreview({ media, onDownload, language }: MediaPreviewProps) {
  const text = {
    en: {
      preview: 'Preview',
      downloadOptions: 'Download Options',
      video: 'Video',
      audio: 'Audio Only',
      by: 'by',
      views: 'views',
      download: 'Download'
    },
    ar: {
      preview: 'معاينة',
      downloadOptions: 'خيارات التحميل',
      video: 'فيديو',
      audio: 'صوت فقط',
      by: 'بواسطة',
      views: 'مشاهدة',
      download: 'تحميل'
    }
  }

  const getIcon = (type: string) => {
    switch (type) {
      case 'video': return <Play className="h-5 w-5" />
      case 'image': return <Image className="h-5 w-5" />
      case 'story': return <Eye className="h-5 w-5" />
      case 'profile': return <User className="h-5 w-5" />
      default: return <Play className="h-5 w-5" />
    }
  }

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-4xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Preview Card */}
        <Card className="glass-effect border-0 shadow-xl overflow-hidden">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center space-x-2">
              {getIcon(media.type)}
              <span>{text[language as keyof typeof text].preview}</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
              <img
                src={media.thumbnail}
                alt={media.title}
                className="w-full h-full object-cover"
              />
              {media.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-black/50 rounded-full p-4 backdrop-blur-sm"
                  >
                    <Play className="h-8 w-8 text-white fill-white" />
                  </motion.div>
                </div>
              )}
              {media.duration && (
                <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm flex items-center space-x-1">
                  <Clock className="h-3 w-3" />
                  <span>{formatDuration(media.duration)}</span>
                </div>
              )}
            </div>
            
            <div className="space-y-2">
              <h3 className="font-semibold text-lg line-clamp-2">{media.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {text[language as keyof typeof text].by} {media.author}
              </p>
              {media.views && (
                <p className="text-sm text-gray-500">
                  {media.views.toLocaleString()} {text[language as keyof typeof text].views}
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Download Options Card */}
        <Card className="glass-effect border-0 shadow-xl">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center space-x-2">
              <Download className="h-5 w-5" />
              <span>{text[language as keyof typeof text].downloadOptions}</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {media.formats.map((format, index) => (
              <motion.div
                key={index}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Button
                  onClick={() => onDownload(format)}
                  variant="outline"
                  className="w-full justify-between h-auto p-4 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 dark:hover:from-purple-900/20 dark:hover:to-blue-900/20 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3">
                    {format.type === 'video' ? (
                      <Play className="h-5 w-5 text-purple-600" />
                    ) : (
                      <Music className="h-5 w-5 text-blue-600" />
                    )}
                    <div className="text-left">
                      <div className="font-medium">
                        {format.type === 'video' 
                          ? `${text[language as keyof typeof text].video} ${format.quality}`
                          : text[language as keyof typeof text].audio
                        }
                      </div>
                      <div className="text-sm text-gray-500">
                        {formatFileSize(format.size)}
                      </div>
                    </div>
                  </div>
                  <Download className="h-4 w-4" />
                </Button>
              </motion.div>
            ))}
          </CardContent>
        </Card>
      </div>
    </motion.div>
  )
}