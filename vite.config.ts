import { defineConfig, loadEnv, optimizeDeps } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from "path";
// 引入自动导入组件
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
// 引入element plus 组件库
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';



// https://vitejs.dev/config/
// export default defineConfig ({
//   plugins: [
//     vue(),
//     AutoImport({
//       //引入组件
//       resolvers:[ElementPlusResolver()],
//     }),
//     Components({
//       //引入组件
//       resolvers:[ElementPlusResolver()],
//     })
//   ],
//   // 类似publicPath，'./'避免打包访问后空白页面，要加上，不然线上也访问不了
//   base: './',
//   resolve: {
//     alias: {
//       //如果报错__dirname找不到，需要安装node,执行npm install @types/node --save-dev
//       "@": path.resolve(__dirname, "src"),
//       // "@assets": path.resolve(__dirname, "src/assets"),
//       // "@components": path.resolve(__dirname, "src/components"),
//       // "@views": path.resolve(__dirname, "src/views"),
//       // "@store": path.resolve(__dirname,"src/store"),
//       // "@images": path.resolve(__dirname, "src/images"),
//     },
//   },
//   build: {
//     outDir: "dist",
//     // 静态资源存放路径
//     assetsDir: "assets",
//     //是否构建 source map 文件
//     sourcemap: false,
//     terserOptions: {
//       // 生成环境移除console debugger
//       compress: {
//         drop_console: true,
//         drop_debugger: true,
//       },
//     },
//   },
//   server: {
//     https: false,
//     open: false,
//     cors: true,
//     // port: 5183,
//     // host: "0.0.0.0",
//     // proxy: {
//     //   "/api": {
//     //     target: "", //后台接口
//     //     changeOrigin: true,
//     //     secure: false, //如果是https 需要打开
//     //     //ws: true, //需要websocket支持
//     //     rewrite: (path) => path.replace(/^\/api/,''),
//     //   }
//     // }
//   },
//   // 引入第三方配置
//   optimizeDeps: {
//     include: [],
//   },
// })

export default defineConfig(({mode}) => {
  let env = loadEnv(mode,process.cwd(),'.env')
  const port = 5193
  const host = '0.0.0.0'
  console.log(mode)
  if (mode === 'serve') {
    const port = 5183
    const host = '0.0.0.0'
  }
  const plugin = [
        vue(),
        AutoImport({
          //引入组件
          resolvers:[ElementPlusResolver()],
        }),
        Components({
          //引入组件
          resolvers:[ElementPlusResolver()],
        })
      ];
  const resolve = {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    };
  const build = {
      outDir: "dist",
      // 静态资源存放路径
      assetsDir: "assets",
      //是否构建 source map 文件
      sourcemap: false,
      terserOptions: {
        // 生成环境移除console debugger
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    };
    
  const server = {
    https: false,
    open: false,
    cors: true,
    port: port,
    host: host,
  };
  return {
    plugins:plugin,
    resolve:resolve,
    build:build,
    server:server
  }
})