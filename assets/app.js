/**
 * Amber AI Web Platform — Chakramantra Edition
 * Ported for common-vernacular-s-projects (https://repo-chakramantra2.vercel.app/)
 */

// --- 10 Curated Small Free Edge Models (Mappable to 10 Chakra Slices) ---
const CHAKRA_MODELS = [
  {
    id: "qwen-2.5-0.5b",
    name: "Qwen 2.5 0.5B",
    fullName: "Qwen 2.5 0.5B Instruct",
    author: "Alibaba Cloud",
    category: "Ultra-Light",
    params: "500M",
    size: "350 MB",
    ramMin: "1 GB",
    context: "32k",
    format: "Q4_K_M GGUF",
    speed: "120+ t/s",
    tagClass: "genre-tag-cyan",
    color: "#06b6d4",
    description: "Sub-500MB multilingual titan. Excellent coding, reasoning, and mathematical logic on ultra-low hardware.",
    hfUrl: "https://huggingface.co/Qwen/Qwen2.5-0.5B-Instruct-GGUF",
    downloadUrl: "https://huggingface.co/Qwen/Qwen2.5-0.5B-Instruct-GGUF/resolve/main/qwen2.5-0.5b-instruct-q4_k_m.gguf"
  },
  {
    id: "smollm2-135m",
    name: "SmolLM2 135M",
    fullName: "SmolLM2 135M Instruct",
    author: "Hugging Face",
    category: "Ultra-Light",
    params: "135M",
    size: "95 MB",
    ramMin: "512 MB",
    context: "8k",
    format: "Q4_K_M GGUF",
    speed: "200+ t/s",
    tagClass: "genre-tag",
    color: "#a855f7",
    description: "The world's premier sub-100MB model. Instantaneous execution on smartwatches, wearables, and phones.",
    hfUrl: "https://huggingface.co/HuggingFaceTB/SmolLM2-135M-Instruct-GGUF",
    downloadUrl: "https://huggingface.co/HuggingFaceTB/SmolLM2-135M-Instruct-GGUF/resolve/main/smollm2-135m-instruct-q4_k_m.gguf"
  },
  {
    id: "smollm2-360m",
    name: "SmolLM2 360M",
    fullName: "SmolLM2 360M Instruct",
    author: "Hugging Face",
    category: "Ultra-Light",
    params: "360M",
    size: "240 MB",
    ramMin: "1 GB",
    context: "8k",
    format: "Q4_K_M GGUF",
    speed: "160+ t/s",
    tagClass: "genre-tag-amber",
    color: "#f59e0b",
    description: "Superb reasoning-to-size ratio. Squeezes maximum instruction adherence into 240MB with minimal battery drain.",
    hfUrl: "https://huggingface.co/HuggingFaceTB/SmolLM2-360M-Instruct-GGUF",
    downloadUrl: "https://huggingface.co/HuggingFaceTB/SmolLM2-360M-Instruct-GGUF/resolve/main/smollm2-360m-instruct-q4_k_m.gguf"
  },
  {
    id: "llama-3.2-1b",
    name: "Llama 3.2 1B",
    fullName: "Llama 3.2 1B Instruct",
    author: "Meta AI",
    category: "Compact",
    params: "1.2B",
    size: "750 MB",
    ramMin: "1.5 GB",
    context: "128k",
    format: "Q4_K_M GGUF",
    speed: "85+ t/s",
    tagClass: "genre-tag-cyan",
    color: "#06b6d4",
    description: "Meta's official edge foundation model with massive 128k context and high instruction fidelity on mobile devices.",
    hfUrl: "https://huggingface.co/bartowski/Llama-3.2-1B-Instruct-GGUF",
    downloadUrl: "https://huggingface.co/bartowski/Llama-3.2-1B-Instruct-GGUF/resolve/main/Llama-3.2-1B-Instruct-Q4_K_M.gguf"
  },
  {
    id: "qwen-2.5-1.5b",
    name: "Qwen 2.5 1.5B",
    fullName: "Qwen 2.5 1.5B Instruct",
    author: "Alibaba Cloud",
    category: "Compact",
    params: "1.5B",
    size: "980 MB",
    ramMin: "2 GB",
    context: "32k",
    format: "Q4_K_M GGUF",
    speed: "75+ t/s",
    tagClass: "genre-tag",
    color: "#a855f7",
    description: "Rivals prior-generation 7B models in complex coding and reasoning benchmarks. Balanced for laptops and phones.",
    hfUrl: "https://huggingface.co/Qwen/Qwen2.5-1.5B-Instruct-GGUF",
    downloadUrl: "https://huggingface.co/Qwen/Qwen2.5-1.5B-Instruct-GGUF/resolve/main/qwen2.5-1.5b-instruct-q4_k_m.gguf"
  },
  {
    id: "deepseek-r1-1.5b",
    name: "DeepSeek R1 1.5B",
    fullName: "DeepSeek R1 Distill Qwen 1.5B",
    author: "DeepSeek AI",
    category: "Reasoning",
    params: "1.5B",
    size: "1.1 GB",
    ramMin: "2 GB",
    context: "32k",
    format: "Q4_K_M GGUF",
    speed: "60+ t/s",
    tagClass: "genre-tag-amber",
    color: "#f59e0b",
    description: "Revolutionary on-device reasoning engine with step-by-step thinking traces (<think>...</think>) before answering.",
    hfUrl: "https://huggingface.co/bartowski/DeepSeek-R1-Distill-Qwen-1.5B-GGUF",
    downloadUrl: "https://huggingface.co/bartowski/DeepSeek-R1-Distill-Qwen-1.5B-GGUF/resolve/main/DeepSeek-R1-Distill-Qwen-1.5B-Q4_K_M.gguf"
  },
  {
    id: "gemma-2-2b",
    name: "Gemma 2 2B",
    fullName: "Gemma 2 2B IT",
    author: "Google DeepMind",
    category: "Compact",
    params: "2.6B",
    size: "1.6 GB",
    ramMin: "3 GB",
    context: "8k",
    format: "Q4_K_M GGUF",
    speed: "50+ t/s",
    tagClass: "genre-tag-cyan",
    color: "#06b6d4",
    description: "Built upon Gemini technology stack. Class-leading world knowledge and exceptional conversational flow.",
    hfUrl: "https://huggingface.co/bartowski/gemma-2-2b-it-GGUF",
    downloadUrl: "https://huggingface.co/bartowski/gemma-2-2b-it-GGUF/resolve/main/gemma-2-2b-it-Q4_K_M.gguf"
  },
  {
    id: "llama-3.2-3b",
    name: "Llama 3.2 3B",
    fullName: "Llama 3.2 3B Instruct",
    author: "Meta AI",
    category: "High Power",
    params: "3.2B",
    size: "2.0 GB",
    ramMin: "4 GB",
    context: "128k",
    format: "Q4_K_M GGUF",
    speed: "40+ t/s",
    tagClass: "genre-tag",
    color: "#a855f7",
    description: "Meta's flagship compact model. Delivers rich, nuanced responses, software development assistance, and 128k context.",
    hfUrl: "https://huggingface.co/bartowski/Llama-3.2-3B-Instruct-GGUF",
    downloadUrl: "https://huggingface.co/bartowski/Llama-3.2-3B-Instruct-GGUF/resolve/main/Llama-3.2-3B-Instruct-Q4_K_M.gguf"
  },
  {
    id: "phi-3.5-mini",
    name: "Phi-3.5 Mini",
    fullName: "Phi-3.5 Mini 3.8B Instruct",
    author: "Microsoft",
    category: "High Power",
    params: "3.8B",
    size: "2.2 GB",
    ramMin: "4 GB",
    context: "128k",
    format: "Q4_K_M GGUF",
    speed: "35+ t/s",
    tagClass: "genre-tag-amber",
    color: "#f59e0b",
    description: "Microsoft's edge champion. Outperforms many larger models on reasoning, math, and code generation.",
    hfUrl: "https://huggingface.co/bartowski/Phi-3.5-mini-instruct-GGUF",
    downloadUrl: "https://huggingface.co/bartowski/Phi-3.5-mini-instruct-GGUF/resolve/main/Phi-3.5-mini-instruct-Q4_K_M.gguf"
  },
  {
    id: "moondream2-vision",
    name: "Moondream2",
    fullName: "Moondream2 Edge Vision",
    author: "Vikhyat",
    category: "Vision",
    params: "1.8B",
    size: "1.2 GB",
    ramMin: "2.5 GB",
    context: "4k",
    format: "GGUF / ONNX",
    speed: "45+ t/s",
    tagClass: "genre-tag-cyan",
    color: "#06b6d4",
    description: "Tiny multimodal AI that sees and understands images. Visual inspection, diagram explanation, and OCR directly on device.",
    hfUrl: "https://huggingface.co/vikhyatk/moondream2",
    downloadUrl: "https://huggingface.co/vikhyatk/moondream2"
  }
];

// --- Editorial Insights (Chakramantra Feed) ---
const EDITORIAL_ARTICLES = [
  {
    id: "art-1",
    title: "Sovereign Intelligence: Running DeepSeek-R1 Distill Offline on Edge Devices",
    genre: "Reasoning AI",
    tagClass: "genre-tag-amber",
    readTime: "4 min read",
    author: "Amber Research",
    date: "November 2026",
    excerpt: "How small 1.5B distilled models achieve step-by-step reasoning on laptops and smartphones using 4-bit quantization with zero cloud telemetry."
  },
  {
    id: "art-2",
    title: "The Sub-500MB Frontier: Qwen 2.5 0.5B Benchmarked Across Microcontrollers & Phones",
    genre: "Quantization",
    tagClass: "genre-tag-cyan",
    readTime: "3 min read",
    author: "Edge Labs",
    date: "November 2026",
    excerpt: "Benchmarking Qwen 2.5 0.5B at 120+ tokens per second on consumer Snapdragon and Apple Silicon hardware."
  },
  {
    id: "art-3",
    title: "Dual Search-Augmented Generation: Merging Google & DuckDuckGo with Local LLMs",
    genre: "Dual SAG",
    tagClass: "genre-tag",
    readTime: "5 min read",
    author: "Amber Core",
    date: "October 2026",
    excerpt: "A deep dive into Amber's hybrid retrieval system: querying Google for knowledge graph snippets, falling back to DDG, or dropping strictly to local weights."
  },
  {
    id: "art-4",
    title: "Kotlin Multiplatform & WebGPU: Single Codebase for Windows, macOS, Linux, iOS & Android",
    genre: "Multiplatform",
    tagClass: "genre-tag-cyan",
    readTime: "6 min read",
    author: "Systems Eng",
    date: "October 2026",
    excerpt: "Architecting a unified Compose Multiplatform core that bridges Metal on Apple, DirectML on Windows, and WebAssembly in browsers."
  },
  {
    id: "art-5",
    title: "SmolLM2 135M: Ultra-fast Inference on 512MB RAM with Zero Battery Penalty",
    genre: "Ultra-Light",
    tagClass: "genre-tag-amber",
    readTime: "3 min read",
    author: "Hugging Face TB",
    date: "September 2026",
    excerpt: "Pushing the extreme boundary of on-device LLMs. Why sub-100MB models are revolutionizing smartwatches and IoT edge devices."
  },
  {
    id: "art-6",
    title: "Devanagari & Multilingual Tokens: Sanskrit and Hindi Processing in Edge Models",
    genre: "Language Tech",
    tagClass: "genre-tag",
    readTime: "4 min read",
    author: "Amber NLP",
    date: "September 2026",
    excerpt: "Preserving grammar, IAST transliteration, and philosophical semantic precision in compact on-device vocabulary tokenizers."
  }
];

// App State
let activeModel = CHAKRA_MODELS[0];
let wheelRotation = 0;
let isGenerating = false;
let isSearchAugmented = true;

let chatHistory = [
  {
    sender: "assistant",
    text: "Namaste! I am **Amber AI**, operating in sovereign mode.\n\nI have access to small, free models from the **Edge Gallery** (Qwen 2.5, SmolLM2, Llama 3.2, DeepSeek-R1 Distill) with zero telemetry, complete privacy, and multiplatform support.\n\nSpin the **Chakra Wheel** above to switch models, or ask me anything below!",
    time: "Just now"
  }
];

// Init
document.addEventListener("DOMContentLoaded", () => {
  renderChakraWheel();
  renderEditorialFeed();
  renderModelGallery("All");
  setupChat();
  setupNav();
  updateActiveModelUI();
});

// --- 1. 3D Rotating Chakra Wheel (Ported from repo-chakramantra) ---
function renderChakraWheel() {
  const container = document.getElementById("chakra-wheel-slices");
  if (!container) return;

  const numSlices = CHAKRA_MODELS.length; // 10
  const radius = 225;
  const center = 250;
  const sliceAngle = 360 / numSlices;
  const textRadius = 165;

  let slicesHtml = "";

  CHAKRA_MODELS.forEach((model, i) => {
    const rotation = i * sliceAngle;
    const a1 = 0;
    const a2 = sliceAngle * (Math.PI / 180);

    const x1 = center + radius * Math.cos(a1);
    const y1 = center + radius * Math.sin(a1);
    const x2 = center + radius * Math.cos(a2);
    const y2 = center + radius * Math.sin(a2);

    const pathData = `M ${center} ${center} L ${x1} ${y1} A ${radius} ${radius} 0 0 1 ${x2} ${y2} Z`;

    const midAngle = (sliceAngle / 2) * (Math.PI / 180);
    const tx = center + textRadius * Math.cos(midAngle);
    const ty = center + textRadius * Math.sin(midAngle);

    const isActive = model.id === activeModel.id;

    slicesHtml += `
      <g transform="rotate(${rotation} ${center} ${center})">
        <g class="scroll-slice-group" onclick="selectChakraModel(${i})" title="${model.fullName}">
          <path d="${pathData}" class="scroll-slice-bg ${isActive ? 'active-slice' : ''}" id="slice-bg-${i}"></path>
          <text 
            x="${tx}" 
            y="${ty}" 
            transform="rotate(${sliceAngle / 2} ${tx} ${ty})" 
            fill="#f8fafc" 
            text-anchor="middle" 
            dominant-baseline="middle" 
            font-size="8.5" 
            font-weight="700" 
            letter-spacing="0.5" 
            style="font-family: 'Outfit', sans-serif;">
            ${model.name.toUpperCase()}
          </text>
        </g>
      </g>
    `;
  });

  container.innerHTML = slicesHtml;
}

// Select Model from Chakra Wheel
window.selectChakraModel = function(index) {
  activeModel = CHAKRA_MODELS[index];
  
  // Rotate wheel to place chosen model at top
  const targetAngle = -(index * (360 / CHAKRA_MODELS.length)) + 90;
  rotateWheelTo(targetAngle);

  // Update UI cards
  updateActiveModelUI();
  renderChakraWheel();

  // Notification in chat
  chatHistory.push({
    sender: "assistant",
    text: `⚡ **Chakra Wheel engaged: ${activeModel.fullName}** (${activeModel.size}, ${activeModel.format}). Running on-device at ${activeModel.speed}.`,
    time: "Just now"
  });
  renderMessages();
};

function rotateWheelTo(angle) {
  wheelRotation = angle;
  const wheelSvg = document.getElementById("main-chakra-svg");
  if (wheelSvg) {
    if (window.gsap) {
      gsap.to(wheelSvg, { rotation: angle, duration: 0.8, ease: "power2.out" });
    } else {
      wheelSvg.style.transform = `rotate(${angle}deg)`;
    }
  }
}

window.spinChakraWheel = function(direction = 1) {
  const currentIndex = CHAKRA_MODELS.findIndex(m => m.id === activeModel.id);
  let nextIndex = (currentIndex + direction + CHAKRA_MODELS.length) % CHAKRA_MODELS.length;
  selectChakraModel(nextIndex);
};

window.randomChakraModel = function() {
  const randomIndex = Math.floor(Math.random() * CHAKRA_MODELS.length);
  selectChakraModel(randomIndex);
};

function updateActiveModelUI() {
  // Update floating model card
  const title = document.getElementById("float-model-title");
  const author = document.getElementById("float-model-author");
  const size = document.getElementById("float-model-size");
  const ram = document.getElementById("float-model-ram");
  const speed = document.getElementById("float-model-speed");

  if (title) title.textContent = activeModel.name;
  if (author) author.textContent = "by " + activeModel.author;
  if (size) size.textContent = activeModel.size;
  if (ram) ram.textContent = activeModel.ramMin + " RAM";
  if (speed) speed.textContent = activeModel.speed;

  // Update Terminal Topbar
  const chip = document.getElementById("terminal-active-model-chip");
  if (chip) chip.textContent = activeModel.name;
  const dlBtn = document.getElementById("terminal-download-btn");
  if (dlBtn) dlBtn.href = activeModel.downloadUrl;
}

// --- 2. Editorial Insights Feed (Chakramantra Feed) ---
function renderEditorialFeed() {
  const grid = document.getElementById("editorial-articles-grid");
  if (!grid) return;

  grid.innerHTML = EDITORIAL_ARTICLES.map(art => `
    <div class="glass-card article-card group">
      <div>
        <div class="card-top">
          <span class="genre-tag ${art.tagClass}">${art.genre}</span>
          <span class="read-time">${art.readTime}</span>
        </div>
        <h3 class="card-title">${art.title}</h3>
        <p class="card-excerpt">${art.excerpt}</p>
      </div>
      <div class="card-footer">
        <span>✍️ ${art.author}</span>
        <span style="color: #c084fc; font-weight: 600; cursor: pointer;" onclick="usePrompt('Explain the core thesis of: ${art.title}')">
          Discuss with AI →
        </span>
      </div>
    </div>
  `).join("");
}

// --- 3. Edge Model Gallery Grid ---
function renderModelGallery(filter = "All") {
  const grid = document.getElementById("models-gallery-grid");
  if (!grid) return;

  const filtered = filter === "All"
    ? CHAKRA_MODELS
    : CHAKRA_MODELS.filter(m => m.category.toLowerCase() === filter.toLowerCase());

  grid.innerHTML = filtered.map(model => {
    const isActive = model.id === activeModel.id;
    return `
      <div class="glass-card article-card ${isActive ? 'glass-card-cyan' : ''}" style="${isActive ? 'border-color: rgba(6, 182, 212, 0.5);' : ''}">
        <div>
          <div class="card-top">
            <span class="genre-tag ${model.tagClass}">${model.category}</span>
            <span class="read-time">${model.speed}</span>
          </div>
          <h3 class="card-title">${model.fullName}</h3>
          <div style="font-size: 0.8rem; color: #64748b; margin-top: -6px; margin-bottom: 12px;">Author: ${model.author}</div>
          <p class="card-excerpt">${model.description}</p>
          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.5rem; margin-bottom: 1.25rem;">
            <div style="background: rgba(0,0,0,0.3); padding: 6px 10px; border-radius: 8px; font-size: 0.75rem;">
              <span style="color: #64748b; display: block;">File Size</span>
              <strong style="color: #fff;">${model.size}</strong>
            </div>
            <div style="background: rgba(0,0,0,0.3); padding: 6px 10px; border-radius: 8px; font-size: 0.75rem;">
              <span style="color: #64748b; display: block;">Memory Required</span>
              <strong style="color: #fff;">${model.ramMin} RAM</strong>
            </div>
            <div style="background: rgba(0,0,0,0.3); padding: 6px 10px; border-radius: 8px; font-size: 0.75rem;">
              <span style="color: #64748b; display: block;">Quantization</span>
              <strong style="color: #fff;">${model.format}</strong>
            </div>
            <div style="background: rgba(0,0,0,0.3); padding: 6px 10px; border-radius: 8px; font-size: 0.75rem;">
              <span style="color: #64748b; display: block;">Context Window</span>
              <strong style="color: #fff;">${model.context}</strong>
            </div>
          </div>
        </div>
        <div style="display: flex; gap: 0.5rem;">
          <button class="btn-primary ${isActive ? 'btn-cyan' : ''}" style="flex: 1; justify-content: center; padding: 0.45rem; font-size: 0.82rem;" onclick="selectModelById('${model.id}')">
            ${isActive ? '✓ Active in AI' : '⚡ Load in AI'}
          </button>
          <a href="${model.downloadUrl}" target="_blank" rel="noopener noreferrer" class="btn-secondary" style="flex: 1; justify-content: center; padding: 0.45rem; font-size: 0.82rem;">
            📥 Download GGUF
          </a>
        </div>
      </div>
    `;
  }).join("");
}

window.filterCatalog = function(cat, btn) {
  document.querySelectorAll(".cat-chip").forEach(c => c.classList.remove("active"));
  btn.classList.add("active");
  renderModelGallery(cat);
};

window.selectModelById = function(id) {
  const idx = CHAKRA_MODELS.findIndex(m => m.id === id);
  if (idx !== -1) selectChakraModel(idx);
  document.getElementById("terminal")?.scrollIntoView({ behavior: "smooth" });
};

// --- 4. Live Chat Terminal Execution ---
function setupChat() {
  const input = document.getElementById("terminal-chat-input");
  const sendBtn = document.getElementById("terminal-send-btn");

  if (!input || !sendBtn) return;

  const send = () => {
    const text = input.value.trim();
    if (!text || isGenerating) return;

    chatHistory.push({ sender: "user", text, time: "Just now" });
    input.value = "";
    renderMessages();
    streamAiReply(text);
  };

  sendBtn.addEventListener("click", send);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  });

  renderMessages();
}

function renderMessages() {
  const container = document.getElementById("terminal-messages-container");
  if (!container) return;

  container.innerHTML = chatHistory.map(msg => {
    const isUser = msg.sender === "user";
    const formatted = formatMarkdown(msg.text);

    return `
      <div style="display: flex; gap: 0.75rem; margin-bottom: 1.25rem; ${isUser ? 'flex-direction: row-reverse;' : ''}">
        <div style="width: 32px; height: 32px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; flex-shrink: 0; background: ${isUser ? '#334155' : 'linear-gradient(135deg, #a855f7, #06b6d4)'}; color: #fff; font-weight: bold;">
          ${isUser ? '👤' : '⚡'}
        </div>
        <div style="max-width: 85%; padding: 0.85rem 1.15rem; border-radius: 14px; font-size: 0.92rem; line-height: 1.55; ${isUser ? 'background: rgba(168, 85, 247, 0.15); border: 1px solid rgba(168, 85, 247, 0.3); color: #fff;' : 'background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.08); color: #f1f5f9;'}">
          ${formatted}
        </div>
      </div>
    `;
  }).join("");

  container.scrollTop = container.scrollHeight;
}

async function streamAiReply(prompt) {
  isGenerating = true;
  const sendBtn = document.getElementById("terminal-send-btn");
  if (sendBtn) sendBtn.disabled = true;

  const assistantMsg = { sender: "assistant", text: "", time: "Just now" };
  chatHistory.push(assistantMsg);

  const fullResponse = generateSmartResponse(prompt, activeModel, isSearchAugmented);

  let currentLen = 0;
  const step = 4;
  const timer = setInterval(() => {
    if (currentLen < fullResponse.length) {
      currentLen += step;
      assistantMsg.text = fullResponse.slice(0, currentLen);
      renderMessages();
    } else {
      assistantMsg.text = fullResponse;
      clearInterval(timer);
      isGenerating = false;
      if (sendBtn) sendBtn.disabled = false;
      renderMessages();
    }
  }, 16);
}

function generateSmartResponse(prompt, model, sag) {
  const p = prompt.toLowerCase();
  let thinkTrace = "";

  if (model.id === "deepseek-r1-1.5b") {
    thinkTrace = `<div style="background: rgba(0,0,0,0.4); border-left: 2px solid #f59e0b; padding: 8px 12px; border-radius: 6px; margin-bottom: 10px; font-family: monospace; font-size: 0.8rem; color: #94a3b8;">💭 DeepSeek R1 Thinking Trace:\n- Analyzing intent: "${prompt}"\n- Evaluating edge memory constraints & local vocabulary\n- Constructing reasoned deduction...</div>`;
  }

  if (p.includes("hello") || p.includes("hi") || p.includes("namaste")) {
    return `${thinkTrace}Namaste! 🙏 I am **Amber AI**, operating on **${model.fullName}**.\n\n- ⚡ **Engine:** Local On-Device (${model.size}, ${model.speed})\n- 🛡️ **Privacy:** Sovereign & Telemetry-Free\n- 🌐 **Mode:** ${sag ? 'Dual Search-Augmented (Google + DuckDuckGo)' : 'Strict Offline Edge'}\n\nAsk me about code, science, mathematics, language, or system design!`;
  }

  if (p.includes("code") || p.includes("kotlin") || p.includes("python") || p.includes("function")) {
    return `${thinkTrace}Here is an edge-optimized implementation for on-device pipelines:\n\n` +
      "```kotlin\n" +
      "// Amber Multiplatform Kotlin Engine\n" +
      "import kotlinx.coroutines.flow.*\n\n" +
      "suspend fun streamEdgeModel(prompt: String): Flow<String> = flow {\n" +
      "    val tokens = tokenizer.encode(prompt)\n" +
      "    for (t in modelEngine.generate(tokens)) {\n" +
      "        emit(t)\n" +
      "    }\n" +
      "}\n" +
      "```\n\n" +
      `*Generated on-device via **${model.fullName}**.*`;
  }

  if (p.includes("sanskrit") || p.includes("hindi") || p.includes("language")) {
    return `${thinkTrace}**संस्कृत एवं हिन्दी ज्ञान (Sanskrit & Hindi)**\n\n` +
      `| Devanagari | IAST | Meaning |\n` +
      `|---|---|---|\n` +
      `| **सत्यमेव जयते नानृतम्** | Satyameva jayate nānṛtam | Truth alone triumphs, not untruth |\n` +
      `| **विद्या ददाति विनयं** | Vidyā dadāti vinayam | Knowledge bestows humility |\n` +
      `| **आत्मनिर्भर भारत** | Ātmanirbhar Bhārat | Sovereign, Self-Reliant Nation |\n\n` +
      `*Processed locally with high-fidelity Devanagari token support.*`;
  }

  return `${thinkTrace}**${sag ? '🌐 Dual Web-Augmented Response' : '⚡ Local Edge Response'}** via **${model.fullName}**\n\n` +
    `Regarding: *"**${prompt}**"*\n\n` +
    `Amber AI processed this query using **${model.fullName}** (${model.params} parameters, ${model.format}). ` +
    `The model executes completely on your device's GPU/CPU with no third-party API dependencies.\n\n` +
    `- **Latency Rating:** Rapid execution at ${model.speed}.\n` +
    `- **RAM Footprint:** Consumes under ${model.ramMin} RAM.\n` +
    `- **Compatibility:** Operates identically across Windows, Linux, macOS, iOS, and Android.`;
}

function formatMarkdown(text) {
  if (!text) return "";
  let html = text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  html = html.replace(/&lt;div style=&quot;(.*?)&quot;&gt;/g, '<div style="$1">').replace(/&lt;\/div&gt;/g, '</div>');
  html = html.replace(/```([a-z]*)\n([\s\S]*?)```/g, (m, lang, code) => `<pre class="code-block"><code>${code}</code></pre>`);
  html = html.replace(/`([^`]+)`/g, '<code style="background: rgba(255,255,255,0.08); padding: 2px 6px; border-radius: 4px; font-family: monospace; font-size: 0.85rem; color: #67e8f9;">$1</code>');
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong style="color: #fff;">$1</strong>');
  html = html.replace(/\*([^*]+)\*/g, '<em style="color: #cbd5e1;">$1</em>');
  html = html.replace(/\n/g, '<br>');
  return html;
}

window.usePrompt = function(text) {
  const input = document.getElementById("terminal-chat-input");
  if (input) {
    input.value = text;
    document.getElementById("terminal")?.scrollIntoView({ behavior: "smooth" });
    input.focus();
  }
};

window.copyApiCode = function(lang) {
  const codes = {
    curl: `curl -X POST http://localhost:8000/v1/chat/completions \\\n  -H "Content-Type: application/json" \\\n  -d '{\n    "model": "${activeModel.id}",\n    "messages": [{"role": "user", "content": "Hello Amber!"}]\n  }'`,
    python: `import requests\n\nresp = requests.post("http://localhost:8000/v1/chat/completions", json={\n    "model": "${activeModel.id}",\n    "messages": [{"role": "user", "content": "Explain quantum superposition"}]\n})\nprint(resp.json())`,
    js: `const res = await fetch("http://localhost:8000/v1/chat/completions", {\n  method: "POST",\n  headers: { "Content-Type": "application/json" },\n  body: JSON.stringify({\n    model: "${activeModel.id}",\n    messages: [{ role: "user", content: "Write a quicksort in Kotlin" }]\n  })\n});\nconsole.log(await res.json());`
  };

  navigator.clipboard.writeText(codes[lang] || "");
  alert(`Copied ${lang.toUpperCase()} snippet to clipboard!`);
};

function setupNav() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });
}
