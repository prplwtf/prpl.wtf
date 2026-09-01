<template>
  <div class="wave" aria-hidden="true">
    <svg
      viewBox="0 0 1200 40"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        class="wave-path"
        d="M0,20 C100,5 200,35 300,20 C400,5 500,35 600,20 C700,5 800,35 900,20 C1000,5 1100,35 1200,20"
        fill="none"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  </div>
</template>

<style scoped>
.wave {
  width: 100%;
  overflow: visible;
}

.wave svg {
  width: 100%;
  height: 40px;
  overflow: visible;
}

.wave-path {
  stroke: currentColor;
  opacity: 0.25;
  stroke-dasharray: 2400;
  stroke-dashoffset: 2400;
  animation: wave-draw 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

@keyframes wave-draw {
  to {
    stroke-dashoffset: 0;
    opacity: 0.25;
  }
}
</style>
