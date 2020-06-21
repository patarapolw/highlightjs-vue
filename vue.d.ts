import hljs from "highlight.js";

export = hljsRegisterVue;

/**
 * Add Vue styling to highlight.js
 * @param hljs 
 */
declare function hljsRegisterVue(hljs: hljs.HLJSStatic): void;

declare namespace hljsRegisterVue {
  /**
   * Add Vue styling to highlight.js
   * @param hljs 
   */
  function hljsRegisterVue(hljs: hljs.HLJSStatic): void;
  /**
   * Manually add Vue styling to highlight.js
   * 
   * ```typescript
   * import hljs from "highlight.js"
   * hljs.registerLanguage("vue", definer)
   * ```
   * @param hljs 
   */
  function hljsDefineVue(hljs: hljs.HLJSStatic): hljs.IModeBase;
}