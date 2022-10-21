export function supportWebGL () {
  const canvas = document.createElement("canvas")
  const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl")

  if (gl && gl instanceof WebGLRenderingContext) return true
  else false
}