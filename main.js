import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import ElementPlus from 'element-plus' //添加
import 'element-plus/dist/index.css'   //添加
import locale from 'element-plus/lib/locale/lang/zh-cn' //切换为中文版本
Vue.config.productionTip = false
App.mpType = 'app'

try {
  function isPromise(obj) {
    return (
      !!obj &&
      (typeof obj === "object" || typeof obj === "function") &&
      typeof obj.then === "function"
    );
  }

  // 统一 vue2 API Promise 化返回格式与 vue3 保持一致
  uni.addInterceptor({
    returnValue(res) {
      if (!isPromise(res)) {
        return res;
      }
      return new Promise((resolve, reject) => {
        res.then((res) => {
          if (res[0]) {
            reject(res[0]);
          } else {
            resolve(res[1]);
          }
        });
      });
    },
  });
} catch (error) { }

const app = new Vue({
  ...App
})
app.$mount()
app.use(ElementPlus);
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  app.use(ElementPlus, {
  		locale
  	})
  return {
    app
  }
}
// #endif
