import {
  __glob
} from "./chunk-AMBSP7Z4.js";

// node_modules/@stencil/core/internal/app-data/index.js
var BUILD = {
  allRenderFn: false,
  cmpDidLoad: true,
  cmpDidUnload: false,
  cmpDidUpdate: true,
  cmpDidRender: true,
  cmpWillLoad: true,
  cmpWillUpdate: true,
  cmpWillRender: true,
  connectedCallback: true,
  disconnectedCallback: true,
  element: true,
  event: true,
  hasRenderFn: true,
  lifecycle: true,
  hostListener: true,
  hostListenerTargetWindow: true,
  hostListenerTargetDocument: true,
  hostListenerTargetBody: true,
  hostListenerTargetParent: false,
  hostListenerTarget: true,
  member: true,
  method: true,
  mode: true,
  observeAttribute: true,
  prop: true,
  propMutable: true,
  reflect: true,
  scoped: true,
  shadowDom: true,
  slot: true,
  cssAnnotations: true,
  state: true,
  style: true,
  formAssociated: false,
  svg: true,
  updatable: true,
  vdomAttribute: true,
  vdomXlink: true,
  vdomClass: true,
  vdomFunctional: true,
  vdomKey: true,
  vdomListener: true,
  vdomRef: true,
  vdomPropOrAttr: true,
  vdomRender: true,
  vdomStyle: true,
  vdomText: true,
  watchCallback: true,
  taskQueue: true,
  hotModuleReplacement: false,
  isDebug: false,
  isDev: false,
  isTesting: false,
  hydrateServerSide: false,
  hydrateClientSide: false,
  lifecycleDOMEvents: false,
  lazyLoad: false,
  profile: false,
  slotRelocation: true,
  // TODO(STENCIL-914): remove this option when `experimentalSlotFixes` is the default behavior
  appendChildSlotFix: false,
  // TODO(STENCIL-914): remove this option when `experimentalSlotFixes` is the default behavior
  cloneNodeFix: false,
  hydratedAttribute: false,
  hydratedClass: true,
  scriptDataOpts: false,
  // TODO(STENCIL-914): remove this option when `experimentalSlotFixes` is the default behavior
  scopedSlotTextContentFix: false,
  // TODO(STENCIL-854): Remove code related to legacy shadowDomShim field
  shadowDomShim: false,
  // TODO(STENCIL-914): remove this option when `experimentalSlotFixes` is the default behavior
  slotChildNodesFix: false,
  invisiblePrehydration: true,
  propBoolean: true,
  propNumber: true,
  propString: true,
  constructableCSS: true,
  cmpShouldUpdate: true,
  devTools: false,
  shadowDelegatesFocus: true,
  initializeNextTick: false,
  asyncLoading: false,
  asyncQueue: false,
  transformTagName: false,
  attachStyles: true,
  // TODO(STENCIL-914): remove this option when `experimentalSlotFixes` is the default behavior
  experimentalSlotFixes: false
};
var NAMESPACE = (
  /* default */
  "app"
);

// node_modules/@stencil/core/mock-doc/index.js
var CONTENT_REF_ID = "r";
var ORG_LOCATION_ID = "o";
var SLOT_NODE_ID = "s";
var TEXT_NODE_ID = "t";
var XLINK_NS = "http://www.w3.org/1999/xlink";
var attrHandler = {
  get(obj, prop) {
    if (prop in obj) {
      return obj[prop];
    }
    if (typeof prop !== "symbol" && !isNaN(prop)) {
      return obj.__items[prop];
    }
    return void 0;
  }
};
var createAttributeProxy = (caseInsensitive) => new Proxy(new MockAttributeMap(caseInsensitive), attrHandler);
var MockAttributeMap = class {
  constructor(caseInsensitive = false) {
    this.caseInsensitive = caseInsensitive;
    this.__items = [];
  }
  get length() {
    return this.__items.length;
  }
  item(index) {
    return this.__items[index] || null;
  }
  setNamedItem(attr) {
    attr.namespaceURI = null;
    this.setNamedItemNS(attr);
  }
  setNamedItemNS(attr) {
    if (attr != null && attr.value != null) {
      attr.value = String(attr.value);
    }
    const existingAttr = this.__items.find((a) => a.name === attr.name && a.namespaceURI === attr.namespaceURI);
    if (existingAttr != null) {
      existingAttr.value = attr.value;
    } else {
      this.__items.push(attr);
    }
  }
  getNamedItem(attrName) {
    if (this.caseInsensitive) {
      attrName = attrName.toLowerCase();
    }
    return this.getNamedItemNS(null, attrName);
  }
  getNamedItemNS(namespaceURI, attrName) {
    namespaceURI = getNamespaceURI(namespaceURI);
    return this.__items.find((attr) => attr.name === attrName && getNamespaceURI(attr.namespaceURI) === namespaceURI) || null;
  }
  removeNamedItem(attr) {
    this.removeNamedItemNS(attr);
  }
  removeNamedItemNS(attr) {
    for (let i2 = 0, ii = this.__items.length; i2 < ii; i2++) {
      if (this.__items[i2].name === attr.name && this.__items[i2].namespaceURI === attr.namespaceURI) {
        this.__items.splice(i2, 1);
        break;
      }
    }
  }
  [Symbol.iterator]() {
    let i2 = 0;
    return {
      next: () => ({
        done: i2 === this.length,
        value: this.item(i2++)
      })
    };
  }
  get [Symbol.toStringTag]() {
    return "MockAttributeMap";
  }
};
function getNamespaceURI(namespaceURI) {
  return namespaceURI === XLINK_NS ? null : namespaceURI;
}
function cloneAttributes(srcAttrs, sortByName = false) {
  const dstAttrs = new MockAttributeMap(srcAttrs.caseInsensitive);
  if (srcAttrs != null) {
    const attrLen = srcAttrs.length;
    if (sortByName && attrLen > 1) {
      const sortedAttrs = [];
      for (let i2 = 0; i2 < attrLen; i2++) {
        const srcAttr = srcAttrs.item(i2);
        const dstAttr = new MockAttr(srcAttr.name, srcAttr.value, srcAttr.namespaceURI);
        sortedAttrs.push(dstAttr);
      }
      sortedAttrs.sort(sortAttributes).forEach((attr) => {
        dstAttrs.setNamedItemNS(attr);
      });
    } else {
      for (let i2 = 0; i2 < attrLen; i2++) {
        const srcAttr = srcAttrs.item(i2);
        const dstAttr = new MockAttr(srcAttr.name, srcAttr.value, srcAttr.namespaceURI);
        dstAttrs.setNamedItemNS(dstAttr);
      }
    }
  }
  return dstAttrs;
}
function sortAttributes(a, b) {
  if (a.name < b.name)
    return -1;
  if (a.name > b.name)
    return 1;
  return 0;
}
var MockAttr = class {
  constructor(attrName, attrValue, namespaceURI = null) {
    this._name = attrName;
    this._value = String(attrValue);
    this._namespaceURI = namespaceURI;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }
  get value() {
    return this._value;
  }
  set value(value) {
    this._value = String(value);
  }
  get nodeName() {
    return this._name;
  }
  set nodeName(value) {
    this._name = value;
  }
  get nodeValue() {
    return this._value;
  }
  set nodeValue(value) {
    this._value = String(value);
  }
  get namespaceURI() {
    return this._namespaceURI;
  }
  set namespaceURI(namespaceURI) {
    this._namespaceURI = namespaceURI;
  }
};
var NODE_TYPES = ((NODE_TYPES2) => {
  NODE_TYPES2[NODE_TYPES2["ELEMENT_NODE"] = 1] = "ELEMENT_NODE";
  NODE_TYPES2[NODE_TYPES2["ATTRIBUTE_NODE"] = 2] = "ATTRIBUTE_NODE";
  NODE_TYPES2[NODE_TYPES2["TEXT_NODE"] = 3] = "TEXT_NODE";
  NODE_TYPES2[NODE_TYPES2["CDATA_SECTION_NODE"] = 4] = "CDATA_SECTION_NODE";
  NODE_TYPES2[NODE_TYPES2["ENTITY_REFERENCE_NODE"] = 5] = "ENTITY_REFERENCE_NODE";
  NODE_TYPES2[NODE_TYPES2["ENTITY_NODE"] = 6] = "ENTITY_NODE";
  NODE_TYPES2[NODE_TYPES2["PROCESSING_INSTRUCTION_NODE"] = 7] = "PROCESSING_INSTRUCTION_NODE";
  NODE_TYPES2[NODE_TYPES2["COMMENT_NODE"] = 8] = "COMMENT_NODE";
  NODE_TYPES2[NODE_TYPES2["DOCUMENT_NODE"] = 9] = "DOCUMENT_NODE";
  NODE_TYPES2[NODE_TYPES2["DOCUMENT_TYPE_NODE"] = 10] = "DOCUMENT_TYPE_NODE";
  NODE_TYPES2[NODE_TYPES2["DOCUMENT_FRAGMENT_NODE"] = 11] = "DOCUMENT_FRAGMENT_NODE";
  NODE_TYPES2[NODE_TYPES2["NOTATION_NODE"] = 12] = "NOTATION_NODE";
  return NODE_TYPES2;
})(NODE_TYPES || {});
var MockClassList = class {
  constructor(elm) {
    this.elm = elm;
  }
  add(...classNames) {
    const clsNames = getItems(this.elm);
    let updated = false;
    classNames.forEach((className) => {
      className = String(className);
      validateClass(className);
      if (clsNames.includes(className) === false) {
        clsNames.push(className);
        updated = true;
      }
    });
    if (updated) {
      this.elm.setAttributeNS(null, "class", clsNames.join(" "));
    }
  }
  remove(...classNames) {
    const clsNames = getItems(this.elm);
    let updated = false;
    classNames.forEach((className) => {
      className = String(className);
      validateClass(className);
      const index = clsNames.indexOf(className);
      if (index > -1) {
        clsNames.splice(index, 1);
        updated = true;
      }
    });
    if (updated) {
      this.elm.setAttributeNS(null, "class", clsNames.filter((c) => c.length > 0).join(" "));
    }
  }
  contains(className) {
    className = String(className);
    return getItems(this.elm).includes(className);
  }
  toggle(className) {
    className = String(className);
    if (this.contains(className) === true) {
      this.remove(className);
    } else {
      this.add(className);
    }
  }
  get length() {
    return getItems(this.elm).length;
  }
  item(index) {
    return getItems(this.elm)[index];
  }
  toString() {
    return getItems(this.elm).join(" ");
  }
};
function validateClass(className) {
  if (className === "") {
    throw new Error("The token provided must not be empty.");
  }
  if (/\s/.test(className)) {
    throw new Error(
      `The token provided ('${className}') contains HTML space characters, which are not valid in tokens.`
    );
  }
}
function getItems(elm) {
  const className = elm.getAttribute("class");
  if (typeof className === "string" && className.length > 0) {
    return className.trim().split(" ").filter((c) => c.length > 0);
  }
  return [];
}
var MockCSSStyleDeclaration = class {
  constructor() {
    this._styles = /* @__PURE__ */ new Map();
  }
  setProperty(prop, value) {
    prop = jsCaseToCssCase(prop);
    if (value == null || value === "") {
      this._styles.delete(prop);
    } else {
      this._styles.set(prop, String(value));
    }
  }
  getPropertyValue(prop) {
    prop = jsCaseToCssCase(prop);
    return String(this._styles.get(prop) || "");
  }
  removeProperty(prop) {
    prop = jsCaseToCssCase(prop);
    this._styles.delete(prop);
  }
  get length() {
    return this._styles.size;
  }
  get cssText() {
    const cssText = [];
    this._styles.forEach((value, prop) => {
      cssText.push(`${prop}: ${value};`);
    });
    return cssText.join(" ").trim();
  }
  set cssText(cssText) {
    if (cssText == null || cssText === "") {
      this._styles.clear();
      return;
    }
    cssText.split(";").forEach((rule) => {
      rule = rule.trim();
      if (rule.length > 0) {
        const splt = rule.split(":");
        if (splt.length > 1) {
          const prop = splt[0].trim();
          const value = splt.slice(1).join(":").trim();
          if (prop !== "" && value !== "") {
            this._styles.set(jsCaseToCssCase(prop), value);
          }
        }
      }
    });
  }
};
function createCSSStyleDeclaration() {
  return new Proxy(new MockCSSStyleDeclaration(), cssProxyHandler);
}
var cssProxyHandler = {
  get(cssStyle, prop) {
    if (prop in cssStyle) {
      return cssStyle[prop];
    }
    prop = cssCaseToJsCase(prop);
    return cssStyle.getPropertyValue(prop);
  },
  set(cssStyle, prop, value) {
    if (prop in cssStyle) {
      cssStyle[prop] = value;
    } else {
      cssStyle.setProperty(prop, value);
    }
    return true;
  }
};
function cssCaseToJsCase(str) {
  if (str.length > 1 && str.includes("-") === true) {
    str = str.toLowerCase().split("-").map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1)).join("");
    str = str.slice(0, 1).toLowerCase() + str.slice(1);
  }
  return str;
}
function jsCaseToCssCase(str) {
  if (str.length > 1 && str.includes("-") === false && /[A-Z]/.test(str) === true) {
    str = str.replace(/([A-Z])/g, (g) => " " + g[0]).trim().replace(/ /g, "-").toLowerCase();
  }
  return str;
}
var MockCustomElementRegistry = class {
  constructor(win2) {
    this.win = win2;
  }
  define(tagName, cstr, options) {
    if (tagName.toLowerCase() !== tagName) {
      throw new Error(
        `Failed to execute 'define' on 'CustomElementRegistry': "${tagName}" is not a valid custom element name`
      );
    }
    if (this.__registry == null) {
      this.__registry = /* @__PURE__ */ new Map();
    }
    this.__registry.set(tagName, { cstr, options });
    if (this.__whenDefined != null) {
      const whenDefinedResolveFns = this.__whenDefined.get(tagName);
      if (whenDefinedResolveFns != null) {
        whenDefinedResolveFns.forEach((whenDefinedResolveFn) => {
          whenDefinedResolveFn();
        });
        whenDefinedResolveFns.length = 0;
        this.__whenDefined.delete(tagName);
      }
    }
    const doc2 = this.win.document;
    if (doc2 != null) {
      const hosts = doc2.querySelectorAll(tagName);
      hosts.forEach((host) => {
        if (upgradedElements.has(host) === false) {
          tempDisableCallbacks.add(doc2);
          const upgradedCmp = createCustomElement(this, doc2, tagName);
          for (let i2 = 0; i2 < host.childNodes.length; i2++) {
            const childNode = host.childNodes[i2];
            childNode.remove();
            upgradedCmp.appendChild(childNode);
          }
          tempDisableCallbacks.delete(doc2);
          if (proxyElements.has(host)) {
            proxyElements.set(host, upgradedCmp);
          }
        }
        fireConnectedCallback(host);
      });
    }
  }
  get(tagName) {
    if (this.__registry != null) {
      const def = this.__registry.get(tagName.toLowerCase());
      if (def != null) {
        return def.cstr;
      }
    }
    return void 0;
  }
  getName(cstr) {
    for (const [tagName, def] of this.__registry.entries()) {
      if (def.cstr === cstr) {
        return tagName;
      }
    }
    return void 0;
  }
  upgrade(_rootNode) {
  }
  clear() {
    if (this.__registry != null) {
      this.__registry.clear();
    }
    if (this.__whenDefined != null) {
      this.__whenDefined.clear();
    }
  }
  whenDefined(tagName) {
    tagName = tagName.toLowerCase();
    if (this.__registry != null && this.__registry.has(tagName) === true) {
      return Promise.resolve(this.__registry.get(tagName).cstr);
    }
    return new Promise((resolve) => {
      if (this.__whenDefined == null) {
        this.__whenDefined = /* @__PURE__ */ new Map();
      }
      let whenDefinedResolveFns = this.__whenDefined.get(tagName);
      if (whenDefinedResolveFns == null) {
        whenDefinedResolveFns = [];
        this.__whenDefined.set(tagName, whenDefinedResolveFns);
      }
      whenDefinedResolveFns.push(resolve);
    });
  }
};
function createCustomElement(customElements2, ownerDocument, tagName) {
  const Cstr = customElements2.get(tagName);
  if (Cstr != null) {
    const cmp = new Cstr(ownerDocument);
    cmp.nodeName = tagName.toUpperCase();
    upgradedElements.add(cmp);
    return cmp;
  }
  const host = new Proxy(
    {},
    {
      get(obj, prop) {
        const elm2 = proxyElements.get(host);
        if (elm2 != null) {
          return elm2[prop];
        }
        return obj[prop];
      },
      set(obj, prop, val) {
        const elm2 = proxyElements.get(host);
        if (elm2 != null) {
          elm2[prop] = val;
        } else {
          obj[prop] = val;
        }
        return true;
      },
      has(obj, prop) {
        const elm2 = proxyElements.get(host);
        if (prop in elm2) {
          return true;
        }
        if (prop in obj) {
          return true;
        }
        return false;
      }
    }
  );
  const elm = new MockHTMLElement(ownerDocument, tagName);
  proxyElements.set(host, elm);
  return host;
}
var proxyElements = /* @__PURE__ */ new WeakMap();
var upgradedElements = /* @__PURE__ */ new WeakSet();
function connectNode(ownerDocument, node) {
  node.ownerDocument = ownerDocument;
  if (node.nodeType === 1) {
    if (ownerDocument != null && node.nodeName.includes("-")) {
      const win2 = ownerDocument.defaultView;
      if (win2 != null && typeof node.connectedCallback === "function" && node.isConnected) {
        fireConnectedCallback(node);
      }
      const shadowRoot = node.shadowRoot;
      if (shadowRoot != null) {
        shadowRoot.childNodes.forEach((childNode) => {
          connectNode(ownerDocument, childNode);
        });
      }
    }
    node.childNodes.forEach((childNode) => {
      connectNode(ownerDocument, childNode);
    });
  } else {
    node.childNodes.forEach((childNode) => {
      childNode.ownerDocument = ownerDocument;
    });
  }
}
function fireConnectedCallback(node) {
  if (typeof node.connectedCallback === "function") {
    if (tempDisableCallbacks.has(node.ownerDocument) === false) {
      try {
        node.connectedCallback();
      } catch (e2) {
        console.error(e2);
      }
    }
  }
}
function disconnectNode(node) {
  if (node.nodeType === 1) {
    if (node.nodeName.includes("-") === true && typeof node.disconnectedCallback === "function") {
      if (tempDisableCallbacks.has(node.ownerDocument) === false) {
        try {
          node.disconnectedCallback();
        } catch (e2) {
          console.error(e2);
        }
      }
    }
    node.childNodes.forEach(disconnectNode);
  }
}
function attributeChanged(node, attrName, oldValue, newValue) {
  attrName = attrName.toLowerCase();
  const observedAttributes = node.constructor.observedAttributes;
  if (Array.isArray(observedAttributes) === true && observedAttributes.some((obs) => obs.toLowerCase() === attrName) === true) {
    try {
      node.attributeChangedCallback(attrName, oldValue, newValue);
    } catch (e2) {
      console.error(e2);
    }
  }
}
function checkAttributeChanged(node) {
  return node.nodeName.includes("-") === true && typeof node.attributeChangedCallback === "function";
}
var tempDisableCallbacks = /* @__PURE__ */ new Set();
function dataset(elm) {
  const ds = {};
  const attributes = elm.attributes;
  const attrLen = attributes.length;
  for (let i2 = 0; i2 < attrLen; i2++) {
    const attr = attributes.item(i2);
    const nodeName = attr.nodeName;
    if (nodeName.startsWith("data-")) {
      ds[dashToPascalCase(nodeName)] = attr.nodeValue;
    }
  }
  return new Proxy(ds, {
    get(_obj, camelCaseProp) {
      return ds[camelCaseProp];
    },
    set(_obj, camelCaseProp, value) {
      const dataAttr = toDataAttribute(camelCaseProp);
      elm.setAttribute(dataAttr, value);
      return true;
    }
  });
}
function toDataAttribute(str) {
  return "data-" + String(str).replace(/([A-Z0-9])/g, (g) => " " + g[0]).trim().replace(/ /g, "-").toLowerCase();
}
function dashToPascalCase(str) {
  str = String(str).slice(5);
  return str.split("-").map((segment, index) => {
    if (index === 0) {
      return segment.charAt(0).toLowerCase() + segment.slice(1);
    }
    return segment.charAt(0).toUpperCase() + segment.slice(1);
  }).join("");
}
var MockEvent = class {
  constructor(type, eventInitDict) {
    this.bubbles = false;
    this.cancelBubble = false;
    this.cancelable = false;
    this.composed = false;
    this.currentTarget = null;
    this.defaultPrevented = false;
    this.srcElement = null;
    this.target = null;
    if (typeof type !== "string") {
      throw new Error(`Event type required`);
    }
    this.type = type;
    this.timeStamp = Date.now();
    if (eventInitDict != null) {
      Object.assign(this, eventInitDict);
    }
  }
  preventDefault() {
    this.defaultPrevented = true;
  }
  stopPropagation() {
    this.cancelBubble = true;
  }
  stopImmediatePropagation() {
    this.cancelBubble = true;
  }
  /**
   * @ref https://developer.mozilla.org/en-US/docs/Web/API/Event/composedPath
   * @returns a composed path of the event
   */
  composedPath() {
    const composedPath = [];
    let currentElement = this.target;
    while (currentElement) {
      composedPath.push(currentElement);
      if (!currentElement.parentElement && currentElement.nodeName === "#document") {
        composedPath.push(currentElement.defaultView);
        break;
      }
      if (currentElement.parentElement == null && currentElement.tagName === "HTML") {
        currentElement = currentElement.ownerDocument;
      } else {
        currentElement = currentElement.parentElement;
      }
    }
    return composedPath;
  }
};
var MockCustomEvent = class extends MockEvent {
  constructor(type, customEventInitDic) {
    super(type);
    this.detail = null;
    if (customEventInitDic != null) {
      Object.assign(this, customEventInitDic);
    }
  }
};
var MockKeyboardEvent = class extends MockEvent {
  constructor(type, keyboardEventInitDic) {
    super(type);
    this.code = "";
    this.key = "";
    this.altKey = false;
    this.ctrlKey = false;
    this.metaKey = false;
    this.shiftKey = false;
    this.location = 0;
    this.repeat = false;
    if (keyboardEventInitDic != null) {
      Object.assign(this, keyboardEventInitDic);
    }
  }
};
var MockMouseEvent = class extends MockEvent {
  constructor(type, mouseEventInitDic) {
    super(type);
    this.screenX = 0;
    this.screenY = 0;
    this.clientX = 0;
    this.clientY = 0;
    this.ctrlKey = false;
    this.shiftKey = false;
    this.altKey = false;
    this.metaKey = false;
    this.button = 0;
    this.buttons = 0;
    this.relatedTarget = null;
    if (mouseEventInitDic != null) {
      Object.assign(this, mouseEventInitDic);
    }
  }
};
var MockUIEvent = class extends MockEvent {
  constructor(type, uiEventInitDic) {
    super(type);
    this.detail = null;
    this.view = null;
    if (uiEventInitDic != null) {
      Object.assign(this, uiEventInitDic);
    }
  }
};
var MockFocusEvent = class extends MockUIEvent {
  constructor(type, focusEventInitDic) {
    super(type);
    this.relatedTarget = null;
    if (focusEventInitDic != null) {
      Object.assign(this, focusEventInitDic);
    }
  }
};
var MockEventListener = class {
  constructor(type, handler) {
    this.type = type;
    this.handler = handler;
  }
};
function addEventListener(elm, type, handler) {
  const target = elm;
  if (target.__listeners == null) {
    target.__listeners = [];
  }
  target.__listeners.push(new MockEventListener(type, handler));
}
function removeEventListener(elm, type, handler) {
  const target = elm;
  if (target != null && Array.isArray(target.__listeners) === true) {
    const elmListener = target.__listeners.find((e2) => e2.type === type && e2.handler === handler);
    if (elmListener != null) {
      const index = target.__listeners.indexOf(elmListener);
      target.__listeners.splice(index, 1);
    }
  }
}
function resetEventListeners(target) {
  if (target != null && target.__listeners != null) {
    target.__listeners = null;
  }
}
function triggerEventListener(elm, ev) {
  if (elm == null || ev.cancelBubble === true) {
    return;
  }
  const target = elm;
  ev.currentTarget = elm;
  if (Array.isArray(target.__listeners) === true) {
    const listeners = target.__listeners.filter((e2) => e2.type === ev.type);
    listeners.forEach((listener) => {
      try {
        listener.handler.call(target, ev);
      } catch (err2) {
        console.error(err2);
      }
    });
  }
  if (ev.bubbles === false) {
    return;
  }
  if (elm.nodeName === "#document") {
    triggerEventListener(elm.defaultView, ev);
  } else if (elm.parentElement == null && elm.tagName === "HTML") {
    triggerEventListener(elm.ownerDocument, ev);
  } else {
    triggerEventListener(elm.parentElement, ev);
  }
}
function dispatchEvent(currentTarget, ev) {
  ev.target = currentTarget;
  triggerEventListener(currentTarget, ev);
  return true;
}
var e = function(e2) {
  const t = /* @__PURE__ */ new Set([65534, 65535, 131070, 131071, 196606, 196607, 262142, 262143, 327678, 327679, 393214, 393215, 458750, 458751, 524286, 524287, 589822, 589823, 655358, 655359, 720894, 720895, 786430, 786431, 851966, 851967, 917502, 917503, 983038, 983039, 1048574, 1048575, 1114110, 1114111]), s = "�";
  var a;
  !function(e3) {
    e3[e3.EOF = -1] = "EOF", e3[e3.NULL = 0] = "NULL", e3[e3.TABULATION = 9] = "TABULATION", e3[e3.CARRIAGE_RETURN = 13] = "CARRIAGE_RETURN", e3[e3.LINE_FEED = 10] = "LINE_FEED", e3[e3.FORM_FEED = 12] = "FORM_FEED", e3[e3.SPACE = 32] = "SPACE", e3[e3.EXCLAMATION_MARK = 33] = "EXCLAMATION_MARK", e3[e3.QUOTATION_MARK = 34] = "QUOTATION_MARK", e3[e3.NUMBER_SIGN = 35] = "NUMBER_SIGN", e3[e3.AMPERSAND = 38] = "AMPERSAND", e3[e3.APOSTROPHE = 39] = "APOSTROPHE", e3[e3.HYPHEN_MINUS = 45] = "HYPHEN_MINUS", e3[e3.SOLIDUS = 47] = "SOLIDUS", e3[e3.DIGIT_0 = 48] = "DIGIT_0", e3[e3.DIGIT_9 = 57] = "DIGIT_9", e3[e3.SEMICOLON = 59] = "SEMICOLON", e3[e3.LESS_THAN_SIGN = 60] = "LESS_THAN_SIGN", e3[e3.EQUALS_SIGN = 61] = "EQUALS_SIGN", e3[e3.GREATER_THAN_SIGN = 62] = "GREATER_THAN_SIGN", e3[e3.QUESTION_MARK = 63] = "QUESTION_MARK", e3[e3.LATIN_CAPITAL_A = 65] = "LATIN_CAPITAL_A", e3[e3.LATIN_CAPITAL_F = 70] = "LATIN_CAPITAL_F", e3[e3.LATIN_CAPITAL_X = 88] = "LATIN_CAPITAL_X", e3[e3.LATIN_CAPITAL_Z = 90] = "LATIN_CAPITAL_Z", e3[e3.RIGHT_SQUARE_BRACKET = 93] = "RIGHT_SQUARE_BRACKET", e3[e3.GRAVE_ACCENT = 96] = "GRAVE_ACCENT", e3[e3.LATIN_SMALL_A = 97] = "LATIN_SMALL_A", e3[e3.LATIN_SMALL_F = 102] = "LATIN_SMALL_F", e3[e3.LATIN_SMALL_X = 120] = "LATIN_SMALL_X", e3[e3.LATIN_SMALL_Z = 122] = "LATIN_SMALL_Z", e3[e3.REPLACEMENT_CHARACTER = 65533] = "REPLACEMENT_CHARACTER";
  }(a = a || (a = {}));
  const r = "[CDATA[", n = "doctype", i2 = "script";
  function o(e3) {
    return e3 >= 55296 && e3 <= 57343;
  }
  function c(e3) {
    return 32 !== e3 && 10 !== e3 && 13 !== e3 && 9 !== e3 && 12 !== e3 && e3 >= 1 && e3 <= 31 || e3 >= 127 && e3 <= 159;
  }
  function E(e3) {
    return e3 >= 64976 && e3 <= 65007 || t.has(e3);
  }
  var T, h2;
  !function(e3) {
    e3.controlCharacterInInputStream = "control-character-in-input-stream", e3.noncharacterInInputStream = "noncharacter-in-input-stream", e3.surrogateInInputStream = "surrogate-in-input-stream", e3.nonVoidHtmlElementStartTagWithTrailingSolidus = "non-void-html-element-start-tag-with-trailing-solidus", e3.endTagWithAttributes = "end-tag-with-attributes", e3.endTagWithTrailingSolidus = "end-tag-with-trailing-solidus", e3.unexpectedSolidusInTag = "unexpected-solidus-in-tag", e3.unexpectedNullCharacter = "unexpected-null-character", e3.unexpectedQuestionMarkInsteadOfTagName = "unexpected-question-mark-instead-of-tag-name", e3.invalidFirstCharacterOfTagName = "invalid-first-character-of-tag-name", e3.unexpectedEqualsSignBeforeAttributeName = "unexpected-equals-sign-before-attribute-name", e3.missingEndTagName = "missing-end-tag-name", e3.unexpectedCharacterInAttributeName = "unexpected-character-in-attribute-name", e3.unknownNamedCharacterReference = "unknown-named-character-reference", e3.missingSemicolonAfterCharacterReference = "missing-semicolon-after-character-reference", e3.unexpectedCharacterAfterDoctypeSystemIdentifier = "unexpected-character-after-doctype-system-identifier", e3.unexpectedCharacterInUnquotedAttributeValue = "unexpected-character-in-unquoted-attribute-value", e3.eofBeforeTagName = "eof-before-tag-name", e3.eofInTag = "eof-in-tag", e3.missingAttributeValue = "missing-attribute-value", e3.missingWhitespaceBetweenAttributes = "missing-whitespace-between-attributes", e3.missingWhitespaceAfterDoctypePublicKeyword = "missing-whitespace-after-doctype-public-keyword", e3.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers = "missing-whitespace-between-doctype-public-and-system-identifiers", e3.missingWhitespaceAfterDoctypeSystemKeyword = "missing-whitespace-after-doctype-system-keyword", e3.missingQuoteBeforeDoctypePublicIdentifier = "missing-quote-before-doctype-public-identifier", e3.missingQuoteBeforeDoctypeSystemIdentifier = "missing-quote-before-doctype-system-identifier", e3.missingDoctypePublicIdentifier = "missing-doctype-public-identifier", e3.missingDoctypeSystemIdentifier = "missing-doctype-system-identifier", e3.abruptDoctypePublicIdentifier = "abrupt-doctype-public-identifier", e3.abruptDoctypeSystemIdentifier = "abrupt-doctype-system-identifier", e3.cdataInHtmlContent = "cdata-in-html-content", e3.incorrectlyOpenedComment = "incorrectly-opened-comment", e3.eofInScriptHtmlCommentLikeText = "eof-in-script-html-comment-like-text", e3.eofInDoctype = "eof-in-doctype", e3.nestedComment = "nested-comment", e3.abruptClosingOfEmptyComment = "abrupt-closing-of-empty-comment", e3.eofInComment = "eof-in-comment", e3.incorrectlyClosedComment = "incorrectly-closed-comment", e3.eofInCdata = "eof-in-cdata", e3.absenceOfDigitsInNumericCharacterReference = "absence-of-digits-in-numeric-character-reference", e3.nullCharacterReference = "null-character-reference", e3.surrogateCharacterReference = "surrogate-character-reference", e3.characterReferenceOutsideUnicodeRange = "character-reference-outside-unicode-range", e3.controlCharacterReference = "control-character-reference", e3.noncharacterCharacterReference = "noncharacter-character-reference", e3.missingWhitespaceBeforeDoctypeName = "missing-whitespace-before-doctype-name", e3.missingDoctypeName = "missing-doctype-name", e3.invalidCharacterSequenceAfterDoctypeName = "invalid-character-sequence-after-doctype-name", e3.duplicateAttribute = "duplicate-attribute", e3.nonConformingDoctype = "non-conforming-doctype", e3.missingDoctype = "missing-doctype", e3.misplacedDoctype = "misplaced-doctype", e3.endTagWithoutMatchingOpenElement = "end-tag-without-matching-open-element", e3.closingOfElementWithOpenChildElements = "closing-of-element-with-open-child-elements", e3.disallowedContentInNoscriptInHead = "disallowed-content-in-noscript-in-head", e3.openElementsLeftAfterEof = "open-elements-left-after-eof", e3.abandonedHeadElementChild = "abandoned-head-element-child", e3.misplacedStartTagForHeadElement = "misplaced-start-tag-for-head-element", e3.nestedNoscriptInHead = "nested-noscript-in-head", e3.eofInElementThatCanContainOnlyText = "eof-in-element-that-can-contain-only-text";
  }(T = T || (T = {}));
  class _ {
    constructor(e3) {
      this.handler = e3, this.html = "", this.pos = -1, this.lastGapPos = -2, this.gapStack = [], this.skipNextNewLine = false, this.lastChunkWritten = false, this.endOfChunkHit = false, this.bufferWaterline = 65536, this.isEol = false, this.lineStartPos = 0, this.droppedBufferSize = 0, this.line = 1, this.lastErrOffset = -1;
    }
    get col() {
      return this.pos - this.lineStartPos + Number(this.lastGapPos !== this.pos);
    }
    get offset() {
      return this.droppedBufferSize + this.pos;
    }
    getError(e3) {
      const { line: t2, col: s2, offset: a2 } = this;
      return { code: e3, startLine: t2, endLine: t2, startCol: s2, endCol: s2, startOffset: a2, endOffset: a2 };
    }
    _err(e3) {
      this.handler.onParseError && this.lastErrOffset !== this.offset && (this.lastErrOffset = this.offset, this.handler.onParseError(this.getError(e3)));
    }
    _addGap() {
      this.gapStack.push(this.lastGapPos), this.lastGapPos = this.pos;
    }
    _processSurrogate(e3) {
      if (this.pos !== this.html.length - 1) {
        const t2 = this.html.charCodeAt(this.pos + 1);
        if (function(e4) {
          return e4 >= 56320 && e4 <= 57343;
        }(t2))
          return this.pos++, this._addGap(), 1024 * (e3 - 55296) + 9216 + t2;
      } else if (!this.lastChunkWritten)
        return this.endOfChunkHit = true, a.EOF;
      return this._err(T.surrogateInInputStream), e3;
    }
    willDropParsedChunk() {
      return this.pos > this.bufferWaterline;
    }
    dropParsedChunk() {
      this.willDropParsedChunk() && (this.html = this.html.substring(this.pos), this.lineStartPos -= this.pos, this.droppedBufferSize += this.pos, this.pos = 0, this.lastGapPos = -2, this.gapStack.length = 0);
    }
    write(e3, t2) {
      this.html.length > 0 ? this.html += e3 : this.html = e3, this.endOfChunkHit = false, this.lastChunkWritten = t2;
    }
    insertHtmlAtCurrentPos(e3) {
      this.html = this.html.substring(0, this.pos + 1) + e3 + this.html.substring(this.pos + 1), this.endOfChunkHit = false;
    }
    startsWith(e3, t2) {
      if (this.pos + e3.length > this.html.length)
        return this.endOfChunkHit = !this.lastChunkWritten, false;
      if (t2)
        return this.html.startsWith(e3, this.pos);
      for (let t3 = 0; t3 < e3.length; t3++)
        if ((32 | this.html.charCodeAt(this.pos + t3)) !== e3.charCodeAt(t3))
          return false;
      return true;
    }
    peek(e3) {
      const t2 = this.pos + e3;
      if (t2 >= this.html.length)
        return this.endOfChunkHit = !this.lastChunkWritten, a.EOF;
      const s2 = this.html.charCodeAt(t2);
      return s2 === a.CARRIAGE_RETURN ? a.LINE_FEED : s2;
    }
    advance() {
      if (this.pos++, this.isEol && (this.isEol = false, this.line++, this.lineStartPos = this.pos), this.pos >= this.html.length)
        return this.endOfChunkHit = !this.lastChunkWritten, a.EOF;
      let e3 = this.html.charCodeAt(this.pos);
      return e3 === a.CARRIAGE_RETURN ? (this.isEol = true, this.skipNextNewLine = true, a.LINE_FEED) : e3 === a.LINE_FEED && (this.isEol = true, this.skipNextNewLine) ? (this.line--, this.skipNextNewLine = false, this._addGap(), this.advance()) : (this.skipNextNewLine = false, o(e3) && (e3 = this._processSurrogate(e3)), null === this.handler.onParseError || e3 > 31 && e3 < 127 || e3 === a.LINE_FEED || e3 === a.CARRIAGE_RETURN || e3 > 159 && e3 < 64976 || this._checkForProblematicCharacters(e3), e3);
    }
    _checkForProblematicCharacters(e3) {
      c(e3) ? this._err(T.controlCharacterInInputStream) : E(e3) && this._err(T.noncharacterInInputStream);
    }
    retreat(e3) {
      for (this.pos -= e3; this.pos < this.lastGapPos; )
        this.lastGapPos = this.gapStack.pop(), this.pos--;
      this.isEol = false;
    }
  }
  function A(e3, t2) {
    for (let s2 = e3.attrs.length - 1; s2 >= 0; s2--)
      if (e3.attrs[s2].name === t2)
        return e3.attrs[s2].value;
    return null;
  }
  !function(e3) {
    e3[e3.CHARACTER = 0] = "CHARACTER", e3[e3.NULL_CHARACTER = 1] = "NULL_CHARACTER", e3[e3.WHITESPACE_CHARACTER = 2] = "WHITESPACE_CHARACTER", e3[e3.START_TAG = 3] = "START_TAG", e3[e3.END_TAG = 4] = "END_TAG", e3[e3.COMMENT = 5] = "COMMENT", e3[e3.DOCTYPE = 6] = "DOCTYPE", e3[e3.EOF = 7] = "EOF", e3[e3.HIBERNATION = 8] = "HIBERNATION";
  }(h2 = h2 || (h2 = {}));
  var l = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, m = {}, d = {};
  Object.defineProperty(d, "__esModule", { value: true }), d.default = new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(function(e3) {
    return e3.charCodeAt(0);
  }));
  var p = {};
  Object.defineProperty(p, "__esModule", { value: true }), p.default = new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(function(e3) {
    return e3.charCodeAt(0);
  }));
  var u, N, I, C, S, D = {};
  !function(e3) {
    var t2;
    Object.defineProperty(e3, "__esModule", { value: true }), e3.replaceCodePoint = e3.fromCodePoint = void 0;
    var s2 = /* @__PURE__ */ new Map([[0, 65533], [128, 8364], [130, 8218], [131, 402], [132, 8222], [133, 8230], [134, 8224], [135, 8225], [136, 710], [137, 8240], [138, 352], [139, 8249], [140, 338], [142, 381], [145, 8216], [146, 8217], [147, 8220], [148, 8221], [149, 8226], [150, 8211], [151, 8212], [152, 732], [153, 8482], [154, 353], [155, 8250], [156, 339], [158, 382], [159, 376]]);
    function a2(e4) {
      var t3;
      return e4 >= 55296 && e4 <= 57343 || e4 > 1114111 ? 65533 : null !== (t3 = s2.get(e4)) && void 0 !== t3 ? t3 : e4;
    }
    e3.fromCodePoint = null !== (t2 = String.fromCodePoint) && void 0 !== t2 ? t2 : function(e4) {
      var t3 = "";
      return e4 > 65535 && (e4 -= 65536, t3 += String.fromCharCode(e4 >>> 10 & 1023 | 55296), e4 = 56320 | 1023 & e4), t3 + String.fromCharCode(e4);
    }, e3.replaceCodePoint = a2, e3.default = function(t3) {
      return (0, e3.fromCodePoint)(a2(t3));
    };
  }(D), function(e3) {
    var t2 = l && l.__createBinding || (Object.create ? function(e4, t3, s3, a3) {
      void 0 === a3 && (a3 = s3);
      var r3 = Object.getOwnPropertyDescriptor(t3, s3);
      r3 && !("get" in r3 ? !t3.__esModule : r3.writable || r3.configurable) || (r3 = { enumerable: true, get: function() {
        return t3[s3];
      } }), Object.defineProperty(e4, a3, r3);
    } : function(e4, t3, s3, a3) {
      void 0 === a3 && (a3 = s3), e4[a3] = t3[s3];
    }), s2 = l && l.__setModuleDefault || (Object.create ? function(e4, t3) {
      Object.defineProperty(e4, "default", { enumerable: true, value: t3 });
    } : function(e4, t3) {
      e4.default = t3;
    }), a2 = l && l.__importStar || function(e4) {
      if (e4 && e4.__esModule)
        return e4;
      var a3 = {};
      if (null != e4)
        for (var r3 in e4)
          "default" !== r3 && Object.prototype.hasOwnProperty.call(e4, r3) && t2(a3, e4, r3);
      return s2(a3, e4), a3;
    }, r2 = l && l.__importDefault || function(e4) {
      return e4 && e4.__esModule ? e4 : { default: e4 };
    };
    Object.defineProperty(e3, "__esModule", { value: true }), e3.decodeXML = e3.decodeHTMLStrict = e3.decodeHTMLAttribute = e3.decodeHTML = e3.determineBranch = e3.EntityDecoder = e3.DecodingMode = e3.BinTrieFlags = e3.fromCodePoint = e3.replaceCodePoint = e3.decodeCodePoint = e3.xmlDecodeTree = e3.htmlDecodeTree = void 0;
    var n2 = r2(d);
    e3.htmlDecodeTree = n2.default;
    var i22 = r2(p);
    e3.xmlDecodeTree = i22.default;
    var o2 = a2(D);
    e3.decodeCodePoint = o2.default;
    var c2, E2, T2, h22, _2 = D;
    function A2(e4) {
      return e4 >= c2.ZERO && e4 <= c2.NINE;
    }
    Object.defineProperty(e3, "replaceCodePoint", { enumerable: true, get: function() {
      return _2.replaceCodePoint;
    } }), Object.defineProperty(e3, "fromCodePoint", { enumerable: true, get: function() {
      return _2.fromCodePoint;
    } }), function(e4) {
      e4[e4.NUM = 35] = "NUM", e4[e4.SEMI = 59] = "SEMI", e4[e4.EQUALS = 61] = "EQUALS", e4[e4.ZERO = 48] = "ZERO", e4[e4.NINE = 57] = "NINE", e4[e4.LOWER_A = 97] = "LOWER_A", e4[e4.LOWER_F = 102] = "LOWER_F", e4[e4.LOWER_X = 120] = "LOWER_X", e4[e4.LOWER_Z = 122] = "LOWER_Z", e4[e4.UPPER_A = 65] = "UPPER_A", e4[e4.UPPER_F = 70] = "UPPER_F", e4[e4.UPPER_Z = 90] = "UPPER_Z";
    }(c2 || (c2 = {})), function(e4) {
      e4[e4.VALUE_LENGTH = 49152] = "VALUE_LENGTH", e4[e4.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", e4[e4.JUMP_TABLE = 127] = "JUMP_TABLE";
    }(E2 = e3.BinTrieFlags || (e3.BinTrieFlags = {})), function(e4) {
      e4[e4.EntityStart = 0] = "EntityStart", e4[e4.NumericStart = 1] = "NumericStart", e4[e4.NumericDecimal = 2] = "NumericDecimal", e4[e4.NumericHex = 3] = "NumericHex", e4[e4.NamedEntity = 4] = "NamedEntity";
    }(T2 || (T2 = {})), function(e4) {
      e4[e4.Legacy = 0] = "Legacy", e4[e4.Strict = 1] = "Strict", e4[e4.Attribute = 2] = "Attribute";
    }(h22 = e3.DecodingMode || (e3.DecodingMode = {}));
    var m2 = function() {
      function e4(e5, t3, s3) {
        this.decodeTree = e5, this.emitCodePoint = t3, this.errors = s3, this.state = T2.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = h22.Strict;
      }
      return e4.prototype.startEntity = function(e5) {
        this.decodeMode = e5, this.state = T2.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1;
      }, e4.prototype.write = function(e5, t3) {
        switch (this.state) {
          case T2.EntityStart:
            return e5.charCodeAt(t3) === c2.NUM ? (this.state = T2.NumericStart, this.consumed += 1, this.stateNumericStart(e5, t3 + 1)) : (this.state = T2.NamedEntity, this.stateNamedEntity(e5, t3));
          case T2.NumericStart:
            return this.stateNumericStart(e5, t3);
          case T2.NumericDecimal:
            return this.stateNumericDecimal(e5, t3);
          case T2.NumericHex:
            return this.stateNumericHex(e5, t3);
          case T2.NamedEntity:
            return this.stateNamedEntity(e5, t3);
        }
      }, e4.prototype.stateNumericStart = function(e5, t3) {
        return t3 >= e5.length ? -1 : (32 | e5.charCodeAt(t3)) === c2.LOWER_X ? (this.state = T2.NumericHex, this.consumed += 1, this.stateNumericHex(e5, t3 + 1)) : (this.state = T2.NumericDecimal, this.stateNumericDecimal(e5, t3));
      }, e4.prototype.addToNumericResult = function(e5, t3, s3, a3) {
        if (t3 !== s3) {
          var r3 = s3 - t3;
          this.result = this.result * Math.pow(a3, r3) + parseInt(e5.substr(t3, r3), a3), this.consumed += r3;
        }
      }, e4.prototype.stateNumericHex = function(e5, t3) {
        for (var s3, a3 = t3; t3 < e5.length; ) {
          var r3 = e5.charCodeAt(t3);
          if (!(A2(r3) || (s3 = r3, s3 >= c2.UPPER_A && s3 <= c2.UPPER_F || s3 >= c2.LOWER_A && s3 <= c2.LOWER_F)))
            return this.addToNumericResult(e5, a3, t3, 16), this.emitNumericEntity(r3, 3);
          t3 += 1;
        }
        return this.addToNumericResult(e5, a3, t3, 16), -1;
      }, e4.prototype.stateNumericDecimal = function(e5, t3) {
        for (var s3 = t3; t3 < e5.length; ) {
          var a3 = e5.charCodeAt(t3);
          if (!A2(a3))
            return this.addToNumericResult(e5, s3, t3, 10), this.emitNumericEntity(a3, 2);
          t3 += 1;
        }
        return this.addToNumericResult(e5, s3, t3, 10), -1;
      }, e4.prototype.emitNumericEntity = function(e5, t3) {
        var s3;
        if (this.consumed <= t3)
          return null === (s3 = this.errors) || void 0 === s3 || s3.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
        if (e5 === c2.SEMI)
          this.consumed += 1;
        else if (this.decodeMode === h22.Strict)
          return 0;
        return this.emitCodePoint((0, o2.replaceCodePoint)(this.result), this.consumed), this.errors && (e5 !== c2.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
      }, e4.prototype.stateNamedEntity = function(e5, t3) {
        for (var s3 = this.decodeTree, a3 = s3[this.treeIndex], r3 = (a3 & E2.VALUE_LENGTH) >> 14; t3 < e5.length; t3++, this.excess++) {
          var n3 = e5.charCodeAt(t3);
          if (this.treeIndex = N2(s3, a3, this.treeIndex + Math.max(1, r3), n3), this.treeIndex < 0)
            return 0 === this.result || this.decodeMode === h22.Attribute && (0 === r3 || ((i3 = n3) === c2.EQUALS || function(e6) {
              return e6 >= c2.UPPER_A && e6 <= c2.UPPER_Z || e6 >= c2.LOWER_A && e6 <= c2.LOWER_Z || A2(e6);
            }(i3))) ? 0 : this.emitNotTerminatedNamedEntity();
          if (0 != (r3 = ((a3 = s3[this.treeIndex]) & E2.VALUE_LENGTH) >> 14)) {
            if (n3 === c2.SEMI)
              return this.emitNamedEntityData(this.treeIndex, r3, this.consumed + this.excess);
            this.decodeMode !== h22.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
          }
        }
        var i3;
        return -1;
      }, e4.prototype.emitNotTerminatedNamedEntity = function() {
        var e5, t3 = this.result, s3 = (this.decodeTree[t3] & E2.VALUE_LENGTH) >> 14;
        return this.emitNamedEntityData(t3, s3, this.consumed), null === (e5 = this.errors) || void 0 === e5 || e5.missingSemicolonAfterCharacterReference(), this.consumed;
      }, e4.prototype.emitNamedEntityData = function(e5, t3, s3) {
        var a3 = this.decodeTree;
        return this.emitCodePoint(1 === t3 ? a3[e5] & ~E2.VALUE_LENGTH : a3[e5 + 1], s3), 3 === t3 && this.emitCodePoint(a3[e5 + 2], s3), s3;
      }, e4.prototype.end = function() {
        var e5;
        switch (this.state) {
          case T2.NamedEntity:
            return 0 === this.result || this.decodeMode === h22.Attribute && this.result !== this.treeIndex ? 0 : this.emitNotTerminatedNamedEntity();
          case T2.NumericDecimal:
            return this.emitNumericEntity(0, 2);
          case T2.NumericHex:
            return this.emitNumericEntity(0, 3);
          case T2.NumericStart:
            return null === (e5 = this.errors) || void 0 === e5 || e5.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
          case T2.EntityStart:
            return 0;
        }
      }, e4;
    }();
    function u2(e4) {
      var t3 = "", s3 = new m2(e4, function(e5) {
        return t3 += (0, o2.fromCodePoint)(e5);
      });
      return function(e5, a3) {
        for (var r3 = 0, n3 = 0; (n3 = e5.indexOf("&", n3)) >= 0; ) {
          t3 += e5.slice(r3, n3), s3.startEntity(a3);
          var i3 = s3.write(e5, n3 + 1);
          if (i3 < 0) {
            r3 = n3 + s3.end();
            break;
          }
          r3 = n3 + i3, n3 = 0 === i3 ? r3 + 1 : r3;
        }
        var o3 = t3 + e5.slice(r3);
        return t3 = "", o3;
      };
    }
    function N2(e4, t3, s3, a3) {
      var r3 = (t3 & E2.BRANCH_LENGTH) >> 7, n3 = t3 & E2.JUMP_TABLE;
      if (0 === r3)
        return 0 !== n3 && a3 === n3 ? s3 : -1;
      if (n3) {
        var i3 = a3 - n3;
        return i3 < 0 || i3 >= r3 ? -1 : e4[s3 + i3] - 1;
      }
      for (var o3 = s3, c3 = o3 + r3 - 1; o3 <= c3; ) {
        var T3 = o3 + c3 >>> 1, h3 = e4[T3];
        if (h3 < a3)
          o3 = T3 + 1;
        else {
          if (!(h3 > a3))
            return e4[T3 + r3];
          c3 = T3 - 1;
        }
      }
      return -1;
    }
    e3.EntityDecoder = m2, e3.determineBranch = N2;
    var I2 = u2(n2.default), C2 = u2(i22.default);
    e3.decodeHTML = function(e4, t3) {
      return void 0 === t3 && (t3 = h22.Legacy), I2(e4, t3);
    }, e3.decodeHTMLAttribute = function(e4) {
      return I2(e4, h22.Attribute);
    }, e3.decodeHTMLStrict = function(e4) {
      return I2(e4, h22.Strict);
    }, e3.decodeXML = function(e4) {
      return C2(e4, h22.Strict);
    };
  }(m), function(e3) {
    e3.HTML = "http://www.w3.org/1999/xhtml", e3.MATHML = "http://www.w3.org/1998/Math/MathML", e3.SVG = "http://www.w3.org/2000/svg", e3.XLINK = "http://www.w3.org/1999/xlink", e3.XML = "http://www.w3.org/XML/1998/namespace", e3.XMLNS = "http://www.w3.org/2000/xmlns/";
  }(u = u || (u = {})), function(e3) {
    e3.TYPE = "type", e3.ACTION = "action", e3.ENCODING = "encoding", e3.PROMPT = "prompt", e3.NAME = "name", e3.COLOR = "color", e3.FACE = "face", e3.SIZE = "size";
  }(N = N || (N = {})), function(e3) {
    e3.NO_QUIRKS = "no-quirks", e3.QUIRKS = "quirks", e3.LIMITED_QUIRKS = "limited-quirks";
  }(I = I || (I = {})), function(e3) {
    e3.A = "a", e3.ADDRESS = "address", e3.ANNOTATION_XML = "annotation-xml", e3.APPLET = "applet", e3.AREA = "area", e3.ARTICLE = "article", e3.ASIDE = "aside", e3.B = "b", e3.BASE = "base", e3.BASEFONT = "basefont", e3.BGSOUND = "bgsound", e3.BIG = "big", e3.BLOCKQUOTE = "blockquote", e3.BODY = "body", e3.BR = "br", e3.BUTTON = "button", e3.CAPTION = "caption", e3.CENTER = "center", e3.CODE = "code", e3.COL = "col", e3.COLGROUP = "colgroup", e3.DD = "dd", e3.DESC = "desc", e3.DETAILS = "details", e3.DIALOG = "dialog", e3.DIR = "dir", e3.DIV = "div", e3.DL = "dl", e3.DT = "dt", e3.EM = "em", e3.EMBED = "embed", e3.FIELDSET = "fieldset", e3.FIGCAPTION = "figcaption", e3.FIGURE = "figure", e3.FONT = "font", e3.FOOTER = "footer", e3.FOREIGN_OBJECT = "foreignObject", e3.FORM = "form", e3.FRAME = "frame", e3.FRAMESET = "frameset", e3.H1 = "h1", e3.H2 = "h2", e3.H3 = "h3", e3.H4 = "h4", e3.H5 = "h5", e3.H6 = "h6", e3.HEAD = "head", e3.HEADER = "header", e3.HGROUP = "hgroup", e3.HR = "hr", e3.HTML = "html", e3.I = "i", e3.IMG = "img", e3.IMAGE = "image", e3.INPUT = "input", e3.IFRAME = "iframe", e3.KEYGEN = "keygen", e3.LABEL = "label", e3.LI = "li", e3.LINK = "link", e3.LISTING = "listing", e3.MAIN = "main", e3.MALIGNMARK = "malignmark", e3.MARQUEE = "marquee", e3.MATH = "math", e3.MENU = "menu", e3.META = "meta", e3.MGLYPH = "mglyph", e3.MI = "mi", e3.MO = "mo", e3.MN = "mn", e3.MS = "ms", e3.MTEXT = "mtext", e3.NAV = "nav", e3.NOBR = "nobr", e3.NOFRAMES = "noframes", e3.NOEMBED = "noembed", e3.NOSCRIPT = "noscript", e3.OBJECT = "object", e3.OL = "ol", e3.OPTGROUP = "optgroup", e3.OPTION = "option", e3.P = "p", e3.PARAM = "param", e3.PLAINTEXT = "plaintext", e3.PRE = "pre", e3.RB = "rb", e3.RP = "rp", e3.RT = "rt", e3.RTC = "rtc", e3.RUBY = "ruby", e3.S = "s", e3.SCRIPT = "script", e3.SECTION = "section", e3.SELECT = "select", e3.SOURCE = "source", e3.SMALL = "small", e3.SPAN = "span", e3.STRIKE = "strike", e3.STRONG = "strong", e3.STYLE = "style", e3.SUB = "sub", e3.SUMMARY = "summary", e3.SUP = "sup", e3.TABLE = "table", e3.TBODY = "tbody", e3.TEMPLATE = "template", e3.TEXTAREA = "textarea", e3.TFOOT = "tfoot", e3.TD = "td", e3.TH = "th", e3.THEAD = "thead", e3.TITLE = "title", e3.TR = "tr", e3.TRACK = "track", e3.TT = "tt", e3.U = "u", e3.UL = "ul", e3.SVG = "svg", e3.VAR = "var", e3.WBR = "wbr", e3.XMP = "xmp";
  }(C = C || (C = {})), function(e3) {
    e3[e3.UNKNOWN = 0] = "UNKNOWN", e3[e3.A = 1] = "A", e3[e3.ADDRESS = 2] = "ADDRESS", e3[e3.ANNOTATION_XML = 3] = "ANNOTATION_XML", e3[e3.APPLET = 4] = "APPLET", e3[e3.AREA = 5] = "AREA", e3[e3.ARTICLE = 6] = "ARTICLE", e3[e3.ASIDE = 7] = "ASIDE", e3[e3.B = 8] = "B", e3[e3.BASE = 9] = "BASE", e3[e3.BASEFONT = 10] = "BASEFONT", e3[e3.BGSOUND = 11] = "BGSOUND", e3[e3.BIG = 12] = "BIG", e3[e3.BLOCKQUOTE = 13] = "BLOCKQUOTE", e3[e3.BODY = 14] = "BODY", e3[e3.BR = 15] = "BR", e3[e3.BUTTON = 16] = "BUTTON", e3[e3.CAPTION = 17] = "CAPTION", e3[e3.CENTER = 18] = "CENTER", e3[e3.CODE = 19] = "CODE", e3[e3.COL = 20] = "COL", e3[e3.COLGROUP = 21] = "COLGROUP", e3[e3.DD = 22] = "DD", e3[e3.DESC = 23] = "DESC", e3[e3.DETAILS = 24] = "DETAILS", e3[e3.DIALOG = 25] = "DIALOG", e3[e3.DIR = 26] = "DIR", e3[e3.DIV = 27] = "DIV", e3[e3.DL = 28] = "DL", e3[e3.DT = 29] = "DT", e3[e3.EM = 30] = "EM", e3[e3.EMBED = 31] = "EMBED", e3[e3.FIELDSET = 32] = "FIELDSET", e3[e3.FIGCAPTION = 33] = "FIGCAPTION", e3[e3.FIGURE = 34] = "FIGURE", e3[e3.FONT = 35] = "FONT", e3[e3.FOOTER = 36] = "FOOTER", e3[e3.FOREIGN_OBJECT = 37] = "FOREIGN_OBJECT", e3[e3.FORM = 38] = "FORM", e3[e3.FRAME = 39] = "FRAME", e3[e3.FRAMESET = 40] = "FRAMESET", e3[e3.H1 = 41] = "H1", e3[e3.H2 = 42] = "H2", e3[e3.H3 = 43] = "H3", e3[e3.H4 = 44] = "H4", e3[e3.H5 = 45] = "H5", e3[e3.H6 = 46] = "H6", e3[e3.HEAD = 47] = "HEAD", e3[e3.HEADER = 48] = "HEADER", e3[e3.HGROUP = 49] = "HGROUP", e3[e3.HR = 50] = "HR", e3[e3.HTML = 51] = "HTML", e3[e3.I = 52] = "I", e3[e3.IMG = 53] = "IMG", e3[e3.IMAGE = 54] = "IMAGE", e3[e3.INPUT = 55] = "INPUT", e3[e3.IFRAME = 56] = "IFRAME", e3[e3.KEYGEN = 57] = "KEYGEN", e3[e3.LABEL = 58] = "LABEL", e3[e3.LI = 59] = "LI", e3[e3.LINK = 60] = "LINK", e3[e3.LISTING = 61] = "LISTING", e3[e3.MAIN = 62] = "MAIN", e3[e3.MALIGNMARK = 63] = "MALIGNMARK", e3[e3.MARQUEE = 64] = "MARQUEE", e3[e3.MATH = 65] = "MATH", e3[e3.MENU = 66] = "MENU", e3[e3.META = 67] = "META", e3[e3.MGLYPH = 68] = "MGLYPH", e3[e3.MI = 69] = "MI", e3[e3.MO = 70] = "MO", e3[e3.MN = 71] = "MN", e3[e3.MS = 72] = "MS", e3[e3.MTEXT = 73] = "MTEXT", e3[e3.NAV = 74] = "NAV", e3[e3.NOBR = 75] = "NOBR", e3[e3.NOFRAMES = 76] = "NOFRAMES", e3[e3.NOEMBED = 77] = "NOEMBED", e3[e3.NOSCRIPT = 78] = "NOSCRIPT", e3[e3.OBJECT = 79] = "OBJECT", e3[e3.OL = 80] = "OL", e3[e3.OPTGROUP = 81] = "OPTGROUP", e3[e3.OPTION = 82] = "OPTION", e3[e3.P = 83] = "P", e3[e3.PARAM = 84] = "PARAM", e3[e3.PLAINTEXT = 85] = "PLAINTEXT", e3[e3.PRE = 86] = "PRE", e3[e3.RB = 87] = "RB", e3[e3.RP = 88] = "RP", e3[e3.RT = 89] = "RT", e3[e3.RTC = 90] = "RTC", e3[e3.RUBY = 91] = "RUBY", e3[e3.S = 92] = "S", e3[e3.SCRIPT = 93] = "SCRIPT", e3[e3.SECTION = 94] = "SECTION", e3[e3.SELECT = 95] = "SELECT", e3[e3.SOURCE = 96] = "SOURCE", e3[e3.SMALL = 97] = "SMALL", e3[e3.SPAN = 98] = "SPAN", e3[e3.STRIKE = 99] = "STRIKE", e3[e3.STRONG = 100] = "STRONG", e3[e3.STYLE = 101] = "STYLE", e3[e3.SUB = 102] = "SUB", e3[e3.SUMMARY = 103] = "SUMMARY", e3[e3.SUP = 104] = "SUP", e3[e3.TABLE = 105] = "TABLE", e3[e3.TBODY = 106] = "TBODY", e3[e3.TEMPLATE = 107] = "TEMPLATE", e3[e3.TEXTAREA = 108] = "TEXTAREA", e3[e3.TFOOT = 109] = "TFOOT", e3[e3.TD = 110] = "TD", e3[e3.TH = 111] = "TH", e3[e3.THEAD = 112] = "THEAD", e3[e3.TITLE = 113] = "TITLE", e3[e3.TR = 114] = "TR", e3[e3.TRACK = 115] = "TRACK", e3[e3.TT = 116] = "TT", e3[e3.U = 117] = "U", e3[e3.UL = 118] = "UL", e3[e3.SVG = 119] = "SVG", e3[e3.VAR = 120] = "VAR", e3[e3.WBR = 121] = "WBR", e3[e3.XMP = 122] = "XMP";
  }(S = S || (S = {}));
  const R = /* @__PURE__ */ new Map([[C.A, S.A], [C.ADDRESS, S.ADDRESS], [C.ANNOTATION_XML, S.ANNOTATION_XML], [C.APPLET, S.APPLET], [C.AREA, S.AREA], [C.ARTICLE, S.ARTICLE], [C.ASIDE, S.ASIDE], [C.B, S.B], [C.BASE, S.BASE], [C.BASEFONT, S.BASEFONT], [C.BGSOUND, S.BGSOUND], [C.BIG, S.BIG], [C.BLOCKQUOTE, S.BLOCKQUOTE], [C.BODY, S.BODY], [C.BR, S.BR], [C.BUTTON, S.BUTTON], [C.CAPTION, S.CAPTION], [C.CENTER, S.CENTER], [C.CODE, S.CODE], [C.COL, S.COL], [C.COLGROUP, S.COLGROUP], [C.DD, S.DD], [C.DESC, S.DESC], [C.DETAILS, S.DETAILS], [C.DIALOG, S.DIALOG], [C.DIR, S.DIR], [C.DIV, S.DIV], [C.DL, S.DL], [C.DT, S.DT], [C.EM, S.EM], [C.EMBED, S.EMBED], [C.FIELDSET, S.FIELDSET], [C.FIGCAPTION, S.FIGCAPTION], [C.FIGURE, S.FIGURE], [C.FONT, S.FONT], [C.FOOTER, S.FOOTER], [C.FOREIGN_OBJECT, S.FOREIGN_OBJECT], [C.FORM, S.FORM], [C.FRAME, S.FRAME], [C.FRAMESET, S.FRAMESET], [C.H1, S.H1], [C.H2, S.H2], [C.H3, S.H3], [C.H4, S.H4], [C.H5, S.H5], [C.H6, S.H6], [C.HEAD, S.HEAD], [C.HEADER, S.HEADER], [C.HGROUP, S.HGROUP], [C.HR, S.HR], [C.HTML, S.HTML], [C.I, S.I], [C.IMG, S.IMG], [C.IMAGE, S.IMAGE], [C.INPUT, S.INPUT], [C.IFRAME, S.IFRAME], [C.KEYGEN, S.KEYGEN], [C.LABEL, S.LABEL], [C.LI, S.LI], [C.LINK, S.LINK], [C.LISTING, S.LISTING], [C.MAIN, S.MAIN], [C.MALIGNMARK, S.MALIGNMARK], [C.MARQUEE, S.MARQUEE], [C.MATH, S.MATH], [C.MENU, S.MENU], [C.META, S.META], [C.MGLYPH, S.MGLYPH], [C.MI, S.MI], [C.MO, S.MO], [C.MN, S.MN], [C.MS, S.MS], [C.MTEXT, S.MTEXT], [C.NAV, S.NAV], [C.NOBR, S.NOBR], [C.NOFRAMES, S.NOFRAMES], [C.NOEMBED, S.NOEMBED], [C.NOSCRIPT, S.NOSCRIPT], [C.OBJECT, S.OBJECT], [C.OL, S.OL], [C.OPTGROUP, S.OPTGROUP], [C.OPTION, S.OPTION], [C.P, S.P], [C.PARAM, S.PARAM], [C.PLAINTEXT, S.PLAINTEXT], [C.PRE, S.PRE], [C.RB, S.RB], [C.RP, S.RP], [C.RT, S.RT], [C.RTC, S.RTC], [C.RUBY, S.RUBY], [C.S, S.S], [C.SCRIPT, S.SCRIPT], [C.SECTION, S.SECTION], [C.SELECT, S.SELECT], [C.SOURCE, S.SOURCE], [C.SMALL, S.SMALL], [C.SPAN, S.SPAN], [C.STRIKE, S.STRIKE], [C.STRONG, S.STRONG], [C.STYLE, S.STYLE], [C.SUB, S.SUB], [C.SUMMARY, S.SUMMARY], [C.SUP, S.SUP], [C.TABLE, S.TABLE], [C.TBODY, S.TBODY], [C.TEMPLATE, S.TEMPLATE], [C.TEXTAREA, S.TEXTAREA], [C.TFOOT, S.TFOOT], [C.TD, S.TD], [C.TH, S.TH], [C.THEAD, S.THEAD], [C.TITLE, S.TITLE], [C.TR, S.TR], [C.TRACK, S.TRACK], [C.TT, S.TT], [C.U, S.U], [C.UL, S.UL], [C.SVG, S.SVG], [C.VAR, S.VAR], [C.WBR, S.WBR], [C.XMP, S.XMP]]);
  function O(e3) {
    var t2;
    return null !== (t2 = R.get(e3)) && void 0 !== t2 ? t2 : S.UNKNOWN;
  }
  const f = S, L = { [u.HTML]: /* @__PURE__ */ new Set([f.ADDRESS, f.APPLET, f.AREA, f.ARTICLE, f.ASIDE, f.BASE, f.BASEFONT, f.BGSOUND, f.BLOCKQUOTE, f.BODY, f.BR, f.BUTTON, f.CAPTION, f.CENTER, f.COL, f.COLGROUP, f.DD, f.DETAILS, f.DIR, f.DIV, f.DL, f.DT, f.EMBED, f.FIELDSET, f.FIGCAPTION, f.FIGURE, f.FOOTER, f.FORM, f.FRAME, f.FRAMESET, f.H1, f.H2, f.H3, f.H4, f.H5, f.H6, f.HEAD, f.HEADER, f.HGROUP, f.HR, f.HTML, f.IFRAME, f.IMG, f.INPUT, f.LI, f.LINK, f.LISTING, f.MAIN, f.MARQUEE, f.MENU, f.META, f.NAV, f.NOEMBED, f.NOFRAMES, f.NOSCRIPT, f.OBJECT, f.OL, f.P, f.PARAM, f.PLAINTEXT, f.PRE, f.SCRIPT, f.SECTION, f.SELECT, f.SOURCE, f.STYLE, f.SUMMARY, f.TABLE, f.TBODY, f.TD, f.TEMPLATE, f.TEXTAREA, f.TFOOT, f.TH, f.THEAD, f.TITLE, f.TR, f.TRACK, f.UL, f.WBR, f.XMP]), [u.MATHML]: /* @__PURE__ */ new Set([f.MI, f.MO, f.MN, f.MS, f.MTEXT, f.ANNOTATION_XML]), [u.SVG]: /* @__PURE__ */ new Set([f.TITLE, f.FOREIGN_OBJECT, f.DESC]), [u.XLINK]: /* @__PURE__ */ new Set(), [u.XML]: /* @__PURE__ */ new Set(), [u.XMLNS]: /* @__PURE__ */ new Set() };
  function M(e3) {
    return e3 === f.H1 || e3 === f.H2 || e3 === f.H3 || e3 === f.H4 || e3 === f.H5 || e3 === f.H6;
  }
  /* @__PURE__ */ new Set([C.STYLE, C.SCRIPT, C.XMP, C.IFRAME, C.NOEMBED, C.NOFRAMES, C.PLAINTEXT]);
  const g = /* @__PURE__ */ new Map([[128, 8364], [130, 8218], [131, 402], [132, 8222], [133, 8230], [134, 8224], [135, 8225], [136, 710], [137, 8240], [138, 352], [139, 8249], [140, 338], [142, 381], [145, 8216], [146, 8217], [147, 8220], [148, 8221], [149, 8226], [150, 8211], [151, 8212], [152, 732], [153, 8482], [154, 353], [155, 8250], [156, 339], [158, 382], [159, 376]]);
  var P;
  !function(e3) {
    e3[e3.DATA = 0] = "DATA", e3[e3.RCDATA = 1] = "RCDATA", e3[e3.RAWTEXT = 2] = "RAWTEXT", e3[e3.SCRIPT_DATA = 3] = "SCRIPT_DATA", e3[e3.PLAINTEXT = 4] = "PLAINTEXT", e3[e3.TAG_OPEN = 5] = "TAG_OPEN", e3[e3.END_TAG_OPEN = 6] = "END_TAG_OPEN", e3[e3.TAG_NAME = 7] = "TAG_NAME", e3[e3.RCDATA_LESS_THAN_SIGN = 8] = "RCDATA_LESS_THAN_SIGN", e3[e3.RCDATA_END_TAG_OPEN = 9] = "RCDATA_END_TAG_OPEN", e3[e3.RCDATA_END_TAG_NAME = 10] = "RCDATA_END_TAG_NAME", e3[e3.RAWTEXT_LESS_THAN_SIGN = 11] = "RAWTEXT_LESS_THAN_SIGN", e3[e3.RAWTEXT_END_TAG_OPEN = 12] = "RAWTEXT_END_TAG_OPEN", e3[e3.RAWTEXT_END_TAG_NAME = 13] = "RAWTEXT_END_TAG_NAME", e3[e3.SCRIPT_DATA_LESS_THAN_SIGN = 14] = "SCRIPT_DATA_LESS_THAN_SIGN", e3[e3.SCRIPT_DATA_END_TAG_OPEN = 15] = "SCRIPT_DATA_END_TAG_OPEN", e3[e3.SCRIPT_DATA_END_TAG_NAME = 16] = "SCRIPT_DATA_END_TAG_NAME", e3[e3.SCRIPT_DATA_ESCAPE_START = 17] = "SCRIPT_DATA_ESCAPE_START", e3[e3.SCRIPT_DATA_ESCAPE_START_DASH = 18] = "SCRIPT_DATA_ESCAPE_START_DASH", e3[e3.SCRIPT_DATA_ESCAPED = 19] = "SCRIPT_DATA_ESCAPED", e3[e3.SCRIPT_DATA_ESCAPED_DASH = 20] = "SCRIPT_DATA_ESCAPED_DASH", e3[e3.SCRIPT_DATA_ESCAPED_DASH_DASH = 21] = "SCRIPT_DATA_ESCAPED_DASH_DASH", e3[e3.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN = 22] = "SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN", e3[e3.SCRIPT_DATA_ESCAPED_END_TAG_OPEN = 23] = "SCRIPT_DATA_ESCAPED_END_TAG_OPEN", e3[e3.SCRIPT_DATA_ESCAPED_END_TAG_NAME = 24] = "SCRIPT_DATA_ESCAPED_END_TAG_NAME", e3[e3.SCRIPT_DATA_DOUBLE_ESCAPE_START = 25] = "SCRIPT_DATA_DOUBLE_ESCAPE_START", e3[e3.SCRIPT_DATA_DOUBLE_ESCAPED = 26] = "SCRIPT_DATA_DOUBLE_ESCAPED", e3[e3.SCRIPT_DATA_DOUBLE_ESCAPED_DASH = 27] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH", e3[e3.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH = 28] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH", e3[e3.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN = 29] = "SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN", e3[e3.SCRIPT_DATA_DOUBLE_ESCAPE_END = 30] = "SCRIPT_DATA_DOUBLE_ESCAPE_END", e3[e3.BEFORE_ATTRIBUTE_NAME = 31] = "BEFORE_ATTRIBUTE_NAME", e3[e3.ATTRIBUTE_NAME = 32] = "ATTRIBUTE_NAME", e3[e3.AFTER_ATTRIBUTE_NAME = 33] = "AFTER_ATTRIBUTE_NAME", e3[e3.BEFORE_ATTRIBUTE_VALUE = 34] = "BEFORE_ATTRIBUTE_VALUE", e3[e3.ATTRIBUTE_VALUE_DOUBLE_QUOTED = 35] = "ATTRIBUTE_VALUE_DOUBLE_QUOTED", e3[e3.ATTRIBUTE_VALUE_SINGLE_QUOTED = 36] = "ATTRIBUTE_VALUE_SINGLE_QUOTED", e3[e3.ATTRIBUTE_VALUE_UNQUOTED = 37] = "ATTRIBUTE_VALUE_UNQUOTED", e3[e3.AFTER_ATTRIBUTE_VALUE_QUOTED = 38] = "AFTER_ATTRIBUTE_VALUE_QUOTED", e3[e3.SELF_CLOSING_START_TAG = 39] = "SELF_CLOSING_START_TAG", e3[e3.BOGUS_COMMENT = 40] = "BOGUS_COMMENT", e3[e3.MARKUP_DECLARATION_OPEN = 41] = "MARKUP_DECLARATION_OPEN", e3[e3.COMMENT_START = 42] = "COMMENT_START", e3[e3.COMMENT_START_DASH = 43] = "COMMENT_START_DASH", e3[e3.COMMENT = 44] = "COMMENT", e3[e3.COMMENT_LESS_THAN_SIGN = 45] = "COMMENT_LESS_THAN_SIGN", e3[e3.COMMENT_LESS_THAN_SIGN_BANG = 46] = "COMMENT_LESS_THAN_SIGN_BANG", e3[e3.COMMENT_LESS_THAN_SIGN_BANG_DASH = 47] = "COMMENT_LESS_THAN_SIGN_BANG_DASH", e3[e3.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH = 48] = "COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH", e3[e3.COMMENT_END_DASH = 49] = "COMMENT_END_DASH", e3[e3.COMMENT_END = 50] = "COMMENT_END", e3[e3.COMMENT_END_BANG = 51] = "COMMENT_END_BANG", e3[e3.DOCTYPE = 52] = "DOCTYPE", e3[e3.BEFORE_DOCTYPE_NAME = 53] = "BEFORE_DOCTYPE_NAME", e3[e3.DOCTYPE_NAME = 54] = "DOCTYPE_NAME", e3[e3.AFTER_DOCTYPE_NAME = 55] = "AFTER_DOCTYPE_NAME", e3[e3.AFTER_DOCTYPE_PUBLIC_KEYWORD = 56] = "AFTER_DOCTYPE_PUBLIC_KEYWORD", e3[e3.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER = 57] = "BEFORE_DOCTYPE_PUBLIC_IDENTIFIER", e3[e3.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED = 58] = "DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED", e3[e3.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED = 59] = "DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED", e3[e3.AFTER_DOCTYPE_PUBLIC_IDENTIFIER = 60] = "AFTER_DOCTYPE_PUBLIC_IDENTIFIER", e3[e3.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS = 61] = "BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS", e3[e3.AFTER_DOCTYPE_SYSTEM_KEYWORD = 62] = "AFTER_DOCTYPE_SYSTEM_KEYWORD", e3[e3.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER = 63] = "BEFORE_DOCTYPE_SYSTEM_IDENTIFIER", e3[e3.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED = 64] = "DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED", e3[e3.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED = 65] = "DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED", e3[e3.AFTER_DOCTYPE_SYSTEM_IDENTIFIER = 66] = "AFTER_DOCTYPE_SYSTEM_IDENTIFIER", e3[e3.BOGUS_DOCTYPE = 67] = "BOGUS_DOCTYPE", e3[e3.CDATA_SECTION = 68] = "CDATA_SECTION", e3[e3.CDATA_SECTION_BRACKET = 69] = "CDATA_SECTION_BRACKET", e3[e3.CDATA_SECTION_END = 70] = "CDATA_SECTION_END", e3[e3.CHARACTER_REFERENCE = 71] = "CHARACTER_REFERENCE", e3[e3.NAMED_CHARACTER_REFERENCE = 72] = "NAMED_CHARACTER_REFERENCE", e3[e3.AMBIGUOUS_AMPERSAND = 73] = "AMBIGUOUS_AMPERSAND", e3[e3.NUMERIC_CHARACTER_REFERENCE = 74] = "NUMERIC_CHARACTER_REFERENCE", e3[e3.HEXADEMICAL_CHARACTER_REFERENCE_START = 75] = "HEXADEMICAL_CHARACTER_REFERENCE_START", e3[e3.HEXADEMICAL_CHARACTER_REFERENCE = 76] = "HEXADEMICAL_CHARACTER_REFERENCE", e3[e3.DECIMAL_CHARACTER_REFERENCE = 77] = "DECIMAL_CHARACTER_REFERENCE", e3[e3.NUMERIC_CHARACTER_REFERENCE_END = 78] = "NUMERIC_CHARACTER_REFERENCE_END";
  }(P || (P = {}));
  const k = { DATA: P.DATA, RCDATA: P.RCDATA, RAWTEXT: P.RAWTEXT, SCRIPT_DATA: P.SCRIPT_DATA, PLAINTEXT: P.PLAINTEXT, CDATA_SECTION: P.CDATA_SECTION };
  function b(e3) {
    return e3 >= a.DIGIT_0 && e3 <= a.DIGIT_9;
  }
  function B(e3) {
    return e3 >= a.LATIN_CAPITAL_A && e3 <= a.LATIN_CAPITAL_Z;
  }
  function H2(e3) {
    return function(e4) {
      return e4 >= a.LATIN_SMALL_A && e4 <= a.LATIN_SMALL_Z;
    }(e3) || B(e3);
  }
  function F(e3) {
    return H2(e3) || b(e3);
  }
  function U(e3) {
    return e3 >= a.LATIN_CAPITAL_A && e3 <= a.LATIN_CAPITAL_F;
  }
  function y(e3) {
    return e3 >= a.LATIN_SMALL_A && e3 <= a.LATIN_SMALL_F;
  }
  function G(e3) {
    return e3 + 32;
  }
  function w(e3) {
    return e3 === a.SPACE || e3 === a.LINE_FEED || e3 === a.TABULATION || e3 === a.FORM_FEED;
  }
  function x(e3) {
    return w(e3) || e3 === a.SOLIDUS || e3 === a.GREATER_THAN_SIGN;
  }
  class Y {
    constructor(e3, t2) {
      this.options = e3, this.handler = t2, this.paused = false, this.inLoop = false, this.inForeignNode = false, this.lastStartTagName = "", this.active = false, this.state = P.DATA, this.returnState = P.DATA, this.charRefCode = -1, this.consumedAfterSnapshot = -1, this.currentCharacterToken = null, this.currentToken = null, this.currentAttr = { name: "", value: "" }, this.preprocessor = new _(t2), this.currentLocation = this.getCurrentLocation(-1);
    }
    _err(e3) {
      var t2, s2;
      null === (s2 = (t2 = this.handler).onParseError) || void 0 === s2 || s2.call(t2, this.preprocessor.getError(e3));
    }
    getCurrentLocation(e3) {
      return this.options.sourceCodeLocationInfo ? { startLine: this.preprocessor.line, startCol: this.preprocessor.col - e3, startOffset: this.preprocessor.offset - e3, endLine: -1, endCol: -1, endOffset: -1 } : null;
    }
    _runParsingLoop() {
      if (!this.inLoop) {
        for (this.inLoop = true; this.active && !this.paused; ) {
          this.consumedAfterSnapshot = 0;
          const e3 = this._consume();
          this._ensureHibernation() || this._callState(e3);
        }
        this.inLoop = false;
      }
    }
    pause() {
      this.paused = true;
    }
    resume(e3) {
      if (!this.paused)
        throw new Error("Parser was already resumed");
      this.paused = false, this.inLoop || (this._runParsingLoop(), this.paused || null == e3 || e3());
    }
    write(e3, t2, s2) {
      this.active = true, this.preprocessor.write(e3, t2), this._runParsingLoop(), this.paused || null == s2 || s2();
    }
    insertHtmlAtCurrentPos(e3) {
      this.active = true, this.preprocessor.insertHtmlAtCurrentPos(e3), this._runParsingLoop();
    }
    _ensureHibernation() {
      return !!this.preprocessor.endOfChunkHit && (this._unconsume(this.consumedAfterSnapshot), this.active = false, true);
    }
    _consume() {
      return this.consumedAfterSnapshot++, this.preprocessor.advance();
    }
    _unconsume(e3) {
      this.consumedAfterSnapshot -= e3, this.preprocessor.retreat(e3);
    }
    _reconsumeInState(e3, t2) {
      this.state = e3, this._callState(t2);
    }
    _advanceBy(e3) {
      this.consumedAfterSnapshot += e3;
      for (let t2 = 0; t2 < e3; t2++)
        this.preprocessor.advance();
    }
    _consumeSequenceIfMatch(e3, t2) {
      return !!this.preprocessor.startsWith(e3, t2) && (this._advanceBy(e3.length - 1), true);
    }
    _createStartTagToken() {
      this.currentToken = { type: h2.START_TAG, tagName: "", tagID: S.UNKNOWN, selfClosing: false, ackSelfClosing: false, attrs: [], location: this.getCurrentLocation(1) };
    }
    _createEndTagToken() {
      this.currentToken = { type: h2.END_TAG, tagName: "", tagID: S.UNKNOWN, selfClosing: false, ackSelfClosing: false, attrs: [], location: this.getCurrentLocation(2) };
    }
    _createCommentToken(e3) {
      this.currentToken = { type: h2.COMMENT, data: "", location: this.getCurrentLocation(e3) };
    }
    _createDoctypeToken(e3) {
      this.currentToken = { type: h2.DOCTYPE, name: e3, forceQuirks: false, publicId: null, systemId: null, location: this.currentLocation };
    }
    _createCharacterToken(e3, t2) {
      this.currentCharacterToken = { type: e3, chars: t2, location: this.currentLocation };
    }
    _createAttr(e3) {
      this.currentAttr = { name: e3, value: "" }, this.currentLocation = this.getCurrentLocation(0);
    }
    _leaveAttrName() {
      var e3, t2;
      const s2 = this.currentToken;
      null === A(s2, this.currentAttr.name) ? (s2.attrs.push(this.currentAttr), s2.location && this.currentLocation && ((null !== (e3 = (t2 = s2.location).attrs) && void 0 !== e3 ? e3 : t2.attrs = /* @__PURE__ */ Object.create(null))[this.currentAttr.name] = this.currentLocation, this._leaveAttrValue())) : this._err(T.duplicateAttribute);
    }
    _leaveAttrValue() {
      this.currentLocation && (this.currentLocation.endLine = this.preprocessor.line, this.currentLocation.endCol = this.preprocessor.col, this.currentLocation.endOffset = this.preprocessor.offset);
    }
    prepareToken(e3) {
      this._emitCurrentCharacterToken(e3.location), this.currentToken = null, e3.location && (e3.location.endLine = this.preprocessor.line, e3.location.endCol = this.preprocessor.col + 1, e3.location.endOffset = this.preprocessor.offset + 1), this.currentLocation = this.getCurrentLocation(-1);
    }
    emitCurrentTagToken() {
      const e3 = this.currentToken;
      this.prepareToken(e3), e3.tagID = O(e3.tagName), e3.type === h2.START_TAG ? (this.lastStartTagName = e3.tagName, this.handler.onStartTag(e3)) : (e3.attrs.length > 0 && this._err(T.endTagWithAttributes), e3.selfClosing && this._err(T.endTagWithTrailingSolidus), this.handler.onEndTag(e3)), this.preprocessor.dropParsedChunk();
    }
    emitCurrentComment(e3) {
      this.prepareToken(e3), this.handler.onComment(e3), this.preprocessor.dropParsedChunk();
    }
    emitCurrentDoctype(e3) {
      this.prepareToken(e3), this.handler.onDoctype(e3), this.preprocessor.dropParsedChunk();
    }
    _emitCurrentCharacterToken(e3) {
      if (this.currentCharacterToken) {
        switch (e3 && this.currentCharacterToken.location && (this.currentCharacterToken.location.endLine = e3.startLine, this.currentCharacterToken.location.endCol = e3.startCol, this.currentCharacterToken.location.endOffset = e3.startOffset), this.currentCharacterToken.type) {
          case h2.CHARACTER:
            this.handler.onCharacter(this.currentCharacterToken);
            break;
          case h2.NULL_CHARACTER:
            this.handler.onNullCharacter(this.currentCharacterToken);
            break;
          case h2.WHITESPACE_CHARACTER:
            this.handler.onWhitespaceCharacter(this.currentCharacterToken);
        }
        this.currentCharacterToken = null;
      }
    }
    _emitEOFToken() {
      const e3 = this.getCurrentLocation(0);
      e3 && (e3.endLine = e3.startLine, e3.endCol = e3.startCol, e3.endOffset = e3.startOffset), this._emitCurrentCharacterToken(e3), this.handler.onEof({ type: h2.EOF, location: e3 }), this.active = false;
    }
    _appendCharToCurrentCharacterToken(e3, t2) {
      if (this.currentCharacterToken) {
        if (this.currentCharacterToken.type === e3)
          return void (this.currentCharacterToken.chars += t2);
        this.currentLocation = this.getCurrentLocation(0), this._emitCurrentCharacterToken(this.currentLocation), this.preprocessor.dropParsedChunk();
      }
      this._createCharacterToken(e3, t2);
    }
    _emitCodePoint(e3) {
      const t2 = w(e3) ? h2.WHITESPACE_CHARACTER : e3 === a.NULL ? h2.NULL_CHARACTER : h2.CHARACTER;
      this._appendCharToCurrentCharacterToken(t2, String.fromCodePoint(e3));
    }
    _emitChars(e3) {
      this._appendCharToCurrentCharacterToken(h2.CHARACTER, e3);
    }
    _matchNamedCharacterReference(e3) {
      let t2 = null, s2 = 0, r2 = false;
      for (let i22 = 0, o2 = m.htmlDecodeTree[0]; i22 >= 0 && (i22 = m.determineBranch(m.htmlDecodeTree, o2, i22 + 1, e3), !(i22 < 0)); e3 = this._consume()) {
        s2 += 1, o2 = m.htmlDecodeTree[i22];
        const c2 = o2 & m.BinTrieFlags.VALUE_LENGTH;
        if (c2) {
          const o3 = (c2 >> 14) - 1;
          if (e3 !== a.SEMICOLON && this._isCharacterReferenceInAttribute() && ((n2 = this.preprocessor.peek(1)) === a.EQUALS_SIGN || F(n2)) ? (t2 = [a.AMPERSAND], i22 += o3) : (t2 = 0 === o3 ? [m.htmlDecodeTree[i22] & ~m.BinTrieFlags.VALUE_LENGTH] : 1 === o3 ? [m.htmlDecodeTree[++i22]] : [m.htmlDecodeTree[++i22], m.htmlDecodeTree[++i22]], s2 = 0, r2 = e3 !== a.SEMICOLON), 0 === o3) {
            this._consume();
            break;
          }
        }
      }
      var n2;
      return this._unconsume(s2), r2 && !this.preprocessor.endOfChunkHit && this._err(T.missingSemicolonAfterCharacterReference), this._unconsume(1), t2;
    }
    _isCharacterReferenceInAttribute() {
      return this.returnState === P.ATTRIBUTE_VALUE_DOUBLE_QUOTED || this.returnState === P.ATTRIBUTE_VALUE_SINGLE_QUOTED || this.returnState === P.ATTRIBUTE_VALUE_UNQUOTED;
    }
    _flushCodePointConsumedAsCharacterReference(e3) {
      this._isCharacterReferenceInAttribute() ? this.currentAttr.value += String.fromCodePoint(e3) : this._emitCodePoint(e3);
    }
    _callState(e3) {
      switch (this.state) {
        case P.DATA:
          this._stateData(e3);
          break;
        case P.RCDATA:
          this._stateRcdata(e3);
          break;
        case P.RAWTEXT:
          this._stateRawtext(e3);
          break;
        case P.SCRIPT_DATA:
          this._stateScriptData(e3);
          break;
        case P.PLAINTEXT:
          this._statePlaintext(e3);
          break;
        case P.TAG_OPEN:
          this._stateTagOpen(e3);
          break;
        case P.END_TAG_OPEN:
          this._stateEndTagOpen(e3);
          break;
        case P.TAG_NAME:
          this._stateTagName(e3);
          break;
        case P.RCDATA_LESS_THAN_SIGN:
          this._stateRcdataLessThanSign(e3);
          break;
        case P.RCDATA_END_TAG_OPEN:
          this._stateRcdataEndTagOpen(e3);
          break;
        case P.RCDATA_END_TAG_NAME:
          this._stateRcdataEndTagName(e3);
          break;
        case P.RAWTEXT_LESS_THAN_SIGN:
          this._stateRawtextLessThanSign(e3);
          break;
        case P.RAWTEXT_END_TAG_OPEN:
          this._stateRawtextEndTagOpen(e3);
          break;
        case P.RAWTEXT_END_TAG_NAME:
          this._stateRawtextEndTagName(e3);
          break;
        case P.SCRIPT_DATA_LESS_THAN_SIGN:
          this._stateScriptDataLessThanSign(e3);
          break;
        case P.SCRIPT_DATA_END_TAG_OPEN:
          this._stateScriptDataEndTagOpen(e3);
          break;
        case P.SCRIPT_DATA_END_TAG_NAME:
          this._stateScriptDataEndTagName(e3);
          break;
        case P.SCRIPT_DATA_ESCAPE_START:
          this._stateScriptDataEscapeStart(e3);
          break;
        case P.SCRIPT_DATA_ESCAPE_START_DASH:
          this._stateScriptDataEscapeStartDash(e3);
          break;
        case P.SCRIPT_DATA_ESCAPED:
          this._stateScriptDataEscaped(e3);
          break;
        case P.SCRIPT_DATA_ESCAPED_DASH:
          this._stateScriptDataEscapedDash(e3);
          break;
        case P.SCRIPT_DATA_ESCAPED_DASH_DASH:
          this._stateScriptDataEscapedDashDash(e3);
          break;
        case P.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN:
          this._stateScriptDataEscapedLessThanSign(e3);
          break;
        case P.SCRIPT_DATA_ESCAPED_END_TAG_OPEN:
          this._stateScriptDataEscapedEndTagOpen(e3);
          break;
        case P.SCRIPT_DATA_ESCAPED_END_TAG_NAME:
          this._stateScriptDataEscapedEndTagName(e3);
          break;
        case P.SCRIPT_DATA_DOUBLE_ESCAPE_START:
          this._stateScriptDataDoubleEscapeStart(e3);
          break;
        case P.SCRIPT_DATA_DOUBLE_ESCAPED:
          this._stateScriptDataDoubleEscaped(e3);
          break;
        case P.SCRIPT_DATA_DOUBLE_ESCAPED_DASH:
          this._stateScriptDataDoubleEscapedDash(e3);
          break;
        case P.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH:
          this._stateScriptDataDoubleEscapedDashDash(e3);
          break;
        case P.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN:
          this._stateScriptDataDoubleEscapedLessThanSign(e3);
          break;
        case P.SCRIPT_DATA_DOUBLE_ESCAPE_END:
          this._stateScriptDataDoubleEscapeEnd(e3);
          break;
        case P.BEFORE_ATTRIBUTE_NAME:
          this._stateBeforeAttributeName(e3);
          break;
        case P.ATTRIBUTE_NAME:
          this._stateAttributeName(e3);
          break;
        case P.AFTER_ATTRIBUTE_NAME:
          this._stateAfterAttributeName(e3);
          break;
        case P.BEFORE_ATTRIBUTE_VALUE:
          this._stateBeforeAttributeValue(e3);
          break;
        case P.ATTRIBUTE_VALUE_DOUBLE_QUOTED:
          this._stateAttributeValueDoubleQuoted(e3);
          break;
        case P.ATTRIBUTE_VALUE_SINGLE_QUOTED:
          this._stateAttributeValueSingleQuoted(e3);
          break;
        case P.ATTRIBUTE_VALUE_UNQUOTED:
          this._stateAttributeValueUnquoted(e3);
          break;
        case P.AFTER_ATTRIBUTE_VALUE_QUOTED:
          this._stateAfterAttributeValueQuoted(e3);
          break;
        case P.SELF_CLOSING_START_TAG:
          this._stateSelfClosingStartTag(e3);
          break;
        case P.BOGUS_COMMENT:
          this._stateBogusComment(e3);
          break;
        case P.MARKUP_DECLARATION_OPEN:
          this._stateMarkupDeclarationOpen(e3);
          break;
        case P.COMMENT_START:
          this._stateCommentStart(e3);
          break;
        case P.COMMENT_START_DASH:
          this._stateCommentStartDash(e3);
          break;
        case P.COMMENT:
          this._stateComment(e3);
          break;
        case P.COMMENT_LESS_THAN_SIGN:
          this._stateCommentLessThanSign(e3);
          break;
        case P.COMMENT_LESS_THAN_SIGN_BANG:
          this._stateCommentLessThanSignBang(e3);
          break;
        case P.COMMENT_LESS_THAN_SIGN_BANG_DASH:
          this._stateCommentLessThanSignBangDash(e3);
          break;
        case P.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH:
          this._stateCommentLessThanSignBangDashDash(e3);
          break;
        case P.COMMENT_END_DASH:
          this._stateCommentEndDash(e3);
          break;
        case P.COMMENT_END:
          this._stateCommentEnd(e3);
          break;
        case P.COMMENT_END_BANG:
          this._stateCommentEndBang(e3);
          break;
        case P.DOCTYPE:
          this._stateDoctype(e3);
          break;
        case P.BEFORE_DOCTYPE_NAME:
          this._stateBeforeDoctypeName(e3);
          break;
        case P.DOCTYPE_NAME:
          this._stateDoctypeName(e3);
          break;
        case P.AFTER_DOCTYPE_NAME:
          this._stateAfterDoctypeName(e3);
          break;
        case P.AFTER_DOCTYPE_PUBLIC_KEYWORD:
          this._stateAfterDoctypePublicKeyword(e3);
          break;
        case P.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER:
          this._stateBeforeDoctypePublicIdentifier(e3);
          break;
        case P.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED:
          this._stateDoctypePublicIdentifierDoubleQuoted(e3);
          break;
        case P.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED:
          this._stateDoctypePublicIdentifierSingleQuoted(e3);
          break;
        case P.AFTER_DOCTYPE_PUBLIC_IDENTIFIER:
          this._stateAfterDoctypePublicIdentifier(e3);
          break;
        case P.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS:
          this._stateBetweenDoctypePublicAndSystemIdentifiers(e3);
          break;
        case P.AFTER_DOCTYPE_SYSTEM_KEYWORD:
          this._stateAfterDoctypeSystemKeyword(e3);
          break;
        case P.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER:
          this._stateBeforeDoctypeSystemIdentifier(e3);
          break;
        case P.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED:
          this._stateDoctypeSystemIdentifierDoubleQuoted(e3);
          break;
        case P.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED:
          this._stateDoctypeSystemIdentifierSingleQuoted(e3);
          break;
        case P.AFTER_DOCTYPE_SYSTEM_IDENTIFIER:
          this._stateAfterDoctypeSystemIdentifier(e3);
          break;
        case P.BOGUS_DOCTYPE:
          this._stateBogusDoctype(e3);
          break;
        case P.CDATA_SECTION:
          this._stateCdataSection(e3);
          break;
        case P.CDATA_SECTION_BRACKET:
          this._stateCdataSectionBracket(e3);
          break;
        case P.CDATA_SECTION_END:
          this._stateCdataSectionEnd(e3);
          break;
        case P.CHARACTER_REFERENCE:
          this._stateCharacterReference(e3);
          break;
        case P.NAMED_CHARACTER_REFERENCE:
          this._stateNamedCharacterReference(e3);
          break;
        case P.AMBIGUOUS_AMPERSAND:
          this._stateAmbiguousAmpersand(e3);
          break;
        case P.NUMERIC_CHARACTER_REFERENCE:
          this._stateNumericCharacterReference(e3);
          break;
        case P.HEXADEMICAL_CHARACTER_REFERENCE_START:
          this._stateHexademicalCharacterReferenceStart(e3);
          break;
        case P.HEXADEMICAL_CHARACTER_REFERENCE:
          this._stateHexademicalCharacterReference(e3);
          break;
        case P.DECIMAL_CHARACTER_REFERENCE:
          this._stateDecimalCharacterReference(e3);
          break;
        case P.NUMERIC_CHARACTER_REFERENCE_END:
          this._stateNumericCharacterReferenceEnd(e3);
          break;
        default:
          throw new Error("Unknown state");
      }
    }
    _stateData(e3) {
      switch (e3) {
        case a.LESS_THAN_SIGN:
          this.state = P.TAG_OPEN;
          break;
        case a.AMPERSAND:
          this.returnState = P.DATA, this.state = P.CHARACTER_REFERENCE;
          break;
        case a.NULL:
          this._err(T.unexpectedNullCharacter), this._emitCodePoint(e3);
          break;
        case a.EOF:
          this._emitEOFToken();
          break;
        default:
          this._emitCodePoint(e3);
      }
    }
    _stateRcdata(e3) {
      switch (e3) {
        case a.AMPERSAND:
          this.returnState = P.RCDATA, this.state = P.CHARACTER_REFERENCE;
          break;
        case a.LESS_THAN_SIGN:
          this.state = P.RCDATA_LESS_THAN_SIGN;
          break;
        case a.NULL:
          this._err(T.unexpectedNullCharacter), this._emitChars(s);
          break;
        case a.EOF:
          this._emitEOFToken();
          break;
        default:
          this._emitCodePoint(e3);
      }
    }
    _stateRawtext(e3) {
      switch (e3) {
        case a.LESS_THAN_SIGN:
          this.state = P.RAWTEXT_LESS_THAN_SIGN;
          break;
        case a.NULL:
          this._err(T.unexpectedNullCharacter), this._emitChars(s);
          break;
        case a.EOF:
          this._emitEOFToken();
          break;
        default:
          this._emitCodePoint(e3);
      }
    }
    _stateScriptData(e3) {
      switch (e3) {
        case a.LESS_THAN_SIGN:
          this.state = P.SCRIPT_DATA_LESS_THAN_SIGN;
          break;
        case a.NULL:
          this._err(T.unexpectedNullCharacter), this._emitChars(s);
          break;
        case a.EOF:
          this._emitEOFToken();
          break;
        default:
          this._emitCodePoint(e3);
      }
    }
    _statePlaintext(e3) {
      switch (e3) {
        case a.NULL:
          this._err(T.unexpectedNullCharacter), this._emitChars(s);
          break;
        case a.EOF:
          this._emitEOFToken();
          break;
        default:
          this._emitCodePoint(e3);
      }
    }
    _stateTagOpen(e3) {
      if (H2(e3))
        this._createStartTagToken(), this.state = P.TAG_NAME, this._stateTagName(e3);
      else
        switch (e3) {
          case a.EXCLAMATION_MARK:
            this.state = P.MARKUP_DECLARATION_OPEN;
            break;
          case a.SOLIDUS:
            this.state = P.END_TAG_OPEN;
            break;
          case a.QUESTION_MARK:
            this._err(T.unexpectedQuestionMarkInsteadOfTagName), this._createCommentToken(1), this.state = P.BOGUS_COMMENT, this._stateBogusComment(e3);
            break;
          case a.EOF:
            this._err(T.eofBeforeTagName), this._emitChars("<"), this._emitEOFToken();
            break;
          default:
            this._err(T.invalidFirstCharacterOfTagName), this._emitChars("<"), this.state = P.DATA, this._stateData(e3);
        }
    }
    _stateEndTagOpen(e3) {
      if (H2(e3))
        this._createEndTagToken(), this.state = P.TAG_NAME, this._stateTagName(e3);
      else
        switch (e3) {
          case a.GREATER_THAN_SIGN:
            this._err(T.missingEndTagName), this.state = P.DATA;
            break;
          case a.EOF:
            this._err(T.eofBeforeTagName), this._emitChars("</"), this._emitEOFToken();
            break;
          default:
            this._err(T.invalidFirstCharacterOfTagName), this._createCommentToken(2), this.state = P.BOGUS_COMMENT, this._stateBogusComment(e3);
        }
    }
    _stateTagName(e3) {
      const t2 = this.currentToken;
      switch (e3) {
        case a.SPACE:
        case a.LINE_FEED:
        case a.TABULATION:
        case a.FORM_FEED:
          this.state = P.BEFORE_ATTRIBUTE_NAME;
          break;
        case a.SOLIDUS:
          this.state = P.SELF_CLOSING_START_TAG;
          break;
        case a.GREATER_THAN_SIGN:
          this.state = P.DATA, this.emitCurrentTagToken();
          break;
        case a.NULL:
          this._err(T.unexpectedNullCharacter), t2.tagName += s;
          break;
        case a.EOF:
          this._err(T.eofInTag), this._emitEOFToken();
          break;
        default:
          t2.tagName += String.fromCodePoint(B(e3) ? G(e3) : e3);
      }
    }
    _stateRcdataLessThanSign(e3) {
      e3 === a.SOLIDUS ? this.state = P.RCDATA_END_TAG_OPEN : (this._emitChars("<"), this.state = P.RCDATA, this._stateRcdata(e3));
    }
    _stateRcdataEndTagOpen(e3) {
      H2(e3) ? (this.state = P.RCDATA_END_TAG_NAME, this._stateRcdataEndTagName(e3)) : (this._emitChars("</"), this.state = P.RCDATA, this._stateRcdata(e3));
    }
    handleSpecialEndTag(e3) {
      if (!this.preprocessor.startsWith(this.lastStartTagName, false))
        return !this._ensureHibernation();
      switch (this._createEndTagToken(), this.currentToken.tagName = this.lastStartTagName, this.preprocessor.peek(this.lastStartTagName.length)) {
        case a.SPACE:
        case a.LINE_FEED:
        case a.TABULATION:
        case a.FORM_FEED:
          return this._advanceBy(this.lastStartTagName.length), this.state = P.BEFORE_ATTRIBUTE_NAME, false;
        case a.SOLIDUS:
          return this._advanceBy(this.lastStartTagName.length), this.state = P.SELF_CLOSING_START_TAG, false;
        case a.GREATER_THAN_SIGN:
          return this._advanceBy(this.lastStartTagName.length), this.emitCurrentTagToken(), this.state = P.DATA, false;
        default:
          return !this._ensureHibernation();
      }
    }
    _stateRcdataEndTagName(e3) {
      this.handleSpecialEndTag(e3) && (this._emitChars("</"), this.state = P.RCDATA, this._stateRcdata(e3));
    }
    _stateRawtextLessThanSign(e3) {
      e3 === a.SOLIDUS ? this.state = P.RAWTEXT_END_TAG_OPEN : (this._emitChars("<"), this.state = P.RAWTEXT, this._stateRawtext(e3));
    }
    _stateRawtextEndTagOpen(e3) {
      H2(e3) ? (this.state = P.RAWTEXT_END_TAG_NAME, this._stateRawtextEndTagName(e3)) : (this._emitChars("</"), this.state = P.RAWTEXT, this._stateRawtext(e3));
    }
    _stateRawtextEndTagName(e3) {
      this.handleSpecialEndTag(e3) && (this._emitChars("</"), this.state = P.RAWTEXT, this._stateRawtext(e3));
    }
    _stateScriptDataLessThanSign(e3) {
      switch (e3) {
        case a.SOLIDUS:
          this.state = P.SCRIPT_DATA_END_TAG_OPEN;
          break;
        case a.EXCLAMATION_MARK:
          this.state = P.SCRIPT_DATA_ESCAPE_START, this._emitChars("<!");
          break;
        default:
          this._emitChars("<"), this.state = P.SCRIPT_DATA, this._stateScriptData(e3);
      }
    }
    _stateScriptDataEndTagOpen(e3) {
      H2(e3) ? (this.state = P.SCRIPT_DATA_END_TAG_NAME, this._stateScriptDataEndTagName(e3)) : (this._emitChars("</"), this.state = P.SCRIPT_DATA, this._stateScriptData(e3));
    }
    _stateScriptDataEndTagName(e3) {
      this.handleSpecialEndTag(e3) && (this._emitChars("</"), this.state = P.SCRIPT_DATA, this._stateScriptData(e3));
    }
    _stateScriptDataEscapeStart(e3) {
      e3 === a.HYPHEN_MINUS ? (this.state = P.SCRIPT_DATA_ESCAPE_START_DASH, this._emitChars("-")) : (this.state = P.SCRIPT_DATA, this._stateScriptData(e3));
    }
    _stateScriptDataEscapeStartDash(e3) {
      e3 === a.HYPHEN_MINUS ? (this.state = P.SCRIPT_DATA_ESCAPED_DASH_DASH, this._emitChars("-")) : (this.state = P.SCRIPT_DATA, this._stateScriptData(e3));
    }
    _stateScriptDataEscaped(e3) {
      switch (e3) {
        case a.HYPHEN_MINUS:
          this.state = P.SCRIPT_DATA_ESCAPED_DASH, this._emitChars("-");
          break;
        case a.LESS_THAN_SIGN:
          this.state = P.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
          break;
        case a.NULL:
          this._err(T.unexpectedNullCharacter), this._emitChars(s);
          break;
        case a.EOF:
          this._err(T.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
          break;
        default:
          this._emitCodePoint(e3);
      }
    }
    _stateScriptDataEscapedDash(e3) {
      switch (e3) {
        case a.HYPHEN_MINUS:
          this.state = P.SCRIPT_DATA_ESCAPED_DASH_DASH, this._emitChars("-");
          break;
        case a.LESS_THAN_SIGN:
          this.state = P.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
          break;
        case a.NULL:
          this._err(T.unexpectedNullCharacter), this.state = P.SCRIPT_DATA_ESCAPED, this._emitChars(s);
          break;
        case a.EOF:
          this._err(T.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
          break;
        default:
          this.state = P.SCRIPT_DATA_ESCAPED, this._emitCodePoint(e3);
      }
    }
    _stateScriptDataEscapedDashDash(e3) {
      switch (e3) {
        case a.HYPHEN_MINUS:
          this._emitChars("-");
          break;
        case a.LESS_THAN_SIGN:
          this.state = P.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
          break;
        case a.GREATER_THAN_SIGN:
          this.state = P.SCRIPT_DATA, this._emitChars(">");
          break;
        case a.NULL:
          this._err(T.unexpectedNullCharacter), this.state = P.SCRIPT_DATA_ESCAPED, this._emitChars(s);
          break;
        case a.EOF:
          this._err(T.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
          break;
        default:
          this.state = P.SCRIPT_DATA_ESCAPED, this._emitCodePoint(e3);
      }
    }
    _stateScriptDataEscapedLessThanSign(e3) {
      e3 === a.SOLIDUS ? this.state = P.SCRIPT_DATA_ESCAPED_END_TAG_OPEN : H2(e3) ? (this._emitChars("<"), this.state = P.SCRIPT_DATA_DOUBLE_ESCAPE_START, this._stateScriptDataDoubleEscapeStart(e3)) : (this._emitChars("<"), this.state = P.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(e3));
    }
    _stateScriptDataEscapedEndTagOpen(e3) {
      H2(e3) ? (this.state = P.SCRIPT_DATA_ESCAPED_END_TAG_NAME, this._stateScriptDataEscapedEndTagName(e3)) : (this._emitChars("</"), this.state = P.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(e3));
    }
    _stateScriptDataEscapedEndTagName(e3) {
      this.handleSpecialEndTag(e3) && (this._emitChars("</"), this.state = P.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(e3));
    }
    _stateScriptDataDoubleEscapeStart(e3) {
      if (this.preprocessor.startsWith(i2, false) && x(this.preprocessor.peek(6))) {
        this._emitCodePoint(e3);
        for (let e4 = 0; e4 < 6; e4++)
          this._emitCodePoint(this._consume());
        this.state = P.SCRIPT_DATA_DOUBLE_ESCAPED;
      } else
        this._ensureHibernation() || (this.state = P.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(e3));
    }
    _stateScriptDataDoubleEscaped(e3) {
      switch (e3) {
        case a.HYPHEN_MINUS:
          this.state = P.SCRIPT_DATA_DOUBLE_ESCAPED_DASH, this._emitChars("-");
          break;
        case a.LESS_THAN_SIGN:
          this.state = P.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN, this._emitChars("<");
          break;
        case a.NULL:
          this._err(T.unexpectedNullCharacter), this._emitChars(s);
          break;
        case a.EOF:
          this._err(T.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
          break;
        default:
          this._emitCodePoint(e3);
      }
    }
    _stateScriptDataDoubleEscapedDash(e3) {
      switch (e3) {
        case a.HYPHEN_MINUS:
          this.state = P.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH, this._emitChars("-");
          break;
        case a.LESS_THAN_SIGN:
          this.state = P.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN, this._emitChars("<");
          break;
        case a.NULL:
          this._err(T.unexpectedNullCharacter), this.state = P.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitChars(s);
          break;
        case a.EOF:
          this._err(T.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
          break;
        default:
          this.state = P.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitCodePoint(e3);
      }
    }
    _stateScriptDataDoubleEscapedDashDash(e3) {
      switch (e3) {
        case a.HYPHEN_MINUS:
          this._emitChars("-");
          break;
        case a.LESS_THAN_SIGN:
          this.state = P.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN, this._emitChars("<");
          break;
        case a.GREATER_THAN_SIGN:
          this.state = P.SCRIPT_DATA, this._emitChars(">");
          break;
        case a.NULL:
          this._err(T.unexpectedNullCharacter), this.state = P.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitChars(s);
          break;
        case a.EOF:
          this._err(T.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
          break;
        default:
          this.state = P.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitCodePoint(e3);
      }
    }
    _stateScriptDataDoubleEscapedLessThanSign(e3) {
      e3 === a.SOLIDUS ? (this.state = P.SCRIPT_DATA_DOUBLE_ESCAPE_END, this._emitChars("/")) : (this.state = P.SCRIPT_DATA_DOUBLE_ESCAPED, this._stateScriptDataDoubleEscaped(e3));
    }
    _stateScriptDataDoubleEscapeEnd(e3) {
      if (this.preprocessor.startsWith(i2, false) && x(this.preprocessor.peek(6))) {
        this._emitCodePoint(e3);
        for (let e4 = 0; e4 < 6; e4++)
          this._emitCodePoint(this._consume());
        this.state = P.SCRIPT_DATA_ESCAPED;
      } else
        this._ensureHibernation() || (this.state = P.SCRIPT_DATA_DOUBLE_ESCAPED, this._stateScriptDataDoubleEscaped(e3));
    }
    _stateBeforeAttributeName(e3) {
      switch (e3) {
        case a.SPACE:
        case a.LINE_FEED:
        case a.TABULATION:
        case a.FORM_FEED:
          break;
        case a.SOLIDUS:
        case a.GREATER_THAN_SIGN:
        case a.EOF:
          this.state = P.AFTER_ATTRIBUTE_NAME, this._stateAfterAttributeName(e3);
          break;
        case a.EQUALS_SIGN:
          this._err(T.unexpectedEqualsSignBeforeAttributeName), this._createAttr("="), this.state = P.ATTRIBUTE_NAME;
          break;
        default:
          this._createAttr(""), this.state = P.ATTRIBUTE_NAME, this._stateAttributeName(e3);
      }
    }
    _stateAttributeName(e3) {
      switch (e3) {
        case a.SPACE:
        case a.LINE_FEED:
        case a.TABULATION:
        case a.FORM_FEED:
        case a.SOLIDUS:
        case a.GREATER_THAN_SIGN:
        case a.EOF:
          this._leaveAttrName(), this.state = P.AFTER_ATTRIBUTE_NAME, this._stateAfterAttributeName(e3);
          break;
        case a.EQUALS_SIGN:
          this._leaveAttrName(), this.state = P.BEFORE_ATTRIBUTE_VALUE;
          break;
        case a.QUOTATION_MARK:
        case a.APOSTROPHE:
        case a.LESS_THAN_SIGN:
          this._err(T.unexpectedCharacterInAttributeName), this.currentAttr.name += String.fromCodePoint(e3);
          break;
        case a.NULL:
          this._err(T.unexpectedNullCharacter), this.currentAttr.name += s;
          break;
        default:
          this.currentAttr.name += String.fromCodePoint(B(e3) ? G(e3) : e3);
      }
    }
    _stateAfterAttributeName(e3) {
      switch (e3) {
        case a.SPACE:
        case a.LINE_FEED:
        case a.TABULATION:
        case a.FORM_FEED:
          break;
        case a.SOLIDUS:
          this.state = P.SELF_CLOSING_START_TAG;
          break;
        case a.EQUALS_SIGN:
          this.state = P.BEFORE_ATTRIBUTE_VALUE;
          break;
        case a.GREATER_THAN_SIGN:
          this.state = P.DATA, this.emitCurrentTagToken();
          break;
        case a.EOF:
          this._err(T.eofInTag), this._emitEOFToken();
          break;
        default:
          this._createAttr(""), this.state = P.ATTRIBUTE_NAME, this._stateAttributeName(e3);
      }
    }
    _stateBeforeAttributeValue(e3) {
      switch (e3) {
        case a.SPACE:
        case a.LINE_FEED:
        case a.TABULATION:
        case a.FORM_FEED:
          break;
        case a.QUOTATION_MARK:
          this.state = P.ATTRIBUTE_VALUE_DOUBLE_QUOTED;
          break;
        case a.APOSTROPHE:
          this.state = P.ATTRIBUTE_VALUE_SINGLE_QUOTED;
          break;
        case a.GREATER_THAN_SIGN:
          this._err(T.missingAttributeValue), this.state = P.DATA, this.emitCurrentTagToken();
          break;
        default:
          this.state = P.ATTRIBUTE_VALUE_UNQUOTED, this._stateAttributeValueUnquoted(e3);
      }
    }
    _stateAttributeValueDoubleQuoted(e3) {
      switch (e3) {
        case a.QUOTATION_MARK:
          this.state = P.AFTER_ATTRIBUTE_VALUE_QUOTED;
          break;
        case a.AMPERSAND:
          this.returnState = P.ATTRIBUTE_VALUE_DOUBLE_QUOTED, this.state = P.CHARACTER_REFERENCE;
          break;
        case a.NULL:
          this._err(T.unexpectedNullCharacter), this.currentAttr.value += s;
          break;
        case a.EOF:
          this._err(T.eofInTag), this._emitEOFToken();
          break;
        default:
          this.currentAttr.value += String.fromCodePoint(e3);
      }
    }
    _stateAttributeValueSingleQuoted(e3) {
      switch (e3) {
        case a.APOSTROPHE:
          this.state = P.AFTER_ATTRIBUTE_VALUE_QUOTED;
          break;
        case a.AMPERSAND:
          this.returnState = P.ATTRIBUTE_VALUE_SINGLE_QUOTED, this.state = P.CHARACTER_REFERENCE;
          break;
        case a.NULL:
          this._err(T.unexpectedNullCharacter), this.currentAttr.value += s;
          break;
        case a.EOF:
          this._err(T.eofInTag), this._emitEOFToken();
          break;
        default:
          this.currentAttr.value += String.fromCodePoint(e3);
      }
    }
    _stateAttributeValueUnquoted(e3) {
      switch (e3) {
        case a.SPACE:
        case a.LINE_FEED:
        case a.TABULATION:
        case a.FORM_FEED:
          this._leaveAttrValue(), this.state = P.BEFORE_ATTRIBUTE_NAME;
          break;
        case a.AMPERSAND:
          this.returnState = P.ATTRIBUTE_VALUE_UNQUOTED, this.state = P.CHARACTER_REFERENCE;
          break;
        case a.GREATER_THAN_SIGN:
          this._leaveAttrValue(), this.state = P.DATA, this.emitCurrentTagToken();
          break;
        case a.NULL:
          this._err(T.unexpectedNullCharacter), this.currentAttr.value += s;
          break;
        case a.QUOTATION_MARK:
        case a.APOSTROPHE:
        case a.LESS_THAN_SIGN:
        case a.EQUALS_SIGN:
        case a.GRAVE_ACCENT:
          this._err(T.unexpectedCharacterInUnquotedAttributeValue), this.currentAttr.value += String.fromCodePoint(e3);
          break;
        case a.EOF:
          this._err(T.eofInTag), this._emitEOFToken();
          break;
        default:
          this.currentAttr.value += String.fromCodePoint(e3);
      }
    }
    _stateAfterAttributeValueQuoted(e3) {
      switch (e3) {
        case a.SPACE:
        case a.LINE_FEED:
        case a.TABULATION:
        case a.FORM_FEED:
          this._leaveAttrValue(), this.state = P.BEFORE_ATTRIBUTE_NAME;
          break;
        case a.SOLIDUS:
          this._leaveAttrValue(), this.state = P.SELF_CLOSING_START_TAG;
          break;
        case a.GREATER_THAN_SIGN:
          this._leaveAttrValue(), this.state = P.DATA, this.emitCurrentTagToken();
          break;
        case a.EOF:
          this._err(T.eofInTag), this._emitEOFToken();
          break;
        default:
          this._err(T.missingWhitespaceBetweenAttributes), this.state = P.BEFORE_ATTRIBUTE_NAME, this._stateBeforeAttributeName(e3);
      }
    }
    _stateSelfClosingStartTag(e3) {
      switch (e3) {
        case a.GREATER_THAN_SIGN:
          this.currentToken.selfClosing = true, this.state = P.DATA, this.emitCurrentTagToken();
          break;
        case a.EOF:
          this._err(T.eofInTag), this._emitEOFToken();
          break;
        default:
          this._err(T.unexpectedSolidusInTag), this.state = P.BEFORE_ATTRIBUTE_NAME, this._stateBeforeAttributeName(e3);
      }
    }
    _stateBogusComment(e3) {
      const t2 = this.currentToken;
      switch (e3) {
        case a.GREATER_THAN_SIGN:
          this.state = P.DATA, this.emitCurrentComment(t2);
          break;
        case a.EOF:
          this.emitCurrentComment(t2), this._emitEOFToken();
          break;
        case a.NULL:
          this._err(T.unexpectedNullCharacter), t2.data += s;
          break;
        default:
          t2.data += String.fromCodePoint(e3);
      }
    }
    _stateMarkupDeclarationOpen(e3) {
      this._consumeSequenceIfMatch("--", true) ? (this._createCommentToken(3), this.state = P.COMMENT_START) : this._consumeSequenceIfMatch(n, false) ? (this.currentLocation = this.getCurrentLocation(8), this.state = P.DOCTYPE) : this._consumeSequenceIfMatch(r, true) ? this.inForeignNode ? this.state = P.CDATA_SECTION : (this._err(T.cdataInHtmlContent), this._createCommentToken(8), this.currentToken.data = "[CDATA[", this.state = P.BOGUS_COMMENT) : this._ensureHibernation() || (this._err(T.incorrectlyOpenedComment), this._createCommentToken(2), this.state = P.BOGUS_COMMENT, this._stateBogusComment(e3));
    }
    _stateCommentStart(e3) {
      switch (e3) {
        case a.HYPHEN_MINUS:
          this.state = P.COMMENT_START_DASH;
          break;
        case a.GREATER_THAN_SIGN: {
          this._err(T.abruptClosingOfEmptyComment), this.state = P.DATA;
          const e4 = this.currentToken;
          this.emitCurrentComment(e4);
          break;
        }
        default:
          this.state = P.COMMENT, this._stateComment(e3);
      }
    }
    _stateCommentStartDash(e3) {
      const t2 = this.currentToken;
      switch (e3) {
        case a.HYPHEN_MINUS:
          this.state = P.COMMENT_END;
          break;
        case a.GREATER_THAN_SIGN:
          this._err(T.abruptClosingOfEmptyComment), this.state = P.DATA, this.emitCurrentComment(t2);
          break;
        case a.EOF:
          this._err(T.eofInComment), this.emitCurrentComment(t2), this._emitEOFToken();
          break;
        default:
          t2.data += "-", this.state = P.COMMENT, this._stateComment(e3);
      }
    }
    _stateComment(e3) {
      const t2 = this.currentToken;
      switch (e3) {
        case a.HYPHEN_MINUS:
          this.state = P.COMMENT_END_DASH;
          break;
        case a.LESS_THAN_SIGN:
          t2.data += "<", this.state = P.COMMENT_LESS_THAN_SIGN;
          break;
        case a.NULL:
          this._err(T.unexpectedNullCharacter), t2.data += s;
          break;
        case a.EOF:
          this._err(T.eofInComment), this.emitCurrentComment(t2), this._emitEOFToken();
          break;
        default:
          t2.data += String.fromCodePoint(e3);
      }
    }
    _stateCommentLessThanSign(e3) {
      const t2 = this.currentToken;
      switch (e3) {
        case a.EXCLAMATION_MARK:
          t2.data += "!", this.state = P.COMMENT_LESS_THAN_SIGN_BANG;
          break;
        case a.LESS_THAN_SIGN:
          t2.data += "<";
          break;
        default:
          this.state = P.COMMENT, this._stateComment(e3);
      }
    }
    _stateCommentLessThanSignBang(e3) {
      e3 === a.HYPHEN_MINUS ? this.state = P.COMMENT_LESS_THAN_SIGN_BANG_DASH : (this.state = P.COMMENT, this._stateComment(e3));
    }
    _stateCommentLessThanSignBangDash(e3) {
      e3 === a.HYPHEN_MINUS ? this.state = P.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH : (this.state = P.COMMENT_END_DASH, this._stateCommentEndDash(e3));
    }
    _stateCommentLessThanSignBangDashDash(e3) {
      e3 !== a.GREATER_THAN_SIGN && e3 !== a.EOF && this._err(T.nestedComment), this.state = P.COMMENT_END, this._stateCommentEnd(e3);
    }
    _stateCommentEndDash(e3) {
      const t2 = this.currentToken;
      switch (e3) {
        case a.HYPHEN_MINUS:
          this.state = P.COMMENT_END;
          break;
        case a.EOF:
          this._err(T.eofInComment), this.emitCurrentComment(t2), this._emitEOFToken();
          break;
        default:
          t2.data += "-", this.state = P.COMMENT, this._stateComment(e3);
      }
    }
    _stateCommentEnd(e3) {
      const t2 = this.currentToken;
      switch (e3) {
        case a.GREATER_THAN_SIGN:
          this.state = P.DATA, this.emitCurrentComment(t2);
          break;
        case a.EXCLAMATION_MARK:
          this.state = P.COMMENT_END_BANG;
          break;
        case a.HYPHEN_MINUS:
          t2.data += "-";
          break;
        case a.EOF:
          this._err(T.eofInComment), this.emitCurrentComment(t2), this._emitEOFToken();
          break;
        default:
          t2.data += "--", this.state = P.COMMENT, this._stateComment(e3);
      }
    }
    _stateCommentEndBang(e3) {
      const t2 = this.currentToken;
      switch (e3) {
        case a.HYPHEN_MINUS:
          t2.data += "--!", this.state = P.COMMENT_END_DASH;
          break;
        case a.GREATER_THAN_SIGN:
          this._err(T.incorrectlyClosedComment), this.state = P.DATA, this.emitCurrentComment(t2);
          break;
        case a.EOF:
          this._err(T.eofInComment), this.emitCurrentComment(t2), this._emitEOFToken();
          break;
        default:
          t2.data += "--!", this.state = P.COMMENT, this._stateComment(e3);
      }
    }
    _stateDoctype(e3) {
      switch (e3) {
        case a.SPACE:
        case a.LINE_FEED:
        case a.TABULATION:
        case a.FORM_FEED:
          this.state = P.BEFORE_DOCTYPE_NAME;
          break;
        case a.GREATER_THAN_SIGN:
          this.state = P.BEFORE_DOCTYPE_NAME, this._stateBeforeDoctypeName(e3);
          break;
        case a.EOF: {
          this._err(T.eofInDoctype), this._createDoctypeToken(null);
          const e4 = this.currentToken;
          e4.forceQuirks = true, this.emitCurrentDoctype(e4), this._emitEOFToken();
          break;
        }
        default:
          this._err(T.missingWhitespaceBeforeDoctypeName), this.state = P.BEFORE_DOCTYPE_NAME, this._stateBeforeDoctypeName(e3);
      }
    }
    _stateBeforeDoctypeName(e3) {
      if (B(e3))
        this._createDoctypeToken(String.fromCharCode(G(e3))), this.state = P.DOCTYPE_NAME;
      else
        switch (e3) {
          case a.SPACE:
          case a.LINE_FEED:
          case a.TABULATION:
          case a.FORM_FEED:
            break;
          case a.NULL:
            this._err(T.unexpectedNullCharacter), this._createDoctypeToken(s), this.state = P.DOCTYPE_NAME;
            break;
          case a.GREATER_THAN_SIGN: {
            this._err(T.missingDoctypeName), this._createDoctypeToken(null);
            const e4 = this.currentToken;
            e4.forceQuirks = true, this.emitCurrentDoctype(e4), this.state = P.DATA;
            break;
          }
          case a.EOF: {
            this._err(T.eofInDoctype), this._createDoctypeToken(null);
            const e4 = this.currentToken;
            e4.forceQuirks = true, this.emitCurrentDoctype(e4), this._emitEOFToken();
            break;
          }
          default:
            this._createDoctypeToken(String.fromCodePoint(e3)), this.state = P.DOCTYPE_NAME;
        }
    }
    _stateDoctypeName(e3) {
      const t2 = this.currentToken;
      switch (e3) {
        case a.SPACE:
        case a.LINE_FEED:
        case a.TABULATION:
        case a.FORM_FEED:
          this.state = P.AFTER_DOCTYPE_NAME;
          break;
        case a.GREATER_THAN_SIGN:
          this.state = P.DATA, this.emitCurrentDoctype(t2);
          break;
        case a.NULL:
          this._err(T.unexpectedNullCharacter), t2.name += s;
          break;
        case a.EOF:
          this._err(T.eofInDoctype), t2.forceQuirks = true, this.emitCurrentDoctype(t2), this._emitEOFToken();
          break;
        default:
          t2.name += String.fromCodePoint(B(e3) ? G(e3) : e3);
      }
    }
    _stateAfterDoctypeName(e3) {
      const t2 = this.currentToken;
      switch (e3) {
        case a.SPACE:
        case a.LINE_FEED:
        case a.TABULATION:
        case a.FORM_FEED:
          break;
        case a.GREATER_THAN_SIGN:
          this.state = P.DATA, this.emitCurrentDoctype(t2);
          break;
        case a.EOF:
          this._err(T.eofInDoctype), t2.forceQuirks = true, this.emitCurrentDoctype(t2), this._emitEOFToken();
          break;
        default:
          this._consumeSequenceIfMatch("public", false) ? this.state = P.AFTER_DOCTYPE_PUBLIC_KEYWORD : this._consumeSequenceIfMatch("system", false) ? this.state = P.AFTER_DOCTYPE_SYSTEM_KEYWORD : this._ensureHibernation() || (this._err(T.invalidCharacterSequenceAfterDoctypeName), t2.forceQuirks = true, this.state = P.BOGUS_DOCTYPE, this._stateBogusDoctype(e3));
      }
    }
    _stateAfterDoctypePublicKeyword(e3) {
      const t2 = this.currentToken;
      switch (e3) {
        case a.SPACE:
        case a.LINE_FEED:
        case a.TABULATION:
        case a.FORM_FEED:
          this.state = P.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER;
          break;
        case a.QUOTATION_MARK:
          this._err(T.missingWhitespaceAfterDoctypePublicKeyword), t2.publicId = "", this.state = P.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
          break;
        case a.APOSTROPHE:
          this._err(T.missingWhitespaceAfterDoctypePublicKeyword), t2.publicId = "", this.state = P.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
          break;
        case a.GREATER_THAN_SIGN:
          this._err(T.missingDoctypePublicIdentifier), t2.forceQuirks = true, this.state = P.DATA, this.emitCurrentDoctype(t2);
          break;
        case a.EOF:
          this._err(T.eofInDoctype), t2.forceQuirks = true, this.emitCurrentDoctype(t2), this._emitEOFToken();
          break;
        default:
          this._err(T.missingQuoteBeforeDoctypePublicIdentifier), t2.forceQuirks = true, this.state = P.BOGUS_DOCTYPE, this._stateBogusDoctype(e3);
      }
    }
    _stateBeforeDoctypePublicIdentifier(e3) {
      const t2 = this.currentToken;
      switch (e3) {
        case a.SPACE:
        case a.LINE_FEED:
        case a.TABULATION:
        case a.FORM_FEED:
          break;
        case a.QUOTATION_MARK:
          t2.publicId = "", this.state = P.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
          break;
        case a.APOSTROPHE:
          t2.publicId = "", this.state = P.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
          break;
        case a.GREATER_THAN_SIGN:
          this._err(T.missingDoctypePublicIdentifier), t2.forceQuirks = true, this.state = P.DATA, this.emitCurrentDoctype(t2);
          break;
        case a.EOF:
          this._err(T.eofInDoctype), t2.forceQuirks = true, this.emitCurrentDoctype(t2), this._emitEOFToken();
          break;
        default:
          this._err(T.missingQuoteBeforeDoctypePublicIdentifier), t2.forceQuirks = true, this.state = P.BOGUS_DOCTYPE, this._stateBogusDoctype(e3);
      }
    }
    _stateDoctypePublicIdentifierDoubleQuoted(e3) {
      const t2 = this.currentToken;
      switch (e3) {
        case a.QUOTATION_MARK:
          this.state = P.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
          break;
        case a.NULL:
          this._err(T.unexpectedNullCharacter), t2.publicId += s;
          break;
        case a.GREATER_THAN_SIGN:
          this._err(T.abruptDoctypePublicIdentifier), t2.forceQuirks = true, this.emitCurrentDoctype(t2), this.state = P.DATA;
          break;
        case a.EOF:
          this._err(T.eofInDoctype), t2.forceQuirks = true, this.emitCurrentDoctype(t2), this._emitEOFToken();
          break;
        default:
          t2.publicId += String.fromCodePoint(e3);
      }
    }
    _stateDoctypePublicIdentifierSingleQuoted(e3) {
      const t2 = this.currentToken;
      switch (e3) {
        case a.APOSTROPHE:
          this.state = P.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
          break;
        case a.NULL:
          this._err(T.unexpectedNullCharacter), t2.publicId += s;
          break;
        case a.GREATER_THAN_SIGN:
          this._err(T.abruptDoctypePublicIdentifier), t2.forceQuirks = true, this.emitCurrentDoctype(t2), this.state = P.DATA;
          break;
        case a.EOF:
          this._err(T.eofInDoctype), t2.forceQuirks = true, this.emitCurrentDoctype(t2), this._emitEOFToken();
          break;
        default:
          t2.publicId += String.fromCodePoint(e3);
      }
    }
    _stateAfterDoctypePublicIdentifier(e3) {
      const t2 = this.currentToken;
      switch (e3) {
        case a.SPACE:
        case a.LINE_FEED:
        case a.TABULATION:
        case a.FORM_FEED:
          this.state = P.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS;
          break;
        case a.GREATER_THAN_SIGN:
          this.state = P.DATA, this.emitCurrentDoctype(t2);
          break;
        case a.QUOTATION_MARK:
          this._err(T.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers), t2.systemId = "", this.state = P.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
          break;
        case a.APOSTROPHE:
          this._err(T.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers), t2.systemId = "", this.state = P.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
          break;
        case a.EOF:
          this._err(T.eofInDoctype), t2.forceQuirks = true, this.emitCurrentDoctype(t2), this._emitEOFToken();
          break;
        default:
          this._err(T.missingQuoteBeforeDoctypeSystemIdentifier), t2.forceQuirks = true, this.state = P.BOGUS_DOCTYPE, this._stateBogusDoctype(e3);
      }
    }
    _stateBetweenDoctypePublicAndSystemIdentifiers(e3) {
      const t2 = this.currentToken;
      switch (e3) {
        case a.SPACE:
        case a.LINE_FEED:
        case a.TABULATION:
        case a.FORM_FEED:
          break;
        case a.GREATER_THAN_SIGN:
          this.emitCurrentDoctype(t2), this.state = P.DATA;
          break;
        case a.QUOTATION_MARK:
          t2.systemId = "", this.state = P.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
          break;
        case a.APOSTROPHE:
          t2.systemId = "", this.state = P.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
          break;
        case a.EOF:
          this._err(T.eofInDoctype), t2.forceQuirks = true, this.emitCurrentDoctype(t2), this._emitEOFToken();
          break;
        default:
          this._err(T.missingQuoteBeforeDoctypeSystemIdentifier), t2.forceQuirks = true, this.state = P.BOGUS_DOCTYPE, this._stateBogusDoctype(e3);
      }
    }
    _stateAfterDoctypeSystemKeyword(e3) {
      const t2 = this.currentToken;
      switch (e3) {
        case a.SPACE:
        case a.LINE_FEED:
        case a.TABULATION:
        case a.FORM_FEED:
          this.state = P.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER;
          break;
        case a.QUOTATION_MARK:
          this._err(T.missingWhitespaceAfterDoctypeSystemKeyword), t2.systemId = "", this.state = P.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
          break;
        case a.APOSTROPHE:
          this._err(T.missingWhitespaceAfterDoctypeSystemKeyword), t2.systemId = "", this.state = P.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
          break;
        case a.GREATER_THAN_SIGN:
          this._err(T.missingDoctypeSystemIdentifier), t2.forceQuirks = true, this.state = P.DATA, this.emitCurrentDoctype(t2);
          break;
        case a.EOF:
          this._err(T.eofInDoctype), t2.forceQuirks = true, this.emitCurrentDoctype(t2), this._emitEOFToken();
          break;
        default:
          this._err(T.missingQuoteBeforeDoctypeSystemIdentifier), t2.forceQuirks = true, this.state = P.BOGUS_DOCTYPE, this._stateBogusDoctype(e3);
      }
    }
    _stateBeforeDoctypeSystemIdentifier(e3) {
      const t2 = this.currentToken;
      switch (e3) {
        case a.SPACE:
        case a.LINE_FEED:
        case a.TABULATION:
        case a.FORM_FEED:
          break;
        case a.QUOTATION_MARK:
          t2.systemId = "", this.state = P.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
          break;
        case a.APOSTROPHE:
          t2.systemId = "", this.state = P.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
          break;
        case a.GREATER_THAN_SIGN:
          this._err(T.missingDoctypeSystemIdentifier), t2.forceQuirks = true, this.state = P.DATA, this.emitCurrentDoctype(t2);
          break;
        case a.EOF:
          this._err(T.eofInDoctype), t2.forceQuirks = true, this.emitCurrentDoctype(t2), this._emitEOFToken();
          break;
        default:
          this._err(T.missingQuoteBeforeDoctypeSystemIdentifier), t2.forceQuirks = true, this.state = P.BOGUS_DOCTYPE, this._stateBogusDoctype(e3);
      }
    }
    _stateDoctypeSystemIdentifierDoubleQuoted(e3) {
      const t2 = this.currentToken;
      switch (e3) {
        case a.QUOTATION_MARK:
          this.state = P.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
          break;
        case a.NULL:
          this._err(T.unexpectedNullCharacter), t2.systemId += s;
          break;
        case a.GREATER_THAN_SIGN:
          this._err(T.abruptDoctypeSystemIdentifier), t2.forceQuirks = true, this.emitCurrentDoctype(t2), this.state = P.DATA;
          break;
        case a.EOF:
          this._err(T.eofInDoctype), t2.forceQuirks = true, this.emitCurrentDoctype(t2), this._emitEOFToken();
          break;
        default:
          t2.systemId += String.fromCodePoint(e3);
      }
    }
    _stateDoctypeSystemIdentifierSingleQuoted(e3) {
      const t2 = this.currentToken;
      switch (e3) {
        case a.APOSTROPHE:
          this.state = P.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
          break;
        case a.NULL:
          this._err(T.unexpectedNullCharacter), t2.systemId += s;
          break;
        case a.GREATER_THAN_SIGN:
          this._err(T.abruptDoctypeSystemIdentifier), t2.forceQuirks = true, this.emitCurrentDoctype(t2), this.state = P.DATA;
          break;
        case a.EOF:
          this._err(T.eofInDoctype), t2.forceQuirks = true, this.emitCurrentDoctype(t2), this._emitEOFToken();
          break;
        default:
          t2.systemId += String.fromCodePoint(e3);
      }
    }
    _stateAfterDoctypeSystemIdentifier(e3) {
      const t2 = this.currentToken;
      switch (e3) {
        case a.SPACE:
        case a.LINE_FEED:
        case a.TABULATION:
        case a.FORM_FEED:
          break;
        case a.GREATER_THAN_SIGN:
          this.emitCurrentDoctype(t2), this.state = P.DATA;
          break;
        case a.EOF:
          this._err(T.eofInDoctype), t2.forceQuirks = true, this.emitCurrentDoctype(t2), this._emitEOFToken();
          break;
        default:
          this._err(T.unexpectedCharacterAfterDoctypeSystemIdentifier), this.state = P.BOGUS_DOCTYPE, this._stateBogusDoctype(e3);
      }
    }
    _stateBogusDoctype(e3) {
      const t2 = this.currentToken;
      switch (e3) {
        case a.GREATER_THAN_SIGN:
          this.emitCurrentDoctype(t2), this.state = P.DATA;
          break;
        case a.NULL:
          this._err(T.unexpectedNullCharacter);
          break;
        case a.EOF:
          this.emitCurrentDoctype(t2), this._emitEOFToken();
      }
    }
    _stateCdataSection(e3) {
      switch (e3) {
        case a.RIGHT_SQUARE_BRACKET:
          this.state = P.CDATA_SECTION_BRACKET;
          break;
        case a.EOF:
          this._err(T.eofInCdata), this._emitEOFToken();
          break;
        default:
          this._emitCodePoint(e3);
      }
    }
    _stateCdataSectionBracket(e3) {
      e3 === a.RIGHT_SQUARE_BRACKET ? this.state = P.CDATA_SECTION_END : (this._emitChars("]"), this.state = P.CDATA_SECTION, this._stateCdataSection(e3));
    }
    _stateCdataSectionEnd(e3) {
      switch (e3) {
        case a.GREATER_THAN_SIGN:
          this.state = P.DATA;
          break;
        case a.RIGHT_SQUARE_BRACKET:
          this._emitChars("]");
          break;
        default:
          this._emitChars("]]"), this.state = P.CDATA_SECTION, this._stateCdataSection(e3);
      }
    }
    _stateCharacterReference(e3) {
      e3 === a.NUMBER_SIGN ? this.state = P.NUMERIC_CHARACTER_REFERENCE : F(e3) ? (this.state = P.NAMED_CHARACTER_REFERENCE, this._stateNamedCharacterReference(e3)) : (this._flushCodePointConsumedAsCharacterReference(a.AMPERSAND), this._reconsumeInState(this.returnState, e3));
    }
    _stateNamedCharacterReference(e3) {
      const t2 = this._matchNamedCharacterReference(e3);
      if (this._ensureHibernation())
        ;
      else if (t2) {
        for (let e4 = 0; e4 < t2.length; e4++)
          this._flushCodePointConsumedAsCharacterReference(t2[e4]);
        this.state = this.returnState;
      } else
        this._flushCodePointConsumedAsCharacterReference(a.AMPERSAND), this.state = P.AMBIGUOUS_AMPERSAND;
    }
    _stateAmbiguousAmpersand(e3) {
      F(e3) ? this._flushCodePointConsumedAsCharacterReference(e3) : (e3 === a.SEMICOLON && this._err(T.unknownNamedCharacterReference), this._reconsumeInState(this.returnState, e3));
    }
    _stateNumericCharacterReference(e3) {
      this.charRefCode = 0, e3 === a.LATIN_SMALL_X || e3 === a.LATIN_CAPITAL_X ? this.state = P.HEXADEMICAL_CHARACTER_REFERENCE_START : b(e3) ? (this.state = P.DECIMAL_CHARACTER_REFERENCE, this._stateDecimalCharacterReference(e3)) : (this._err(T.absenceOfDigitsInNumericCharacterReference), this._flushCodePointConsumedAsCharacterReference(a.AMPERSAND), this._flushCodePointConsumedAsCharacterReference(a.NUMBER_SIGN), this._reconsumeInState(this.returnState, e3));
    }
    _stateHexademicalCharacterReferenceStart(e3) {
      !function(e4) {
        return b(e4) || U(e4) || y(e4);
      }(e3) ? (this._err(T.absenceOfDigitsInNumericCharacterReference), this._flushCodePointConsumedAsCharacterReference(a.AMPERSAND), this._flushCodePointConsumedAsCharacterReference(a.NUMBER_SIGN), this._unconsume(2), this.state = this.returnState) : (this.state = P.HEXADEMICAL_CHARACTER_REFERENCE, this._stateHexademicalCharacterReference(e3));
    }
    _stateHexademicalCharacterReference(e3) {
      U(e3) ? this.charRefCode = 16 * this.charRefCode + e3 - 55 : y(e3) ? this.charRefCode = 16 * this.charRefCode + e3 - 87 : b(e3) ? this.charRefCode = 16 * this.charRefCode + e3 - 48 : e3 === a.SEMICOLON ? this.state = P.NUMERIC_CHARACTER_REFERENCE_END : (this._err(T.missingSemicolonAfterCharacterReference), this.state = P.NUMERIC_CHARACTER_REFERENCE_END, this._stateNumericCharacterReferenceEnd(e3));
    }
    _stateDecimalCharacterReference(e3) {
      b(e3) ? this.charRefCode = 10 * this.charRefCode + e3 - 48 : e3 === a.SEMICOLON ? this.state = P.NUMERIC_CHARACTER_REFERENCE_END : (this._err(T.missingSemicolonAfterCharacterReference), this.state = P.NUMERIC_CHARACTER_REFERENCE_END, this._stateNumericCharacterReferenceEnd(e3));
    }
    _stateNumericCharacterReferenceEnd(e3) {
      if (this.charRefCode === a.NULL)
        this._err(T.nullCharacterReference), this.charRefCode = a.REPLACEMENT_CHARACTER;
      else if (this.charRefCode > 1114111)
        this._err(T.characterReferenceOutsideUnicodeRange), this.charRefCode = a.REPLACEMENT_CHARACTER;
      else if (o(this.charRefCode))
        this._err(T.surrogateCharacterReference), this.charRefCode = a.REPLACEMENT_CHARACTER;
      else if (E(this.charRefCode))
        this._err(T.noncharacterCharacterReference);
      else if (c(this.charRefCode) || this.charRefCode === a.CARRIAGE_RETURN) {
        this._err(T.controlCharacterReference);
        const e4 = g.get(this.charRefCode);
        void 0 !== e4 && (this.charRefCode = e4);
      }
      this._flushCodePointConsumedAsCharacterReference(this.charRefCode), this._reconsumeInState(this.returnState, e3);
    }
  }
  const v = /* @__PURE__ */ new Set([S.DD, S.DT, S.LI, S.OPTGROUP, S.OPTION, S.P, S.RB, S.RP, S.RT, S.RTC]), Q = /* @__PURE__ */ new Set([...v, S.CAPTION, S.COLGROUP, S.TBODY, S.TD, S.TFOOT, S.TH, S.THEAD, S.TR]), q = /* @__PURE__ */ new Map([[S.APPLET, u.HTML], [S.CAPTION, u.HTML], [S.HTML, u.HTML], [S.MARQUEE, u.HTML], [S.OBJECT, u.HTML], [S.TABLE, u.HTML], [S.TD, u.HTML], [S.TEMPLATE, u.HTML], [S.TH, u.HTML], [S.ANNOTATION_XML, u.MATHML], [S.MI, u.MATHML], [S.MN, u.MATHML], [S.MO, u.MATHML], [S.MS, u.MATHML], [S.MTEXT, u.MATHML], [S.DESC, u.SVG], [S.FOREIGN_OBJECT, u.SVG], [S.TITLE, u.SVG]]), W = [S.H1, S.H2, S.H3, S.H4, S.H5, S.H6], X = [S.TR, S.TEMPLATE, S.HTML], K = [S.TBODY, S.TFOOT, S.THEAD, S.TEMPLATE, S.HTML], V = [S.TABLE, S.TEMPLATE, S.HTML], z = [S.TD, S.TH];
  class j {
    get currentTmplContentOrNode() {
      return this._isInTemplate() ? this.treeAdapter.getTemplateContent(this.current) : this.current;
    }
    constructor(e3, t2, s2) {
      this.treeAdapter = t2, this.handler = s2, this.items = [], this.tagIDs = [], this.stackTop = -1, this.tmplCount = 0, this.currentTagId = S.UNKNOWN, this.current = e3;
    }
    _indexOf(e3) {
      return this.items.lastIndexOf(e3, this.stackTop);
    }
    _isInTemplate() {
      return this.currentTagId === S.TEMPLATE && this.treeAdapter.getNamespaceURI(this.current) === u.HTML;
    }
    _updateCurrentElement() {
      this.current = this.items[this.stackTop], this.currentTagId = this.tagIDs[this.stackTop];
    }
    push(e3, t2) {
      this.stackTop++, this.items[this.stackTop] = e3, this.current = e3, this.tagIDs[this.stackTop] = t2, this.currentTagId = t2, this._isInTemplate() && this.tmplCount++, this.handler.onItemPush(e3, t2, true);
    }
    pop() {
      const e3 = this.current;
      this.tmplCount > 0 && this._isInTemplate() && this.tmplCount--, this.stackTop--, this._updateCurrentElement(), this.handler.onItemPop(e3, true);
    }
    replace(e3, t2) {
      const s2 = this._indexOf(e3);
      this.items[s2] = t2, s2 === this.stackTop && (this.current = t2);
    }
    insertAfter(e3, t2, s2) {
      const a2 = this._indexOf(e3) + 1;
      this.items.splice(a2, 0, t2), this.tagIDs.splice(a2, 0, s2), this.stackTop++, a2 === this.stackTop && this._updateCurrentElement(), this.handler.onItemPush(this.current, this.currentTagId, a2 === this.stackTop);
    }
    popUntilTagNamePopped(e3) {
      let t2 = this.stackTop + 1;
      do {
        t2 = this.tagIDs.lastIndexOf(e3, t2 - 1);
      } while (t2 > 0 && this.treeAdapter.getNamespaceURI(this.items[t2]) !== u.HTML);
      this.shortenToLength(t2 < 0 ? 0 : t2);
    }
    shortenToLength(e3) {
      for (; this.stackTop >= e3; ) {
        const t2 = this.current;
        this.tmplCount > 0 && this._isInTemplate() && (this.tmplCount -= 1), this.stackTop--, this._updateCurrentElement(), this.handler.onItemPop(t2, this.stackTop < e3);
      }
    }
    popUntilElementPopped(e3) {
      const t2 = this._indexOf(e3);
      this.shortenToLength(t2 < 0 ? 0 : t2);
    }
    popUntilPopped(e3, t2) {
      const s2 = this._indexOfTagNames(e3, t2);
      this.shortenToLength(s2 < 0 ? 0 : s2);
    }
    popUntilNumberedHeaderPopped() {
      this.popUntilPopped(W, u.HTML);
    }
    popUntilTableCellPopped() {
      this.popUntilPopped(z, u.HTML);
    }
    popAllUpToHtmlElement() {
      this.tmplCount = 0, this.shortenToLength(1);
    }
    _indexOfTagNames(e3, t2) {
      for (let s2 = this.stackTop; s2 >= 0; s2--)
        if (e3.includes(this.tagIDs[s2]) && this.treeAdapter.getNamespaceURI(this.items[s2]) === t2)
          return s2;
      return -1;
    }
    clearBackTo(e3, t2) {
      const s2 = this._indexOfTagNames(e3, t2);
      this.shortenToLength(s2 + 1);
    }
    clearBackToTableContext() {
      this.clearBackTo(V, u.HTML);
    }
    clearBackToTableBodyContext() {
      this.clearBackTo(K, u.HTML);
    }
    clearBackToTableRowContext() {
      this.clearBackTo(X, u.HTML);
    }
    remove(e3) {
      const t2 = this._indexOf(e3);
      t2 >= 0 && (t2 === this.stackTop ? this.pop() : (this.items.splice(t2, 1), this.tagIDs.splice(t2, 1), this.stackTop--, this._updateCurrentElement(), this.handler.onItemPop(e3, false)));
    }
    tryPeekProperlyNestedBodyElement() {
      return this.stackTop >= 1 && this.tagIDs[1] === S.BODY ? this.items[1] : null;
    }
    contains(e3) {
      return this._indexOf(e3) > -1;
    }
    getCommonAncestor(e3) {
      const t2 = this._indexOf(e3) - 1;
      return t2 >= 0 ? this.items[t2] : null;
    }
    isRootHtmlElementCurrent() {
      return 0 === this.stackTop && this.tagIDs[0] === S.HTML;
    }
    hasInScope(e3) {
      for (let t2 = this.stackTop; t2 >= 0; t2--) {
        const s2 = this.tagIDs[t2], a2 = this.treeAdapter.getNamespaceURI(this.items[t2]);
        if (s2 === e3 && a2 === u.HTML)
          return true;
        if (q.get(s2) === a2)
          return false;
      }
      return true;
    }
    hasNumberedHeaderInScope() {
      for (let e3 = this.stackTop; e3 >= 0; e3--) {
        const t2 = this.tagIDs[e3], s2 = this.treeAdapter.getNamespaceURI(this.items[e3]);
        if (M(t2) && s2 === u.HTML)
          return true;
        if (q.get(t2) === s2)
          return false;
      }
      return true;
    }
    hasInListItemScope(e3) {
      for (let t2 = this.stackTop; t2 >= 0; t2--) {
        const s2 = this.tagIDs[t2], a2 = this.treeAdapter.getNamespaceURI(this.items[t2]);
        if (s2 === e3 && a2 === u.HTML)
          return true;
        if ((s2 === S.UL || s2 === S.OL) && a2 === u.HTML || q.get(s2) === a2)
          return false;
      }
      return true;
    }
    hasInButtonScope(e3) {
      for (let t2 = this.stackTop; t2 >= 0; t2--) {
        const s2 = this.tagIDs[t2], a2 = this.treeAdapter.getNamespaceURI(this.items[t2]);
        if (s2 === e3 && a2 === u.HTML)
          return true;
        if (s2 === S.BUTTON && a2 === u.HTML || q.get(s2) === a2)
          return false;
      }
      return true;
    }
    hasInTableScope(e3) {
      for (let t2 = this.stackTop; t2 >= 0; t2--) {
        const s2 = this.tagIDs[t2];
        if (this.treeAdapter.getNamespaceURI(this.items[t2]) === u.HTML) {
          if (s2 === e3)
            return true;
          if (s2 === S.TABLE || s2 === S.TEMPLATE || s2 === S.HTML)
            return false;
        }
      }
      return true;
    }
    hasTableBodyContextInTableScope() {
      for (let e3 = this.stackTop; e3 >= 0; e3--) {
        const t2 = this.tagIDs[e3];
        if (this.treeAdapter.getNamespaceURI(this.items[e3]) === u.HTML) {
          if (t2 === S.TBODY || t2 === S.THEAD || t2 === S.TFOOT)
            return true;
          if (t2 === S.TABLE || t2 === S.HTML)
            return false;
        }
      }
      return true;
    }
    hasInSelectScope(e3) {
      for (let t2 = this.stackTop; t2 >= 0; t2--) {
        const s2 = this.tagIDs[t2];
        if (this.treeAdapter.getNamespaceURI(this.items[t2]) === u.HTML) {
          if (s2 === e3)
            return true;
          if (s2 !== S.OPTION && s2 !== S.OPTGROUP)
            return false;
        }
      }
      return true;
    }
    generateImpliedEndTags() {
      for (; v.has(this.currentTagId); )
        this.pop();
    }
    generateImpliedEndTagsThoroughly() {
      for (; Q.has(this.currentTagId); )
        this.pop();
    }
    generateImpliedEndTagsWithExclusion(e3) {
      for (; this.currentTagId !== e3 && Q.has(this.currentTagId); )
        this.pop();
    }
  }
  var J;
  !function(e3) {
    e3[e3.Marker = 0] = "Marker", e3[e3.Element = 1] = "Element";
  }(J = J || (J = {}));
  const Z = { type: J.Marker };
  class $ {
    constructor(e3) {
      this.treeAdapter = e3, this.entries = [], this.bookmark = null;
    }
    _getNoahArkConditionCandidates(e3, t2) {
      const s2 = [], a2 = t2.length, r2 = this.treeAdapter.getTagName(e3), n2 = this.treeAdapter.getNamespaceURI(e3);
      for (let e4 = 0; e4 < this.entries.length; e4++) {
        const t3 = this.entries[e4];
        if (t3.type === J.Marker)
          break;
        const { element: i22 } = t3;
        if (this.treeAdapter.getTagName(i22) === r2 && this.treeAdapter.getNamespaceURI(i22) === n2) {
          const t4 = this.treeAdapter.getAttrList(i22);
          t4.length === a2 && s2.push({ idx: e4, attrs: t4 });
        }
      }
      return s2;
    }
    _ensureNoahArkCondition(e3) {
      if (this.entries.length < 3)
        return;
      const t2 = this.treeAdapter.getAttrList(e3), s2 = this._getNoahArkConditionCandidates(e3, t2);
      if (s2.length < 3)
        return;
      const a2 = new Map(t2.map((e4) => [e4.name, e4.value]));
      let r2 = 0;
      for (let e4 = 0; e4 < s2.length; e4++) {
        const t3 = s2[e4];
        t3.attrs.every((e5) => a2.get(e5.name) === e5.value) && (r2 += 1, r2 >= 3 && this.entries.splice(t3.idx, 1));
      }
    }
    insertMarker() {
      this.entries.unshift(Z);
    }
    pushElement(e3, t2) {
      this._ensureNoahArkCondition(e3), this.entries.unshift({ type: J.Element, element: e3, token: t2 });
    }
    insertElementAfterBookmark(e3, t2) {
      const s2 = this.entries.indexOf(this.bookmark);
      this.entries.splice(s2, 0, { type: J.Element, element: e3, token: t2 });
    }
    removeEntry(e3) {
      const t2 = this.entries.indexOf(e3);
      t2 >= 0 && this.entries.splice(t2, 1);
    }
    clearToLastMarker() {
      const e3 = this.entries.indexOf(Z);
      e3 >= 0 ? this.entries.splice(0, e3 + 1) : this.entries.length = 0;
    }
    getElementEntryInScopeWithTagName(e3) {
      const t2 = this.entries.find((t3) => t3.type === J.Marker || this.treeAdapter.getTagName(t3.element) === e3);
      return t2 && t2.type === J.Element ? t2 : null;
    }
    getElementEntry(e3) {
      return this.entries.find((t2) => t2.type === J.Element && t2.element === e3);
    }
  }
  function ee(e3) {
    return { nodeName: "#text", value: e3, parentNode: null };
  }
  const te = { createDocument: () => ({ nodeName: "#document", mode: I.NO_QUIRKS, childNodes: [] }), createDocumentFragment: () => ({ nodeName: "#document-fragment", childNodes: [] }), createElement: (e3, t2, s2) => ({ nodeName: e3, tagName: e3, attrs: s2, namespaceURI: t2, childNodes: [], parentNode: null }), createCommentNode: (e3) => ({ nodeName: "#comment", data: e3, parentNode: null }), appendChild(e3, t2) {
    e3.childNodes.push(t2), t2.parentNode = e3;
  }, insertBefore(e3, t2, s2) {
    const a2 = e3.childNodes.indexOf(s2);
    e3.childNodes.splice(a2, 0, t2), t2.parentNode = e3;
  }, setTemplateContent(e3, t2) {
    e3.content = t2;
  }, getTemplateContent: (e3) => e3.content, setDocumentType(e3, t2, s2, a2) {
    const r2 = e3.childNodes.find((e4) => "#documentType" === e4.nodeName);
    if (r2)
      r2.name = t2, r2.publicId = s2, r2.systemId = a2;
    else {
      const r3 = { nodeName: "#documentType", name: t2, publicId: s2, systemId: a2, parentNode: null };
      te.appendChild(e3, r3);
    }
  }, setDocumentMode(e3, t2) {
    e3.mode = t2;
  }, getDocumentMode: (e3) => e3.mode, detachNode(e3) {
    if (e3.parentNode) {
      const t2 = e3.parentNode.childNodes.indexOf(e3);
      e3.parentNode.childNodes.splice(t2, 1), e3.parentNode = null;
    }
  }, insertText(e3, t2) {
    if (e3.childNodes.length > 0) {
      const s2 = e3.childNodes[e3.childNodes.length - 1];
      if (te.isTextNode(s2))
        return void (s2.value += t2);
    }
    te.appendChild(e3, ee(t2));
  }, insertTextBefore(e3, t2, s2) {
    const a2 = e3.childNodes[e3.childNodes.indexOf(s2) - 1];
    a2 && te.isTextNode(a2) ? a2.value += t2 : te.insertBefore(e3, ee(t2), s2);
  }, adoptAttributes(e3, t2) {
    const s2 = new Set(e3.attrs.map((e4) => e4.name));
    for (let a2 = 0; a2 < t2.length; a2++)
      s2.has(t2[a2].name) || e3.attrs.push(t2[a2]);
  }, getFirstChild: (e3) => e3.childNodes[0], getChildNodes: (e3) => e3.childNodes, getParentNode: (e3) => e3.parentNode, getAttrList: (e3) => e3.attrs, getTagName: (e3) => e3.tagName, getNamespaceURI: (e3) => e3.namespaceURI, getTextNodeContent: (e3) => e3.value, getCommentNodeContent: (e3) => e3.data, getDocumentTypeNodeName: (e3) => e3.name, getDocumentTypeNodePublicId: (e3) => e3.publicId, getDocumentTypeNodeSystemId: (e3) => e3.systemId, isTextNode: (e3) => "#text" === e3.nodeName, isCommentNode: (e3) => "#comment" === e3.nodeName, isDocumentTypeNode: (e3) => "#documentType" === e3.nodeName, isElementNode: (e3) => Object.prototype.hasOwnProperty.call(e3, "tagName"), setNodeSourceCodeLocation(e3, t2) {
    e3.sourceCodeLocation = t2;
  }, getNodeSourceCodeLocation: (e3) => e3.sourceCodeLocation, updateNodeSourceCodeLocation(e3, t2) {
    e3.sourceCodeLocation = { ...e3.sourceCodeLocation, ...t2 };
  } }, se = "html", ae = ["+//silmaril//dtd html pro v0r11 19970101//", "-//as//dtd html 3.0 aswedit + extensions//", "-//advasoft ltd//dtd html 3.0 aswedit + extensions//", "-//ietf//dtd html 2.0 level 1//", "-//ietf//dtd html 2.0 level 2//", "-//ietf//dtd html 2.0 strict level 1//", "-//ietf//dtd html 2.0 strict level 2//", "-//ietf//dtd html 2.0 strict//", "-//ietf//dtd html 2.0//", "-//ietf//dtd html 2.1e//", "-//ietf//dtd html 3.0//", "-//ietf//dtd html 3.2 final//", "-//ietf//dtd html 3.2//", "-//ietf//dtd html 3//", "-//ietf//dtd html level 0//", "-//ietf//dtd html level 1//", "-//ietf//dtd html level 2//", "-//ietf//dtd html level 3//", "-//ietf//dtd html strict level 0//", "-//ietf//dtd html strict level 1//", "-//ietf//dtd html strict level 2//", "-//ietf//dtd html strict level 3//", "-//ietf//dtd html strict//", "-//ietf//dtd html//", "-//metrius//dtd metrius presentational//", "-//microsoft//dtd internet explorer 2.0 html strict//", "-//microsoft//dtd internet explorer 2.0 html//", "-//microsoft//dtd internet explorer 2.0 tables//", "-//microsoft//dtd internet explorer 3.0 html strict//", "-//microsoft//dtd internet explorer 3.0 html//", "-//microsoft//dtd internet explorer 3.0 tables//", "-//netscape comm. corp.//dtd html//", "-//netscape comm. corp.//dtd strict html//", "-//o'reilly and associates//dtd html 2.0//", "-//o'reilly and associates//dtd html extended 1.0//", "-//o'reilly and associates//dtd html extended relaxed 1.0//", "-//sq//dtd html 2.0 hotmetal + extensions//", "-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//", "-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//", "-//spyglass//dtd html 2.0 extended//", "-//sun microsystems corp.//dtd hotjava html//", "-//sun microsystems corp.//dtd hotjava strict html//", "-//w3c//dtd html 3 1995-03-24//", "-//w3c//dtd html 3.2 draft//", "-//w3c//dtd html 3.2 final//", "-//w3c//dtd html 3.2//", "-//w3c//dtd html 3.2s draft//", "-//w3c//dtd html 4.0 frameset//", "-//w3c//dtd html 4.0 transitional//", "-//w3c//dtd html experimental 19960712//", "-//w3c//dtd html experimental 970421//", "-//w3c//dtd w3 html//", "-//w3o//dtd w3 html 3.0//", "-//webtechs//dtd mozilla html 2.0//", "-//webtechs//dtd mozilla html//"], re = [...ae, "-//w3c//dtd html 4.01 frameset//", "-//w3c//dtd html 4.01 transitional//"], ne = /* @__PURE__ */ new Set(["-//w3o//dtd w3 html strict 3.0//en//", "-/w3c/dtd html 4.0 transitional/en", "html"]), ie = ["-//w3c//dtd xhtml 1.0 frameset//", "-//w3c//dtd xhtml 1.0 transitional//"], oe = [...ie, "-//w3c//dtd html 4.01 frameset//", "-//w3c//dtd html 4.01 transitional//"];
  function ce(e3, t2) {
    return t2.some((t3) => e3.startsWith(t3));
  }
  const Ee = "text/html", Te = "application/xhtml+xml", he = "definitionurl", _e = "definitionURL", Ae = new Map(["attributeName", "attributeType", "baseFrequency", "baseProfile", "calcMode", "clipPathUnits", "diffuseConstant", "edgeMode", "filterUnits", "glyphRef", "gradientTransform", "gradientUnits", "kernelMatrix", "kernelUnitLength", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "limitingConeAngle", "markerHeight", "markerUnits", "markerWidth", "maskContentUnits", "maskUnits", "numOctaves", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "refX", "refY", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "specularConstant", "specularExponent", "spreadMethod", "startOffset", "stdDeviation", "stitchTiles", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textLength", "viewBox", "viewTarget", "xChannelSelector", "yChannelSelector", "zoomAndPan"].map((e3) => [e3.toLowerCase(), e3])), le = /* @__PURE__ */ new Map([["xlink:actuate", { prefix: "xlink", name: "actuate", namespace: u.XLINK }], ["xlink:arcrole", { prefix: "xlink", name: "arcrole", namespace: u.XLINK }], ["xlink:href", { prefix: "xlink", name: "href", namespace: u.XLINK }], ["xlink:role", { prefix: "xlink", name: "role", namespace: u.XLINK }], ["xlink:show", { prefix: "xlink", name: "show", namespace: u.XLINK }], ["xlink:title", { prefix: "xlink", name: "title", namespace: u.XLINK }], ["xlink:type", { prefix: "xlink", name: "type", namespace: u.XLINK }], ["xml:base", { prefix: "xml", name: "base", namespace: u.XML }], ["xml:lang", { prefix: "xml", name: "lang", namespace: u.XML }], ["xml:space", { prefix: "xml", name: "space", namespace: u.XML }], ["xmlns", { prefix: "", name: "xmlns", namespace: u.XMLNS }], ["xmlns:xlink", { prefix: "xmlns", name: "xlink", namespace: u.XMLNS }]]), me = new Map(["altGlyph", "altGlyphDef", "altGlyphItem", "animateColor", "animateMotion", "animateTransform", "clipPath", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "foreignObject", "glyphRef", "linearGradient", "radialGradient", "textPath"].map((e3) => [e3.toLowerCase(), e3])), de = /* @__PURE__ */ new Set([S.B, S.BIG, S.BLOCKQUOTE, S.BODY, S.BR, S.CENTER, S.CODE, S.DD, S.DIV, S.DL, S.DT, S.EM, S.EMBED, S.H1, S.H2, S.H3, S.H4, S.H5, S.H6, S.HEAD, S.HR, S.I, S.IMG, S.LI, S.LISTING, S.MENU, S.META, S.NOBR, S.OL, S.P, S.PRE, S.RUBY, S.S, S.SMALL, S.SPAN, S.STRONG, S.STRIKE, S.SUB, S.SUP, S.TABLE, S.TT, S.U, S.UL, S.VAR]);
  function pe(e3) {
    for (let t2 = 0; t2 < e3.attrs.length; t2++)
      if (e3.attrs[t2].name === he) {
        e3.attrs[t2].name = _e;
        break;
      }
  }
  function ue(e3) {
    for (let t2 = 0; t2 < e3.attrs.length; t2++) {
      const s2 = Ae.get(e3.attrs[t2].name);
      null != s2 && (e3.attrs[t2].name = s2);
    }
  }
  function Ne(e3) {
    for (let t2 = 0; t2 < e3.attrs.length; t2++) {
      const s2 = le.get(e3.attrs[t2].name);
      s2 && (e3.attrs[t2].prefix = s2.prefix, e3.attrs[t2].name = s2.name, e3.attrs[t2].namespace = s2.namespace);
    }
  }
  const Ie = "hidden", Ce = 8, Se = 3;
  var De;
  !function(e3) {
    e3[e3.INITIAL = 0] = "INITIAL", e3[e3.BEFORE_HTML = 1] = "BEFORE_HTML", e3[e3.BEFORE_HEAD = 2] = "BEFORE_HEAD", e3[e3.IN_HEAD = 3] = "IN_HEAD", e3[e3.IN_HEAD_NO_SCRIPT = 4] = "IN_HEAD_NO_SCRIPT", e3[e3.AFTER_HEAD = 5] = "AFTER_HEAD", e3[e3.IN_BODY = 6] = "IN_BODY", e3[e3.TEXT = 7] = "TEXT", e3[e3.IN_TABLE = 8] = "IN_TABLE", e3[e3.IN_TABLE_TEXT = 9] = "IN_TABLE_TEXT", e3[e3.IN_CAPTION = 10] = "IN_CAPTION", e3[e3.IN_COLUMN_GROUP = 11] = "IN_COLUMN_GROUP", e3[e3.IN_TABLE_BODY = 12] = "IN_TABLE_BODY", e3[e3.IN_ROW = 13] = "IN_ROW", e3[e3.IN_CELL = 14] = "IN_CELL", e3[e3.IN_SELECT = 15] = "IN_SELECT", e3[e3.IN_SELECT_IN_TABLE = 16] = "IN_SELECT_IN_TABLE", e3[e3.IN_TEMPLATE = 17] = "IN_TEMPLATE", e3[e3.AFTER_BODY = 18] = "AFTER_BODY", e3[e3.IN_FRAMESET = 19] = "IN_FRAMESET", e3[e3.AFTER_FRAMESET = 20] = "AFTER_FRAMESET", e3[e3.AFTER_AFTER_BODY = 21] = "AFTER_AFTER_BODY", e3[e3.AFTER_AFTER_FRAMESET = 22] = "AFTER_AFTER_FRAMESET";
  }(De || (De = {}));
  const Re = { startLine: -1, startCol: -1, startOffset: -1, endLine: -1, endCol: -1, endOffset: -1 }, Oe = /* @__PURE__ */ new Set([S.TABLE, S.TBODY, S.TFOOT, S.THEAD, S.TR]), fe = { scriptingEnabled: true, sourceCodeLocationInfo: false, treeAdapter: te, onParseError: null };
  class Le {
    constructor(e3, t2, s2 = null, a2 = null) {
      this.fragmentContext = s2, this.scriptHandler = a2, this.currentToken = null, this.stopped = false, this.insertionMode = De.INITIAL, this.originalInsertionMode = De.INITIAL, this.headElement = null, this.formElement = null, this.currentNotInHTML = false, this.tmplInsertionModeStack = [], this.pendingCharacterTokens = [], this.hasNonWhitespacePendingCharacterToken = false, this.framesetOk = true, this.skipNextNewLine = false, this.fosterParentingEnabled = false, this.options = { ...fe, ...e3 }, this.treeAdapter = this.options.treeAdapter, this.onParseError = this.options.onParseError, this.onParseError && (this.options.sourceCodeLocationInfo = true), this.document = null != t2 ? t2 : this.treeAdapter.createDocument(), this.tokenizer = new Y(this.options, this), this.activeFormattingElements = new $(this.treeAdapter), this.fragmentContextID = s2 ? O(this.treeAdapter.getTagName(s2)) : S.UNKNOWN, this._setContextModes(null != s2 ? s2 : this.document, this.fragmentContextID), this.openElements = new j(this.document, this.treeAdapter, this);
    }
    static parse(e3, t2) {
      const s2 = new this(t2);
      return s2.tokenizer.write(e3, true), s2.document;
    }
    static getFragmentParser(e3, t2) {
      const s2 = { ...fe, ...t2 };
      null != e3 || (e3 = s2.treeAdapter.createElement(C.TEMPLATE, u.HTML, []));
      const a2 = s2.treeAdapter.createElement("documentmock", u.HTML, []), r2 = new this(s2, a2, e3);
      return r2.fragmentContextID === S.TEMPLATE && r2.tmplInsertionModeStack.unshift(De.IN_TEMPLATE), r2._initTokenizerForFragmentParsing(), r2._insertFakeRootElement(), r2._resetInsertionMode(), r2._findFormInFragmentContext(), r2;
    }
    getFragment() {
      const e3 = this.treeAdapter.getFirstChild(this.document), t2 = this.treeAdapter.createDocumentFragment();
      return this._adoptNodes(e3, t2), t2;
    }
    _err(e3, t2, s2) {
      var a2;
      if (!this.onParseError)
        return;
      const r2 = null !== (a2 = e3.location) && void 0 !== a2 ? a2 : Re, n2 = { code: t2, startLine: r2.startLine, startCol: r2.startCol, startOffset: r2.startOffset, endLine: s2 ? r2.startLine : r2.endLine, endCol: s2 ? r2.startCol : r2.endCol, endOffset: s2 ? r2.startOffset : r2.endOffset };
      this.onParseError(n2);
    }
    onItemPush(e3, t2, s2) {
      var a2, r2;
      null === (r2 = (a2 = this.treeAdapter).onItemPush) || void 0 === r2 || r2.call(a2, e3), s2 && this.openElements.stackTop > 0 && this._setContextModes(e3, t2);
    }
    onItemPop(e3, t2) {
      var s2, a2;
      if (this.options.sourceCodeLocationInfo && this._setEndLocation(e3, this.currentToken), null === (a2 = (s2 = this.treeAdapter).onItemPop) || void 0 === a2 || a2.call(s2, e3, this.openElements.current), t2) {
        let e4, t3;
        0 === this.openElements.stackTop && this.fragmentContext ? (e4 = this.fragmentContext, t3 = this.fragmentContextID) : { current: e4, currentTagId: t3 } = this.openElements, this._setContextModes(e4, t3);
      }
    }
    _setContextModes(e3, t2) {
      const s2 = e3 === this.document || this.treeAdapter.getNamespaceURI(e3) === u.HTML;
      this.currentNotInHTML = !s2, this.tokenizer.inForeignNode = !s2 && !this._isIntegrationPoint(t2, e3);
    }
    _switchToTextParsing(e3, t2) {
      this._insertElement(e3, u.HTML), this.tokenizer.state = t2, this.originalInsertionMode = this.insertionMode, this.insertionMode = De.TEXT;
    }
    switchToPlaintextParsing() {
      this.insertionMode = De.TEXT, this.originalInsertionMode = De.IN_BODY, this.tokenizer.state = k.PLAINTEXT;
    }
    _getAdjustedCurrentElement() {
      return 0 === this.openElements.stackTop && this.fragmentContext ? this.fragmentContext : this.openElements.current;
    }
    _findFormInFragmentContext() {
      let e3 = this.fragmentContext;
      for (; e3; ) {
        if (this.treeAdapter.getTagName(e3) === C.FORM) {
          this.formElement = e3;
          break;
        }
        e3 = this.treeAdapter.getParentNode(e3);
      }
    }
    _initTokenizerForFragmentParsing() {
      if (this.fragmentContext && this.treeAdapter.getNamespaceURI(this.fragmentContext) === u.HTML)
        switch (this.fragmentContextID) {
          case S.TITLE:
          case S.TEXTAREA:
            this.tokenizer.state = k.RCDATA;
            break;
          case S.STYLE:
          case S.XMP:
          case S.IFRAME:
          case S.NOEMBED:
          case S.NOFRAMES:
          case S.NOSCRIPT:
            this.tokenizer.state = k.RAWTEXT;
            break;
          case S.SCRIPT:
            this.tokenizer.state = k.SCRIPT_DATA;
            break;
          case S.PLAINTEXT:
            this.tokenizer.state = k.PLAINTEXT;
        }
    }
    _setDocumentType(e3) {
      const t2 = e3.name || "", s2 = e3.publicId || "", a2 = e3.systemId || "";
      if (this.treeAdapter.setDocumentType(this.document, t2, s2, a2), e3.location) {
        const t3 = this.treeAdapter.getChildNodes(this.document).find((e4) => this.treeAdapter.isDocumentTypeNode(e4));
        t3 && this.treeAdapter.setNodeSourceCodeLocation(t3, e3.location);
      }
    }
    _attachElementToTree(e3, t2) {
      if (this.options.sourceCodeLocationInfo) {
        const s2 = t2 && { ...t2, startTag: t2 };
        this.treeAdapter.setNodeSourceCodeLocation(e3, s2);
      }
      if (this._shouldFosterParentOnInsertion())
        this._fosterParentElement(e3);
      else {
        const t3 = this.openElements.currentTmplContentOrNode;
        this.treeAdapter.appendChild(t3, e3);
      }
    }
    _appendElement(e3, t2) {
      const s2 = this.treeAdapter.createElement(e3.tagName, t2, e3.attrs);
      this._attachElementToTree(s2, e3.location);
    }
    _insertElement(e3, t2) {
      const s2 = this.treeAdapter.createElement(e3.tagName, t2, e3.attrs);
      this._attachElementToTree(s2, e3.location), this.openElements.push(s2, e3.tagID);
    }
    _insertFakeElement(e3, t2) {
      const s2 = this.treeAdapter.createElement(e3, u.HTML, []);
      this._attachElementToTree(s2, null), this.openElements.push(s2, t2);
    }
    _insertTemplate(e3) {
      const t2 = this.treeAdapter.createElement(e3.tagName, u.HTML, e3.attrs), s2 = this.treeAdapter.createDocumentFragment();
      this.treeAdapter.setTemplateContent(t2, s2), this._attachElementToTree(t2, e3.location), this.openElements.push(t2, e3.tagID), this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(s2, null);
    }
    _insertFakeRootElement() {
      const e3 = this.treeAdapter.createElement(C.HTML, u.HTML, []);
      this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(e3, null), this.treeAdapter.appendChild(this.openElements.current, e3), this.openElements.push(e3, S.HTML);
    }
    _appendCommentNode(e3, t2) {
      const s2 = this.treeAdapter.createCommentNode(e3.data);
      this.treeAdapter.appendChild(t2, s2), this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(s2, e3.location);
    }
    _insertCharacters(e3) {
      let t2, s2;
      if (this._shouldFosterParentOnInsertion() ? ({ parent: t2, beforeElement: s2 } = this._findFosterParentingLocation(), s2 ? this.treeAdapter.insertTextBefore(t2, e3.chars, s2) : this.treeAdapter.insertText(t2, e3.chars)) : (t2 = this.openElements.currentTmplContentOrNode, this.treeAdapter.insertText(t2, e3.chars)), !e3.location)
        return;
      const a2 = this.treeAdapter.getChildNodes(t2), r2 = s2 ? a2.lastIndexOf(s2) : a2.length, n2 = a2[r2 - 1];
      if (this.treeAdapter.getNodeSourceCodeLocation(n2)) {
        const { endLine: t3, endCol: s3, endOffset: a3 } = e3.location;
        this.treeAdapter.updateNodeSourceCodeLocation(n2, { endLine: t3, endCol: s3, endOffset: a3 });
      } else
        this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(n2, e3.location);
    }
    _adoptNodes(e3, t2) {
      for (let s2 = this.treeAdapter.getFirstChild(e3); s2; s2 = this.treeAdapter.getFirstChild(e3))
        this.treeAdapter.detachNode(s2), this.treeAdapter.appendChild(t2, s2);
    }
    _setEndLocation(e3, t2) {
      if (this.treeAdapter.getNodeSourceCodeLocation(e3) && t2.location) {
        const s2 = t2.location, a2 = this.treeAdapter.getTagName(e3), r2 = t2.type === h2.END_TAG && a2 === t2.tagName ? { endTag: { ...s2 }, endLine: s2.endLine, endCol: s2.endCol, endOffset: s2.endOffset } : { endLine: s2.startLine, endCol: s2.startCol, endOffset: s2.startOffset };
        this.treeAdapter.updateNodeSourceCodeLocation(e3, r2);
      }
    }
    shouldProcessStartTagTokenInForeignContent(e3) {
      if (!this.currentNotInHTML)
        return false;
      let t2, s2;
      return 0 === this.openElements.stackTop && this.fragmentContext ? (t2 = this.fragmentContext, s2 = this.fragmentContextID) : { current: t2, currentTagId: s2 } = this.openElements, (e3.tagID !== S.SVG || this.treeAdapter.getTagName(t2) !== C.ANNOTATION_XML || this.treeAdapter.getNamespaceURI(t2) !== u.MATHML) && (this.tokenizer.inForeignNode || (e3.tagID === S.MGLYPH || e3.tagID === S.MALIGNMARK) && !this._isIntegrationPoint(s2, t2, u.HTML));
    }
    _processToken(e3) {
      switch (e3.type) {
        case h2.CHARACTER:
          this.onCharacter(e3);
          break;
        case h2.NULL_CHARACTER:
          this.onNullCharacter(e3);
          break;
        case h2.COMMENT:
          this.onComment(e3);
          break;
        case h2.DOCTYPE:
          this.onDoctype(e3);
          break;
        case h2.START_TAG:
          this._processStartTag(e3);
          break;
        case h2.END_TAG:
          this.onEndTag(e3);
          break;
        case h2.EOF:
          this.onEof(e3);
          break;
        case h2.WHITESPACE_CHARACTER:
          this.onWhitespaceCharacter(e3);
      }
    }
    _isIntegrationPoint(e3, t2, s2) {
      return function(e4, t3, s3, a2) {
        return (!a2 || a2 === u.HTML) && function(e5, t4, s4) {
          if (t4 === u.MATHML && e5 === S.ANNOTATION_XML) {
            for (let e6 = 0; e6 < s4.length; e6++)
              if (s4[e6].name === N.ENCODING) {
                const t5 = s4[e6].value.toLowerCase();
                return t5 === Ee || t5 === Te;
              }
          }
          return t4 === u.SVG && (e5 === S.FOREIGN_OBJECT || e5 === S.DESC || e5 === S.TITLE);
        }(e4, t3, s3) || (!a2 || a2 === u.MATHML) && function(e5, t4) {
          return t4 === u.MATHML && (e5 === S.MI || e5 === S.MO || e5 === S.MN || e5 === S.MS || e5 === S.MTEXT);
        }(e4, t3);
      }(e3, this.treeAdapter.getNamespaceURI(t2), this.treeAdapter.getAttrList(t2), s2);
    }
    _reconstructActiveFormattingElements() {
      const e3 = this.activeFormattingElements.entries.length;
      if (e3) {
        const t2 = this.activeFormattingElements.entries.findIndex((e4) => e4.type === J.Marker || this.openElements.contains(e4.element));
        for (let s2 = t2 < 0 ? e3 - 1 : t2 - 1; s2 >= 0; s2--) {
          const e4 = this.activeFormattingElements.entries[s2];
          this._insertElement(e4.token, this.treeAdapter.getNamespaceURI(e4.element)), e4.element = this.openElements.current;
        }
      }
    }
    _closeTableCell() {
      this.openElements.generateImpliedEndTags(), this.openElements.popUntilTableCellPopped(), this.activeFormattingElements.clearToLastMarker(), this.insertionMode = De.IN_ROW;
    }
    _closePElement() {
      this.openElements.generateImpliedEndTagsWithExclusion(S.P), this.openElements.popUntilTagNamePopped(S.P);
    }
    _resetInsertionMode() {
      for (let e3 = this.openElements.stackTop; e3 >= 0; e3--)
        switch (0 === e3 && this.fragmentContext ? this.fragmentContextID : this.openElements.tagIDs[e3]) {
          case S.TR:
            return void (this.insertionMode = De.IN_ROW);
          case S.TBODY:
          case S.THEAD:
          case S.TFOOT:
            return void (this.insertionMode = De.IN_TABLE_BODY);
          case S.CAPTION:
            return void (this.insertionMode = De.IN_CAPTION);
          case S.COLGROUP:
            return void (this.insertionMode = De.IN_COLUMN_GROUP);
          case S.TABLE:
            return void (this.insertionMode = De.IN_TABLE);
          case S.BODY:
            return void (this.insertionMode = De.IN_BODY);
          case S.FRAMESET:
            return void (this.insertionMode = De.IN_FRAMESET);
          case S.SELECT:
            return void this._resetInsertionModeForSelect(e3);
          case S.TEMPLATE:
            return void (this.insertionMode = this.tmplInsertionModeStack[0]);
          case S.HTML:
            return void (this.insertionMode = this.headElement ? De.AFTER_HEAD : De.BEFORE_HEAD);
          case S.TD:
          case S.TH:
            if (e3 > 0)
              return void (this.insertionMode = De.IN_CELL);
            break;
          case S.HEAD:
            if (e3 > 0)
              return void (this.insertionMode = De.IN_HEAD);
        }
      this.insertionMode = De.IN_BODY;
    }
    _resetInsertionModeForSelect(e3) {
      if (e3 > 0)
        for (let t2 = e3 - 1; t2 > 0; t2--) {
          const e4 = this.openElements.tagIDs[t2];
          if (e4 === S.TEMPLATE)
            break;
          if (e4 === S.TABLE)
            return void (this.insertionMode = De.IN_SELECT_IN_TABLE);
        }
      this.insertionMode = De.IN_SELECT;
    }
    _isElementCausesFosterParenting(e3) {
      return Oe.has(e3);
    }
    _shouldFosterParentOnInsertion() {
      return this.fosterParentingEnabled && this._isElementCausesFosterParenting(this.openElements.currentTagId);
    }
    _findFosterParentingLocation() {
      for (let e3 = this.openElements.stackTop; e3 >= 0; e3--) {
        const t2 = this.openElements.items[e3];
        switch (this.openElements.tagIDs[e3]) {
          case S.TEMPLATE:
            if (this.treeAdapter.getNamespaceURI(t2) === u.HTML)
              return { parent: this.treeAdapter.getTemplateContent(t2), beforeElement: null };
            break;
          case S.TABLE: {
            const s2 = this.treeAdapter.getParentNode(t2);
            return s2 ? { parent: s2, beforeElement: t2 } : { parent: this.openElements.items[e3 - 1], beforeElement: null };
          }
        }
      }
      return { parent: this.openElements.items[0], beforeElement: null };
    }
    _fosterParentElement(e3) {
      const t2 = this._findFosterParentingLocation();
      t2.beforeElement ? this.treeAdapter.insertBefore(t2.parent, e3, t2.beforeElement) : this.treeAdapter.appendChild(t2.parent, e3);
    }
    _isSpecialElement(e3, t2) {
      const s2 = this.treeAdapter.getNamespaceURI(e3);
      return L[s2].has(t2);
    }
    onCharacter(e3) {
      if (this.skipNextNewLine = false, this.tokenizer.inForeignNode)
        !function(e4, t2) {
          e4._insertCharacters(t2), e4.framesetOk = false;
        }(this, e3);
      else
        switch (this.insertionMode) {
          case De.INITIAL:
            ye(this, e3);
            break;
          case De.BEFORE_HTML:
            Ge(this, e3);
            break;
          case De.BEFORE_HEAD:
            we(this, e3);
            break;
          case De.IN_HEAD:
            ve(this, e3);
            break;
          case De.IN_HEAD_NO_SCRIPT:
            Qe(this, e3);
            break;
          case De.AFTER_HEAD:
            qe(this, e3);
            break;
          case De.IN_BODY:
          case De.IN_CAPTION:
          case De.IN_CELL:
          case De.IN_TEMPLATE:
            Ke(this, e3);
            break;
          case De.TEXT:
          case De.IN_SELECT:
          case De.IN_SELECT_IN_TABLE:
            this._insertCharacters(e3);
            break;
          case De.IN_TABLE:
          case De.IN_TABLE_BODY:
          case De.IN_ROW:
            st(this, e3);
            break;
          case De.IN_TABLE_TEXT:
            ot(this, e3);
            break;
          case De.IN_COLUMN_GROUP:
            ht(this, e3);
            break;
          case De.AFTER_BODY:
            It(this, e3);
            break;
          case De.AFTER_AFTER_BODY:
            Ct(this, e3);
        }
    }
    onNullCharacter(e3) {
      if (this.skipNextNewLine = false, this.tokenizer.inForeignNode)
        !function(e4, t2) {
          t2.chars = s, e4._insertCharacters(t2);
        }(this, e3);
      else
        switch (this.insertionMode) {
          case De.INITIAL:
            ye(this, e3);
            break;
          case De.BEFORE_HTML:
            Ge(this, e3);
            break;
          case De.BEFORE_HEAD:
            we(this, e3);
            break;
          case De.IN_HEAD:
            ve(this, e3);
            break;
          case De.IN_HEAD_NO_SCRIPT:
            Qe(this, e3);
            break;
          case De.AFTER_HEAD:
            qe(this, e3);
            break;
          case De.TEXT:
            this._insertCharacters(e3);
            break;
          case De.IN_TABLE:
          case De.IN_TABLE_BODY:
          case De.IN_ROW:
            st(this, e3);
            break;
          case De.IN_COLUMN_GROUP:
            ht(this, e3);
            break;
          case De.AFTER_BODY:
            It(this, e3);
            break;
          case De.AFTER_AFTER_BODY:
            Ct(this, e3);
        }
    }
    onComment(e3) {
      if (this.skipNextNewLine = false, this.currentNotInHTML)
        Fe(this, e3);
      else
        switch (this.insertionMode) {
          case De.INITIAL:
          case De.BEFORE_HTML:
          case De.BEFORE_HEAD:
          case De.IN_HEAD:
          case De.IN_HEAD_NO_SCRIPT:
          case De.AFTER_HEAD:
          case De.IN_BODY:
          case De.IN_TABLE:
          case De.IN_CAPTION:
          case De.IN_COLUMN_GROUP:
          case De.IN_TABLE_BODY:
          case De.IN_ROW:
          case De.IN_CELL:
          case De.IN_SELECT:
          case De.IN_SELECT_IN_TABLE:
          case De.IN_TEMPLATE:
          case De.IN_FRAMESET:
          case De.AFTER_FRAMESET:
            Fe(this, e3);
            break;
          case De.IN_TABLE_TEXT:
            ct(this, e3);
            break;
          case De.AFTER_BODY:
            !function(e4, t2) {
              e4._appendCommentNode(t2, e4.openElements.items[0]);
            }(this, e3);
            break;
          case De.AFTER_AFTER_BODY:
          case De.AFTER_AFTER_FRAMESET:
            !function(e4, t2) {
              e4._appendCommentNode(t2, e4.document);
            }(this, e3);
        }
    }
    onDoctype(e3) {
      switch (this.skipNextNewLine = false, this.insertionMode) {
        case De.INITIAL:
          !function(e4, t2) {
            e4._setDocumentType(t2);
            const s2 = t2.forceQuirks ? I.QUIRKS : function(e5) {
              if (e5.name !== se)
                return I.QUIRKS;
              const { systemId: t3 } = e5;
              if (t3 && "http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd" === t3.toLowerCase())
                return I.QUIRKS;
              let { publicId: s3 } = e5;
              if (null !== s3) {
                if (s3 = s3.toLowerCase(), ne.has(s3))
                  return I.QUIRKS;
                let e6 = null === t3 ? re : ae;
                if (ce(s3, e6))
                  return I.QUIRKS;
                if (e6 = null === t3 ? ie : oe, ce(s3, e6))
                  return I.LIMITED_QUIRKS;
              }
              return I.NO_QUIRKS;
            }(t2);
            (function(e5) {
              return e5.name === se && null === e5.publicId && (null === e5.systemId || "about:legacy-compat" === e5.systemId);
            })(t2) || e4._err(t2, T.nonConformingDoctype), e4.treeAdapter.setDocumentMode(e4.document, s2), e4.insertionMode = De.BEFORE_HTML;
          }(this, e3);
          break;
        case De.BEFORE_HEAD:
        case De.IN_HEAD:
        case De.IN_HEAD_NO_SCRIPT:
        case De.AFTER_HEAD:
          this._err(e3, T.misplacedDoctype);
          break;
        case De.IN_TABLE_TEXT:
          ct(this, e3);
      }
    }
    onStartTag(e3) {
      this.skipNextNewLine = false, this.currentToken = e3, this._processStartTag(e3), e3.selfClosing && !e3.ackSelfClosing && this._err(e3, T.nonVoidHtmlElementStartTagWithTrailingSolidus);
    }
    _processStartTag(e3) {
      this.shouldProcessStartTagTokenInForeignContent(e3) ? function(e4, t2) {
        if (function(e5) {
          const t3 = e5.tagID;
          return t3 === S.FONT && e5.attrs.some(({ name: e6 }) => e6 === N.COLOR || e6 === N.SIZE || e6 === N.FACE) || de.has(t3);
        }(t2))
          St(e4), e4._startTagOutsideForeignContent(t2);
        else {
          const s2 = e4._getAdjustedCurrentElement(), a2 = e4.treeAdapter.getNamespaceURI(s2);
          a2 === u.MATHML ? pe(t2) : a2 === u.SVG && (function(e5) {
            const t3 = me.get(e5.tagName);
            null != t3 && (e5.tagName = t3, e5.tagID = O(e5.tagName));
          }(t2), ue(t2)), Ne(t2), t2.selfClosing ? e4._appendElement(t2, a2) : e4._insertElement(t2, a2), t2.ackSelfClosing = true;
        }
      }(this, e3) : this._startTagOutsideForeignContent(e3);
    }
    _startTagOutsideForeignContent(e3) {
      switch (this.insertionMode) {
        case De.INITIAL:
          ye(this, e3);
          break;
        case De.BEFORE_HTML:
          !function(e4, t2) {
            t2.tagID === S.HTML ? (e4._insertElement(t2, u.HTML), e4.insertionMode = De.BEFORE_HEAD) : Ge(e4, t2);
          }(this, e3);
          break;
        case De.BEFORE_HEAD:
          !function(e4, t2) {
            switch (t2.tagID) {
              case S.HTML:
                Ze(e4, t2);
                break;
              case S.HEAD:
                e4._insertElement(t2, u.HTML), e4.headElement = e4.openElements.current, e4.insertionMode = De.IN_HEAD;
                break;
              default:
                we(e4, t2);
            }
          }(this, e3);
          break;
        case De.IN_HEAD:
          xe(this, e3);
          break;
        case De.IN_HEAD_NO_SCRIPT:
          !function(e4, t2) {
            switch (t2.tagID) {
              case S.HTML:
                Ze(e4, t2);
                break;
              case S.BASEFONT:
              case S.BGSOUND:
              case S.HEAD:
              case S.LINK:
              case S.META:
              case S.NOFRAMES:
              case S.STYLE:
                xe(e4, t2);
                break;
              case S.NOSCRIPT:
                e4._err(t2, T.nestedNoscriptInHead);
                break;
              default:
                Qe(e4, t2);
            }
          }(this, e3);
          break;
        case De.AFTER_HEAD:
          !function(e4, t2) {
            switch (t2.tagID) {
              case S.HTML:
                Ze(e4, t2);
                break;
              case S.BODY:
                e4._insertElement(t2, u.HTML), e4.framesetOk = false, e4.insertionMode = De.IN_BODY;
                break;
              case S.FRAMESET:
                e4._insertElement(t2, u.HTML), e4.insertionMode = De.IN_FRAMESET;
                break;
              case S.BASE:
              case S.BASEFONT:
              case S.BGSOUND:
              case S.LINK:
              case S.META:
              case S.NOFRAMES:
              case S.SCRIPT:
              case S.STYLE:
              case S.TEMPLATE:
              case S.TITLE:
                e4._err(t2, T.abandonedHeadElementChild), e4.openElements.push(e4.headElement, S.HEAD), xe(e4, t2), e4.openElements.remove(e4.headElement);
                break;
              case S.HEAD:
                e4._err(t2, T.misplacedStartTagForHeadElement);
                break;
              default:
                qe(e4, t2);
            }
          }(this, e3);
          break;
        case De.IN_BODY:
          Ze(this, e3);
          break;
        case De.IN_TABLE:
          at(this, e3);
          break;
        case De.IN_TABLE_TEXT:
          ct(this, e3);
          break;
        case De.IN_CAPTION:
          !function(e4, t2) {
            const s2 = t2.tagID;
            Et.has(s2) ? e4.openElements.hasInTableScope(S.CAPTION) && (e4.openElements.generateImpliedEndTags(), e4.openElements.popUntilTagNamePopped(S.CAPTION), e4.activeFormattingElements.clearToLastMarker(), e4.insertionMode = De.IN_TABLE, at(e4, t2)) : Ze(e4, t2);
          }(this, e3);
          break;
        case De.IN_COLUMN_GROUP:
          Tt(this, e3);
          break;
        case De.IN_TABLE_BODY:
          _t(this, e3);
          break;
        case De.IN_ROW:
          lt(this, e3);
          break;
        case De.IN_CELL:
          !function(e4, t2) {
            const s2 = t2.tagID;
            Et.has(s2) ? (e4.openElements.hasInTableScope(S.TD) || e4.openElements.hasInTableScope(S.TH)) && (e4._closeTableCell(), lt(e4, t2)) : Ze(e4, t2);
          }(this, e3);
          break;
        case De.IN_SELECT:
          dt(this, e3);
          break;
        case De.IN_SELECT_IN_TABLE:
          !function(e4, t2) {
            const s2 = t2.tagID;
            s2 === S.CAPTION || s2 === S.TABLE || s2 === S.TBODY || s2 === S.TFOOT || s2 === S.THEAD || s2 === S.TR || s2 === S.TD || s2 === S.TH ? (e4.openElements.popUntilTagNamePopped(S.SELECT), e4._resetInsertionMode(), e4._processStartTag(t2)) : dt(e4, t2);
          }(this, e3);
          break;
        case De.IN_TEMPLATE:
          !function(e4, t2) {
            switch (t2.tagID) {
              case S.BASE:
              case S.BASEFONT:
              case S.BGSOUND:
              case S.LINK:
              case S.META:
              case S.NOFRAMES:
              case S.SCRIPT:
              case S.STYLE:
              case S.TEMPLATE:
              case S.TITLE:
                xe(e4, t2);
                break;
              case S.CAPTION:
              case S.COLGROUP:
              case S.TBODY:
              case S.TFOOT:
              case S.THEAD:
                e4.tmplInsertionModeStack[0] = De.IN_TABLE, e4.insertionMode = De.IN_TABLE, at(e4, t2);
                break;
              case S.COL:
                e4.tmplInsertionModeStack[0] = De.IN_COLUMN_GROUP, e4.insertionMode = De.IN_COLUMN_GROUP, Tt(e4, t2);
                break;
              case S.TR:
                e4.tmplInsertionModeStack[0] = De.IN_TABLE_BODY, e4.insertionMode = De.IN_TABLE_BODY, _t(e4, t2);
                break;
              case S.TD:
              case S.TH:
                e4.tmplInsertionModeStack[0] = De.IN_ROW, e4.insertionMode = De.IN_ROW, lt(e4, t2);
                break;
              default:
                e4.tmplInsertionModeStack[0] = De.IN_BODY, e4.insertionMode = De.IN_BODY, Ze(e4, t2);
            }
          }(this, e3);
          break;
        case De.AFTER_BODY:
          !function(e4, t2) {
            t2.tagID === S.HTML ? Ze(e4, t2) : It(e4, t2);
          }(this, e3);
          break;
        case De.IN_FRAMESET:
          !function(e4, t2) {
            switch (t2.tagID) {
              case S.HTML:
                Ze(e4, t2);
                break;
              case S.FRAMESET:
                e4._insertElement(t2, u.HTML);
                break;
              case S.FRAME:
                e4._appendElement(t2, u.HTML), t2.ackSelfClosing = true;
                break;
              case S.NOFRAMES:
                xe(e4, t2);
            }
          }(this, e3);
          break;
        case De.AFTER_FRAMESET:
          !function(e4, t2) {
            switch (t2.tagID) {
              case S.HTML:
                Ze(e4, t2);
                break;
              case S.NOFRAMES:
                xe(e4, t2);
            }
          }(this, e3);
          break;
        case De.AFTER_AFTER_BODY:
          !function(e4, t2) {
            t2.tagID === S.HTML ? Ze(e4, t2) : Ct(e4, t2);
          }(this, e3);
          break;
        case De.AFTER_AFTER_FRAMESET:
          !function(e4, t2) {
            switch (t2.tagID) {
              case S.HTML:
                Ze(e4, t2);
                break;
              case S.NOFRAMES:
                xe(e4, t2);
            }
          }(this, e3);
      }
    }
    onEndTag(e3) {
      this.skipNextNewLine = false, this.currentToken = e3, this.currentNotInHTML ? function(e4, t2) {
        if (t2.tagID === S.P || t2.tagID === S.BR)
          return St(e4), void e4._endTagOutsideForeignContent(t2);
        for (let s2 = e4.openElements.stackTop; s2 > 0; s2--) {
          const a2 = e4.openElements.items[s2];
          if (e4.treeAdapter.getNamespaceURI(a2) === u.HTML) {
            e4._endTagOutsideForeignContent(t2);
            break;
          }
          const r2 = e4.treeAdapter.getTagName(a2);
          if (r2.toLowerCase() === t2.tagName) {
            t2.tagName = r2, e4.openElements.shortenToLength(s2);
            break;
          }
        }
      }(this, e3) : this._endTagOutsideForeignContent(e3);
    }
    _endTagOutsideForeignContent(e3) {
      switch (this.insertionMode) {
        case De.INITIAL:
          ye(this, e3);
          break;
        case De.BEFORE_HTML:
          !function(e4, t2) {
            const s2 = t2.tagID;
            s2 !== S.HTML && s2 !== S.HEAD && s2 !== S.BODY && s2 !== S.BR || Ge(e4, t2);
          }(this, e3);
          break;
        case De.BEFORE_HEAD:
          !function(e4, t2) {
            const s2 = t2.tagID;
            s2 === S.HEAD || s2 === S.BODY || s2 === S.HTML || s2 === S.BR ? we(e4, t2) : e4._err(t2, T.endTagWithoutMatchingOpenElement);
          }(this, e3);
          break;
        case De.IN_HEAD:
          !function(e4, t2) {
            switch (t2.tagID) {
              case S.HEAD:
                e4.openElements.pop(), e4.insertionMode = De.AFTER_HEAD;
                break;
              case S.BODY:
              case S.BR:
              case S.HTML:
                ve(e4, t2);
                break;
              case S.TEMPLATE:
                Ye(e4, t2);
                break;
              default:
                e4._err(t2, T.endTagWithoutMatchingOpenElement);
            }
          }(this, e3);
          break;
        case De.IN_HEAD_NO_SCRIPT:
          !function(e4, t2) {
            switch (t2.tagID) {
              case S.NOSCRIPT:
                e4.openElements.pop(), e4.insertionMode = De.IN_HEAD;
                break;
              case S.BR:
                Qe(e4, t2);
                break;
              default:
                e4._err(t2, T.endTagWithoutMatchingOpenElement);
            }
          }(this, e3);
          break;
        case De.AFTER_HEAD:
          !function(e4, t2) {
            switch (t2.tagID) {
              case S.BODY:
              case S.HTML:
              case S.BR:
                qe(e4, t2);
                break;
              case S.TEMPLATE:
                Ye(e4, t2);
                break;
              default:
                e4._err(t2, T.endTagWithoutMatchingOpenElement);
            }
          }(this, e3);
          break;
        case De.IN_BODY:
          et(this, e3);
          break;
        case De.TEXT:
          !function(e4, t2) {
            var s2;
            t2.tagID === S.SCRIPT && (null === (s2 = e4.scriptHandler) || void 0 === s2 || s2.call(e4, e4.openElements.current)), e4.openElements.pop(), e4.insertionMode = e4.originalInsertionMode;
          }(this, e3);
          break;
        case De.IN_TABLE:
          rt(this, e3);
          break;
        case De.IN_TABLE_TEXT:
          ct(this, e3);
          break;
        case De.IN_CAPTION:
          !function(e4, t2) {
            const s2 = t2.tagID;
            switch (s2) {
              case S.CAPTION:
              case S.TABLE:
                e4.openElements.hasInTableScope(S.CAPTION) && (e4.openElements.generateImpliedEndTags(), e4.openElements.popUntilTagNamePopped(S.CAPTION), e4.activeFormattingElements.clearToLastMarker(), e4.insertionMode = De.IN_TABLE, s2 === S.TABLE && rt(e4, t2));
                break;
              case S.BODY:
              case S.COL:
              case S.COLGROUP:
              case S.HTML:
              case S.TBODY:
              case S.TD:
              case S.TFOOT:
              case S.TH:
              case S.THEAD:
              case S.TR:
                break;
              default:
                et(e4, t2);
            }
          }(this, e3);
          break;
        case De.IN_COLUMN_GROUP:
          !function(e4, t2) {
            switch (t2.tagID) {
              case S.COLGROUP:
                e4.openElements.currentTagId === S.COLGROUP && (e4.openElements.pop(), e4.insertionMode = De.IN_TABLE);
                break;
              case S.TEMPLATE:
                Ye(e4, t2);
                break;
              case S.COL:
                break;
              default:
                ht(e4, t2);
            }
          }(this, e3);
          break;
        case De.IN_TABLE_BODY:
          At(this, e3);
          break;
        case De.IN_ROW:
          mt(this, e3);
          break;
        case De.IN_CELL:
          !function(e4, t2) {
            const s2 = t2.tagID;
            switch (s2) {
              case S.TD:
              case S.TH:
                e4.openElements.hasInTableScope(s2) && (e4.openElements.generateImpliedEndTags(), e4.openElements.popUntilTagNamePopped(s2), e4.activeFormattingElements.clearToLastMarker(), e4.insertionMode = De.IN_ROW);
                break;
              case S.TABLE:
              case S.TBODY:
              case S.TFOOT:
              case S.THEAD:
              case S.TR:
                e4.openElements.hasInTableScope(s2) && (e4._closeTableCell(), mt(e4, t2));
                break;
              case S.BODY:
              case S.CAPTION:
              case S.COL:
              case S.COLGROUP:
              case S.HTML:
                break;
              default:
                et(e4, t2);
            }
          }(this, e3);
          break;
        case De.IN_SELECT:
          pt(this, e3);
          break;
        case De.IN_SELECT_IN_TABLE:
          !function(e4, t2) {
            const s2 = t2.tagID;
            s2 === S.CAPTION || s2 === S.TABLE || s2 === S.TBODY || s2 === S.TFOOT || s2 === S.THEAD || s2 === S.TR || s2 === S.TD || s2 === S.TH ? e4.openElements.hasInTableScope(s2) && (e4.openElements.popUntilTagNamePopped(S.SELECT), e4._resetInsertionMode(), e4.onEndTag(t2)) : pt(e4, t2);
          }(this, e3);
          break;
        case De.IN_TEMPLATE:
          !function(e4, t2) {
            t2.tagID === S.TEMPLATE && Ye(e4, t2);
          }(this, e3);
          break;
        case De.AFTER_BODY:
          Nt(this, e3);
          break;
        case De.IN_FRAMESET:
          !function(e4, t2) {
            t2.tagID !== S.FRAMESET || e4.openElements.isRootHtmlElementCurrent() || (e4.openElements.pop(), e4.fragmentContext || e4.openElements.currentTagId === S.FRAMESET || (e4.insertionMode = De.AFTER_FRAMESET));
          }(this, e3);
          break;
        case De.AFTER_FRAMESET:
          !function(e4, t2) {
            t2.tagID === S.HTML && (e4.insertionMode = De.AFTER_AFTER_FRAMESET);
          }(this, e3);
          break;
        case De.AFTER_AFTER_BODY:
          Ct(this, e3);
      }
    }
    onEof(e3) {
      switch (this.insertionMode) {
        case De.INITIAL:
          ye(this, e3);
          break;
        case De.BEFORE_HTML:
          Ge(this, e3);
          break;
        case De.BEFORE_HEAD:
          we(this, e3);
          break;
        case De.IN_HEAD:
          ve(this, e3);
          break;
        case De.IN_HEAD_NO_SCRIPT:
          Qe(this, e3);
          break;
        case De.AFTER_HEAD:
          qe(this, e3);
          break;
        case De.IN_BODY:
        case De.IN_TABLE:
        case De.IN_CAPTION:
        case De.IN_COLUMN_GROUP:
        case De.IN_TABLE_BODY:
        case De.IN_ROW:
        case De.IN_CELL:
        case De.IN_SELECT:
        case De.IN_SELECT_IN_TABLE:
          tt(this, e3);
          break;
        case De.TEXT:
          !function(e4, t2) {
            e4._err(t2, T.eofInElementThatCanContainOnlyText), e4.openElements.pop(), e4.insertionMode = e4.originalInsertionMode, e4.onEof(t2);
          }(this, e3);
          break;
        case De.IN_TABLE_TEXT:
          ct(this, e3);
          break;
        case De.IN_TEMPLATE:
          ut(this, e3);
          break;
        case De.AFTER_BODY:
        case De.IN_FRAMESET:
        case De.AFTER_FRAMESET:
        case De.AFTER_AFTER_BODY:
        case De.AFTER_AFTER_FRAMESET:
          Ue(this, e3);
      }
    }
    onWhitespaceCharacter(e3) {
      if (this.skipNextNewLine && (this.skipNextNewLine = false, e3.chars.charCodeAt(0) === a.LINE_FEED)) {
        if (1 === e3.chars.length)
          return;
        e3.chars = e3.chars.substr(1);
      }
      if (this.tokenizer.inForeignNode)
        this._insertCharacters(e3);
      else
        switch (this.insertionMode) {
          case De.IN_HEAD:
          case De.IN_HEAD_NO_SCRIPT:
          case De.AFTER_HEAD:
          case De.TEXT:
          case De.IN_COLUMN_GROUP:
          case De.IN_SELECT:
          case De.IN_SELECT_IN_TABLE:
          case De.IN_FRAMESET:
          case De.AFTER_FRAMESET:
            this._insertCharacters(e3);
            break;
          case De.IN_BODY:
          case De.IN_CAPTION:
          case De.IN_CELL:
          case De.IN_TEMPLATE:
          case De.AFTER_BODY:
          case De.AFTER_AFTER_BODY:
          case De.AFTER_AFTER_FRAMESET:
            Xe(this, e3);
            break;
          case De.IN_TABLE:
          case De.IN_TABLE_BODY:
          case De.IN_ROW:
            st(this, e3);
            break;
          case De.IN_TABLE_TEXT:
            it(this, e3);
        }
    }
  }
  function Me(e3, t2) {
    let s2 = e3.activeFormattingElements.getElementEntryInScopeWithTagName(t2.tagName);
    return s2 ? e3.openElements.contains(s2.element) ? e3.openElements.hasInScope(t2.tagID) || (s2 = null) : (e3.activeFormattingElements.removeEntry(s2), s2 = null) : $e(e3, t2), s2;
  }
  function ge(e3, t2) {
    let s2 = null, a2 = e3.openElements.stackTop;
    for (; a2 >= 0; a2--) {
      const r2 = e3.openElements.items[a2];
      if (r2 === t2.element)
        break;
      e3._isSpecialElement(r2, e3.openElements.tagIDs[a2]) && (s2 = r2);
    }
    return s2 || (e3.openElements.shortenToLength(a2 < 0 ? 0 : a2), e3.activeFormattingElements.removeEntry(t2)), s2;
  }
  function Pe(e3, t2, s2) {
    let a2 = t2, r2 = e3.openElements.getCommonAncestor(t2);
    for (let n2 = 0, i22 = r2; i22 !== s2; n2++, i22 = r2) {
      r2 = e3.openElements.getCommonAncestor(i22);
      const s3 = e3.activeFormattingElements.getElementEntry(i22), o2 = s3 && n2 >= Se;
      !s3 || o2 ? (o2 && e3.activeFormattingElements.removeEntry(s3), e3.openElements.remove(i22)) : (i22 = ke(e3, s3), a2 === t2 && (e3.activeFormattingElements.bookmark = s3), e3.treeAdapter.detachNode(a2), e3.treeAdapter.appendChild(i22, a2), a2 = i22);
    }
    return a2;
  }
  function ke(e3, t2) {
    const s2 = e3.treeAdapter.getNamespaceURI(t2.element), a2 = e3.treeAdapter.createElement(t2.token.tagName, s2, t2.token.attrs);
    return e3.openElements.replace(t2.element, a2), t2.element = a2, a2;
  }
  function be(e3, t2, s2) {
    const a2 = O(e3.treeAdapter.getTagName(t2));
    if (e3._isElementCausesFosterParenting(a2))
      e3._fosterParentElement(s2);
    else {
      const r2 = e3.treeAdapter.getNamespaceURI(t2);
      a2 === S.TEMPLATE && r2 === u.HTML && (t2 = e3.treeAdapter.getTemplateContent(t2)), e3.treeAdapter.appendChild(t2, s2);
    }
  }
  function Be(e3, t2, s2) {
    const a2 = e3.treeAdapter.getNamespaceURI(s2.element), { token: r2 } = s2, n2 = e3.treeAdapter.createElement(r2.tagName, a2, r2.attrs);
    e3._adoptNodes(t2, n2), e3.treeAdapter.appendChild(t2, n2), e3.activeFormattingElements.insertElementAfterBookmark(n2, r2), e3.activeFormattingElements.removeEntry(s2), e3.openElements.remove(s2.element), e3.openElements.insertAfter(t2, n2, r2.tagID);
  }
  function He(e3, t2) {
    for (let s2 = 0; s2 < Ce; s2++) {
      const s3 = Me(e3, t2);
      if (!s3)
        break;
      const a2 = ge(e3, s3);
      if (!a2)
        break;
      e3.activeFormattingElements.bookmark = s3;
      const r2 = Pe(e3, a2, s3.element), n2 = e3.openElements.getCommonAncestor(s3.element);
      e3.treeAdapter.detachNode(r2), n2 && be(e3, n2, r2), Be(e3, a2, s3);
    }
  }
  function Fe(e3, t2) {
    e3._appendCommentNode(t2, e3.openElements.currentTmplContentOrNode);
  }
  function Ue(e3, t2) {
    if (e3.stopped = true, t2.location) {
      const s2 = e3.fragmentContext ? 0 : 2;
      for (let a2 = e3.openElements.stackTop; a2 >= s2; a2--)
        e3._setEndLocation(e3.openElements.items[a2], t2);
      if (!e3.fragmentContext && e3.openElements.stackTop >= 0) {
        const s3 = e3.openElements.items[0], a2 = e3.treeAdapter.getNodeSourceCodeLocation(s3);
        if (a2 && !a2.endTag && (e3._setEndLocation(s3, t2), e3.openElements.stackTop >= 1)) {
          const s4 = e3.openElements.items[1], a3 = e3.treeAdapter.getNodeSourceCodeLocation(s4);
          a3 && !a3.endTag && e3._setEndLocation(s4, t2);
        }
      }
    }
  }
  function ye(e3, t2) {
    e3._err(t2, T.missingDoctype, true), e3.treeAdapter.setDocumentMode(e3.document, I.QUIRKS), e3.insertionMode = De.BEFORE_HTML, e3._processToken(t2);
  }
  function Ge(e3, t2) {
    e3._insertFakeRootElement(), e3.insertionMode = De.BEFORE_HEAD, e3._processToken(t2);
  }
  function we(e3, t2) {
    e3._insertFakeElement(C.HEAD, S.HEAD), e3.headElement = e3.openElements.current, e3.insertionMode = De.IN_HEAD, e3._processToken(t2);
  }
  function xe(e3, t2) {
    switch (t2.tagID) {
      case S.HTML:
        Ze(e3, t2);
        break;
      case S.BASE:
      case S.BASEFONT:
      case S.BGSOUND:
      case S.LINK:
      case S.META:
        e3._appendElement(t2, u.HTML), t2.ackSelfClosing = true;
        break;
      case S.TITLE:
        e3._switchToTextParsing(t2, k.RCDATA);
        break;
      case S.NOSCRIPT:
        e3.options.scriptingEnabled ? e3._switchToTextParsing(t2, k.RAWTEXT) : (e3._insertElement(t2, u.HTML), e3.insertionMode = De.IN_HEAD_NO_SCRIPT);
        break;
      case S.NOFRAMES:
      case S.STYLE:
        e3._switchToTextParsing(t2, k.RAWTEXT);
        break;
      case S.SCRIPT:
        e3._switchToTextParsing(t2, k.SCRIPT_DATA);
        break;
      case S.TEMPLATE:
        e3._insertTemplate(t2), e3.activeFormattingElements.insertMarker(), e3.framesetOk = false, e3.insertionMode = De.IN_TEMPLATE, e3.tmplInsertionModeStack.unshift(De.IN_TEMPLATE);
        break;
      case S.HEAD:
        e3._err(t2, T.misplacedStartTagForHeadElement);
        break;
      default:
        ve(e3, t2);
    }
  }
  function Ye(e3, t2) {
    e3.openElements.tmplCount > 0 ? (e3.openElements.generateImpliedEndTagsThoroughly(), e3.openElements.currentTagId !== S.TEMPLATE && e3._err(t2, T.closingOfElementWithOpenChildElements), e3.openElements.popUntilTagNamePopped(S.TEMPLATE), e3.activeFormattingElements.clearToLastMarker(), e3.tmplInsertionModeStack.shift(), e3._resetInsertionMode()) : e3._err(t2, T.endTagWithoutMatchingOpenElement);
  }
  function ve(e3, t2) {
    e3.openElements.pop(), e3.insertionMode = De.AFTER_HEAD, e3._processToken(t2);
  }
  function Qe(e3, t2) {
    const s2 = t2.type === h2.EOF ? T.openElementsLeftAfterEof : T.disallowedContentInNoscriptInHead;
    e3._err(t2, s2), e3.openElements.pop(), e3.insertionMode = De.IN_HEAD, e3._processToken(t2);
  }
  function qe(e3, t2) {
    e3._insertFakeElement(C.BODY, S.BODY), e3.insertionMode = De.IN_BODY, We(e3, t2);
  }
  function We(e3, t2) {
    switch (t2.type) {
      case h2.CHARACTER:
        Ke(e3, t2);
        break;
      case h2.WHITESPACE_CHARACTER:
        Xe(e3, t2);
        break;
      case h2.COMMENT:
        Fe(e3, t2);
        break;
      case h2.START_TAG:
        Ze(e3, t2);
        break;
      case h2.END_TAG:
        et(e3, t2);
        break;
      case h2.EOF:
        tt(e3, t2);
    }
  }
  function Xe(e3, t2) {
    e3._reconstructActiveFormattingElements(), e3._insertCharacters(t2);
  }
  function Ke(e3, t2) {
    e3._reconstructActiveFormattingElements(), e3._insertCharacters(t2), e3.framesetOk = false;
  }
  function Ve(e3, t2) {
    e3._reconstructActiveFormattingElements(), e3._appendElement(t2, u.HTML), e3.framesetOk = false, t2.ackSelfClosing = true;
  }
  function ze(e3) {
    const t2 = A(e3, N.TYPE);
    return null != t2 && t2.toLowerCase() === Ie;
  }
  function je(e3, t2) {
    e3._switchToTextParsing(t2, k.RAWTEXT);
  }
  function Je(e3, t2) {
    e3._reconstructActiveFormattingElements(), e3._insertElement(t2, u.HTML);
  }
  function Ze(e3, t2) {
    switch (t2.tagID) {
      case S.I:
      case S.S:
      case S.B:
      case S.U:
      case S.EM:
      case S.TT:
      case S.BIG:
      case S.CODE:
      case S.FONT:
      case S.SMALL:
      case S.STRIKE:
      case S.STRONG:
        !function(e4, t3) {
          e4._reconstructActiveFormattingElements(), e4._insertElement(t3, u.HTML), e4.activeFormattingElements.pushElement(e4.openElements.current, t3);
        }(e3, t2);
        break;
      case S.A:
        !function(e4, t3) {
          const s2 = e4.activeFormattingElements.getElementEntryInScopeWithTagName(C.A);
          s2 && (He(e4, t3), e4.openElements.remove(s2.element), e4.activeFormattingElements.removeEntry(s2)), e4._reconstructActiveFormattingElements(), e4._insertElement(t3, u.HTML), e4.activeFormattingElements.pushElement(e4.openElements.current, t3);
        }(e3, t2);
        break;
      case S.H1:
      case S.H2:
      case S.H3:
      case S.H4:
      case S.H5:
      case S.H6:
        !function(e4, t3) {
          e4.openElements.hasInButtonScope(S.P) && e4._closePElement(), M(e4.openElements.currentTagId) && e4.openElements.pop(), e4._insertElement(t3, u.HTML);
        }(e3, t2);
        break;
      case S.P:
      case S.DL:
      case S.OL:
      case S.UL:
      case S.DIV:
      case S.DIR:
      case S.NAV:
      case S.MAIN:
      case S.MENU:
      case S.ASIDE:
      case S.CENTER:
      case S.FIGURE:
      case S.FOOTER:
      case S.HEADER:
      case S.HGROUP:
      case S.DIALOG:
      case S.DETAILS:
      case S.ADDRESS:
      case S.ARTICLE:
      case S.SECTION:
      case S.SUMMARY:
      case S.FIELDSET:
      case S.BLOCKQUOTE:
      case S.FIGCAPTION:
        !function(e4, t3) {
          e4.openElements.hasInButtonScope(S.P) && e4._closePElement(), e4._insertElement(t3, u.HTML);
        }(e3, t2);
        break;
      case S.LI:
      case S.DD:
      case S.DT:
        !function(e4, t3) {
          e4.framesetOk = false;
          const s2 = t3.tagID;
          for (let t4 = e4.openElements.stackTop; t4 >= 0; t4--) {
            const a2 = e4.openElements.tagIDs[t4];
            if (s2 === S.LI && a2 === S.LI || (s2 === S.DD || s2 === S.DT) && (a2 === S.DD || a2 === S.DT)) {
              e4.openElements.generateImpliedEndTagsWithExclusion(a2), e4.openElements.popUntilTagNamePopped(a2);
              break;
            }
            if (a2 !== S.ADDRESS && a2 !== S.DIV && a2 !== S.P && e4._isSpecialElement(e4.openElements.items[t4], a2))
              break;
          }
          e4.openElements.hasInButtonScope(S.P) && e4._closePElement(), e4._insertElement(t3, u.HTML);
        }(e3, t2);
        break;
      case S.BR:
      case S.IMG:
      case S.WBR:
      case S.AREA:
      case S.EMBED:
      case S.KEYGEN:
        Ve(e3, t2);
        break;
      case S.HR:
        !function(e4, t3) {
          e4.openElements.hasInButtonScope(S.P) && e4._closePElement(), e4._appendElement(t3, u.HTML), e4.framesetOk = false, t3.ackSelfClosing = true;
        }(e3, t2);
        break;
      case S.RB:
      case S.RTC:
        !function(e4, t3) {
          e4.openElements.hasInScope(S.RUBY) && e4.openElements.generateImpliedEndTags(), e4._insertElement(t3, u.HTML);
        }(e3, t2);
        break;
      case S.RT:
      case S.RP:
        !function(e4, t3) {
          e4.openElements.hasInScope(S.RUBY) && e4.openElements.generateImpliedEndTagsWithExclusion(S.RTC), e4._insertElement(t3, u.HTML);
        }(e3, t2);
        break;
      case S.PRE:
      case S.LISTING:
        !function(e4, t3) {
          e4.openElements.hasInButtonScope(S.P) && e4._closePElement(), e4._insertElement(t3, u.HTML), e4.skipNextNewLine = true, e4.framesetOk = false;
        }(e3, t2);
        break;
      case S.XMP:
        !function(e4, t3) {
          e4.openElements.hasInButtonScope(S.P) && e4._closePElement(), e4._reconstructActiveFormattingElements(), e4.framesetOk = false, e4._switchToTextParsing(t3, k.RAWTEXT);
        }(e3, t2);
        break;
      case S.SVG:
        !function(e4, t3) {
          e4._reconstructActiveFormattingElements(), ue(t3), Ne(t3), t3.selfClosing ? e4._appendElement(t3, u.SVG) : e4._insertElement(t3, u.SVG), t3.ackSelfClosing = true;
        }(e3, t2);
        break;
      case S.HTML:
        !function(e4, t3) {
          0 === e4.openElements.tmplCount && e4.treeAdapter.adoptAttributes(e4.openElements.items[0], t3.attrs);
        }(e3, t2);
        break;
      case S.BASE:
      case S.LINK:
      case S.META:
      case S.STYLE:
      case S.TITLE:
      case S.SCRIPT:
      case S.BGSOUND:
      case S.BASEFONT:
      case S.TEMPLATE:
        xe(e3, t2);
        break;
      case S.BODY:
        !function(e4, t3) {
          const s2 = e4.openElements.tryPeekProperlyNestedBodyElement();
          s2 && 0 === e4.openElements.tmplCount && (e4.framesetOk = false, e4.treeAdapter.adoptAttributes(s2, t3.attrs));
        }(e3, t2);
        break;
      case S.FORM:
        !function(e4, t3) {
          const s2 = e4.openElements.tmplCount > 0;
          e4.formElement && !s2 || (e4.openElements.hasInButtonScope(S.P) && e4._closePElement(), e4._insertElement(t3, u.HTML), s2 || (e4.formElement = e4.openElements.current));
        }(e3, t2);
        break;
      case S.NOBR:
        !function(e4, t3) {
          e4._reconstructActiveFormattingElements(), e4.openElements.hasInScope(S.NOBR) && (He(e4, t3), e4._reconstructActiveFormattingElements()), e4._insertElement(t3, u.HTML), e4.activeFormattingElements.pushElement(e4.openElements.current, t3);
        }(e3, t2);
        break;
      case S.MATH:
        !function(e4, t3) {
          e4._reconstructActiveFormattingElements(), pe(t3), Ne(t3), t3.selfClosing ? e4._appendElement(t3, u.MATHML) : e4._insertElement(t3, u.MATHML), t3.ackSelfClosing = true;
        }(e3, t2);
        break;
      case S.TABLE:
        !function(e4, t3) {
          e4.treeAdapter.getDocumentMode(e4.document) !== I.QUIRKS && e4.openElements.hasInButtonScope(S.P) && e4._closePElement(), e4._insertElement(t3, u.HTML), e4.framesetOk = false, e4.insertionMode = De.IN_TABLE;
        }(e3, t2);
        break;
      case S.INPUT:
        !function(e4, t3) {
          e4._reconstructActiveFormattingElements(), e4._appendElement(t3, u.HTML), ze(t3) || (e4.framesetOk = false), t3.ackSelfClosing = true;
        }(e3, t2);
        break;
      case S.PARAM:
      case S.TRACK:
      case S.SOURCE:
        !function(e4, t3) {
          e4._appendElement(t3, u.HTML), t3.ackSelfClosing = true;
        }(e3, t2);
        break;
      case S.IMAGE:
        !function(e4, t3) {
          t3.tagName = C.IMG, t3.tagID = S.IMG, Ve(e4, t3);
        }(e3, t2);
        break;
      case S.BUTTON:
        !function(e4, t3) {
          e4.openElements.hasInScope(S.BUTTON) && (e4.openElements.generateImpliedEndTags(), e4.openElements.popUntilTagNamePopped(S.BUTTON)), e4._reconstructActiveFormattingElements(), e4._insertElement(t3, u.HTML), e4.framesetOk = false;
        }(e3, t2);
        break;
      case S.APPLET:
      case S.OBJECT:
      case S.MARQUEE:
        !function(e4, t3) {
          e4._reconstructActiveFormattingElements(), e4._insertElement(t3, u.HTML), e4.activeFormattingElements.insertMarker(), e4.framesetOk = false;
        }(e3, t2);
        break;
      case S.IFRAME:
        !function(e4, t3) {
          e4.framesetOk = false, e4._switchToTextParsing(t3, k.RAWTEXT);
        }(e3, t2);
        break;
      case S.SELECT:
        !function(e4, t3) {
          e4._reconstructActiveFormattingElements(), e4._insertElement(t3, u.HTML), e4.framesetOk = false, e4.insertionMode = e4.insertionMode === De.IN_TABLE || e4.insertionMode === De.IN_CAPTION || e4.insertionMode === De.IN_TABLE_BODY || e4.insertionMode === De.IN_ROW || e4.insertionMode === De.IN_CELL ? De.IN_SELECT_IN_TABLE : De.IN_SELECT;
        }(e3, t2);
        break;
      case S.OPTION:
      case S.OPTGROUP:
        !function(e4, t3) {
          e4.openElements.currentTagId === S.OPTION && e4.openElements.pop(), e4._reconstructActiveFormattingElements(), e4._insertElement(t3, u.HTML);
        }(e3, t2);
        break;
      case S.NOEMBED:
        je(e3, t2);
        break;
      case S.FRAMESET:
        !function(e4, t3) {
          const s2 = e4.openElements.tryPeekProperlyNestedBodyElement();
          e4.framesetOk && s2 && (e4.treeAdapter.detachNode(s2), e4.openElements.popAllUpToHtmlElement(), e4._insertElement(t3, u.HTML), e4.insertionMode = De.IN_FRAMESET);
        }(e3, t2);
        break;
      case S.TEXTAREA:
        !function(e4, t3) {
          e4._insertElement(t3, u.HTML), e4.skipNextNewLine = true, e4.tokenizer.state = k.RCDATA, e4.originalInsertionMode = e4.insertionMode, e4.framesetOk = false, e4.insertionMode = De.TEXT;
        }(e3, t2);
        break;
      case S.NOSCRIPT:
        e3.options.scriptingEnabled ? je(e3, t2) : Je(e3, t2);
        break;
      case S.PLAINTEXT:
        !function(e4, t3) {
          e4.openElements.hasInButtonScope(S.P) && e4._closePElement(), e4._insertElement(t3, u.HTML), e4.tokenizer.state = k.PLAINTEXT;
        }(e3, t2);
        break;
      case S.COL:
      case S.TH:
      case S.TD:
      case S.TR:
      case S.HEAD:
      case S.FRAME:
      case S.TBODY:
      case S.TFOOT:
      case S.THEAD:
      case S.CAPTION:
      case S.COLGROUP:
        break;
      default:
        Je(e3, t2);
    }
  }
  function $e(e3, t2) {
    const s2 = t2.tagName, a2 = t2.tagID;
    for (let t3 = e3.openElements.stackTop; t3 > 0; t3--) {
      const r2 = e3.openElements.items[t3], n2 = e3.openElements.tagIDs[t3];
      if (a2 === n2 && (a2 !== S.UNKNOWN || e3.treeAdapter.getTagName(r2) === s2)) {
        e3.openElements.generateImpliedEndTagsWithExclusion(a2), e3.openElements.stackTop >= t3 && e3.openElements.shortenToLength(t3);
        break;
      }
      if (e3._isSpecialElement(r2, n2))
        break;
    }
  }
  function et(e3, t2) {
    switch (t2.tagID) {
      case S.A:
      case S.B:
      case S.I:
      case S.S:
      case S.U:
      case S.EM:
      case S.TT:
      case S.BIG:
      case S.CODE:
      case S.FONT:
      case S.NOBR:
      case S.SMALL:
      case S.STRIKE:
      case S.STRONG:
        He(e3, t2);
        break;
      case S.P:
        !function(e4) {
          e4.openElements.hasInButtonScope(S.P) || e4._insertFakeElement(C.P, S.P), e4._closePElement();
        }(e3);
        break;
      case S.DL:
      case S.UL:
      case S.OL:
      case S.DIR:
      case S.DIV:
      case S.NAV:
      case S.PRE:
      case S.MAIN:
      case S.MENU:
      case S.ASIDE:
      case S.BUTTON:
      case S.CENTER:
      case S.FIGURE:
      case S.FOOTER:
      case S.HEADER:
      case S.HGROUP:
      case S.DIALOG:
      case S.ADDRESS:
      case S.ARTICLE:
      case S.DETAILS:
      case S.SECTION:
      case S.SUMMARY:
      case S.LISTING:
      case S.FIELDSET:
      case S.BLOCKQUOTE:
      case S.FIGCAPTION:
        !function(e4, t3) {
          const s2 = t3.tagID;
          e4.openElements.hasInScope(s2) && (e4.openElements.generateImpliedEndTags(), e4.openElements.popUntilTagNamePopped(s2));
        }(e3, t2);
        break;
      case S.LI:
        !function(e4) {
          e4.openElements.hasInListItemScope(S.LI) && (e4.openElements.generateImpliedEndTagsWithExclusion(S.LI), e4.openElements.popUntilTagNamePopped(S.LI));
        }(e3);
        break;
      case S.DD:
      case S.DT:
        !function(e4, t3) {
          const s2 = t3.tagID;
          e4.openElements.hasInScope(s2) && (e4.openElements.generateImpliedEndTagsWithExclusion(s2), e4.openElements.popUntilTagNamePopped(s2));
        }(e3, t2);
        break;
      case S.H1:
      case S.H2:
      case S.H3:
      case S.H4:
      case S.H5:
      case S.H6:
        !function(e4) {
          e4.openElements.hasNumberedHeaderInScope() && (e4.openElements.generateImpliedEndTags(), e4.openElements.popUntilNumberedHeaderPopped());
        }(e3);
        break;
      case S.BR:
        !function(e4) {
          e4._reconstructActiveFormattingElements(), e4._insertFakeElement(C.BR, S.BR), e4.openElements.pop(), e4.framesetOk = false;
        }(e3);
        break;
      case S.BODY:
        !function(e4, t3) {
          if (e4.openElements.hasInScope(S.BODY) && (e4.insertionMode = De.AFTER_BODY, e4.options.sourceCodeLocationInfo)) {
            const s2 = e4.openElements.tryPeekProperlyNestedBodyElement();
            s2 && e4._setEndLocation(s2, t3);
          }
        }(e3, t2);
        break;
      case S.HTML:
        !function(e4, t3) {
          e4.openElements.hasInScope(S.BODY) && (e4.insertionMode = De.AFTER_BODY, Nt(e4, t3));
        }(e3, t2);
        break;
      case S.FORM:
        !function(e4) {
          const t3 = e4.openElements.tmplCount > 0, { formElement: s2 } = e4;
          t3 || (e4.formElement = null), (s2 || t3) && e4.openElements.hasInScope(S.FORM) && (e4.openElements.generateImpliedEndTags(), t3 ? e4.openElements.popUntilTagNamePopped(S.FORM) : s2 && e4.openElements.remove(s2));
        }(e3);
        break;
      case S.APPLET:
      case S.OBJECT:
      case S.MARQUEE:
        !function(e4, t3) {
          const s2 = t3.tagID;
          e4.openElements.hasInScope(s2) && (e4.openElements.generateImpliedEndTags(), e4.openElements.popUntilTagNamePopped(s2), e4.activeFormattingElements.clearToLastMarker());
        }(e3, t2);
        break;
      case S.TEMPLATE:
        Ye(e3, t2);
        break;
      default:
        $e(e3, t2);
    }
  }
  function tt(e3, t2) {
    e3.tmplInsertionModeStack.length > 0 ? ut(e3, t2) : Ue(e3, t2);
  }
  function st(e3, t2) {
    if (Oe.has(e3.openElements.currentTagId))
      switch (e3.pendingCharacterTokens.length = 0, e3.hasNonWhitespacePendingCharacterToken = false, e3.originalInsertionMode = e3.insertionMode, e3.insertionMode = De.IN_TABLE_TEXT, t2.type) {
        case h2.CHARACTER:
          ot(e3, t2);
          break;
        case h2.WHITESPACE_CHARACTER:
          it(e3, t2);
      }
    else
      nt(e3, t2);
  }
  function at(e3, t2) {
    switch (t2.tagID) {
      case S.TD:
      case S.TH:
      case S.TR:
        !function(e4, t3) {
          e4.openElements.clearBackToTableContext(), e4._insertFakeElement(C.TBODY, S.TBODY), e4.insertionMode = De.IN_TABLE_BODY, _t(e4, t3);
        }(e3, t2);
        break;
      case S.STYLE:
      case S.SCRIPT:
      case S.TEMPLATE:
        xe(e3, t2);
        break;
      case S.COL:
        !function(e4, t3) {
          e4.openElements.clearBackToTableContext(), e4._insertFakeElement(C.COLGROUP, S.COLGROUP), e4.insertionMode = De.IN_COLUMN_GROUP, Tt(e4, t3);
        }(e3, t2);
        break;
      case S.FORM:
        !function(e4, t3) {
          e4.formElement || 0 !== e4.openElements.tmplCount || (e4._insertElement(t3, u.HTML), e4.formElement = e4.openElements.current, e4.openElements.pop());
        }(e3, t2);
        break;
      case S.TABLE:
        !function(e4, t3) {
          e4.openElements.hasInTableScope(S.TABLE) && (e4.openElements.popUntilTagNamePopped(S.TABLE), e4._resetInsertionMode(), e4._processStartTag(t3));
        }(e3, t2);
        break;
      case S.TBODY:
      case S.TFOOT:
      case S.THEAD:
        !function(e4, t3) {
          e4.openElements.clearBackToTableContext(), e4._insertElement(t3, u.HTML), e4.insertionMode = De.IN_TABLE_BODY;
        }(e3, t2);
        break;
      case S.INPUT:
        !function(e4, t3) {
          ze(t3) ? e4._appendElement(t3, u.HTML) : nt(e4, t3), t3.ackSelfClosing = true;
        }(e3, t2);
        break;
      case S.CAPTION:
        !function(e4, t3) {
          e4.openElements.clearBackToTableContext(), e4.activeFormattingElements.insertMarker(), e4._insertElement(t3, u.HTML), e4.insertionMode = De.IN_CAPTION;
        }(e3, t2);
        break;
      case S.COLGROUP:
        !function(e4, t3) {
          e4.openElements.clearBackToTableContext(), e4._insertElement(t3, u.HTML), e4.insertionMode = De.IN_COLUMN_GROUP;
        }(e3, t2);
        break;
      default:
        nt(e3, t2);
    }
  }
  function rt(e3, t2) {
    switch (t2.tagID) {
      case S.TABLE:
        e3.openElements.hasInTableScope(S.TABLE) && (e3.openElements.popUntilTagNamePopped(S.TABLE), e3._resetInsertionMode());
        break;
      case S.TEMPLATE:
        Ye(e3, t2);
        break;
      case S.BODY:
      case S.CAPTION:
      case S.COL:
      case S.COLGROUP:
      case S.HTML:
      case S.TBODY:
      case S.TD:
      case S.TFOOT:
      case S.TH:
      case S.THEAD:
      case S.TR:
        break;
      default:
        nt(e3, t2);
    }
  }
  function nt(e3, t2) {
    const s2 = e3.fosterParentingEnabled;
    e3.fosterParentingEnabled = true, We(e3, t2), e3.fosterParentingEnabled = s2;
  }
  function it(e3, t2) {
    e3.pendingCharacterTokens.push(t2);
  }
  function ot(e3, t2) {
    e3.pendingCharacterTokens.push(t2), e3.hasNonWhitespacePendingCharacterToken = true;
  }
  function ct(e3, t2) {
    let s2 = 0;
    if (e3.hasNonWhitespacePendingCharacterToken)
      for (; s2 < e3.pendingCharacterTokens.length; s2++)
        nt(e3, e3.pendingCharacterTokens[s2]);
    else
      for (; s2 < e3.pendingCharacterTokens.length; s2++)
        e3._insertCharacters(e3.pendingCharacterTokens[s2]);
    e3.insertionMode = e3.originalInsertionMode, e3._processToken(t2);
  }
  const Et = /* @__PURE__ */ new Set([S.CAPTION, S.COL, S.COLGROUP, S.TBODY, S.TD, S.TFOOT, S.TH, S.THEAD, S.TR]);
  function Tt(e3, t2) {
    switch (t2.tagID) {
      case S.HTML:
        Ze(e3, t2);
        break;
      case S.COL:
        e3._appendElement(t2, u.HTML), t2.ackSelfClosing = true;
        break;
      case S.TEMPLATE:
        xe(e3, t2);
        break;
      default:
        ht(e3, t2);
    }
  }
  function ht(e3, t2) {
    e3.openElements.currentTagId === S.COLGROUP && (e3.openElements.pop(), e3.insertionMode = De.IN_TABLE, e3._processToken(t2));
  }
  function _t(e3, t2) {
    switch (t2.tagID) {
      case S.TR:
        e3.openElements.clearBackToTableBodyContext(), e3._insertElement(t2, u.HTML), e3.insertionMode = De.IN_ROW;
        break;
      case S.TH:
      case S.TD:
        e3.openElements.clearBackToTableBodyContext(), e3._insertFakeElement(C.TR, S.TR), e3.insertionMode = De.IN_ROW, lt(e3, t2);
        break;
      case S.CAPTION:
      case S.COL:
      case S.COLGROUP:
      case S.TBODY:
      case S.TFOOT:
      case S.THEAD:
        e3.openElements.hasTableBodyContextInTableScope() && (e3.openElements.clearBackToTableBodyContext(), e3.openElements.pop(), e3.insertionMode = De.IN_TABLE, at(e3, t2));
        break;
      default:
        at(e3, t2);
    }
  }
  function At(e3, t2) {
    const s2 = t2.tagID;
    switch (t2.tagID) {
      case S.TBODY:
      case S.TFOOT:
      case S.THEAD:
        e3.openElements.hasInTableScope(s2) && (e3.openElements.clearBackToTableBodyContext(), e3.openElements.pop(), e3.insertionMode = De.IN_TABLE);
        break;
      case S.TABLE:
        e3.openElements.hasTableBodyContextInTableScope() && (e3.openElements.clearBackToTableBodyContext(), e3.openElements.pop(), e3.insertionMode = De.IN_TABLE, rt(e3, t2));
        break;
      case S.BODY:
      case S.CAPTION:
      case S.COL:
      case S.COLGROUP:
      case S.HTML:
      case S.TD:
      case S.TH:
      case S.TR:
        break;
      default:
        rt(e3, t2);
    }
  }
  function lt(e3, t2) {
    switch (t2.tagID) {
      case S.TH:
      case S.TD:
        e3.openElements.clearBackToTableRowContext(), e3._insertElement(t2, u.HTML), e3.insertionMode = De.IN_CELL, e3.activeFormattingElements.insertMarker();
        break;
      case S.CAPTION:
      case S.COL:
      case S.COLGROUP:
      case S.TBODY:
      case S.TFOOT:
      case S.THEAD:
      case S.TR:
        e3.openElements.hasInTableScope(S.TR) && (e3.openElements.clearBackToTableRowContext(), e3.openElements.pop(), e3.insertionMode = De.IN_TABLE_BODY, _t(e3, t2));
        break;
      default:
        at(e3, t2);
    }
  }
  function mt(e3, t2) {
    switch (t2.tagID) {
      case S.TR:
        e3.openElements.hasInTableScope(S.TR) && (e3.openElements.clearBackToTableRowContext(), e3.openElements.pop(), e3.insertionMode = De.IN_TABLE_BODY);
        break;
      case S.TABLE:
        e3.openElements.hasInTableScope(S.TR) && (e3.openElements.clearBackToTableRowContext(), e3.openElements.pop(), e3.insertionMode = De.IN_TABLE_BODY, At(e3, t2));
        break;
      case S.TBODY:
      case S.TFOOT:
      case S.THEAD:
        (e3.openElements.hasInTableScope(t2.tagID) || e3.openElements.hasInTableScope(S.TR)) && (e3.openElements.clearBackToTableRowContext(), e3.openElements.pop(), e3.insertionMode = De.IN_TABLE_BODY, At(e3, t2));
        break;
      case S.BODY:
      case S.CAPTION:
      case S.COL:
      case S.COLGROUP:
      case S.HTML:
      case S.TD:
      case S.TH:
        break;
      default:
        rt(e3, t2);
    }
  }
  function dt(e3, t2) {
    switch (t2.tagID) {
      case S.HTML:
        Ze(e3, t2);
        break;
      case S.OPTION:
        e3.openElements.currentTagId === S.OPTION && e3.openElements.pop(), e3._insertElement(t2, u.HTML);
        break;
      case S.OPTGROUP:
        e3.openElements.currentTagId === S.OPTION && e3.openElements.pop(), e3.openElements.currentTagId === S.OPTGROUP && e3.openElements.pop(), e3._insertElement(t2, u.HTML);
        break;
      case S.INPUT:
      case S.KEYGEN:
      case S.TEXTAREA:
      case S.SELECT:
        e3.openElements.hasInSelectScope(S.SELECT) && (e3.openElements.popUntilTagNamePopped(S.SELECT), e3._resetInsertionMode(), t2.tagID !== S.SELECT && e3._processStartTag(t2));
        break;
      case S.SCRIPT:
      case S.TEMPLATE:
        xe(e3, t2);
    }
  }
  function pt(e3, t2) {
    switch (t2.tagID) {
      case S.OPTGROUP:
        e3.openElements.stackTop > 0 && e3.openElements.currentTagId === S.OPTION && e3.openElements.tagIDs[e3.openElements.stackTop - 1] === S.OPTGROUP && e3.openElements.pop(), e3.openElements.currentTagId === S.OPTGROUP && e3.openElements.pop();
        break;
      case S.OPTION:
        e3.openElements.currentTagId === S.OPTION && e3.openElements.pop();
        break;
      case S.SELECT:
        e3.openElements.hasInSelectScope(S.SELECT) && (e3.openElements.popUntilTagNamePopped(S.SELECT), e3._resetInsertionMode());
        break;
      case S.TEMPLATE:
        Ye(e3, t2);
    }
  }
  function ut(e3, t2) {
    e3.openElements.tmplCount > 0 ? (e3.openElements.popUntilTagNamePopped(S.TEMPLATE), e3.activeFormattingElements.clearToLastMarker(), e3.tmplInsertionModeStack.shift(), e3._resetInsertionMode(), e3.onEof(t2)) : Ue(e3, t2);
  }
  function Nt(e3, t2) {
    var s2;
    if (t2.tagID === S.HTML) {
      if (e3.fragmentContext || (e3.insertionMode = De.AFTER_AFTER_BODY), e3.options.sourceCodeLocationInfo && e3.openElements.tagIDs[0] === S.HTML) {
        e3._setEndLocation(e3.openElements.items[0], t2);
        const a2 = e3.openElements.items[1];
        a2 && !(null === (s2 = e3.treeAdapter.getNodeSourceCodeLocation(a2)) || void 0 === s2 ? void 0 : s2.endTag) && e3._setEndLocation(a2, t2);
      }
    } else
      It(e3, t2);
  }
  function It(e3, t2) {
    e3.insertionMode = De.IN_BODY, We(e3, t2);
  }
  function Ct(e3, t2) {
    e3.insertionMode = De.IN_BODY, We(e3, t2);
  }
  function St(e3) {
    for (; e3.treeAdapter.getNamespaceURI(e3.openElements.current) !== u.HTML && !e3._isIntegrationPoint(e3.openElements.currentTagId, e3.openElements.current); )
      e3.openElements.pop();
  }
  return /* @__PURE__ */ new Set([C.AREA, C.BASE, C.BASEFONT, C.BGSOUND, C.BR, C.COL, C.EMBED, C.FRAME, C.HR, C.IMG, C.INPUT, C.KEYGEN, C.LINK, C.META, C.PARAM, C.SOURCE, C.TRACK, C.WBR]), e2.parse = function(e3, t2) {
    return Le.parse(e3, t2);
  }, e2.parseFragment = function(e3, t2, s2) {
    "string" == typeof e3 && (s2 = t2, t2 = e3, e3 = null);
    const a2 = Le.getFragmentParser(e3, s2);
    return a2.tokenizer.write(t2, true), a2.getFragment();
  }, Object.defineProperty(e2, "__esModule", { value: true }), e2;
}({});
var parse = e.parse;
var parseFragment = e.parseFragment;
var docParser = /* @__PURE__ */ new WeakMap();
function parseDocumentUtil(ownerDocument, html) {
  const doc2 = parse(html.trim(), getParser(ownerDocument));
  doc2.documentElement = doc2.firstElementChild;
  doc2.head = doc2.documentElement.firstElementChild;
  doc2.body = doc2.head.nextElementSibling;
  return doc2;
}
function parseFragmentUtil(ownerDocument, html) {
  if (typeof html === "string") {
    html = html.trim();
  } else {
    html = "";
  }
  const frag = parseFragment(html, getParser(ownerDocument));
  return frag;
}
function getParser(ownerDocument) {
  let parseOptions = docParser.get(ownerDocument);
  if (parseOptions != null) {
    return parseOptions;
  }
  const treeAdapter = {
    createDocument() {
      const doc2 = ownerDocument.createElement(
        "#document"
        /* DOCUMENT_NODE */
      );
      doc2["x-mode"] = "no-quirks";
      return doc2;
    },
    setNodeSourceCodeLocation(node, location2) {
      node.sourceCodeLocation = location2;
    },
    getNodeSourceCodeLocation(node) {
      return node.sourceCodeLocation;
    },
    createDocumentFragment() {
      return ownerDocument.createDocumentFragment();
    },
    createElement(tagName, namespaceURI, attrs) {
      const elm = ownerDocument.createElementNS(namespaceURI, tagName);
      for (let i2 = 0; i2 < attrs.length; i2++) {
        const attr = attrs[i2];
        if (attr.namespace == null || attr.namespace === "http://www.w3.org/1999/xhtml") {
          elm.setAttribute(attr.name, attr.value);
        } else {
          elm.setAttributeNS(attr.namespace, attr.name, attr.value);
        }
      }
      return elm;
    },
    createCommentNode(data) {
      return ownerDocument.createComment(data);
    },
    appendChild(parentNode, newNode) {
      parentNode.appendChild(newNode);
    },
    insertBefore(parentNode, newNode, referenceNode2) {
      parentNode.insertBefore(newNode, referenceNode2);
    },
    setTemplateContent(templateElement, contentElement) {
      templateElement.content = contentElement;
    },
    getTemplateContent(templateElement) {
      return templateElement.content;
    },
    setDocumentType(doc2, name, publicId, systemId) {
      let doctypeNode = doc2.childNodes.find(
        (n) => n.nodeType === 10
        /* DOCUMENT_TYPE_NODE */
      );
      if (doctypeNode == null) {
        doctypeNode = ownerDocument.createDocumentTypeNode();
        doc2.insertBefore(doctypeNode, doc2.firstChild);
      }
      doctypeNode.nodeValue = "!DOCTYPE";
      doctypeNode["x-name"] = name;
      doctypeNode["x-publicId"] = publicId;
      doctypeNode["x-systemId"] = systemId;
    },
    setDocumentMode(doc2, mode) {
      doc2["x-mode"] = mode;
    },
    getDocumentMode(doc2) {
      return doc2["x-mode"];
    },
    detachNode(node) {
      node.remove();
    },
    insertText(parentNode, text) {
      const lastChild = parentNode.lastChild;
      if (lastChild != null && lastChild.nodeType === 3) {
        lastChild.nodeValue += text;
      } else {
        parentNode.appendChild(ownerDocument.createTextNode(text));
      }
    },
    insertTextBefore(parentNode, text, referenceNode2) {
      const prevNode = parentNode.childNodes[parentNode.childNodes.indexOf(referenceNode2) - 1];
      if (prevNode != null && prevNode.nodeType === 3) {
        prevNode.nodeValue += text;
      } else {
        parentNode.insertBefore(ownerDocument.createTextNode(text), referenceNode2);
      }
    },
    adoptAttributes(recipient, attrs) {
      for (let i2 = 0; i2 < attrs.length; i2++) {
        const attr = attrs[i2];
        if (recipient.hasAttributeNS(attr.namespace, attr.name) === false) {
          recipient.setAttributeNS(attr.namespace, attr.name, attr.value);
        }
      }
    },
    getFirstChild(node) {
      return node.childNodes[0];
    },
    getChildNodes(node) {
      return node.childNodes;
    },
    getParentNode(node) {
      return node.parentNode;
    },
    getAttrList(element) {
      const attrs = element.attributes.__items.map((attr) => {
        return {
          name: attr.name,
          value: attr.value,
          namespace: attr.namespaceURI,
          prefix: null
        };
      });
      return attrs;
    },
    getTagName(element) {
      if (element.namespaceURI === "http://www.w3.org/1999/xhtml") {
        return element.nodeName.toLowerCase();
      } else {
        return element.nodeName;
      }
    },
    getNamespaceURI(element) {
      return element.namespaceURI;
    },
    getTextNodeContent(textNode) {
      return textNode.nodeValue;
    },
    getCommentNodeContent(commentNode) {
      return commentNode.nodeValue;
    },
    getDocumentTypeNodeName(doctypeNode) {
      return doctypeNode["x-name"];
    },
    getDocumentTypeNodePublicId(doctypeNode) {
      return doctypeNode["x-publicId"];
    },
    getDocumentTypeNodeSystemId(doctypeNode) {
      return doctypeNode["x-systemId"];
    },
    // @ts-ignore - a `MockNode` will never be assignable to a `TreeAdapterTypeMap['text']`. As a result, we cannot
    // complete this function signature
    isTextNode(node) {
      return node.nodeType === 3;
    },
    // @ts-ignore - a `MockNode` will never be assignable to a `TreeAdapterTypeMap['comment']`. As a result, we cannot
    // complete this function signature (which requires its return type to be a type predicate)
    isCommentNode(node) {
      return node.nodeType === 8;
    },
    // @ts-ignore - a `MockNode` will never be assignable to a `TreeAdapterTypeMap['document']`. As a result, we cannot
    // complete this function signature (which requires its return type to be a type predicate)
    isDocumentTypeNode(node) {
      return node.nodeType === 10;
    },
    // @ts-ignore - a `MockNode` will never be assignable to a `TreeAdapterTypeMap['element']`. As a result, we cannot
    // complete this function signature (which requires its return type to be a type predicate)
    isElementNode(node) {
      return node.nodeType === 1;
    }
  };
  parseOptions = {
    treeAdapter
  };
  docParser.set(ownerDocument, parseOptions);
  return parseOptions;
}
var jquery_default = (
  /*!
  * jQuery JavaScript Library v4.0.0-pre+9352011a7.dirty +selector
  * https://jquery.com/
  *
  * Copyright OpenJS Foundation and other contributors
  * Released under the MIT license
  * https://jquery.org/license
  *
  * Date: 2023-12-11T17:55Z
  */
  function(global2, factory) {
    "use strict";
    if (true) {
      return factory(global2, true);
    } else {
      factory(global2);
    }
  }({
    document: {
      createElement() {
        return {};
      },
      nodeType: 9,
      documentElement: {
        nodeType: 1,
        nodeName: "HTML"
      }
    }
  }, function(window2, noGlobal) {
    "use strict";
    if (!window2.document) {
      throw new Error("jQuery requires a window with a document");
    }
    var arr = [];
    var getProto = Object.getPrototypeOf;
    var slice = arr.slice;
    var flat = arr.flat ? function(array) {
      return arr.flat.call(array);
    } : function(array) {
      return arr.concat.apply([], array);
    };
    var push = arr.push;
    var indexOf = arr.indexOf;
    var class2type = {};
    var toString = class2type.toString;
    var hasOwn = class2type.hasOwnProperty;
    var fnToString = hasOwn.toString;
    var ObjectFunctionString = fnToString.call(Object);
    var support = {};
    function toType(obj) {
      if (obj == null) {
        return obj + "";
      }
      return typeof obj === "object" ? class2type[toString.call(obj)] || "object" : typeof obj;
    }
    function isWindow(obj) {
      return obj != null && obj === obj.window;
    }
    function isArrayLike(obj) {
      var length = !!obj && obj.length, type = toType(obj);
      if (typeof obj === "function" || isWindow(obj)) {
        return false;
      }
      return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
    }
    var document2 = window2.document;
    var preservedScriptAttributes = {
      type: true,
      src: true,
      nonce: true,
      noModule: true
    };
    function DOMEval(code, node, doc2) {
      doc2 = doc2 || document2;
      var i22, script = doc2.createElement("script");
      script.text = code;
      if (node) {
        for (i22 in preservedScriptAttributes) {
          if (node[i22]) {
            script[i22] = node[i22];
          }
        }
      }
      doc2.head.appendChild(script).parentNode.removeChild(script);
    }
    const jQuery = {};
    var version = "4.0.0-pre+9352011a7.dirty +selector", rhtmlSuffix = /HTML$/i, jQueryOrig = function(selector, context) {
      return new jQuery.fn.init(selector, context);
    };
    jQuery.fn = jQuery.prototype = {
      // The current version of jQuery being used
      jquery: version,
      constructor: jQuery,
      // The default length of a jQuery object is 0
      length: 0,
      toArray: function() {
        return slice.call(this);
      },
      // Get the Nth element in the matched element set OR
      // Get the whole matched element set as a clean array
      get: function(num) {
        if (num == null) {
          return slice.call(this);
        }
        return num < 0 ? this[num + this.length] : this[num];
      },
      // Take an array of elements and push it onto the stack
      // (returning the new matched element set)
      pushStack: function(elems) {
        var ret = jQuery.merge(this.constructor(), elems);
        ret.prevObject = this;
        return ret;
      },
      // Execute a callback for every element in the matched set.
      each: function(callback) {
        return jQuery.each(this, callback);
      },
      map: function(callback) {
        return this.pushStack(jQuery.map(this, function(elem, i22) {
          return callback.call(elem, i22, elem);
        }));
      },
      slice: function() {
        return this.pushStack(slice.apply(this, arguments));
      },
      first: function() {
        return this.eq(0);
      },
      last: function() {
        return this.eq(-1);
      },
      even: function() {
        return this.pushStack(jQuery.grep(this, function(_elem, i22) {
          return (i22 + 1) % 2;
        }));
      },
      odd: function() {
        return this.pushStack(jQuery.grep(this, function(_elem, i22) {
          return i22 % 2;
        }));
      },
      eq: function(i22) {
        var len = this.length, j = +i22 + (i22 < 0 ? len : 0);
        return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
      },
      end: function() {
        return this.prevObject || this.constructor();
      }
    };
    jQuery.extend = jQuery.fn.extend = function() {
      var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i22 = 1, length = arguments.length, deep = false;
      if (typeof target === "boolean") {
        deep = target;
        target = arguments[i22] || {};
        i22++;
      }
      if (typeof target !== "object" && typeof target !== "function") {
        target = {};
      }
      if (i22 === length) {
        target = this;
        i22--;
      }
      for (; i22 < length; i22++) {
        if ((options = arguments[i22]) != null) {
          for (name in options) {
            copy = options[name];
            if (name === "__proto__" || target === copy) {
              continue;
            }
            if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
              src = target[name];
              if (copyIsArray && !Array.isArray(src)) {
                clone = [];
              } else if (!copyIsArray && !jQuery.isPlainObject(src)) {
                clone = {};
              } else {
                clone = src;
              }
              copyIsArray = false;
              target[name] = jQuery.extend(deep, clone, copy);
            } else if (copy !== void 0) {
              target[name] = copy;
            }
          }
        }
      }
      return target;
    };
    jQuery.extend({
      // Unique for each copy of jQuery on the page
      expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
      // Assume jQuery is ready without the ready module
      isReady: true,
      error: function(msg) {
        throw new Error(msg);
      },
      noop: function() {
      },
      isPlainObject: function(obj) {
        var proto, Ctor;
        if (!obj || toString.call(obj) !== "[object Object]") {
          return false;
        }
        proto = getProto(obj);
        if (!proto) {
          return true;
        }
        Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
        return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
      },
      isEmptyObject: function(obj) {
        var name;
        for (name in obj) {
          return false;
        }
        return true;
      },
      // Evaluates a script in a provided context; falls back to the global one
      // if not specified.
      globalEval: function(code, options, doc2) {
        DOMEval(code, { nonce: options && options.nonce }, doc2);
      },
      each: function(obj, callback) {
        var length, i22 = 0;
        if (isArrayLike(obj)) {
          length = obj.length;
          for (; i22 < length; i22++) {
            if (callback.call(obj[i22], i22, obj[i22]) === false) {
              break;
            }
          }
        } else {
          for (i22 in obj) {
            if (callback.call(obj[i22], i22, obj[i22]) === false) {
              break;
            }
          }
        }
        return obj;
      },
      // Retrieve the text value of an array of DOM nodes
      text: function(elem) {
        var node, ret = "", i22 = 0, nodeType = elem.nodeType;
        if (!nodeType) {
          while (node = elem[i22++]) {
            ret += jQuery.text(node);
          }
        }
        if (nodeType === 1 || nodeType === 11) {
          return elem.textContent;
        }
        if (nodeType === 9) {
          return elem.documentElement.textContent;
        }
        if (nodeType === 3 || nodeType === 4) {
          return elem.nodeValue;
        }
        return ret;
      },
      // results is for internal usage only
      makeArray: function(arr2, results) {
        var ret = results || [];
        if (arr2 != null) {
          if (isArrayLike(Object(arr2))) {
            jQuery.merge(
              ret,
              typeof arr2 === "string" ? [arr2] : arr2
            );
          } else {
            push.call(ret, arr2);
          }
        }
        return ret;
      },
      inArray: function(elem, arr2, i22) {
        return arr2 == null ? -1 : indexOf.call(arr2, elem, i22);
      },
      isXMLDoc: function(elem) {
        var namespace = elem && elem.namespaceURI, docElem = elem && (elem.ownerDocument || elem).documentElement;
        return !rhtmlSuffix.test(namespace || docElem && docElem.nodeName || "HTML");
      },
      // Note: an element does not contain itself
      contains: function(a, b) {
        var bup = b && b.parentNode;
        return a === bup || !!(bup && bup.nodeType === 1 && // Support: IE 9 - 11+
        // IE doesn't have `contains` on SVG.
        (a.contains ? a.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
      },
      merge: function(first, second) {
        var len = +second.length, j = 0, i22 = first.length;
        for (; j < len; j++) {
          first[i22++] = second[j];
        }
        first.length = i22;
        return first;
      },
      grep: function(elems, callback, invert) {
        var callbackInverse, matches3 = [], i22 = 0, length = elems.length, callbackExpect = !invert;
        for (; i22 < length; i22++) {
          callbackInverse = !callback(elems[i22], i22);
          if (callbackInverse !== callbackExpect) {
            matches3.push(elems[i22]);
          }
        }
        return matches3;
      },
      // arg is for internal usage only
      map: function(elems, callback, arg) {
        var length, value, i22 = 0, ret = [];
        if (isArrayLike(elems)) {
          length = elems.length;
          for (; i22 < length; i22++) {
            value = callback(elems[i22], i22, arg);
            if (value != null) {
              ret.push(value);
            }
          }
        } else {
          for (i22 in elems) {
            value = callback(elems[i22], i22, arg);
            if (value != null) {
              ret.push(value);
            }
          }
        }
        return flat(ret);
      },
      // A global GUID counter for objects
      guid: 1,
      // jQuery.support is not used in Core but other projects attach their
      // properties to it so it needs to exist.
      support
    });
    if (typeof Symbol === "function") {
      jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
    }
    jQuery.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
      function(_i, name) {
        class2type["[object " + name + "]"] = name.toLowerCase();
      }
    );
    function nodeName(elem, name) {
      return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
    }
    var pop = arr.pop;
    var whitespace = "[\\x20\\t\\r\\n\\f]";
    var isIE = document2.documentMode;
    try {
      document2.querySelector(":has(*,:jqfake)");
      support.cssHas = false;
    } catch (e2) {
      support.cssHas = true;
    }
    var rbuggyQSA = [];
    if (isIE) {
      rbuggyQSA.push(
        // Support: IE 9 - 11+
        // IE's :disabled selector does not pick up the children of disabled fieldsets
        ":enabled",
        ":disabled",
        // Support: IE 11+
        // IE 11 doesn't find elements on a `[name='']` query in some cases.
        // Adding a temporary attribute to the document before the selection works
        // around the issue.
        "\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + `*(?:''|"")`
      );
    }
    if (!support.cssHas) {
      rbuggyQSA.push(":has");
    }
    rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
    var rtrimCSS = new RegExp(
      "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$",
      "g"
    );
    var identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+";
    var booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped";
    var rleadingCombinator = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*");
    var rdescend = new RegExp(whitespace + "|>");
    var rsibling = /[+~]/;
    var documentElement = document2.documentElement;
    var matches2 = documentElement.matches || documentElement.msMatchesSelector;
    function createCache() {
      var keys = [];
      function cache(key, value) {
        if (keys.push(key + " ") > jQuery.expr.cacheLength) {
          delete cache[keys.shift()];
        }
        return cache[key + " "] = value;
      }
      return cache;
    }
    function testContext(context) {
      return context && typeof context.getElementsByTagName !== "undefined" && context;
    }
    var attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + // Operator (capture 2)
    "*([*^$|!~]?=)" + whitespace + // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
    `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + identifier + "))|)" + whitespace + "*\\]";
    var pseudos = ":(" + identifier + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + attributes + ")*)|.*)\\)|)";
    var filterMatchExpr = {
      ID: new RegExp("^#(" + identifier + ")"),
      CLASS: new RegExp("^\\.(" + identifier + ")"),
      TAG: new RegExp("^(" + identifier + "|[*])"),
      ATTR: new RegExp("^" + attributes),
      PSEUDO: new RegExp("^" + pseudos),
      CHILD: new RegExp(
        "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)",
        "i"
      )
    };
    var rpseudo = new RegExp(pseudos);
    var runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"), funescape = function(escape, nonHex) {
      var high = "0x" + escape.slice(1) - 65536;
      if (nonHex) {
        return nonHex;
      }
      return high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
    };
    function unescapeSelector(sel) {
      return sel.replace(runescape, funescape);
    }
    function selectorError(msg) {
      jQuery.error("Syntax error, unrecognized expression: " + msg);
    }
    var rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*");
    var tokenCache = createCache();
    function tokenize(selector, parseOnly) {
      var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
      if (cached) {
        return parseOnly ? 0 : cached.slice(0);
      }
      soFar = selector;
      groups = [];
      preFilters = jQuery.expr.preFilter;
      while (soFar) {
        if (!matched || (match = rcomma.exec(soFar))) {
          if (match) {
            soFar = soFar.slice(match[0].length) || soFar;
          }
          groups.push(tokens = []);
        }
        matched = false;
        if (match = rleadingCombinator.exec(soFar)) {
          matched = match.shift();
          tokens.push({
            value: matched,
            // Cast descendant combinators to space
            type: match[0].replace(rtrimCSS, " ")
          });
          soFar = soFar.slice(matched.length);
        }
        for (type in filterMatchExpr) {
          if ((match = jQuery.expr.match[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
            matched = match.shift();
            tokens.push({
              value: matched,
              type,
              matches: match
            });
            soFar = soFar.slice(matched.length);
          }
        }
        if (!matched) {
          break;
        }
      }
      if (parseOnly) {
        return soFar.length;
      }
      return soFar ? selectorError(selector) : (
        // Cache the tokens
        tokenCache(selector, groups).slice(0)
      );
    }
    var preFilter = {
      ATTR: function(match) {
        match[1] = unescapeSelector(match[1]);
        match[3] = unescapeSelector(match[3] || match[4] || match[5] || "");
        if (match[2] === "~=") {
          match[3] = " " + match[3] + " ";
        }
        return match.slice(0, 4);
      },
      CHILD: function(match) {
        match[1] = match[1].toLowerCase();
        if (match[1].slice(0, 3) === "nth") {
          if (!match[3]) {
            selectorError(match[0]);
          }
          match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
          match[5] = +(match[7] + match[8] || match[3] === "odd");
        } else if (match[3]) {
          selectorError(match[0]);
        }
        return match;
      },
      PSEUDO: function(match) {
        var excess, unquoted = !match[6] && match[2];
        if (filterMatchExpr.CHILD.test(match[0])) {
          return null;
        }
        if (match[3]) {
          match[2] = match[4] || match[5] || "";
        } else if (unquoted && rpseudo.test(unquoted) && // Get excess from tokenize (recursively)
        (excess = tokenize(unquoted, true)) && // advance to the next closing parenthesis
        (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
          match[0] = match[0].slice(0, excess);
          match[2] = unquoted.slice(0, excess);
        }
        return match.slice(0, 3);
      }
    };
    function toSelector(tokens) {
      var i22 = 0, len = tokens.length, selector = "";
      for (; i22 < len; i22++) {
        selector += tokens[i22].value;
      }
      return selector;
    }
    var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
    function fcssescape(ch, asCodePoint) {
      if (asCodePoint) {
        if (ch === "\0") {
          return "�";
        }
        return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
      }
      return "\\" + ch;
    }
    jQuery.escapeSelector = function(sel) {
      return (sel + "").replace(rcssescape, fcssescape);
    };
    var sort = arr.sort;
    var splice = arr.splice;
    var hasDuplicate;
    function sortOrder(a, b) {
      if (a === b) {
        hasDuplicate = true;
        return 0;
      }
      var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
      if (compare) {
        return compare;
      }
      compare = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : (
        // Otherwise we know they are disconnected
        1
      );
      if (compare & 1) {
        if (a == document2 || a.ownerDocument == document2 && jQuery.contains(document2, a)) {
          return -1;
        }
        if (b == document2 || b.ownerDocument == document2 && jQuery.contains(document2, b)) {
          return 1;
        }
        return 0;
      }
      return compare & 4 ? -1 : 1;
    }
    jQuery.uniqueSort = function(results) {
      var elem, duplicates = [], j = 0, i22 = 0;
      hasDuplicate = false;
      sort.call(results, sortOrder);
      if (hasDuplicate) {
        while (elem = results[i22++]) {
          if (elem === results[i22]) {
            j = duplicates.push(i22);
          }
        }
        while (j--) {
          splice.call(results, duplicates[j], 1);
        }
      }
      return results;
    };
    jQuery.fn.uniqueSort = function() {
      return this.pushStack(jQuery.uniqueSort(slice.apply(this)));
    };
    var i2, outermostContext, document$1, documentElement$1, documentIsHTML, dirruns = 0, done = 0, classCache = createCache(), compilerCache = createCache(), nonnativeSelectorCache = createCache(), rwhitespace = new RegExp(whitespace + "+", "g"), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = jQuery.extend({
      bool: new RegExp("^(?:" + booleans + ")$", "i"),
      // For use in libraries implementing .is()
      // We use this for POS matching in `select`
      needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
    }, filterMatchExpr), rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, unloadHandler = function() {
      setDocument();
    }, inDisabledFieldset = addCombinator(
      function(elem) {
        return elem.disabled === true && nodeName(elem, "fieldset");
      },
      { dir: "parentNode", next: "legend" }
    );
    function find(selector, context, results, seed) {
      var m, i22, elem, nid, match, groups, newSelector, newContext = context && context.ownerDocument, nodeType = context ? context.nodeType : 9;
      results = results || [];
      if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
        return results;
      }
      if (false) {
        setDocument(context);
        context = context || document$1;
        if (documentIsHTML) {
          if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
            if (m = match[1]) {
              if (nodeType === 9) {
                if (elem = context.getElementById(m)) {
                  push.call(results, elem);
                }
                return results;
              } else {
                if (newContext && (elem = newContext.getElementById(m)) && jQuery.contains(context, elem)) {
                  push.call(results, elem);
                  return results;
                }
              }
            } else if (match[2]) {
              push.apply(results, context.getElementsByTagName(selector));
              return results;
            } else if ((m = match[3]) && context.getElementsByClassName) {
              push.apply(results, context.getElementsByClassName(m));
              return results;
            }
          }
          if (!nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
            newSelector = selector;
            newContext = context;
            if (nodeType === 1 && (rdescend.test(selector) || rleadingCombinator.test(selector))) {
              newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
              if (newContext != context || isIE) {
                if (nid = context.getAttribute("id")) {
                  nid = jQuery.escapeSelector(nid);
                } else {
                  context.setAttribute("id", nid = jQuery.expando);
                }
              }
              groups = tokenize(selector);
              i22 = groups.length;
              while (i22--) {
                groups[i22] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i22]);
              }
              newSelector = groups.join(",");
            }
            try {
              push.apply(
                results,
                newContext.querySelectorAll(newSelector)
              );
              return results;
            } catch (qsaError) {
              nonnativeSelectorCache(selector, true);
            } finally {
              if (nid === jQuery.expando) {
                context.removeAttribute("id");
              }
            }
          }
        }
      }
      return select(selector.replace(rtrimCSS, "$1"), context, results, seed);
    }
    function markFunction(fn) {
      fn[jQuery.expando] = true;
      return fn;
    }
    function createInputPseudo(type) {
      return function(elem) {
        return nodeName(elem, "input") && elem.type === type;
      };
    }
    function createButtonPseudo(type) {
      return function(elem) {
        return (nodeName(elem, "input") || nodeName(elem, "button")) && elem.type === type;
      };
    }
    function createDisabledPseudo(disabled) {
      return function(elem) {
        if ("form" in elem) {
          if (elem.parentNode && elem.disabled === false) {
            if ("label" in elem) {
              if ("label" in elem.parentNode) {
                return elem.parentNode.disabled === disabled;
              } else {
                return elem.disabled === disabled;
              }
            }
            return elem.isDisabled === disabled || // Where there is no isDisabled, check manually
            elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
          }
          return elem.disabled === disabled;
        } else if ("label" in elem) {
          return elem.disabled === disabled;
        }
        return false;
      };
    }
    function createPositionalPseudo(fn) {
      return markFunction(function(argument) {
        argument = +argument;
        return markFunction(function(seed, matches3) {
          var j, matchIndexes = fn([], seed.length, argument), i22 = matchIndexes.length;
          while (i22--) {
            if (seed[j = matchIndexes[i22]]) {
              seed[j] = !(matches3[j] = seed[j]);
            }
          }
        });
      });
    }
    function setDocument(node) {
      var subWindow, doc2 = node ? node.ownerDocument || node : document2;
      if (doc2 == document$1 || doc2.nodeType !== 9) {
        return;
      }
      document$1 = doc2;
      documentElement$1 = document$1.documentElement;
      documentIsHTML = !jQuery.isXMLDoc(document$1);
      if (isIE && document2 != document$1 && (subWindow = document$1.defaultView) && subWindow.top !== subWindow) {
        subWindow.addEventListener("unload", unloadHandler);
      }
    }
    find.matches = function(expr, elements) {
      return find(expr, null, null, elements);
    };
    find.matchesSelector = function(elem, expr) {
      setDocument(elem);
      if (documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
        try {
          return matches2.call(elem, expr);
        } catch (e2) {
          nonnativeSelectorCache(expr, true);
        }
      }
      return find(expr, document$1, null, [elem]).length > 0;
    };
    jQuery.expr = {
      // Can be adjusted by the user
      cacheLength: 50,
      createPseudo: markFunction,
      match: matchExpr,
      find: {
        ID: function(id, context) {
          if (typeof context.getElementById !== "undefined" && documentIsHTML) {
            var elem = context.getElementById(id);
            return elem ? [elem] : [];
          }
        },
        TAG: function(tag, context) {
          if (typeof context.getElementsByTagName !== "undefined") {
            return context.getElementsByTagName(tag);
          } else {
            return context.querySelectorAll(tag);
          }
        },
        CLASS: function(className, context) {
          if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
            return context.getElementsByClassName(className);
          }
        }
      },
      relative: {
        ">": { dir: "parentNode", first: true },
        " ": { dir: "parentNode" },
        "+": { dir: "previousSibling", first: true },
        "~": { dir: "previousSibling" }
      },
      preFilter,
      filter: {
        ID: function(id) {
          var attrId = unescapeSelector(id);
          return function(elem) {
            return elem.getAttribute("id") === attrId;
          };
        },
        TAG: function(nodeNameSelector) {
          var expectedNodeName = unescapeSelector(nodeNameSelector).toLowerCase();
          return nodeNameSelector === "*" ? function() {
            return true;
          } : function(elem) {
            return nodeName(elem, expectedNodeName);
          };
        },
        CLASS: function(className) {
          var pattern = classCache[className + " "];
          return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
            return pattern.test(
              typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || ""
            );
          });
        },
        ATTR: function(name, operator, check) {
          return function(elem) {
            var result = elem.getAttribute(name);
            if (result == null) {
              return operator === "!=";
            }
            if (!operator) {
              return true;
            }
            result += "";
            if (operator === "=") {
              return result === check;
            }
            if (operator === "!=") {
              return result !== check;
            }
            if (operator === "^=") {
              return check && result.indexOf(check) === 0;
            }
            if (operator === "*=") {
              return check && result.indexOf(check) > -1;
            }
            if (operator === "$=") {
              return check && result.slice(-check.length) === check;
            }
            if (operator === "~=") {
              return (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1;
            }
            if (operator === "|=") {
              return result === check || result.slice(0, check.length + 1) === check + "-";
            }
            return false;
          };
        },
        CHILD: function(type, what, _argument, first, last) {
          var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
          return first === 1 && last === 0 ? (
            // Shortcut for :nth-*(n)
            function(elem) {
              return !!elem.parentNode;
            }
          ) : function(elem, _context, xml) {
            var cache, outerCache, node, nodeIndex, start, dir = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = false;
            if (parent) {
              if (simple) {
                while (dir) {
                  node = elem;
                  while (node = node[dir]) {
                    if (ofType ? nodeName(node, name) : node.nodeType === 1) {
                      return false;
                    }
                  }
                  start = dir = type === "only" && !start && "nextSibling";
                }
                return true;
              }
              start = [forward ? parent.firstChild : parent.lastChild];
              if (forward && useCache) {
                outerCache = parent[jQuery.expando] || (parent[jQuery.expando] = {});
                cache = outerCache[type] || [];
                nodeIndex = cache[0] === dirruns && cache[1];
                diff = nodeIndex && cache[2];
                node = nodeIndex && parent.childNodes[nodeIndex];
                while (node = ++nodeIndex && node && node[dir] || // Fallback to seeking `elem` from the start
                (diff = nodeIndex = 0) || start.pop()) {
                  if (node.nodeType === 1 && ++diff && node === elem) {
                    outerCache[type] = [dirruns, nodeIndex, diff];
                    break;
                  }
                }
              } else {
                if (useCache) {
                  outerCache = elem[jQuery.expando] || (elem[jQuery.expando] = {});
                  cache = outerCache[type] || [];
                  nodeIndex = cache[0] === dirruns && cache[1];
                  diff = nodeIndex;
                }
                if (diff === false) {
                  while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
                    if ((ofType ? nodeName(node, name) : node.nodeType === 1) && ++diff) {
                      if (useCache) {
                        outerCache = node[jQuery.expando] || (node[jQuery.expando] = {});
                        outerCache[type] = [dirruns, diff];
                      }
                      if (node === elem) {
                        break;
                      }
                    }
                  }
                }
              }
              diff -= last;
              return diff === first || diff % first === 0 && diff / first >= 0;
            }
          };
        },
        PSEUDO: function(pseudo, argument) {
          var fn = jQuery.expr.pseudos[pseudo] || jQuery.expr.setFilters[pseudo.toLowerCase()] || selectorError("unsupported pseudo: " + pseudo);
          if (fn[jQuery.expando]) {
            return fn(argument);
          }
          return fn;
        }
      },
      pseudos: {
        // Potentially complex pseudos
        not: markFunction(function(selector) {
          var input = [], results = [], matcher = compile(selector.replace(rtrimCSS, "$1"));
          return matcher[jQuery.expando] ? markFunction(function(seed, matches3, _context, xml) {
            var elem, unmatched = matcher(seed, null, xml, []), i22 = seed.length;
            while (i22--) {
              if (elem = unmatched[i22]) {
                seed[i22] = !(matches3[i22] = elem);
              }
            }
          }) : function(elem, _context, xml) {
            input[0] = elem;
            matcher(input, null, xml, results);
            input[0] = null;
            return !results.pop();
          };
        }),
        has: markFunction(function(selector) {
          return function(elem) {
            return find(selector, elem).length > 0;
          };
        }),
        contains: markFunction(function(text) {
          text = unescapeSelector(text);
          return function(elem) {
            return (elem.textContent || jQuery.text(elem)).indexOf(text) > -1;
          };
        }),
        // "Whether an element is represented by a :lang() selector
        // is based solely on the element's language value
        // being equal to the identifier C,
        // or beginning with the identifier C immediately followed by "-".
        // The matching of C against the element's language value is performed case-insensitively.
        // The identifier C does not have to be a valid language name."
        // https://www.w3.org/TR/selectors/#lang-pseudo
        lang: markFunction(function(lang) {
          if (!ridentifier.test(lang || "")) {
            selectorError("unsupported lang: " + lang);
          }
          lang = unescapeSelector(lang).toLowerCase();
          return function(elem) {
            var elemLang;
            do {
              if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                elemLang = elemLang.toLowerCase();
                return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
              }
            } while ((elem = elem.parentNode) && elem.nodeType === 1);
            return false;
          };
        }),
        // Miscellaneous
        target: function(elem) {
          var hash = window2.location && window2.location.hash;
          return hash && hash.slice(1) === elem.id;
        },
        root: function(elem) {
          return elem === documentElement$1;
        },
        focus: function(elem) {
          return elem === document$1.activeElement && document$1.hasFocus() && !!(elem.type || elem.href || ~elem.tabIndex);
        },
        // Boolean properties
        enabled: createDisabledPseudo(false),
        disabled: createDisabledPseudo(true),
        checked: function(elem) {
          return nodeName(elem, "input") && !!elem.checked || nodeName(elem, "option") && !!elem.selected;
        },
        selected: function(elem) {
          if (isIE && elem.parentNode) {
            elem.parentNode.selectedIndex;
          }
          return elem.selected === true;
        },
        // Contents
        empty: function(elem) {
          for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
            if (elem.nodeType < 6) {
              return false;
            }
          }
          return true;
        },
        parent: function(elem) {
          return !jQuery.expr.pseudos.empty(elem);
        },
        // Element/input types
        header: function(elem) {
          return rheader.test(elem.nodeName);
        },
        input: function(elem) {
          return rinputs.test(elem.nodeName);
        },
        button: function(elem) {
          return nodeName(elem, "input") && elem.type === "button" || nodeName(elem, "button");
        },
        text: function(elem) {
          return nodeName(elem, "input") && elem.type === "text";
        },
        // Position-in-collection
        first: createPositionalPseudo(function() {
          return [0];
        }),
        last: createPositionalPseudo(function(_matchIndexes, length) {
          return [length - 1];
        }),
        eq: createPositionalPseudo(function(_matchIndexes, length, argument) {
          return [argument < 0 ? argument + length : argument];
        }),
        even: createPositionalPseudo(function(matchIndexes, length) {
          var i22 = 0;
          for (; i22 < length; i22 += 2) {
            matchIndexes.push(i22);
          }
          return matchIndexes;
        }),
        odd: createPositionalPseudo(function(matchIndexes, length) {
          var i22 = 1;
          for (; i22 < length; i22 += 2) {
            matchIndexes.push(i22);
          }
          return matchIndexes;
        }),
        lt: createPositionalPseudo(function(matchIndexes, length, argument) {
          var i22;
          if (argument < 0) {
            i22 = argument + length;
          } else if (argument > length) {
            i22 = length;
          } else {
            i22 = argument;
          }
          for (; --i22 >= 0; ) {
            matchIndexes.push(i22);
          }
          return matchIndexes;
        }),
        gt: createPositionalPseudo(function(matchIndexes, length, argument) {
          var i22 = argument < 0 ? argument + length : argument;
          for (; ++i22 < length; ) {
            matchIndexes.push(i22);
          }
          return matchIndexes;
        })
      }
    };
    jQuery.expr.pseudos.nth = jQuery.expr.pseudos.eq;
    for (i2 in { radio: true, checkbox: true, file: true, password: true, image: true }) {
      jQuery.expr.pseudos[i2] = createInputPseudo(i2);
    }
    for (i2 in { submit: true, reset: true }) {
      jQuery.expr.pseudos[i2] = createButtonPseudo(i2);
    }
    function setFilters() {
    }
    setFilters.prototype = jQuery.expr.filters = jQuery.expr.pseudos;
    jQuery.expr.setFilters = new setFilters();
    function addCombinator(matcher, combinator, base) {
      var dir = combinator.dir, skip = combinator.next, key = skip || dir, checkNonElements = base && key === "parentNode", doneName = done++;
      return combinator.first ? (
        // Check against closest ancestor/preceding element
        function(elem, context, xml) {
          while (elem = elem[dir]) {
            if (elem.nodeType === 1 || checkNonElements) {
              return matcher(elem, context, xml);
            }
          }
          return false;
        }
      ) : (
        // Check against all ancestor/preceding elements
        function(elem, context, xml) {
          var oldCache, outerCache, newCache = [dirruns, doneName];
          if (xml) {
            while (elem = elem[dir]) {
              if (elem.nodeType === 1 || checkNonElements) {
                if (matcher(elem, context, xml)) {
                  return true;
                }
              }
            }
          } else {
            while (elem = elem[dir]) {
              if (elem.nodeType === 1 || checkNonElements) {
                outerCache = elem[jQuery.expando] || (elem[jQuery.expando] = {});
                if (skip && nodeName(elem, skip)) {
                  elem = elem[dir] || elem;
                } else if ((oldCache = outerCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                  return newCache[2] = oldCache[2];
                } else {
                  outerCache[key] = newCache;
                  if (newCache[2] = matcher(elem, context, xml)) {
                    return true;
                  }
                }
              }
            }
          }
          return false;
        }
      );
    }
    function elementMatcher(matchers) {
      return matchers.length > 1 ? function(elem, context, xml) {
        var i22 = matchers.length;
        while (i22--) {
          if (!matchers[i22](elem, context, xml)) {
            return false;
          }
        }
        return true;
      } : matchers[0];
    }
    function multipleContexts(selector, contexts, results) {
      var i22 = 0, len = contexts.length;
      for (; i22 < len; i22++) {
        find(selector, contexts[i22], results);
      }
      return results;
    }
    function condense(unmatched, map2, filter, context, xml) {
      var elem, newUnmatched = [], i22 = 0, len = unmatched.length, mapped = map2 != null;
      for (; i22 < len; i22++) {
        if (elem = unmatched[i22]) {
          if (!filter || filter(elem, context, xml)) {
            newUnmatched.push(elem);
            if (mapped) {
              map2.push(i22);
            }
          }
        }
      }
      return newUnmatched;
    }
    function setMatcher(preFilter2, selector, matcher, postFilter, postFinder, postSelector) {
      if (postFilter && !postFilter[jQuery.expando]) {
        postFilter = setMatcher(postFilter);
      }
      if (postFinder && !postFinder[jQuery.expando]) {
        postFinder = setMatcher(postFinder, postSelector);
      }
      return markFunction(function(seed, results, context, xml) {
        var temp, i22, elem, matcherOut, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(
          selector || "*",
          context.nodeType ? [context] : context,
          []
        ), matcherIn = preFilter2 && (seed || !selector) ? condense(elems, preMap, preFilter2, context, xml) : elems;
        if (matcher) {
          matcherOut = postFinder || (seed ? preFilter2 : preexisting || postFilter) ? (
            // ...intermediate processing is necessary
            []
          ) : (
            // ...otherwise use results directly
            results
          );
          matcher(matcherIn, matcherOut, context, xml);
        } else {
          matcherOut = matcherIn;
        }
        if (postFilter) {
          temp = condense(matcherOut, postMap);
          postFilter(temp, [], context, xml);
          i22 = temp.length;
          while (i22--) {
            if (elem = temp[i22]) {
              matcherOut[postMap[i22]] = !(matcherIn[postMap[i22]] = elem);
            }
          }
        }
        if (seed) {
          if (postFinder || preFilter2) {
            if (postFinder) {
              temp = [];
              i22 = matcherOut.length;
              while (i22--) {
                if (elem = matcherOut[i22]) {
                  temp.push(matcherIn[i22] = elem);
                }
              }
              postFinder(null, matcherOut = [], temp, xml);
            }
            i22 = matcherOut.length;
            while (i22--) {
              if ((elem = matcherOut[i22]) && (temp = postFinder ? indexOf.call(seed, elem) : preMap[i22]) > -1) {
                seed[temp] = !(results[temp] = elem);
              }
            }
          }
        } else {
          matcherOut = condense(
            matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut
          );
          if (postFinder) {
            postFinder(null, results, matcherOut, xml);
          } else {
            push.apply(results, matcherOut);
          }
        }
      });
    }
    function matcherFromTokens(tokens) {
      var checkContext, matcher, j, len = tokens.length, leadingRelative = jQuery.expr.relative[tokens[0].type], implicitRelative = leadingRelative || jQuery.expr.relative[" "], i22 = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
        return elem === checkContext;
      }, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {
        return indexOf.call(checkContext, elem) > -1;
      }, implicitRelative, true), matchers = [function(elem, context, xml) {
        var ret = !leadingRelative && (xml || context != outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
        checkContext = null;
        return ret;
      }];
      for (; i22 < len; i22++) {
        if (matcher = jQuery.expr.relative[tokens[i22].type]) {
          matchers = [addCombinator(elementMatcher(matchers), matcher)];
        } else {
          matcher = jQuery.expr.filter[tokens[i22].type].apply(null, tokens[i22].matches);
          if (matcher[jQuery.expando]) {
            j = ++i22;
            for (; j < len; j++) {
              if (jQuery.expr.relative[tokens[j].type]) {
                break;
              }
            }
            return setMatcher(
              i22 > 1 && elementMatcher(matchers),
              i22 > 1 && toSelector(
                // If the preceding token was a descendant combinator, insert an implicit any-element `*`
                tokens.slice(0, i22 - 1).concat({ value: tokens[i22 - 2].type === " " ? "*" : "" })
              ).replace(rtrimCSS, "$1"),
              matcher,
              i22 < j && matcherFromTokens(tokens.slice(i22, j)),
              j < len && matcherFromTokens(tokens = tokens.slice(j)),
              j < len && toSelector(tokens)
            );
          }
          matchers.push(matcher);
        }
      }
      return elementMatcher(matchers);
    }
    function matcherFromGroupMatchers(elementMatchers, setMatchers) {
      var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, outermost) {
        var elem, j, matcher, matchedCount = 0, i22 = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && jQuery.expr.find.TAG("*", outermost), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1;
        if (outermost) {
          outermostContext = context == document$1 || context || outermost;
        }
        for (; (elem = elems[i22]) != null; i22++) {
          if (byElement && elem) {
            j = 0;
            if (!context && elem.ownerDocument != document$1) {
              setDocument(elem);
              xml = !documentIsHTML;
            }
            while (matcher = elementMatchers[j++]) {
              if (matcher(elem, context || document$1, xml)) {
                push.call(results, elem);
                break;
              }
            }
            if (outermost) {
              dirruns = dirrunsUnique;
            }
          }
          if (bySet) {
            if (elem = !matcher && elem) {
              matchedCount--;
            }
            if (seed) {
              unmatched.push(elem);
            }
          }
        }
        matchedCount += i22;
        if (bySet && i22 !== matchedCount) {
          j = 0;
          while (matcher = setMatchers[j++]) {
            matcher(unmatched, setMatched, context, xml);
          }
          if (seed) {
            if (matchedCount > 0) {
              while (i22--) {
                if (!(unmatched[i22] || setMatched[i22])) {
                  setMatched[i22] = pop.call(results);
                }
              }
            }
            setMatched = condense(setMatched);
          }
          push.apply(results, setMatched);
          if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
            jQuery.uniqueSort(results);
          }
        }
        if (outermost) {
          dirruns = dirrunsUnique;
          outermostContext = contextBackup;
        }
        return unmatched;
      };
      return bySet ? markFunction(superMatcher) : superMatcher;
    }
    function compile(selector, match) {
      var i22, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
      if (!cached) {
        if (!match) {
          match = tokenize(selector);
        }
        i22 = match.length;
        while (i22--) {
          cached = matcherFromTokens(match[i22]);
          if (cached[jQuery.expando]) {
            setMatchers.push(cached);
          } else {
            elementMatchers.push(cached);
          }
        }
        cached = compilerCache(
          selector,
          matcherFromGroupMatchers(elementMatchers, setMatchers)
        );
        cached.selector = selector;
      }
      return cached;
    }
    function select(selector, context, results, seed) {
      var i22, tokens, token, type, find2, compiled = typeof selector === "function" && selector, match = !seed && tokenize(selector = compiled.selector || selector);
      results = results || [];
      if (match.length === 1) {
        tokens = match[0] = match[0].slice(0);
        if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && jQuery.expr.relative[tokens[1].type]) {
          context = (jQuery.expr.find.ID(
            unescapeSelector(token.matches[0]),
            context
          ) || [])[0];
          if (!context) {
            return results;
          } else if (compiled) {
            context = context.parentNode;
          }
          selector = selector.slice(tokens.shift().value.length);
        }
        i22 = matchExpr.needsContext.test(selector) ? 0 : tokens.length;
        while (i22--) {
          token = tokens[i22];
          if (jQuery.expr.relative[type = token.type]) {
            break;
          }
          if (find2 = jQuery.expr.find[type]) {
            if (seed = find2(
              unescapeSelector(token.matches[0]),
              rsibling.test(tokens[0].type) && testContext(context.parentNode) || context
            )) {
              tokens.splice(i22, 1);
              selector = seed.length && toSelector(tokens);
              if (!selector) {
                push.apply(results, seed);
                return results;
              }
              break;
            }
          }
        }
      }
      (compiled || compile(selector, match))(
        seed,
        context,
        !documentIsHTML,
        results,
        !context || rsibling.test(selector) && testContext(context.parentNode) || context
      );
      return results;
    }
    setDocument();
    jQuery.find = find;
    find.compile = compile;
    find.select = select;
    find.setDocument = setDocument;
    find.tokenize = tokenize;
    return jQuery;
  })
);
function matches(selector, elm) {
  try {
    const r = jquery_default.find(selector, void 0, void 0, [elm]);
    return r.length > 0;
  } catch (e2) {
    updateSelectorError(selector, e2);
    throw e2;
  }
}
function selectOne(selector, elm) {
  try {
    const r = jquery_default.find(selector, elm, void 0, void 0);
    return r[0] || null;
  } catch (e2) {
    updateSelectorError(selector, e2);
    throw e2;
  }
}
function selectAll(selector, elm) {
  try {
    return jquery_default.find(selector, elm, void 0, void 0);
  } catch (e2) {
    updateSelectorError(selector, e2);
    throw e2;
  }
}
var PROBLEMATIC_SELECTORS = [":scope", ":where", ":is"];
function updateSelectorError(selector, e2) {
  const selectorsPresent = PROBLEMATIC_SELECTORS.filter((s) => selector.includes(s));
  if (selectorsPresent.length > 0 && e2.message) {
    e2.message = `At present jQuery does not support the ${humanReadableList(selectorsPresent)} ${selectorsPresent.length === 1 ? "selector" : "selectors"}.
If you need this in your test, consider writing an end-to-end test instead.
` + e2.message;
  }
}
function humanReadableList(items) {
  if (items.length <= 1) {
    return items.join("");
  }
  return `${items.slice(0, items.length - 1).join(", ")} and ${items[items.length - 1]}`;
}
function serializeNodeToHtml(elm, opts = {}) {
  const output = {
    currentLineWidth: 0,
    indent: 0,
    isWithinBody: false,
    text: []
  };
  if (opts.prettyHtml) {
    if (typeof opts.indentSpaces !== "number") {
      opts.indentSpaces = 2;
    }
    if (typeof opts.newLines !== "boolean") {
      opts.newLines = true;
    }
    opts.approximateLineWidth = -1;
  } else {
    opts.prettyHtml = false;
    if (typeof opts.newLines !== "boolean") {
      opts.newLines = false;
    }
    if (typeof opts.indentSpaces !== "number") {
      opts.indentSpaces = 0;
    }
  }
  if (typeof opts.approximateLineWidth !== "number") {
    opts.approximateLineWidth = -1;
  }
  if (typeof opts.removeEmptyAttributes !== "boolean") {
    opts.removeEmptyAttributes = true;
  }
  if (typeof opts.removeAttributeQuotes !== "boolean") {
    opts.removeAttributeQuotes = false;
  }
  if (typeof opts.removeBooleanAttributeQuotes !== "boolean") {
    opts.removeBooleanAttributeQuotes = false;
  }
  if (typeof opts.removeHtmlComments !== "boolean") {
    opts.removeHtmlComments = false;
  }
  if (typeof opts.serializeShadowRoot !== "boolean") {
    opts.serializeShadowRoot = false;
  }
  if (opts.outerHtml) {
    serializeToHtml(elm, opts, output, false);
  } else {
    for (let i2 = 0, ii = elm.childNodes.length; i2 < ii; i2++) {
      serializeToHtml(elm.childNodes[i2], opts, output, false);
    }
  }
  if (output.text[0] === "\n") {
    output.text.shift();
  }
  if (output.text[output.text.length - 1] === "\n") {
    output.text.pop();
  }
  return output.text.join("");
}
function serializeToHtml(node, opts, output, isShadowRoot) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
  if (node.nodeType === 1 || isShadowRoot) {
    const tagName = isShadowRoot ? "mock:shadow-root" : getTagName(node);
    if (tagName === "body") {
      output.isWithinBody = true;
    }
    const ignoreTag = opts.excludeTags != null && opts.excludeTags.includes(tagName);
    if (ignoreTag === false) {
      const isWithinWhitespaceSensitiveNode = opts.newLines || ((_a = opts.indentSpaces) != null ? _a : 0) > 0 ? isWithinWhitespaceSensitive(node) : false;
      if (opts.newLines && !isWithinWhitespaceSensitiveNode) {
        output.text.push("\n");
        output.currentLineWidth = 0;
      }
      if (((_b = opts.indentSpaces) != null ? _b : 0) > 0 && !isWithinWhitespaceSensitiveNode) {
        for (let i2 = 0; i2 < output.indent; i2++) {
          output.text.push(" ");
        }
        output.currentLineWidth += output.indent;
      }
      output.text.push("<" + tagName);
      output.currentLineWidth += tagName.length + 1;
      const attrsLength = node.attributes.length;
      const attributes = opts.prettyHtml && attrsLength > 1 ? cloneAttributes(node.attributes, true) : node.attributes;
      for (let i2 = 0; i2 < attrsLength; i2++) {
        const attr = attributes.item(i2);
        const attrName = attr.name;
        if (attrName === "style") {
          continue;
        }
        let attrValue = attr.value;
        if (opts.removeEmptyAttributes && attrValue === "" && REMOVE_EMPTY_ATTR.has(attrName)) {
          continue;
        }
        const attrNamespaceURI = attr.namespaceURI;
        if (attrNamespaceURI == null) {
          output.currentLineWidth += attrName.length + 1;
          if (opts.approximateLineWidth && opts.approximateLineWidth > 0 && output.currentLineWidth > opts.approximateLineWidth) {
            output.text.push("\n" + attrName);
            output.currentLineWidth = 0;
          } else {
            output.text.push(" " + attrName);
          }
        } else if (attrNamespaceURI === "http://www.w3.org/XML/1998/namespace") {
          output.text.push(" xml:" + attrName);
          output.currentLineWidth += attrName.length + 5;
        } else if (attrNamespaceURI === "http://www.w3.org/2000/xmlns/") {
          if (attrName !== "xmlns") {
            output.text.push(" xmlns:" + attrName);
            output.currentLineWidth += attrName.length + 7;
          } else {
            output.text.push(" " + attrName);
            output.currentLineWidth += attrName.length + 1;
          }
        } else if (attrNamespaceURI === XLINK_NS) {
          output.text.push(" xlink:" + attrName);
          output.currentLineWidth += attrName.length + 7;
        } else {
          output.text.push(" " + attrNamespaceURI + ":" + attrName);
          output.currentLineWidth += attrNamespaceURI.length + attrName.length + 2;
        }
        if (opts.prettyHtml && attrName === "class") {
          attrValue = attr.value = attrValue.split(" ").filter((t) => t !== "").sort().join(" ").trim();
        }
        if (attrValue === "") {
          if (opts.removeBooleanAttributeQuotes && BOOLEAN_ATTR.has(attrName)) {
            continue;
          }
          if (opts.removeEmptyAttributes && attrName.startsWith("data-")) {
            continue;
          }
        }
        if (opts.removeAttributeQuotes && CAN_REMOVE_ATTR_QUOTES.test(attrValue)) {
          output.text.push("=" + escapeString(attrValue, true));
          output.currentLineWidth += attrValue.length + 1;
        } else {
          output.text.push('="' + escapeString(attrValue, true) + '"');
          output.currentLineWidth += attrValue.length + 3;
        }
      }
      if (node.hasAttribute("style")) {
        const cssText = node.style.cssText;
        if (opts.approximateLineWidth && opts.approximateLineWidth > 0 && output.currentLineWidth + cssText.length + 10 > opts.approximateLineWidth) {
          output.text.push(`
style="${cssText}">`);
          output.currentLineWidth = 0;
        } else {
          output.text.push(` style="${cssText}">`);
          output.currentLineWidth += cssText.length + 10;
        }
      } else {
        output.text.push(">");
        output.currentLineWidth += 1;
      }
    }
    if (EMPTY_ELEMENTS.has(tagName) === false) {
      if (opts.serializeShadowRoot && node.shadowRoot != null) {
        output.indent = output.indent + ((_c = opts.indentSpaces) != null ? _c : 0);
        serializeToHtml(node.shadowRoot, opts, output, true);
        output.indent = output.indent - ((_d = opts.indentSpaces) != null ? _d : 0);
        if (opts.newLines && (node.childNodes.length === 0 || node.childNodes.length === 1 && node.childNodes[0].nodeType === 3 && ((_e = node.childNodes[0].nodeValue) == null ? void 0 : _e.trim()) === "")) {
          output.text.push("\n");
          output.currentLineWidth = 0;
          for (let i2 = 0; i2 < output.indent; i2++) {
            output.text.push(" ");
          }
          output.currentLineWidth += output.indent;
        }
      }
      if (opts.excludeTagContent == null || opts.excludeTagContent.includes(tagName) === false) {
        const childNodes = tagName === "template" ? node.content.childNodes : node.childNodes;
        const childNodeLength = childNodes.length;
        if (childNodeLength > 0) {
          if (childNodeLength === 1 && childNodes[0].nodeType === 3 && (typeof childNodes[0].nodeValue !== "string" || childNodes[0].nodeValue.trim() === "")) {
          } else {
            const isWithinWhitespaceSensitiveNode = opts.newLines || ((_f = opts.indentSpaces) != null ? _f : 0) > 0 ? isWithinWhitespaceSensitive(node) : false;
            if (!isWithinWhitespaceSensitiveNode && ((_g = opts.indentSpaces) != null ? _g : 0) > 0 && ignoreTag === false) {
              output.indent = output.indent + ((_h = opts.indentSpaces) != null ? _h : 0);
            }
            for (let i2 = 0; i2 < childNodeLength; i2++) {
              serializeToHtml(childNodes[i2], opts, output, false);
            }
            if (ignoreTag === false) {
              if (opts.newLines && !isWithinWhitespaceSensitiveNode) {
                output.text.push("\n");
                output.currentLineWidth = 0;
              }
              if (((_i = opts.indentSpaces) != null ? _i : 0) > 0 && !isWithinWhitespaceSensitiveNode) {
                output.indent = output.indent - ((_j = opts.indentSpaces) != null ? _j : 0);
                for (let i2 = 0; i2 < output.indent; i2++) {
                  output.text.push(" ");
                }
                output.currentLineWidth += output.indent;
              }
            }
          }
        }
        if (ignoreTag === false) {
          output.text.push("</" + tagName + ">");
          output.currentLineWidth += tagName.length + 3;
        }
      }
    }
    if (((_k = opts.approximateLineWidth) != null ? _k : 0) > 0 && STRUCTURE_ELEMENTS.has(tagName)) {
      output.text.push("\n");
      output.currentLineWidth = 0;
    }
    if (tagName === "body") {
      output.isWithinBody = false;
    }
  } else if (node.nodeType === 3) {
    let textContent = node.nodeValue;
    if (typeof textContent === "string") {
      const trimmedTextContent = textContent.trim();
      if (trimmedTextContent === "") {
        if (isWithinWhitespaceSensitive(node)) {
          output.text.push(textContent);
          output.currentLineWidth += textContent.length;
        } else if (((_l = opts.approximateLineWidth) != null ? _l : 0) > 0 && !output.isWithinBody) {
        } else if (!opts.prettyHtml) {
          output.currentLineWidth += 1;
          if (opts.approximateLineWidth && opts.approximateLineWidth > 0 && output.currentLineWidth > opts.approximateLineWidth) {
            output.text.push("\n");
            output.currentLineWidth = 0;
          } else {
            output.text.push(" ");
          }
        }
      } else {
        const isWithinWhitespaceSensitiveNode = opts.newLines || ((_m = opts.indentSpaces) != null ? _m : 0) > 0 || opts.prettyHtml ? isWithinWhitespaceSensitive(node) : false;
        if (opts.newLines && !isWithinWhitespaceSensitiveNode) {
          output.text.push("\n");
          output.currentLineWidth = 0;
        }
        if (((_n = opts.indentSpaces) != null ? _n : 0) > 0 && !isWithinWhitespaceSensitiveNode) {
          for (let i2 = 0; i2 < output.indent; i2++) {
            output.text.push(" ");
          }
          output.currentLineWidth += output.indent;
        }
        let textContentLength = textContent.length;
        if (textContentLength > 0) {
          const parentTagName = node.parentNode != null && node.parentNode.nodeType === 1 ? node.parentNode.nodeName : null;
          if (typeof parentTagName === "string" && NON_ESCAPABLE_CONTENT.has(parentTagName)) {
            if (isWithinWhitespaceSensitive(node)) {
              output.text.push(textContent);
            } else {
              output.text.push(trimmedTextContent);
              textContentLength = trimmedTextContent.length;
            }
            output.currentLineWidth += textContentLength;
          } else {
            if (opts.prettyHtml && !isWithinWhitespaceSensitiveNode) {
              output.text.push(escapeString(textContent.replace(/\s\s+/g, " ").trim(), false));
              output.currentLineWidth += textContentLength;
            } else {
              if (isWithinWhitespaceSensitive(node)) {
                output.currentLineWidth += textContentLength;
              } else {
                if (/\s/.test(textContent.charAt(0))) {
                  textContent = " " + textContent.trimLeft();
                }
                textContentLength = textContent.length;
                if (textContentLength > 1) {
                  if (/\s/.test(textContent.charAt(textContentLength - 1))) {
                    if (opts.approximateLineWidth && opts.approximateLineWidth > 0 && output.currentLineWidth + textContentLength > opts.approximateLineWidth) {
                      textContent = textContent.trimRight() + "\n";
                      output.currentLineWidth = 0;
                    } else {
                      textContent = textContent.trimRight() + " ";
                    }
                  }
                }
                output.currentLineWidth += textContentLength;
              }
              output.text.push(escapeString(textContent, false));
            }
          }
        }
      }
    }
  } else if (node.nodeType === 8) {
    const nodeValue = node.nodeValue;
    if (opts.removeHtmlComments) {
      const isHydrateAnnotation = (nodeValue == null ? void 0 : nodeValue.startsWith(CONTENT_REF_ID + ".")) || (nodeValue == null ? void 0 : nodeValue.startsWith(ORG_LOCATION_ID + ".")) || (nodeValue == null ? void 0 : nodeValue.startsWith(SLOT_NODE_ID + ".")) || (nodeValue == null ? void 0 : nodeValue.startsWith(TEXT_NODE_ID + "."));
      if (!isHydrateAnnotation) {
        return;
      }
    }
    const isWithinWhitespaceSensitiveNode = opts.newLines || ((_o = opts.indentSpaces) != null ? _o : 0) > 0 ? isWithinWhitespaceSensitive(node) : false;
    if (opts.newLines && !isWithinWhitespaceSensitiveNode) {
      output.text.push("\n");
      output.currentLineWidth = 0;
    }
    if (((_p = opts.indentSpaces) != null ? _p : 0) > 0 && !isWithinWhitespaceSensitiveNode) {
      for (let i2 = 0; i2 < output.indent; i2++) {
        output.text.push(" ");
      }
      output.currentLineWidth += output.indent;
    }
    output.text.push("<!--" + nodeValue + "-->");
    output.currentLineWidth += nodeValue.length + 7;
  } else if (node.nodeType === 10) {
    output.text.push("<!doctype html>");
  }
}
var AMP_REGEX = /&/g;
var NBSP_REGEX = /\u00a0/g;
var DOUBLE_QUOTE_REGEX = /"/g;
var LT_REGEX = /</g;
var GT_REGEX = />/g;
var CAN_REMOVE_ATTR_QUOTES = /^[^ \t\n\f\r"'`=<>\/\\-]+$/;
function getTagName(element) {
  if (element.namespaceURI === "http://www.w3.org/1999/xhtml") {
    return element.nodeName.toLowerCase();
  } else {
    return element.nodeName;
  }
}
function escapeString(str, attrMode) {
  str = str.replace(AMP_REGEX, "&amp;").replace(NBSP_REGEX, "&nbsp;");
  if (attrMode) {
    return str.replace(DOUBLE_QUOTE_REGEX, "&quot;");
  }
  return str.replace(LT_REGEX, "&lt;").replace(GT_REGEX, "&gt;");
}
function isWithinWhitespaceSensitive(node) {
  let _node = node;
  while (_node != null) {
    if (WHITESPACE_SENSITIVE.has(_node.nodeName)) {
      return true;
    }
    _node = _node.parentNode;
  }
  return false;
}
var NON_ESCAPABLE_CONTENT = /* @__PURE__ */ new Set([
  "STYLE",
  "SCRIPT",
  "IFRAME",
  "NOSCRIPT",
  "XMP",
  "NOEMBED",
  "NOFRAMES",
  "PLAINTEXT"
]);
var WHITESPACE_SENSITIVE = /* @__PURE__ */ new Set([
  "CODE",
  "OUTPUT",
  "PLAINTEXT",
  "PRE",
  "SCRIPT",
  "TEMPLATE",
  "TEXTAREA"
]);
var EMPTY_ELEMENTS = /* @__PURE__ */ new Set([
  "area",
  "base",
  "basefont",
  "bgsound",
  "br",
  "col",
  "embed",
  "frame",
  "hr",
  "img",
  "input",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "trace",
  "wbr"
]);
var REMOVE_EMPTY_ATTR = /* @__PURE__ */ new Set(["class", "dir", "id", "lang", "name", "title"]);
var BOOLEAN_ATTR = /* @__PURE__ */ new Set([
  "allowfullscreen",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "compact",
  "controls",
  "declare",
  "default",
  "defaultchecked",
  "defaultmuted",
  "defaultselected",
  "defer",
  "disabled",
  "enabled",
  "formnovalidate",
  "hidden",
  "indeterminate",
  "inert",
  "ismap",
  "itemscope",
  "loop",
  "multiple",
  "muted",
  "nohref",
  "nomodule",
  "noresize",
  "noshade",
  "novalidate",
  "nowrap",
  "open",
  "pauseonexit",
  "readonly",
  "required",
  "reversed",
  "scoped",
  "seamless",
  "selected",
  "sortable",
  "truespeed",
  "typemustmatch",
  "visible"
]);
var STRUCTURE_ELEMENTS = /* @__PURE__ */ new Set([
  "html",
  "body",
  "head",
  "iframe",
  "meta",
  "link",
  "base",
  "title",
  "script",
  "style"
]);
var MockNode2 = class {
  constructor(ownerDocument, nodeType, nodeName, nodeValue) {
    this.ownerDocument = ownerDocument;
    this.nodeType = nodeType;
    this.nodeName = nodeName;
    this._nodeValue = nodeValue;
    this.parentNode = null;
    this.childNodes = [];
  }
  appendChild(newNode) {
    if (newNode.nodeType === 11) {
      const nodes = newNode.childNodes.slice();
      for (const child of nodes) {
        this.appendChild(child);
      }
    } else {
      newNode.remove();
      newNode.parentNode = this;
      this.childNodes.push(newNode);
      connectNode(this.ownerDocument, newNode);
    }
    return newNode;
  }
  append(...items) {
    items.forEach((item) => {
      const isNode = typeof item === "object" && item !== null && "nodeType" in item;
      this.appendChild(isNode ? item : this.ownerDocument.createTextNode(String(item)));
    });
  }
  prepend(...items) {
    const firstChild = this.firstChild;
    items.forEach((item) => {
      const isNode = typeof item === "object" && item !== null && "nodeType" in item;
      if (firstChild) {
        this.insertBefore(isNode ? item : this.ownerDocument.createTextNode(String(item)), firstChild);
      }
    });
  }
  cloneNode(deep) {
    throw new Error(`invalid node type to clone: ${this.nodeType}, deep: ${deep}`);
  }
  compareDocumentPosition(_other) {
    return -1;
  }
  get firstChild() {
    return this.childNodes[0] || null;
  }
  insertBefore(newNode, referenceNode2) {
    if (newNode.nodeType === 11) {
      for (let i2 = 0, ii = newNode.childNodes.length; i2 < ii; i2++) {
        insertBefore(this, newNode.childNodes[i2], referenceNode2);
      }
    } else {
      insertBefore(this, newNode, referenceNode2);
    }
    return newNode;
  }
  get isConnected() {
    let node = this;
    while (node != null) {
      if (node.nodeType === 9) {
        return true;
      }
      node = node.parentNode;
      if (node != null && node.nodeType === 11) {
        node = node.host;
      }
    }
    return false;
  }
  isSameNode(node) {
    return this === node;
  }
  get lastChild() {
    return this.childNodes[this.childNodes.length - 1] || null;
  }
  get nextSibling() {
    if (this.parentNode != null) {
      const index = this.parentNode.childNodes.indexOf(this) + 1;
      return this.parentNode.childNodes[index] || null;
    }
    return null;
  }
  get nodeValue() {
    var _a;
    return (_a = this._nodeValue) != null ? _a : "";
  }
  set nodeValue(value) {
    this._nodeValue = value;
  }
  get parentElement() {
    return this.parentNode || null;
  }
  set parentElement(value) {
    this.parentNode = value;
  }
  get previousSibling() {
    if (this.parentNode != null) {
      const index = this.parentNode.childNodes.indexOf(this) - 1;
      return this.parentNode.childNodes[index] || null;
    }
    return null;
  }
  contains(otherNode) {
    if (otherNode === this) {
      return true;
    }
    const childNodes = Array.from(this.childNodes);
    if (childNodes.includes(otherNode)) {
      return true;
    }
    return childNodes.some((node) => this.contains.bind(node)(otherNode));
  }
  removeChild(childNode) {
    const index = this.childNodes.indexOf(childNode);
    if (index > -1) {
      this.childNodes.splice(index, 1);
      if (this.nodeType === 1) {
        const wasConnected = this.isConnected;
        childNode.parentNode = null;
        if (wasConnected === true) {
          disconnectNode(childNode);
        }
      } else {
        childNode.parentNode = null;
      }
    } else {
      throw new Error(`node not found within childNodes during removeChild`);
    }
    return childNode;
  }
  remove() {
    if (this.parentNode != null) {
      this.parentNode.removeChild(this);
    }
  }
  replaceChild(newChild, oldChild) {
    if (oldChild.parentNode === this) {
      this.insertBefore(newChild, oldChild);
      oldChild.remove();
      return newChild;
    }
    return null;
  }
  get textContent() {
    var _a;
    return (_a = this._nodeValue) != null ? _a : "";
  }
  set textContent(value) {
    this._nodeValue = String(value);
  }
};
MockNode2.ELEMENT_NODE = 1;
MockNode2.TEXT_NODE = 3;
MockNode2.PROCESSING_INSTRUCTION_NODE = 7;
MockNode2.COMMENT_NODE = 8;
MockNode2.DOCUMENT_NODE = 9;
MockNode2.DOCUMENT_TYPE_NODE = 10;
MockNode2.DOCUMENT_FRAGMENT_NODE = 11;
var MockNodeList = class {
  constructor(ownerDocument, childNodes, length) {
    this.ownerDocument = ownerDocument;
    this.childNodes = childNodes;
    this.length = length;
  }
};
var MockElement = class extends MockNode2 {
  attachInternals() {
    return new Proxy({}, {
      get: function(_target, prop, _receiver) {
        console.error(
          `NOTE: Property ${String(prop)} was accessed on ElementInternals, but this property is not implemented.
Testing components with ElementInternals is fully supported in e2e tests.`
        );
      }
    });
  }
  constructor(ownerDocument, nodeName, namespaceURI = null) {
    super(ownerDocument, 1, typeof nodeName === "string" ? nodeName : null, null);
    this.__namespaceURI = namespaceURI;
    this.__shadowRoot = null;
    this.__attributeMap = null;
  }
  addEventListener(type, handler) {
    addEventListener(this, type, handler);
  }
  attachShadow(_opts) {
    const shadowRoot = this.ownerDocument.createDocumentFragment();
    this.shadowRoot = shadowRoot;
    return shadowRoot;
  }
  blur() {
    dispatchEvent(
      this,
      new MockFocusEvent("blur", { relatedTarget: null, bubbles: true, cancelable: true, composed: true })
    );
  }
  get localName() {
    if (!this.nodeName) {
      throw new Error(`Can't compute elements localName without nodeName`);
    }
    return this.nodeName.toLocaleLowerCase();
  }
  get namespaceURI() {
    return this.__namespaceURI;
  }
  get shadowRoot() {
    return this.__shadowRoot || null;
  }
  set shadowRoot(shadowRoot) {
    if (shadowRoot != null) {
      shadowRoot.host = this;
      this.__shadowRoot = shadowRoot;
    } else {
      delete this.__shadowRoot;
    }
  }
  get attributes() {
    if (this.__attributeMap == null) {
      const attrMap = createAttributeProxy(false);
      this.__attributeMap = attrMap;
      return attrMap;
    }
    return this.__attributeMap;
  }
  set attributes(attrs) {
    this.__attributeMap = attrs;
  }
  get children() {
    return this.childNodes.filter(
      (n) => n.nodeType === 1
      /* ELEMENT_NODE */
    );
  }
  get childElementCount() {
    return this.childNodes.filter(
      (n) => n.nodeType === 1
      /* ELEMENT_NODE */
    ).length;
  }
  get className() {
    return this.getAttributeNS(null, "class") || "";
  }
  set className(value) {
    this.setAttributeNS(null, "class", value);
  }
  get classList() {
    return new MockClassList(this);
  }
  click() {
    dispatchEvent(this, new MockEvent("click", { bubbles: true, cancelable: true, composed: true }));
  }
  cloneNode(_deep) {
    return null;
  }
  closest(selector) {
    let elm = this;
    while (elm != null) {
      if (elm.matches(selector)) {
        return elm;
      }
      elm = elm.parentNode;
    }
    return null;
  }
  get dataset() {
    return dataset(this);
  }
  get dir() {
    return this.getAttributeNS(null, "dir") || "";
  }
  set dir(value) {
    this.setAttributeNS(null, "dir", value);
  }
  dispatchEvent(ev) {
    return dispatchEvent(this, ev);
  }
  get firstElementChild() {
    return this.children[0] || null;
  }
  focus(_options) {
    dispatchEvent(
      this,
      new MockFocusEvent("focus", { relatedTarget: null, bubbles: true, cancelable: true, composed: true })
    );
  }
  getAttribute(attrName) {
    if (attrName === "style") {
      if (this.__style != null && this.__style.length > 0) {
        return this.style.cssText;
      }
      return null;
    }
    const attr = this.attributes.getNamedItem(attrName);
    if (attr != null) {
      return attr.value;
    }
    return null;
  }
  getAttributeNS(namespaceURI, attrName) {
    const attr = this.attributes.getNamedItemNS(namespaceURI, attrName);
    if (attr != null) {
      return attr.value;
    }
    return null;
  }
  getAttributeNode(attrName) {
    if (!this.hasAttribute(attrName)) {
      return null;
    }
    return new MockAttr(attrName, this.getAttribute(attrName));
  }
  getBoundingClientRect() {
    return { bottom: 0, height: 0, left: 0, right: 0, top: 0, width: 0, x: 0, y: 0 };
  }
  getRootNode(opts) {
    const isComposed = opts != null && opts.composed === true;
    let node = this;
    while (node.parentNode != null) {
      node = node.parentNode;
      if (isComposed === true && node.parentNode == null && node.host != null) {
        node = node.host;
      }
    }
    return node;
  }
  get draggable() {
    return this.getAttributeNS(null, "draggable") === "true";
  }
  set draggable(value) {
    this.setAttributeNS(null, "draggable", value);
  }
  hasChildNodes() {
    return this.childNodes.length > 0;
  }
  get id() {
    return this.getAttributeNS(null, "id") || "";
  }
  set id(value) {
    this.setAttributeNS(null, "id", value);
  }
  get innerHTML() {
    if (this.childNodes.length === 0) {
      return "";
    }
    return serializeNodeToHtml(this, {
      newLines: false,
      indentSpaces: 0
    });
  }
  set innerHTML(html) {
    var _a;
    if (NON_ESCAPABLE_CONTENT.has((_a = this.nodeName) != null ? _a : "") === true) {
      setTextContent(this, html);
    } else {
      for (let i2 = this.childNodes.length - 1; i2 >= 0; i2--) {
        this.removeChild(this.childNodes[i2]);
      }
      if (typeof html === "string") {
        const frag = parseFragmentUtil(this.ownerDocument, html);
        while (frag.childNodes.length > 0) {
          this.appendChild(frag.childNodes[0]);
        }
      }
    }
  }
  get innerText() {
    const text = [];
    getTextContent(this.childNodes, text);
    return text.join("");
  }
  set innerText(value) {
    setTextContent(this, value);
  }
  insertAdjacentElement(position, elm) {
    if (position === "beforebegin") {
      insertBefore(this.parentNode, elm, this);
    } else if (position === "afterbegin") {
      this.prepend(elm);
    } else if (position === "beforeend") {
      this.appendChild(elm);
    } else if (position === "afterend") {
      insertBefore(this.parentNode, elm, this.nextSibling);
    }
    return elm;
  }
  insertAdjacentHTML(position, html) {
    const frag = parseFragmentUtil(this.ownerDocument, html);
    if (position === "beforebegin") {
      while (frag.childNodes.length > 0) {
        insertBefore(this.parentNode, frag.childNodes[0], this);
      }
    } else if (position === "afterbegin") {
      while (frag.childNodes.length > 0) {
        this.prepend(frag.childNodes[frag.childNodes.length - 1]);
      }
    } else if (position === "beforeend") {
      while (frag.childNodes.length > 0) {
        this.appendChild(frag.childNodes[0]);
      }
    } else if (position === "afterend") {
      while (frag.childNodes.length > 0) {
        insertBefore(this.parentNode, frag.childNodes[frag.childNodes.length - 1], this.nextSibling);
      }
    }
  }
  insertAdjacentText(position, text) {
    const elm = this.ownerDocument.createTextNode(text);
    if (position === "beforebegin") {
      insertBefore(this.parentNode, elm, this);
    } else if (position === "afterbegin") {
      this.prepend(elm);
    } else if (position === "beforeend") {
      this.appendChild(elm);
    } else if (position === "afterend") {
      insertBefore(this.parentNode, elm, this.nextSibling);
    }
  }
  hasAttribute(attrName) {
    if (attrName === "style") {
      return this.__style != null && this.__style.length > 0;
    }
    return this.getAttribute(attrName) !== null;
  }
  hasAttributeNS(namespaceURI, name) {
    return this.getAttributeNS(namespaceURI, name) !== null;
  }
  get hidden() {
    return this.hasAttributeNS(null, "hidden");
  }
  set hidden(isHidden) {
    if (isHidden === true) {
      this.setAttributeNS(null, "hidden", "");
    } else {
      this.removeAttributeNS(null, "hidden");
    }
  }
  get lang() {
    return this.getAttributeNS(null, "lang") || "";
  }
  set lang(value) {
    this.setAttributeNS(null, "lang", value);
  }
  get lastElementChild() {
    const children = this.children;
    return children[children.length - 1] || null;
  }
  matches(selector) {
    return matches(selector, this);
  }
  get nextElementSibling() {
    const parentElement = this.parentElement;
    if (parentElement != null && (parentElement.nodeType === 1 || parentElement.nodeType === 11 || parentElement.nodeType === 9)) {
      const children = parentElement.children;
      const index = children.indexOf(this) + 1;
      return parentElement.children[index] || null;
    }
    return null;
  }
  get outerHTML() {
    return serializeNodeToHtml(this, {
      newLines: false,
      outerHtml: true,
      indentSpaces: 0
    });
  }
  get previousElementSibling() {
    const parentElement = this.parentElement;
    if (parentElement != null && (parentElement.nodeType === 1 || parentElement.nodeType === 11 || parentElement.nodeType === 9)) {
      const children = parentElement.children;
      const index = children.indexOf(this) - 1;
      return parentElement.children[index] || null;
    }
    return null;
  }
  getElementsByClassName(classNames) {
    const classes = classNames.trim().split(" ").filter((c) => c.length > 0);
    const results = [];
    getElementsByClassName(this, classes, results);
    return results;
  }
  getElementsByTagName(tagName) {
    const results = [];
    getElementsByTagName(this, tagName.toLowerCase(), results);
    return results;
  }
  querySelector(selector) {
    return selectOne(selector, this);
  }
  querySelectorAll(selector) {
    return selectAll(selector, this);
  }
  removeAttribute(attrName) {
    if (attrName === "style") {
      delete this.__style;
    } else {
      const attr = this.attributes.getNamedItem(attrName);
      if (attr != null) {
        this.attributes.removeNamedItemNS(attr);
        if (checkAttributeChanged(this) === true) {
          attributeChanged(this, attrName, attr.value, null);
        }
      }
    }
  }
  removeAttributeNS(namespaceURI, attrName) {
    const attr = this.attributes.getNamedItemNS(namespaceURI, attrName);
    if (attr != null) {
      this.attributes.removeNamedItemNS(attr);
      if (checkAttributeChanged(this) === true) {
        attributeChanged(this, attrName, attr.value, null);
      }
    }
  }
  removeEventListener(type, handler) {
    removeEventListener(this, type, handler);
  }
  setAttribute(attrName, value) {
    if (attrName === "style") {
      this.style = value;
    } else {
      const attributes = this.attributes;
      let attr = attributes.getNamedItem(attrName);
      const checkAttrChanged = checkAttributeChanged(this);
      if (attr != null) {
        if (checkAttrChanged === true) {
          const oldValue = attr.value;
          attr.value = value;
          if (oldValue !== attr.value) {
            attributeChanged(this, attr.name, oldValue, attr.value);
          }
        } else {
          attr.value = value;
        }
      } else {
        if (attributes.caseInsensitive) {
          attrName = attrName.toLowerCase();
        }
        attr = new MockAttr(attrName, value);
        attributes.__items.push(attr);
        if (checkAttrChanged === true) {
          attributeChanged(this, attrName, null, attr.value);
        }
      }
    }
  }
  setAttributeNS(namespaceURI, attrName, value) {
    const attributes = this.attributes;
    let attr = attributes.getNamedItemNS(namespaceURI, attrName);
    const checkAttrChanged = checkAttributeChanged(this);
    if (attr != null) {
      if (checkAttrChanged === true) {
        const oldValue = attr.value;
        attr.value = value;
        if (oldValue !== attr.value) {
          attributeChanged(this, attr.name, oldValue, attr.value);
        }
      } else {
        attr.value = value;
      }
    } else {
      attr = new MockAttr(attrName, value, namespaceURI);
      attributes.__items.push(attr);
      if (checkAttrChanged === true) {
        attributeChanged(this, attrName, null, attr.value);
      }
    }
  }
  get style() {
    if (this.__style == null) {
      this.__style = createCSSStyleDeclaration();
    }
    return this.__style;
  }
  set style(val) {
    if (typeof val === "string") {
      if (this.__style == null) {
        this.__style = createCSSStyleDeclaration();
      }
      this.__style.cssText = val;
    } else {
      this.__style = val;
    }
  }
  get tabIndex() {
    return parseInt(this.getAttributeNS(null, "tabindex") || "-1", 10);
  }
  set tabIndex(value) {
    this.setAttributeNS(null, "tabindex", value);
  }
  get tagName() {
    var _a;
    return (_a = this.nodeName) != null ? _a : "";
  }
  set tagName(value) {
    this.nodeName = value;
  }
  get textContent() {
    const text = [];
    getTextContent(this.childNodes, text);
    return text.join("");
  }
  set textContent(value) {
    setTextContent(this, value);
  }
  get title() {
    return this.getAttributeNS(null, "title") || "";
  }
  set title(value) {
    this.setAttributeNS(null, "title", value);
  }
  animate() {
  }
  onanimationstart() {
  }
  onanimationend() {
  }
  onanimationiteration() {
  }
  onabort() {
  }
  onauxclick() {
  }
  onbeforecopy() {
  }
  onbeforecut() {
  }
  onbeforepaste() {
  }
  onblur() {
  }
  oncancel() {
  }
  oncanplay() {
  }
  oncanplaythrough() {
  }
  onchange() {
  }
  onclick() {
  }
  onclose() {
  }
  oncontextmenu() {
  }
  oncopy() {
  }
  oncuechange() {
  }
  oncut() {
  }
  ondblclick() {
  }
  ondrag() {
  }
  ondragend() {
  }
  ondragenter() {
  }
  ondragleave() {
  }
  ondragover() {
  }
  ondragstart() {
  }
  ondrop() {
  }
  ondurationchange() {
  }
  onemptied() {
  }
  onended() {
  }
  onerror() {
  }
  onfocus() {
  }
  onfocusin() {
  }
  onfocusout() {
  }
  onformdata() {
  }
  onfullscreenchange() {
  }
  onfullscreenerror() {
  }
  ongotpointercapture() {
  }
  oninput() {
  }
  oninvalid() {
  }
  onkeydown() {
  }
  onkeypress() {
  }
  onkeyup() {
  }
  onload() {
  }
  onloadeddata() {
  }
  onloadedmetadata() {
  }
  onloadstart() {
  }
  onlostpointercapture() {
  }
  onmousedown() {
  }
  onmouseenter() {
  }
  onmouseleave() {
  }
  onmousemove() {
  }
  onmouseout() {
  }
  onmouseover() {
  }
  onmouseup() {
  }
  onmousewheel() {
  }
  onpaste() {
  }
  onpause() {
  }
  onplay() {
  }
  onplaying() {
  }
  onpointercancel() {
  }
  onpointerdown() {
  }
  onpointerenter() {
  }
  onpointerleave() {
  }
  onpointermove() {
  }
  onpointerout() {
  }
  onpointerover() {
  }
  onpointerup() {
  }
  onprogress() {
  }
  onratechange() {
  }
  onreset() {
  }
  onresize() {
  }
  onscroll() {
  }
  onsearch() {
  }
  onseeked() {
  }
  onseeking() {
  }
  onselect() {
  }
  onselectstart() {
  }
  onstalled() {
  }
  onsubmit() {
  }
  onsuspend() {
  }
  ontimeupdate() {
  }
  ontoggle() {
  }
  onvolumechange() {
  }
  onwaiting() {
  }
  onwebkitfullscreenchange() {
  }
  onwebkitfullscreenerror() {
  }
  onwheel() {
  }
  requestFullscreen() {
  }
  scrollBy() {
  }
  scrollTo() {
  }
  scrollIntoView() {
  }
  toString(opts) {
    return serializeNodeToHtml(this, opts);
  }
};
function getElementsByClassName(elm, classNames, foundElms) {
  const children = elm.children;
  for (let i2 = 0, ii = children.length; i2 < ii; i2++) {
    const childElm = children[i2];
    for (let j = 0, jj = classNames.length; j < jj; j++) {
      if (childElm.classList.contains(classNames[j])) {
        foundElms.push(childElm);
      }
    }
    getElementsByClassName(childElm, classNames, foundElms);
  }
}
function getElementsByTagName(elm, tagName, foundElms) {
  var _a;
  const children = elm.children;
  for (let i2 = 0, ii = children.length; i2 < ii; i2++) {
    const childElm = children[i2];
    if (tagName === "*" || ((_a = childElm.nodeName) != null ? _a : "").toLowerCase() === tagName) {
      foundElms.push(childElm);
    }
    getElementsByTagName(childElm, tagName, foundElms);
  }
}
function resetElement(elm) {
  resetEventListeners(elm);
  delete elm.__attributeMap;
  delete elm.__shadowRoot;
  delete elm.__style;
}
function insertBefore(parentNode, newNode, referenceNode2) {
  if (newNode !== referenceNode2) {
    newNode.remove();
    newNode.parentNode = parentNode;
    newNode.ownerDocument = parentNode.ownerDocument;
    if (referenceNode2 != null) {
      const index = parentNode.childNodes.indexOf(referenceNode2);
      if (index > -1) {
        parentNode.childNodes.splice(index, 0, newNode);
      } else {
        throw new Error(`referenceNode not found in parentNode.childNodes`);
      }
    } else {
      parentNode.childNodes.push(newNode);
    }
    connectNode(parentNode.ownerDocument, newNode);
  }
  return newNode;
}
var MockHTMLElement = class extends MockElement {
  constructor(ownerDocument, nodeName) {
    super(ownerDocument, typeof nodeName === "string" ? nodeName.toUpperCase() : null);
    this.__namespaceURI = "http://www.w3.org/1999/xhtml";
  }
  get tagName() {
    var _a;
    return (_a = this.nodeName) != null ? _a : "";
  }
  set tagName(value) {
    this.nodeName = value;
  }
  /**
   * A node’s parent of type Element is known as its parent element.
   * If the node has a parent of a different type, its parent element
   * is null.
   * @returns MockElement
   */
  get parentElement() {
    if (this.nodeName === "HTML") {
      return null;
    }
    return super.parentElement;
  }
  get attributes() {
    if (this.__attributeMap == null) {
      const attrMap = createAttributeProxy(true);
      this.__attributeMap = attrMap;
      return attrMap;
    }
    return this.__attributeMap;
  }
  set attributes(attrs) {
    this.__attributeMap = attrs;
  }
};
var MockTextNode = class _MockTextNode extends MockNode2 {
  constructor(ownerDocument, text) {
    super(ownerDocument, 3, "#text", text);
  }
  cloneNode(_deep) {
    return new _MockTextNode(null, this.nodeValue);
  }
  get textContent() {
    return this.nodeValue;
  }
  set textContent(text) {
    this.nodeValue = text;
  }
  get data() {
    return this.nodeValue;
  }
  set data(text) {
    this.nodeValue = text;
  }
  get wholeText() {
    if (this.parentNode != null) {
      const text = [];
      for (let i2 = 0, ii = this.parentNode.childNodes.length; i2 < ii; i2++) {
        const childNode = this.parentNode.childNodes[i2];
        if (childNode.nodeType === 3) {
          text.push(childNode.nodeValue);
        }
      }
      return text.join("");
    }
    return this.nodeValue;
  }
};
function getTextContent(childNodes, text) {
  for (let i2 = 0, ii = childNodes.length; i2 < ii; i2++) {
    const childNode = childNodes[i2];
    if (childNode.nodeType === 3) {
      text.push(childNode.nodeValue);
    } else if (childNode.nodeType === 1) {
      getTextContent(childNode.childNodes, text);
    }
  }
}
function setTextContent(elm, text) {
  for (let i2 = elm.childNodes.length - 1; i2 >= 0; i2--) {
    elm.removeChild(elm.childNodes[i2]);
  }
  const textNode = new MockTextNode(elm.ownerDocument, text);
  elm.appendChild(textNode);
}
var MockComment = class _MockComment extends MockNode2 {
  constructor(ownerDocument, data) {
    super(ownerDocument, 8, "#comment", data);
  }
  cloneNode(_deep) {
    return new _MockComment(null, this.nodeValue);
  }
  get textContent() {
    return this.nodeValue;
  }
  set textContent(text) {
    this.nodeValue = text;
  }
};
var MockDocumentFragment = class _MockDocumentFragment extends MockHTMLElement {
  constructor(ownerDocument) {
    super(ownerDocument, null);
    this.nodeName = "#document-fragment";
    this.nodeType = 11;
  }
  getElementById(id) {
    return getElementById(this, id);
  }
  cloneNode(deep) {
    const cloned = new _MockDocumentFragment(null);
    if (deep) {
      for (let i2 = 0, ii = this.childNodes.length; i2 < ii; i2++) {
        const childNode = this.childNodes[i2];
        if (childNode.nodeType === 1 || childNode.nodeType === 3 || childNode.nodeType === 8) {
          const clonedChildNode = this.childNodes[i2].cloneNode(true);
          cloned.appendChild(clonedChildNode);
        }
      }
    }
    return cloned;
  }
};
var MockDocumentTypeNode = class extends MockHTMLElement {
  constructor(ownerDocument) {
    super(ownerDocument, "!DOCTYPE");
    this.nodeType = 10;
    this.setAttribute("html", "");
  }
};
var MockCSSRule = class {
  constructor(parentStyleSheet) {
    this.parentStyleSheet = parentStyleSheet;
    this.cssText = "";
    this.type = 0;
  }
};
var MockCSSStyleSheet = class {
  constructor(ownerNode) {
    this.type = "text/css";
    this.parentStyleSheet = null;
    this.cssRules = [];
    this.ownerNode = ownerNode;
  }
  get rules() {
    return this.cssRules;
  }
  set rules(rules) {
    this.cssRules = rules;
  }
  deleteRule(index) {
    if (index >= 0 && index < this.cssRules.length) {
      this.cssRules.splice(index, 1);
      updateStyleTextNode(this.ownerNode);
    }
  }
  insertRule(rule, index = 0) {
    if (typeof index !== "number") {
      index = 0;
    }
    if (index < 0) {
      index = 0;
    }
    if (index > this.cssRules.length) {
      index = this.cssRules.length;
    }
    const cssRule = new MockCSSRule(this);
    cssRule.cssText = rule;
    this.cssRules.splice(index, 0, cssRule);
    updateStyleTextNode(this.ownerNode);
    return index;
  }
};
function getStyleElementText(styleElm) {
  const output = [];
  for (let i2 = 0; i2 < styleElm.childNodes.length; i2++) {
    output.push(styleElm.childNodes[i2].nodeValue);
  }
  return output.join("");
}
function setStyleElementText(styleElm, text) {
  const sheet = styleElm.sheet;
  sheet.cssRules.length = 0;
  sheet.insertRule(text);
  updateStyleTextNode(styleElm);
}
function updateStyleTextNode(styleElm) {
  const childNodeLen = styleElm.childNodes.length;
  if (childNodeLen > 1) {
    for (let i2 = childNodeLen - 1; i2 >= 1; i2--) {
      styleElm.removeChild(styleElm.childNodes[i2]);
    }
  } else if (childNodeLen < 1) {
    styleElm.appendChild(styleElm.ownerDocument.createTextNode(""));
  }
  const textNode = styleElm.childNodes[0];
  textNode.nodeValue = styleElm.sheet.cssRules.map((r) => r.cssText).join("\n");
}
function createElement(ownerDocument, tagName) {
  if (typeof tagName !== "string" || tagName === "" || !/^[a-z0-9-_:]+$/i.test(tagName)) {
    throw new Error(`The tag name provided (${tagName}) is not a valid name.`);
  }
  tagName = tagName.toLowerCase();
  switch (tagName) {
    case "a":
      return new MockAnchorElement(ownerDocument);
    case "base":
      return new MockBaseElement(ownerDocument);
    case "button":
      return new MockButtonElement(ownerDocument);
    case "canvas":
      return new MockCanvasElement(ownerDocument);
    case "form":
      return new MockFormElement(ownerDocument);
    case "img":
      return new MockImageElement(ownerDocument);
    case "input":
      return new MockInputElement(ownerDocument);
    case "link":
      return new MockLinkElement(ownerDocument);
    case "meta":
      return new MockMetaElement(ownerDocument);
    case "script":
      return new MockScriptElement(ownerDocument);
    case "style":
      return new MockStyleElement(ownerDocument);
    case "template":
      return new MockTemplateElement(ownerDocument);
    case "title":
      return new MockTitleElement(ownerDocument);
    case "ul":
      return new MockUListElement(ownerDocument);
  }
  if (ownerDocument != null && tagName.includes("-")) {
    const win2 = ownerDocument.defaultView;
    if (win2 != null && win2.customElements != null) {
      return createCustomElement(win2.customElements, ownerDocument, tagName);
    }
  }
  return new MockHTMLElement(ownerDocument, tagName);
}
function createElementNS(ownerDocument, namespaceURI, tagName) {
  if (namespaceURI === "http://www.w3.org/1999/xhtml") {
    return createElement(ownerDocument, tagName);
  } else if (namespaceURI === "http://www.w3.org/2000/svg") {
    switch (tagName.toLowerCase()) {
      case "text":
      case "tspan":
      case "tref":
      case "altglyph":
      case "textpath":
        return new MockSVGTextContentElement(ownerDocument, tagName);
      case "circle":
      case "ellipse":
      case "image":
      case "line":
      case "path":
      case "polygon":
      case "polyline":
      case "rect":
      case "use":
        return new MockSVGGraphicsElement(ownerDocument, tagName);
      case "svg":
        return new MockSVGSVGElement(ownerDocument, tagName);
      default:
        return new MockSVGElement(ownerDocument, tagName);
    }
  } else {
    return new MockElement(ownerDocument, tagName, namespaceURI);
  }
}
var MockAnchorElement = class extends MockHTMLElement {
  constructor(ownerDocument) {
    super(ownerDocument, "a");
  }
  get href() {
    return fullUrl(this, "href");
  }
  set href(value) {
    this.setAttribute("href", value);
  }
  get pathname() {
    return new URL(this.href).pathname;
  }
};
var MockButtonElement = class extends MockHTMLElement {
  constructor(ownerDocument) {
    super(ownerDocument, "button");
  }
};
patchPropAttributes(
  MockButtonElement.prototype,
  {
    type: String
  },
  {
    type: "submit"
  }
);
var MockImageElement = class extends MockHTMLElement {
  constructor(ownerDocument) {
    super(ownerDocument, "img");
  }
  get draggable() {
    return this.getAttributeNS(null, "draggable") !== "false";
  }
  set draggable(value) {
    this.setAttributeNS(null, "draggable", value);
  }
  get src() {
    return fullUrl(this, "src");
  }
  set src(value) {
    this.setAttribute("src", value);
  }
};
patchPropAttributes(MockImageElement.prototype, {
  height: Number,
  width: Number
});
var MockInputElement = class extends MockHTMLElement {
  constructor(ownerDocument) {
    super(ownerDocument, "input");
  }
  get list() {
    const listId = this.getAttribute("list");
    if (listId) {
      return this.ownerDocument.getElementById(listId);
    }
    return null;
  }
};
patchPropAttributes(
  MockInputElement.prototype,
  {
    accept: String,
    autocomplete: String,
    autofocus: Boolean,
    capture: String,
    checked: Boolean,
    disabled: Boolean,
    form: String,
    formaction: String,
    formenctype: String,
    formmethod: String,
    formnovalidate: String,
    formtarget: String,
    height: Number,
    inputmode: String,
    max: String,
    maxLength: Number,
    min: String,
    minLength: Number,
    multiple: Boolean,
    name: String,
    pattern: String,
    placeholder: String,
    required: Boolean,
    readOnly: Boolean,
    size: Number,
    spellCheck: Boolean,
    src: String,
    step: String,
    type: String,
    value: String,
    width: Number
  },
  {
    type: "text"
  }
);
var MockFormElement = class extends MockHTMLElement {
  constructor(ownerDocument) {
    super(ownerDocument, "form");
  }
};
patchPropAttributes(MockFormElement.prototype, {
  name: String
});
var MockLinkElement = class extends MockHTMLElement {
  constructor(ownerDocument) {
    super(ownerDocument, "link");
  }
  get href() {
    return fullUrl(this, "href");
  }
  set href(value) {
    this.setAttribute("href", value);
  }
};
patchPropAttributes(MockLinkElement.prototype, {
  crossorigin: String,
  media: String,
  rel: String,
  type: String
});
var MockMetaElement = class extends MockHTMLElement {
  constructor(ownerDocument) {
    super(ownerDocument, "meta");
  }
};
patchPropAttributes(MockMetaElement.prototype, {
  charset: String,
  content: String,
  name: String
});
var MockScriptElement = class extends MockHTMLElement {
  constructor(ownerDocument) {
    super(ownerDocument, "script");
  }
  get src() {
    return fullUrl(this, "src");
  }
  set src(value) {
    this.setAttribute("src", value);
  }
};
patchPropAttributes(MockScriptElement.prototype, {
  type: String
});
var MockDOMMatrix = class _MockDOMMatrix {
  constructor() {
    this.a = 1;
    this.b = 0;
    this.c = 0;
    this.d = 1;
    this.e = 0;
    this.f = 0;
    this.m11 = 1;
    this.m12 = 0;
    this.m13 = 0;
    this.m14 = 0;
    this.m21 = 0;
    this.m22 = 1;
    this.m23 = 0;
    this.m24 = 0;
    this.m31 = 0;
    this.m32 = 0;
    this.m33 = 1;
    this.m34 = 0;
    this.m41 = 0;
    this.m42 = 0;
    this.m43 = 0;
    this.m44 = 1;
    this.is2D = true;
    this.isIdentity = true;
  }
  static fromMatrix() {
    return new _MockDOMMatrix();
  }
  inverse() {
    return new _MockDOMMatrix();
  }
  flipX() {
    return new _MockDOMMatrix();
  }
  flipY() {
    return new _MockDOMMatrix();
  }
  multiply() {
    return new _MockDOMMatrix();
  }
  rotate() {
    return new _MockDOMMatrix();
  }
  rotateAxisAngle() {
    return new _MockDOMMatrix();
  }
  rotateFromVector() {
    return new _MockDOMMatrix();
  }
  scale() {
    return new _MockDOMMatrix();
  }
  scaleNonUniform() {
    return new _MockDOMMatrix();
  }
  skewX() {
    return new _MockDOMMatrix();
  }
  skewY() {
    return new _MockDOMMatrix();
  }
  toJSON() {
  }
  toString() {
  }
  transformPoint() {
    return new MockDOMPoint();
  }
  translate() {
    return new _MockDOMMatrix();
  }
};
var MockDOMPoint = class {
  constructor() {
    this.w = 1;
    this.x = 0;
    this.y = 0;
    this.z = 0;
  }
  toJSON() {
  }
  matrixTransform() {
    return new MockDOMMatrix();
  }
};
var MockSVGRect = class {
  constructor() {
    this.height = 10;
    this.width = 10;
    this.x = 0;
    this.y = 0;
  }
};
var MockStyleElement = class extends MockHTMLElement {
  constructor(ownerDocument) {
    super(ownerDocument, "style");
    this.sheet = new MockCSSStyleSheet(this);
  }
  get innerHTML() {
    return getStyleElementText(this);
  }
  set innerHTML(value) {
    setStyleElementText(this, value);
  }
  get innerText() {
    return getStyleElementText(this);
  }
  set innerText(value) {
    setStyleElementText(this, value);
  }
  get textContent() {
    return getStyleElementText(this);
  }
  set textContent(value) {
    setStyleElementText(this, value);
  }
};
var MockSVGElement = class extends MockElement {
  constructor() {
    super(...arguments);
    this.__namespaceURI = "http://www.w3.org/2000/svg";
  }
  // SVGElement properties and methods
  get ownerSVGElement() {
    return null;
  }
  get viewportElement() {
    return null;
  }
  onunload() {
  }
  // SVGGeometryElement properties and methods
  get pathLength() {
    return 0;
  }
  isPointInFill(_pt) {
    return false;
  }
  isPointInStroke(_pt) {
    return false;
  }
  getTotalLength() {
    return 0;
  }
};
var MockSVGGraphicsElement = class extends MockSVGElement {
  getBBox(_options) {
    return new MockSVGRect();
  }
  getCTM() {
    return new MockDOMMatrix();
  }
  getScreenCTM() {
    return new MockDOMMatrix();
  }
};
var MockSVGSVGElement = class extends MockSVGGraphicsElement {
  createSVGPoint() {
    return new MockDOMPoint();
  }
};
var MockSVGTextContentElement = class extends MockSVGGraphicsElement {
  getComputedTextLength() {
    return 0;
  }
};
var MockBaseElement = class extends MockHTMLElement {
  constructor(ownerDocument) {
    super(ownerDocument, "base");
  }
  get href() {
    return fullUrl(this, "href");
  }
  set href(value) {
    this.setAttribute("href", value);
  }
};
var MockTemplateElement = class _MockTemplateElement extends MockHTMLElement {
  constructor(ownerDocument) {
    super(ownerDocument, "template");
    this.content = new MockDocumentFragment(ownerDocument);
  }
  get innerHTML() {
    return this.content.innerHTML;
  }
  set innerHTML(html) {
    this.content.innerHTML = html;
  }
  cloneNode(deep) {
    const cloned = new _MockTemplateElement(null);
    cloned.attributes = cloneAttributes(this.attributes);
    const styleCssText = this.getAttribute("style");
    if (styleCssText != null && styleCssText.length > 0) {
      cloned.setAttribute("style", styleCssText);
    }
    cloned.content = this.content.cloneNode(deep);
    if (deep) {
      for (let i2 = 0, ii = this.childNodes.length; i2 < ii; i2++) {
        const clonedChildNode = this.childNodes[i2].cloneNode(true);
        cloned.appendChild(clonedChildNode);
      }
    }
    return cloned;
  }
};
var MockTitleElement = class extends MockHTMLElement {
  constructor(ownerDocument) {
    super(ownerDocument, "title");
  }
  get text() {
    return this.textContent;
  }
  set text(value) {
    this.textContent = value;
  }
};
var MockUListElement = class extends MockHTMLElement {
  constructor(ownerDocument) {
    super(ownerDocument, "ul");
  }
};
var MockCanvasElement = class extends MockHTMLElement {
  constructor(ownerDocument) {
    super(ownerDocument, "canvas");
  }
  getContext() {
    return {
      fillRect() {
        return;
      },
      clearRect() {
      },
      getImageData: function(_, __, w, h2) {
        return {
          data: new Array(w * h2 * 4)
        };
      },
      putImageData() {
      },
      createImageData: function() {
        return [];
      },
      setTransform() {
      },
      drawImage() {
      },
      save() {
      },
      fillText() {
      },
      restore() {
      },
      beginPath() {
      },
      moveTo() {
      },
      lineTo() {
      },
      closePath() {
      },
      stroke() {
      },
      translate() {
      },
      scale() {
      },
      rotate() {
      },
      arc() {
      },
      fill() {
      },
      measureText() {
        return { width: 0 };
      },
      transform() {
      },
      rect() {
      },
      clip() {
      }
    };
  }
};
function fullUrl(elm, attrName) {
  const val = elm.getAttribute(attrName) || "";
  if (elm.ownerDocument != null) {
    const win2 = elm.ownerDocument.defaultView;
    if (win2 != null) {
      const loc = win2.location;
      if (loc != null) {
        try {
          const url = new URL(val, loc.href);
          return url.href;
        } catch (e2) {
        }
      }
    }
  }
  return val.replace(/\'|\"/g, "").trim();
}
function patchPropAttributes(prototype, attrs, defaults = {}) {
  Object.keys(attrs).forEach((propName) => {
    const attr = attrs[propName];
    const defaultValue = defaults[propName];
    if (attr === Boolean) {
      Object.defineProperty(prototype, propName, {
        get() {
          return this.hasAttribute(propName);
        },
        set(value) {
          if (value) {
            this.setAttribute(propName, "");
          } else {
            this.removeAttribute(propName);
          }
        }
      });
    } else if (attr === Number) {
      Object.defineProperty(prototype, propName, {
        get() {
          const value = this.getAttribute(propName);
          return value ? parseInt(value, 10) : defaultValue === void 0 ? 0 : defaultValue;
        },
        set(value) {
          this.setAttribute(propName, value);
        }
      });
    } else {
      Object.defineProperty(prototype, propName, {
        get() {
          return this.hasAttribute(propName) ? this.getAttribute(propName) : defaultValue || "";
        },
        set(value) {
          this.setAttribute(propName, value);
        }
      });
    }
  });
}
MockElement.prototype.cloneNode = function(deep) {
  const cloned = createElement(this.ownerDocument, this.nodeName);
  cloned.attributes = cloneAttributes(this.attributes);
  const styleCssText = this.getAttribute("style");
  if (styleCssText != null && styleCssText.length > 0) {
    cloned.setAttribute("style", styleCssText);
  }
  if (deep) {
    for (let i2 = 0, ii = this.childNodes.length; i2 < ii; i2++) {
      const clonedChildNode = this.childNodes[i2].cloneNode(true);
      cloned.appendChild(clonedChildNode);
    }
  }
  return cloned;
};
var sharedDocument;
function parseHtmlToDocument(html, ownerDocument = null) {
  if (ownerDocument == null) {
    if (sharedDocument == null) {
      sharedDocument = new MockDocument();
    }
    ownerDocument = sharedDocument;
  }
  return parseDocumentUtil(ownerDocument, html);
}
var consoleNoop = () => {
};
function createConsole() {
  return {
    debug: consoleNoop,
    error: consoleNoop,
    info: consoleNoop,
    log: consoleNoop,
    warn: consoleNoop,
    dir: consoleNoop,
    dirxml: consoleNoop,
    table: consoleNoop,
    trace: consoleNoop,
    group: consoleNoop,
    groupCollapsed: consoleNoop,
    groupEnd: consoleNoop,
    clear: consoleNoop,
    count: consoleNoop,
    countReset: consoleNoop,
    assert: consoleNoop,
    profile: consoleNoop,
    profileEnd: consoleNoop,
    time: consoleNoop,
    timeLog: consoleNoop,
    timeEnd: consoleNoop,
    timeStamp: consoleNoop,
    context: consoleNoop,
    memory: consoleNoop
  };
}
var MockHeaders = class {
  constructor(init) {
    this._values = [];
    if (typeof init === "object") {
      if (typeof init[Symbol.iterator] === "function") {
        const kvs = [];
        for (const kv of init) {
          if (typeof kv[Symbol.iterator] === "function") {
            kvs.push([...kv]);
          }
        }
        for (const kv of kvs) {
          this.append(kv[0], kv[1]);
        }
      } else {
        for (const key in init) {
          this.append(key, init[key]);
        }
      }
    }
  }
  append(key, value) {
    this._values.push([key, value + ""]);
  }
  delete(key) {
    key = key.toLowerCase();
    for (let i2 = this._values.length - 1; i2 >= 0; i2--) {
      if (this._values[i2][0].toLowerCase() === key) {
        this._values.splice(i2, 1);
      }
    }
  }
  entries() {
    const entries = [];
    for (const kv of this.keys()) {
      entries.push([kv, this.get(kv)]);
    }
    let index = -1;
    return {
      next() {
        index++;
        return {
          value: entries[index],
          done: !entries[index]
        };
      },
      [Symbol.iterator]() {
        return this;
      }
    };
  }
  forEach(cb) {
    for (const kv of this.entries()) {
      cb(kv[1], kv[0]);
    }
  }
  get(key) {
    const rtn = [];
    key = key.toLowerCase();
    for (const kv of this._values) {
      if (kv[0].toLowerCase() === key) {
        rtn.push(kv[1]);
      }
    }
    return rtn.length > 0 ? rtn.join(", ") : null;
  }
  has(key) {
    key = key.toLowerCase();
    for (const kv of this._values) {
      if (kv[0].toLowerCase() === key) {
        return true;
      }
    }
    return false;
  }
  keys() {
    const keys = [];
    for (const kv of this._values) {
      const key = kv[0].toLowerCase();
      if (!keys.includes(key)) {
        keys.push(key);
      }
    }
    let index = -1;
    return {
      next() {
        index++;
        return {
          value: keys[index],
          done: !keys[index]
        };
      },
      [Symbol.iterator]() {
        return this;
      }
    };
  }
  set(key, value) {
    for (const kv of this._values) {
      if (kv[0].toLowerCase() === key.toLowerCase()) {
        kv[1] = value + "";
        return;
      }
    }
    this.append(key, value);
  }
  values() {
    const values = this._values;
    let index = -1;
    return {
      next() {
        index++;
        const done = !values[index];
        return {
          value: done ? void 0 : values[index][1],
          done
        };
      },
      [Symbol.iterator]() {
        return this;
      }
    };
  }
  [Symbol.iterator]() {
    return this.entries();
  }
};
var MockDOMParser = class {
  parseFromString(htmlToParse, mimeType) {
    if (mimeType !== "text/html") {
      console.error("XML parsing not implemented yet, continuing as html");
    }
    return parseHtmlToDocument(htmlToParse);
  }
};
var MockRequest = class _MockRequest {
  constructor(input, init = {}) {
    this._method = "GET";
    this._url = "/";
    this.bodyUsed = false;
    this.cache = "default";
    this.credentials = "same-origin";
    this.integrity = "";
    this.keepalive = false;
    this.mode = "cors";
    this.redirect = "follow";
    this.referrer = "about:client";
    this.referrerPolicy = "";
    if (typeof input === "string") {
      this.url = input;
    } else if (input) {
      Object.assign(this, input);
      this.headers = new MockHeaders(input.headers);
    }
    Object.assign(this, init);
    if (init.headers) {
      this.headers = new MockHeaders(init.headers);
    }
    if (!this.headers) {
      this.headers = new MockHeaders();
    }
  }
  get url() {
    if (typeof this._url === "string") {
      return new URL(this._url, location.href).href;
    }
    return new URL("/", location.href).href;
  }
  set url(value) {
    this._url = value;
  }
  get method() {
    if (typeof this._method === "string") {
      return this._method.toUpperCase();
    }
    return "GET";
  }
  set method(value) {
    this._method = value;
  }
  clone() {
    const clone = { ...this };
    clone.headers = new MockHeaders(this.headers);
    return new _MockRequest(clone);
  }
};
var MockResponse = class _MockResponse {
  constructor(body, init = {}) {
    this.ok = true;
    this.status = 200;
    this.statusText = "";
    this.type = "default";
    this.url = "";
    this._body = body;
    if (init) {
      Object.assign(this, init);
    }
    this.headers = new MockHeaders(init.headers);
  }
  async json() {
    return JSON.parse(this._body);
  }
  async text() {
    return this._body;
  }
  clone() {
    const initClone = { ...this };
    initClone.headers = new MockHeaders(this.headers);
    return new _MockResponse(this._body, initClone);
  }
};
function addGlobalsToWindowPrototype(mockWinPrototype) {
  GLOBAL_CONSTRUCTORS.forEach(([cstrName, Cstr]) => {
    Object.defineProperty(mockWinPrototype, cstrName, {
      get() {
        return this["__" + cstrName] || Cstr;
      },
      set(cstr) {
        this["__" + cstrName] = cstr;
      },
      configurable: true,
      enumerable: true
    });
  });
}
var GLOBAL_CONSTRUCTORS = [
  ["CustomEvent", MockCustomEvent],
  ["Event", MockEvent],
  ["Headers", MockHeaders],
  ["FocusEvent", MockFocusEvent],
  ["KeyboardEvent", MockKeyboardEvent],
  ["MouseEvent", MockMouseEvent],
  ["Request", MockRequest],
  ["Response", MockResponse],
  ["DOMParser", MockDOMParser],
  ["HTMLAnchorElement", MockAnchorElement],
  ["HTMLBaseElement", MockBaseElement],
  ["HTMLButtonElement", MockButtonElement],
  ["HTMLCanvasElement", MockCanvasElement],
  ["HTMLFormElement", MockFormElement],
  ["HTMLImageElement", MockImageElement],
  ["HTMLInputElement", MockInputElement],
  ["HTMLLinkElement", MockLinkElement],
  ["HTMLMetaElement", MockMetaElement],
  ["HTMLScriptElement", MockScriptElement],
  ["HTMLStyleElement", MockStyleElement],
  ["HTMLTemplateElement", MockTemplateElement],
  ["HTMLTitleElement", MockTitleElement],
  ["HTMLUListElement", MockUListElement]
];
var MockHistory = class {
  constructor() {
    this.items = [];
  }
  get length() {
    return this.items.length;
  }
  back() {
    this.go(-1);
  }
  forward() {
    this.go(1);
  }
  go(_value) {
  }
  pushState(_state, _title, _url) {
  }
  replaceState(_state, _title, _url) {
  }
};
var MockIntersectionObserver = class {
  constructor() {
  }
  disconnect() {
  }
  observe() {
  }
  takeRecords() {
    return [];
  }
  unobserve() {
  }
};
var MockLocation = class {
  constructor() {
    this.ancestorOrigins = null;
    this.protocol = "";
    this.host = "";
    this.hostname = "";
    this.port = "";
    this.pathname = "";
    this.search = "";
    this.hash = "";
    this.username = "";
    this.password = "";
    this.origin = "";
    this._href = "";
  }
  get href() {
    return this._href;
  }
  set href(value) {
    const url = new URL(value, "http://mockdoc.stenciljs.com");
    this._href = url.href;
    this.protocol = url.protocol;
    this.host = url.host;
    this.hostname = url.hostname;
    this.port = url.port;
    this.pathname = url.pathname;
    this.search = url.search;
    this.hash = url.hash;
    this.username = url.username;
    this.password = url.password;
    this.origin = url.origin;
  }
  assign(_url) {
  }
  reload(_forcedReload) {
  }
  replace(_url) {
  }
  toString() {
    return this.href;
  }
};
var MockNavigator = class {
  constructor() {
    this.appCodeName = "MockNavigator";
    this.appName = "MockNavigator";
    this.appVersion = "MockNavigator";
    this.platform = "MockNavigator";
    this.userAgent = "MockNavigator";
  }
};
var MockPerformance = class {
  constructor() {
    this.timeOrigin = Date.now();
    this.eventCounts = /* @__PURE__ */ new Map();
  }
  addEventListener() {
  }
  clearMarks() {
  }
  clearMeasures() {
  }
  clearResourceTimings() {
  }
  dispatchEvent() {
    return true;
  }
  getEntries() {
    return [];
  }
  getEntriesByName() {
    return [];
  }
  getEntriesByType() {
    return [];
  }
  // Stencil's implementation of `mark` is non-compliant with the `Performance` interface. Because Stencil will
  // instantiate an instance of this class and may attempt to assign it to a variable of type `Performance`, the return
  // type must match the `Performance` interface (rather than typing this function as returning `void` and ignoring the
  // associated errors returned by the type checker)
  // @ts-ignore
  mark() {
  }
  // Stencil's implementation of `measure` is non-compliant with the `Performance` interface. Because Stencil will
  // instantiate an instance of this class and may attempt to assign it to a variable of type `Performance`, the return
  // type must match the `Performance` interface (rather than typing this function as returning `void` and ignoring the
  // associated errors returned by the type checker)
  // @ts-ignore
  measure() {
  }
  get navigation() {
    return {};
  }
  now() {
    return Date.now() - this.timeOrigin;
  }
  get onresourcetimingbufferfull() {
    return null;
  }
  removeEventListener() {
  }
  setResourceTimingBufferSize() {
  }
  get timing() {
    return {};
  }
  toJSON() {
  }
};
function resetPerformance(perf) {
  if (perf != null) {
    try {
      perf.timeOrigin = Date.now();
    } catch (e2) {
    }
  }
}
var MockStorage = class {
  constructor() {
    this.items = /* @__PURE__ */ new Map();
  }
  key(_value) {
  }
  getItem(key) {
    key = String(key);
    if (this.items.has(key)) {
      return this.items.get(key);
    }
    return null;
  }
  setItem(key, value) {
    if (value == null) {
      value = "null";
    }
    this.items.set(String(key), String(value));
  }
  removeItem(key) {
    this.items.delete(String(key));
  }
  clear() {
    this.items.clear();
  }
};
var nativeClearInterval = clearInterval;
var nativeClearTimeout = clearTimeout;
var nativeSetInterval = setInterval;
var nativeSetTimeout = setTimeout;
var nativeURL = URL;
var MockWindow = class {
  constructor(html = null) {
    if (html !== false) {
      this.document = new MockDocument(html, this);
    } else {
      this.document = null;
    }
    this.performance = new MockPerformance();
    this.customElements = new MockCustomElementRegistry(this);
    this.console = createConsole();
    resetWindowDefaults(this);
    resetWindowDimensions(this);
  }
  addEventListener(type, handler) {
    addEventListener(this, type, handler);
  }
  alert(msg) {
    if (this.console) {
      this.console.debug(msg);
    } else {
      console.debug(msg);
    }
  }
  blur() {
  }
  cancelAnimationFrame(id) {
    this.__clearTimeout(id);
  }
  cancelIdleCallback(id) {
    this.__clearTimeout(id);
  }
  get CharacterData() {
    if (this.__charDataCstr == null) {
      const ownerDocument = this.document;
      this.__charDataCstr = class extends MockNode2 {
        constructor() {
          super(ownerDocument, 0, "test", "");
          throw new Error("Illegal constructor: cannot construct CharacterData");
        }
      };
    }
    return this.__charDataCstr;
  }
  set CharacterData(charDataCstr) {
    this.__charDataCstr = charDataCstr;
  }
  clearInterval(id) {
    this.__clearInterval(id);
  }
  clearTimeout(id) {
    this.__clearTimeout(id);
  }
  close() {
    resetWindow(this);
  }
  confirm() {
    return false;
  }
  get CSS() {
    return {
      supports: () => true
    };
  }
  get Document() {
    if (this.__docCstr == null) {
      const win2 = this;
      this.__docCstr = class extends MockDocument {
        constructor() {
          super(false, win2);
          throw new Error("Illegal constructor: cannot construct Document");
        }
      };
    }
    return this.__docCstr;
  }
  set Document(docCstr) {
    this.__docCstr = docCstr;
  }
  get DocumentFragment() {
    if (this.__docFragCstr == null) {
      const ownerDocument = this.document;
      this.__docFragCstr = class extends MockDocumentFragment {
        constructor() {
          super(ownerDocument);
          throw new Error("Illegal constructor: cannot construct DocumentFragment");
        }
      };
    }
    return this.__docFragCstr;
  }
  set DocumentFragment(docFragCstr) {
    this.__docFragCstr = docFragCstr;
  }
  get DocumentType() {
    if (this.__docTypeCstr == null) {
      const ownerDocument = this.document;
      this.__docTypeCstr = class extends MockNode2 {
        constructor() {
          super(ownerDocument, 0, "test", "");
          throw new Error("Illegal constructor: cannot construct DocumentType");
        }
      };
    }
    return this.__docTypeCstr;
  }
  set DocumentType(docTypeCstr) {
    this.__docTypeCstr = docTypeCstr;
  }
  get DOMTokenList() {
    if (this.__domTokenListCstr == null) {
      this.__domTokenListCstr = class MockDOMTokenList {
      };
    }
    return this.__domTokenListCstr;
  }
  set DOMTokenList(domTokenListCstr) {
    this.__domTokenListCstr = domTokenListCstr;
  }
  dispatchEvent(ev) {
    return dispatchEvent(this, ev);
  }
  get Element() {
    if (this.__elementCstr == null) {
      const ownerDocument = this.document;
      this.__elementCstr = class extends MockElement {
        constructor() {
          super(ownerDocument, "");
          throw new Error("Illegal constructor: cannot construct Element");
        }
      };
    }
    return this.__elementCstr;
  }
  fetch(input, init) {
    if (typeof fetch === "function") {
      return fetch(input, init);
    }
    throw new Error(`fetch() not implemented`);
  }
  focus() {
  }
  getComputedStyle(_) {
    return {
      cssText: "",
      length: 0,
      parentRule: null,
      getPropertyPriority() {
        return null;
      },
      getPropertyValue() {
        return "";
      },
      item() {
        return null;
      },
      removeProperty() {
        return null;
      },
      setProperty() {
        return null;
      }
    };
  }
  get globalThis() {
    return this;
  }
  get history() {
    if (this.__history == null) {
      this.__history = new MockHistory();
    }
    return this.__history;
  }
  set history(hsty) {
    this.__history = hsty;
  }
  get JSON() {
    return JSON;
  }
  get HTMLElement() {
    if (this.__htmlElementCstr == null) {
      const ownerDocument = this.document;
      this.__htmlElementCstr = class extends MockHTMLElement {
        constructor() {
          super(ownerDocument, "");
          const observedAttributes = this.constructor.observedAttributes;
          if (Array.isArray(observedAttributes) && typeof this.attributeChangedCallback === "function") {
            observedAttributes.forEach((attrName) => {
              const attrValue = this.getAttribute(attrName);
              if (attrValue != null) {
                this.attributeChangedCallback(attrName, null, attrValue);
              }
            });
          }
        }
      };
    }
    return this.__htmlElementCstr;
  }
  set HTMLElement(htmlElementCstr) {
    this.__htmlElementCstr = htmlElementCstr;
  }
  get IntersectionObserver() {
    return MockIntersectionObserver;
  }
  get localStorage() {
    if (this.__localStorage == null) {
      this.__localStorage = new MockStorage();
    }
    return this.__localStorage;
  }
  set localStorage(locStorage) {
    this.__localStorage = locStorage;
  }
  get location() {
    if (this.__location == null) {
      this.__location = new MockLocation();
    }
    return this.__location;
  }
  set location(val) {
    if (typeof val === "string") {
      if (this.__location == null) {
        this.__location = new MockLocation();
      }
      this.__location.href = val;
    } else {
      this.__location = val;
    }
  }
  matchMedia(media) {
    return {
      media,
      matches: false,
      addListener: (_handler) => {
      },
      removeListener: (_handler) => {
      },
      addEventListener: (_type, _handler) => {
      },
      removeEventListener: (_type, _handler) => {
      },
      dispatchEvent: (_ev) => {
      },
      onchange: null
    };
  }
  get Node() {
    if (this.__nodeCstr == null) {
      const ownerDocument = this.document;
      this.__nodeCstr = class extends MockNode2 {
        constructor() {
          super(ownerDocument, 0, "test", "");
          throw new Error("Illegal constructor: cannot construct Node");
        }
      };
    }
    return this.__nodeCstr;
  }
  get NodeList() {
    if (this.__nodeListCstr == null) {
      const ownerDocument = this.document;
      this.__nodeListCstr = class extends MockNodeList {
        constructor() {
          super(ownerDocument, [], 0);
          throw new Error("Illegal constructor: cannot construct NodeList");
        }
      };
    }
    return this.__nodeListCstr;
  }
  get navigator() {
    if (this.__navigator == null) {
      this.__navigator = new MockNavigator();
    }
    return this.__navigator;
  }
  set navigator(nav) {
    this.__navigator = nav;
  }
  get parent() {
    return null;
  }
  prompt() {
    return "";
  }
  open() {
    return null;
  }
  get origin() {
    return this.location.origin;
  }
  removeEventListener(type, handler) {
    removeEventListener(this, type, handler);
  }
  requestAnimationFrame(callback) {
    return this.setTimeout(() => {
      callback(Date.now());
    }, 0);
  }
  requestIdleCallback(callback) {
    return this.setTimeout(() => {
      callback({
        didTimeout: false,
        timeRemaining: () => 0
      });
    }, 0);
  }
  scroll(_x, _y) {
  }
  scrollBy(_x, _y) {
  }
  scrollTo(_x, _y) {
  }
  get self() {
    return this;
  }
  get sessionStorage() {
    if (this.__sessionStorage == null) {
      this.__sessionStorage = new MockStorage();
    }
    return this.__sessionStorage;
  }
  set sessionStorage(locStorage) {
    this.__sessionStorage = locStorage;
  }
  setInterval(callback, ms, ...args) {
    if (this.__timeouts == null) {
      this.__timeouts = /* @__PURE__ */ new Set();
    }
    ms = Math.min(ms, this.__maxTimeout);
    if (this.__allowInterval) {
      const intervalId = this.__setInterval(() => {
        if (this.__timeouts) {
          this.__timeouts.delete(intervalId);
          try {
            callback(...args);
          } catch (e2) {
            if (this.console) {
              this.console.error(e2);
            } else {
              console.error(e2);
            }
          }
        }
      }, ms);
      if (this.__timeouts) {
        this.__timeouts.add(intervalId);
      }
      return intervalId;
    }
    const timeoutId = this.__setTimeout(() => {
      if (this.__timeouts) {
        this.__timeouts.delete(timeoutId);
        try {
          callback(...args);
        } catch (e2) {
          if (this.console) {
            this.console.error(e2);
          } else {
            console.error(e2);
          }
        }
      }
    }, ms);
    if (this.__timeouts) {
      this.__timeouts.add(timeoutId);
    }
    return timeoutId;
  }
  setTimeout(callback, ms, ...args) {
    if (this.__timeouts == null) {
      this.__timeouts = /* @__PURE__ */ new Set();
    }
    ms = Math.min(ms, this.__maxTimeout);
    const timeoutId = this.__setTimeout(() => {
      if (this.__timeouts) {
        this.__timeouts.delete(timeoutId);
        try {
          callback(...args);
        } catch (e2) {
          if (this.console) {
            this.console.error(e2);
          } else {
            console.error(e2);
          }
        }
      }
    }, ms);
    if (this.__timeouts) {
      this.__timeouts.add(timeoutId);
    }
    return timeoutId;
  }
  get top() {
    return this;
  }
  get window() {
    return this;
  }
  onanimationstart() {
  }
  onanimationend() {
  }
  onanimationiteration() {
  }
  onabort() {
  }
  onauxclick() {
  }
  onbeforecopy() {
  }
  onbeforecut() {
  }
  onbeforepaste() {
  }
  onblur() {
  }
  oncancel() {
  }
  oncanplay() {
  }
  oncanplaythrough() {
  }
  onchange() {
  }
  onclick() {
  }
  onclose() {
  }
  oncontextmenu() {
  }
  oncopy() {
  }
  oncuechange() {
  }
  oncut() {
  }
  ondblclick() {
  }
  ondrag() {
  }
  ondragend() {
  }
  ondragenter() {
  }
  ondragleave() {
  }
  ondragover() {
  }
  ondragstart() {
  }
  ondrop() {
  }
  ondurationchange() {
  }
  onemptied() {
  }
  onended() {
  }
  onerror() {
  }
  onfocus() {
  }
  onfocusin() {
  }
  onfocusout() {
  }
  onformdata() {
  }
  onfullscreenchange() {
  }
  onfullscreenerror() {
  }
  ongotpointercapture() {
  }
  oninput() {
  }
  oninvalid() {
  }
  onkeydown() {
  }
  onkeypress() {
  }
  onkeyup() {
  }
  onload() {
  }
  onloadeddata() {
  }
  onloadedmetadata() {
  }
  onloadstart() {
  }
  onlostpointercapture() {
  }
  onmousedown() {
  }
  onmouseenter() {
  }
  onmouseleave() {
  }
  onmousemove() {
  }
  onmouseout() {
  }
  onmouseover() {
  }
  onmouseup() {
  }
  onmousewheel() {
  }
  onpaste() {
  }
  onpause() {
  }
  onplay() {
  }
  onplaying() {
  }
  onpointercancel() {
  }
  onpointerdown() {
  }
  onpointerenter() {
  }
  onpointerleave() {
  }
  onpointermove() {
  }
  onpointerout() {
  }
  onpointerover() {
  }
  onpointerup() {
  }
  onprogress() {
  }
  onratechange() {
  }
  onreset() {
  }
  onresize() {
  }
  onscroll() {
  }
  onsearch() {
  }
  onseeked() {
  }
  onseeking() {
  }
  onselect() {
  }
  onselectstart() {
  }
  onstalled() {
  }
  onsubmit() {
  }
  onsuspend() {
  }
  ontimeupdate() {
  }
  ontoggle() {
  }
  onvolumechange() {
  }
  onwaiting() {
  }
  onwebkitfullscreenchange() {
  }
  onwebkitfullscreenerror() {
  }
  onwheel() {
  }
};
addGlobalsToWindowPrototype(MockWindow.prototype);
function resetWindowDefaults(win2) {
  win2.__clearInterval = nativeClearInterval;
  win2.__clearTimeout = nativeClearTimeout;
  win2.__setInterval = nativeSetInterval;
  win2.__setTimeout = nativeSetTimeout;
  win2.__maxTimeout = 3e4;
  win2.__allowInterval = true;
  win2.URL = nativeURL;
}
function resetWindow(win2) {
  if (win2 != null) {
    if (win2.__timeouts) {
      win2.__timeouts.forEach((timeoutId) => {
        nativeClearInterval(timeoutId);
        nativeClearTimeout(timeoutId);
      });
      win2.__timeouts.clear();
    }
    if (win2.customElements && win2.customElements.clear) {
      win2.customElements.clear();
    }
    resetDocument(win2.document);
    resetPerformance(win2.performance);
    for (const key in win2) {
      if (win2.hasOwnProperty(key) && key !== "document" && key !== "performance" && key !== "customElements") {
        delete win2[key];
      }
    }
    resetWindowDefaults(win2);
    resetWindowDimensions(win2);
    resetEventListeners(win2);
    if (win2.document != null) {
      try {
        win2.document.defaultView = win2;
      } catch (e2) {
      }
    }
    win2.fetch = null;
    win2.Headers = null;
    win2.Request = null;
    win2.Response = null;
    win2.FetchError = null;
  }
}
function resetWindowDimensions(win2) {
  try {
    win2.devicePixelRatio = 1;
    win2.innerHeight = 768;
    win2.innerWidth = 1366;
    win2.pageXOffset = 0;
    win2.pageYOffset = 0;
    win2.screenLeft = 0;
    win2.screenTop = 0;
    win2.screenX = 0;
    win2.screenY = 0;
    win2.scrollX = 0;
    win2.scrollY = 0;
    win2.screen = {
      availHeight: win2.innerHeight,
      availLeft: 0,
      availTop: 0,
      availWidth: win2.innerWidth,
      colorDepth: 24,
      height: win2.innerHeight,
      keepAwake: false,
      orientation: {
        angle: 0,
        type: "portrait-primary"
      },
      pixelDepth: 24,
      width: win2.innerWidth
    };
  } catch (e2) {
  }
}
var MockDocument = class _MockDocument extends MockHTMLElement {
  constructor(html = null, win2 = null) {
    super(null, null);
    this.nodeName = "#document";
    this.nodeType = 9;
    this.defaultView = win2;
    this.cookie = "";
    this.referrer = "";
    this.appendChild(this.createDocumentTypeNode());
    if (typeof html === "string") {
      const parsedDoc = parseDocumentUtil(this, html);
      const documentElement = parsedDoc.children.find((elm) => elm.nodeName === "HTML");
      if (documentElement != null) {
        this.appendChild(documentElement);
        setOwnerDocument(documentElement, this);
      }
    } else if (html !== false) {
      const documentElement = new MockHTMLElement(this, "html");
      this.appendChild(documentElement);
      documentElement.appendChild(new MockHTMLElement(this, "head"));
      documentElement.appendChild(new MockHTMLElement(this, "body"));
    }
  }
  get dir() {
    return this.documentElement.dir;
  }
  set dir(value) {
    this.documentElement.dir = value;
  }
  get localName() {
    throw new Error("Unimplemented");
  }
  get location() {
    if (this.defaultView != null) {
      return this.defaultView.location;
    }
    return null;
  }
  set location(val) {
    if (this.defaultView != null) {
      this.defaultView.location = val;
    }
  }
  get baseURI() {
    const baseNode = this.head.childNodes.find((node) => node.nodeName === "BASE");
    if (baseNode) {
      return baseNode.href;
    }
    return this.URL;
  }
  get URL() {
    return this.location.href;
  }
  get styleSheets() {
    return this.querySelectorAll("style");
  }
  get scripts() {
    return this.querySelectorAll("script");
  }
  get forms() {
    return this.querySelectorAll("form");
  }
  get images() {
    return this.querySelectorAll("img");
  }
  get scrollingElement() {
    return this.documentElement;
  }
  get documentElement() {
    for (let i2 = this.childNodes.length - 1; i2 >= 0; i2--) {
      if (this.childNodes[i2].nodeName === "HTML") {
        return this.childNodes[i2];
      }
    }
    const documentElement = new MockHTMLElement(this, "html");
    this.appendChild(documentElement);
    return documentElement;
  }
  set documentElement(documentElement) {
    for (let i2 = this.childNodes.length - 1; i2 >= 0; i2--) {
      if (this.childNodes[i2].nodeType !== 10) {
        this.childNodes[i2].remove();
      }
    }
    if (documentElement != null) {
      this.appendChild(documentElement);
      setOwnerDocument(documentElement, this);
    }
  }
  get head() {
    const documentElement = this.documentElement;
    for (let i2 = 0; i2 < documentElement.childNodes.length; i2++) {
      if (documentElement.childNodes[i2].nodeName === "HEAD") {
        return documentElement.childNodes[i2];
      }
    }
    const head = new MockHTMLElement(this, "head");
    documentElement.insertBefore(head, documentElement.firstChild);
    return head;
  }
  set head(head) {
    const documentElement = this.documentElement;
    for (let i2 = documentElement.childNodes.length - 1; i2 >= 0; i2--) {
      if (documentElement.childNodes[i2].nodeName === "HEAD") {
        documentElement.childNodes[i2].remove();
      }
    }
    if (head != null) {
      documentElement.insertBefore(head, documentElement.firstChild);
      setOwnerDocument(head, this);
    }
  }
  get body() {
    const documentElement = this.documentElement;
    for (let i2 = documentElement.childNodes.length - 1; i2 >= 0; i2--) {
      if (documentElement.childNodes[i2].nodeName === "BODY") {
        return documentElement.childNodes[i2];
      }
    }
    const body = new MockHTMLElement(this, "body");
    documentElement.appendChild(body);
    return body;
  }
  set body(body) {
    const documentElement = this.documentElement;
    for (let i2 = documentElement.childNodes.length - 1; i2 >= 0; i2--) {
      if (documentElement.childNodes[i2].nodeName === "BODY") {
        documentElement.childNodes[i2].remove();
      }
    }
    if (body != null) {
      documentElement.appendChild(body);
      setOwnerDocument(body, this);
    }
  }
  appendChild(newNode) {
    newNode.remove();
    newNode.parentNode = this;
    this.childNodes.push(newNode);
    return newNode;
  }
  createComment(data) {
    return new MockComment(this, data);
  }
  createAttribute(attrName) {
    return new MockAttr(attrName.toLowerCase(), "");
  }
  createAttributeNS(namespaceURI, attrName) {
    return new MockAttr(attrName, "", namespaceURI);
  }
  createElement(tagName) {
    if (tagName === "#document") {
      const doc2 = new _MockDocument(false);
      doc2.nodeName = tagName;
      doc2.parentNode = null;
      return doc2;
    }
    return createElement(this, tagName);
  }
  createElementNS(namespaceURI, tagName) {
    const elmNs = createElementNS(this, namespaceURI, tagName);
    return elmNs;
  }
  createTextNode(text) {
    return new MockTextNode(this, text);
  }
  createDocumentFragment() {
    return new MockDocumentFragment(this);
  }
  createDocumentTypeNode() {
    return new MockDocumentTypeNode(this);
  }
  getElementById(id) {
    return getElementById(this, id);
  }
  getElementsByName(elmName) {
    return getElementsByName(this, elmName.toLowerCase());
  }
  get title() {
    const title = this.head.childNodes.find((elm) => elm.nodeName === "TITLE");
    if (title != null && typeof title.textContent === "string") {
      return title.textContent.trim();
    }
    return "";
  }
  set title(value) {
    const head = this.head;
    let title = head.childNodes.find((elm) => elm.nodeName === "TITLE");
    if (title == null) {
      title = this.createElement("title");
      head.appendChild(title);
    }
    title.textContent = value;
  }
};
function resetDocument(doc2) {
  if (doc2 != null) {
    resetEventListeners(doc2);
    const documentElement = doc2.documentElement;
    if (documentElement != null) {
      resetElement(documentElement);
      for (let i2 = 0, ii = documentElement.childNodes.length; i2 < ii; i2++) {
        const childNode = documentElement.childNodes[i2];
        resetElement(childNode);
        childNode.childNodes.length = 0;
      }
    }
    for (const key in doc2) {
      if (doc2.hasOwnProperty(key) && !DOC_KEY_KEEPERS.has(key)) {
        delete doc2[key];
      }
    }
    try {
      doc2.nodeName = "#document";
    } catch (e2) {
    }
    try {
      doc2.nodeType = 9;
    } catch (e2) {
    }
    try {
      doc2.cookie = "";
    } catch (e2) {
    }
    try {
      doc2.referrer = "";
    } catch (e2) {
    }
  }
}
var DOC_KEY_KEEPERS = /* @__PURE__ */ new Set([
  "nodeName",
  "nodeType",
  "nodeValue",
  "ownerDocument",
  "parentNode",
  "childNodes",
  "_shadowRoot"
]);
function getElementById(elm, id) {
  const children = elm.children;
  for (let i2 = 0, ii = children.length; i2 < ii; i2++) {
    const childElm = children[i2];
    if (childElm.id === id) {
      return childElm;
    }
    const childElmFound = getElementById(childElm, id);
    if (childElmFound != null) {
      return childElmFound;
    }
  }
  return null;
}
function getElementsByName(elm, elmName, foundElms = []) {
  const children = elm.children;
  for (let i2 = 0, ii = children.length; i2 < ii; i2++) {
    const childElm = children[i2];
    if (childElm.name && childElm.name.toLowerCase() === elmName) {
      foundElms.push(childElm);
    }
    getElementsByName(childElm, elmName, foundElms);
  }
  return foundElms;
}
function setOwnerDocument(elm, ownerDocument) {
  for (let i2 = 0, ii = elm.childNodes.length; i2 < ii; i2++) {
    elm.childNodes[i2].ownerDocument = ownerDocument;
    if (elm.childNodes[i2].nodeType === 1) {
      setOwnerDocument(elm.childNodes[i2], ownerDocument);
    }
  }
}

// import("./**/*.entry.js*") in node_modules/@stencil/core/internal/client/index.js
var globImport_entry_js = __glob({});

// node_modules/@stencil/core/internal/client/index.js
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var Build = {
  isDev: BUILD.isDev ? true : false,
  isBrowser: true,
  isServer: false,
  isTesting: BUILD.isTesting ? true : false
};
var getAssetPath = (path) => {
  const assetUrl = new URL(path, plt.$resourcesUrl$);
  return assetUrl.origin !== win.location.origin ? assetUrl.href : assetUrl.pathname;
};
var EMPTY_OBJ = {};
var SVG_NS = "http://www.w3.org/2000/svg";
var HTML_NS = "http://www.w3.org/1999/xhtml";
var isDef = (v) => v != null;
var isComplexType = (o) => {
  o = typeof o;
  return o === "object" || o === "function";
};
function queryNonceMetaTagContent(doc2) {
  var _a, _b, _c;
  return (_c = (_b = (_a = doc2.head) == null ? void 0 : _a.querySelector('meta[name="csp-nonce"]')) == null ? void 0 : _b.getAttribute("content")) != null ? _c : void 0;
}
var result_exports = {};
__export(result_exports, {
  err: () => err,
  map: () => map,
  ok: () => ok,
  unwrap: () => unwrap,
  unwrapErr: () => unwrapErr
});
var ok = (value) => ({
  isOk: true,
  isErr: false,
  value
});
var err = (value) => ({
  isOk: false,
  isErr: true,
  value
});
function map(result, fn) {
  if (result.isOk) {
    const val = fn(result.value);
    if (val instanceof Promise) {
      return val.then((newVal) => ok(newVal));
    } else {
      return ok(val);
    }
  }
  if (result.isErr) {
    const value = result.value;
    return err(value);
  }
  throw "should never get here";
}
var unwrap = (result) => {
  if (result.isOk) {
    return result.value;
  } else {
    throw result.value;
  }
};
var unwrapErr = (result) => {
  if (result.isErr) {
    return result.value;
  } else {
    throw result.value;
  }
};
var i = 0;
var createTime = (fnName, tagName = "") => {
  if (BUILD.profile && performance.mark) {
    const key = `st:${fnName}:${tagName}:${i++}`;
    performance.mark(key);
    return () => performance.measure(`[Stencil] ${fnName}() <${tagName}>`, key);
  } else {
    return () => {
      return;
    };
  }
};
var uniqueTime = (key, measureText) => {
  if (BUILD.profile && performance.mark) {
    if (performance.getEntriesByName(key, "mark").length === 0) {
      performance.mark(key);
    }
    return () => {
      if (performance.getEntriesByName(measureText, "measure").length === 0) {
        performance.measure(measureText, key);
      }
    };
  } else {
    return () => {
      return;
    };
  }
};
var CONTENT_REF_ID2 = "r";
var ORG_LOCATION_ID2 = "o";
var SLOT_NODE_ID2 = "s";
var TEXT_NODE_ID2 = "t";
var HYDRATE_ID = "s-id";
var HYDRATED_STYLE_ID = "sty-id";
var HYDRATE_CHILD_ID = "c-id";
var SLOT_FB_CSS = "slot-fb{display:contents}slot-fb[hidden]{display:none}";
var XLINK_NS2 = "http://www.w3.org/1999/xlink";
var FORM_ASSOCIATED_CUSTOM_ELEMENT_CALLBACKS = [
  "formAssociatedCallback",
  "formResetCallback",
  "formDisabledCallback",
  "formStateRestoreCallback"
];
var h = (nodeName, vnodeData, ...children) => {
  let child = null;
  let key = null;
  let slotName = null;
  let simple = false;
  let lastSimple = false;
  const vNodeChildren = [];
  const walk = (c) => {
    for (let i2 = 0; i2 < c.length; i2++) {
      child = c[i2];
      if (Array.isArray(child)) {
        walk(child);
      } else if (child != null && typeof child !== "boolean") {
        if (simple = typeof nodeName !== "function" && !isComplexType(child)) {
          child = String(child);
        } else if (BUILD.isDev && typeof nodeName !== "function" && child.$flags$ === void 0) {
          consoleDevError(`vNode passed as children has unexpected type.
Make sure it's using the correct h() function.
Empty objects can also be the cause, look for JSX comments that became objects.`);
        }
        if (simple && lastSimple) {
          vNodeChildren[vNodeChildren.length - 1].$text$ += child;
        } else {
          vNodeChildren.push(simple ? newVNode(null, child) : child);
        }
        lastSimple = simple;
      }
    }
  };
  walk(children);
  if (vnodeData) {
    if (BUILD.isDev && nodeName === "input") {
      validateInputProperties(vnodeData);
    }
    if (BUILD.vdomKey && vnodeData.key) {
      key = vnodeData.key;
    }
    if (BUILD.slotRelocation && vnodeData.name) {
      slotName = vnodeData.name;
    }
    if (BUILD.vdomClass) {
      const classData = vnodeData.className || vnodeData.class;
      if (classData) {
        vnodeData.class = typeof classData !== "object" ? classData : Object.keys(classData).filter((k) => classData[k]).join(" ");
      }
    }
  }
  if (BUILD.isDev && vNodeChildren.some(isHost)) {
    consoleDevError(`The <Host> must be the single root component. Make sure:
- You are NOT using hostData() and <Host> in the same component.
- <Host> is used once, and it's the single root component of the render() function.`);
  }
  if (BUILD.vdomFunctional && typeof nodeName === "function") {
    return nodeName(
      vnodeData === null ? {} : vnodeData,
      vNodeChildren,
      vdomFnUtils
    );
  }
  const vnode = newVNode(nodeName, null);
  vnode.$attrs$ = vnodeData;
  if (vNodeChildren.length > 0) {
    vnode.$children$ = vNodeChildren;
  }
  if (BUILD.vdomKey) {
    vnode.$key$ = key;
  }
  if (BUILD.slotRelocation) {
    vnode.$name$ = slotName;
  }
  return vnode;
};
var newVNode = (tag, text) => {
  const vnode = {
    $flags$: 0,
    $tag$: tag,
    $text$: text,
    $elm$: null,
    $children$: null
  };
  if (BUILD.vdomAttribute) {
    vnode.$attrs$ = null;
  }
  if (BUILD.vdomKey) {
    vnode.$key$ = null;
  }
  if (BUILD.slotRelocation) {
    vnode.$name$ = null;
  }
  return vnode;
};
var Host = {};
var isHost = (node) => node && node.$tag$ === Host;
var vdomFnUtils = {
  forEach: (children, cb) => children.map(convertToPublic).forEach(cb),
  map: (children, cb) => children.map(convertToPublic).map(cb).map(convertToPrivate)
};
var convertToPublic = (node) => ({
  vattrs: node.$attrs$,
  vchildren: node.$children$,
  vkey: node.$key$,
  vname: node.$name$,
  vtag: node.$tag$,
  vtext: node.$text$
});
var convertToPrivate = (node) => {
  if (typeof node.vtag === "function") {
    const vnodeData = { ...node.vattrs };
    if (node.vkey) {
      vnodeData.key = node.vkey;
    }
    if (node.vname) {
      vnodeData.name = node.vname;
    }
    return h(node.vtag, vnodeData, ...node.vchildren || []);
  }
  const vnode = newVNode(node.vtag, node.vtext);
  vnode.$attrs$ = node.vattrs;
  vnode.$children$ = node.vchildren;
  vnode.$key$ = node.vkey;
  vnode.$name$ = node.vname;
  return vnode;
};
var validateInputProperties = (inputElm) => {
  const props = Object.keys(inputElm);
  const value = props.indexOf("value");
  if (value === -1) {
    return;
  }
  const typeIndex = props.indexOf("type");
  const minIndex = props.indexOf("min");
  const maxIndex = props.indexOf("max");
  const stepIndex = props.indexOf("step");
  if (value < typeIndex || value < minIndex || value < maxIndex || value < stepIndex) {
    consoleDevWarn(`The "value" prop of <input> should be set after "min", "max", "type" and "step"`);
  }
};
var initializeClientHydrate = (hostElm, tagName, hostId, hostRef) => {
  const endHydrate = createTime("hydrateClient", tagName);
  const shadowRoot = hostElm.shadowRoot;
  const childRenderNodes = [];
  const slotNodes = [];
  const shadowRootNodes = BUILD.shadowDom && shadowRoot ? [] : null;
  const vnode = hostRef.$vnode$ = newVNode(tagName, null);
  if (!plt.$orgLocNodes$) {
    initializeDocumentHydrate(doc.body, plt.$orgLocNodes$ = /* @__PURE__ */ new Map());
  }
  hostElm[HYDRATE_ID] = hostId;
  hostElm.removeAttribute(HYDRATE_ID);
  clientHydrate(vnode, childRenderNodes, slotNodes, shadowRootNodes, hostElm, hostElm, hostId);
  childRenderNodes.map((c) => {
    const orgLocationId = c.$hostId$ + "." + c.$nodeId$;
    const orgLocationNode = plt.$orgLocNodes$.get(orgLocationId);
    const node = c.$elm$;
    if (orgLocationNode && supportsShadow && orgLocationNode["s-en"] === "") {
      orgLocationNode.parentNode.insertBefore(node, orgLocationNode.nextSibling);
    }
    if (!shadowRoot) {
      node["s-hn"] = tagName;
      if (orgLocationNode) {
        node["s-ol"] = orgLocationNode;
        node["s-ol"]["s-nr"] = node;
      }
    }
    plt.$orgLocNodes$.delete(orgLocationId);
  });
  if (BUILD.shadowDom && shadowRoot) {
    shadowRootNodes.map((shadowRootNode) => {
      if (shadowRootNode) {
        shadowRoot.appendChild(shadowRootNode);
      }
    });
  }
  endHydrate();
};
var clientHydrate = (parentVNode, childRenderNodes, slotNodes, shadowRootNodes, hostElm, node, hostId) => {
  let childNodeType;
  let childIdSplt;
  let childVNode;
  let i2;
  if (node.nodeType === 1) {
    childNodeType = node.getAttribute(HYDRATE_CHILD_ID);
    if (childNodeType) {
      childIdSplt = childNodeType.split(".");
      if (childIdSplt[0] === hostId || childIdSplt[0] === "0") {
        childVNode = {
          $flags$: 0,
          $hostId$: childIdSplt[0],
          $nodeId$: childIdSplt[1],
          $depth$: childIdSplt[2],
          $index$: childIdSplt[3],
          $tag$: node.tagName.toLowerCase(),
          $elm$: node,
          $attrs$: null,
          $children$: null,
          $key$: null,
          $name$: null,
          $text$: null
        };
        childRenderNodes.push(childVNode);
        node.removeAttribute(HYDRATE_CHILD_ID);
        if (!parentVNode.$children$) {
          parentVNode.$children$ = [];
        }
        parentVNode.$children$[childVNode.$index$] = childVNode;
        parentVNode = childVNode;
        if (shadowRootNodes && childVNode.$depth$ === "0") {
          shadowRootNodes[childVNode.$index$] = childVNode.$elm$;
        }
      }
    }
    for (i2 = node.childNodes.length - 1; i2 >= 0; i2--) {
      clientHydrate(
        parentVNode,
        childRenderNodes,
        slotNodes,
        shadowRootNodes,
        hostElm,
        node.childNodes[i2],
        hostId
      );
    }
    if (node.shadowRoot) {
      for (i2 = node.shadowRoot.childNodes.length - 1; i2 >= 0; i2--) {
        clientHydrate(
          parentVNode,
          childRenderNodes,
          slotNodes,
          shadowRootNodes,
          hostElm,
          node.shadowRoot.childNodes[i2],
          hostId
        );
      }
    }
  } else if (node.nodeType === 8) {
    childIdSplt = node.nodeValue.split(".");
    if (childIdSplt[1] === hostId || childIdSplt[1] === "0") {
      childNodeType = childIdSplt[0];
      childVNode = {
        $flags$: 0,
        $hostId$: childIdSplt[1],
        $nodeId$: childIdSplt[2],
        $depth$: childIdSplt[3],
        $index$: childIdSplt[4],
        $elm$: node,
        $attrs$: null,
        $children$: null,
        $key$: null,
        $name$: null,
        $tag$: null,
        $text$: null
      };
      if (childNodeType === TEXT_NODE_ID2) {
        childVNode.$elm$ = node.nextSibling;
        if (childVNode.$elm$ && childVNode.$elm$.nodeType === 3) {
          childVNode.$text$ = childVNode.$elm$.textContent;
          childRenderNodes.push(childVNode);
          node.remove();
          if (!parentVNode.$children$) {
            parentVNode.$children$ = [];
          }
          parentVNode.$children$[childVNode.$index$] = childVNode;
          if (shadowRootNodes && childVNode.$depth$ === "0") {
            shadowRootNodes[childVNode.$index$] = childVNode.$elm$;
          }
        }
      } else if (childVNode.$hostId$ === hostId) {
        if (childNodeType === SLOT_NODE_ID2) {
          childVNode.$tag$ = "slot";
          if (childIdSplt[5]) {
            node["s-sn"] = childVNode.$name$ = childIdSplt[5];
          } else {
            node["s-sn"] = "";
          }
          node["s-sr"] = true;
          if (BUILD.shadowDom && shadowRootNodes) {
            childVNode.$elm$ = doc.createElement(childVNode.$tag$);
            if (childVNode.$name$) {
              childVNode.$elm$.setAttribute("name", childVNode.$name$);
            }
            node.parentNode.insertBefore(childVNode.$elm$, node);
            node.remove();
            if (childVNode.$depth$ === "0") {
              shadowRootNodes[childVNode.$index$] = childVNode.$elm$;
            }
          }
          slotNodes.push(childVNode);
          if (!parentVNode.$children$) {
            parentVNode.$children$ = [];
          }
          parentVNode.$children$[childVNode.$index$] = childVNode;
        } else if (childNodeType === CONTENT_REF_ID2) {
          if (BUILD.shadowDom && shadowRootNodes) {
            node.remove();
          } else if (BUILD.slotRelocation) {
            hostElm["s-cr"] = node;
            node["s-cn"] = true;
          }
        }
      }
    }
  } else if (parentVNode && parentVNode.$tag$ === "style") {
    const vnode = newVNode(null, node.textContent);
    vnode.$elm$ = node;
    vnode.$index$ = "0";
    parentVNode.$children$ = [vnode];
  }
};
var initializeDocumentHydrate = (node, orgLocNodes) => {
  if (node.nodeType === 1) {
    let i2 = 0;
    for (; i2 < node.childNodes.length; i2++) {
      initializeDocumentHydrate(node.childNodes[i2], orgLocNodes);
    }
    if (node.shadowRoot) {
      for (i2 = 0; i2 < node.shadowRoot.childNodes.length; i2++) {
        initializeDocumentHydrate(node.shadowRoot.childNodes[i2], orgLocNodes);
      }
    }
  } else if (node.nodeType === 8) {
    const childIdSplt = node.nodeValue.split(".");
    if (childIdSplt[0] === ORG_LOCATION_ID2) {
      orgLocNodes.set(childIdSplt[1] + "." + childIdSplt[2], node);
      node.nodeValue = "";
      node["s-en"] = childIdSplt[3];
    }
  }
};
var computeMode = (elm) => modeResolutionChain.map((h2) => h2(elm)).find((m) => !!m);
var setMode = (handler) => modeResolutionChain.push(handler);
var getMode = (ref) => getHostRef(ref).$modeName$;
var parsePropertyValue = (propValue, propType) => {
  if (propValue != null && !isComplexType(propValue)) {
    if (BUILD.propBoolean && propType & 4) {
      return propValue === "false" ? false : propValue === "" || !!propValue;
    }
    if (BUILD.propNumber && propType & 2) {
      return parseFloat(propValue);
    }
    if (BUILD.propString && propType & 1) {
      return String(propValue);
    }
    return propValue;
  }
  return propValue;
};
var getElement = (ref) => BUILD.lazyLoad ? getHostRef(ref).$hostElement$ : ref;
var createEvent = (ref, name, flags) => {
  const elm = getElement(ref);
  return {
    emit: (detail) => {
      if (BUILD.isDev && !elm.isConnected) {
        consoleDevWarn(`The "${name}" event was emitted, but the dispatcher node is no longer connected to the dom.`);
      }
      return emitEvent(elm, name, {
        bubbles: !!(flags & 4),
        composed: !!(flags & 2),
        cancelable: !!(flags & 1),
        detail
      });
    }
  };
};
var emitEvent = (elm, name, opts) => {
  const ev = plt.ce(name, opts);
  elm.dispatchEvent(ev);
  return ev;
};
var rootAppliedStyles = /* @__PURE__ */ new WeakMap();
var registerStyle = (scopeId2, cssText, allowCS) => {
  let style = styles.get(scopeId2);
  if (supportsConstructableStylesheets && allowCS) {
    style = style || new CSSStyleSheet();
    if (typeof style === "string") {
      style = cssText;
    } else {
      style.replaceSync(cssText);
    }
  } else {
    style = cssText;
  }
  styles.set(scopeId2, style);
};
var addStyle = (styleContainerNode, cmpMeta, mode) => {
  var _a;
  const scopeId2 = getScopeId(cmpMeta, mode);
  const style = styles.get(scopeId2);
  if (!BUILD.attachStyles) {
    return scopeId2;
  }
  styleContainerNode = styleContainerNode.nodeType === 11 ? styleContainerNode : doc;
  if (style) {
    if (typeof style === "string") {
      styleContainerNode = styleContainerNode.head || styleContainerNode;
      let appliedStyles = rootAppliedStyles.get(styleContainerNode);
      let styleElm;
      if (!appliedStyles) {
        rootAppliedStyles.set(styleContainerNode, appliedStyles = /* @__PURE__ */ new Set());
      }
      if (!appliedStyles.has(scopeId2)) {
        if (BUILD.hydrateClientSide && styleContainerNode.host && (styleElm = styleContainerNode.querySelector(`[${HYDRATED_STYLE_ID}="${scopeId2}"]`))) {
          styleElm.innerHTML = style;
        } else {
          styleElm = doc.createElement("style");
          styleElm.innerHTML = style;
          const nonce = (_a = plt.$nonce$) != null ? _a : queryNonceMetaTagContent(doc);
          if (nonce != null) {
            styleElm.setAttribute("nonce", nonce);
          }
          if (BUILD.hydrateServerSide || BUILD.hotModuleReplacement) {
            styleElm.setAttribute(HYDRATED_STYLE_ID, scopeId2);
          }
          styleContainerNode.insertBefore(styleElm, styleContainerNode.querySelector("link"));
        }
        if (cmpMeta.$flags$ & 4) {
          styleElm.innerHTML += SLOT_FB_CSS;
        }
        if (appliedStyles) {
          appliedStyles.add(scopeId2);
        }
      }
    } else if (BUILD.constructableCSS && !styleContainerNode.adoptedStyleSheets.includes(style)) {
      styleContainerNode.adoptedStyleSheets = [...styleContainerNode.adoptedStyleSheets, style];
    }
  }
  return scopeId2;
};
var attachStyles = (hostRef) => {
  const cmpMeta = hostRef.$cmpMeta$;
  const elm = hostRef.$hostElement$;
  const flags = cmpMeta.$flags$;
  const endAttachStyles = createTime("attachStyles", cmpMeta.$tagName$);
  const scopeId2 = addStyle(
    BUILD.shadowDom && supportsShadow && elm.shadowRoot ? elm.shadowRoot : elm.getRootNode(),
    cmpMeta,
    hostRef.$modeName$
  );
  if ((BUILD.shadowDom || BUILD.scoped) && BUILD.cssAnnotations && flags & 10) {
    elm["s-sc"] = scopeId2;
    elm.classList.add(scopeId2 + "-h");
    if (BUILD.scoped && flags & 2) {
      elm.classList.add(scopeId2 + "-s");
    }
  }
  endAttachStyles();
};
var getScopeId = (cmp, mode) => "sc-" + (BUILD.mode && mode && cmp.$flags$ & 32 ? cmp.$tagName$ + "-" + mode : cmp.$tagName$);
var setAccessor = (elm, memberName, oldValue, newValue, isSvg, flags) => {
  if (oldValue !== newValue) {
    let isProp = isMemberInElement(elm, memberName);
    let ln = memberName.toLowerCase();
    if (BUILD.vdomClass && memberName === "class") {
      const classList = elm.classList;
      const oldClasses = parseClassList(oldValue);
      const newClasses = parseClassList(newValue);
      classList.remove(...oldClasses.filter((c) => c && !newClasses.includes(c)));
      classList.add(...newClasses.filter((c) => c && !oldClasses.includes(c)));
    } else if (BUILD.vdomStyle && memberName === "style") {
      if (BUILD.updatable) {
        for (const prop in oldValue) {
          if (!newValue || newValue[prop] == null) {
            if (!BUILD.hydrateServerSide && prop.includes("-")) {
              elm.style.removeProperty(prop);
            } else {
              elm.style[prop] = "";
            }
          }
        }
      }
      for (const prop in newValue) {
        if (!oldValue || newValue[prop] !== oldValue[prop]) {
          if (!BUILD.hydrateServerSide && prop.includes("-")) {
            elm.style.setProperty(prop, newValue[prop]);
          } else {
            elm.style[prop] = newValue[prop];
          }
        }
      }
    } else if (BUILD.vdomKey && memberName === "key") {
    } else if (BUILD.vdomRef && memberName === "ref") {
      if (newValue) {
        newValue(elm);
      }
    } else if (BUILD.vdomListener && (BUILD.lazyLoad ? !isProp : !elm.__lookupSetter__(memberName)) && memberName[0] === "o" && memberName[1] === "n") {
      if (memberName[2] === "-") {
        memberName = memberName.slice(3);
      } else if (isMemberInElement(win, ln)) {
        memberName = ln.slice(2);
      } else {
        memberName = ln[2] + memberName.slice(3);
      }
      if (oldValue || newValue) {
        const capture = memberName.endsWith(CAPTURE_EVENT_SUFFIX);
        memberName = memberName.replace(CAPTURE_EVENT_REGEX, "");
        if (oldValue) {
          plt.rel(elm, memberName, oldValue, capture);
        }
        if (newValue) {
          plt.ael(elm, memberName, newValue, capture);
        }
      }
    } else if (BUILD.vdomPropOrAttr) {
      const isComplex = isComplexType(newValue);
      if ((isProp || isComplex && newValue !== null) && !isSvg) {
        try {
          if (!elm.tagName.includes("-")) {
            const n = newValue == null ? "" : newValue;
            if (memberName === "list") {
              isProp = false;
            } else if (oldValue == null || elm[memberName] != n) {
              elm[memberName] = n;
            }
          } else {
            elm[memberName] = newValue;
          }
        } catch (e2) {
        }
      }
      let xlink = false;
      if (BUILD.vdomXlink) {
        if (ln !== (ln = ln.replace(/^xlink\:?/, ""))) {
          memberName = ln;
          xlink = true;
        }
      }
      if (newValue == null || newValue === false) {
        if (newValue !== false || elm.getAttribute(memberName) === "") {
          if (BUILD.vdomXlink && xlink) {
            elm.removeAttributeNS(XLINK_NS2, memberName);
          } else {
            elm.removeAttribute(memberName);
          }
        }
      } else if ((!isProp || flags & 4 || isSvg) && !isComplex) {
        newValue = newValue === true ? "" : newValue;
        if (BUILD.vdomXlink && xlink) {
          elm.setAttributeNS(XLINK_NS2, memberName, newValue);
        } else {
          elm.setAttribute(memberName, newValue);
        }
      }
    }
  }
};
var parseClassListRegex = /\s/;
var parseClassList = (value) => !value ? [] : value.split(parseClassListRegex);
var CAPTURE_EVENT_SUFFIX = "Capture";
var CAPTURE_EVENT_REGEX = new RegExp(CAPTURE_EVENT_SUFFIX + "$");
var updateElement = (oldVnode, newVnode, isSvgMode2, memberName) => {
  const elm = newVnode.$elm$.nodeType === 11 && newVnode.$elm$.host ? newVnode.$elm$.host : newVnode.$elm$;
  const oldVnodeAttrs = oldVnode && oldVnode.$attrs$ || EMPTY_OBJ;
  const newVnodeAttrs = newVnode.$attrs$ || EMPTY_OBJ;
  if (BUILD.updatable) {
    for (memberName of sortedAttrNames(Object.keys(oldVnodeAttrs))) {
      if (!(memberName in newVnodeAttrs)) {
        setAccessor(elm, memberName, oldVnodeAttrs[memberName], void 0, isSvgMode2, newVnode.$flags$);
      }
    }
  }
  for (memberName of sortedAttrNames(Object.keys(newVnodeAttrs))) {
    setAccessor(elm, memberName, oldVnodeAttrs[memberName], newVnodeAttrs[memberName], isSvgMode2, newVnode.$flags$);
  }
};
function sortedAttrNames(attrNames) {
  return attrNames.includes("ref") ? (
    // we need to sort these to ensure that `'ref'` is the last attr
    [...attrNames.filter((attr) => attr !== "ref"), "ref"]
  ) : (
    // no need to sort, return the original array
    attrNames
  );
}
var scopeId;
var contentRef;
var hostTagName;
var useNativeShadowDom = false;
var checkSlotFallbackVisibility = false;
var checkSlotRelocate = false;
var isSvgMode = false;
var createElm = (oldParentVNode, newParentVNode, childIndex, parentElm) => {
  var _a;
  const newVNode2 = newParentVNode.$children$[childIndex];
  let i2 = 0;
  let elm;
  let childNode;
  let oldVNode;
  if (BUILD.slotRelocation && !useNativeShadowDom) {
    checkSlotRelocate = true;
    if (newVNode2.$tag$ === "slot") {
      if (scopeId) {
        parentElm.classList.add(scopeId + "-s");
      }
      newVNode2.$flags$ |= newVNode2.$children$ ? (
        // slot element has fallback content
        // still create an element that "mocks" the slot element
        2
      ) : (
        // slot element does not have fallback content
        // create an html comment we'll use to always reference
        // where actual slot content should sit next to
        1
      );
    }
  }
  if (BUILD.isDev && newVNode2.$elm$) {
    consoleDevError(
      `The JSX ${newVNode2.$text$ !== null ? `"${newVNode2.$text$}" text` : `"${newVNode2.$tag$}" element`} node should not be shared within the same renderer. The renderer caches element lookups in order to improve performance. However, a side effect from this is that the exact same JSX node should not be reused. For more information please see https://stenciljs.com/docs/templating-jsx#avoid-shared-jsx-nodes`
    );
  }
  if (BUILD.vdomText && newVNode2.$text$ !== null) {
    elm = newVNode2.$elm$ = doc.createTextNode(newVNode2.$text$);
  } else if (BUILD.slotRelocation && newVNode2.$flags$ & 1) {
    elm = newVNode2.$elm$ = BUILD.isDebug || BUILD.hydrateServerSide ? slotReferenceDebugNode(newVNode2) : doc.createTextNode("");
  } else {
    if (BUILD.svg && !isSvgMode) {
      isSvgMode = newVNode2.$tag$ === "svg";
    }
    elm = newVNode2.$elm$ = BUILD.svg ? doc.createElementNS(
      isSvgMode ? SVG_NS : HTML_NS,
      BUILD.slotRelocation && newVNode2.$flags$ & 2 ? "slot-fb" : newVNode2.$tag$
    ) : doc.createElement(
      BUILD.slotRelocation && newVNode2.$flags$ & 2 ? "slot-fb" : newVNode2.$tag$
    );
    if (BUILD.svg && isSvgMode && newVNode2.$tag$ === "foreignObject") {
      isSvgMode = false;
    }
    if (BUILD.vdomAttribute) {
      updateElement(null, newVNode2, isSvgMode);
    }
    if ((BUILD.shadowDom || BUILD.scoped) && isDef(scopeId) && elm["s-si"] !== scopeId) {
      elm.classList.add(elm["s-si"] = scopeId);
    }
    if (newVNode2.$children$) {
      for (i2 = 0; i2 < newVNode2.$children$.length; ++i2) {
        childNode = createElm(oldParentVNode, newVNode2, i2, elm);
        if (childNode) {
          elm.appendChild(childNode);
        }
      }
    }
    if (BUILD.svg) {
      if (newVNode2.$tag$ === "svg") {
        isSvgMode = false;
      } else if (elm.tagName === "foreignObject") {
        isSvgMode = true;
      }
    }
  }
  elm["s-hn"] = hostTagName;
  if (BUILD.slotRelocation) {
    if (newVNode2.$flags$ & (2 | 1)) {
      elm["s-sr"] = true;
      elm["s-cr"] = contentRef;
      elm["s-sn"] = newVNode2.$name$ || "";
      elm["s-rf"] = (_a = newVNode2.$attrs$) == null ? void 0 : _a.ref;
      oldVNode = oldParentVNode && oldParentVNode.$children$ && oldParentVNode.$children$[childIndex];
      if (oldVNode && oldVNode.$tag$ === newVNode2.$tag$ && oldParentVNode.$elm$) {
        if (BUILD.experimentalSlotFixes) {
          relocateToHostRoot(oldParentVNode.$elm$);
        } else {
          putBackInOriginalLocation(oldParentVNode.$elm$, false);
        }
      }
    }
  }
  return elm;
};
var relocateToHostRoot = (parentElm) => {
  plt.$flags$ |= 1;
  const host = parentElm.closest(hostTagName.toLowerCase());
  if (host != null) {
    const contentRefNode = Array.from(host.childNodes).find((ref) => ref["s-cr"]);
    const childNodeArray = Array.from(parentElm.childNodes);
    for (const childNode of contentRefNode ? childNodeArray.reverse() : childNodeArray) {
      if (childNode["s-sh"] != null) {
        host.insertBefore(childNode, contentRefNode != null ? contentRefNode : null);
        childNode["s-sh"] = void 0;
        checkSlotRelocate = true;
      }
    }
  }
  plt.$flags$ &= ~1;
};
var putBackInOriginalLocation = (parentElm, recursive) => {
  plt.$flags$ |= 1;
  const oldSlotChildNodes = Array.from(parentElm.childNodes);
  if (parentElm["s-sr"] && BUILD.experimentalSlotFixes) {
    let node = parentElm;
    while (node = node.nextSibling) {
      if (node && node["s-sn"] === parentElm["s-sn"] && node["s-sh"] === hostTagName) {
        oldSlotChildNodes.push(node);
      }
    }
  }
  for (let i2 = oldSlotChildNodes.length - 1; i2 >= 0; i2--) {
    const childNode = oldSlotChildNodes[i2];
    if (childNode["s-hn"] !== hostTagName && childNode["s-ol"]) {
      parentReferenceNode(childNode).insertBefore(childNode, referenceNode(childNode));
      childNode["s-ol"].remove();
      childNode["s-ol"] = void 0;
      childNode["s-sh"] = void 0;
      checkSlotRelocate = true;
    }
    if (recursive) {
      putBackInOriginalLocation(childNode, recursive);
    }
  }
  plt.$flags$ &= ~1;
};
var addVnodes = (parentElm, before, parentVNode, vnodes, startIdx, endIdx) => {
  let containerElm = BUILD.slotRelocation && parentElm["s-cr"] && parentElm["s-cr"].parentNode || parentElm;
  let childNode;
  if (BUILD.shadowDom && containerElm.shadowRoot && containerElm.tagName === hostTagName) {
    containerElm = containerElm.shadowRoot;
  }
  for (; startIdx <= endIdx; ++startIdx) {
    if (vnodes[startIdx]) {
      childNode = createElm(null, parentVNode, startIdx, parentElm);
      if (childNode) {
        vnodes[startIdx].$elm$ = childNode;
        containerElm.insertBefore(childNode, BUILD.slotRelocation ? referenceNode(before) : before);
      }
    }
  }
};
var removeVnodes = (vnodes, startIdx, endIdx) => {
  for (let index = startIdx; index <= endIdx; ++index) {
    const vnode = vnodes[index];
    if (vnode) {
      const elm = vnode.$elm$;
      nullifyVNodeRefs(vnode);
      if (elm) {
        if (BUILD.slotRelocation) {
          checkSlotFallbackVisibility = true;
          if (elm["s-ol"]) {
            elm["s-ol"].remove();
          } else {
            putBackInOriginalLocation(elm, true);
          }
        }
        elm.remove();
      }
    }
  }
};
var updateChildren = (parentElm, oldCh, newVNode2, newCh, isInitialRender = false) => {
  let oldStartIdx = 0;
  let newStartIdx = 0;
  let idxInOld = 0;
  let i2 = 0;
  let oldEndIdx = oldCh.length - 1;
  let oldStartVnode = oldCh[0];
  let oldEndVnode = oldCh[oldEndIdx];
  let newEndIdx = newCh.length - 1;
  let newStartVnode = newCh[0];
  let newEndVnode = newCh[newEndIdx];
  let node;
  let elmToMove;
  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    if (oldStartVnode == null) {
      oldStartVnode = oldCh[++oldStartIdx];
    } else if (oldEndVnode == null) {
      oldEndVnode = oldCh[--oldEndIdx];
    } else if (newStartVnode == null) {
      newStartVnode = newCh[++newStartIdx];
    } else if (newEndVnode == null) {
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldStartVnode, newStartVnode, isInitialRender)) {
      patch(oldStartVnode, newStartVnode, isInitialRender);
      oldStartVnode = oldCh[++oldStartIdx];
      newStartVnode = newCh[++newStartIdx];
    } else if (isSameVnode(oldEndVnode, newEndVnode, isInitialRender)) {
      patch(oldEndVnode, newEndVnode, isInitialRender);
      oldEndVnode = oldCh[--oldEndIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldStartVnode, newEndVnode, isInitialRender)) {
      if (BUILD.slotRelocation && (oldStartVnode.$tag$ === "slot" || newEndVnode.$tag$ === "slot")) {
        putBackInOriginalLocation(oldStartVnode.$elm$.parentNode, false);
      }
      patch(oldStartVnode, newEndVnode, isInitialRender);
      parentElm.insertBefore(oldStartVnode.$elm$, oldEndVnode.$elm$.nextSibling);
      oldStartVnode = oldCh[++oldStartIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldEndVnode, newStartVnode, isInitialRender)) {
      if (BUILD.slotRelocation && (oldStartVnode.$tag$ === "slot" || newEndVnode.$tag$ === "slot")) {
        putBackInOriginalLocation(oldEndVnode.$elm$.parentNode, false);
      }
      patch(oldEndVnode, newStartVnode, isInitialRender);
      parentElm.insertBefore(oldEndVnode.$elm$, oldStartVnode.$elm$);
      oldEndVnode = oldCh[--oldEndIdx];
      newStartVnode = newCh[++newStartIdx];
    } else {
      idxInOld = -1;
      if (BUILD.vdomKey) {
        for (i2 = oldStartIdx; i2 <= oldEndIdx; ++i2) {
          if (oldCh[i2] && oldCh[i2].$key$ !== null && oldCh[i2].$key$ === newStartVnode.$key$) {
            idxInOld = i2;
            break;
          }
        }
      }
      if (BUILD.vdomKey && idxInOld >= 0) {
        elmToMove = oldCh[idxInOld];
        if (elmToMove.$tag$ !== newStartVnode.$tag$) {
          node = createElm(oldCh && oldCh[newStartIdx], newVNode2, idxInOld, parentElm);
        } else {
          patch(elmToMove, newStartVnode, isInitialRender);
          oldCh[idxInOld] = void 0;
          node = elmToMove.$elm$;
        }
        newStartVnode = newCh[++newStartIdx];
      } else {
        node = createElm(oldCh && oldCh[newStartIdx], newVNode2, newStartIdx, parentElm);
        newStartVnode = newCh[++newStartIdx];
      }
      if (node) {
        if (BUILD.slotRelocation) {
          parentReferenceNode(oldStartVnode.$elm$).insertBefore(node, referenceNode(oldStartVnode.$elm$));
        } else {
          oldStartVnode.$elm$.parentNode.insertBefore(node, oldStartVnode.$elm$);
        }
      }
    }
  }
  if (oldStartIdx > oldEndIdx) {
    addVnodes(
      parentElm,
      newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].$elm$,
      newVNode2,
      newCh,
      newStartIdx,
      newEndIdx
    );
  } else if (BUILD.updatable && newStartIdx > newEndIdx) {
    removeVnodes(oldCh, oldStartIdx, oldEndIdx);
  }
};
var isSameVnode = (leftVNode, rightVNode, isInitialRender = false) => {
  if (leftVNode.$tag$ === rightVNode.$tag$) {
    if (BUILD.slotRelocation && leftVNode.$tag$ === "slot") {
      return leftVNode.$name$ === rightVNode.$name$;
    }
    if (BUILD.vdomKey && !isInitialRender) {
      return leftVNode.$key$ === rightVNode.$key$;
    }
    return true;
  }
  return false;
};
var referenceNode = (node) => {
  return node && node["s-ol"] || node;
};
var parentReferenceNode = (node) => (node["s-ol"] ? node["s-ol"] : node).parentNode;
var patch = (oldVNode, newVNode2, isInitialRender = false) => {
  const elm = newVNode2.$elm$ = oldVNode.$elm$;
  const oldChildren = oldVNode.$children$;
  const newChildren = newVNode2.$children$;
  const tag = newVNode2.$tag$;
  const text = newVNode2.$text$;
  let defaultHolder;
  if (!BUILD.vdomText || text === null) {
    if (BUILD.svg) {
      isSvgMode = tag === "svg" ? true : tag === "foreignObject" ? false : isSvgMode;
    }
    if (BUILD.vdomAttribute || BUILD.reflect) {
      if (BUILD.slot && tag === "slot" && !useNativeShadowDom) {
        if (BUILD.experimentalSlotFixes && oldVNode.$name$ !== newVNode2.$name$) {
          newVNode2.$elm$["s-sn"] = newVNode2.$name$ || "";
          relocateToHostRoot(newVNode2.$elm$.parentElement);
        }
      } else {
        updateElement(oldVNode, newVNode2, isSvgMode);
      }
    }
    if (BUILD.updatable && oldChildren !== null && newChildren !== null) {
      updateChildren(elm, oldChildren, newVNode2, newChildren, isInitialRender);
    } else if (newChildren !== null) {
      if (BUILD.updatable && BUILD.vdomText && oldVNode.$text$ !== null) {
        elm.textContent = "";
      }
      addVnodes(elm, null, newVNode2, newChildren, 0, newChildren.length - 1);
    } else if (BUILD.updatable && oldChildren !== null) {
      removeVnodes(oldChildren, 0, oldChildren.length - 1);
    }
    if (BUILD.svg && isSvgMode && tag === "svg") {
      isSvgMode = false;
    }
  } else if (BUILD.vdomText && BUILD.slotRelocation && (defaultHolder = elm["s-cr"])) {
    defaultHolder.parentNode.textContent = text;
  } else if (BUILD.vdomText && oldVNode.$text$ !== text) {
    elm.data = text;
  }
};
var updateFallbackSlotVisibility = (elm) => {
  const childNodes = elm.childNodes;
  for (const childNode of childNodes) {
    if (childNode.nodeType === 1) {
      if (childNode["s-sr"]) {
        const slotName = childNode["s-sn"];
        childNode.hidden = false;
        for (const siblingNode of childNodes) {
          if (siblingNode !== childNode) {
            if (siblingNode["s-hn"] !== childNode["s-hn"] || slotName !== "") {
              if (siblingNode.nodeType === 1 && (slotName === siblingNode.getAttribute("slot") || slotName === siblingNode["s-sn"]) || siblingNode.nodeType === 3 && slotName === siblingNode["s-sn"]) {
                childNode.hidden = true;
                break;
              }
            } else {
              if (siblingNode.nodeType === 1 || siblingNode.nodeType === 3 && siblingNode.textContent.trim() !== "") {
                childNode.hidden = true;
                break;
              }
            }
          }
        }
      }
      updateFallbackSlotVisibility(childNode);
    }
  }
};
var relocateNodes = [];
var markSlotContentForRelocation = (elm) => {
  let node;
  let hostContentNodes;
  let j;
  for (const childNode of elm.childNodes) {
    if (childNode["s-sr"] && (node = childNode["s-cr"]) && node.parentNode) {
      hostContentNodes = node.parentNode.childNodes;
      const slotName = childNode["s-sn"];
      for (j = hostContentNodes.length - 1; j >= 0; j--) {
        node = hostContentNodes[j];
        if (!node["s-cn"] && !node["s-nr"] && node["s-hn"] !== childNode["s-hn"] && (!BUILD.experimentalSlotFixes || !node["s-sh"] || node["s-sh"] !== childNode["s-hn"])) {
          if (isNodeLocatedInSlot(node, slotName)) {
            let relocateNodeData = relocateNodes.find((r) => r.$nodeToRelocate$ === node);
            checkSlotFallbackVisibility = true;
            node["s-sn"] = node["s-sn"] || slotName;
            if (relocateNodeData) {
              relocateNodeData.$nodeToRelocate$["s-sh"] = childNode["s-hn"];
              relocateNodeData.$slotRefNode$ = childNode;
            } else {
              node["s-sh"] = childNode["s-hn"];
              relocateNodes.push({
                $slotRefNode$: childNode,
                $nodeToRelocate$: node
              });
            }
            if (node["s-sr"]) {
              relocateNodes.map((relocateNode) => {
                if (isNodeLocatedInSlot(relocateNode.$nodeToRelocate$, node["s-sn"])) {
                  relocateNodeData = relocateNodes.find((r) => r.$nodeToRelocate$ === node);
                  if (relocateNodeData && !relocateNode.$slotRefNode$) {
                    relocateNode.$slotRefNode$ = relocateNodeData.$slotRefNode$;
                  }
                }
              });
            }
          } else if (!relocateNodes.some((r) => r.$nodeToRelocate$ === node)) {
            relocateNodes.push({
              $nodeToRelocate$: node
            });
          }
        }
      }
    }
    if (childNode.nodeType === 1) {
      markSlotContentForRelocation(childNode);
    }
  }
};
var isNodeLocatedInSlot = (nodeToRelocate, slotName) => {
  if (nodeToRelocate.nodeType === 1) {
    if (nodeToRelocate.getAttribute("slot") === null && slotName === "") {
      return true;
    }
    if (nodeToRelocate.getAttribute("slot") === slotName) {
      return true;
    }
    return false;
  }
  if (nodeToRelocate["s-sn"] === slotName) {
    return true;
  }
  return slotName === "";
};
var nullifyVNodeRefs = (vNode) => {
  if (BUILD.vdomRef) {
    vNode.$attrs$ && vNode.$attrs$.ref && vNode.$attrs$.ref(null);
    vNode.$children$ && vNode.$children$.map(nullifyVNodeRefs);
  }
};
var renderVdom = (hostRef, renderFnResults, isInitialLoad = false) => {
  var _a, _b, _c, _d, _e;
  const hostElm = hostRef.$hostElement$;
  const cmpMeta = hostRef.$cmpMeta$;
  const oldVNode = hostRef.$vnode$ || newVNode(null, null);
  const rootVnode = isHost(renderFnResults) ? renderFnResults : h(null, null, renderFnResults);
  hostTagName = hostElm.tagName;
  if (BUILD.isDev && Array.isArray(renderFnResults) && renderFnResults.some(isHost)) {
    throw new Error(`The <Host> must be the single root component.
Looks like the render() function of "${hostTagName.toLowerCase()}" is returning an array that contains the <Host>.

The render() function should look like this instead:

render() {
  // Do not return an array
  return (
    <Host>{content}</Host>
  );
}
  `);
  }
  if (BUILD.reflect && cmpMeta.$attrsToReflect$) {
    rootVnode.$attrs$ = rootVnode.$attrs$ || {};
    cmpMeta.$attrsToReflect$.map(
      ([propName, attribute]) => rootVnode.$attrs$[attribute] = hostElm[propName]
    );
  }
  if (isInitialLoad && rootVnode.$attrs$) {
    for (const key of Object.keys(rootVnode.$attrs$)) {
      if (hostElm.hasAttribute(key) && !["key", "ref", "style", "class"].includes(key)) {
        rootVnode.$attrs$[key] = hostElm[key];
      }
    }
  }
  rootVnode.$tag$ = null;
  rootVnode.$flags$ |= 4;
  hostRef.$vnode$ = rootVnode;
  rootVnode.$elm$ = oldVNode.$elm$ = BUILD.shadowDom ? hostElm.shadowRoot || hostElm : hostElm;
  if (BUILD.scoped || BUILD.shadowDom) {
    scopeId = hostElm["s-sc"];
  }
  useNativeShadowDom = supportsShadow && (cmpMeta.$flags$ & 1) !== 0;
  if (BUILD.slotRelocation) {
    contentRef = hostElm["s-cr"];
    checkSlotFallbackVisibility = false;
  }
  patch(oldVNode, rootVnode, isInitialLoad);
  if (BUILD.slotRelocation) {
    plt.$flags$ |= 1;
    if (checkSlotRelocate) {
      markSlotContentForRelocation(rootVnode.$elm$);
      for (const relocateData of relocateNodes) {
        const nodeToRelocate = relocateData.$nodeToRelocate$;
        if (!nodeToRelocate["s-ol"]) {
          const orgLocationNode = BUILD.isDebug || BUILD.hydrateServerSide ? originalLocationDebugNode(nodeToRelocate) : doc.createTextNode("");
          orgLocationNode["s-nr"] = nodeToRelocate;
          nodeToRelocate.parentNode.insertBefore(nodeToRelocate["s-ol"] = orgLocationNode, nodeToRelocate);
        }
      }
      for (const relocateData of relocateNodes) {
        const nodeToRelocate = relocateData.$nodeToRelocate$;
        const slotRefNode = relocateData.$slotRefNode$;
        if (slotRefNode) {
          const parentNodeRef = slotRefNode.parentNode;
          let insertBeforeNode = slotRefNode.nextSibling;
          if (!BUILD.experimentalSlotFixes || insertBeforeNode && insertBeforeNode.nodeType === 1) {
            let orgLocationNode = (_a = nodeToRelocate["s-ol"]) == null ? void 0 : _a.previousSibling;
            while (orgLocationNode) {
              let refNode = (_b = orgLocationNode["s-nr"]) != null ? _b : null;
              if (refNode && refNode["s-sn"] === nodeToRelocate["s-sn"] && parentNodeRef === refNode.parentNode) {
                refNode = refNode.nextSibling;
                while (refNode === nodeToRelocate || (refNode == null ? void 0 : refNode["s-sr"])) {
                  refNode = refNode == null ? void 0 : refNode.nextSibling;
                }
                if (!refNode || !refNode["s-nr"]) {
                  insertBeforeNode = refNode;
                  break;
                }
              }
              orgLocationNode = orgLocationNode.previousSibling;
            }
          }
          if (!insertBeforeNode && parentNodeRef !== nodeToRelocate.parentNode || nodeToRelocate.nextSibling !== insertBeforeNode) {
            if (nodeToRelocate !== insertBeforeNode) {
              if (!BUILD.experimentalSlotFixes && !nodeToRelocate["s-hn"] && nodeToRelocate["s-ol"]) {
                nodeToRelocate["s-hn"] = nodeToRelocate["s-ol"].parentNode.nodeName;
              }
              parentNodeRef.insertBefore(nodeToRelocate, insertBeforeNode);
              if (nodeToRelocate.nodeType === 1) {
                nodeToRelocate.hidden = (_c = nodeToRelocate["s-ih"]) != null ? _c : false;
              }
            }
          }
          nodeToRelocate && typeof slotRefNode["s-rf"] === "function" && slotRefNode["s-rf"](nodeToRelocate);
        } else {
          if (nodeToRelocate.nodeType === 1) {
            if (isInitialLoad) {
              nodeToRelocate["s-ih"] = (_d = nodeToRelocate.hidden) != null ? _d : false;
            }
            nodeToRelocate.hidden = true;
          }
        }
      }
    }
    if (checkSlotFallbackVisibility) {
      updateFallbackSlotVisibility(rootVnode.$elm$);
    }
    plt.$flags$ &= ~1;
    relocateNodes.length = 0;
  }
  if (BUILD.experimentalScopedSlotChanges && cmpMeta.$flags$ & 2) {
    for (const childNode of rootVnode.$elm$.childNodes) {
      if (childNode["s-hn"] !== hostTagName && !childNode["s-sh"]) {
        if (isInitialLoad && childNode["s-ih"] == null) {
          childNode["s-ih"] = (_e = childNode.hidden) != null ? _e : false;
        }
        childNode.hidden = true;
      }
    }
  }
  contentRef = void 0;
};
var slotReferenceDebugNode = (slotVNode) => doc.createComment(
  `<slot${slotVNode.$name$ ? ' name="' + slotVNode.$name$ + '"' : ""}> (host=${hostTagName.toLowerCase()})`
);
var originalLocationDebugNode = (nodeToRelocate) => doc.createComment(
  `org-location for ` + (nodeToRelocate.localName ? `<${nodeToRelocate.localName}> (host=${nodeToRelocate["s-hn"]})` : `[${nodeToRelocate.textContent}]`)
);
var attachToAncestor = (hostRef, ancestorComponent) => {
  if (BUILD.asyncLoading && ancestorComponent && !hostRef.$onRenderResolve$ && ancestorComponent["s-p"]) {
    ancestorComponent["s-p"].push(new Promise((r) => hostRef.$onRenderResolve$ = r));
  }
};
var scheduleUpdate = (hostRef, isInitialLoad) => {
  if (BUILD.taskQueue && BUILD.updatable) {
    hostRef.$flags$ |= 16;
  }
  if (BUILD.asyncLoading && hostRef.$flags$ & 4) {
    hostRef.$flags$ |= 512;
    return;
  }
  attachToAncestor(hostRef, hostRef.$ancestorComponent$);
  const dispatch = () => dispatchHooks(hostRef, isInitialLoad);
  return BUILD.taskQueue ? writeTask(dispatch) : dispatch();
};
var dispatchHooks = (hostRef, isInitialLoad) => {
  const elm = hostRef.$hostElement$;
  const endSchedule = createTime("scheduleUpdate", hostRef.$cmpMeta$.$tagName$);
  const instance = BUILD.lazyLoad ? hostRef.$lazyInstance$ : elm;
  let maybePromise;
  if (isInitialLoad) {
    if (BUILD.lazyLoad && BUILD.hostListener) {
      hostRef.$flags$ |= 256;
      if (hostRef.$queuedListeners$) {
        hostRef.$queuedListeners$.map(([methodName, event]) => safeCall(instance, methodName, event));
        hostRef.$queuedListeners$ = void 0;
      }
    }
    emitLifecycleEvent(elm, "componentWillLoad");
    if (BUILD.cmpWillLoad) {
      maybePromise = safeCall(instance, "componentWillLoad");
    }
  } else {
    emitLifecycleEvent(elm, "componentWillUpdate");
    if (BUILD.cmpWillUpdate) {
      maybePromise = safeCall(instance, "componentWillUpdate");
    }
  }
  emitLifecycleEvent(elm, "componentWillRender");
  if (BUILD.cmpWillRender) {
    maybePromise = enqueue(maybePromise, () => safeCall(instance, "componentWillRender"));
  }
  endSchedule();
  return enqueue(maybePromise, () => updateComponent(hostRef, instance, isInitialLoad));
};
var enqueue = (maybePromise, fn) => isPromisey(maybePromise) ? maybePromise.then(fn) : fn();
var isPromisey = (maybePromise) => maybePromise instanceof Promise || maybePromise && maybePromise.then && typeof maybePromise.then === "function";
var updateComponent = async (hostRef, instance, isInitialLoad) => {
  var _a;
  const elm = hostRef.$hostElement$;
  const endUpdate = createTime("update", hostRef.$cmpMeta$.$tagName$);
  const rc = elm["s-rc"];
  if (BUILD.style && isInitialLoad) {
    attachStyles(hostRef);
  }
  const endRender = createTime("render", hostRef.$cmpMeta$.$tagName$);
  if (BUILD.isDev) {
    hostRef.$flags$ |= 1024;
  }
  if (BUILD.hydrateServerSide) {
    await callRender(hostRef, instance, elm, isInitialLoad);
  } else {
    callRender(hostRef, instance, elm, isInitialLoad);
  }
  if (BUILD.isDev) {
    hostRef.$renderCount$ = hostRef.$renderCount$ === void 0 ? 1 : hostRef.$renderCount$ + 1;
    hostRef.$flags$ &= ~1024;
  }
  if (BUILD.hydrateServerSide) {
    try {
      serverSideConnected(elm);
      if (isInitialLoad) {
        if (hostRef.$cmpMeta$.$flags$ & 1) {
          elm["s-en"] = "";
        } else if (hostRef.$cmpMeta$.$flags$ & 2) {
          elm["s-en"] = "c";
        }
      }
    } catch (e2) {
      consoleError(e2, elm);
    }
  }
  if (BUILD.asyncLoading && rc) {
    rc.map((cb) => cb());
    elm["s-rc"] = void 0;
  }
  endRender();
  endUpdate();
  if (BUILD.asyncLoading) {
    const childrenPromises = (_a = elm["s-p"]) != null ? _a : [];
    const postUpdate = () => postUpdateComponent(hostRef);
    if (childrenPromises.length === 0) {
      postUpdate();
    } else {
      Promise.all(childrenPromises).then(postUpdate);
      hostRef.$flags$ |= 4;
      childrenPromises.length = 0;
    }
  } else {
    postUpdateComponent(hostRef);
  }
};
var renderingRef = null;
var callRender = (hostRef, instance, elm, isInitialLoad) => {
  const allRenderFn = BUILD.allRenderFn ? true : false;
  const lazyLoad = BUILD.lazyLoad ? true : false;
  const taskQueue = BUILD.taskQueue ? true : false;
  const updatable = BUILD.updatable ? true : false;
  try {
    renderingRef = instance;
    instance = allRenderFn ? instance.render() : instance.render && instance.render();
    if (updatable && taskQueue) {
      hostRef.$flags$ &= ~16;
    }
    if (updatable || lazyLoad) {
      hostRef.$flags$ |= 2;
    }
    if (BUILD.hasRenderFn || BUILD.reflect) {
      if (BUILD.vdomRender || BUILD.reflect) {
        if (BUILD.hydrateServerSide) {
          return Promise.resolve(instance).then((value) => renderVdom(hostRef, value, isInitialLoad));
        } else {
          renderVdom(hostRef, instance, isInitialLoad);
        }
      } else {
        const shadowRoot = elm.shadowRoot;
        if (hostRef.$cmpMeta$.$flags$ & 1) {
          shadowRoot.textContent = instance;
        } else {
          elm.textContent = instance;
        }
      }
    }
  } catch (e2) {
    consoleError(e2, hostRef.$hostElement$);
  }
  renderingRef = null;
  return null;
};
var postUpdateComponent = (hostRef) => {
  const tagName = hostRef.$cmpMeta$.$tagName$;
  const elm = hostRef.$hostElement$;
  const endPostUpdate = createTime("postUpdate", tagName);
  const instance = BUILD.lazyLoad ? hostRef.$lazyInstance$ : elm;
  const ancestorComponent = hostRef.$ancestorComponent$;
  if (BUILD.cmpDidRender) {
    if (BUILD.isDev) {
      hostRef.$flags$ |= 1024;
    }
    safeCall(instance, "componentDidRender");
    if (BUILD.isDev) {
      hostRef.$flags$ &= ~1024;
    }
  }
  emitLifecycleEvent(elm, "componentDidRender");
  if (!(hostRef.$flags$ & 64)) {
    hostRef.$flags$ |= 64;
    if (BUILD.asyncLoading && BUILD.cssAnnotations) {
      addHydratedFlag(elm);
    }
    if (BUILD.cmpDidLoad) {
      if (BUILD.isDev) {
        hostRef.$flags$ |= 2048;
      }
      safeCall(instance, "componentDidLoad");
      if (BUILD.isDev) {
        hostRef.$flags$ &= ~2048;
      }
    }
    emitLifecycleEvent(elm, "componentDidLoad");
    endPostUpdate();
    if (BUILD.asyncLoading) {
      hostRef.$onReadyResolve$(elm);
      if (!ancestorComponent) {
        appDidLoad(tagName);
      }
    }
  } else {
    if (BUILD.cmpDidUpdate) {
      if (BUILD.isDev) {
        hostRef.$flags$ |= 1024;
      }
      safeCall(instance, "componentDidUpdate");
      if (BUILD.isDev) {
        hostRef.$flags$ &= ~1024;
      }
    }
    emitLifecycleEvent(elm, "componentDidUpdate");
    endPostUpdate();
  }
  if (BUILD.method && BUILD.lazyLoad) {
    hostRef.$onInstanceResolve$(elm);
  }
  if (BUILD.asyncLoading) {
    if (hostRef.$onRenderResolve$) {
      hostRef.$onRenderResolve$();
      hostRef.$onRenderResolve$ = void 0;
    }
    if (hostRef.$flags$ & 512) {
      nextTick(() => scheduleUpdate(hostRef, false));
    }
    hostRef.$flags$ &= ~(4 | 512);
  }
};
var forceUpdate = (ref) => {
  if (BUILD.updatable && (Build.isBrowser || Build.isTesting)) {
    const hostRef = getHostRef(ref);
    const isConnected = hostRef.$hostElement$.isConnected;
    if (isConnected && (hostRef.$flags$ & (2 | 16)) === 2) {
      scheduleUpdate(hostRef, false);
    }
    return isConnected;
  }
  return false;
};
var appDidLoad = (who) => {
  if (BUILD.cssAnnotations) {
    addHydratedFlag(doc.documentElement);
  }
  if (BUILD.asyncQueue) {
    plt.$flags$ |= 2;
  }
  nextTick(() => emitEvent(win, "appload", { detail: { namespace: NAMESPACE } }));
  if (BUILD.profile && performance.measure) {
    performance.measure(`[Stencil] ${NAMESPACE} initial load (by ${who})`, "st:app:start");
  }
};
var safeCall = (instance, method, arg) => {
  if (instance && instance[method]) {
    try {
      return instance[method](arg);
    } catch (e2) {
      consoleError(e2);
    }
  }
  return void 0;
};
var emitLifecycleEvent = (elm, lifecycleName) => {
  if (BUILD.lifecycleDOMEvents) {
    emitEvent(elm, "stencil_" + lifecycleName, {
      bubbles: true,
      composed: true,
      detail: {
        namespace: NAMESPACE
      }
    });
  }
};
var addHydratedFlag = (elm) => BUILD.hydratedClass ? elm.classList.add("hydrated") : BUILD.hydratedAttribute ? elm.setAttribute("hydrated", "") : void 0;
var serverSideConnected = (elm) => {
  const children = elm.children;
  if (children != null) {
    for (let i2 = 0, ii = children.length; i2 < ii; i2++) {
      const childElm = children[i2];
      if (typeof childElm.connectedCallback === "function") {
        childElm.connectedCallback();
      }
      serverSideConnected(childElm);
    }
  }
};
var getValue = (ref, propName) => getHostRef(ref).$instanceValues$.get(propName);
var setValue = (ref, propName, newVal, cmpMeta) => {
  const hostRef = getHostRef(ref);
  const elm = BUILD.lazyLoad ? hostRef.$hostElement$ : ref;
  const oldVal = hostRef.$instanceValues$.get(propName);
  const flags = hostRef.$flags$;
  const instance = BUILD.lazyLoad ? hostRef.$lazyInstance$ : elm;
  newVal = parsePropertyValue(newVal, cmpMeta.$members$[propName][0]);
  const areBothNaN = Number.isNaN(oldVal) && Number.isNaN(newVal);
  const didValueChange = newVal !== oldVal && !areBothNaN;
  if ((!BUILD.lazyLoad || !(flags & 8) || oldVal === void 0) && didValueChange) {
    hostRef.$instanceValues$.set(propName, newVal);
    if (BUILD.isDev) {
      if (hostRef.$flags$ & 1024) {
        consoleDevWarn(
          `The state/prop "${propName}" changed during rendering. This can potentially lead to infinite-loops and other bugs.`,
          "\nElement",
          elm,
          "\nNew value",
          newVal,
          "\nOld value",
          oldVal
        );
      } else if (hostRef.$flags$ & 2048) {
        consoleDevWarn(
          `The state/prop "${propName}" changed during "componentDidLoad()", this triggers extra re-renders, try to setup on "componentWillLoad()"`,
          "\nElement",
          elm,
          "\nNew value",
          newVal,
          "\nOld value",
          oldVal
        );
      }
    }
    if (!BUILD.lazyLoad || instance) {
      if (BUILD.watchCallback && cmpMeta.$watchers$ && flags & 128) {
        const watchMethods = cmpMeta.$watchers$[propName];
        if (watchMethods) {
          watchMethods.map((watchMethodName) => {
            try {
              instance[watchMethodName](newVal, oldVal, propName);
            } catch (e2) {
              consoleError(e2, elm);
            }
          });
        }
      }
      if (BUILD.updatable && (flags & (2 | 16)) === 2) {
        if (BUILD.cmpShouldUpdate && instance.componentShouldUpdate) {
          if (instance.componentShouldUpdate(newVal, oldVal, propName) === false) {
            return;
          }
        }
        scheduleUpdate(hostRef, false);
      }
    }
  }
};
var proxyComponent = (Cstr, cmpMeta, flags) => {
  var _a;
  const prototype = Cstr.prototype;
  if (BUILD.formAssociated && cmpMeta.$flags$ & 64 && flags & 1) {
    FORM_ASSOCIATED_CUSTOM_ELEMENT_CALLBACKS.forEach(
      (cbName) => Object.defineProperty(prototype, cbName, {
        value(...args) {
          const hostRef = getHostRef(this);
          const elm = BUILD.lazyLoad ? hostRef.$hostElement$ : this;
          const instance = BUILD.lazyLoad ? hostRef.$lazyInstance$ : elm;
          if (!instance) {
            hostRef.$onReadyPromise$.then((instance2) => {
              const cb = instance2[cbName];
              typeof cb === "function" && cb.call(instance2, ...args);
            });
          } else {
            const cb = instance[cbName];
            typeof cb === "function" && cb.call(instance, ...args);
          }
        }
      })
    );
  }
  if (BUILD.member && cmpMeta.$members$) {
    if (BUILD.watchCallback && Cstr.watchers) {
      cmpMeta.$watchers$ = Cstr.watchers;
    }
    const members = Object.entries(cmpMeta.$members$);
    members.map(([memberName, [memberFlags]]) => {
      if ((BUILD.prop || BUILD.state) && (memberFlags & 31 || (!BUILD.lazyLoad || flags & 2) && memberFlags & 32)) {
        Object.defineProperty(prototype, memberName, {
          get() {
            return getValue(this, memberName);
          },
          set(newValue) {
            if (BUILD.isDev) {
              const ref = getHostRef(this);
              if (
                // we are proxying the instance (not element)
                (flags & 1) === 0 && // the element is not constructing
                (ref && ref.$flags$ & 8) === 0 && // the member is a prop
                (memberFlags & 31) !== 0 && // the member is not mutable
                (memberFlags & 1024) === 0
              ) {
                consoleDevWarn(
                  `@Prop() "${memberName}" on <${cmpMeta.$tagName$}> is immutable but was modified from within the component.
More information: https://stenciljs.com/docs/properties#prop-mutability`
                );
              }
            }
            setValue(this, memberName, newValue, cmpMeta);
          },
          configurable: true,
          enumerable: true
        });
      } else if (BUILD.lazyLoad && BUILD.method && flags & 1 && memberFlags & 64) {
        Object.defineProperty(prototype, memberName, {
          value(...args) {
            var _a2;
            const ref = getHostRef(this);
            return (_a2 = ref == null ? void 0 : ref.$onInstancePromise$) == null ? void 0 : _a2.then(() => {
              var _a3;
              return (_a3 = ref.$lazyInstance$) == null ? void 0 : _a3[memberName](...args);
            });
          }
        });
      }
    });
    if (BUILD.observeAttribute && (!BUILD.lazyLoad || flags & 1)) {
      const attrNameToPropName = /* @__PURE__ */ new Map();
      prototype.attributeChangedCallback = function(attrName, oldValue, newValue) {
        plt.jmp(() => {
          var _a2;
          const propName = attrNameToPropName.get(attrName);
          if (this.hasOwnProperty(propName)) {
            newValue = this[propName];
            delete this[propName];
          } else if (prototype.hasOwnProperty(propName) && typeof this[propName] === "number" && this[propName] == newValue) {
            return;
          } else if (propName == null) {
            const hostRef = getHostRef(this);
            const flags2 = hostRef == null ? void 0 : hostRef.$flags$;
            if (flags2 && !(flags2 & 8) && flags2 & 128 && newValue !== oldValue) {
              const elm = BUILD.lazyLoad ? hostRef.$hostElement$ : this;
              const instance = BUILD.lazyLoad ? hostRef.$lazyInstance$ : elm;
              const entry = (_a2 = cmpMeta.$watchers$) == null ? void 0 : _a2[attrName];
              entry == null ? void 0 : entry.forEach((callbackName) => {
                if (instance[callbackName] != null) {
                  instance[callbackName].call(instance, newValue, oldValue, attrName);
                }
              });
            }
            return;
          }
          this[propName] = newValue === null && typeof this[propName] === "boolean" ? false : newValue;
        });
      };
      Cstr.observedAttributes = Array.from(
        /* @__PURE__ */ new Set([
          ...Object.keys((_a = cmpMeta.$watchers$) != null ? _a : {}),
          ...members.filter(
            ([_, m]) => m[0] & 15
            /* HasAttribute */
          ).map(([propName, m]) => {
            var _a2;
            const attrName = m[1] || propName;
            attrNameToPropName.set(attrName, propName);
            if (BUILD.reflect && m[0] & 512) {
              (_a2 = cmpMeta.$attrsToReflect$) == null ? void 0 : _a2.push([propName, attrName]);
            }
            return attrName;
          })
        ])
      );
    }
  }
  return Cstr;
};
var initializeComponent = async (elm, hostRef, cmpMeta, hmrVersionId) => {
  let Cstr;
  if ((hostRef.$flags$ & 32) === 0) {
    hostRef.$flags$ |= 32;
    const bundleId = cmpMeta.$lazyBundleId$;
    if ((BUILD.lazyLoad || BUILD.hydrateClientSide) && bundleId) {
      Cstr = loadModule(cmpMeta, hostRef, hmrVersionId);
      if (Cstr.then) {
        const endLoad = uniqueTime(
          `st:load:${cmpMeta.$tagName$}:${hostRef.$modeName$}`,
          `[Stencil] Load module for <${cmpMeta.$tagName$}>`
        );
        Cstr = await Cstr;
        endLoad();
      }
      if ((BUILD.isDev || BUILD.isDebug) && !Cstr) {
        throw new Error(`Constructor for "${cmpMeta.$tagName$}#${hostRef.$modeName$}" was not found`);
      }
      if (BUILD.member && !Cstr.isProxied) {
        if (BUILD.watchCallback) {
          cmpMeta.$watchers$ = Cstr.watchers;
        }
        proxyComponent(
          Cstr,
          cmpMeta,
          2
          /* proxyState */
        );
        Cstr.isProxied = true;
      }
      const endNewInstance = createTime("createInstance", cmpMeta.$tagName$);
      if (BUILD.member) {
        hostRef.$flags$ |= 8;
      }
      try {
        new Cstr(hostRef);
      } catch (e2) {
        consoleError(e2);
      }
      if (BUILD.member) {
        hostRef.$flags$ &= ~8;
      }
      if (BUILD.watchCallback) {
        hostRef.$flags$ |= 128;
      }
      endNewInstance();
      fireConnectedCallback2(hostRef.$lazyInstance$);
    } else {
      Cstr = elm.constructor;
      customElements.whenDefined(cmpMeta.$tagName$).then(
        () => hostRef.$flags$ |= 128
        /* isWatchReady */
      );
    }
    if (BUILD.style && Cstr.style) {
      let style = Cstr.style;
      if (BUILD.mode && typeof style !== "string") {
        style = style[hostRef.$modeName$ = computeMode(elm)];
        if (BUILD.hydrateServerSide && hostRef.$modeName$) {
          elm.setAttribute("s-mode", hostRef.$modeName$);
        }
      }
      const scopeId2 = getScopeId(cmpMeta, hostRef.$modeName$);
      if (!styles.has(scopeId2)) {
        const endRegisterStyles = createTime("registerStyles", cmpMeta.$tagName$);
        if (!BUILD.hydrateServerSide && BUILD.shadowDom && // TODO(STENCIL-854): Remove code related to legacy shadowDomShim field
        BUILD.shadowDomShim && cmpMeta.$flags$ & 8) {
          style = await import("./shadow-css-FVUXYVUZ.js").then((m) => m.scopeCss(style, scopeId2, false));
        }
        registerStyle(scopeId2, style, !!(cmpMeta.$flags$ & 1));
        endRegisterStyles();
      }
    }
  }
  const ancestorComponent = hostRef.$ancestorComponent$;
  const schedule = () => scheduleUpdate(hostRef, true);
  if (BUILD.asyncLoading && ancestorComponent && ancestorComponent["s-rc"]) {
    ancestorComponent["s-rc"].push(schedule);
  } else {
    schedule();
  }
};
var fireConnectedCallback2 = (instance) => {
  if (BUILD.lazyLoad && BUILD.connectedCallback) {
    safeCall(instance, "connectedCallback");
  }
};
var connectedCallback = (elm) => {
  if ((plt.$flags$ & 1) === 0) {
    const hostRef = getHostRef(elm);
    const cmpMeta = hostRef.$cmpMeta$;
    const endConnected = createTime("connectedCallback", cmpMeta.$tagName$);
    if (BUILD.hostListenerTargetParent) {
      addHostEventListeners(elm, hostRef, cmpMeta.$listeners$, true);
    }
    if (!(hostRef.$flags$ & 1)) {
      hostRef.$flags$ |= 1;
      let hostId;
      if (BUILD.hydrateClientSide) {
        hostId = elm.getAttribute(HYDRATE_ID);
        if (hostId) {
          if (BUILD.shadowDom && supportsShadow && cmpMeta.$flags$ & 1) {
            const scopeId2 = BUILD.mode ? addStyle(elm.shadowRoot, cmpMeta, elm.getAttribute("s-mode")) : addStyle(elm.shadowRoot, cmpMeta);
            elm.classList.remove(scopeId2 + "-h", scopeId2 + "-s");
          }
          initializeClientHydrate(elm, cmpMeta.$tagName$, hostId, hostRef);
        }
      }
      if (BUILD.slotRelocation && !hostId) {
        if (BUILD.hydrateServerSide || (BUILD.slot || BUILD.shadowDom) && // TODO(STENCIL-854): Remove code related to legacy shadowDomShim field
        cmpMeta.$flags$ & (4 | 8)) {
          setContentReference(elm);
        }
      }
      if (BUILD.asyncLoading) {
        let ancestorComponent = elm;
        while (ancestorComponent = ancestorComponent.parentNode || ancestorComponent.host) {
          if (BUILD.hydrateClientSide && ancestorComponent.nodeType === 1 && ancestorComponent.hasAttribute("s-id") && ancestorComponent["s-p"] || ancestorComponent["s-p"]) {
            attachToAncestor(hostRef, hostRef.$ancestorComponent$ = ancestorComponent);
            break;
          }
        }
      }
      if (BUILD.prop && !BUILD.hydrateServerSide && cmpMeta.$members$) {
        Object.entries(cmpMeta.$members$).map(([memberName, [memberFlags]]) => {
          if (memberFlags & 31 && elm.hasOwnProperty(memberName)) {
            const value = elm[memberName];
            delete elm[memberName];
            elm[memberName] = value;
          }
        });
      }
      if (BUILD.initializeNextTick) {
        nextTick(() => initializeComponent(elm, hostRef, cmpMeta));
      } else {
        initializeComponent(elm, hostRef, cmpMeta);
      }
    } else {
      addHostEventListeners(elm, hostRef, cmpMeta.$listeners$, false);
      if (hostRef == null ? void 0 : hostRef.$lazyInstance$) {
        fireConnectedCallback2(hostRef.$lazyInstance$);
      } else if (hostRef == null ? void 0 : hostRef.$onReadyPromise$) {
        hostRef.$onReadyPromise$.then(() => fireConnectedCallback2(hostRef.$lazyInstance$));
      }
    }
    endConnected();
  }
};
var setContentReference = (elm) => {
  const contentRefElm = elm["s-cr"] = doc.createComment(
    BUILD.isDebug ? `content-ref (host=${elm.localName})` : ""
  );
  contentRefElm["s-cn"] = true;
  elm.insertBefore(contentRefElm, elm.firstChild);
};
var disconnectInstance = (instance) => {
  if (BUILD.lazyLoad && BUILD.disconnectedCallback) {
    safeCall(instance, "disconnectedCallback");
  }
  if (BUILD.cmpDidUnload) {
    safeCall(instance, "componentDidUnload");
  }
};
var disconnectedCallback = async (elm) => {
  if ((plt.$flags$ & 1) === 0) {
    const hostRef = getHostRef(elm);
    if (BUILD.hostListener) {
      if (hostRef.$rmListeners$) {
        hostRef.$rmListeners$.map((rmListener) => rmListener());
        hostRef.$rmListeners$ = void 0;
      }
    }
    if (!BUILD.lazyLoad) {
      disconnectInstance(elm);
    } else if (hostRef == null ? void 0 : hostRef.$lazyInstance$) {
      disconnectInstance(hostRef.$lazyInstance$);
    } else if (hostRef == null ? void 0 : hostRef.$onReadyPromise$) {
      hostRef.$onReadyPromise$.then(() => disconnectInstance(hostRef.$lazyInstance$));
    }
  }
};
var patchPseudoShadowDom = (hostElementPrototype, descriptorPrototype) => {
  patchCloneNode(hostElementPrototype);
  patchSlotAppendChild(hostElementPrototype);
  patchSlotAppend(hostElementPrototype);
  patchSlotPrepend(hostElementPrototype);
  patchSlotInsertAdjacentElement(hostElementPrototype);
  patchSlotInsertAdjacentHTML(hostElementPrototype);
  patchSlotInsertAdjacentText(hostElementPrototype);
  patchTextContent(hostElementPrototype);
  patchChildSlotNodes(hostElementPrototype, descriptorPrototype);
  patchSlotRemoveChild(hostElementPrototype);
};
var patchCloneNode = (HostElementPrototype) => {
  const orgCloneNode = HostElementPrototype.cloneNode;
  HostElementPrototype.cloneNode = function(deep) {
    const srcNode = this;
    const isShadowDom = BUILD.shadowDom ? srcNode.shadowRoot && supportsShadow : false;
    const clonedNode = orgCloneNode.call(srcNode, isShadowDom ? deep : false);
    if (BUILD.slot && !isShadowDom && deep) {
      let i2 = 0;
      let slotted, nonStencilNode;
      const stencilPrivates = [
        "s-id",
        "s-cr",
        "s-lr",
        "s-rc",
        "s-sc",
        "s-p",
        "s-cn",
        "s-sr",
        "s-sn",
        "s-hn",
        "s-ol",
        "s-nr",
        "s-si",
        "s-rf"
      ];
      for (; i2 < srcNode.childNodes.length; i2++) {
        slotted = srcNode.childNodes[i2]["s-nr"];
        nonStencilNode = stencilPrivates.every((privateField) => !srcNode.childNodes[i2][privateField]);
        if (slotted) {
          if (BUILD.appendChildSlotFix && clonedNode.__appendChild) {
            clonedNode.__appendChild(slotted.cloneNode(true));
          } else {
            clonedNode.appendChild(slotted.cloneNode(true));
          }
        }
        if (nonStencilNode) {
          clonedNode.appendChild(srcNode.childNodes[i2].cloneNode(true));
        }
      }
    }
    return clonedNode;
  };
};
var patchSlotAppendChild = (HostElementPrototype) => {
  HostElementPrototype.__appendChild = HostElementPrototype.appendChild;
  HostElementPrototype.appendChild = function(newChild) {
    const slotName = newChild["s-sn"] = getSlotName(newChild);
    const slotNode = getHostSlotNode(this.childNodes, slotName, this.tagName);
    if (slotNode) {
      const slotChildNodes = getHostSlotChildNodes(slotNode, slotName);
      const appendAfter = slotChildNodes[slotChildNodes.length - 1];
      const insertedNode = appendAfter.parentNode.insertBefore(newChild, appendAfter.nextSibling);
      updateFallbackSlotVisibility(this);
      return insertedNode;
    }
    return this.__appendChild(newChild);
  };
};
var patchSlotRemoveChild = (ElementPrototype) => {
  ElementPrototype.__removeChild = ElementPrototype.removeChild;
  ElementPrototype.removeChild = function(toRemove) {
    if (toRemove && typeof toRemove["s-sn"] !== "undefined") {
      const slotNode = getHostSlotNode(this.childNodes, toRemove["s-sn"], this.tagName);
      if (slotNode) {
        const slotChildNodes = getHostSlotChildNodes(slotNode, toRemove["s-sn"]);
        const existingNode = slotChildNodes.find((n) => n === toRemove);
        if (existingNode) {
          existingNode.remove();
          updateFallbackSlotVisibility(this);
          return;
        }
      }
    }
    return this.__removeChild(toRemove);
  };
};
var patchSlotPrepend = (HostElementPrototype) => {
  const originalPrepend = HostElementPrototype.prepend;
  HostElementPrototype.prepend = function(...newChildren) {
    newChildren.forEach((newChild) => {
      if (typeof newChild === "string") {
        newChild = this.ownerDocument.createTextNode(newChild);
      }
      const slotName = newChild["s-sn"] = getSlotName(newChild);
      const slotNode = getHostSlotNode(this.childNodes, slotName, this.tagName);
      if (slotNode) {
        const slotPlaceholder = document.createTextNode("");
        slotPlaceholder["s-nr"] = newChild;
        slotNode["s-cr"].parentNode.__appendChild(slotPlaceholder);
        newChild["s-ol"] = slotPlaceholder;
        const slotChildNodes = getHostSlotChildNodes(slotNode, slotName);
        const appendAfter = slotChildNodes[0];
        return appendAfter.parentNode.insertBefore(newChild, appendAfter.nextSibling);
      }
      if (newChild.nodeType === 1 && !!newChild.getAttribute("slot")) {
        newChild.hidden = true;
      }
      return originalPrepend.call(this, newChild);
    });
  };
};
var patchSlotAppend = (HostElementPrototype) => {
  HostElementPrototype.append = function(...newChildren) {
    newChildren.forEach((newChild) => {
      if (typeof newChild === "string") {
        newChild = this.ownerDocument.createTextNode(newChild);
      }
      this.appendChild(newChild);
    });
  };
};
var patchSlotInsertAdjacentHTML = (HostElementPrototype) => {
  const originalInsertAdjacentHtml = HostElementPrototype.insertAdjacentHTML;
  HostElementPrototype.insertAdjacentHTML = function(position, text) {
    if (position !== "afterbegin" && position !== "beforeend") {
      return originalInsertAdjacentHtml.call(this, position, text);
    }
    const container = this.ownerDocument.createElement("_");
    let node;
    container.innerHTML = text;
    if (position === "afterbegin") {
      while (node = container.firstChild) {
        this.prepend(node);
      }
    } else if (position === "beforeend") {
      while (node = container.firstChild) {
        this.append(node);
      }
    }
  };
};
var patchSlotInsertAdjacentText = (HostElementPrototype) => {
  HostElementPrototype.insertAdjacentText = function(position, text) {
    this.insertAdjacentHTML(position, text);
  };
};
var patchSlotInsertAdjacentElement = (HostElementPrototype) => {
  const originalInsertAdjacentElement = HostElementPrototype.insertAdjacentElement;
  HostElementPrototype.insertAdjacentElement = function(position, element) {
    if (position !== "afterbegin" && position !== "beforeend") {
      return originalInsertAdjacentElement.call(this, position, element);
    }
    if (position === "afterbegin") {
      this.prepend(element);
      return element;
    } else if (position === "beforeend") {
      this.append(element);
      return element;
    }
    return element;
  };
};
var patchTextContent = (hostElementPrototype) => {
  const descriptor = Object.getOwnPropertyDescriptor(Node.prototype, "textContent");
  Object.defineProperty(hostElementPrototype, "__textContent", descriptor);
  if (BUILD.experimentalScopedSlotChanges) {
    Object.defineProperty(hostElementPrototype, "textContent", {
      // To mimic shadow root behavior, we need to return the text content of all
      // nodes in a slot reference node
      get() {
        const slotRefNodes = getAllChildSlotNodes(this.childNodes);
        const textContent = slotRefNodes.map((node) => {
          var _a, _b;
          const text = [];
          let slotContent = node.nextSibling;
          while (slotContent && slotContent["s-sn"] === node["s-sn"]) {
            if (slotContent.nodeType === NODE_TYPES.TEXT_NODE || slotContent.nodeType === NODE_TYPES.ELEMENT_NODE) {
              text.push((_b = (_a = slotContent.textContent) == null ? void 0 : _a.trim()) != null ? _b : "");
            }
            slotContent = slotContent.nextSibling;
          }
          return text.filter((ref) => ref !== "").join(" ");
        }).filter((text) => text !== "").join(" ");
        return " " + textContent + " ";
      },
      // To mimic shadow root behavior, we need to overwrite all nodes in a slot
      // reference node. If a default slot reference node exists, the text content will be
      // placed there. Otherwise, the new text node will be hidden
      set(value) {
        const slotRefNodes = getAllChildSlotNodes(this.childNodes);
        slotRefNodes.forEach((node) => {
          let slotContent = node.nextSibling;
          while (slotContent && slotContent["s-sn"] === node["s-sn"]) {
            const tmp = slotContent;
            slotContent = slotContent.nextSibling;
            tmp.remove();
          }
          if (node["s-sn"] === "") {
            const textNode = this.ownerDocument.createTextNode(value);
            textNode["s-sn"] = "";
            node.parentElement.insertBefore(textNode, node.nextSibling);
          } else {
            node.remove();
          }
        });
      }
    });
  } else {
    Object.defineProperty(hostElementPrototype, "textContent", {
      get() {
        var _a;
        const slotNode = getHostSlotNode(this.childNodes, "", this.tagName);
        if (((_a = slotNode == null ? void 0 : slotNode.nextSibling) == null ? void 0 : _a.nodeType) === NODE_TYPES.TEXT_NODE) {
          return slotNode.nextSibling.textContent;
        } else if (slotNode) {
          return slotNode.textContent;
        } else {
          return this.__textContent;
        }
      },
      set(value) {
        var _a;
        const slotNode = getHostSlotNode(this.childNodes, "", this.tagName);
        if (((_a = slotNode == null ? void 0 : slotNode.nextSibling) == null ? void 0 : _a.nodeType) === NODE_TYPES.TEXT_NODE) {
          slotNode.nextSibling.textContent = value;
        } else if (slotNode) {
          slotNode.textContent = value;
        } else {
          this.__textContent = value;
          const contentRefElm = this["s-cr"];
          if (contentRefElm) {
            this.insertBefore(contentRefElm, this.firstChild);
          }
        }
      }
    });
  }
};
var patchChildSlotNodes = (elm, cmpMeta) => {
  class FakeNodeList extends Array {
    item(n) {
      return this[n];
    }
  }
  if (cmpMeta.$flags$ & 8) {
    const childNodesFn = elm.__lookupGetter__("childNodes");
    Object.defineProperty(elm, "children", {
      get() {
        return this.childNodes.map((n) => n.nodeType === 1);
      }
    });
    Object.defineProperty(elm, "childElementCount", {
      get() {
        return elm.children.length;
      }
    });
    Object.defineProperty(elm, "childNodes", {
      get() {
        const childNodes = childNodesFn.call(this);
        if ((plt.$flags$ & 1) === 0 && getHostRef(this).$flags$ & 2) {
          const result = new FakeNodeList();
          for (let i2 = 0; i2 < childNodes.length; i2++) {
            const slot = childNodes[i2]["s-nr"];
            if (slot) {
              result.push(slot);
            }
          }
          return result;
        }
        return FakeNodeList.from(childNodes);
      }
    });
  }
};
var getAllChildSlotNodes = (childNodes) => {
  const slotRefNodes = [];
  for (const childNode of Array.from(childNodes)) {
    if (childNode["s-sr"]) {
      slotRefNodes.push(childNode);
    }
    slotRefNodes.push(...getAllChildSlotNodes(childNode.childNodes));
  }
  return slotRefNodes;
};
var getSlotName = (node) => node["s-sn"] || node.nodeType === 1 && node.getAttribute("slot") || "";
var getHostSlotNode = (childNodes, slotName, hostName) => {
  let i2 = 0;
  let childNode;
  for (; i2 < childNodes.length; i2++) {
    childNode = childNodes[i2];
    if (childNode["s-sr"] && childNode["s-sn"] === slotName && childNode["s-hn"] === hostName) {
      return childNode;
    }
    childNode = getHostSlotNode(childNode.childNodes, slotName, hostName);
    if (childNode) {
      return childNode;
    }
  }
  return null;
};
var getHostSlotChildNodes = (n, slotName) => {
  const childNodes = [n];
  while ((n = n.nextSibling) && n["s-sn"] === slotName) {
    childNodes.push(n);
  }
  return childNodes;
};
var proxyCustomElement = (Cstr, compactMeta) => {
  const cmpMeta = {
    $flags$: compactMeta[0],
    $tagName$: compactMeta[1]
  };
  if (BUILD.member) {
    cmpMeta.$members$ = compactMeta[2];
  }
  if (BUILD.hostListener) {
    cmpMeta.$listeners$ = compactMeta[3];
  }
  if (BUILD.watchCallback) {
    cmpMeta.$watchers$ = Cstr.$watchers$;
  }
  if (BUILD.reflect) {
    cmpMeta.$attrsToReflect$ = [];
  }
  if (BUILD.shadowDom && !supportsShadow && cmpMeta.$flags$ & 1) {
    cmpMeta.$flags$ |= 8;
  }
  if (BUILD.experimentalSlotFixes) {
    if (BUILD.scoped && cmpMeta.$flags$ & 2) {
      patchPseudoShadowDom(Cstr.prototype, cmpMeta);
    }
  } else {
    if (BUILD.slotChildNodesFix) {
      patchChildSlotNodes(Cstr.prototype, cmpMeta);
    }
    if (BUILD.cloneNodeFix) {
      patchCloneNode(Cstr.prototype);
    }
    if (BUILD.appendChildSlotFix) {
      patchSlotAppendChild(Cstr.prototype);
    }
    if (BUILD.scopedSlotTextContentFix && cmpMeta.$flags$ & 2) {
      patchTextContent(Cstr.prototype);
    }
  }
  const originalConnectedCallback = Cstr.prototype.connectedCallback;
  const originalDisconnectedCallback = Cstr.prototype.disconnectedCallback;
  Object.assign(Cstr.prototype, {
    __registerHost() {
      registerHost(this, cmpMeta);
    },
    connectedCallback() {
      connectedCallback(this);
      if (BUILD.connectedCallback && originalConnectedCallback) {
        originalConnectedCallback.call(this);
      }
    },
    disconnectedCallback() {
      disconnectedCallback(this);
      if (BUILD.disconnectedCallback && originalDisconnectedCallback) {
        originalDisconnectedCallback.call(this);
      }
    },
    __attachShadow() {
      if (supportsShadow) {
        if (BUILD.shadowDelegatesFocus) {
          this.attachShadow({
            mode: "open",
            delegatesFocus: !!(cmpMeta.$flags$ & 16)
          });
        } else {
          this.attachShadow({ mode: "open" });
        }
      } else {
        this.shadowRoot = this;
      }
    }
  });
  Cstr.is = cmpMeta.$tagName$;
  return proxyComponent(
    Cstr,
    cmpMeta,
    1 | 2
    /* proxyState */
  );
};
var addHostEventListeners = (elm, hostRef, listeners, attachParentListeners) => {
  if (BUILD.hostListener && listeners) {
    if (BUILD.hostListenerTargetParent) {
      if (attachParentListeners) {
        listeners = listeners.filter(
          ([flags]) => flags & 32
          /* TargetParent */
        );
      } else {
        listeners = listeners.filter(([flags]) => !(flags & 32));
      }
    }
    listeners.map(([flags, name, method]) => {
      const target = BUILD.hostListenerTarget ? getHostListenerTarget(elm, flags) : elm;
      const handler = hostListenerProxy(hostRef, method);
      const opts = hostListenerOpts(flags);
      plt.ael(target, name, handler, opts);
      (hostRef.$rmListeners$ = hostRef.$rmListeners$ || []).push(() => plt.rel(target, name, handler, opts));
    });
  }
};
var hostListenerProxy = (hostRef, methodName) => (ev) => {
  try {
    if (BUILD.lazyLoad) {
      if (hostRef.$flags$ & 256) {
        hostRef.$lazyInstance$[methodName](ev);
      } else {
        (hostRef.$queuedListeners$ = hostRef.$queuedListeners$ || []).push([methodName, ev]);
      }
    } else {
      hostRef.$hostElement$[methodName](ev);
    }
  } catch (e2) {
    consoleError(e2);
  }
};
var getHostListenerTarget = (elm, flags) => {
  if (BUILD.hostListenerTargetDocument && flags & 4)
    return doc;
  if (BUILD.hostListenerTargetWindow && flags & 8)
    return win;
  if (BUILD.hostListenerTargetBody && flags & 16)
    return doc.body;
  if (BUILD.hostListenerTargetParent && flags & 32)
    return elm.parentElement;
  return elm;
};
var hostListenerOpts = (flags) => supportsListenerOptions ? {
  passive: (flags & 1) !== 0,
  capture: (flags & 2) !== 0
} : (flags & 2) !== 0;
var hostRefs = BUILD.hotModuleReplacement ? window.__STENCIL_HOSTREFS__ || (window.__STENCIL_HOSTREFS__ = /* @__PURE__ */ new WeakMap()) : /* @__PURE__ */ new WeakMap();
var getHostRef = (ref) => hostRefs.get(ref);
var registerHost = (hostElement, cmpMeta) => {
  const hostRef = {
    $flags$: 0,
    $hostElement$: hostElement,
    $cmpMeta$: cmpMeta,
    $instanceValues$: /* @__PURE__ */ new Map()
  };
  if (BUILD.isDev) {
    hostRef.$renderCount$ = 0;
  }
  if (BUILD.method && BUILD.lazyLoad) {
    hostRef.$onInstancePromise$ = new Promise((r) => hostRef.$onInstanceResolve$ = r);
  }
  if (BUILD.asyncLoading) {
    hostRef.$onReadyPromise$ = new Promise((r) => hostRef.$onReadyResolve$ = r);
    hostElement["s-p"] = [];
    hostElement["s-rc"] = [];
  }
  addHostEventListeners(hostElement, hostRef, cmpMeta.$listeners$, false);
  return hostRefs.set(hostElement, hostRef);
};
var isMemberInElement = (elm, memberName) => memberName in elm;
var customError;
var consoleError = (e2, el) => (customError || console.error)(e2, el);
var STENCIL_DEV_MODE = BUILD.isTesting ? ["STENCIL:"] : [
  "%cstencil",
  "color: white;background:#4c47ff;font-weight: bold; font-size:10px; padding:2px 6px; border-radius: 5px"
];
var consoleDevError = (...m) => console.error(...STENCIL_DEV_MODE, ...m);
var consoleDevWarn = (...m) => console.warn(...STENCIL_DEV_MODE, ...m);
var cmpModules = /* @__PURE__ */ new Map();
var loadModule = (cmpMeta, hostRef, hmrVersionId) => {
  const exportName = cmpMeta.$tagName$.replace(/-/g, "_");
  const bundleId = cmpMeta.$lazyBundleId$;
  if (BUILD.isDev && typeof bundleId !== "string") {
    consoleDevError(
      `Trying to lazily load component <${cmpMeta.$tagName$}> with style mode "${hostRef.$modeName$}", but it does not exist.`
    );
    return void 0;
  }
  const module = !BUILD.hotModuleReplacement ? cmpModules.get(bundleId) : false;
  if (module) {
    return module[exportName];
  }
  return /* @vite-ignore */ /* webpackInclude: /\.entry\.js$/ */ /* webpackExclude: /\.system\.entry\.js$/ */ /* webpackMode: "lazy" */ globImport_entry_js(`./${bundleId}.entry.js${BUILD.hotModuleReplacement && hmrVersionId ? "?s-hmr=" + hmrVersionId : ""}`).then((importedModule) => {
    if (!BUILD.hotModuleReplacement) {
      cmpModules.set(bundleId, importedModule);
    }
    return importedModule[exportName];
  }, consoleError);
};
var styles = /* @__PURE__ */ new Map();
var modeResolutionChain = [];
var win = typeof window !== "undefined" ? window : {};
var doc = win.document || { head: {} };
var H = win.HTMLElement || class {
};
var plt = {
  $flags$: 0,
  $resourcesUrl$: "",
  jmp: (h2) => h2(),
  raf: (h2) => requestAnimationFrame(h2),
  ael: (el, eventName, listener, opts) => el.addEventListener(eventName, listener, opts),
  rel: (el, eventName, listener, opts) => el.removeEventListener(eventName, listener, opts),
  ce: (eventName, opts) => new CustomEvent(eventName, opts)
};
var setPlatformHelpers = (helpers) => {
  Object.assign(plt, helpers);
};
var supportsShadow = (
  // TODO(STENCIL-854): Remove code related to legacy shadowDomShim field
  BUILD.shadowDomShim && BUILD.shadowDom ? (() => (doc.head.attachShadow + "").indexOf("[native") > -1)() : true
);
var supportsListenerOptions = (() => {
  let supportsListenerOptions2 = false;
  try {
    doc.addEventListener(
      "e",
      null,
      Object.defineProperty({}, "passive", {
        get() {
          supportsListenerOptions2 = true;
        }
      })
    );
  } catch (e2) {
  }
  return supportsListenerOptions2;
})();
var promiseResolve = (v) => Promise.resolve(v);
var supportsConstructableStylesheets = BUILD.constructableCSS ? (() => {
  try {
    new CSSStyleSheet();
    return typeof new CSSStyleSheet().replaceSync === "function";
  } catch (e2) {
  }
  return false;
})() : false;
var queueCongestion = 0;
var queuePending = false;
var queueDomReads = [];
var queueDomWrites = [];
var queueDomWritesLow = [];
var queueTask = (queue, write) => (cb) => {
  queue.push(cb);
  if (!queuePending) {
    queuePending = true;
    if (write && plt.$flags$ & 4) {
      nextTick(flush);
    } else {
      plt.raf(flush);
    }
  }
};
var consume = (queue) => {
  for (let i2 = 0; i2 < queue.length; i2++) {
    try {
      queue[i2](performance.now());
    } catch (e2) {
      consoleError(e2);
    }
  }
  queue.length = 0;
};
var consumeTimeout = (queue, timeout) => {
  let i2 = 0;
  let ts = 0;
  while (i2 < queue.length && (ts = performance.now()) < timeout) {
    try {
      queue[i2++](ts);
    } catch (e2) {
      consoleError(e2);
    }
  }
  if (i2 === queue.length) {
    queue.length = 0;
  } else if (i2 !== 0) {
    queue.splice(0, i2);
  }
};
var flush = () => {
  if (BUILD.asyncQueue) {
    queueCongestion++;
  }
  consume(queueDomReads);
  if (BUILD.asyncQueue) {
    const timeout = (plt.$flags$ & 6) === 2 ? performance.now() + 14 * Math.ceil(queueCongestion * (1 / 10)) : Infinity;
    consumeTimeout(queueDomWrites, timeout);
    consumeTimeout(queueDomWritesLow, timeout);
    if (queueDomWrites.length > 0) {
      queueDomWritesLow.push(...queueDomWrites);
      queueDomWrites.length = 0;
    }
    if (queuePending = queueDomReads.length + queueDomWrites.length + queueDomWritesLow.length > 0) {
      plt.raf(flush);
    } else {
      queueCongestion = 0;
    }
  } else {
    consume(queueDomWrites);
    if (queuePending = queueDomReads.length > 0) {
      plt.raf(flush);
    }
  }
};
var nextTick = (cb) => promiseResolve().then(cb);
var readTask = queueTask(queueDomReads, false);
var writeTask = queueTask(queueDomWrites, true);

export {
  Build,
  getAssetPath,
  h,
  Host,
  setMode,
  getMode,
  createEvent,
  forceUpdate,
  proxyCustomElement,
  H,
  setPlatformHelpers,
  readTask,
  writeTask
};
/*! Bundled license information:

@stencil/core/mock-doc/index.js:
  (*!
   Stencil Mock Doc v4.17.1 | MIT Licensed | https://stenciljs.com
   *)

@stencil/core/internal/client/index.js:
  (*!__STENCIL_STATIC_IMPORT_SWITCH__*)
*/
//# sourceMappingURL=chunk-BIWEPZVF.js.map
