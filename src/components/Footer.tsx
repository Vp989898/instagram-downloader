'use client'

import { motion } from 'framer-motion'
import { Heart, Github, Twitter, Mail } from 'lucide-react'

interface FooterProps {
  language: string
}

export default function Footer({ language }: FooterProps) {
  const text = {
    en: {
      madeWith: 'Made with',
      by: 'by InstaDownloader Team',
      disclaimer: 'Disclaimer: This tool is for personal use only. Please respect Instagram\'s terms of service and content creators\' rights.',
      contact: 'Contact',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service'
    },
    ar: {
      madeWith: 'صُنع بـ',
      by: 'من قبل فريق إنستا داونلودر',
      disclaimer: 'إخلاء مسؤولية: هذه الأداة للاستخدام الشخصي فقط. يرجى احترام شروط خدمة إنستغرام وحقوق منشئي المحتوى.',
      contact: 'اتصل بنا',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الخدمة'
    }
  }

  const currentText = text[language as keyof typeof text]

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-12"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className={`space-y-4 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
            <h3 className="text-lg font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              InstaDownloader
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {currentText.disclaimer}
            </p>
          </div>

          {/* Links */}
          <div className={`space-y-4 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
            <h4 className="font-semibold text-gray-900 dark:text-gray-100">
              Links
            </h4>
            <div className="space-y-2">
              <a href="#" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 transition-colors">
                {currentText.contact}
              </a>
              <a href="#" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 transition-colors">
                {currentText.privacy}
              </a>
              <a href="#" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 transition-colors">
                {currentText.terms}
              </a>
            </div>
          </div>

          {/* Social */}
          <div className={`space-y-4 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
            <h4 className="font-semibold text-gray-900 dark:text-gray-100">
              Social
            </h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center justify-center space-x-1">
            <span>{currentText.madeWith}</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>{currentText.by}</span>
          </p>
        </div>
      </div>
    </motion.footer>
  )
}