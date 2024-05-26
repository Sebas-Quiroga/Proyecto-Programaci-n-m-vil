import {
  findClosestIonContent,
  scrollToTop
} from "./chunk-BGXONFHU.js";
import {
  componentOnReady
} from "./chunk-43EAWSPA.js";
import {
  readTask,
  writeTask
} from "./chunk-BIWEPZVF.js";
import "./chunk-AMBSP7Z4.js";

// node_modules/@ionic/core/components/status-tap.js
var startStatusTap = () => {
  const win = window;
  win.addEventListener("statusTap", () => {
    readTask(() => {
      const width = win.innerWidth;
      const height = win.innerHeight;
      const el = document.elementFromPoint(width / 2, height / 2);
      if (!el) {
        return;
      }
      const contentEl = findClosestIonContent(el);
      if (contentEl) {
        new Promise((resolve) => componentOnReady(contentEl, resolve)).then(() => {
          writeTask(async () => {
            contentEl.style.setProperty("--overflow", "hidden");
            await scrollToTop(contentEl, 300);
            contentEl.style.removeProperty("--overflow");
          });
        });
      }
    });
  });
};
export {
  startStatusTap
};
/*! Bundled license information:

@ionic/core/components/status-tap.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=status-tap-AD2FUTXZ.js.map
