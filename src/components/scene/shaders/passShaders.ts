// ─── VERTEX SHADER (shared across all passes) ──────────────────────────────
export const vertexShader = /* glsl */ `
  varying vec3 vNormal;
  varying vec3 vWorldPos;
  varying vec3 vViewPos;
  varying vec2 vUv;
  varying float vDepth;

  void main() {
    vUv = uv;
    vNormal = normalize(normalMatrix * normal);

    vec4 worldPos = modelMatrix * vec4(position, 1.0);
    vWorldPos = worldPos.xyz;

    vec4 viewPos = viewMatrix * worldPos;
    vViewPos = viewPos.xyz;

    gl_Position = projectionMatrix * viewPos;
    // Normalize depth 0 (near) → 1 (far) in view space
    vDepth = clamp((-viewPos.z - 0.5) / 12.0, 0.0, 1.0);
  }
`;

// ─── BEAUTY PASS ───────────────────────────────────────────────────────────
export const beautyFragment = /* glsl */ `
  uniform float uTime;
  uniform vec3  uColor;
  uniform float uPassBlend;   // 0 = this pass, 1 = transitioning away
  varying vec3  vNormal;
  varying vec3  vWorldPos;
  varying vec2  vUv;

  vec3 lightDir = normalize(vec3(1.2, 2.0, 1.5));

  void main() {
    vec3 N = normalize(vNormal);

    // Diffuse
    float diff = max(dot(N, lightDir), 0.0);

    // Specular (Blinn-Phong)
    vec3 viewDir = normalize(cameraPosition - vWorldPos);
    vec3 halfDir = normalize(lightDir + viewDir);
    float spec = pow(max(dot(N, halfDir), 0.0), 64.0);

    // Rim light (periwinkle tint — the scene's own color)
    float rim = pow(1.0 - max(dot(N, viewDir), 0.0), 3.0);

    vec3 ambient = uColor * 0.12;
    vec3 diffuse = uColor * diff * 0.75;
    vec3 specular = vec3(1.0) * spec * 0.4;
    vec3 rimLight = vec3(0.549, 0.549, 0.961) * rim * 0.35; // --normal periwinkle

    vec3 col = ambient + diffuse + specular + rimLight;
    gl_FragColor = vec4(col, 1.0);
  }
`;

// ─── ALBEDO PASS (flat, unlit base color) ──────────────────────────────────
export const albedoFragment = /* glsl */ `
  uniform vec3 uColor;
  varying vec2 vUv;

  void main() {
    // Flat, unlit albedo — no lighting, just base color
    gl_FragColor = vec4(uColor, 1.0);
  }
`;

// ─── NORMAL PASS (world-space normals encoded as RGB) ──────────────────────
export const normalFragment = /* glsl */ `
  varying vec3 vNormal;

  void main() {
    // Encode normal from [-1,1] → [0,1] range — produces the periwinkle look
    vec3 N = normalize(vNormal);
    vec3 encoded = N * 0.5 + 0.5;
    gl_FragColor = vec4(encoded, 1.0);
  }
`;

// ─── DEPTH PASS (grayscale, near=white → far=black) ────────────────────────
export const depthFragment = /* glsl */ `
  varying float vDepth;

  void main() {
    float d = 1.0 - vDepth;  // near = bright, far = dark
    gl_FragColor = vec4(d, d, d, 1.0);
  }
`;

// ─── WIREFRAME PASS ────────────────────────────────────────────────────────
// Note: wireframe is handled by Three.js wireframe geometry + this shader.
export const wireFragment = /* glsl */ `
  uniform vec3 uLineColor;

  void main() {
    gl_FragColor = vec4(uLineColor, 1.0);
  }
`;
