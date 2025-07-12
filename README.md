# WhatsApp Chat Redirect

A modern, responsive web application that allows users to quickly redirect to WhatsApp chat with any phone number. Built with Next.js and featuring a beautiful iOS-style interface.

## ✨ Features

- **📱 Phone Number Validation**: Validates 10-digit phone numbers with real-time feedback
- **🎨 iOS-Style Design**: Modern, rounded interface with smooth animations and transitions
- **📱 Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **⚡ Instant Redirect**: Opens WhatsApp chat in a new tab with one click
- **🎯 User-Friendly**: Intuitive interface with clear validation messages
- **🌙 Modern UI**: Glass morphism effects, gradients, and micro-interactions

## 🚀 Live Demo

[View Live Demo](https://your-deployment-url.com)

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Custom SVG assets
- **Deployment**: Vercel (recommended)

## 📱 Screenshots

### Desktop View
![Desktop View](screenshots/desktop.png)

### Mobile View
![Mobile View](screenshots/mobile.png)

## 🏃‍♂️ Quick Start

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/wp-chat-redirect.git
   cd wp-chat-redirect
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📖 How to Use

1. **Enter Phone Number**: Type a 10-digit phone number in the input field
2. **Validation**: The app validates the number in real-time
3. **Click "Go to Chat"**: Opens WhatsApp with the number in a new tab
4. **Start Chatting**: You're redirected to WhatsApp Web or the mobile app

## 🔧 Configuration

### Phone Number Format
- **Country Code**: Automatically adds +91 (India)
- **Validation**: Requires exactly 10 digits
- **Format**: Any 10-digit number is accepted

### Customization

You can customize the app by modifying:

- **Country Code**: Change `+91` in `src/app/page.tsx` line 47
- **Validation Rules**: Modify the `validatePhoneNumber` function
- **Styling**: Update Tailwind classes for different themes
- **Logo**: Replace `/wp-logo.svg` with your own logo

## 📁 Project Structure

```
wp-chat-redirect/
├── public/
│   ├── wp-logo.svg          # WhatsApp logo
│   └── ...                  # Other assets
├── src/
│   └── app/
│       ├── page.tsx         # Main application component
│       ├── layout.tsx       # Root layout
│       └── globals.css      # Global styles
├── package.json
├── tailwind.config.js
└── README.md
```

## 🎨 Design Features

### UI/UX Elements
- **Glass Morphism**: Semi-transparent container with backdrop blur
- **Gradient Backgrounds**: Subtle gray gradients for depth
- **Smooth Animations**: 300ms transitions with ease-out timing
- **Hover Effects**: Interactive feedback on all elements
- **iOS Typography**: SF Pro Display font with tight letter spacing

### Responsive Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

## 🚀 Deployment

### Deploy on Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Deploy automatically

### Other Platforms

The app can be deployed on any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Setup

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Sunny Rajput**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [WhatsApp](https://whatsapp.com/) for the chat API
- [Vercel](https://vercel.com/) for the deployment platform

## 📞 Support

If you have any questions or need help, please:

1. Check the [Issues](https://github.com/yourusername/wp-chat-redirect/issues) page
2. Create a new issue if your problem isn't already listed
3. Contact me directly at your-email@example.com

---

⭐ **Star this repository if you found it helpful!**
