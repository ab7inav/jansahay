# JANSAHAY: AI for Every Indian

JANSAHAY is a civic-tech citizen-support platform designed to help people navigate government processes, schemes, institutional procedures, documents, legal processes, and emergencies across India.

It features a multimodal conversational interface allowing users to Type, Speak, and Upload images, all guided by the interactive AI mascot, **Saarthi**.

## 🏗️ Architecture

JANSAHAY is built as a production-ready MVP using modern web technologies:

- **Frontend:** Next.js (App Router), React, Tailwind CSS, shadcn/ui
- **Animation:** Framer Motion (for Saarthi physics & gestures)
- **AI Engine:** Anthropic Claude 3.5 Sonnet (Multimodal Vision + Text)
- **Database:** PostgreSQL + pgvector (for RAG document retrieval)
- **Storage:** S3-Compatible Object Storage (Secure Vault)
- **i18n:** Dynamic Client-side Dictionary Engine (10 Indian Languages)

## 🚀 Getting Started

### 1. Clone & Install
```bash
git clone https://github.com/your-org/jansahay-ai.git
cd jansahay-ai
npm install
```

### 2. Environment Setup
Copy the example environment file:
```bash
cp .env.example .env.local
```
Then, edit `.env.local` to include your actual API keys. 

*Note: The platform features a **Graceful Fallback Mock Engine**. If `ANTHROPIC_API_KEY` is not provided, the application will still run and demonstrate the UI flows using simulated API responses.*

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌐 Multilingual Support

JANSAHAY supports 10 languages natively:
English, हिन्दी, বাংলা, తెలుగు, தமிழ், मराठी, ગુજરાતી, ಕನ್ನಡ, മലയാളം, ਪੰਜਾਬੀ.

The language state is persisted in `localStorage` and managed globally by `LanguageProvider`.

## 🔒 Security Principles

- **Never** expose API keys to the frontend.
- Uploaded documents are passed to the server securely, parsed, and immediately discarded from memory unless stored in an encrypted S3 vault.
- Responses regarding legal or medical emergencies always prioritize safety and official sources over AI generation.
