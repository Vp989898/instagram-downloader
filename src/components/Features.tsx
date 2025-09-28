'use client'

import { motion } from 'framer-motion'
import { Download, Shield, Zap, Globe, Music, Image } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

interface FeaturesProps {
  language: string
}

export default function Features({ language }: FeaturesProps) {
  const text = {
    en: {
      title: 'Why Choose InstaDownloader?',
      features: [
        {
          icon: Download,
          title: 'Multiple Formats',
          description: 'Download videos in HD, audio only, or profile pictures'
        },
        {
          icon: Shield,
          title: 'Safe & Secure',
          description: 'No registration required. Your privacy is protected'
        },
        {
          icon: Zap,
          title: 'Lightning Fast',
          description: 'Quick processing and instant downloads'
        },
        {
          icon: Globe,
          title: 'Multi-language',
          description: 'Available in English and Arabic'
        },
        {
          icon: Music,
          title: 'Audio Extraction',
          description: 'Extract audio from videos as MP3 files'
        },
        {
          icon: Image,
          title: 'All Content Types',
          description: 'Posts, Reels, Stories, IGTV, and Profile Pictures'
        }
      ]
    },
    ar: {
      title: 'لماذا تختار إنستا داونلودر؟',
      features: [
        {
          icon: Download,
          title: 'تنسيقات متعددة',
          description: 'تحميل الفيديوهات بجودة عالية أو الصوت فقط أو صور الملف الشخصي'
        },
        {
          icon: Shield,
          title: 'آمن ومحمي',
          description: 'لا يتطلب تسجيل. خصوصيتك محمية'
        },
        {
          icon: Zap,
          title: 'سريع البرق',
          description: 'معالجة سريعة وتحميل فوري'
        },
        {
          icon: Globe,
          title: 'متعدد اللغات',
          description: 'متوفر باللغة الإنجليزية والعربية'
        },
        {
          icon: Music,
          title: 'استخراج الصوت',
          description: 'استخراج الصوت من الفيديوهات كملفات MP3'
        },
        {
          icon: Image,
          title: 'جميع أنواع المحتوى',
          description: 'المنشورات والريلز والقصص وIGTV وصور الملف الشخصي'
        }
      ]
    }
  }

  const currentText = text[language as keyof typeof text]

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            {currentText.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentText.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full glass-effect border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-lg mb-4">
                    <feature.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}