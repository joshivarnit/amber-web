# Amber AI — Sovereign Edge Web Hub (Chakramantra Edition)

> **Modeled after [repo-chakramantra2.vercel.app](https://repo-chakramantra2.vercel.app/)**  
> **Target Vercel Team:** [`common-vernacular-s-projects`](https://vercel.com/common-vernacular-s-projects)

An aesthetic, cyber-dark sovereign AI web platform featuring the **3D Rotating Chakra Model Wheel**, an **Edge Model Gallery** with small free models, an **Editorial Insights Feed**, an **Interactive Streaming AI Terminal**, and a **Multiplatform Download Center** for Windows, Android, macOS, Linux, and iOS.

---

## 🌟 Chakramantra Architecture & Features

1. **3D Rotating Chakra Model Wheel:**
   - Interactive 10-slice Chakra wheel powered by GSAP physics.
   - Slices rotate dynamically, spotlighting models with neon glowing strokes.
   - Central Hub button to spin or pick random models.
   - Floating model spec cards and quick-launch terminal cards.

2. **Edge Model Gallery (Small, Free Models):**
   - ⚡ **Qwen 2.5 0.5B Instruct** (Alibaba) — 350 MB Q4_K_M GGUF
   - ⚡ **SmolLM2 135M Instruct** (Hugging Face) — 95 MB Q4_K_M GGUF
   - ⚡ **SmolLM2 360M Instruct** (Hugging Face) — 240 MB Q4_K_M GGUF
   - 📦 **Llama 3.2 1B Instruct** (Meta AI) — 750 MB Q4_K_M GGUF
   - 📦 **Qwen 2.5 1.5B Instruct** (Alibaba) — 980 MB Q4_K_M GGUF
   - 🧠 **DeepSeek R1 Distill 1.5B** — 1.1 GB Q4_K_M GGUF (Chain-of-Thought)
   - 📦 **Gemma 2 2B IT** (Google DeepMind) — 1.6 GB Q4_K_M GGUF
   - 🚀 **Llama 3.2 3B Instruct** (Meta AI) — 2.0 GB Q4_K_M GGUF
   - 🚀 **Phi-3.5 Mini 3.8B Instruct** (Microsoft) — 2.2 GB Q4_K_M GGUF
   - 👁️ **Moondream2 Edge Vision** (Vikhyat) — 1.2 GB Multimodal

3. **Editorial Feed & Sovereign Insights:**
   - 3-column minimalist glass-card grid matching `repo-chakramantra2.vercel.app`.
   - Topic quick-filter pills (Reasoning AI, Quantization, Dual SAG, Multiplatform).
   - In-depth articles on on-device LLMs, WebGPU, and Devanagari/Sanskrit tokenization.

4. **Multiplatform Downloads Center:**
   - 🪟 **Windows:** Standalone Portable EXE (`Amber-1.0.0.exe` - 58 MB) and MSI Installer (`Amber-1.0.0.msi` - 57 MB).
   - 🤖 **Android:** Native APK download + 1-Click Chrome PWA WebAPK install.
   - 🍎 **macOS:** Universal Apple Silicon & Intel DMG launcher + PWA.
   - 🐧 **Linux:** Universal AppImage / Debian package + shell launcher.
   - 📱 **iOS:** 1-Click Safari Progressive Web App (PWA) with standalone fullscreen display and offline storage.

---

## 🚀 How to Deploy to Vercel under `common-vernacular-s-projects`

### Option 1: Vercel CLI (Recommended)
In PowerShell or Terminal:
```powershell
Set-Location "C:\Users\OMEN\Desktop\amber\amber-web"
npx vercel --prod
```

When prompted:
1. `Set up and deploy?` → **Y**
2. `Which scope?` → Select **`common-vernacular-s-projects`** (or your account)
3. `Link to existing project?` → **N**
4. `Project name?` → `amber-ai` (or your preferred name)
5. `In which directory is your code located?` → `./`

Your website will deploy directly to Vercel with global CDN caching and HTTPS.

### Option 2: Git Push to Vercel Dashboard
1. Push `amber-web` to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Deploy Amber AI Chakramantra Web Hub"
   git remote add origin https://github.com/common-vernacular/amber-web.git
   git push -u origin main
   ```
2. Go to [https://vercel.com/common-vernacular-s-projects](https://vercel.com/common-vernacular-s-projects)
3. Click **Add New... → Project**, import your repository, and click **Deploy**!

---

## 💻 Local Preview
```powershell
Set-Location "C:\Users\OMEN\Desktop\amber\amber-web"
npm start
```
Open `http://localhost:3000` in your browser.
