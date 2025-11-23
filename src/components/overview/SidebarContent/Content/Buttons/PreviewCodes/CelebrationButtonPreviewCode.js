export const celebrationButtonPreviewCode =
  "<script setup lang=\"ts\">\n" +
  "import { ref, onBeforeUnmount, watch } from 'vue';\n" +
  "\n" +
  "const PARTICLE_COUNT = 90;\n" +
  "const COLORS = [\n" +
  "  '#f87171', '#60a5fa', '#34d399', '#fbbf24',\n" +
  "  '#a78bfa', '#f472b6', '#f59e0b', '#10b981',\n" +
  "];\n" +
  "const GRAVITY = 0.35;\n" +
  "const DRAG = 0.92;\n" +
  "const SHAPES = ['rect', 'line', 'circle', 'triangle', 'star'];\n" +
  "\n" +
  "function randomRange(min: number, max: number) {\n" +
  "  return Math.random() * (max - min) + min;\n" +
  "}\n" +
  "\n" +
  "const buttonRef = ref<HTMLElement | null>(null);\n" +
  "const particles = ref<any[]>([]);\n" +
  "const isLoading = ref(false);\n" +
  "const buttonText = ref('Claim');\n" +
  "const animationRef = ref<number | null>(null);\n" +
  "\n" +
  "const createParticles = () => {\n" +
  "  if (!buttonRef.value) return;\n" +
  "  const rect = buttonRef.value.getBoundingClientRect();\n" +
  "  const originX = rect.left + rect.width / 2;\n" +
  "  const originY = rect.top + rect.height / 2;\n" +
  "  const newParticles = [];\n" +
  "\n" +
  "  for (let i = 0; i < PARTICLE_COUNT; i++) {\n" +
  "    const angle = randomRange(40, 140) * (Math.PI / 180);\n" +
  "    const speed = randomRange(10, 20);\n" +
  "    newParticles.push({\n" +
  "      id: Math.random().toString(36).slice(2),\n" +
  "      x: originX,\n" +
  "      y: originY,\n" +
  "      vx: Math.cos(angle) * speed * (Math.random() > 0.5 ? 1 : -1) * randomRange(0.5, 1),\n" +
  "      vy: -Math.sin(angle) * speed,\n" +
  "      color: COLORS[Math.floor(Math.random() * COLORS.length)],\n" +
  "      size: randomRange(4, 10),\n" +
  "      life: 50 + Math.floor(Math.random() * 30),\n" +
  "      shape: SHAPES[Math.floor(Math.random() * SHAPES.length)],\n" +
  "      rotationZ: randomRange(0, 360),\n" +
  "      rotationZSpeed: randomRange(-20, 20),\n" +
  "      rotationY: randomRange(0, 360),\n" +
  "      rotationYSpeed: randomRange(-15, 15),\n" +
  "      scale: 1,\n" +
  "      scaleSpeed: randomRange(-0.015, -0.005),\n" +
  "      opacity: 1,\n" +
  "    });\n" +
  "  }\n" +
  "  particles.value = newParticles;\n" +
  "};\n" +
  "\n" +
  "const handleClick = () => {\n" +
  "  isLoading.value = true;\n" +
  "  setTimeout(() => {\n" +
  "    isLoading.value = false;\n" +
  "    buttonText.value = 'Success';\n" +
  "    createParticles();\n" +
  "    setTimeout(() => (buttonText.value = 'Claim'), 2000);\n" +
  "  }, 1000);\n" +
  "};\n" +
  "\n" +
  "const animateParticles = () => {\n" +
  "  particles.value = particles.value\n" +
  "    .map((p) => {\n" +
  "      let { x, y, vx, vy, life, rotationZ, rotationY, opacity, scale, scaleSpeed } = p;\n" +
  "      vy += GRAVITY;\n" +
  "      vx *= DRAG;\n" +
  "      vy *= DRAG;\n" +
  "      x += vx;\n" +
  "      y += vy;\n" +
  "      rotationZ += p.rotationZSpeed;\n" +
  "      rotationY += p.rotationYSpeed;\n" +
  "      life -= 1;\n" +
  "      if (life < 30) opacity = Math.max(0, life / 30);\n" +
  "      scale += scaleSpeed;\n" +
  "      if (scale < 0) scale = 0;\n" +
  "      return { ...p, x, y, vx, vy, life, rotationZ, rotationY, opacity, scale };\n" +
  "    })\n" +
  "    .filter((p) => p.life > 0 && p.y < window.innerHeight + 100);\n" +
  "  animationRef.value = requestAnimationFrame(animateParticles);\n" +
  "};\n" +
  "\n" +
  "watch(\n" +
  "  () => particles.value.length,\n" +
  "  (length) => {\n" +
  "    if (length > 0) animationRef.value = requestAnimationFrame(animateParticles);\n" +
  "  }\n" +
  ");\n" +
  "\n" +
  "onBeforeUnmount(() => {\n" +
  "  if (animationRef.value) cancelAnimationFrame(animationRef.value);\n" +
  "});\n" +
  "</script>\n" +
  "\n" +
  "<template>\n" +
  '  <div class=\"relative\">\n' +
  "    <button\n" +
  "      ref=\"buttonRef\"\n" +
  "      @click=\"handleClick\"\n" +
  "      :disabled=\"isLoading\"\n" +
  "      class=\"w-32 px-6 py-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-semibold rounded-lg shadow-lg shadow-pink-500/50 hover:from-pink-600 hover:via-red-600 hover:to-yellow-600 transition-all duration-300 active:scale-90 relative overflow-hidden\"\n" +
  "      :class=\"{ 'opacity-50 cursor-not-allowed': isLoading }\"\n" +
  "    >\n" +
  "      <span v-if=\"isLoading\" class=\"flex items-center justify-center\">\n" +
  "        <svg class=\"animate-spin h-5 w-5 text-white\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\">\n" +
  "          <circle class=\"opacity-25\" cx=\"12\" cy=\"12\" r=\"10\" stroke=\"currentColor\" stroke-width=\"4\" />\n" +
  "          <path class=\"opacity-75\" fill=\"currentColor\" d=\"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z\" />\n" +
  "        </svg>\n" +
  "      </span>\n" +
  "      <span v-else>{{ buttonText }}</span>\n" +
  "    </button>\n" +
  "\n" +
  "    <!-- Particle Layer -->\n" +
  '    <div\n' +
  "      style=\"position: fixed; top:0; left:0; width:100vw; height:100vh; overflow:hidden; pointer-events:none; z-index:9999; perspective:800px;\"\n" +
  "    >\n" +
  "      <div\n" +
  "        v-for=\"p in particles\"\n" +
  "        :key=\"p.id\"\n" +
  "        :style=\"{\n" +
  "          position: 'absolute',\n" +
  "          left: p.x + 'px',\n" +
  "          top: p.y + 'px',\n" +
  "          opacity: p.opacity,\n" +
  "          pointerEvents: 'none',\n" +
  "          transform: \\`translate(-50%, -50%) rotateZ(\\${p.rotationZ}deg) rotateY(\\${p.rotationY}deg) scale(\\${p.scale})\\`,\n" +
  "          filter: 'drop-shadow(0 0 2px rgba(0,0,0,0.15))',\n" +
  "          willChange: 'transform, opacity'\n" +
  "        }\"\n" +
  "      >\n" +
  "        <!-- Triangle -->\n" +
  "        <svg\n" +
  "          v-if=\"p.shape === 'triangle'\"\n" +
  "          :width=\"p.size\"\n" +
  "          :height=\"p.size\"\n" +
  "          :viewBox=\"\\`0 0 \\${p.size} \\${p.size}\\`\"\n" +
  "          :fill=\"p.color\"\n" +
  "          style=\"display: block\"\n" +
  "        >\n" +
  "          <path :d=\"\\`M 0 \\${p.size} L \\${p.size / 2} 0 L \\${p.size} \\${p.size} Z\\`\" />\n" +
  "        </svg>\n" +
  "\n" +
  "        <!-- Star -->\n" +
  "        <svg\n" +
  "          v-else-if=\"p.shape === 'star'\"\n" +
  "          :width=\"p.size * 2\"\n" +
  "          :height=\"p.size * 2\"\n" +
  "          :viewBox=\"\\`0 0 \\${p.size * 2} \\${p.size * 2}\\`\"\n" +
  "          :fill=\"p.color\"\n" +
  "          style=\"display: block\"\n" +
  "        >\n" +
  "          <path :d=\"createStarPath(p.size)\" />\n" +
  "        </svg>\n" +
  "\n" +
  "        <!-- Rectangle -->\n" +
  "        <div\n" +
  "          v-else-if=\"p.shape === 'rect'\"\n" +
  "          :style=\"{\n" +
  "            width: p.size + 'px',\n" +
  "            height: p.size * 0.6 + 'px',\n" +
  "            backgroundColor: p.color,\n" +
  "            borderRadius: p.size * 0.2 + 'px'\n" +
  "          }\"\n" +
  "        ></div>\n" +
  "\n" +
  "        <!-- Circle -->\n" +
  "        <div\n" +
  "          v-else-if=\"p.shape === 'circle'\"\n" +
  "          :style=\"{\n" +
  "            width: p.size + 'px',\n" +
  "            height: p.size + 'px',\n" +
  "            backgroundColor: p.color,\n" +
  "            borderRadius: '50%'\n" +
  "          }\"\n" +
  "        ></div>\n" +
  "\n" +
  "        <!-- Line -->\n" +
  "        <div\n" +
  "          v-else-if=\"p.shape === 'line'\"\n" +
  "          :style=\"{\n" +
  "            width: p.size * 0.3 + 'px',\n" +
  "            height: p.size * 1.8 + 'px',\n" +
  "            backgroundColor: p.color,\n" +
  "            borderRadius: p.size * 0.15 + 'px'\n" +
  "          }\"\n" +
  "        ></div>\n" +
  "      </div>\n" +
  "    </div>\n" +
  "  </div>\n" +
  "</template>";