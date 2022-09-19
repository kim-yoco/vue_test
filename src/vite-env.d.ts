/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// 添加环境变量提示
interface ImportMetaEnv {
  readonly VITE_APP_PORT: number
  // more path..
}.

interface ImportMeta {
  readonly env: ImportMetaEnv
}