<script setup lang="ts">
import { ref, onBeforeUnmount, watch } from "vue";

const PARTICLE_COUNT = 90;
const COLORS = [
  "#f87171", "#60a5fa", "#34d399", "#fbbf24",
  "#a78bfa", "#f472b6", "#f59e0b", "#10b981",
];
const GRAVITY = 0.35;
const DRAG = 0.92;
const SHAPES = ["rect", "line", "circle", "triangle", "star"];

function randomRange(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

const buttonRef = ref<HTMLElement | null>(null);
const particles = ref<any[]>([]);
const isLoading = ref(false);
const buttonText = ref("Claim");
const animationRef = ref<number | null>(null);

const createParticles = () => {
  if (!buttonRef.value) return;
  const rect = buttonRef.value.getBoundingClientRect();
  const originX = rect.left + rect.width / 2;
  const originY = rect.top + rect.height / 2;
  const newParticles = [];

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const angle = randomRange(40, 140) * (Math.PI / 180);
    const speed = randomRange(10, 20);
    newParticles.push({
      id: Math.random().toString(36).slice(2),
      x: originX,
      y: originY,
      vx: Math.cos(angle) * speed * (Math.random() > 0.5 ? 1 : -1) * randomRange(0.5, 1),
      vy: -Math.sin(angle) * speed,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      size: randomRange(4, 10),
      life: 50 + Math.floor(Math.random() * 30),
      shape: SHAPES[Math.floor(Math.random() * SHAPES.length)],
      rotationZ: randomRange(0, 360),
      rotationZSpeed: randomRange(-20, 20),
      rotationY: randomRange(0, 360),
      rotationYSpeed: randomRange(-15, 15),
      scale: 1,
      scaleSpeed: randomRange(-0.015, -0.005),
      opacity: 1,
    });
  }
  particles.value = newParticles;
};

const handleClick = () => {
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
    buttonText.value = "Success";
    createParticles();
    setTimeout(() => (buttonText.value = "Claim"), 2000);
  }, 1000);
};

const animateParticles = () => {
  particles.value = particles.value
    .map((p) => {
      let { x, y, vx, vy, life, rotationZ, rotationY, opacity, scale, scaleSpeed } = p;
      vy += GRAVITY;
      vx *= DRAG;
      vy *= DRAG;
      x += vx;
      y += vy;
      rotationZ += p.rotationZSpeed;
      rotationY += p.rotationYSpeed;
      life -= 1;
      if (life < 30) opacity = Math.max(0, life / 30);
      scale += scaleSpeed;
      if (scale < 0) scale = 0;
      return { ...p, x, y, vx, vy, life, rotationZ, rotationY, opacity, scale };
    })
    .filter((p) => p.life > 0 && p.y < window.innerHeight + 100);
  animationRef.value = requestAnimationFrame(animateParticles);
};

watch(
  () => particles.value.length,
  (length) => {
    if (length > 0) animationRef.value = requestAnimationFrame(animateParticles);
  }
);

onBeforeUnmount(() => {
  if (animationRef.value) cancelAnimationFrame(animationRef.value);
});
</script>

<template>
  <div class="relative">
    <button
      ref="buttonRef"
      @click="handleClick"
      :disabled="isLoading"
      class="w-32 px-6 py-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-semibold rounded-lg shadow-lg shadow-pink-500/50 hover:from-pink-600 hover:via-red-600 hover:to-yellow-600 transition-all duration-300 active:scale-90 relative overflow-hidden"
      :class="{ 'opacity-50 cursor-not-allowed': isLoading }"
    >
      <span v-if="isLoading" class="flex items-center justify-center">
        <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      </span>
      <span v-else>{{ buttonText }}</span>
    </button>

    <!-- Particle Layer -->
    <div
      style="position: fixed; top:0; left:0; width:100vw; height:100vh; overflow:hidden; pointer-events:none; z-index:9999; perspective:800px;"
    >
      <div
        v-for="p in particles"
        :key="p.id"
        :style="{
          position: 'absolute',
          left: p.x + 'px',
          top: p.y + 'px',
          opacity: p.opacity,
          pointerEvents: 'none',
          transform: `translate(-50%, -50%) rotateZ(${p.rotationZ}deg) rotateY(${p.rotationY}deg) scale(${p.scale})`,
          filter: 'drop-shadow(0 0 2px rgba(0,0,0,0.15))',
          willChange: 'transform, opacity'
        }"
      >
        <!-- Triangle -->
        <svg
          v-if="p.shape === 'triangle'"
          :width="p.size"
          :height="p.size"
          :viewBox="`0 0 ${p.size} ${p.size}`"
          :fill="p.color"
          style="display: block"
        >
          <path :d="`M 0 ${p.size} L ${p.size / 2} 0 L ${p.size} ${p.size} Z`" />
        </svg>

        <!-- Star -->
        <svg
          v-else-if="p.shape === 'star'"
          :width="p.size * 2"
          :height="p.size * 2"
          :viewBox="`0 0 ${p.size * 2} ${p.size * 2}`"
          :fill="p.color"
          style="display: block"
        >
          <path
            :d="(() => {
              const cx = p.size;
              const cy = p.size;
              const spikes = 5;
              const outerRadius = p.size;
              const innerRadius = p.size / 2.5;
              let rot = (Math.PI / 2) * 3;
              let path = '';
              for (let i = 0; i < spikes; i++) {
                let x = cx + Math.cos(rot) * outerRadius;
                let y = cy + Math.sin(rot) * outerRadius;
                path += `L${x} ${y} `;
                rot += Math.PI / spikes;
                x = cx + Math.cos(rot) * innerRadius;
                y = cy + Math.sin(rot) * innerRadius;
                path += `L${x} ${y} `;
                rot += Math.PI / spikes;
              }
              path += `L${cx} ${cy - outerRadius} Z`;
              return path;
            })()"
          />
        </svg>

        <!-- Rectangle -->
        <div
          v-else-if="p.shape === 'rect'"
          :style="{
            width: p.size + 'px',
            height: p.size * 0.6 + 'px',
            backgroundColor: p.color,
            borderRadius: p.size * 0.2 + 'px'
          }"
        ></div>

        <!-- Circle -->
        <div
          v-else-if="p.shape === 'circle'"
          :style="{
            width: p.size + 'px',
            height: p.size + 'px',
            backgroundColor: p.color,
            borderRadius: '50%'
          }"
        ></div>

        <!-- Line -->
        <div
          v-else-if="p.shape === 'line'"
          :style="{
            width: p.size * 0.3 + 'px',
            height: p.size * 1.8 + 'px',
            backgroundColor: p.color,
            borderRadius: p.size * 0.15 + 'px'
          }"
        ></div>
      </div>
    </div>
  </div>
</template>
