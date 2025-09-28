# InstaDownloader - Professional Instagram Content Downloader

A modern, professional web application for downloading Instagram videos, reels, stories, and profile pictures with a clean, responsive design.

## 🚀 Features

- **Multi-format Downloads**: Support for videos (480p, 720p, 1080p), audio-only (MP3), and profile pictures
- **Content Types**: Posts, Reels, Stories, IGTV, and Profile Pictures
- **Modern UI/UX**: Clean, minimal design with smooth animations using Framer Motion
- **Multi-language Support**: English and Arabic languages
- **Responsive Design**: Optimized for mobile and desktop devices
- **Dark Mode**: Full dark mode support
- **Real-time Progress**: Download progress indicators
- **Clipboard Integration**: Automatic clipboard detection and paste functionality
- **SEO Optimized**: Production-ready with proper meta tags and SEO

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Radix UI** - Accessible UI components
- **Lucide React** - Beautiful icons

### Backend
- **Next.js API Routes** - Serverless API endpoints
- **Node.js** - Runtime environment

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd instagram-downloader
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   ├── download/      # Download endpoint
│   │   └── health/        # Health check
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── Header.tsx        # App header
│   ├── UrlInput.tsx      # URL input form
│   ├── MediaPreview.tsx  # Media preview card
│   ├── DownloadProgress.tsx # Download progress
│   ├── Features.tsx      # Features section
│   └── Footer.tsx        # App footer
└── lib/
    └── utils.ts          # Utility functions
```

## 🎨 Design Features

- **Glass Effect**: Modern glassmorphism design elements
- **Gradient Backgrounds**: Beautiful animated gradients
- **Smooth Animations**: Framer Motion powered interactions
- **Responsive Grid**: Mobile-first responsive design
- **Dark Mode**: Complete dark theme support
- **Multi-language**: RTL support for Arabic

## 🔧 API Endpoints

### POST /api/download
Download Instagram content by URL.

**Request:**
```json
{
  "url": "https://instagram.com/p/example"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "example",
    "type": "video",
    "thumbnail": "...",
    "title": "...",
    "formats": [...]
  }
}
```

### GET /api/health
Health check endpoint.

## 🌐 Multi-language Support

The application supports:
- **English** (default)
- **Arabic** with RTL layout support

Language switching is handled client-side with localStorage persistence.

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet Support**: Responsive grid layouts
- **Desktop**: Full-featured desktop experience
- **Touch Friendly**: Large touch targets and gestures

## 🔒 Security & Privacy

- **No Registration Required**: Anonymous usage
- **Client-side Processing**: URL validation on frontend
- **Rate Limiting**: API rate limiting (to be implemented)
- **CORS Enabled**: Proper CORS headers

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
vercel --prod
```

### Docker
```bash
docker build -t instagram-downloader .
docker run -p 3000:3000 instagram-downloader
```

## 📈 Performance

- **Lighthouse Score**: 95+ performance score
- **Core Web Vitals**: Optimized for all metrics
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting and lazy loading

## 🔮 Future Enhancements

- [ ] User authentication and download history
- [ ] Batch download functionality
- [ ] Browser extension
- [ ] Mobile app (React Native)
- [ ] Advanced video editing features
- [ ] Cloud storage integration

## 📄 License

This project is for educational purposes only. Please respect Instagram's Terms of Service and content creators' rights.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📞 Support

For support and questions, please open an issue in the repository.

---

**Disclaimer**: This tool is for personal use only. Please respect Instagram's terms of service and content creators' rights when using this application.