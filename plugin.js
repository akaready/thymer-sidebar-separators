"use strict";
var plugins = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // plugin.js
  var plugin_exports = {};
  __export(plugin_exports, {
    Plugin: () => Plugin
  });

  // ../../shared/settings-ui/tokens.css
  var tokens_default = "/*\n * Thymer Plugin Settings UI \u2014 Design Tokens\n *\n * Canonical CSS custom properties for the plugin settings panel system.\n * Plugins consume this verbatim; component CSS reads from these vars.\n *\n * See shared/settings-ui/DESIGN.md for rationale.\n *\n * Thymer var names verified against library/css-tokens/ (ripped from shipped CSS).\n * Fallbacks use color-mix(currentColor) so panels work when a token is absent.\n */\n\n.tps-panel {\n  /* \u2500\u2500 Color: text \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  --tps-text:           var(--text-default,   currentColor);\n  --tps-text-muted:     var(--text-muted,     color-mix(in srgb, currentColor 62%, transparent));\n  --tps-text-faint:     var(--text-subtle,    color-mix(in srgb, currentColor 48%, transparent));\n  --tps-text-whisper:   var(--text-disabled,  color-mix(in srgb, currentColor 34%, transparent));\n\n  /* \u2500\u2500 Color: surfaces \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  --tps-bg-input:       var(--input-bg-color,\n                        color-mix(in srgb, currentColor 6%, transparent));\n  --tps-bg-hover:       var(--hover-subtle,\n                        var(--sidebar-bg-hover,\n                        color-mix(in srgb, currentColor 8%, transparent)));\n  --tps-bg-active:      var(--active-bg-color,\n                        color-mix(in srgb, currentColor 12%, transparent));\n\n  /* \u2500\u2500 Color: borders / dividers \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  --tps-divider:        var(--divider-color,\n                        var(--thin-divider-color,\n                        color-mix(in srgb, currentColor 14%, transparent)));\n  --tps-border:         var(--input-border-color,\n                        var(--divider-color,\n                        color-mix(in srgb, currentColor 22%, transparent)));\n  --tps-border-strong:  var(--titlebar-border-color,\n                        var(--selection-border,\n                        color-mix(in srgb, currentColor 32%, transparent)));\n\n  /* \u2500\u2500 Color: accent (Thymer uses --logo-color) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  --tps-accent:         var(--logo-color, currentColor);\n  --tps-accent-soft:    color-mix(in srgb, var(--tps-accent) 15%, transparent);\n  --tps-accent-strong:  color-mix(in srgb, var(--tps-accent) 80%, var(--tps-text));\n\n  /* \u2500\u2500 Color: semantic \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  --tps-danger:         var(--enum-red-fg, #ef4444);\n  --tps-danger-soft:    color-mix(in srgb, var(--tps-danger) 15%, transparent);\n  --tps-warning:        var(--text-warning,\n                        var(--enum-yellow-fg, #f59e0b));\n  --tps-success:        var(--enum-green-fg, #10b981);\n  --tps-success-soft:   color-mix(in srgb, var(--tps-success) 12%, transparent);\n\n  --tps-on-accent:      var(--text-on-accent, light-dark(#111111, #fafafa));\n\n  /* Panel chrome */\n  --tps-panel-bg:       var(--panel-bg-color, transparent);\n  --tps-swatch-inset:   color-mix(in srgb, var(--tps-text) 8%, transparent);\n\n  /* \u2500\u2500 Typography \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  /* Font is INHERITED from Thymer's panel chrome (see components.css). */\n\n  --tps-fs-title:       18px;\n  --tps-fs-lede:        13px;\n  --tps-fs-section:     11px;\n  --tps-fs-hint:        12px;\n  --tps-fs-label:       13px;\n  --tps-fs-desc:        12px;\n  --tps-fs-body:        13px;\n  --tps-fs-value:       12px;\n  --tps-fs-button:      12px;\n  --tps-fs-list-header: 10px;\n\n  --tps-lh-tight:       1;\n  --tps-lh-snug:        1.2;\n  --tps-lh-base:        1.4;\n  --tps-lh-loose:       1.5;\n\n  --tps-fw-regular:     400;\n  --tps-fw-medium:      500;\n  --tps-fw-semibold:    600;\n  --tps-fw-bold:        700;\n\n  --tps-ls-section:     0.06em;\n  --tps-ls-list:        0.08em;\n  --tps-ls-title:       0;\n\n  /* \u2500\u2500 Spacing (8px scale) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  --tps-space-1:        4px;\n  --tps-space-2:        8px;\n  --tps-space-3:        12px;\n  --tps-space-4:        16px;\n  --tps-space-5:        24px;\n  --tps-space-6:        32px;\n  --tps-space-7:        48px;\n\n  /* \u2500\u2500 Radii \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  --tps-radius-sm:      4px;\n  --tps-radius-md:      6px;\n  --tps-radius-lg:      8px;\n  --tps-radius-pill:    999px;\n  --tps-radius-circle:  50%;\n\n  /* \u2500\u2500 Motion \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  --tps-ease-out:       cubic-bezier(0.2, 0.6, 0.2, 1);\n  --tps-ease-in-out:    cubic-bezier(0.4, 0, 0.2, 1);\n  --tps-dur-fast:       80ms;\n  --tps-dur-base:       160ms;\n\n  --tps-shadow-thumb:   0 1px 3px color-mix(in srgb, var(--tps-text) 28%, transparent);\n\n  /* \u2500\u2500 Component dimensions \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  --tps-control-h-sm:   28px;\n  --tps-control-h-md:   32px;\n  --tps-input-w:        64px;\n  --tps-num-step-w:     28px;\n  --tps-swatch-size:    22px;\n  --tps-thumb-size:     16px;\n  --tps-track-h:        6px;\n\n  --tps-slider-track:   color-mix(in srgb, var(--tps-text) 22%, transparent);\n  --tps-slider-thumb-border: color-mix(in srgb, var(--tps-text) 28%, transparent);\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .tps-panel {\n    --tps-dur-fast:     1ms;\n    --tps-dur-base:     1ms;\n  }\n}\n";

  // ../../shared/settings-ui/components.css
  var components_default = `/*
 * Thymer Plugin Panel \u2014 Component Primitives
 *
 * All primitives scope under .tps-panel. Plugin-specific styles live elsewhere.
 * Reads tokens from tokens.css.
 */

/* \u2500\u2500 Panel root \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* Inherit Thymer's font + sizing \u2014 DO NOT override. plugin-collection-icons
   demonstrates the right approach: simply \`font-family: inherit\`. Forcing a
   custom var fights both Thymer's body font AND the .ti icon font. */
.tps-panel {
  font-family: inherit;
  font-size: var(--tps-fs-body);
  line-height: var(--tps-lh-base);
  color: var(--tps-text);
  padding: 0 var(--tps-space-5) var(--tps-space-7);
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow: auto;
}

.tps-panel *,
.tps-panel *::before,
.tps-panel *::after {
  box-sizing: border-box;
}

/* Mono opt-ins are explicit per-element, never via a panel-wide override. */
.tps-panel .tps-num-input,
.tps-panel .tps-slider-value,
.tps-panel .tps-mono,
.tps-panel .tps-mono * {
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Courier New", monospace;
}

/* \u2500\u2500 Title block \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-title {
  font-size: var(--tps-fs-title);
  line-height: var(--tps-lh-snug);
  font-weight: var(--tps-fw-semibold);
  letter-spacing: var(--tps-ls-title);
  color: var(--tps-text);
  margin: 0 0 var(--tps-space-1);
}

.tps-lede {
  font-size: var(--tps-fs-lede);
  line-height: var(--tps-lh-loose);
  color: var(--tps-text-muted);
  margin: 0 0 var(--tps-space-3);
}

/* \u2500\u2500 Canonical plugin header \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-plugin-header {
  position: relative;
  margin: var(--tps-space-5) 0 var(--tps-space-5);
  padding: 18px var(--tps-space-4);
  overflow: hidden;
  background:
    linear-gradient(to right,
      #f26548  8%, #f26548 28%,
      #fbac56 28%, #fbac56 48%,
      #fff460 48%, #fff460 68%,
      #f067a6 68%, #f067a6 88%,
      #03bdf2 88%
    ) top left / 100% 1px no-repeat,
    linear-gradient(to right,
      #f26548  0%, #f26548 12%,
      #fbac56 12%, #fbac56 32%,
      #fff460 32%, #fff460 52%,
      #f067a6 52%, #f067a6 72%,
      #03bdf2 72%, #03bdf2 92%
    ) bottom left / 100% 1px no-repeat,
    var(--tps-panel-bg, var(--panel-bg-color, var(--plg-ci-theme-bg, transparent)));
  border-left: 1px solid #f26548;
  border-right: 1px solid #03bdf2;
}

.tps-plugin-header-logo {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--tps-space-2, 8px);
  margin: 0 0 var(--tps-space-3, 12px);
  background: var(--tps-bg-hover);
  border-radius: var(--tps-radius-md, 6px);
}

.tps-plugin-header-logo-icon {
  flex: 0 0 auto;
  font-size: 34px;
  line-height: 1;
  color: var(--tps-text, currentColor);
}

.tps-plugin-header-title {
  font-size: 22px;
  line-height: var(--tps-lh-snug, 1.2);
  font-weight: var(--tps-fw-semibold, 600);
  letter-spacing: 0;
  color: var(--tps-text, var(--text-default, currentColor));
  margin: 0 0 var(--tps-space-3, 12px);
}

.tps-plugin-header-version {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: baseline;
  align-self: baseline;
  font-size: 11px;
  line-height: inherit;
  font-weight: var(--tps-fw-medium, 500);
  letter-spacing: 0;
  color: var(--tps-text-faint) !important;
  white-space: nowrap;
}

.tps-plugin-header-lede {
  font-size: 14px;
  line-height: var(--tps-lh-base, 1.4);
  color: var(--tps-text-muted);
  margin: 0 0 var(--tps-space-3, 12px);
}

.tps-plugin-header-helper-wrap {
  margin: 0 0 var(--tps-space-3, 12px);
}

.tps-plugin-header-helper-toggle {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 0;
  margin: 0;
  border: 0;
  background: transparent;
  color: inherit;
  opacity: 0.28;
  font: inherit;
  font-size: var(--tps-fs-section, 11px);
  font-weight: var(--tps-fw-semibold, 600);
  line-height: var(--tps-lh-tight, 1);
  letter-spacing: var(--tps-ls-section, 0.06em);
  text-transform: uppercase;
  cursor: pointer;
  transition: opacity var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out);
}

.tps-plugin-header-helper-toggle:hover {
  opacity: 0.72;
}

.tps-plugin-header-helper-toggle:focus-visible {
  outline: 1px solid color-mix(in srgb, var(--tps-accent, currentColor) 45%, transparent);
  outline-offset: 2px;
}

.tps-plugin-header-helper-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 13px;
  height: 13px;
  font-size: 13px;
  line-height: 1;
  color: inherit;
}

.tps-plugin-header-helper-wrap[data-open="true"] .tps-plugin-header-helper-toggle {
  opacity: 0.72;
}

.tps-plugin-header-helper-wrap[data-open="true"] .tps-plugin-header-helper-toggle:hover {
  opacity: 1;
}

.tps-plugin-header-helper-body {
  display: none;
  margin: 8px 0 0;
  padding-left: 18px;
}

.tps-plugin-header-helper-wrap[data-open="true"] .tps-plugin-header-helper-body {
  display: block;
  cursor: pointer;
}

.tps-plugin-header-helper-line {
  margin: 0;
  font-size: var(--tps-fs-hint, 12px);
  line-height: var(--tps-lh-base, 1.4);
  color: inherit;
  opacity: 0.72;
  transition: opacity var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out);
}

.tps-plugin-header-helper-wrap[data-open="true"] .tps-plugin-header-helper-body:hover .tps-plugin-header-helper-line {
  opacity: 1;
}

.tps-plugin-header-attr {
  position: relative;
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0;
  width: 100%;
  font-size: 11.5px;
  line-height: var(--tps-lh-base, 1.4);
  color: var(--tps-text-muted);
  margin: var(--tps-space-3, 12px) 0 0;
  padding-top: var(--tps-space-3, 12px);
  border-top: 0;
}

.tps-plugin-header-attr::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: clamp(40%, 50%, 55%);
  height: 1px;
  background: var(--tps-bg-hover);
}

.tps-plugin-header-link-group + .tps-plugin-header-link-group {
  margin-left: var(--tps-space-3, 12px);
  padding-left: var(--tps-space-3, 12px);
  border-left: 1px solid var(--tps-bg-hover);
}

.tps-plugin-header-icon,
.tps-plugin-header-attr .ti {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  width: 12px;
  height: 12px;
  font-size: 12px;
  line-height: 1;
  color: var(--tps-text-muted);
  transform: translateY(2px);
  margin-right: var(--tps-space-1, 4px);
}

.tps-plugin-header-iconify {
  background-color: currentColor;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
}

.tps-plugin-header-iconify-github {
  --tps-iconify-github: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='black' d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'/%3E%3C/svg%3E");
  -webkit-mask-image: var(--tps-iconify-github);
  mask-image: var(--tps-iconify-github);
}

.tps-plugin-header-link {
  color: inherit;
  text-decoration: underline;
  text-decoration-color: color-mix(in srgb, currentColor 42%, transparent);
  transition: color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out),
              text-decoration-color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out),
              filter var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out);
}

.tps-plugin-header-link--blue,
.tps-plugin-header-link--blue:hover {
  color: #03bdf2;
  text-decoration-color: #03bdf2;
}

.tps-plugin-header-link--pink,
.tps-plugin-header-link--pink:hover {
  color: #f067a6;
  text-decoration-color: #f067a6;
}

.tps-plugin-header-link--muted,
.tps-plugin-header-link--muted:hover {
  color: var(--tps-text-faint) !important;
  text-decoration-color: color-mix(in srgb, currentColor 42%, transparent);
}

.tps-plugin-header-link:hover {
  text-decoration: none;
  text-decoration-color: transparent;
  filter: brightness(1.2);
}

/* \u2500\u2500 Section \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-section {
  padding: 0;
}

.tps-section + .tps-section {
  border-top: 1px solid var(--tps-divider);
  margin-top: var(--tps-space-4);
  padding-top: var(--tps-space-4);
}

.tps-section-label {
  display: block;
  font-size: var(--tps-fs-section);
  line-height: var(--tps-lh-tight);
  font-weight: var(--tps-fw-semibold);
  letter-spacing: var(--tps-ls-section);
  text-transform: uppercase;
  color: var(--tps-text-muted);
  margin: 0 0 var(--tps-space-2);
}

.tps-section-hint {
  font-size: var(--tps-fs-hint);
  line-height: var(--tps-lh-base);
  color: var(--tps-text-muted);
  margin: 0 0 var(--tps-space-3);
}

.tps-section-body {
  display: flex;
  flex-direction: column;
  gap: var(--tps-space-3);
  margin-top: var(--tps-space-2);
}

.tps-section-body:first-child {
  margin-top: 0;
}

/* When the body is full of list rows (mode rows), drop the gap and the top
   margin entirely so the first row's hover background sits flush under the
   section label and adjacent rows tile with no dead space between them. */
.tps-section-body:has(> .tps-list-row),
.tps-section-body:has(> .tps-opt) {
  margin-top: 0;
  gap: 0;
}

/* Collapsible variant: header is a button, body is hidden when closed */

.tps-section--collapsible > .tps-section-header {
  display: flex;
  align-items: center;
  gap: var(--tps-space-2);
  width: 100%;
  min-height: 34px;
  padding: 0;
  margin: 0 0 var(--tps-space-2);
  background: transparent;
  border: 0;
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: pointer;
}

.tps-section--collapsible > .tps-section-header:hover .tps-section-label {
  color: var(--tps-text);
}

.tps-section--collapsible > .tps-section-header .tps-section-label {
  margin: 0;
}

.tps-section-chev {
  display: inline-block;
  width: 10px;
  font-size: 10px;
  line-height: 1;
  color: var(--tps-text-faint);
  transition: transform var(--tps-dur-base) var(--tps-ease-out);
}

.tps-section--collapsible[data-open="true"] .tps-section-chev {
  transform: rotate(90deg);
}

.tps-section-summary {
  margin-left: auto;
  min-width: 0;
  min-height: 18px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: var(--tps-fs-hint);
  color: var(--tps-text-muted);
  font-weight: var(--tps-fw-regular);
  letter-spacing: 0;
  text-transform: none;
}

/* Reserve header height when expanded; summary text only shows collapsed */
.tps-section--collapsible[data-open="true"] .tps-section-summary {
  visibility: hidden;
}

.tps-section--collapsible[data-open="false"] > .tps-section-body {
  display: none;
}

/* \u2500\u2500 Option row (checkbox / radio + label + desc) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-opt {
  display: grid;
  grid-template-columns: 18px 1fr;
  column-gap: var(--tps-space-3);
  row-gap: 0;
  align-items: start;
  padding: 6px 10px;
  margin: 0 -10px;
  border-radius: var(--tps-radius-md);
  cursor: pointer;
  transition: background-color var(--tps-dur-fast) var(--tps-ease-out);
}

/* Stack option rows tight so the hover background of one meets the next
   without a visible gap above. Outer section gap is handled by the section
   itself, not by spacing between opts. */
.tps-section-body > .tps-opt + .tps-opt {
  margin-top: 0;
}
.tps-section-body:has(> .tps-opt) {
  gap: 0;
}

.tps-opt:hover {
  background: var(--tps-bg-hover);
}

.tps-opt > input[type="checkbox"],
.tps-opt > input[type="radio"] {
  grid-column: 1;
  grid-row: 1;
  align-self: center;
  width: 16px;
  height: 16px;
  margin: 0;
  accent-color: var(--tps-accent);
  cursor: pointer;
}

.tps-opt > .tps-opt-label {
  grid-column: 2;
  grid-row: 1;
  font-size: var(--tps-fs-label);
  line-height: var(--tps-lh-base);
  font-weight: var(--tps-fw-medium);
  color: var(--tps-text);
  cursor: pointer;
  transition: color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-opt > .tps-opt-desc {
  grid-column: 2;
  grid-row: 2;
  margin-top: 1px;
  font-size: var(--tps-fs-desc);
  line-height: var(--tps-lh-base);
  color: var(--tps-text-muted);
  cursor: pointer;
}

.tps-section-body > .tps-opt-note {
  margin: var(--tps-space-2) -10px 0;
  padding: 0 10px 0 calc(10px + 18px + var(--tps-space-3));
  font-size: var(--tps-fs-desc);
  line-height: var(--tps-lh-base);
  color: var(--tps-text-muted);
}

.tps-opt > input:checked ~ .tps-opt-label {
  color: var(--tps-accent);
}

/* Checkbox option + nested number row (e.g. tuned value under a toggle) */
.tps-section-body:has(> .tps-opt-group) {
  margin-top: 0;
  gap: 0;
}

.tps-opt-group {
  display: flex;
  flex-direction: column;
}

.tps-opt-group + .tps-opt-group {
  margin-top: 0;
}

.tps-opt-group .tps-opt-group__value,
.tps-opt-group > .tps-num {
  margin-left: calc(18px + var(--tps-space-3));
  margin-top: var(--tps-space-1);
  margin-bottom: var(--tps-space-3);
  padding-right: 10px;
  max-width: 100%;
  box-sizing: border-box;
}

.tps-opt-group .tps-num-grid {
  margin-left: calc(18px + var(--tps-space-3));
  margin-top: var(--tps-space-1);
  margin-bottom: var(--tps-space-3);
  grid-template-columns: minmax(0, 1fr);
}

/* \u2500\u2500 Numeric stepper \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-num {
  display: flex;
  align-items: center;
  gap: var(--tps-space-1);
}

.tps-num-label {
  flex: 0 0 auto;
  min-width: 0;
  font-size: var(--tps-fs-label);
  color: var(--tps-text);
  margin-right: var(--tps-space-2);
}

.tps-num-step,
.tps-num-input,
.tps-num-reset {
  font-family: inherit;
  font-size: var(--tps-fs-button);
  height: var(--tps-control-h-sm);
  border: 1px solid var(--tps-divider);
  border-radius: var(--tps-radius-sm);
  background: transparent;
  color: var(--tps-text);
  transition: border-color var(--tps-dur-fast) var(--tps-ease-out),
              background-color var(--tps-dur-fast) var(--tps-ease-out),
              color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-num-step {
  width: var(--tps-num-step-w);
  font-size: 14px;
  line-height: 1;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.tps-num-step:hover {
  border-color: var(--tps-border);
  background: var(--tps-bg-hover);
}

.tps-num-step:active {
  background: var(--tps-bg-active);
}

.tps-num-input {
  width: var(--tps-input-w);
  padding: 0 var(--tps-space-2);
  background: var(--tps-bg-input);
  text-align: center;
  font-variant-numeric: tabular-nums;
  -moz-appearance: textfield;
}

.tps-num-input::-webkit-outer-spin-button,
.tps-num-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.tps-num-input:focus {
  outline: none;
  border-color: var(--tps-accent);
}

.tps-num-unit {
  font-size: var(--tps-fs-hint);
  color: var(--tps-text-muted);
  margin: 0 var(--tps-space-2);
}

.tps-num-reset {
  font-size: 11px;
  color: var(--tps-text-muted);
  padding: 0 var(--tps-space-2);
  cursor: pointer;
}

.tps-num-reset:hover {
  color: var(--tps-text);
  border-color: var(--tps-border);
}

.tps-num-reset[hidden] {
  display: none !important;
}

/* Stacked layout: label / control row in a 200px / 1fr grid */

.tps-num-grid {
  display: grid;
  grid-template-columns: 200px 1fr;
  align-items: center;
  column-gap: var(--tps-space-3);
  row-gap: var(--tps-space-2);
}

.tps-num-grid > .tps-num-label {
  margin: 0;
  text-align: left;
}

.tps-num-grid > .tps-num {
  justify-self: start;
}

/* \u2500\u2500 Slider row \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* Shared range styling for sliderRow and any other range input in a panel.
   Exclude hue pickers that paint their own gradient track. */
.tps-panel input[type="range"]:not(.plg-collection-colors__hue) {
  width: 100%;
  height: 22px;
  appearance: none;
  -webkit-appearance: none;
  background: transparent;
  outline: none;
  cursor: pointer;
  touch-action: pan-y;
}

.tps-panel input[type="range"]:not(.plg-collection-colors__hue)::-webkit-slider-runnable-track {
  height: var(--tps-track-h);
  border-radius: 3px;
  background: var(--tps-slider-track);
}

.tps-panel input[type="range"]:not(.plg-collection-colors__hue)::-moz-range-track {
  height: var(--tps-track-h);
  border-radius: 3px;
  background: var(--tps-slider-track);
}

.tps-panel input[type="range"]:not(.plg-collection-colors__hue)::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: var(--tps-thumb-size);
  height: var(--tps-thumb-size);
  border-radius: var(--tps-radius-circle);
  background: var(--tps-accent);
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
  margin-top: -5px;
}

.tps-panel input[type="range"]:not(.plg-collection-colors__hue)::-moz-range-thumb {
  width: var(--tps-thumb-size);
  height: var(--tps-thumb-size);
  border-radius: var(--tps-radius-circle);
  background: var(--tps-accent);
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
}

.tps-panel input[type="range"]:not(.plg-collection-colors__hue):active::-webkit-slider-thumb {
  cursor: grabbing;
}

.tps-slider {
  display: grid;
  grid-template-columns: 90px 1fr 56px auto;
  align-items: center;
  gap: var(--tps-space-3);
}

.tps-slider-label {
  font-size: var(--tps-fs-section);
  font-weight: var(--tps-fw-semibold);
  letter-spacing: var(--tps-ls-section);
  text-transform: uppercase;
  color: var(--tps-text-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tps-slider-input {
  width: 100%;
  height: 22px;
  appearance: none;
  -webkit-appearance: none;
  background: transparent;
  outline: none;
  cursor: pointer;
  touch-action: pan-y;
}

.tps-slider-input::-webkit-slider-runnable-track {
  height: var(--tps-track-h);
  border-radius: 3px;
  background: var(--tps-slider-track);
}

.tps-slider-input::-moz-range-track {
  height: var(--tps-track-h);
  border-radius: 3px;
  background: var(--tps-slider-track);
}

.tps-slider-input::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: var(--tps-thumb-size);
  height: var(--tps-thumb-size);
  border-radius: var(--tps-radius-circle);
  background: var(--tps-accent);
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
  margin-top: -5px;
}

.tps-slider-input::-moz-range-thumb {
  width: var(--tps-thumb-size);
  height: var(--tps-thumb-size);
  border-radius: var(--tps-radius-circle);
  background: var(--tps-accent);
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
}

.tps-slider-input:active::-webkit-slider-thumb {
  cursor: grabbing;
}

/* Hue picker keeps its gradient track; only style the thumb. */
.tps-panel input[type="range"].plg-collection-colors__hue {
  width: 100%;
  height: 10px;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;
}

.tps-panel input[type="range"].plg-collection-colors__hue::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 14px;
  height: 14px;
  border-radius: var(--tps-radius-circle);
  background: var(--panel-bg-color, var(--tps-panel-bg, currentColor));
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
}

.tps-panel input[type="range"].plg-collection-colors__hue::-moz-range-thumb {
  width: 14px;
  height: 14px;
  border-radius: var(--tps-radius-circle);
  background: var(--panel-bg-color, var(--tps-panel-bg, currentColor));
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
}

.tps-slider-value {
  font-family: var(--tps-font-mono);
  font-size: var(--tps-fs-value);
  color: var(--tps-text);
  text-align: right;
  font-variant-numeric: tabular-nums;
}

/* \u2500\u2500 Swatch + grid \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-swatch-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, var(--tps-swatch-size));
  gap: var(--tps-space-2) 6px;
}

.tps-swatch {
  width: var(--tps-swatch-size);
  height: var(--tps-swatch-size);
  border-radius: var(--tps-radius-circle);
  border: 0;
  padding: 0;
  cursor: pointer;
  outline: none;
  box-shadow: inset 0 0 0 1px var(--tps-swatch-inset);
  transition: transform var(--tps-dur-fast) var(--tps-ease-out),
              box-shadow var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-swatch:hover {
  transform: scale(1.1);
}

.tps-swatch[aria-pressed="true"] {
  box-shadow: 0 0 0 2px var(--tps-accent);
}

/* \u2500\u2500 List rows \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-list {
  display: flex;
  flex-direction: column;
}

.tps-list-header {
  display: grid;
  grid-template-columns: 18px 1fr auto;
  align-items: center;
  gap: var(--tps-space-3);
  padding: var(--tps-space-2) var(--tps-space-3);
  border-bottom: 1px solid var(--tps-divider);
  font-size: var(--tps-fs-list-header);
  font-weight: var(--tps-fw-bold);
  letter-spacing: var(--tps-ls-list);
  text-transform: uppercase;
  color: var(--tps-text-faint);
}

.tps-list-row {
  display: grid;
  grid-template-columns: 18px 1fr auto;
  align-items: center;
  gap: var(--tps-space-3);
  padding: var(--tps-space-2) var(--tps-space-3);
  border-bottom: 1px solid var(--tps-divider);
  transition: background-color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-list-row:last-child {
  border-bottom: 0;
}

.tps-list-row:hover {
  background: var(--tps-bg-hover);
}

.tps-list-name {
  font-size: var(--tps-fs-label);
  color: var(--tps-text);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* \u2500\u2500 Tabs / segmented control \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-tabs {
  display: inline-flex;
  align-items: center;
  gap: var(--tps-space-1);
  padding: 0;
}

.tps-tab {
  height: var(--tps-control-h-sm);
  padding: 0 var(--tps-space-2);
  font-family: inherit;
  font-size: var(--tps-fs-button);
  font-weight: var(--tps-fw-medium);
  color: var(--tps-text-muted);
  background: transparent;
  border: 1px solid transparent;
  border-radius: var(--tps-radius-sm);
  cursor: pointer;
  transition: background-color var(--tps-dur-fast) var(--tps-ease-out),
              border-color var(--tps-dur-fast) var(--tps-ease-out),
              color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-tab:hover {
  background: var(--tps-bg-hover);
  color: var(--tps-text);
}

.tps-tab[aria-pressed="true"],
.tps-tab[aria-selected="true"] {
  background: var(--tps-accent-soft);
  color: var(--tps-accent);
  border-color: color-mix(in srgb, var(--tps-accent) 50%, transparent);
}

/* \u2500\u2500 Buttons \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--tps-space-1);
  height: var(--tps-control-h-sm);
  padding: 0 var(--tps-space-3);
  font-family: inherit;
  font-size: var(--tps-fs-button);
  font-weight: var(--tps-fw-medium);
  border-radius: var(--tps-radius-sm);
  border: 1px solid transparent;
  cursor: pointer;
  transition: background-color var(--tps-dur-fast) var(--tps-ease-out),
              border-color var(--tps-dur-fast) var(--tps-ease-out),
              color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-button--md { height: var(--tps-control-h-md); padding: 0 var(--tps-space-4); }

.tps-button--primary {
  background: var(--tps-accent);
  color: var(--tps-on-accent);
}

.tps-button--primary:hover {
  filter: brightness(1.08);
}

.tps-button--ghost {
  background: transparent;
  border-color: var(--tps-divider);
  color: var(--tps-text);
}

.tps-button--ghost:hover {
  background: var(--tps-bg-hover);
  border-color: var(--tps-border);
}

.tps-button--danger {
  background: transparent;
  border-color: var(--tps-divider);
  color: var(--tps-text-muted);
}

.tps-button--danger:hover {
  background: var(--tps-danger-soft);
  border-color: color-mix(in srgb, var(--tps-danger) 40%, transparent);
  color: var(--tps-danger);
}

/* \u2500\u2500 Focus rings (custom controls only \u2014 native inputs use accent-color) \u2500 */

.tps-tab:focus-visible,
.tps-button:focus-visible,
.tps-num-step:focus-visible,
.tps-num-reset:focus-visible,
.tps-swatch:focus-visible {
  outline: 2px solid var(--tps-accent);
  outline-offset: 2px;
}

/* \u2500\u2500 Inset card variant (rare \u2014 for palette-picker body, etc.) \u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-card {
  padding: var(--tps-space-3);
  border-radius: var(--tps-radius-lg);
  background: var(--tps-bg-input);
  border: 1px solid var(--tps-divider);
}
`;

  // ../../shared/settings-ui/color-field.css
  var color_field_default = `/*
 * colorField \u2014 shared color picker (Theme | Tailwind | Custom).
 * Scoped under .tps-panel .tps-color-field; styled through --tps-* tokens.
 * Every selectable swatch is the same .tps-cf-dot across all three tabs.
 */

.tps-panel .tps-color-field { display: block; }

/* \u2500\u2500 Tabs \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-tabs {
  display: grid; grid-auto-flow: column; grid-auto-columns: 1fr; gap: 4px;
  background: var(--tps-bg-input, rgba(127,127,127,0.06));
  border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  border-radius: var(--tps-radius-md, 8px);
  padding: 4px; margin-bottom: var(--tps-space-3, 12px);
}
.tps-panel .tps-cf-tab {
  cursor: pointer; border: 0; background: transparent;
  border-radius: var(--tps-radius-sm, 6px); padding: 8px 10px; font: inherit;
  font-size: var(--tps-fs-body, 13px); font-weight: var(--tps-fw-semibold, 600);
  color: var(--tps-text-muted, rgba(127,127,127,0.75));
  transition: background var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease),
              color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease);
}
.tps-panel .tps-cf-tab:hover { color: var(--tps-text, inherit); }
.tps-panel .tps-cf-tab.is-active {
  background: var(--tps-panel-bg, var(--bg-default, #fff));
  color: var(--tps-text, inherit); box-shadow: 0 1px 2px rgba(0,0,0,0.12);
}

/* \u2500\u2500 Panes \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-pane { display: none; }
.tps-panel .tps-cf-pane.is-active { display: block; }

/* \u2500\u2500 Featured theme picks \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-featured {
  display: grid; grid-template-columns: 1fr 1fr; gap: 8px;
  margin-bottom: var(--tps-space-3, 12px);
}
.tps-panel .tps-cf-tile {
  display: flex; align-items: center; gap: 10px; width: 100%; text-align: left; cursor: pointer;
  background: var(--tps-bg-hover, rgba(127,127,127,0.04));
  border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  border-radius: var(--tps-radius-md, 8px); padding: 10px 12px; color: var(--tps-text, inherit);
  transition: border-color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease),
              background var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease);
}
.tps-panel .tps-cf-tile:hover { border-color: var(--tps-border-strong, rgba(127,127,127,0.28)); }
.tps-panel .tps-cf-tile.is-sel {
  border-color: var(--tps-accent, currentColor);
  background: var(--tps-accent-soft, rgba(127,127,127,0.08));
}
.tps-panel .tps-cf-tile-dot {
  width: 22px; height: 22px; flex: 0 0 auto; border-radius: var(--tps-radius-sm, 6px);
  box-shadow: inset 0 0 0 1px var(--tps-swatch-inset, rgba(127,127,127,0.18));
}
.tps-panel .tps-cf-tile-label {
  font-size: var(--tps-fs-body, 13px); font-weight: var(--tps-fw-semibold, 600);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}

/* \u2500\u2500 Groups + the universal swatch dot \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-group { margin-bottom: var(--tps-space-3, 12px); }
.tps-panel .tps-cf-group-head { display: flex; align-items: baseline; gap: 8px; margin-bottom: var(--tps-space-2, 8px); }
.tps-panel .tps-cf-group-label {
  font-size: var(--tps-fs-section, 11px); letter-spacing: 0.06em; text-transform: uppercase;
  color: var(--tps-text-faint, var(--tps-text-muted, rgba(127,127,127,0.6))); font-weight: var(--tps-fw-semibold, 600);
}
.tps-panel .tps-cf-group-hint { font-size: var(--tps-fs-section, 11px); color: var(--tps-text-faint, rgba(127,127,127,0.5)); }

/* \u2500\u2500 Swatches: square dots that fill the row width (22 across in the Tailwind
 *    hue row); every swatch elsewhere matches that width. \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-dots {
  display: grid; grid-template-columns: repeat(22, minmax(0, 1fr)); gap: 5px;
  /* explicit resets so a stale accumulated .tps-cf-dots rule (old edge-to-edge
   * build injected an inset-ring outline) can't linger after a plugin reload. */
  border: 0; border-radius: 0; overflow: visible; box-shadow: none; background: none; padding: 0;
}
.tps-panel .tps-cf-dot {
  aspect-ratio: 1 / 1; min-width: 0; width: 100%; height: auto; border: 0; padding: 0; margin: 0;
  cursor: pointer; position: relative;
  border-radius: var(--tps-radius-sm, 6px);
  box-shadow: inset 0 0 0 1px var(--tps-swatch-inset, rgba(127,127,127,0.18));
  transition: transform var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease),
              box-shadow var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease);
}
.tps-panel .tps-cf-dot:hover { transform: scale(1.12); z-index: 3; }
.tps-panel .tps-cf-dot:focus-visible,
.tps-panel .tps-cf-dot.is-sel,
.tps-panel .tps-cf-dot.is-active {
  outline: none; z-index: 4;
  box-shadow: inset 0 0 0 1px var(--tps-swatch-inset, rgba(127,127,127,0.18)),
              0 0 0 2px var(--tps-panel-bg, #fff), 0 0 0 4px var(--tps-accent, currentColor);
}

/* \u2500\u2500 Lightness "tints": full-width ramp, shade number inside (do not touch) \u2500 */
.tps-panel .tps-cf-ramp {
  display: grid; grid-template-columns: repeat(11, minmax(0, 1fr));
  border-radius: var(--tps-radius-md, 8px); overflow: hidden;
  box-shadow: inset 0 0 0 1px var(--tps-border, rgba(127,127,127,0.14));
}
.tps-panel .tps-cf-ramp-cell {
  border: 0; padding: 0; cursor: pointer; height: 30px; position: relative;
  display: flex; align-items: center; justify-content: center;
  font-size: 9px; font-weight: var(--tps-fw-semibold, 600); font-variant-numeric: tabular-nums; letter-spacing: -0.02em;
  transition: box-shadow var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease);
}
.tps-panel .tps-cf-ramp-cell:hover { z-index: 3; box-shadow: inset 0 0 0 2px color-mix(in srgb, var(--tps-panel-bg, #fff) 60%, transparent); }
.tps-panel .tps-cf-ramp-cell:focus-visible,
.tps-panel .tps-cf-ramp-cell.is-sel {
  outline: none; z-index: 4;
  box-shadow: inset 0 0 0 2px var(--tps-panel-bg, #fff), inset 0 0 0 4px var(--tps-accent, currentColor);
}
/* Faint secondary ring on the inverted ("invert lightness") mirror shade \u2014
   present alongside the prominent ring on the actually-selected shade. */
.tps-panel .tps-cf-ramp-cell.is-sel-mirror {
  z-index: 3;
  box-shadow: inset 0 0 0 2px var(--tps-panel-bg, #fff),
              inset 0 0 0 3px color-mix(in srgb, var(--tps-accent, currentColor) 42%, transparent);
}

/* \u2500\u2500 Invert-lightness toggle \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-invert {
  display: flex; align-items: center; gap: 8px; margin-top: var(--tps-space-3, 12px);
  cursor: pointer; font-size: var(--tps-fs-hint, 12px); color: var(--tps-text, inherit); font-weight: var(--tps-fw-medium, 500);
}
.tps-panel .tps-cf-invert-cb { margin: 0; cursor: pointer; accent-color: var(--tps-accent, currentColor); }
.tps-panel .tps-cf-invert-hint { color: var(--tps-text-faint, rgba(127,127,127,0.5)); font-weight: var(--tps-fw-regular, 400); }
/* Dimmed + non-interactive until a real, non-500 shade is picked (500 mirrors
   to itself, so inverting it is a no-op). */
.tps-panel .tps-cf-invert.is-disabled { opacity: 0.42; cursor: default; }
.tps-panel .tps-cf-invert.is-disabled .tps-cf-invert-cb { cursor: default; }

/* \u2500\u2500 Custom palette \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-custom-row { min-height: 30px; margin-bottom: var(--tps-space-3, 12px); }
.tps-panel .tps-cf-custom-empty {
  grid-column: 1 / -1; display: flex; align-items: center; padding: 0 10px; min-height: 30px;
  font-size: var(--tps-fs-hint, 12px); font-weight: var(--tps-fw-regular, 400); letter-spacing: 0;
  color: var(--tps-text-faint, rgba(127,127,127,0.55));
}
.tps-panel .tps-cf-custom-dot { cursor: grab; }
.tps-panel .tps-cf-custom-dot.is-dragging { opacity: 0.4; cursor: grabbing; }

.tps-panel .tps-cf-addrow { display: flex; align-items: center; gap: 8px; }
.tps-panel .tps-cf-remove {
  cursor: pointer; border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  background: var(--tps-bg-input, rgba(127,127,127,0.06)); color: var(--tps-text-muted, rgba(127,127,127,0.75));
  border-radius: var(--tps-radius-md, 8px); height: 32px; padding: 0 14px; font: inherit;
  font-size: var(--tps-fs-hint, 12px); font-weight: var(--tps-fw-medium, 500);
}
.tps-panel .tps-cf-remove[hidden] { display: none; }
.tps-panel .tps-cf-remove:hover { border-color: var(--tps-border-strong, rgba(127,127,127,0.28)); color: var(--tps-text, inherit); }
.tps-panel .tps-cf-add {
  cursor: pointer; border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  background: var(--tps-bg-input, rgba(127,127,127,0.06)); color: var(--tps-text, inherit);
  border-radius: var(--tps-radius-md, 8px); height: 32px; padding: 0 14px; font: inherit;
  font-size: var(--tps-fs-hint, 12px); font-weight: var(--tps-fw-semibold, 600);
}
.tps-panel .tps-cf-add:hover { border-color: var(--tps-border-strong, rgba(127,127,127,0.28)); }
.tps-panel .tps-cf-custom-count {
  margin-left: auto; font-size: var(--tps-fs-section, 11px);
  color: var(--tps-text-faint, rgba(127,127,127,0.5)); font-variant-numeric: tabular-nums;
}

/* \u2500\u2500 Hex input \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-hexbox {
  display: inline-flex; align-items: center; gap: 8px; box-sizing: border-box; height: 32px;
  background: var(--tps-bg-input, rgba(127,127,127,0.06));
  border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  border-radius: var(--tps-radius-md, 8px); padding: 0 8px 0 10px;
}
.tps-panel .tps-cf-hex-dot {
  width: 15px; height: 15px; border-radius: var(--tps-radius-sm, 5px);
  box-shadow: inset 0 0 0 1px var(--tps-swatch-inset, rgba(127,127,127,0.22));
}
.tps-panel .tps-cf-hex-input {
  border: 0; background: transparent; outline: none;
  font-family: var(--tps-font-mono, ui-monospace, monospace);
  font-size: var(--tps-fs-hint, 12px); color: var(--tps-text, inherit); width: 84px;
  font-variant-numeric: tabular-nums;
}
.tps-panel .tps-cf-hex-input::placeholder { color: var(--tps-text-faint, rgba(127,127,127,0.5)); }

/* \u2500\u2500 Universal: No color \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-divider {
  height: 1px; margin: var(--tps-space-3, 12px) 0; background: var(--tps-divider, rgba(127,127,127,0.12));
}
.tps-panel .tps-cf-universal { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
.tps-panel .tps-cf-none {
  display: inline-flex; align-items: center; gap: 7px; cursor: pointer; box-sizing: border-box; height: 32px;
  background: var(--tps-bg-input, rgba(127,127,127,0.06));
  border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  border-radius: var(--tps-radius-md, 8px); padding: 0 12px; font: inherit;
  font-size: var(--tps-fs-hint, 12px); font-weight: var(--tps-fw-medium, 500);
  color: var(--tps-text-muted, rgba(127,127,127,0.7));
}
.tps-panel .tps-cf-none:hover { border-color: var(--tps-border-strong, rgba(127,127,127,0.28)); color: var(--tps-text, inherit); }
.tps-panel .tps-cf-none.is-sel { border-color: var(--tps-accent, currentColor); color: var(--tps-text, inherit); }
.tps-panel .tps-cf-none-sw {
  width: 15px; height: 15px; border-radius: 50%; position: relative; overflow: hidden;
  box-shadow: inset 0 0 0 1px var(--tps-border-strong, rgba(127,127,127,0.3));
}
.tps-panel .tps-cf-none-sw::after {
  content: ""; position: absolute; left: 50%; top: -3px; width: 1.5px; height: 21px;
  background: var(--tps-danger, #e2555f); transform: rotate(45deg);
}

/* \u2500\u2500 Instant tooltip (drawn by the component, not native title delay) \u2500\u2500\u2500 */
.tps-panel .tps-cf-tip {
  position: fixed; z-index: 2147483000; transform: translate(-50%, calc(-100% - 8px));
  padding: 3px 8px; border-radius: var(--tps-radius-sm, 5px);
  background: var(--tps-text, #1a1a1a); color: var(--tps-panel-bg, #fff);
  font-size: var(--tps-fs-section, 11px); font-weight: var(--tps-fw-medium, 500);
  line-height: 1.3; white-space: nowrap; pointer-events: none; opacity: 0;
  box-shadow: 0 2px 8px rgba(0,0,0,0.35);
}
.tps-panel .tps-cf-tip.is-visible { opacity: 1; }

@media (prefers-reduced-motion: reduce) {
  .tps-panel .tps-cf-dot,
  .tps-panel .tps-cf-tab,
  .tps-panel .tps-cf-tile,
  .tps-panel .tps-cf-remove { transition: none; }
}
`;

  // ../../shared/settings-ui/helpers.js
  var PANEL_CSS = tokens_default + "\n" + components_default + "\n" + color_field_default;
  function h(tag, props, ...children) {
    const el = document.createElement(tag);
    const dom = (
      /** @type {any} */
      el
    );
    if (props) {
      for (const k in props) {
        const v = props[k];
        if (v == null || v === false) continue;
        if (k === "class" || k === "className") {
          el.className = v;
        } else if (k === "style" && typeof v === "object") {
          Object.assign(el.style, v);
        } else if (k === "dataset" && typeof v === "object") {
          for (const dk in v) el.dataset[dk] = v[dk];
        } else if (k.startsWith("on") && typeof v === "function") {
          el.addEventListener(k.slice(2).toLowerCase(), v);
        } else if (k in dom && typeof dom[k] !== "function") {
          try {
            dom[k] = v;
          } catch {
            el.setAttribute(k, v);
          }
        } else {
          el.setAttribute(k, v === true ? "" : String(v));
        }
      }
    }
    appendChildren(el, children);
    return el;
  }
  __name(h, "h");
  function appendChildren(parent, children) {
    for (const c of children) {
      if (c == null || c === false) continue;
      if (Array.isArray(c)) {
        appendChildren(parent, c);
        continue;
      }
      parent.appendChild(c instanceof Node ? c : document.createTextNode(String(c)));
    }
  }
  __name(appendChildren, "appendChildren");
  function panel({ pluginClass } = {}, children = []) {
    const cls = ["tps-panel", pluginClass].filter(Boolean).join(" ");
    return h("div", { class: cls }, ...children);
  }
  __name(panel, "panel");
  function pluginHeader({
    title: heading,
    lede: ledeText,
    helper,
    helperOpen,
    helperDefaultOpen = false,
    onHelperToggle,
    icon = "",
    version = "1.0",
    author = "@akaready",
    homepage = "https://akaready.com",
    repository = "https://github.com/akaready",
    coffee = "https://buymeacoffee.com/akaready"
  }) {
    const iconClass = icon ? icon.startsWith("ti-") ? icon : `ti-${icon}` : "";
    const helperLines = normalizeHelperLines(helper);
    const children = [
      iconClass ? h(
        "div",
        { class: "tps-plugin-header-logo", "aria-hidden": "true" },
        h("i", { class: `ti ${iconClass} tps-plugin-header-logo-icon`, "aria-hidden": "true" })
      ) : null,
      h("h1", { class: "tps-plugin-header-title" }, heading),
      ledeText ? h("p", { class: "tps-plugin-header-lede" }, ledeText) : null,
      helperLines.length ? renderPluginHeaderHelper({
        lines: helperLines,
        defaultOpen: helperDefaultOpen,
        open: helperOpen,
        onToggle: onHelperToggle
      }) : null,
      h(
        "p",
        { class: "tps-plugin-header-attr" },
        h(
          "span",
          { class: "tps-plugin-header-link-group" },
          h("i", { class: "ti ti-link tps-plugin-header-icon", "aria-hidden": "true" }),
          h("a", {
            class: "tps-plugin-header-link tps-plugin-header-link--blue",
            href: homepage,
            target: "_blank",
            rel: "noopener noreferrer"
          }, author)
        ),
        h(
          "span",
          { class: "tps-plugin-header-link-group" },
          h("i", { class: "ti ti-coffee tps-plugin-header-icon", "aria-hidden": "true" }),
          h("a", {
            class: "tps-plugin-header-link tps-plugin-header-link--pink",
            href: coffee,
            target: "_blank",
            rel: "noopener noreferrer"
          }, "buy me a coffee")
        ),
        version ? h(
          "span",
          { class: "tps-plugin-header-link-group" },
          h("span", { class: "tps-plugin-header-icon tps-plugin-header-iconify tps-plugin-header-iconify-github", "aria-hidden": "true" }),
          h("a", { class: "tps-plugin-header-link tps-plugin-header-link--muted tps-plugin-header-version", href: repository, target: "_blank", rel: "noopener noreferrer" }, `v${version}`)
        ) : null
      )
    ];
    return h("div", { class: "tps-plugin-header" }, ...children);
  }
  __name(pluginHeader, "pluginHeader");
  function normalizeHelperLines(helper) {
    if (!helper) return [];
    if (typeof helper === "string") {
      const text = helper.trim();
      return text ? [text] : [];
    }
    if (Array.isArray(helper)) {
      return helper.map((line) => String(line).trim()).filter(Boolean);
    }
    return [];
  }
  __name(normalizeHelperLines, "normalizeHelperLines");
  function renderPluginHeaderHelper({ lines, defaultOpen = false, open, onToggle }) {
    const initialOpen = open == null ? !!defaultOpen : !!open;
    const wrap = h("div", {
      class: "tps-plugin-header-helper-wrap",
      dataset: { open: String(initialOpen) }
    });
    const icon = h("i", { class: "ti ti-info-circle tps-plugin-header-helper-icon", "aria-hidden": "true" });
    const toggle = h("button", {
      type: "button",
      class: "tps-plugin-header-helper-toggle",
      "aria-expanded": String(initialOpen)
    }, icon, h("span", { class: "tps-plugin-header-helper-toggle-label" }, "Instructions"));
    const body = h(
      "div",
      { class: "tps-plugin-header-helper-body" },
      h("p", { class: "tps-plugin-header-helper-line" }, lines.join(" "))
    );
    const setOpen = /* @__PURE__ */ __name((nextOpen) => {
      wrap.dataset.open = String(nextOpen);
      toggle.setAttribute("aria-expanded", String(nextOpen));
      if (onToggle) onToggle(nextOpen);
    }, "setOpen");
    toggle.addEventListener("click", () => {
      setOpen(wrap.dataset.open !== "true");
    });
    body.addEventListener("click", () => {
      if (wrap.dataset.open === "true") setOpen(false);
    });
    wrap.appendChild(toggle);
    wrap.appendChild(body);
    return wrap;
  }
  __name(renderPluginHeaderHelper, "renderPluginHeaderHelper");
  function pluginHeaderFromConfig(conf, { version, helper, helperOpen, helperDefaultOpen, onHelperToggle } = {}) {
    const resolvedHelper = helper ?? conf.instructions;
    return pluginHeader({
      title: conf.name || "",
      lede: conf.description,
      helper: resolvedHelper,
      helperOpen,
      helperDefaultOpen,
      onHelperToggle,
      icon: conf.icon,
      version: version ?? conf.version,
      author: conf.author,
      homepage: conf.homepage,
      repository: conf.repository,
      coffee: conf.coffee
    });
  }
  __name(pluginHeaderFromConfig, "pluginHeaderFromConfig");

  // ../../shared/settings-ui/theme-vars.js
  var DEFAULT_THEME_SOURCES = [
    ":root",
    "body",
    ".sidebar--icons",
    ".sidebar"
  ];
  var COLOR_NAME_HINT = /(^|-)(accent|primary|secondary|text|muted|subtle|border|bg|background|hover|active|input|enum|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|foreground|surface|card|panel|danger|warning|success)($|-)/;
  var CURRENT_THEME_VARS = Object.freeze([
    // Accent
    { name: "--logo-color", label: "Accent" },
    // Text
    { name: "--text-default", label: "Text" },
    { name: "--text-muted", label: "Muted text" },
    { name: "--text-subtle", label: "Subtle text" },
    { name: "--text-hilite", label: "Highlight text" },
    { name: "--text-brighter", label: "Brighter text" },
    { name: "--text-disabled", label: "Disabled text" },
    { name: "--text-status-offline", label: "Offline text" },
    { name: "--text-warning", label: "Warning text" },
    { name: "--cmdpal-hilite-color", label: "Command palette highlight" },
    { name: "--color-text-900", label: "Legacy text" },
    // Tag / pill
    { name: "--tag-fg-color", label: "Tag" },
    // Surfaces
    { name: "--panel-bg-color", label: "Panel background" },
    { name: "--input-bg-color", label: "Input background" },
    { name: "--hover-subtle", label: "Hover background" },
    { name: "--sidebar-bg-hover", label: "Sidebar hover" },
    { name: "--active-bg-color", label: "Active background" },
    // Borders / dividers
    { name: "--divider-color", label: "Divider" },
    { name: "--thin-divider-color", label: "Thin divider" },
    { name: "--faint-divider-color", label: "Faint divider" },
    { name: "--input-border-color", label: "Input border" },
    { name: "--sidebar-divider-color", label: "Sidebar divider" },
    { name: "--titlebar-border-color", label: "Titlebar border" },
    { name: "--selection-border", label: "Selection border" },
    // Enum/tag palette (Thymer ships 16 hues — no amber, lime, or violet)
    { name: "--enum-red-fg", label: "Red" },
    { name: "--enum-orange-fg", label: "Orange" },
    { name: "--enum-yellow-fg", label: "Yellow" },
    { name: "--enum-green-fg", label: "Green" },
    { name: "--enum-teal-fg", label: "Teal" },
    { name: "--enum-cyan-fg", label: "Cyan" },
    { name: "--enum-sky-fg", label: "Sky" },
    { name: "--enum-blue-fg", label: "Blue" },
    { name: "--enum-indigo-fg", label: "Indigo" },
    { name: "--enum-purple-fg", label: "Purple" },
    { name: "--enum-fuchsia-fg", label: "Fuchsia" },
    { name: "--enum-pink-fg", label: "Pink" },
    { name: "--enum-rose-fg", label: "Rose" },
    { name: "--enum-stone-fg", label: "Stone" },
    { name: "--enum-zinc-fg", label: "Zinc" }
  ]);
  function normalizeValue(value) {
    return typeof value === "string" ? value.trim() : "";
  }
  __name(normalizeValue, "normalizeValue");
  function isColorComputedValue(value) {
    return /^(#[0-9a-f]{3,8}|rgba?\(|hsla?\(|color\(|oklch\(|oklab\()/i.test(value.trim());
  }
  __name(isColorComputedValue, "isColorComputedValue");
  function labelFromVarName(name) {
    return name.replace(/^--/, "").replace(/^(color|theme)-/, "").replace(/-/g, " ").replace(/\b\w/g, (m) => m.toUpperCase());
  }
  __name(labelFromVarName, "labelFromVarName");
  function elementOrNull(node) {
    return node instanceof Element ? node : null;
  }
  __name(elementOrNull, "elementOrNull");
  function themeVariableRoots(options = {}) {
    const roots = [];
    const seen = /* @__PURE__ */ new Set();
    const add = /* @__PURE__ */ __name((node) => {
      const el = elementOrNull(node);
      if (!el || seen.has(el)) return;
      seen.add(el);
      roots.push(el);
    }, "add");
    add(document.documentElement);
    add(document.body);
    for (const selector of options.selectors || DEFAULT_THEME_SOURCES) {
      try {
        document.querySelectorAll(selector).forEach(add);
      } catch {
      }
    }
    for (const root of options.roots || []) add(root);
    return roots;
  }
  __name(themeVariableRoots, "themeVariableRoots");
  function readRenderedCssVariables(options = {}) {
    const vars = [];
    for (const root of themeVariableRoots(options)) {
      const styles = getComputedStyle(root);
      const source = root === document.documentElement ? ":root" : root === document.body ? "body" : root.className ? `.${String(root.className).trim().split(/\s+/).join(".")}` : root.tagName.toLowerCase();
      for (let i = 0; i < styles.length; i += 1) {
        const name = styles[i];
        if (!name || !name.startsWith("--")) continue;
        const value = normalizeValue(styles.getPropertyValue(name));
        if (!value) continue;
        vars.push({ name, value, source, root });
      }
    }
    return vars;
  }
  __name(readRenderedCssVariables, "readRenderedCssVariables");
  function resolveRenderedColor(cssColor, root = document.body) {
    const host = elementOrNull(root) || document.body || document.documentElement;
    if (!host) return "";
    const probe = document.createElement("span");
    probe.style.position = "absolute";
    probe.style.pointerEvents = "none";
    probe.style.visibility = "hidden";
    probe.style.color = "transparent";
    host.appendChild(probe);
    const attempts = [cssColor];
    if (cssColor.startsWith("var(")) {
      attempts.push(`rgb(${cssColor})`, `rgba(${cssColor}, 1)`, `hsl(${cssColor})`, `hsla(${cssColor}, 1)`);
    }
    try {
      for (const attempt of attempts) {
        probe.style.color = "";
        probe.style.color = attempt;
        const resolved = getComputedStyle(probe).color;
        if (resolved && resolved !== "rgba(0, 0, 0, 0)" && resolved !== "transparent") return resolved;
      }
    } finally {
      probe.remove();
    }
    return "";
  }
  __name(resolveRenderedColor, "resolveRenderedColor");
  function collectRenderedThemeColors(options = {}) {
    if (options.includeAllNamedColors) return collectAllRenderedColorVariables(options);
    return collectCurrentThemeColors(options);
  }
  __name(collectRenderedThemeColors, "collectRenderedThemeColors");
  function collectCurrentThemeColors(options = {}) {
    const roots = themeVariableRoots(options);
    const rootStyles = roots.map((root) => ({ root, styles: getComputedStyle(root) }));
    const found = [];
    for (const token of CURRENT_THEME_VARS) {
      for (const { root, styles } of rootStyles) {
        const raw = normalizeValue(styles.getPropertyValue(token.name));
        if (!raw) continue;
        const resolved = isColorComputedValue(raw) ? raw : resolveRenderedColor(`var(${token.name})`, root);
        if (!resolved && !isColorComputedValue(raw)) continue;
        found.push({
          name: token.label,
          value: `theme-var:${token.name}`,
          css: resolved || `var(${token.name})`,
          resolved: resolved || raw,
          raw,
          source: token.name
        });
        break;
      }
    }
    const deduped = [];
    const seenColors = /* @__PURE__ */ new Set();
    const accent = chooseThemeAccent(found);
    if (accent) {
      deduped.push({ ...accent, name: "Accent", value: "theme:accent" });
      seenColors.add(accent.resolved);
    }
    for (const item of found) {
      if (seenColors.has(item.resolved)) continue;
      seenColors.add(item.resolved);
      deduped.push(item);
    }
    return deduped;
  }
  __name(collectCurrentThemeColors, "collectCurrentThemeColors");
  function collectAllRenderedColorVariables(options = {}) {
    const found = [];
    const byName = /* @__PURE__ */ new Map();
    for (const item of readRenderedCssVariables(options)) {
      if (byName.has(item.name)) continue;
      byName.set(item.name, item);
    }
    for (const item of byName.values()) {
      const hinted = COLOR_NAME_HINT.test(item.name.toLowerCase());
      const resolved = resolveRenderedColor(`var(${item.name})`, item.root);
      if (!resolved && !hinted) continue;
      if (!resolved && !isColorComputedValue(item.value)) continue;
      found.push({
        name: labelFromVarName(item.name),
        value: `theme-var:${item.name}`,
        css: resolved || `var(${item.name})`,
        resolved: resolved || item.value,
        raw: item.value,
        source: item.name
      });
    }
    const deduped = [];
    const seenColors = /* @__PURE__ */ new Set();
    const accent = chooseThemeAccent(found);
    if (accent) {
      deduped.push({ ...accent, name: "Accent", value: "theme:accent" });
      seenColors.add(accent.resolved);
    }
    for (const item of found) {
      if (seenColors.has(item.resolved)) continue;
      seenColors.add(item.resolved);
      deduped.push(item);
    }
    return deduped;
  }
  __name(collectAllRenderedColorVariables, "collectAllRenderedColorVariables");
  function chooseThemeAccent(colors) {
    const names = ["--logo-color"];
    for (const name of names) {
      const found = colors.find((item) => item.source === name && item.resolved);
      if (found) return found;
    }
    return colors.find((item) => /logo|accent|primary/i.test(item.source) && item.resolved) || null;
  }
  __name(chooseThemeAccent, "chooseThemeAccent");

  // ../../shared/settings-ui/tailwind-palette.js
  var TW_SHADES = Object.freeze([50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]);
  var TW_MID_INDEX = 5;
  function mirrorShadeIdx(idx) {
    const n = TW_SHADES.length;
    const i = Math.max(0, Math.min(n - 1, Number(idx) || 0));
    return n - 1 - i;
  }
  __name(mirrorShadeIdx, "mirrorShadeIdx");
  var TAILWIND = Object.freeze({
    slate: ["#f8fafc", "#f1f5f9", "#e2e8f0", "#cbd5e1", "#94a3b8", "#64748b", "#475569", "#334155", "#1e293b", "#0f172a", "#020617"],
    gray: ["#f9fafb", "#f3f4f6", "#e5e7eb", "#d1d5db", "#9ca3af", "#6b7280", "#4b5563", "#374151", "#1f2937", "#111827", "#030712"],
    zinc: ["#fafafa", "#f4f4f5", "#e4e4e7", "#d4d4d8", "#a1a1aa", "#71717a", "#52525b", "#3f3f46", "#27272a", "#18181b", "#09090b"],
    neutral: ["#fafafa", "#f5f5f5", "#e5e5e5", "#d4d4d4", "#a3a3a3", "#737373", "#525252", "#404040", "#262626", "#171717", "#0a0a0a"],
    stone: ["#fafaf9", "#f5f5f4", "#e7e5e4", "#d6d3d1", "#a8a29e", "#78716c", "#57534e", "#44403c", "#292524", "#1c1917", "#0c0a09"],
    red: ["#fef2f2", "#fee2e2", "#fecaca", "#fca5a5", "#f87171", "#ef4444", "#dc2626", "#b91c1c", "#991b1b", "#7f1d1d", "#450a0a"],
    orange: ["#fff7ed", "#ffedd5", "#fed7aa", "#fdba74", "#fb923c", "#f97316", "#ea580c", "#c2410c", "#9a3412", "#7c2d12", "#431407"],
    amber: ["#fffbeb", "#fef3c7", "#fde68a", "#fcd34d", "#fbbf24", "#f59e0b", "#d97706", "#b45309", "#92400e", "#78350f", "#451a03"],
    yellow: ["#fefce8", "#fef9c3", "#fef08a", "#fde047", "#facc15", "#eab308", "#ca8a04", "#a16207", "#854d0e", "#713f12", "#422006"],
    lime: ["#f7fee7", "#ecfccb", "#d9f99d", "#bef264", "#a3e635", "#84cc16", "#65a30d", "#4d7c0f", "#3f6212", "#365314", "#1a2e05"],
    green: ["#f0fdf4", "#dcfce7", "#bbf7d0", "#86efac", "#4ade80", "#22c55e", "#16a34a", "#15803d", "#166534", "#14532d", "#052e16"],
    emerald: ["#ecfdf5", "#d1fae5", "#a7f3d0", "#6ee7b7", "#34d399", "#10b981", "#059669", "#047857", "#065f46", "#064e3b", "#022c22"],
    teal: ["#f0fdfa", "#ccfbf1", "#99f6e4", "#5eead4", "#2dd4bf", "#14b8a6", "#0d9488", "#0f766e", "#115e59", "#134e4a", "#042f2e"],
    cyan: ["#ecfeff", "#cffafe", "#a5f3fc", "#67e8f9", "#22d3ee", "#06b6d4", "#0891b2", "#0e7490", "#155e75", "#164e63", "#083344"],
    sky: ["#f0f9ff", "#e0f2fe", "#bae6fd", "#7dd3fc", "#38bdf8", "#0ea5e9", "#0284c7", "#0369a1", "#075985", "#0c4a6e", "#082f49"],
    blue: ["#eff6ff", "#dbeafe", "#bfdbfe", "#93c5fd", "#60a5fa", "#3b82f6", "#2563eb", "#1d4ed8", "#1e40af", "#1e3a8a", "#172554"],
    indigo: ["#eef2ff", "#e0e7ff", "#c7d2fe", "#a5b4fc", "#818cf8", "#6366f1", "#4f46e5", "#4338ca", "#3730a3", "#312e81", "#1e1b4b"],
    violet: ["#f5f3ff", "#ede9fe", "#ddd6fe", "#c4b5fd", "#a78bfa", "#8b5cf6", "#7c3aed", "#6d28d9", "#5b21b6", "#4c1d95", "#2e1065"],
    purple: ["#faf5ff", "#f3e8ff", "#e9d5ff", "#d8b4fe", "#c084fc", "#a855f7", "#9333ea", "#7e22ce", "#6b21a8", "#581c87", "#3b0764"],
    fuchsia: ["#fdf4ff", "#fae8ff", "#f5d0fe", "#f0abfc", "#e879f9", "#d946ef", "#c026d3", "#a21caf", "#86198f", "#701a75", "#4a044e"],
    pink: ["#fdf2f8", "#fce7f3", "#fbcfe8", "#f9a8d4", "#f472b6", "#ec4899", "#db2777", "#be185d", "#9d174d", "#831843", "#500724"],
    rose: ["#fff1f2", "#ffe4e6", "#fecdd3", "#fda4af", "#fb7185", "#f43f5e", "#e11d48", "#be123c", "#9f1239", "#881337", "#4c0519"]
  });
  var TW_FAMILIES = Object.freeze(Object.keys(TAILWIND));
  function isHex(s) {
    return typeof s === "string" && /^#[0-9a-f]{6}$/i.test(s);
  }
  __name(isHex, "isHex");
  function hexToRgb(hex) {
    const n = parseInt(hex.slice(1), 16);
    return [n >> 16 & 255, n >> 8 & 255, n & 255];
  }
  __name(hexToRgb, "hexToRgb");
  function exactTailwind(hex) {
    if (!isHex(hex)) return null;
    const needle = hex.toLowerCase();
    for (const family of TW_FAMILIES) {
      const i = TAILWIND[family].indexOf(needle);
      if (i >= 0) return { family, shadeIdx: i };
    }
    return null;
  }
  __name(exactTailwind, "exactTailwind");
  function nearestTailwind(hex) {
    if (!isHex(hex)) return null;
    const [r, g, b] = hexToRgb(hex);
    let best = null;
    let bestD = Infinity;
    for (const family of TW_FAMILIES) {
      const shades = TAILWIND[family];
      for (let i = 0; i < shades.length; i += 1) {
        const [cr, cg, cb] = hexToRgb(shades[i]);
        const d = (r - cr) ** 2 + (g - cg) ** 2 + (b - cb) ** 2;
        if (d < bestD) {
          bestD = d;
          best = { family, shadeIdx: i, hex: shades[i] };
        }
      }
    }
    return best;
  }
  __name(nearestTailwind, "nearestTailwind");

  // ../../shared/settings-ui/theme-swatches.js
  var THEME_GROUPS = (
    /** @type {ThemeGroupDef[]} */
    Object.freeze([
      {
        key: "hues",
        label: "Theme colors",
        tokens: [
          { token: "--enum-red-fg", label: "Red" },
          { token: "--enum-orange-fg", label: "Orange" },
          { token: "--enum-yellow-fg", label: "Yellow" },
          { token: "--enum-green-fg", label: "Green" },
          { token: "--enum-teal-fg", label: "Teal" },
          { token: "--enum-cyan-fg", label: "Cyan" },
          { token: "--enum-sky-fg", label: "Sky" },
          { token: "--enum-blue-fg", label: "Blue" },
          { token: "--enum-indigo-fg", label: "Indigo" },
          { token: "--enum-purple-fg", label: "Purple" },
          { token: "--enum-fuchsia-fg", label: "Fuchsia" },
          { token: "--enum-pink-fg", label: "Pink" },
          { token: "--enum-rose-fg", label: "Rose" },
          { token: "--tag-fg-color", label: "Tag" },
          { token: "--text-warning", label: "Warning" }
        ]
      },
      {
        key: "text",
        label: "Text & neutrals",
        tokens: [
          { token: "--text-default", label: "Text" },
          { token: "--text-muted", label: "Muted text" },
          { token: "--text-subtle", label: "Subtle text" },
          { token: "--text-hilite", label: "Highlight text" },
          { token: "--text-brighter", label: "Brighter text" },
          { token: "--text-disabled", label: "Disabled text" },
          { token: "--enum-stone-fg", label: "Stone" },
          { token: "--enum-zinc-fg", label: "Zinc" }
        ]
      },
      {
        key: "surfaces",
        label: "Surfaces & lines",
        marginal: true,
        tokens: [
          { token: "--panel-bg-color", label: "Panel background" },
          { token: "--input-bg-color", label: "Input background" },
          { token: "--hover-subtle", label: "Hover background" },
          { token: "--active-bg-color", label: "Active background" },
          { token: "--divider-color", label: "Divider" },
          { token: "--thin-divider-color", label: "Thin divider" },
          { token: "--faint-divider-color", label: "Faint divider" },
          { token: "--input-border-color", label: "Input border" },
          { token: "--titlebar-border-color", label: "Titlebar border" },
          { token: "--selection-border", label: "Selection border" }
        ]
      }
    ])
  );
  function resolveThemeToken(token, roots) {
    const rs = roots || themeVariableRoots();
    for (const root of rs) {
      const raw = getComputedStyle(root).getPropertyValue(token).trim();
      if (!raw) continue;
      const resolved = resolveRenderedColor(`var(${token})`, root);
      if (resolved) return resolved;
    }
    return "";
  }
  __name(resolveThemeToken, "resolveThemeToken");
  function resolveThemeGroups({ exclude = [] } = {}) {
    const roots = themeVariableRoots();
    const excludeSet = new Set(exclude);
    const groups = [];
    for (const def of THEME_GROUPS) {
      const swatches = [];
      const seen = /* @__PURE__ */ new Set();
      for (const { token, label } of def.tokens) {
        if (excludeSet.has(token)) continue;
        const color = resolveThemeToken(token, roots);
        if (!color || seen.has(color)) continue;
        seen.add(color);
        swatches.push({ token, label, color });
      }
      if (swatches.length) {
        groups.push({ key: def.key, label: def.label, hint: def.hint, marginal: def.marginal, swatches });
      }
    }
    return groups;
  }
  __name(resolveThemeGroups, "resolveThemeGroups");

  // ../../shared/settings-ui/tooltip.js
  var TIP_SELECTOR = "[data-tps-tip],[data-cf-tip]";
  var STYLE_ID = "tps-tip-css";
  var WIN_FLAG = "__tpsInstantTooltip";
  function installInstantTooltip() {
    if (typeof document === "undefined") return;
    if (typeof window !== "undefined" && window[WIN_FLAG]) return;
    if (typeof window !== "undefined") window[WIN_FLAG] = true;
    injectTooltipCss();
    const tip = document.createElement("div");
    tip.className = "tps-tip";
    tip.setAttribute("aria-hidden", "true");
    (document.body || document.documentElement).appendChild(tip);
    const hide = /* @__PURE__ */ __name(() => tip.classList.remove("is-visible"), "hide");
    const label = /* @__PURE__ */ __name((el) => el.getAttribute("data-tps-tip") || el.getAttribute("data-cf-tip") || "", "label");
    document.addEventListener("mouseover", (e) => {
      const t = e.target instanceof Element ? e.target.closest(TIP_SELECTOR) : null;
      if (!t) {
        hide();
        return;
      }
      const text = label(t);
      if (!text) {
        hide();
        return;
      }
      tip.textContent = text;
      const r = t.getBoundingClientRect();
      tip.style.left = `${r.left + r.width / 2}px`;
      tip.style.top = `${r.top}px`;
      tip.classList.add("is-visible");
    }, true);
    document.addEventListener("mouseout", (e) => {
      const t = e.target instanceof Element ? e.target.closest(TIP_SELECTOR) : null;
      const to = e.relatedTarget instanceof Element ? e.relatedTarget : null;
      if (t && (!to || !t.contains(to))) hide();
    }, true);
    window.addEventListener("scroll", hide, true);
    window.addEventListener("blur", hide);
  }
  __name(installInstantTooltip, "installInstantTooltip");
  function injectTooltipCss() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = [
      ".tps-tip{position:fixed;z-index:2147483000;transform:translate(-50%,calc(-100% - 8px));",
      "padding:3px 8px;border-radius:var(--tps-radius-sm,5px);background:var(--tps-text,#1a1a1a);",
      "color:var(--tps-panel-bg,#fff);font-size:11px;font-weight:500;line-height:1.3;white-space:nowrap;",
      "pointer-events:none;opacity:0;box-shadow:0 2px 8px rgba(0,0,0,.35)}",
      ".tps-tip.is-visible{opacity:1}"
    ].join("");
    (document.head || document.documentElement).appendChild(style);
  }
  __name(injectTooltipCss, "injectTooltipCss");

  // ../../shared/settings-ui/color-field.js
  var MAX_CUSTOM = 44;
  function colorField({ value = null, onPick, featured = [], allowNone = true, customSwatches = [], onCustomSwatchesChange } = {}) {
    const emit = /* @__PURE__ */ __name((r) => {
      if (typeof onPick === "function") onPick(r);
    }, "emit");
    let curFamily = "blue";
    let curShade = TW_MID_INDEX;
    let invertLightness = false;
    let mode = "theme";
    let customList = Array.isArray(customSwatches) ? customSwatches.filter(isHex).map((s) => s.toLowerCase()).slice(0, MAX_CUSTOM) : [];
    let selection = null;
    if (value && value.type === "tw" && value.family && TAILWIND[value.family]) {
      const idx = Math.max(0, Math.min(TW_SHADES.length - 1, Number(value.shadeIdx) || 0));
      curFamily = value.family;
      curShade = idx;
      invertLightness = !!value.invert;
      selection = { kind: "hex", hex: TAILWIND[value.family][idx] };
      mode = "tailwind";
    } else {
      selection = normalizeValue2(value);
      if (selection && selection.kind === "hex") {
        const ex = exactTailwind(selection.hex);
        if (ex) {
          curFamily = ex.family;
          curShade = ex.shadeIdx;
          mode = "tailwind";
        } else {
          const near = nearestTailwind(selection.hex);
          if (near) {
            curFamily = near.family;
            curShade = near.shadeIdx;
          }
          mode = "custom";
        }
      }
    }
    const root = h("div", { class: "tps-color-field" });
    const tabs = { theme: tabBtn("theme", "Theme"), tailwind: tabBtn("tailwind", "Tailwind"), custom: tabBtn("custom", "Custom") };
    root.appendChild(h("div", { class: "tps-cf-tabs" }, tabs.theme, tabs.tailwind, tabs.custom));
    function tabBtn(m, label) {
      const b = h("button", { type: "button", class: "tps-cf-tab", dataset: { mode: m } }, label);
      b.addEventListener("click", () => setMode(m));
      return b;
    }
    __name(tabBtn, "tabBtn");
    const paneTheme = h("div", { class: "tps-cf-pane", dataset: { pane: "theme" } });
    const featuredTokens = featured.map((f) => f.token);
    if (featured.length) {
      const featRow = h("div", { class: "tps-cf-featured" });
      for (const f of featured) {
        const color = resolveThemeToken(f.token);
        if (!color) continue;
        featRow.appendChild(themeTile(f.label, f.token, color));
      }
      if (featRow.children.length) paneTheme.appendChild(featRow);
    }
    for (const g of resolveThemeGroups({ exclude: featuredTokens })) {
      paneTheme.appendChild(h(
        "div",
        { class: "tps-cf-group" },
        h(
          "div",
          { class: "tps-cf-group-head" },
          h("span", { class: "tps-cf-group-label" }, g.label),
          g.hint ? h("span", { class: "tps-cf-group-hint" }, g.hint) : null
        ),
        h("div", { class: "tps-cf-dots" }, ...g.swatches.map((s) => themeDot(s.label, s.token, s.color)))
      ));
    }
    root.appendChild(paneTheme);
    const paneTw = h("div", { class: "tps-cf-pane", dataset: { pane: "tailwind" } });
    const hueCells = {};
    const hueRow = h("div", { class: "tps-cf-dots" });
    for (const fam of TW_FAMILIES) {
      const dot = h("button", {
        type: "button",
        class: "tps-cf-swatch tps-cf-dot tps-cf-hue-dot",
        dataset: { cfTip: fam },
        "aria-label": fam,
        style: { background: TAILWIND[fam][TW_MID_INDEX] }
      });
      dot.addEventListener("click", () => {
        curFamily = fam;
        buildLightRamp();
        pickTailwind(fam, curShade);
      });
      hueCells[fam] = dot;
      hueRow.appendChild(dot);
    }
    const lightRamp = h("div", { class: "tps-cf-ramp" });
    const invertCheckbox = h("input", { type: "checkbox", class: "tps-cf-invert-cb" });
    invertCheckbox.checked = invertLightness;
    const invertRow = h(
      "label",
      { class: "tps-cf-invert" },
      invertCheckbox,
      h("span", null, "Invert lightness in light/dark"),
      h("span", { class: "tps-cf-invert-hint" }, "e.g. 900 in light \u2192 100 in dark")
    );
    invertCheckbox.addEventListener("change", () => {
      invertLightness = invertCheckbox.checked;
      renderSelection();
      if (selection && selection.kind === "hex") {
        const ex = exactTailwind(selection.hex);
        if (ex) emit({ type: "tw", family: ex.family, shadeIdx: ex.shadeIdx, invert: invertLightness, hex: selection.hex });
      }
    });
    paneTw.appendChild(labeledGroup("Hue", hueRow));
    paneTw.appendChild(labeledGroup("Lightness", lightRamp));
    paneTw.appendChild(invertRow);
    root.appendChild(paneTw);
    function buildLightRamp() {
      lightRamp.textContent = "";
      TW_SHADES.forEach((s, si) => {
        const hex = TAILWIND[curFamily][si];
        const cell = h("button", {
          type: "button",
          class: "tps-cf-ramp-cell",
          dataset: { si: String(si), cfTip: `${curFamily}-${s} \xB7 ${hex}` },
          "aria-label": `${curFamily} ${s}`,
          style: { background: hex, color: textOn(hex) }
        }, String(s));
        cell.addEventListener("click", () => {
          curShade = si;
          pickTailwind(curFamily, si);
        });
        lightRamp.appendChild(cell);
      });
    }
    __name(buildLightRamp, "buildLightRamp");
    function pickTailwind(family, shadeIdx) {
      curFamily = family;
      curShade = shadeIdx;
      const hex = TAILWIND[family][shadeIdx];
      selection = { kind: "hex", hex };
      renderSelection();
      emit({ type: "tw", family, shadeIdx, invert: invertLightness, hex });
    }
    __name(pickTailwind, "pickTailwind");
    const paneCustom = h("div", { class: "tps-cf-pane", dataset: { pane: "custom" } });
    const customRow = h("div", { class: "tps-cf-dots tps-cf-custom-row" });
    const hexDot = h("span", { class: "tps-cf-hex-dot" });
    const hexInput = h("input", { type: "text", class: "tps-cf-hex-input", placeholder: "#hex", maxLength: 7, spellcheck: false, "aria-label": "Custom hex color" });
    const addBtn = h("button", { type: "button", class: "tps-cf-add" }, "Add");
    const removeBtn = h("button", { type: "button", class: "tps-cf-remove" }, "Remove");
    removeBtn.hidden = true;
    const countEl = h("span", { class: "tps-cf-custom-count" });
    paneCustom.appendChild(customRow);
    paneCustom.appendChild(h(
      "div",
      { class: "tps-cf-addrow" },
      h("span", { class: "tps-cf-hexbox" }, hexDot, hexInput),
      addBtn,
      removeBtn,
      countEl
    ));
    root.appendChild(paneCustom);
    removeBtn.addEventListener("click", () => {
      if (!selection || selection.kind !== "hex") return;
      const idx = customList.indexOf(selection.hex);
      if (idx >= 0) removeCustom(idx);
    });
    let dragIdx = -1;
    function renderCustomRow() {
      customRow.textContent = "";
      if (!customList.length) {
        customRow.appendChild(h("span", { class: "tps-cf-custom-empty" }, "No saved colors yet \u2014 add a hex, then select one and press Remove to delete it."));
      }
      customList.forEach((hex, i) => {
        const dot = h("button", {
          type: "button",
          class: "tps-cf-swatch tps-cf-dot tps-cf-custom-dot",
          draggable: "true",
          dataset: { hex, idx: String(i), cfTip: hex.toUpperCase() },
          "aria-label": hex,
          style: { background: hex }
        });
        dot.addEventListener("click", () => pickHex(hex));
        dot.addEventListener("dragstart", () => {
          dragIdx = i;
          dot.classList.add("is-dragging");
        });
        dot.addEventListener("dragend", () => dot.classList.remove("is-dragging"));
        dot.addEventListener("dragover", (e) => e.preventDefault());
        dot.addEventListener("drop", (e) => {
          e.preventDefault();
          if (dragIdx >= 0 && dragIdx !== i) reorderCustom(dragIdx, i);
          dragIdx = -1;
        });
        customRow.appendChild(dot);
      });
      countEl.textContent = `${customList.length}/${MAX_CUSTOM}`;
      renderSelection();
    }
    __name(renderCustomRow, "renderCustomRow");
    const commitCustom = /* @__PURE__ */ __name(() => {
      if (typeof onCustomSwatchesChange === "function") onCustomSwatchesChange(customList.slice());
    }, "commitCustom");
    function addCustom() {
      const hex = normHex(hexInput.value);
      if (!hex) return;
      if (!customList.includes(hex) && customList.length < MAX_CUSTOM) {
        customList = [...customList, hex];
        commitCustom();
        renderCustomRow();
      }
      hexInput.value = "";
      hexDot.style.background = "";
      pickHex(hex);
    }
    __name(addCustom, "addCustom");
    function removeCustom(i) {
      customList = customList.filter((_, j) => j !== i);
      commitCustom();
      renderCustomRow();
    }
    __name(removeCustom, "removeCustom");
    function reorderCustom(from, to) {
      const arr = customList.slice();
      const [m] = arr.splice(from, 1);
      arr.splice(to, 0, m);
      customList = arr;
      commitCustom();
      renderCustomRow();
    }
    __name(reorderCustom, "reorderCustom");
    addBtn.addEventListener("click", addCustom);
    hexInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        addCustom();
      }
    });
    hexInput.addEventListener("input", () => {
      const hadHash = hexInput.value.trimStart().startsWith("#");
      const digits = hexInput.value.replace(/[^0-9a-fA-F]/g, "").slice(0, 6);
      const cleaned = (hadHash ? "#" : "") + digits;
      if (cleaned !== hexInput.value) hexInput.value = cleaned;
      const hex = normHex(hexInput.value);
      hexDot.style.background = hex || "";
      if (hex) {
        selection = { kind: "hex", hex };
        renderSelection();
        emit({ type: "hex", hex });
      }
    });
    let noneRef = null;
    if (allowNone) {
      noneRef = h("button", { type: "button", class: "tps-cf-none" }, h("span", { class: "tps-cf-none-sw" }), "No color");
      noneRef.addEventListener("click", () => {
        selection = { kind: "none" };
        renderAll();
        emit(null);
      });
      root.appendChild(h("div", { class: "tps-cf-divider" }));
      root.appendChild(h("div", { class: "tps-cf-universal" }, noneRef));
    }
    function pickHex(hex) {
      selection = { kind: "hex", hex };
      renderSelection();
      emit({ type: "hex", hex });
    }
    __name(pickHex, "pickHex");
    function renderSelection() {
      root.querySelectorAll(".is-sel, .is-sel-mirror").forEach((e) => e.classList.remove("is-sel", "is-sel-mirror"));
      Object.values(hueCells).forEach((c) => c.classList.remove("is-active"));
      if (hueCells[curFamily]) hueCells[curFamily].classList.add("is-active");
      removeBtn.hidden = !(selection && selection.kind === "hex" && customList.includes(selection.hex));
      let twShadeSelected = false;
      if (selection) {
        if (selection.kind === "theme") {
          const el = root.querySelector(`.tps-cf-swatch[data-token="${cssEscape(selection.token)}"]`);
          if (el) el.classList.add("is-sel");
        } else if (selection.kind === "hex") {
          const rc = lightRamp.querySelector(`.tps-cf-ramp-cell[data-si="${curShade}"]`);
          if (rc && TAILWIND[curFamily][curShade] === selection.hex) {
            rc.classList.add("is-sel");
            twShadeSelected = true;
          }
          customRow.querySelectorAll(".tps-cf-custom-dot").forEach((d) => {
            if (d.dataset.hex === selection.hex) d.classList.add("is-sel");
          });
        } else if (selection.kind === "none") {
          if (noneRef) noneRef.classList.add("is-sel");
        }
      }
      const canInvert = twShadeSelected && curShade !== TW_MID_INDEX;
      invertCheckbox.disabled = !canInvert;
      invertRow.classList.toggle("is-disabled", !canInvert);
      if (canInvert && invertLightness) {
        const mc = lightRamp.querySelector(`.tps-cf-ramp-cell[data-si="${mirrorShadeIdx(curShade)}"]`);
        if (mc) mc.classList.add("is-sel-mirror");
      }
    }
    __name(renderSelection, "renderSelection");
    function setMode(m) {
      mode = m;
      for (const k in tabs) tabs[k].classList.toggle("is-active", k === m);
      paneTheme.classList.toggle("is-active", m === "theme");
      paneTw.classList.toggle("is-active", m === "tailwind");
      paneCustom.classList.toggle("is-active", m === "custom");
    }
    __name(setMode, "setMode");
    function renderAll() {
      setMode(mode);
      renderSelection();
    }
    __name(renderAll, "renderAll");
    function themeTile(label, token, color) {
      const tile = h(
        "button",
        { type: "button", class: "tps-cf-swatch tps-cf-tile", dataset: { token }, "aria-label": label },
        h("span", { class: "tps-cf-tile-dot", style: { background: color } }),
        h("span", { class: "tps-cf-tile-label" }, label)
      );
      tile.addEventListener("click", () => selectTheme(token));
      return tile;
    }
    __name(themeTile, "themeTile");
    function themeDot(label, token, color) {
      const dot = h("button", { type: "button", class: "tps-cf-swatch tps-cf-dot", dataset: { token, cfTip: label }, "aria-label": label, style: { background: color } });
      dot.addEventListener("click", () => selectTheme(token));
      return dot;
    }
    __name(themeDot, "themeDot");
    function selectTheme(token) {
      selection = { kind: "theme", token };
      renderSelection();
      const rendered = resolveThemeToken(token);
      emit({ type: "theme", token, hex: renderedToHex(rendered) || rendered });
    }
    __name(selectTheme, "selectTheme");
    function labeledGroup(label, body) {
      return h("div", { class: "tps-cf-group" }, h("div", { class: "tps-cf-group-head" }, h("span", { class: "tps-cf-group-label" }, label)), body);
    }
    __name(labeledGroup, "labeledGroup");
    installInstantTooltip();
    buildLightRamp();
    renderCustomRow();
    if (selection && selection.kind === "hex" && mode === "custom" && !customList.includes(selection.hex)) {
      hexInput.value = selection.hex;
      hexDot.style.background = selection.hex;
    }
    renderAll();
    return root;
  }
  __name(colorField, "colorField");
  function normalizeValue2(value) {
    if (!value) return null;
    if (value.type === "hex" && isHex(value.hex)) return { kind: "hex", hex: value.hex.toLowerCase() };
    if (value.type === "theme" && value.token) return { kind: "theme", token: value.token };
    return null;
  }
  __name(normalizeValue2, "normalizeValue");
  function cssEscape(s) {
    return String(s).replace(/"/g, '\\"');
  }
  __name(cssEscape, "cssEscape");
  function normHex(input) {
    if (typeof input !== "string") return null;
    let s = input.trim().toLowerCase();
    if (!s) return null;
    if (!s.startsWith("#")) s = `#${s}`;
    if (/^#[0-9a-f]{3}$/.test(s)) s = `#${s.slice(1).split("").map((c) => c + c).join("")}`;
    return /^#[0-9a-f]{6}$/.test(s) ? s : null;
  }
  __name(normHex, "normHex");
  function textOn(hex) {
    const n = parseInt(hex.slice(1), 16);
    const r = n >> 16 & 255, g = n >> 8 & 255, b = n & 255;
    const l = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return l > 0.6 ? "rgba(0,0,0,0.72)" : "rgba(255,255,255,0.92)";
  }
  __name(textOn, "textOn");
  function renderedToHex(str) {
    if (!str) return "";
    if (/^#[0-9a-f]{6}$/i.test(str)) return str.toLowerCase();
    const m = str.match(/rgba?\(([^)]+)\)/i);
    if (!m) return "";
    const parts = m[1].split(",").map((s) => parseFloat(s.trim()));
    if (parts.length < 3 || parts.some((n) => Number.isNaN(n))) return "";
    const t = /* @__PURE__ */ __name((n) => Math.max(0, Math.min(255, Math.round(n))).toString(16).padStart(2, "0"), "t");
    return `#${t(parts[0])}${t(parts[1])}${t(parts[2])}`;
  }
  __name(renderedToHex, "renderedToHex");

  // ../../shared/plugin-version.js
  function readPluginVersion(conf, fallback = "0.0.1") {
    if (!conf || typeof conf !== "object") return fallback;
    if (typeof conf.version === "string" && conf.version) return conf.version;
    const custom = conf.custom;
    if (custom && typeof custom === "object" && typeof custom.pluginVersion === "string" && custom.pluginVersion) {
      return custom.pluginVersion;
    }
    return fallback;
  }
  __name(readPluginVersion, "readPluginVersion");
  function configWithPluginVersion(conf, customPatch, pluginVersion) {
    const base = conf && typeof conf === "object" ? conf : {};
    const custom = base.custom && typeof base.custom === "object" ? base.custom : {};
    return {
      ...base,
      version: pluginVersion,
      custom: {
        ...custom,
        ...customPatch,
        pluginVersion
      }
    };
  }
  __name(configWithPluginVersion, "configWithPluginVersion");
  async function syncPluginVersionOnLoad(plugin, pluginVersion, customPatch = {}) {
    if (!plugin || typeof plugin.saveConfiguration !== "function") return;
    let conf = {};
    try {
      conf = plugin.getConfiguration?.() || {};
    } catch {
      return;
    }
    if (typeof conf.name !== "string" || !conf.name.trim()) return;
    const custom = conf.custom && typeof conf.custom === "object" ? { .../** @type {Record<string, unknown>} */
    conf.custom, ...customPatch } : { ...customPatch };
    if (readPluginVersion(conf, "") === pluginVersion) return;
    try {
      await plugin.saveConfiguration(configWithPluginVersion(conf, custom, pluginVersion));
    } catch {
    }
  }
  __name(syncPluginVersionOnLoad, "syncPluginVersionOnLoad");

  // ../../shared/telemetry/ping.js
  var TELEMETRY_ENDPOINT = "https://thymer-plugins.goatcounter.com/count";
  var TELEMETRY_SCRIPT_SRC = "https://gc.zgo.at/count.js";
  var _telemetryScriptPromise = null;
  function _loadGoatCounter() {
    if (_telemetryScriptPromise) return _telemetryScriptPromise;
    _telemetryScriptPromise = new Promise((resolve) => {
      window.goatcounter = window.goatcounter || {};
      window.goatcounter.no_onload = true;
      window.goatcounter.allow_local = false;
      if (typeof window.goatcounter.count === "function") {
        resolve();
        return;
      }
      const s = document.createElement("script");
      s.async = true;
      s.src = TELEMETRY_SCRIPT_SRC;
      s.setAttribute("data-goatcounter", TELEMETRY_ENDPOINT);
      s.setAttribute("data-goatcounter-settings", '{"no_onload": true}');
      s.onload = () => resolve();
      s.onerror = () => resolve();
      document.head.appendChild(s);
    });
    return _telemetryScriptPromise;
  }
  __name(_loadGoatCounter, "_loadGoatCounter");
  function _fireTelemetry(path) {
    _loadGoatCounter().then(() => {
      try {
        window.goatcounter.count({ path, title: "", event: false });
      } catch (_) {
      }
    });
  }
  __name(_fireTelemetry, "_fireTelemetry");
  function _telemetryBlocked() {
    try {
      if (navigator.doNotTrack === "1") return true;
      if (localStorage.getItem("tps-telemetry-opt-out") === "1") return true;
    } catch (_) {
      return true;
    }
    return false;
  }
  __name(_telemetryBlocked, "_telemetryBlocked");
  function pingInstall(slug) {
    try {
      if (_telemetryBlocked()) return;
      const key = "tps-tcm-" + slug;
      if (localStorage.getItem(key) === "1") return;
      localStorage.setItem(key, "1");
      _fireTelemetry("thymer-" + slug);
    } catch (_) {
    }
  }
  __name(pingInstall, "pingInstall");
  function pingActive(slug) {
    try {
      if (_telemetryBlocked()) return;
      const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
      const key = "tps-act-" + slug;
      if (localStorage.getItem(key) === today) return;
      localStorage.setItem(key, today);
      _fireTelemetry("thymer-" + slug + "/active");
    } catch (_) {
    }
  }
  __name(pingActive, "pingActive");

  // plugin.js
  var PLUGIN_VERSION = "1.0.1";
  var PLUGIN_KEY = "sidebarSeperators";
  var MARK_ATTR = "data-plg-sidebar-seperator";
  var PANEL_CLASS = "plg-sidebar-seperators-panel";
  var COLLECTION_COLORS_CLASS = "plg-collection-colors";
  var PANEL_TYPE = "sidebar-seperators-settings";
  var STYLE_ID2 = "plg-sidebar-seperators-runtime-style";
  var ACTION_BUTTON_CLASS = "plg-sidebar-seperators-action-button";
  var EDIT_BUTTON_CLASS = "plg-sidebar-seperators-edit-button";
  var DELETE_BUTTON_CLASS = "plg-sidebar-seperators-delete-button";
  var ACTION_OVERLAY_CLASS = "plg-sidebar-seperators-action-overlay";
  var ROOT_SELECTOR = ".sidebar--icons, .sidebar";
  var COLLECTION_ROW_SELECTOR = ".sidebar-item-collection[data-guid]";
  var OUTSIDE_HOLD_MS = 3e3;
  var THEME_SURFACE_CSS = "var(--panel-bg-color, color-mix(in srgb, currentColor 10%, transparent))";
  var THEME_ACCENT_CSS = "var(--logo-color, currentColor)";
  var SEPARATOR_COLLECTION_NAME = "\u200B";
  var SIDEBAR_DIVIDER_VAR_VALUE = "theme-var:--sidebar-divider-color";
  var SIDEBAR_DIVIDER_VAR_CSS = "var(--sidebar-divider-color, var(--divider-color, color-mix(in srgb, currentColor 14%, transparent)))";
  var BORDER_STYLES = (
    /** @type {const} */
    [
      "solid",
      "dashed",
      "dotted",
      "double",
      "gradient"
    ]
  );
  var ALIGNMENTS = (
    /** @type {const} */
    [
      "left",
      "center",
      "right"
    ]
  );
  var TAILWIND_SWATCHES = Object.freeze([
    { name: "Slate", hex: "#64748b" },
    { name: "Gray", hex: "#6b7280" },
    { name: "Zinc", hex: "#71717a" },
    { name: "Neutral", hex: "#737373" },
    { name: "Red", hex: "#ef4444" },
    { name: "Orange", hex: "#f97316" },
    { name: "Amber", hex: "#f59e0b" },
    { name: "Yellow", hex: "#eab308" },
    { name: "Lime", hex: "#84cc16" },
    { name: "Green", hex: "#22c55e" },
    { name: "Emerald", hex: "#10b981" },
    { name: "Teal", hex: "#14b8a6" },
    { name: "Cyan", hex: "#06b6d4" },
    { name: "Sky", hex: "#0ea5e9" },
    { name: "Blue", hex: "#3b82f6" },
    { name: "Indigo", hex: "#6366f1" },
    { name: "Violet", hex: "#8b5cf6" },
    { name: "Purple", hex: "#a855f7" },
    { name: "Fuchsia", hex: "#d946ef" },
    { name: "Pink", hex: "#ec4899" },
    { name: "Rose", hex: "#f43f5e" }
  ]);
  var TANA_SWATCHES = Object.freeze([
    { name: "White", hex: "#ffffff" },
    { name: "Light", hex: "#d1d5db" },
    { name: "Grey", hex: "#6b7280" },
    { name: "Dark", hex: "#374151" },
    { name: "Pink", hex: "#db2777" },
    { name: "Red", hex: "#b91c1c" },
    { name: "Orange", hex: "#f97316" },
    { name: "Bronze", hex: "#b45309" },
    { name: "Yellow", hex: "#eab308" },
    { name: "Lime", hex: "#65a30d" },
    { name: "Mint", hex: "#34d399" },
    { name: "Steel", hex: "#0369a1" },
    { name: "Blue", hex: "#3b82f6" },
    { name: "Violet", hex: "#5b21b6" },
    { name: "Purple", hex: "#9333ea" },
    { name: "Rose", hex: "#f472b6" }
  ]);
  var COLOR_PALETTE_GROUPS = Object.freeze([
    { id: "tana", name: "Tana", swatches: TANA_SWATCHES },
    { id: "tailwind", name: "Tailwind", swatches: TAILWIND_SWATCHES },
    { id: "pastel", name: "Pastel", swatches: Object.freeze([
      { name: "White", hex: "#ffffff" },
      { name: "Light", hex: "#f3f4f6" },
      { name: "Grey", hex: "#e5e7eb" },
      { name: "Dark", hex: "#cbd5e1" },
      { name: "Blush", hex: "#fecaca" },
      { name: "Peach", hex: "#fed7aa" },
      { name: "Butter", hex: "#fef3c7" },
      { name: "Sage", hex: "#d9f99d" },
      { name: "Mint", hex: "#bbf7d0" },
      { name: "Aqua", hex: "#a5f3fc" },
      { name: "Sky", hex: "#bae6fd" },
      { name: "Lilac", hex: "#e9d5ff" },
      { name: "Pink", hex: "#fbcfe8" },
      { name: "Rose", hex: "#fecdd3" }
    ]) },
    { id: "material", name: "Material", swatches: Object.freeze([
      { name: "White", hex: "#ffffff" },
      { name: "Light", hex: "#e0e0e0" },
      { name: "Grey", hex: "#9e9e9e" },
      { name: "Dark", hex: "#424242" },
      { name: "Red", hex: "#f44336" },
      { name: "Pink", hex: "#e91e63" },
      { name: "Purple", hex: "#9c27b0" },
      { name: "Deep Purple", hex: "#673ab7" },
      { name: "Indigo", hex: "#3f51b5" },
      { name: "Blue", hex: "#2196f3" },
      { name: "Cyan", hex: "#00bcd4" },
      { name: "Teal", hex: "#009688" },
      { name: "Green", hex: "#4caf50" },
      { name: "Lime", hex: "#cddc39" },
      { name: "Yellow", hex: "#ffeb3b" },
      { name: "Amber", hex: "#ffc107" },
      { name: "Orange", hex: "#ff9800" },
      { name: "Deep Orange", hex: "#ff5722" }
    ]) },
    { id: "solarized", name: "Solarized", swatches: Object.freeze([
      { name: "Base 3", hex: "#fdf6e3" },
      { name: "Base 1", hex: "#93a1a1" },
      { name: "Base 01", hex: "#586e75" },
      { name: "Yellow", hex: "#b58900" },
      { name: "Orange", hex: "#cb4b16" },
      { name: "Red", hex: "#dc322f" },
      { name: "Magenta", hex: "#d33682" },
      { name: "Violet", hex: "#6c71c4" },
      { name: "Blue", hex: "#268bd2" },
      { name: "Cyan", hex: "#2aa198" },
      { name: "Green", hex: "#859900" }
    ]) },
    { id: "nord", name: "Nord", swatches: Object.freeze([
      { name: "Snow 6", hex: "#eceff4" },
      { name: "Snow 4", hex: "#d8dee9" },
      { name: "Polar 3", hex: "#4c566a" },
      { name: "Polar 0", hex: "#2e3440" },
      { name: "Frost 7", hex: "#8fbcbb" },
      { name: "Frost 8", hex: "#88c0d0" },
      { name: "Frost 9", hex: "#81a1c1" },
      { name: "Frost 10", hex: "#5e81ac" },
      { name: "Red", hex: "#bf616a" },
      { name: "Orange", hex: "#d08770" },
      { name: "Yellow", hex: "#ebcb8b" },
      { name: "Green", hex: "#a3be8c" },
      { name: "Purple", hex: "#b48ead" }
    ]) },
    { id: "dracula", name: "Dracula", swatches: Object.freeze([
      { name: "Foreground", hex: "#f8f8f2" },
      { name: "Comment", hex: "#6272a4" },
      { name: "Selection", hex: "#44475a" },
      { name: "Background", hex: "#282a36" },
      { name: "Cyan", hex: "#8be9fd" },
      { name: "Green", hex: "#50fa7b" },
      { name: "Yellow", hex: "#f1fa8c" },
      { name: "Orange", hex: "#ffb86c" },
      { name: "Red", hex: "#ff5555" },
      { name: "Pink", hex: "#ff79c6" },
      { name: "Purple", hex: "#bd93f9" }
    ]) }
  ]);
  var THEME_COLORS = Object.freeze([
    { name: "Accent", value: "theme:accent", css: THEME_ACCENT_CSS },
    { name: "Text", value: "var:--text-default", css: "var(--text-default, currentColor)" },
    { name: "Muted text", value: "var:--text-muted", css: "var(--text-muted, color-mix(in srgb, currentColor 62%, transparent))" },
    { name: "Subtle text", value: "var:--text-subtle", css: "var(--text-subtle, color-mix(in srgb, currentColor 48%, transparent))" },
    { name: "Border", value: "var:--divider-color", css: "var(--divider-color, color-mix(in srgb, currentColor 14%, transparent))" },
    { name: "Subtle border", value: "var:--thin-divider-color", css: "var(--thin-divider-color, color-mix(in srgb, currentColor 10%, transparent))" },
    { name: "Input border", value: "var:--input-border-color", css: "var(--input-border-color, color-mix(in srgb, currentColor 22%, transparent))" },
    { name: "Background", value: "var:--panel-bg-color", css: THEME_SURFACE_CSS },
    { name: "Hover bg", value: "var:--hover-subtle", css: "var(--hover-subtle, color-mix(in srgb, currentColor 8%, transparent))" },
    { name: "Enum red", value: "var:--enum-red-fg", css: "var(--enum-red-fg, #ef4444)" },
    { name: "Enum orange", value: "var:--enum-orange-fg", css: "var(--enum-orange-fg, #f97316)" },
    { name: "Enum yellow", value: "var:--enum-yellow-fg", css: "var(--enum-yellow-fg, #eab308)" },
    { name: "Enum green", value: "var:--enum-green-fg", css: "var(--enum-green-fg, #22c55e)" },
    { name: "Enum teal", value: "var:--enum-teal-fg", css: "var(--enum-teal-fg, #14b8a6)" },
    { name: "Enum blue", value: "var:--enum-blue-fg", css: "var(--enum-blue-fg, #3b82f6)" },
    { name: "Enum indigo", value: "var:--enum-indigo-fg", css: "var(--enum-indigo-fg, #6366f1)" },
    { name: "Enum purple", value: "var:--enum-purple-fg", css: "var(--enum-purple-fg, #8b5cf6)" },
    { name: "Enum fuchsia", value: "var:--enum-fuchsia-fg", css: "var(--enum-fuchsia-fg, #d946ef)" },
    { name: "Enum pink", value: "var:--enum-pink-fg", css: "var(--enum-pink-fg, #ec4899)" }
  ]);
  var THEME_COLOR_ALIASES = Object.freeze({
    "var:--logo-color": THEME_ACCENT_CSS
  });
  var DEFAULT_STYLE = Object.freeze({
    borderStyle: "solid",
    color: SIDEBAR_DIVIDER_VAR_VALUE,
    customColor: "#3b82f6",
    thicknessPx: 1,
    doubleGapPx: 2,
    widthPct: 100,
    opacityPct: 100,
    insetPx: 0,
    heightPx: 20,
    offsetYPx: 0,
    alignment: "left",
    gradientPct: 65
  });
  var Plugin = class extends AppPlugin {
    static {
      __name(this, "Plugin");
    }
    /** @type {PluginCommandPaletteCommand | null} */
    _settingsCommand = null;
    /** @type {MutationObserver | null} */
    _observer = null;
    /** @type {string[]} */
    _handlerIds = [];
    /** @type {Map<string, SeparatorEntry>} */
    _separators = /* @__PURE__ */ new Map();
    /** @type {SeparatorPreset[]} global reusable looks, synced in plugin config */
    _presets = [];
    /** @type {string | null} guid of a preset currently open in the editor */
    _editingPresetId = null;
    /** @type {boolean} guard: true while applying/propagating a preset (skip unbind) */
    _applyingPreset = false;
    /** @type {ReturnType<typeof setTimeout> | null} */
    _presetSaveTimer = null;
    /** @type {SeparatorStyle} */
    _defaultStyle = { ...DEFAULT_STYLE };
    /** @type {HTMLElement | null} */
    _panelEl = null;
    /** @type {string | null} */
    _activeOverrideGuid = null;
    /** @type {ReturnType<typeof setTimeout> | null} */
    _refreshTimer = null;
    /** @type {ReturnType<typeof setTimeout> | null} */
    _removeTimer = null;
    /** @type {HTMLElement | null} */
    _dragRow = null;
    /** @type {string | null} */
    _dragGuid = null;
    /** @type {{x: number, y: number}} */
    _lastDragPoint = { x: 0, y: 0 };
    /** @type {EventListener | null} */
    _boundDragStart = null;
    /** @type {EventListener | null} */
    _boundDrag = null;
    /** @type {EventListener | null} */
    _boundDragEnd = null;
    /** @type {EventListener | null} */
    _boundSeparatorActivate = null;
    /** @type {Map<string, ReturnType<typeof setTimeout>>} */
    _separatorSaveTimers = /* @__PURE__ */ new Map();
    /** @type {Map<string, SeparatorStyle | null>} */
    _pendingSeparatorStyles = /* @__PURE__ */ new Map();
    /** @type {Map<string, SeparatorStyle | null>} */
    _pendingCollapsedSeparatorStyles = /* @__PURE__ */ new Map();
    /** @type {Set<string>} */
    _nameFixGuids = /* @__PURE__ */ new Set();
    /** @type {HTMLElement | null} */
    _hoverActionOverlayEl = null;
    /** @type {ReturnType<typeof setTimeout> | null} */
    _hoverActionOverlayHideTimer = null;
    /** @type {HTMLElement | null} */
    _activeActionOverlayEl = null;
    /** @type {ReturnType<typeof requestAnimationFrame> | null} */
    _activeOverlayPositionRaf = null;
    /** @type {(() => void) | null} */
    _boundReposition = null;
    /** @type {{name: string, value: string, css: string, resolved: string, raw: string, source: string}[]} */
    _themeColors = [];
    /** @type {number} */
    _themeColorsReadAt = 0;
    /** @type {string[]} user's saved custom swatches (global palette) */
    _customSwatches = [];
    /** @type {ResizeObserver | null} */
    _panelResizeObserver = null;
    /** @type {MutationObserver | null} */
    _appearanceObserver = null;
    /** @type {boolean | null} */
    _lastDark = null;
    /** @type {number | null} */
    _appearanceRaf = null;
    onLoad() {
      pingInstall("sidebar-seperators");
      pingActive("sidebar-seperators");
      this._defaultStyle = this._normalizeStyle(DEFAULT_STYLE);
      this._activeOverrideGuid = null;
      this._editingPresetId = null;
      this._customSwatches = this._loadCustomSwatches();
      this._presets = this._loadPresets();
      this._watchAppearance();
      syncPluginVersionOnLoad(this, PLUGIN_VERSION);
      installInstantTooltip();
      this.ui.injectCSS(PANEL_CSS);
      this._injectCSS();
      this._ensureRuntimeStyle();
      this._refreshThemeColors(true);
      this._writeRuntimeStyle();
      this._settingsCommand = this.ui.addCommandPaletteCommand({
        label: "Plugin: Sidebar Seperators",
        icon: "settings",
        onSelected: /* @__PURE__ */ __name(() => this._openPanel(), "onSelected")
      });
      this.ui.registerCustomPanelType(PANEL_TYPE, (pluginPanel) => {
        try {
          pluginPanel.setTitle("Sidebar Seperators Settings");
        } catch {
        }
        const root = pluginPanel.getElement();
        if (!root) return;
        this._panelEl = root;
        this._renderPanel();
        this._markSidebarRows();
      });
      this._handlerIds = [];
      try {
        this._handlerIds.push(this.events.on("panel.closed", () => this._scheduleRefresh()));
        this._handlerIds.push(this.events.on("panel.navigated", () => this._scheduleRefresh()));
      } catch {
      }
      this._boundDragStart = (event) => {
        if (event instanceof DragEvent) this._onDragStart(event);
      };
      this._boundDrag = (event) => {
        if (event instanceof DragEvent) this._onDrag(event);
      };
      this._boundDragEnd = () => this._finishDrag(false);
      this._boundSeparatorActivate = (event) => this._onSeparatorActivate(event);
      document.addEventListener("dragstart", this._boundDragStart, true);
      document.addEventListener("drag", this._boundDrag, true);
      document.addEventListener("dragend", this._boundDragEnd, true);
      document.addEventListener("click", this._boundSeparatorActivate, true);
      document.addEventListener("dblclick", this._boundSeparatorActivate, true);
      this._observer = new MutationObserver((mutations) => this._onMutations(mutations));
      if (document.body) this._observer.observe(document.body, { childList: true, subtree: true });
      this._refreshSeparators();
    }
    onUnload() {
      if (this._settingsCommand) {
        this._settingsCommand.remove();
        this._settingsCommand = null;
      }
      if (this._observer) {
        this._observer.disconnect();
        this._observer = null;
      }
      if (this._panelResizeObserver) {
        this._panelResizeObserver.disconnect();
        this._panelResizeObserver = null;
      }
      if (this._appearanceObserver) {
        this._appearanceObserver.disconnect();
        this._appearanceObserver = null;
      }
      if (this._appearanceRaf) {
        cancelAnimationFrame(this._appearanceRaf);
        this._appearanceRaf = null;
      }
      if (this._refreshTimer) {
        clearTimeout(this._refreshTimer);
        this._refreshTimer = null;
      }
      for (const id of this._handlerIds) {
        try {
          this.events.off(id);
        } catch {
        }
      }
      this._handlerIds = [];
      for (const timer of this._separatorSaveTimers.values()) clearTimeout(timer);
      this._separatorSaveTimers.clear();
      this._pendingSeparatorStyles.clear();
      this._pendingCollapsedSeparatorStyles.clear();
      if (this._boundDragStart) document.removeEventListener("dragstart", this._boundDragStart, true);
      if (this._boundDrag) document.removeEventListener("drag", this._boundDrag, true);
      if (this._boundDragEnd) document.removeEventListener("dragend", this._boundDragEnd, true);
      if (this._boundSeparatorActivate) {
        document.removeEventListener("click", this._boundSeparatorActivate, true);
        document.removeEventListener("dblclick", this._boundSeparatorActivate, true);
      }
      this._boundDragStart = null;
      this._boundDrag = null;
      this._boundDragEnd = null;
      this._boundSeparatorActivate = null;
      this._finishDrag(false);
      if (this._boundReposition) {
        window.removeEventListener("scroll", this._boundReposition, true);
        window.removeEventListener("resize", this._boundReposition);
        this._boundReposition = null;
      }
      if (this._activeOverlayPositionRaf) {
        cancelAnimationFrame(this._activeOverlayPositionRaf);
        this._activeOverlayPositionRaf = null;
      }
      this._hideHoverActionOverlay();
      this._hideActiveActionOverlay();
      document.querySelectorAll(`[${MARK_ATTR}]`).forEach((node) => node.removeAttribute(MARK_ATTR));
      document.querySelectorAll(`.plg-sidebar-seperators-poof, .plg-sidebar-seperators-hold, .${ACTION_BUTTON_CLASS}, .${ACTION_OVERLAY_CLASS}`).forEach((node) => node.remove());
      const style = document.getElementById(STYLE_ID2);
      if (style) style.remove();
      this._panelEl = null;
    }
    async _addSeparator() {
      let collection = null;
      try {
        collection = await this.data.createCollection();
      } catch {
        collection = null;
      }
      if (!collection) {
        this._toast("Separator was not created.");
        return;
      }
      const conf = collection.getConfiguration ? collection.getConfiguration() : null;
      if (!conf) {
        this._toast("Separator was created, but could not be configured.");
        return;
      }
      conf.name = SEPARATOR_COLLECTION_NAME;
      conf.icon = "layout-list";
      conf.description = "Sidebar separator created by Sidebar Seperators.";
      conf.show_cmdpal_items = false;
      conf.show_sidebar_items = false;
      conf.home = false;
      conf.custom = {
        ...conf.custom || {},
        [PLUGIN_KEY]: {
          isSeparator: true,
          version: 1,
          createdAt: (/* @__PURE__ */ new Date()).toISOString(),
          style: this._normalizeStyle(this._defaultStyle),
          collapsedStyle: this._normalizeStyle(this._defaultStyle)
        }
      };
      try {
        await collection.saveConfiguration(conf);
        const guid = collection.getGuid();
        this._separators.set(collection.getGuid(), {
          collection,
          guid,
          name: conf.name,
          presetId: null,
          style: this._normalizeStyle(this._defaultStyle),
          collapsedStyle: this._normalizeStyle(this._defaultStyle)
        });
        this._activeOverrideGuid = guid;
        this._writeRuntimeStyle();
        this._markSidebarRows();
        this._scheduleRefresh();
        this._renderPanel();
        this._toast("Separator added.");
      } catch {
        this._toast("Separator was created, but settings were not saved.");
      }
    }
    async _openPanel() {
      if (this._panelEl && document.contains(this._panelEl)) return;
      const active = this.ui.getActivePanel && this.ui.getActivePanel();
      if (active) {
        active.navigateToCustomType(PANEL_TYPE);
        return;
      }
      const panel2 = await this.ui.createPanel();
      if (panel2) panel2.navigateToCustomType(PANEL_TYPE);
    }
    _renderPanel() {
      if (!this._panelEl) return;
      this._refreshThemeColors();
      const editingPreset = this._editingPresetId ? this._getPreset(this._editingPresetId) : null;
      if (this._editingPresetId && !editingPreset) this._editingPresetId = null;
      if (editingPreset) {
        this._panelEl.replaceChildren(panel({ pluginClass: PANEL_CLASS }, this._presetEditorBody(editingPreset)));
        this._markSidebarRows();
        return;
      }
      const selected = this._activeOverrideGuid ? this._separators.get(this._activeOverrideGuid) || null : null;
      const activeStyle = selected && selected.style ? selected.style : this._defaultStyle;
      const body = [
        pluginHeaderFromConfig(this.getConfiguration(), { version: PLUGIN_VERSION }),
        h(
          "div",
          { class: `${PANEL_CLASS}__top-actions` },
          h("button", { type: "button", class: `${PANEL_CLASS}__primary`, onClick: /* @__PURE__ */ __name(() => this._addSeparator(), "onClick") }, "Add New Seperator"),
          this._renderPresetChips()
        ),
        this._sidebarPreview(activeStyle, selected)
      ];
      if (!selected) {
        body.push(h(
          "div",
          { class: `${PANEL_CLASS}__empty-state` },
          h("p", { class: `${PANEL_CLASS}__helper` }, "Select an existing sidebar seperator's pencil icon while this panel is open to edit it, or use Add New Seperator above.")
        ));
      } else {
        body.push(this._renderDesignSection(selected));
        body.push(this._renderColorSection(activeStyle, selected));
      }
      this._panelEl.replaceChildren(panel({ pluginClass: PANEL_CLASS }, body));
      this._markSidebarRows();
    }
    /** @param {boolean=} force */
    _refreshThemeColors(force = false) {
      const now = Date.now();
      if (!force && this._themeColors.length && now - this._themeColorsReadAt < 1500) return;
      const roots = [
        this._panelEl,
        document.querySelector(".sidebar--icons"),
        document.querySelector(".sidebar")
      ];
      const colors = collectRenderedThemeColors({ roots });
      this._themeColorsReadAt = now;
      this._themeColors = colors.length ? colors : THEME_COLORS.map((item) => ({
        ...item,
        resolved: item.css,
        raw: item.css,
        source: item.value.replace(/^var:/, "")
      }));
    }
    /**
     * @param {SeparatorEntry} selected
     */
    _renderDesignSection(selected) {
      const expandedStyle = selected.style ? selected.style : this._defaultStyle;
      const collapsedStyle = selected.collapsedStyle ? selected.collapsedStyle : expandedStyle;
      return h(
        "section",
        { class: "tps-section" },
        h(
          "div",
          { class: `${PANEL_CLASS}__design-columns` },
          h(
            "div",
            { class: `${PANEL_CLASS}__design-column` },
            h("div", { class: `${PANEL_CLASS}__state-title` }, "Expanded"),
            this._styleEditor(expandedStyle, (next, render) => this._setActiveStyle(next, render), `sep-expanded-${selected.guid}`, () => this._activeStyleForEdit(expandedStyle))
          ),
          h(
            "div",
            { class: `${PANEL_CLASS}__design-column` },
            h("div", { class: `${PANEL_CLASS}__state-title` }, "Collapsed"),
            this._styleEditor(collapsedStyle, (next, render) => this._setActiveCollapsedStyle(next, render), `sep-collapsed-${selected.guid}`, () => this._activeCollapsedStyleForEdit(collapsedStyle))
          )
        )
      );
    }
    /**
     * @param {SeparatorStyle} style
     * @param {SeparatorEntry} selected
     */
    _renderColorSection(style, selected) {
      return h(
        "section",
        { class: "tps-section" },
        this._colorPicker(style, (next, render) => this._setActiveColorStyle(next, render), `sep-color-${selected.guid}`)
      );
    }
    /**
     * @param {SeparatorStyle} style
     * @param {SeparatorEntry | null} selected
     */
    _sidebarPreview(style, selected) {
      const line = this._lineElement(`${PANEL_CLASS}__line`, style);
      line.setAttribute("data-plg-ss-live-line", "1");
      const root = h(
        "div",
        { class: `${PANEL_CLASS}__preview` },
        h("div", { class: `${PANEL_CLASS}__preview-rail` }, line)
      );
      const bg = this._sidebarBgColor();
      if (bg) root.style.background = bg;
      this._applyStyleVars(root, style);
      return root;
    }
    /** Exact background color of the live sidebar (so the preview matches the theme). */
    _sidebarBgColor() {
      for (const sel of [".sidebar--icons", ".sidebar", ".sidebar-container", ".sidebar-panel"]) {
        try {
          const el = document.querySelector(sel);
          if (!el) continue;
          const bg = getComputedStyle(el).backgroundColor;
          if (bg && bg !== "rgba(0, 0, 0, 0)" && bg !== "transparent") return bg;
        } catch {
        }
      }
      try {
        return getComputedStyle(document.documentElement).getPropertyValue("--panel-bg-color").trim();
      } catch {
      }
      return "";
    }
    /**
     * @param {SeparatorStyle} style
     * @param {(next: SeparatorStyle, render?: boolean) => void} onChange
     * @param {string} scope
     * @param {() => SeparatorStyle=} getCurrent
     */
    _styleEditor(style, onChange, scope, getCurrent) {
      const current = /* @__PURE__ */ __name(() => getCurrent ? getCurrent() : this._activeStyleForEdit(style), "current");
      return h(
        "div",
        { class: `${PANEL_CLASS}__editor` },
        h(
          "div",
          { class: `${PANEL_CLASS}__field` },
          h("span", { class: `${PANEL_CLASS}__field-label` }, "Border"),
          this._segmented(BORDER_STYLES, style.borderStyle, (value) => {
            onChange(this._normalizeStyle({ ...current(), borderStyle: value }), true);
          }, "border")
        ),
        h(
          "div",
          { class: `${PANEL_CLASS}__field` },
          h("span", { class: `${PANEL_CLASS}__field-label` }, "Align"),
          this._segmented(ALIGNMENTS, style.alignment, (value) => {
            onChange(this._normalizeStyle({ ...current(), alignment: value }), true);
          }, "align")
        ),
        style.borderStyle === "gradient" ? this._sliderField("Gradient", style.gradientPct, 5, 95, "%", (value) => onChange(this._normalizeStyle({ ...current(), gradientPct: value }))) : null,
        this._numberField("Thickness", style.thicknessPx, 0.5, 8, "px", (value) => onChange(this._normalizeStyle({ ...current(), thicknessPx: value }), false), 0.5),
        style.borderStyle === "double" ? this._numberField("Double gap", style.doubleGapPx, 0.5, 8, "px", (value) => onChange(this._normalizeStyle({ ...current(), doubleGapPx: value }), false), 0.5) : null,
        this._numberField("Width", style.widthPct, 10, 100, "%", (value) => onChange(this._normalizeStyle({ ...current(), widthPct: value }))),
        this._numberField("Opacity", style.opacityPct, 10, 100, "%", (value) => onChange(this._normalizeStyle({ ...current(), opacityPct: value }))),
        this._numberField("Side inset", style.insetPx, 0, 64, "px", (value) => onChange(this._normalizeStyle({ ...current(), insetPx: value }))),
        this._numberField("Row height", style.heightPx, 0, 42, "px", (value) => onChange(this._normalizeStyle({ ...current(), heightPx: value }))),
        this._numberField("Y offset", style.offsetYPx, -16, 16, "px", (value) => onChange(this._normalizeStyle({ ...current(), offsetYPx: value })))
      );
    }
    /**
     * @param {string} label
     * @param {number} value
     * @param {number} min
     * @param {number} max
     * @param {string} unit
     * @param {(value: number) => void} onChange
     */
    _sliderField(label, value, min, max, unit, onChange) {
      return h(
        "label",
        { class: `${PANEL_CLASS}__slider` },
        h("span", { class: `${PANEL_CLASS}__field-label` }, label),
        h("input", {
          type: "range",
          min,
          max,
          step: 1,
          value: String(value),
          onInput: /* @__PURE__ */ __name((event) => {
            const target = (
              /** @type {HTMLInputElement} */
              event.target
            );
            const next = this._clampInt(target.value, min, max, value);
            const valueEl = target.parentElement?.querySelector(`.${PANEL_CLASS}__slider-value`);
            if (valueEl) valueEl.textContent = `${next}${unit}`;
            onChange(next);
          }, "onInput")
        }),
        h("span", { class: `${PANEL_CLASS}__slider-value` }, `${value}${unit}`)
      );
    }
    /**
     * Icon-based segmented control — tinted via currentColor (muted → accent), no
     * icon-font dependency:
     *   'border' → the real line shape (`.__seg-line`), keyed by `[data-shape]`
     *   'align'  → a standard text-align glyph (`.__seg-glyph`, inline-SVG mask),
     *              keyed by `[data-align]`
     * Buttons carry `data-cf-tip` so the shared instant tooltip labels them.
     * @param {readonly string[]} options
     * @param {string} active
     * @param {(value: string) => void} onChange
     * @param {'border' | 'align'} variant
     */
    _segmented(options, active, onChange, variant) {
      const label = /* @__PURE__ */ __name((value) => variant === "align" ? `Align ${value}` : value.charAt(0).toUpperCase() + value.slice(1), "label");
      const glyphClass = variant === "align" ? `${PANEL_CLASS}__seg-glyph` : `${PANEL_CLASS}__seg-line`;
      return h(
        "div",
        { class: `${PANEL_CLASS}__segmented ${PANEL_CLASS}__segmented--${variant}`, role: "group" },
        ...options.map((value) => h("button", {
          type: "button",
          class: `${PANEL_CLASS}__seg ${PANEL_CLASS}__seg--icon ${value === active ? "is-active" : ""}`,
          dataset: variant === "align" ? { align: value } : { shape: value },
          "data-cf-tip": label(value),
          "aria-label": label(value),
          "aria-pressed": String(value === active),
          onClick: /* @__PURE__ */ __name((event) => {
            event.preventDefault();
            onChange(value);
          }, "onClick")
        }, h("span", { class: glyphClass, "aria-hidden": "true" })))
      );
    }
    /**
     * @param {string} label
     * @param {number} value
     * @param {number} min
     * @param {number} max
     * @param {string} unit
     * @param {(value: number) => void} onChange
     * @param {number=} step
     */
    _numberField(label, value, min, max, unit, onChange, step = 1) {
      const parseDraft = /* @__PURE__ */ __name((raw) => {
        const trimmed = raw.trim();
        if (trimmed === "" || trimmed === "-" || trimmed === "+") return null;
        const n = Number(trimmed);
        return Number.isFinite(n) ? n : null;
      }, "parseDraft");
      const commit = /* @__PURE__ */ __name(() => {
        const next = this._clampNumber(input.value, min, max, value, step);
        input.value = this._formatNumber(next);
        onChange(next);
      }, "commit");
      const input = h("input", {
        type: "number",
        min,
        max,
        step,
        value: this._formatNumber(value),
        onInput: /* @__PURE__ */ __name((event) => {
          const target = (
            /** @type {HTMLInputElement} */
            event.target
          );
          const next = parseDraft(target.value);
          if (next === null || next < min || next > max) return;
          onChange(this._clampNumber(next, min, max, value, step));
        }, "onInput"),
        onChange: commit,
        onKeyDown: /* @__PURE__ */ __name((event) => {
          if (event.key === "Enter") {
            event.preventDefault();
            commit();
            input.blur();
          } else if (event.key === "ArrowUp" || event.key === "ArrowDown") {
            event.preventDefault();
            stepValue((event.key === "ArrowUp" ? 1 : -1) * step * (event.shiftKey ? 10 : 1));
          }
        }, "onKeyDown")
      });
      const stepValue = /* @__PURE__ */ __name((delta) => {
        const draft = parseDraft(input.value);
        const base = draft === null ? value : draft;
        const next = this._clampNumber(base + delta, min, max, value, step);
        input.value = this._formatNumber(next);
        onChange(next);
      }, "stepValue");
      return h(
        "div",
        { class: `${PANEL_CLASS}__number` },
        h("span", { class: `${PANEL_CLASS}__field-label` }, label),
        h(
          "span",
          { class: `${PANEL_CLASS}__number-control` },
          h("button", {
            type: "button",
            "aria-label": `Decrease ${label}`,
            onClick: /* @__PURE__ */ __name((event) => {
              event.preventDefault();
              stepValue(-step);
            }, "onClick")
          }, "-"),
          input,
          h("button", {
            type: "button",
            "aria-label": `Increase ${label}`,
            onClick: /* @__PURE__ */ __name((event) => {
              event.preventDefault();
              stepValue(step);
            }, "onClick")
          }, "+"),
          h("span", { class: `${PANEL_CLASS}__number-unit` }, unit)
        )
      );
    }
    /**
     * @param {SeparatorStyle} style
     * @param {(next: SeparatorStyle, render?: boolean) => void} onChange
     * @param {string} scope
     */
    _colorPicker(style, onChange, scope) {
      const field = colorField({
        value: this._colorFieldValueFor(style),
        allowNone: false,
        featured: [
          { label: "Accent", token: "--color-primary-500" },
          { label: "Sidebar dividers", token: "--sidebar-divider-color" }
        ],
        customSwatches: this._customSwatches,
        onCustomSwatchesChange: /* @__PURE__ */ __name((list) => this._saveCustomSwatches(list), "onCustomSwatchesChange"),
        onPick: /* @__PURE__ */ __name((r) => {
          if (!r) return;
          const base = this._activeStyleForEdit(style);
          let colorVal;
          if (r.type === "theme") colorVal = `theme-var:${r.token}`;
          else if (r.type === "tw") colorVal = r.invert ? `twflip:${r.family}:${r.shadeIdx}` : `custom:${r.hex}`;
          else colorVal = `custom:${r.hex}`;
          const patch = { ...base, color: colorVal };
          if (r.hex) patch.customColor = r.hex;
          onChange(this._normalizeStyle(patch), false);
        }, "onPick")
      });
      return h("div", { class: `${PANEL_CLASS}__colors`, dataset: { scope } }, field);
    }
    _customSwatchesKey() {
      return `sidebar-seperators/${this.getWorkspaceGuid()}/custom-swatches`;
    }
    /** @returns {string[]} */
    _loadCustomSwatches() {
      try {
        const raw = JSON.parse(localStorage.getItem(this._customSwatchesKey()) || "[]");
        return Array.isArray(raw) ? raw.filter((s) => this._isHex(s)).map((s) => s.toLowerCase()).slice(0, 44) : [];
      } catch {
        return [];
      }
    }
    /** @param {string[]} list */
    _saveCustomSwatches(list) {
      this._customSwatches = Array.isArray(list) ? list.filter((s) => this._isHex(s)).slice(0, 44) : [];
      try {
        localStorage.setItem(this._customSwatchesKey(), JSON.stringify(this._customSwatches));
      } catch {
      }
    }
    /** Re-render runtime style when the user switches light/dark (for `twflip:`). */
    _watchAppearance() {
      this._lastDark = this._isDarkAppearance();
      const check = /* @__PURE__ */ __name(() => {
        const dark = this._isDarkAppearance();
        if (dark === this._lastDark) return;
        this._lastDark = dark;
        this._writeRuntimeStyle();
        const bg = this._sidebarBgColor();
        if (this._panelEl && bg) this._panelEl.querySelectorAll(`.${PANEL_CLASS}__preview`).forEach((n) => {
          n.style.background = bg;
        });
      }, "check");
      try {
        this._appearanceObserver = new MutationObserver(() => {
          if (this._appearanceRaf) return;
          this._appearanceRaf = requestAnimationFrame(() => {
            this._appearanceRaf = null;
            check();
          });
        });
        const opts = { attributes: true, attributeFilter: ["class", "style", "data-theme", "data-appearance"] };
        this._appearanceObserver.observe(document.documentElement, opts);
        if (document.body) this._appearanceObserver.observe(document.body, opts);
      } catch {
      }
    }
    /** @returns {boolean} true when Thymer's current appearance is dark */
    _isDarkAppearance() {
      for (const el of [document.body, document.documentElement]) {
        try {
          const m = String(getComputedStyle(el).backgroundColor || "").match(/rgba?\(([^)]+)\)/i);
          if (m) {
            const p = m[1].split(",").map((s) => parseFloat(s));
            if (p[3] === void 0 || p[3] > 0) return (0.299 * p[0] + 0.587 * p[1] + 0.114 * p[2]) / 255 < 0.5;
          }
        } catch {
        }
      }
      try {
        return !!(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);
      } catch {
      }
      return true;
    }
    /**
     * Map a stored separator color value onto a colorField value.
     * @param {SeparatorStyle} style
     * @returns {{type:'theme',token:string} | {type:'hex',hex:string} | null}
     */
    _colorFieldValueFor(style) {
      const c = style.color;
      if (c === "theme:accent") return { type: "theme", token: "--logo-color" };
      if (c === SIDEBAR_DIVIDER_VAR_VALUE) return { type: "theme", token: "--sidebar-divider-color" };
      const flip = typeof c === "string" && c.match(/^twflip:([a-z]+):(\d+)$/i);
      if (flip && TAILWIND[flip[1]]) return { type: "tw", family: flip[1], shadeIdx: Number(flip[2]), invert: true };
      if (typeof c === "string" && c.startsWith("theme-var:")) return { type: "theme", token: c.slice("theme-var:".length) };
      if (typeof c === "string" && c.startsWith("var:")) return { type: "theme", token: c.slice("var:".length) };
      const hex = this._resolveHexColor(style);
      return /^#[0-9a-f]{6}$/i.test(hex) ? { type: "hex", hex } : null;
    }
    /**
     * @param {SeparatorStyle} next
     * @param {boolean=} render
     */
    _setActiveStyle(next, render = false) {
      const selected = this._activeOverrideGuid ? this._separators.get(this._activeOverrideGuid) || null : null;
      if (selected) {
        void this._setSeparatorStyle(selected.guid, next, render);
      }
    }
    /**
     * @param {SeparatorStyle} next
     * @param {boolean=} render
     */
    _setActiveCollapsedStyle(next, render = false) {
      const selected = this._activeOverrideGuid ? this._separators.get(this._activeOverrideGuid) || null : null;
      if (selected) {
        void this._setSeparatorCollapsedStyle(selected.guid, next, render);
      }
    }
    /**
     * Shared color changes apply to both expanded and collapsed states.
     * @param {SeparatorStyle} next
     * @param {boolean=} render
     */
    _setActiveColorStyle(next, render = false) {
      const selected = this._activeOverrideGuid ? this._separators.get(this._activeOverrideGuid) || null : null;
      if (!selected) return;
      if (!this._applyingPreset) selected.presetId = null;
      const colorPatch = { color: next.color, customColor: next.customColor };
      const expanded = this._normalizeStyle({ ...selected.style || this._defaultStyle, ...colorPatch });
      const collapsedBase = selected.collapsedStyle || selected.style || this._defaultStyle;
      const collapsed = this._normalizeStyle({ ...collapsedBase, ...colorPatch });
      selected.style = expanded;
      selected.collapsedStyle = collapsed;
      this._separators.set(selected.guid, selected);
      this._pendingSeparatorStyles.set(selected.guid, expanded);
      this._pendingCollapsedSeparatorStyles.set(selected.guid, collapsed);
      this._writeRuntimeStyle();
      this._markSidebarRows();
      this._updatePanelPreview(expanded);
      if (render) this._renderPanel();
      this._scheduleSeparatorSave(selected.guid);
    }
    /**
     * @param {SeparatorStyle} fallback
     */
    _activeStyleForEdit(fallback) {
      const selected = this._activeOverrideGuid ? this._separators.get(this._activeOverrideGuid) || null : null;
      return selected && selected.style ? selected.style : fallback;
    }
    /**
     * @param {SeparatorStyle} fallback
     */
    _activeCollapsedStyleForEdit(fallback) {
      const selected = this._activeOverrideGuid ? this._separators.get(this._activeOverrideGuid) || null : null;
      return selected && selected.collapsedStyle ? selected.collapsedStyle : fallback;
    }
    /**
     * @param {string} className
     * @param {SeparatorStyle} style
     */
    _lineElement(className, style) {
      const line = h("span", {
        class: className,
        "data-plg-sidebar-seperators-style": style.borderStyle,
        "aria-hidden": "true"
      });
      this._applyStyleVars(line, style);
      return line;
    }
    /**
     * @param {string} guid
     * @param {Partial<SeparatorStyle> | null} style
     * @param {boolean=} render
     */
    async _setSeparatorStyle(guid, style, render = false) {
      const entry = this._separators.get(guid);
      if (!entry) return;
      if (!this._applyingPreset) entry.presetId = null;
      const normalized = style ? this._normalizeStyle(style) : null;
      entry.style = normalized;
      this._separators.set(guid, entry);
      this._pendingSeparatorStyles.set(guid, normalized);
      this._writeRuntimeStyle();
      this._markSidebarRows();
      if (normalized) this._updatePanelPreview(normalized);
      if (render) this._renderPanel();
      this._scheduleSeparatorSave(guid);
    }
    /**
     * @param {string} guid
     * @param {Partial<SeparatorStyle> | null} style
     * @param {boolean=} render
     */
    async _setSeparatorCollapsedStyle(guid, style, render = false) {
      const entry = this._separators.get(guid);
      if (!entry) return;
      if (!this._applyingPreset) entry.presetId = null;
      const normalized = style ? this._normalizeStyle(style) : null;
      entry.collapsedStyle = normalized;
      this._separators.set(guid, entry);
      this._pendingCollapsedSeparatorStyles.set(guid, normalized);
      this._writeRuntimeStyle();
      this._markSidebarRows();
      if (normalized) this._updatePanelPreview(normalized);
      if (render) this._renderPanel();
      this._scheduleSeparatorSave(guid);
    }
    /**
     * @param {string} guid
     */
    _scheduleSeparatorSave(guid) {
      const existing = this._separatorSaveTimers.get(guid);
      if (existing) clearTimeout(existing);
      const timer = setTimeout(() => {
        this._separatorSaveTimers.delete(guid);
        void this._saveSeparatorStyleNow(guid);
      }, 800);
      this._separatorSaveTimers.set(guid, timer);
    }
    /**
     * @param {string} guid
     */
    async _saveSeparatorStyleNow(guid) {
      const entry = this._separators.get(guid);
      if (!entry) return;
      const savedStyle = entry.style ? this._normalizeStyle(entry.style) : null;
      const savedCollapsedStyle = entry.collapsedStyle ? this._normalizeStyle(entry.collapsedStyle) : null;
      try {
        const conf = entry.collection.getConfiguration();
        const custom = conf.custom && typeof conf.custom === "object" ? conf.custom : {};
        const marker = this._readMarker(conf) || { isSeparator: true, version: 1 };
        const nextMarker = { ...marker };
        if (savedStyle) nextMarker.style = savedStyle;
        else delete nextMarker.style;
        if (savedCollapsedStyle) nextMarker.collapsedStyle = savedCollapsedStyle;
        else delete nextMarker.collapsedStyle;
        if (entry.presetId) nextMarker.presetId = entry.presetId;
        else delete nextMarker.presetId;
        await entry.collection.saveConfiguration({
          ...conf,
          name: SEPARATOR_COLLECTION_NAME,
          custom: {
            ...custom,
            [PLUGIN_KEY]: nextMarker
          }
        });
        if (JSON.stringify(this._pendingSeparatorStyles.get(guid) || null) === JSON.stringify(savedStyle)) {
          this._pendingSeparatorStyles.delete(guid);
        }
        if (JSON.stringify(this._pendingCollapsedSeparatorStyles.get(guid) || null) === JSON.stringify(savedCollapsedStyle)) {
          this._pendingCollapsedSeparatorStyles.delete(guid);
        }
      } catch {
        this._toast("Could not save separator style.");
      }
    }
    /**
     * @param {PluginConfiguration} conf
     * @returns {SeparatorMarker | null}
     */
    _readMarker(conf) {
      const custom = conf && conf.custom && typeof conf.custom === "object" ? conf.custom : {};
      const marker = custom[PLUGIN_KEY];
      return marker && marker.isSeparator === true ? marker : null;
    }
    /* ── Presets ─────────────────────────────────────────────────────────── */
    _presetsKey() {
      let ws = "";
      try {
        ws = this.getWorkspaceGuid ? this.getWorkspaceGuid() || "" : "";
      } catch {
        ws = "";
      }
      return `plg-sidebar-seperators-presets:${ws || "default"}`;
    }
    /** @returns {SeparatorPreset[]} */
    _loadPresets() {
      let raw = null;
      try {
        const stored = localStorage.getItem(this._presetsKey());
        if (stored) raw = JSON.parse(stored);
      } catch {
      }
      if (!raw) {
        try {
          const conf = this.getConfiguration ? this.getConfiguration() : null;
          const custom = conf && conf.custom && typeof conf.custom === "object" ? conf.custom : null;
          if (custom && Array.isArray(custom.sidebarSeperatorPresets)) raw = custom.sidebarSeperatorPresets;
        } catch {
        }
      }
      return Array.isArray(raw) ? (
        /** @type {SeparatorPreset[]} */
        raw.map((p) => this._normalizePreset(p)).filter(Boolean)
      ) : [];
    }
    /** @param {any} raw @returns {SeparatorPreset | null} */
    _normalizePreset(raw) {
      if (!raw || typeof raw !== "object") return null;
      const id = typeof raw.id === "string" && raw.id ? raw.id : this._makePresetId();
      const name = typeof raw.name === "string" && raw.name.trim() ? raw.name.trim() : "Preset";
      const style = this._normalizeStyle(raw.style);
      const collapsedStyle = this._normalizeStyle(raw.collapsedStyle || raw.style);
      return { id, name, style, collapsedStyle };
    }
    _makePresetId() {
      return `p${Date.now().toString(36)}${Math.floor(Math.random() * 1e6).toString(36)}`;
    }
    /** @param {string} id @returns {SeparatorPreset | null} */
    _getPreset(id) {
      return this._presets.find((p) => p.id === id) || null;
    }
    /**
     * Persist presets to workspace-keyed localStorage ONLY. We deliberately do NOT
     * write them to the plugin config here: `this.saveConfiguration` reloads the
     * whole plugin, which orphans the open settings panel and makes preset actions
     * only appear after a manual refresh. localStorage survives reopens/restarts;
     * cross-device sync is intentionally deferred to avoid that reload.
     */
    _savePresets() {
      try {
        localStorage.setItem(this._presetsKey(), JSON.stringify(this._presets));
      } catch {
      }
    }
    /** "Set preset" — snapshot the selected separator's current look (or defaults) as a new preset, then open it for editing. */
    _startNewPreset() {
      const selected = this._activeOverrideGuid ? this._separators.get(this._activeOverrideGuid) || null : null;
      const style = this._normalizeStyle(selected && selected.style ? selected.style : this._defaultStyle);
      const collapsedStyle = this._normalizeStyle(selected && selected.collapsedStyle ? selected.collapsedStyle : style);
      const preset = { id: this._makePresetId(), name: `Preset ${this._presets.length + 1}`, style, collapsedStyle };
      this._presets.push(preset);
      this._savePresets();
      if (selected) this._bindSeparatorToPreset(selected.guid, preset);
      this._editingPresetId = preset.id;
      this._renderPanel();
    }
    /** @param {string} presetId */
    _applyPreset(presetId) {
      const preset = this._getPreset(presetId);
      if (!preset) return;
      const selected = this._activeOverrideGuid ? this._separators.get(this._activeOverrideGuid) || null : null;
      if (!selected) {
        this._toast("Select a separator first, then apply a preset.");
        return;
      }
      this._bindSeparatorToPreset(selected.guid, preset);
      this._renderPanel();
    }
    /** Copy a preset's look onto a separator and bind it (keeps the presetId link). @param {string} guid @param {SeparatorPreset} preset */
    _bindSeparatorToPreset(guid, preset) {
      const entry = this._separators.get(guid);
      if (!entry) return;
      this._applyingPreset = true;
      try {
        void this._setSeparatorStyle(guid, { ...preset.style }, false);
        void this._setSeparatorCollapsedStyle(guid, { ...preset.collapsedStyle }, false);
      } finally {
        this._applyingPreset = false;
      }
      entry.presetId = preset.id;
      this._separators.set(guid, entry);
      this._scheduleSeparatorSave(guid);
    }
    /** @param {string} presetId */
    _editPreset(presetId) {
      if (!this._getPreset(presetId)) return;
      this._editingPresetId = presetId;
      this._renderPanel();
    }
    _exitPresetEditor() {
      this._editingPresetId = null;
      this._savePresets();
      this._renderPanel();
    }
    /** @param {string} presetId */
    _deletePreset(presetId) {
      this._presets = this._presets.filter((p) => p.id !== presetId);
      for (const entry of this._separators.values()) {
        if (entry.presetId === presetId) {
          entry.presetId = null;
          this._scheduleSeparatorSave(entry.guid);
        }
      }
      if (this._editingPresetId === presetId) this._editingPresetId = null;
      this._savePresets();
      this._renderPanel();
    }
    /** @param {string} presetId @param {string} name */
    _renamePreset(presetId, name) {
      const preset = this._getPreset(presetId);
      if (!preset) return;
      preset.name = (name || "").trim() || preset.name;
      this._savePresets();
    }
    /** @param {SeparatorStyle} next @param {boolean=} render */
    _setPresetStyle(next, render = false) {
      const preset = this._editingPresetId ? this._getPreset(this._editingPresetId) : null;
      if (!preset) return;
      preset.style = this._normalizeStyle(next);
      this._propagatePreset(preset);
      this._updatePanelPreview(preset.style);
      this._savePresets();
      if (render) this._renderPanel();
    }
    /** @param {SeparatorStyle} next @param {boolean=} render */
    _setPresetCollapsedStyle(next, render = false) {
      const preset = this._editingPresetId ? this._getPreset(this._editingPresetId) : null;
      if (!preset) return;
      preset.collapsedStyle = this._normalizeStyle(next);
      this._propagatePreset(preset);
      this._savePresets();
      if (render) this._renderPanel();
    }
    /** Color applies to both states of a preset. @param {SeparatorStyle} next @param {boolean=} render */
    _setPresetColor(next, render = false) {
      const preset = this._editingPresetId ? this._getPreset(this._editingPresetId) : null;
      if (!preset) return;
      const colorPatch = { color: next.color, customColor: next.customColor };
      preset.style = this._normalizeStyle({ ...preset.style, ...colorPatch });
      preset.collapsedStyle = this._normalizeStyle({ ...preset.collapsedStyle, ...colorPatch });
      this._propagatePreset(preset);
      this._updatePanelPreview(preset.style);
      this._savePresets();
      if (render) this._renderPanel();
    }
    /** Push a preset's look onto every separator bound to it. @param {SeparatorPreset} preset */
    _propagatePreset(preset) {
      this._applyingPreset = true;
      try {
        for (const entry of this._separators.values()) {
          if (entry.presetId !== preset.id) continue;
          entry.style = this._normalizeStyle(preset.style);
          entry.collapsedStyle = this._normalizeStyle(preset.collapsedStyle);
          this._pendingSeparatorStyles.set(entry.guid, entry.style);
          this._pendingCollapsedSeparatorStyles.set(entry.guid, entry.collapsedStyle);
          this._scheduleSeparatorSave(entry.guid);
        }
      } finally {
        this._applyingPreset = false;
      }
      this._writeRuntimeStyle();
      this._markSidebarRows();
    }
    /** Chips (name + edit + delete) plus the "Set preset" button, shown right of Add. */
    _renderPresetChips() {
      const selected = this._activeOverrideGuid ? this._separators.get(this._activeOverrideGuid) || null : null;
      const wrap = h("div", { class: `${PANEL_CLASS}__presets` });
      for (const preset of this._presets) {
        const isSel = !!selected && selected.presetId === preset.id;
        wrap.appendChild(h(
          "div",
          { class: `${PANEL_CLASS}__preset ${isSel ? "is-active" : ""}` },
          h("button", {
            type: "button",
            class: `${PANEL_CLASS}__preset-apply`,
            "data-cf-tip": isSel ? "Applied to selected separator" : "Apply to selected separator",
            "aria-pressed": String(isSel),
            onClick: /* @__PURE__ */ __name(() => this._applyPreset(preset.id), "onClick")
          }, preset.name),
          h("button", {
            type: "button",
            class: `${PANEL_CLASS}__preset-icon`,
            "data-cf-tip": "Edit preset (updates all separators using it)",
            "aria-label": `Edit ${preset.name}`,
            onClick: /* @__PURE__ */ __name(() => this._editPreset(preset.id), "onClick")
          }, "\u270E"),
          h("button", {
            type: "button",
            class: `${PANEL_CLASS}__preset-icon ${PANEL_CLASS}__preset-icon--danger`,
            "data-cf-tip": "Delete preset (unbinds its separators)",
            "aria-label": `Delete ${preset.name}`,
            onClick: /* @__PURE__ */ __name(() => this._deletePreset(preset.id), "onClick")
          }, "\u2715")
        ));
      }
      wrap.appendChild(h("button", {
        type: "button",
        class: `${PANEL_CLASS}__preset-add`,
        "data-cf-tip": "Save the current look as a reusable preset",
        onClick: /* @__PURE__ */ __name(() => this._startNewPreset(), "onClick")
      }, "Set preset"));
      return wrap;
    }
    /** Body for the "editing a preset" view. @param {SeparatorPreset} preset @returns {HTMLElement[]} */
    _presetEditorBody(preset) {
      const boundCount = [...this._separators.values()].filter((en) => en.presetId === preset.id).length;
      const nameInput = h("input", {
        type: "text",
        class: `${PANEL_CLASS}__preset-name-input`,
        value: preset.name,
        "aria-label": "Preset name",
        onInput: /* @__PURE__ */ __name((e) => this._renamePreset(
          preset.id,
          /** @type {HTMLInputElement} */
          e.target.value
        ), "onInput")
      });
      return [
        pluginHeaderFromConfig(this.getConfiguration(), { version: PLUGIN_VERSION }),
        h(
          "div",
          { class: `${PANEL_CLASS}__preset-editbar` },
          h("button", {
            type: "button",
            class: `${PANEL_CLASS}__back-btn`,
            "aria-label": "Back to presets",
            onClick: /* @__PURE__ */ __name(() => this._exitPresetEditor(), "onClick")
          }, h("span", { class: "ti ti-arrow-left", "aria-hidden": "true" }), "Back"),
          h("span", { class: `${PANEL_CLASS}__preset-editbar-label` }, "Editing preset"),
          nameInput,
          h("button", {
            type: "button",
            class: `${PANEL_CLASS}__preset-save-btn`,
            onClick: /* @__PURE__ */ __name(() => this._exitPresetEditor(), "onClick")
          }, "Save"),
          h(
            "span",
            { class: `${PANEL_CLASS}__preset-editbar-count` },
            boundCount ? `${boundCount} separator${boundCount === 1 ? "" : "s"} bound` : "Not applied to any separator yet"
          )
        ),
        this._sidebarPreview(preset.style, null),
        h(
          "section",
          { class: "tps-section" },
          h(
            "div",
            { class: `${PANEL_CLASS}__design-columns` },
            h(
              "div",
              { class: `${PANEL_CLASS}__design-column` },
              h("div", { class: `${PANEL_CLASS}__state-title` }, "Expanded"),
              this._styleEditor(preset.style, (nx, render) => this._setPresetStyle(nx, render), `preset-exp-${preset.id}`, () => (this._getPreset(preset.id) || preset).style)
            ),
            h(
              "div",
              { class: `${PANEL_CLASS}__design-column` },
              h("div", { class: `${PANEL_CLASS}__state-title` }, "Collapsed"),
              this._styleEditor(preset.collapsedStyle, (nx, render) => this._setPresetCollapsedStyle(nx, render), `preset-col-${preset.id}`, () => (this._getPreset(preset.id) || preset).collapsedStyle)
            )
          )
        ),
        h(
          "section",
          { class: "tps-section" },
          this._colorPicker(preset.style, (nx, render) => this._setPresetColor(nx, render), `preset-color-${preset.id}`)
        )
      ];
    }
    /**
     * @param {Partial<SeparatorStyle> | null | undefined} raw
     * @returns {SeparatorStyle}
     */
    _normalizeStyle(raw) {
      const src = raw && typeof raw === "object" ? raw : {};
      const borderStyle = BORDER_STYLES.includes(
        /** @type {any} */
        src.borderStyle
      ) ? String(src.borderStyle) : DEFAULT_STYLE.borderStyle;
      const alignment = ALIGNMENTS.includes(
        /** @type {any} */
        src.alignment
      ) ? String(src.alignment) : DEFAULT_STYLE.alignment;
      const color = this._normalizeColor(src.color);
      return {
        borderStyle,
        color,
        customColor: color.startsWith("custom:") ? this._hexOrDefault(color.slice("custom:".length)) : this._hexOrDefault(src.customColor),
        thicknessPx: this._clampNumber(src.thicknessPx, 0.5, 8, DEFAULT_STYLE.thicknessPx, 0.5),
        doubleGapPx: this._clampNumber(src.doubleGapPx, 0.5, 8, DEFAULT_STYLE.doubleGapPx, 0.5),
        widthPct: this._clampInt(src.widthPct, 10, 100, DEFAULT_STYLE.widthPct),
        opacityPct: this._clampInt(src.opacityPct, 10, 100, DEFAULT_STYLE.opacityPct),
        insetPx: this._clampInt(src.insetPx, 0, 64, DEFAULT_STYLE.insetPx),
        heightPx: this._clampInt(src.heightPx, 0, 42, DEFAULT_STYLE.heightPx),
        offsetYPx: this._clampInt(src.offsetYPx, -16, 16, DEFAULT_STYLE.offsetYPx),
        alignment,
        gradientPct: this._clampInt(src.gradientPct, 5, 95, DEFAULT_STYLE.gradientPct)
      };
    }
    /**
     * @param {unknown} value
     */
    _normalizeColor(value) {
      if (typeof value !== "string") return DEFAULT_STYLE.color;
      if (value === "theme:accent") return value;
      if (/^twflip:[a-z]+:\d+$/i.test(value)) return value;
      if (value.startsWith("theme-var:--")) return value;
      if (Object.prototype.hasOwnProperty.call(THEME_COLOR_ALIASES, value)) return DEFAULT_STYLE.color;
      if (value.startsWith("var:--") && THEME_COLORS.some((item) => item.value === value)) return value;
      if (value.startsWith("custom:") && /^#[0-9a-f]{6}$/i.test(value.slice(value.indexOf(":") + 1))) return value;
      if (COLOR_PALETTE_GROUPS.some((palette) => value.startsWith(`${palette.id}:`)) && /^#[0-9a-f]{6}$/i.test(value.slice(value.indexOf(":") + 1))) return value;
      return DEFAULT_STYLE.color;
    }
    /**
     * @param {unknown} value
     */
    _hexOrDefault(value) {
      return typeof value === "string" && /^#[0-9a-f]{6}$/i.test(value) ? value : DEFAULT_STYLE.customColor;
    }
    /** @param {SeparatorStyle} style */
    _resolveHexColor(style) {
      if (style.color.startsWith("custom:")) return style.color.slice("custom:".length);
      for (const palette of COLOR_PALETTE_GROUPS) {
        if (style.color.startsWith(`${palette.id}:`)) return style.color.slice(palette.id.length + 1);
      }
      return style.customColor;
    }
    /** @param {unknown} value */
    _isHex(value) {
      return typeof value === "string" && /^#[0-9a-f]{6}$/i.test(value);
    }
    /** @param {unknown} input */
    _normalizeHex(input) {
      if (typeof input !== "string") return null;
      let s = input.trim().toLowerCase();
      if (!s.startsWith("#")) s = `#${s}`;
      if (/^#[0-9a-f]{3}$/.test(s)) s = `#${s.slice(1).split("").map((c) => c + c).join("")}`;
      return /^#[0-9a-f]{6}$/.test(s) ? s : null;
    }
    /** @param {string} hex @returns {[number, number, number]} */
    _hexToRgb(hex) {
      const h2 = this._normalizeHex(hex) || "#000000";
      return [parseInt(h2.slice(1, 3), 16), parseInt(h2.slice(3, 5), 16), parseInt(h2.slice(5, 7), 16)];
    }
    /** @param {number} r @param {number} g @param {number} b */
    _rgbToHex(r, g, b) {
      const t = /* @__PURE__ */ __name((n) => Math.max(0, Math.min(255, Math.round(n))).toString(16).padStart(2, "0"), "t");
      return `#${t(r)}${t(g)}${t(b)}`;
    }
    /**
     * @param {unknown} value
     * @param {number} min
     * @param {number} max
     * @param {number} fallback
     */
    _clampInt(value, min, max, fallback) {
      const n = Number(value);
      if (!Number.isFinite(n)) return fallback;
      return Math.max(min, Math.min(max, Math.round(n)));
    }
    /**
     * @param {unknown} value
     * @param {number} min
     * @param {number} max
     * @param {number} fallback
     * @param {number=} step
     */
    _clampNumber(value, min, max, fallback, step = 1) {
      const n = Number(value);
      const base = Number.isFinite(n) ? n : fallback;
      const stepped = step > 0 ? Math.round(base / step) * step : base;
      const clamped = Math.max(min, Math.min(max, stepped));
      return Number(clamped.toFixed(3));
    }
    /** @param {number} value */
    _formatNumber(value) {
      return Number.isInteger(value) ? String(value) : String(Number(value.toFixed(3)));
    }
    /**
     * @param {SeparatorStyle} style
     */
    _resolveColor(style) {
      if (style.color === "theme:accent") {
        return "var(--logo-color, currentColor)";
      }
      if (style.color === SIDEBAR_DIVIDER_VAR_VALUE) {
        return SIDEBAR_DIVIDER_VAR_CSS;
      }
      const flip = style.color.match(/^twflip:([a-z]+):(\d+)$/i);
      if (flip && TAILWIND[flip[1]]) {
        const idx = Number(flip[2]);
        const useIdx = this._isDarkAppearance() ? TW_SHADES.length - 1 - idx : idx;
        return TAILWIND[flip[1]][Math.max(0, Math.min(TW_SHADES.length - 1, useIdx))] || style.customColor;
      }
      if (style.color.startsWith("theme-var:")) {
        const varName = style.color.slice("theme-var:".length);
        return `var(${varName}, currentColor)`;
      }
      if (style.color.startsWith("var:")) {
        const found = THEME_COLORS.find((item) => item.value === style.color);
        if (found) return found.css;
        const alias = THEME_COLOR_ALIASES[
          /** @type {keyof typeof THEME_COLOR_ALIASES} */
          style.color
        ];
        return alias || THEME_COLORS[0].css;
      }
      if (style.color.startsWith("custom:")) return style.color.slice("custom:".length);
      for (const palette of COLOR_PALETTE_GROUPS) {
        if (style.color.startsWith(`${palette.id}:`)) return style.color.slice(palette.id.length + 1);
      }
      return style.customColor;
    }
    /**
     * @param {SeparatorStyle} style
     */
    _styleVars(style) {
      const align = ALIGNMENTS.includes(
        /** @type {any} */
        style.alignment
      ) ? style.alignment : DEFAULT_STYLE.alignment;
      const centered = align === "center";
      const right = align === "right";
      const gradientPct = this._clampInt(style.gradientPct, 5, 95, DEFAULT_STYLE.gradientPct);
      const offsetY = this._clampInt(style.offsetYPx, -16, 16, DEFAULT_STYLE.offsetYPx);
      const doubleGap = this._clampNumber(style.doubleGapPx, 0.5, 8, DEFAULT_STYLE.doubleGapPx, 0.5);
      const gradient = align === "right" ? `linear-gradient(90deg, transparent 0%, var(--plg-ss-color, currentColor) ${100 - gradientPct}%, var(--plg-ss-color, currentColor) 100%)` : align === "center" ? `linear-gradient(90deg, transparent 0%, var(--plg-ss-color, currentColor) ${Math.max(0, 50 - gradientPct / 2)}%, var(--plg-ss-color, currentColor) ${Math.min(100, 50 + gradientPct / 2)}%, transparent 100%)` : `linear-gradient(90deg, var(--plg-ss-color, currentColor) 0%, var(--plg-ss-color, currentColor) ${gradientPct}%, transparent 100%)`;
      return {
        "--plg-ss-color": this._resolveColor(style),
        "--plg-ss-style": style.borderStyle,
        "--plg-ss-thickness": `${style.thicknessPx}px`,
        "--plg-ss-double-gap": `${doubleGap}px`,
        "--plg-ss-width": `${style.widthPct}%`,
        "--plg-ss-opacity": String(style.opacityPct / 100),
        "--plg-ss-inset": `${style.insetPx}px`,
        "--plg-ss-height": `${style.heightPx}px`,
        "--plg-ss-offset-y": `${offsetY}px`,
        "--plg-ss-left": centered ? "50%" : right ? "auto" : "var(--plg-ss-inset)",
        "--plg-ss-right": right ? "var(--plg-ss-inset)" : "auto",
        "--plg-ss-transform": centered ? "translate(-50%, calc(-50% + var(--plg-ss-offset-y, 0px)))" : "translateY(calc(-50% + var(--plg-ss-offset-y, 0px)))",
        "--plg-ss-hover-transform": centered ? "translate(-50%, calc(-50% + var(--plg-ss-offset-y, 0px))) scaleX(1.02)" : "translateY(calc(-50% + var(--plg-ss-offset-y, 0px))) scaleX(1.02)",
        "--plg-ss-justify": align === "left" ? "flex-start" : align === "right" ? "flex-end" : "center",
        "--plg-ss-gradient": gradient
      };
    }
    /**
     * @param {HTMLElement} el
     * @param {SeparatorStyle} style
     */
    _applyStyleVars(el, style) {
      for (const [key, value] of Object.entries(this._styleVars(style))) {
        el.style.setProperty(key, value);
      }
    }
    /**
     * @param {SeparatorStyle} style
     */
    _updatePanelPreview(style) {
      if (!this._panelEl) return;
      this._panelEl.querySelectorAll("[data-plg-ss-live-line]").forEach((node) => {
        if (node instanceof HTMLElement) {
          node.setAttribute("data-plg-sidebar-seperators-style", style.borderStyle);
          this._applyStyleVars(node, style);
        }
      });
      this._panelEl.querySelectorAll(`.${PANEL_CLASS}__preview`).forEach((node) => {
        if (node instanceof HTMLElement) this._applyStyleVars(node, style);
      });
    }
    _ensureRuntimeStyle() {
      if (document.getElementById(STYLE_ID2)) return;
      const style = document.createElement("style");
      style.id = STYLE_ID2;
      document.head.appendChild(style);
    }
    _writeRuntimeStyle() {
      this._ensureRuntimeStyle();
      const styleEl = document.getElementById(STYLE_ID2);
      if (!(styleEl instanceof HTMLStyleElement)) return;
      const defaultVars = this._cssVarBlock(this._defaultStyle);
      const collapsedDefaultVars = this._cssVarBlock(this._defaultStyle);
      const perSeparator = Array.from(this._separators.values()).map((entry) => this._separatorRuntimeRules(entry.guid, entry.style || this._defaultStyle, entry.collapsedStyle || entry.style || this._defaultStyle)).join("\n");
      styleEl.textContent = `
			.sidebar--icons ${COLLECTION_ROW_SELECTOR}[${MARK_ATTR}="1"] { ${defaultVars} }
			.sidebar.sidebar-collapsed .sidebar--icons ${COLLECTION_ROW_SELECTOR}[${MARK_ATTR}="1"],
			.sidebar-collapsed .sidebar--icons ${COLLECTION_ROW_SELECTOR}[${MARK_ATTR}="1"] { ${collapsedDefaultVars} }
			${perSeparator}
		`;
    }
    /**
     * Cloak known separator rows by guid immediately, before mutation marking
     * catches a freshly re-rendered sidebar row.
     * @param {string} guid
     * @param {SeparatorStyle} expandedStyle
     * @param {SeparatorStyle} collapsedStyle
     */
    _separatorRuntimeRules(guid, expandedStyle, collapsedStyle) {
      const selector = `.sidebar--icons ${COLLECTION_ROW_SELECTOR}[data-guid="${this._cssEscape(guid)}"]`;
      const collapsedSelector = `.sidebar.sidebar-collapsed ${selector}`;
      const collapsedAltSelector = `.sidebar-collapsed ${selector}`;
      return `
			${selector} {
				${this._cssVarBlock(expandedStyle)}
				position: relative !important;
				display: block !important;
				min-height: var(--plg-ss-height, 20px) !important;
				height: var(--plg-ss-height, 20px) !important;
				padding-left: 0 !important;
				padding-right: 0 !important;
				padding-top: 0 !important;
				padding-bottom: 0 !important;
				overflow: hidden !important;
				cursor: grab;
				color: var(--text-default, currentColor) !important;
				font-size: 0 !important;
				line-height: 0 !important;
			}

			${collapsedSelector},
			${collapsedAltSelector} {
				${this._cssVarBlock(collapsedStyle)}
			}

			${selector}:active,
			${selector}.plg-sidebar-seperators-dragging {
				cursor: grabbing;
			}

			${selector} > *,
			${selector} .sidebar-item-icon,
			${selector} .sidebar-item-name,
			${selector} .sidebar-item-title,
			${selector} .sidebar-item-text,
			${selector} .ti {
				visibility: hidden !important;
				opacity: 0 !important;
				pointer-events: none !important;
			}

			${selector}::after {
				content: "";
				display: block;
				position: absolute;
				left: var(--plg-ss-left, 50%);
				right: var(--plg-ss-right, auto);
				top: 50%;
				width: min(var(--plg-ss-width, 88%), calc(100% - (var(--plg-ss-inset, 10px) * 2)));
				border-top: var(--plg-ss-thickness, 1px) var(--plg-ss-style, solid) var(--plg-ss-color, currentColor);
				opacity: var(--plg-ss-opacity, 0.86);
				transform-origin: center;
				transform: var(--plg-ss-transform, translate(-50%, -50%));
				transition: opacity 120ms ease-out, transform 120ms ease-out;
			}

			${selector}:hover::after {
				opacity: var(--plg-ss-opacity, 1);
				transform: var(--plg-ss-hover-transform, translate(-50%, -50%) scaleX(1.02));
			}

			${this._separatorPseudoRules(selector, expandedStyle)}
			${this._separatorPseudoRules(collapsedSelector, collapsedStyle)}
			${this._separatorPseudoRules(collapsedAltSelector, collapsedStyle)}
		`;
    }
    /**
     * @param {string} selector
     * @param {SeparatorStyle} style
     */
    _separatorPseudoRules(selector, style) {
      const reset = `
			${selector}::after {
				border-top: var(--plg-ss-thickness, 1px) var(--plg-ss-style, solid) var(--plg-ss-color, currentColor) !important;
				height: auto !important;
				background: transparent !important;
			}
		`;
      if (style.borderStyle === "gradient") {
        return `${reset}
				${selector}::after {
					border-top: 0 !important;
					height: max(var(--plg-ss-thickness, 1px), 1px) !important;
					background: var(--plg-ss-gradient) !important;
				}
			`;
      }
      if (style.borderStyle === "double") {
        return `${reset}
				${selector}::after {
					border-top: 0 !important;
					height: calc((var(--plg-ss-thickness, 1px) * 2) + var(--plg-ss-double-gap, 2px)) !important;
					background:
						linear-gradient(var(--plg-ss-color, currentColor) 0 0) top / 100% var(--plg-ss-thickness, 1px) no-repeat,
						linear-gradient(var(--plg-ss-color, currentColor) 0 0) bottom / 100% var(--plg-ss-thickness, 1px) no-repeat !important;
				}
			`;
      }
      return reset;
    }
    /**
     * @param {SeparatorStyle} style
     */
    _cssVarBlock(style) {
      const vars = this._styleVars(style);
      return Object.entries(vars).map(([key, value]) => `${key}:${value};`).join("");
    }
    /**
     * @param {DragEvent} event
     */
    _onDragStart(event) {
      if (!(event.target instanceof Element)) return;
      const row = event.target.closest(`${COLLECTION_ROW_SELECTOR}[${MARK_ATTR}="1"]`);
      if (!(row instanceof HTMLElement)) return;
      const guid = row.getAttribute("data-guid");
      if (!guid || !this._separators.has(guid)) return;
      this._dragRow = row;
      this._dragGuid = guid;
      row.classList.add("plg-sidebar-seperators-dragging");
      if (event.dataTransfer) {
        event.dataTransfer.effectAllowed = "move";
        try {
          event.dataTransfer.setData("text/plain", guid);
        } catch {
        }
      }
      this._recordDragPoint(event);
    }
    /**
     * @param {DragEvent} event
     */
    _onDrag(event) {
      if (!this._dragGuid || !this._dragRow) return;
      this._recordDragPoint(event);
      if (this._isPointOutsideSidebar(this._lastDragPoint.x, this._lastDragPoint.y)) {
        this._beginHold();
      } else {
        this._cancelHold();
      }
    }
    /**
     * @param {boolean} remove
     */
    async _finishDrag(remove) {
      const guid = this._dragGuid;
      const point = { ...this._lastDragPoint };
      if (this._dragRow) this._dragRow.classList.remove("plg-sidebar-seperators-dragging");
      this._dragRow = null;
      this._dragGuid = null;
      this._cancelHold();
      if (!remove || !guid) return;
      this._poof(point.x, point.y);
      try {
        const plugin = this.data.getPluginByGuid(guid);
        if (plugin && plugin.trashPlugin) plugin.trashPlugin();
        this._separators.delete(guid);
        if (this._activeOverrideGuid === guid) this._activeOverrideGuid = null;
        this._hideHoverActionOverlay();
        this._hideActiveActionOverlay();
        this._writeRuntimeStyle();
        this._scheduleRefresh();
        this._renderPanel();
      } catch {
        this._toast("Could not remove separator.");
      }
    }
    _beginHold() {
      if (this._removeTimer || !this._dragGuid) return;
      document.body.classList.add("plg-sidebar-seperators-holding");
      this._showHoldIndicator();
      this._removeTimer = setTimeout(() => {
        this._removeTimer = null;
        this._finishDrag(true);
      }, OUTSIDE_HOLD_MS);
    }
    _cancelHold() {
      if (this._removeTimer) {
        clearTimeout(this._removeTimer);
        this._removeTimer = null;
      }
      document.body.classList.remove("plg-sidebar-seperators-holding");
      document.querySelectorAll(".plg-sidebar-seperators-hold").forEach((node) => node.remove());
    }
    _showHoldIndicator() {
      if (document.querySelector(".plg-sidebar-seperators-hold")) return;
      const indicator = document.createElement("div");
      indicator.className = "plg-sidebar-seperators-hold";
      indicator.textContent = "Hold to remove";
      document.body.appendChild(indicator);
    }
    /**
     * @param {number} x
     * @param {number} y
     */
    _poof(x, y) {
      const root = document.createElement("div");
      root.className = "plg-sidebar-seperators-poof";
      root.style.left = `${Math.max(12, x || 24)}px`;
      root.style.top = `${Math.max(12, y || 24)}px`;
      for (let i = 0; i < 12; i += 1) {
        const bit = document.createElement("span");
        bit.style.setProperty("--angle", `${i * 30}deg`);
        bit.style.setProperty("--distance", `${18 + i % 4 * 5}px`);
        root.appendChild(bit);
      }
      document.body.appendChild(root);
      setTimeout(() => root.remove(), 700);
    }
    _scheduleRefresh() {
      if (this._refreshTimer) return;
      this._refreshTimer = setTimeout(() => {
        this._refreshTimer = null;
        this._refreshSeparators();
      }, 80);
    }
    /**
     * @param {MutationRecord[]} mutations
     */
    _onMutations(mutations) {
      if (this._panelEl && document.contains(this._panelEl)) {
        const panelEl = this._panelEl;
        const touchesOutsidePanel = mutations.some((mutation) => {
          const target = mutation.target;
          if (target instanceof Node && panelEl.contains(target)) return false;
          for (const node of mutation.addedNodes) {
            if (panelEl.contains(node)) return false;
            if (node instanceof Element && panelEl.contains(node)) return false;
          }
          for (const node of mutation.removedNodes) {
            if (panelEl.contains(node)) return false;
            if (node instanceof Element && panelEl.contains(node)) return false;
          }
          return true;
        });
        if (!touchesOutsidePanel) return;
      }
      if (this._separators.size && this._mutationsTouchSidebarRows(mutations)) {
        this._markSidebarRows();
      }
      this._scheduleRefresh();
    }
    /**
     * @param {MutationRecord[]} mutations
     */
    _mutationsTouchSidebarRows(mutations) {
      for (const mutation of mutations) {
        const target = mutation.target;
        if (target instanceof Element && target.closest(ROOT_SELECTOR)) return true;
        for (const node of mutation.addedNodes) {
          if (!(node instanceof Element)) continue;
          if (node.matches(COLLECTION_ROW_SELECTOR) || node.querySelector(COLLECTION_ROW_SELECTOR) || node.closest(ROOT_SELECTOR)) return true;
        }
        for (const node of mutation.removedNodes) {
          if (!(node instanceof Element)) continue;
          if (node.matches(COLLECTION_ROW_SELECTOR) || node.querySelector(COLLECTION_ROW_SELECTOR) || node.closest(ROOT_SELECTOR)) return true;
        }
      }
      return false;
    }
    async _refreshSeparators() {
      try {
        const before = this._separatorSnapshot(this._separators);
        const collections = await this.data.getAllCollections();
        const next = /* @__PURE__ */ new Map();
        for (const collection of collections || []) {
          const conf = collection && collection.getConfiguration ? collection.getConfiguration() : null;
          if (!conf) continue;
          const marker = this._readMarker(conf);
          if (!marker || !collection.getGuid) continue;
          const guid = collection.getGuid();
          if (conf.name !== SEPARATOR_COLLECTION_NAME && !this._nameFixGuids.has(guid)) {
            this._nameFixGuids.add(guid);
            void this._fixSeparatorCollectionName(collection, conf, guid);
          }
          const style = this._pendingSeparatorStyles.has(guid) ? this._pendingSeparatorStyles.get(guid) || null : marker.style ? this._normalizeStyle(marker.style) : null;
          const collapsedStyle = this._pendingCollapsedSeparatorStyles.has(guid) ? this._pendingCollapsedSeparatorStyles.get(guid) || null : marker.collapsedStyle ? this._normalizeStyle(marker.collapsedStyle) : style;
          next.set(guid, {
            collection,
            guid,
            name: conf.name || collection.getName() || "Separator",
            presetId: typeof marker.presetId === "string" ? marker.presetId : null,
            style,
            collapsedStyle
          });
        }
        this._separators = next;
        if (this._activeOverrideGuid && !this._separators.has(this._activeOverrideGuid)) this._activeOverrideGuid = null;
        this._markSidebarRows();
        this._writeRuntimeStyle();
        if (before !== this._separatorSnapshot(next)) this._renderPanel();
      } catch {
        this._markSidebarRows();
      }
    }
    /**
     * @param {Map<string, SeparatorEntry>} map
     */
    _separatorSnapshot(map) {
      return Array.from(map.values()).map((entry) => `${entry.guid}:${entry.name}:${JSON.stringify(entry.style || null)}:${JSON.stringify(entry.collapsedStyle || null)}`).sort().join("|");
    }
    /**
     * @param {PluginCollectionAPI} collection
     * @param {PluginConfiguration} conf
     * @param {string} guid
     */
    async _fixSeparatorCollectionName(collection, conf, guid) {
      try {
        await collection.saveConfiguration({
          ...conf,
          name: SEPARATOR_COLLECTION_NAME
        });
      } catch {
        this._nameFixGuids.delete(guid);
      }
    }
    _markSidebarRows() {
      const panelOpen = this._isPanelOpen();
      const activeGuids = new Set(this._separators.keys());
      document.querySelectorAll(`[${MARK_ATTR}]`).forEach((node) => {
        if (!(node instanceof HTMLElement)) return;
        const guid = node.getAttribute("data-guid");
        if (guid && activeGuids.has(guid)) return;
        node.removeAttribute(MARK_ATTR);
        node.removeAttribute("data-plg-sidebar-seperators-style");
        node.removeAttribute("data-plg-sidebar-seperators-active");
      });
      if (!panelOpen) {
        this._hideHoverActionOverlay();
        this._hideActiveActionOverlay();
      }
      for (const [guid, entry] of this._separators.entries()) {
        const safeGuid = this._cssEscape(guid);
        document.querySelectorAll(`${COLLECTION_ROW_SELECTOR}[data-guid="${safeGuid}"]`).forEach((node) => {
          if (node instanceof HTMLElement) {
            node.setAttribute(MARK_ATTR, "1");
            node.setAttribute("data-plg-sidebar-seperators-style", (entry.style || this._defaultStyle).borderStyle);
            if (panelOpen && this._activeOverrideGuid === guid) node.setAttribute("data-plg-sidebar-seperators-active", "1");
            else node.removeAttribute("data-plg-sidebar-seperators-active");
            node.setAttribute("title", panelOpen ? "Edit or delete this separator" : "Sidebar separator");
            if (panelOpen) this._ensureSidebarActionButtons(node, guid);
          }
        });
      }
      if (panelOpen) this._showActiveActionOverlay();
      else this._hideActiveActionOverlay();
    }
    _isPanelOpen() {
      return !!(this._panelEl && document.contains(this._panelEl));
    }
    /**
     * @param {HTMLElement} row
     * @param {string} guid
     */
    _ensureSidebarActionButtons(row, guid) {
      if (row.dataset.plgSidebarSeperatorsActionsBound === "1") return;
      row.dataset.plgSidebarSeperatorsActionsBound = "1";
      const show = /* @__PURE__ */ __name(() => this._showHoverActionOverlay(row, row.getAttribute("data-guid") || guid), "show");
      row.addEventListener("mouseenter", show);
      row.addEventListener("focusin", show);
      row.addEventListener("mouseleave", () => this._scheduleHideHoverActionOverlay());
    }
    /**
     * Build a fresh action-overlay element (edit + trash buttons). Two
     * separate overlays use this: a transient `hover` overlay that follows
     * the cursor, and a persistent `active` overlay that stays mounted on
     * the currently-edited separator while the panel is open. Both behave
     * identically functionally; `is-active-editing` adds the breathing ring.
     * @param {string} guid
     * @param {{ active: boolean }} opts
     */
    _buildActionOverlay(guid, { active }) {
      const edit = this._sidebarActionButton("Edit separator", "ti-pencil", EDIT_BUTTON_CLASS);
      const del = this._sidebarActionButton("Delete separator", "ti-trash", DELETE_BUTTON_CLASS);
      const overlay = document.createElement("div");
      overlay.className = ACTION_OVERLAY_CLASS + (active ? " is-active-editing" : "");
      overlay.dataset.guid = guid;
      overlay.append(edit, del);
      edit.onclick = (event) => {
        event.preventDefault();
        event.stopPropagation();
        this._activeOverrideGuid = guid;
        const entry = this._separators.get(guid);
        if (entry && !entry.style) entry.style = this._normalizeStyle(this._defaultStyle);
        if (entry && !entry.collapsedStyle) entry.collapsedStyle = entry.style ? this._normalizeStyle(entry.style) : this._normalizeStyle(this._defaultStyle);
        this._renderPanel();
        this._markSidebarRows();
      };
      del.onclick = (event) => {
        event.preventDefault();
        event.stopPropagation();
        void this._deleteSeparator(guid, del);
      };
      return overlay;
    }
    /**
     * @param {HTMLElement} row
     * @param {string} guid
     */
    _showHoverActionOverlay(row, guid) {
      if (!this._isPanelOpen()) return;
      if (this._activeOverrideGuid === guid) return;
      if (this._hoverActionOverlayHideTimer) {
        clearTimeout(this._hoverActionOverlayHideTimer);
        this._hoverActionOverlayHideTimer = null;
      }
      let overlay = this._hoverActionOverlayEl;
      if (!overlay || !document.contains(overlay) || overlay.dataset.guid !== guid) {
        if (overlay) overlay.remove();
        overlay = this._buildActionOverlay(guid, { active: false });
        overlay.addEventListener("mouseenter", () => {
          if (this._hoverActionOverlayHideTimer) {
            clearTimeout(this._hoverActionOverlayHideTimer);
            this._hoverActionOverlayHideTimer = null;
          }
        });
        overlay.addEventListener("mouseleave", () => this._scheduleHideHoverActionOverlay());
        document.body.appendChild(overlay);
        this._hoverActionOverlayEl = overlay;
      }
      this._positionActionOverlay(overlay, row);
    }
    _scheduleHideHoverActionOverlay() {
      if (this._hoverActionOverlayHideTimer) clearTimeout(this._hoverActionOverlayHideTimer);
      this._hoverActionOverlayHideTimer = setTimeout(() => {
        this._hoverActionOverlayHideTimer = null;
        this._hideHoverActionOverlay();
      }, 600);
    }
    _hideHoverActionOverlay() {
      if (this._hoverActionOverlayHideTimer) {
        clearTimeout(this._hoverActionOverlayHideTimer);
        this._hoverActionOverlayHideTimer = null;
      }
      if (this._hoverActionOverlayEl) {
        this._hoverActionOverlayEl.remove();
        this._hoverActionOverlayEl = null;
      }
    }
    /**
     * Mount/refresh the persistent overlay on the actively-edited separator
     * row. Stays put no matter where the pointer roams. Hidden when the
     * panel closes or no separator is active.
     */
    _showActiveActionOverlay() {
      if (!this._isPanelOpen() || !this._activeOverrideGuid) {
        this._hideActiveActionOverlay();
        return;
      }
      const safeGuid = this._cssEscape(this._activeOverrideGuid);
      const row = document.querySelector(`${COLLECTION_ROW_SELECTOR}[${MARK_ATTR}="1"][data-guid="${safeGuid}"]`);
      if (!(row instanceof HTMLElement)) {
        this._hideActiveActionOverlay();
        return;
      }
      let overlay = this._activeActionOverlayEl;
      if (!overlay || !document.contains(overlay) || overlay.dataset.guid !== this._activeOverrideGuid) {
        if (overlay) overlay.remove();
        overlay = this._buildActionOverlay(this._activeOverrideGuid, { active: true });
        document.body.appendChild(overlay);
        this._activeActionOverlayEl = overlay;
      }
      this._positionActionOverlay(overlay, row);
      if (this._hoverActionOverlayEl && this._hoverActionOverlayEl.dataset.guid === this._activeOverrideGuid) {
        this._hideHoverActionOverlay();
      }
      this._ensureRepositionListeners();
    }
    _hideActiveActionOverlay() {
      if (this._activeActionOverlayEl) {
        this._activeActionOverlayEl.remove();
        this._activeActionOverlayEl = null;
      }
    }
    /**
     * @param {HTMLElement} overlay
     * @param {HTMLElement} row
     */
    _positionActionOverlay(overlay, row) {
      const rect = row.getBoundingClientRect();
      overlay.style.left = `${Math.round(rect.right + 6)}px`;
      overlay.style.top = `${Math.round(rect.top + rect.height / 2)}px`;
    }
    /**
     * Keep both overlays positioned correctly when the sidebar scrolls or
     * the window resizes. Bound once, removed on unload.
     */
    _ensureRepositionListeners() {
      if (this._boundReposition) return;
      const reposition = /* @__PURE__ */ __name(() => {
        if (this._activeOverlayPositionRaf) return;
        this._activeOverlayPositionRaf = requestAnimationFrame(() => {
          this._activeOverlayPositionRaf = null;
          if (this._activeActionOverlayEl && this._activeActionOverlayEl.dataset.guid) {
            const safeGuid = this._cssEscape(this._activeActionOverlayEl.dataset.guid);
            const row = document.querySelector(`${COLLECTION_ROW_SELECTOR}[${MARK_ATTR}="1"][data-guid="${safeGuid}"]`);
            if (row instanceof HTMLElement) this._positionActionOverlay(this._activeActionOverlayEl, row);
          }
          if (this._hoverActionOverlayEl && this._hoverActionOverlayEl.dataset.guid) {
            const safeGuid = this._cssEscape(this._hoverActionOverlayEl.dataset.guid);
            const row = document.querySelector(`${COLLECTION_ROW_SELECTOR}[${MARK_ATTR}="1"][data-guid="${safeGuid}"]`);
            if (row instanceof HTMLElement) this._positionActionOverlay(this._hoverActionOverlayEl, row);
          }
        });
      }, "reposition");
      this._boundReposition = reposition;
      window.addEventListener("scroll", reposition, true);
      window.addEventListener("resize", reposition);
    }
    /**
     * @param {string} title
     * @param {string} iconClass
     * @param {string} extraClass
     */
    _sidebarActionButton(title, iconClass, extraClass) {
      const buttonEl = document.createElement("button");
      buttonEl.type = "button";
      buttonEl.className = `${ACTION_BUTTON_CLASS} ${extraClass}`;
      buttonEl.title = title;
      buttonEl.setAttribute("aria-label", title);
      const icon = document.createElement("i");
      icon.className = `ti ${iconClass}`;
      icon.setAttribute("aria-hidden", "true");
      buttonEl.appendChild(icon);
      return buttonEl;
    }
    /**
     * @param {Event} event
     */
    _onSeparatorActivate(event) {
      if (!(event.target instanceof Element)) return;
      const row = event.target.closest(`${COLLECTION_ROW_SELECTOR}[${MARK_ATTR}="1"]`);
      if (!(row instanceof HTMLElement)) return;
      if (event.target.closest(`.${ACTION_BUTTON_CLASS}`)) return;
      event.preventDefault();
      event.stopPropagation();
    }
    /**
     * @param {string} guid
     * @param {HTMLElement | null} source
     */
    async _deleteSeparator(guid, source = null) {
      const entry = this._separators.get(guid);
      if (!entry) return;
      if (source) {
        const rect = source.getBoundingClientRect();
        this._poof(rect.left + rect.width / 2, rect.top + rect.height / 2);
      }
      try {
        const plugin = this.data.getPluginByGuid(guid);
        if (plugin && plugin.trashPlugin) plugin.trashPlugin();
        this._separators.delete(guid);
        if (this._activeOverrideGuid === guid) this._activeOverrideGuid = null;
        this._hideHoverActionOverlay();
        this._hideActiveActionOverlay();
        this._writeRuntimeStyle();
        this._markSidebarRows();
        this._renderPanel();
        this._scheduleRefresh();
      } catch {
        this._toast("Could not delete separator.");
      }
    }
    /**
     * @returns {Promise<number>}
     */
    async _nextSeparatorIndex() {
      try {
        const collections = await this.data.getAllCollections();
        let count = 0;
        for (const collection of collections || []) {
          const conf = collection && collection.getConfiguration ? collection.getConfiguration() : null;
          if (conf && this._readMarker(conf)) count += 1;
        }
        return count + 1;
      } catch {
        return this._separators.size + 1;
      }
    }
    /**
     * @param {DragEvent} event
     */
    _recordDragPoint(event) {
      if (event.clientX || event.clientY) {
        this._lastDragPoint = { x: event.clientX, y: event.clientY };
      }
    }
    /**
     * @param {number} x
     * @param {number} y
     */
    _isPointOutsideSidebar(x, y) {
      if (!x && !y) return false;
      const sidebars = Array.from(document.querySelectorAll(ROOT_SELECTOR)).filter((node) => node instanceof HTMLElement);
      if (!sidebars.length) return false;
      return !sidebars.some((sidebar) => {
        const rect = sidebar.getBoundingClientRect();
        return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
      });
    }
    /**
     * @param {string} value
     */
    _cssEscape(value) {
      if (window.CSS && typeof window.CSS.escape === "function") return window.CSS.escape(value);
      return value.replace(/["\\]/g, "\\$&");
    }
    /**
     * @param {string} message
     */
    _toast(message) {
      try {
        if (this.ui.addToaster) this.ui.addToaster({ title: message, dismissible: true, autoDestroyTime: 2200 });
      } catch {
      }
    }
    _injectCSS() {
      this.ui.injectCSS(`
			.sidebar--icons ${COLLECTION_ROW_SELECTOR}[${MARK_ATTR}="1"] {
				position: relative !important;
				display: block !important;
				min-height: var(--plg-ss-height, 20px) !important;
				height: var(--plg-ss-height, 20px) !important;
				padding-left: 0 !important;
				padding-right: 0 !important;
				padding-top: 0 !important;
				padding-bottom: 0 !important;
				overflow: hidden !important;
				cursor: grab;
				color: var(--text-default, currentColor) !important;
				font-size: 0 !important;
				line-height: 0 !important;
			}

			.sidebar--icons ${COLLECTION_ROW_SELECTOR}[${MARK_ATTR}="1"]:active,
			.sidebar--icons ${COLLECTION_ROW_SELECTOR}[${MARK_ATTR}="1"].plg-sidebar-seperators-dragging {
				cursor: grabbing;
			}

			.sidebar--icons ${COLLECTION_ROW_SELECTOR}[${MARK_ATTR}="1"] > *,
			.sidebar--icons ${COLLECTION_ROW_SELECTOR}[${MARK_ATTR}="1"] .sidebar-item-icon,
			.sidebar--icons ${COLLECTION_ROW_SELECTOR}[${MARK_ATTR}="1"] .sidebar-item-name,
			.sidebar--icons ${COLLECTION_ROW_SELECTOR}[${MARK_ATTR}="1"] .sidebar-item-title,
			.sidebar--icons ${COLLECTION_ROW_SELECTOR}[${MARK_ATTR}="1"] .sidebar-item-text,
			.sidebar--icons ${COLLECTION_ROW_SELECTOR}[${MARK_ATTR}="1"] .ti {
				visibility: hidden !important;
				opacity: 0 !important;
				pointer-events: none !important;
			}

			.${ACTION_OVERLAY_CLASS} {
				position: fixed !important;
				z-index: 999999 !important;
				display: inline-flex !important;
				align-items: center !important;
				gap: 4px !important;
				padding: 6px 4px 6px 14px !important;
				margin-left: -14px !important;
				transform: translateY(-50%) !important;
				pointer-events: auto !important;
				background: transparent !important;
			}

			.${ACTION_OVERLAY_CLASS} .${ACTION_BUTTON_CLASS} {
				display: inline-flex !important;
				align-items: center !important;
				justify-content: center !important;
				width: 28px !important;
				height: 28px !important;
				padding: 0 !important;
				border: 1px solid var(--input-border-color, color-mix(in srgb, currentColor 22%, transparent)) !important;
				border-radius: 7px !important;
				background: var(--tps-panel-bg, ${THEME_SURFACE_CSS}) !important;
				color: var(--text-default, currentColor) !important;
				font-size: 15px !important;
				line-height: 1 !important;
				visibility: visible !important;
				opacity: 1 !important;
				pointer-events: auto !important;
				cursor: pointer !important;
				transition: opacity 120ms ease-out, background-color 120ms ease-out, border-color 120ms ease-out;
			}

			.${ACTION_OVERLAY_CLASS} .${DELETE_BUTTON_CLASS} {
				color: var(--tps-danger, #ef4444) !important;
			}

			@keyframes plgSidebarSeperatorsBreathe {
				0%, 100% { box-shadow: 0 0 0 0 var(--logo-color, currentColor)); }
				50%      { box-shadow: 0 0 0 4px transparent; }
			}

			.${ACTION_OVERLAY_CLASS}.is-active-editing .${EDIT_BUTTON_CLASS} {
				border-color: var(--logo-color, currentColor)) !important;
				color: var(--logo-color, currentColor)) !important;
				animation: plgSidebarSeperatorsBreathe 1.6s ease-in-out infinite;
			}

			.${ACTION_OVERLAY_CLASS}.is-active-editing .${ACTION_BUTTON_CLASS}:hover {
				background: color-mix(in srgb, var(--logo-color, currentColor)) 16%, var(--tps-panel-bg, ${THEME_SURFACE_CSS})) !important;
			}

			.${ACTION_OVERLAY_CLASS} .${ACTION_BUTTON_CLASS} .ti {
				visibility: visible !important;
				opacity: 1 !important;
				pointer-events: none !important;
				color: inherit !important;
				font-size: inherit !important;
			}

			.${ACTION_OVERLAY_CLASS} .${ACTION_BUTTON_CLASS}:hover {
				background: var(--hover-subtle, color-mix(in srgb, currentColor 8%, transparent)) !important;
				border-color: var(--input-border-color, color-mix(in srgb, currentColor 32%, transparent)) !important;
			}

			.${ACTION_OVERLAY_CLASS} .${DELETE_BUTTON_CLASS}:hover {
				background: color-mix(in srgb, var(--enum-red-fg, var(--tps-danger, #ef4444)) 16%, transparent) !important;
				border-color: color-mix(in srgb, var(--enum-red-fg, var(--tps-danger, #ef4444)) 42%, transparent) !important;
			}

			.sidebar--icons ${COLLECTION_ROW_SELECTOR}[${MARK_ATTR}="1"]::after {
				content: "";
				display: block;
				position: absolute;
				left: var(--plg-ss-left, 50%);
				right: var(--plg-ss-right, auto);
				top: 50%;
				width: min(var(--plg-ss-width, 88%), calc(100% - (var(--plg-ss-inset, 10px) * 2)));
				border-top: var(--plg-ss-thickness, 1px) var(--plg-ss-style, solid) var(--plg-ss-color, currentColor);
				opacity: var(--plg-ss-opacity, 0.86);
				transform-origin: center;
				transform: var(--plg-ss-transform, translate(-50%, -50%));
				transition: opacity 120ms ease-out, transform 120ms ease-out;
			}

			.sidebar--icons ${COLLECTION_ROW_SELECTOR}[${MARK_ATTR}="1"]:hover::after {
				opacity: var(--plg-ss-opacity, 1);
				transform: var(--plg-ss-hover-transform, translate(-50%, -50%) scaleX(1.02));
			}

			.${ACTION_OVERLAY_CLASS}.is-active-editing .${EDIT_BUTTON_CLASS} {
				border-color: color-mix(in srgb, var(--tps-accent, currentColor) 55%, transparent) !important;
				background: color-mix(in srgb, var(--tps-accent, currentColor) 18%, var(--tps-panel-bg, ${THEME_SURFACE_CSS})) !important;
				color: var(--tps-accent, var(--text-default, currentColor)) !important;
				animation: plg-sidebar-seperators-edit-heartbeat 1600ms ease-in-out infinite;
			}

			.sidebar--icons ${COLLECTION_ROW_SELECTOR}[${MARK_ATTR}="1"].plg-sidebar-seperators-dragging {
				opacity: 0.58;
			}

			.sidebar--icons ${COLLECTION_ROW_SELECTOR}[${MARK_ATTR}="1"][data-plg-sidebar-seperators-style="gradient"]::after {
				border-top: 0;
				height: max(var(--plg-ss-thickness, 1px), 1px);
				background: var(--plg-ss-gradient);
			}

			.sidebar--icons ${COLLECTION_ROW_SELECTOR}[${MARK_ATTR}="1"][data-plg-sidebar-seperators-style="double"]::after {
				border-top: 0;
				height: calc((var(--plg-ss-thickness, 1px) * 2) + var(--plg-ss-double-gap, 2px));
				background:
					linear-gradient(var(--plg-ss-color, currentColor) 0 0) top / 100% var(--plg-ss-thickness, 1px) no-repeat,
					linear-gradient(var(--plg-ss-color, currentColor) 0 0) bottom / 100% var(--plg-ss-thickness, 1px) no-repeat;
			}

			.${PANEL_CLASS}__editor-card,
			.${PANEL_CLASS}__empty-state,
			.${PANEL_CLASS} .tps-section {
				max-width: 1120px;
			}

			.${PANEL_CLASS}__top-actions {
				max-width: 1120px;
				display: flex;
				align-items: center;
				justify-content: flex-start;
				gap: 10px;
				margin: -4px 0 12px;
			}

			/* Preset chips + "Set preset" \u2014 pushed to the far right of the actions row. */
			.${PANEL_CLASS}__presets {
				margin-left: auto;
				display: flex;
				align-items: center;
				flex-wrap: wrap;
				justify-content: flex-end;
				gap: 6px;
			}

			.${PANEL_CLASS}__preset {
				display: inline-flex;
				align-items: center;
				height: 28px;
				border: 1px solid var(--tps-border, color-mix(in srgb, currentColor 14%, transparent));
				border-radius: 7px;
				overflow: hidden;
			}

			.${PANEL_CLASS}__preset.is-active {
				border-color: color-mix(in srgb, var(--tps-accent, currentColor) 55%, transparent);
				background: color-mix(in srgb, var(--tps-accent, currentColor) 14%, transparent);
			}

			.${PANEL_CLASS}__preset-apply {
				height: 100%;
				padding: 0 10px;
				border: 0;
				background: transparent;
				color: var(--text-default, currentColor);
				font: inherit;
				font-size: 12px;
				font-weight: 600;
				cursor: pointer;
				max-width: 160px;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}

			.${PANEL_CLASS}__preset.is-active .${PANEL_CLASS}__preset-apply {
				color: var(--tps-accent, currentColor);
			}

			.${PANEL_CLASS}__preset-apply:hover {
				background: var(--tps-bg-hover, color-mix(in srgb, currentColor 6%, transparent));
			}

			.${PANEL_CLASS}__preset-icon {
				height: 100%;
				width: 24px;
				display: inline-flex;
				align-items: center;
				justify-content: center;
				border: 0;
				border-left: 1px solid var(--tps-border, color-mix(in srgb, currentColor 12%, transparent));
				background: transparent;
				color: var(--text-muted, color-mix(in srgb, currentColor 60%, transparent));
				font: inherit;
				font-size: 12px;
				line-height: 1;
				cursor: pointer;
			}

			.${PANEL_CLASS}__preset-icon:hover {
				background: var(--tps-bg-hover, color-mix(in srgb, currentColor 6%, transparent));
				color: var(--text-default, currentColor);
			}

			.${PANEL_CLASS}__preset-icon--danger:hover {
				color: var(--enum-red-fg, #e5484d);
			}

			.${PANEL_CLASS}__preset-add {
				height: 28px;
				padding: 0 12px;
				border: 1px dashed var(--tps-border-strong, color-mix(in srgb, currentColor 28%, transparent));
				border-radius: 7px;
				background: transparent;
				color: var(--text-muted, color-mix(in srgb, currentColor 62%, transparent));
				font: inherit;
				font-size: 12px;
				font-weight: 600;
				cursor: pointer;
			}

			.${PANEL_CLASS}__preset-add:hover {
				border-color: color-mix(in srgb, var(--tps-accent, currentColor) 50%, transparent);
				color: var(--tps-accent, var(--text-default, currentColor));
			}

			/* "Editing preset" bar. */
			.${PANEL_CLASS}__preset-editbar {
				max-width: 1120px;
				display: flex;
				align-items: center;
				gap: 12px;
				flex-wrap: wrap;
				margin: -4px 0 12px;
			}

			.${PANEL_CLASS}__preset-editbar-label {
				font-size: 10px;
				font-weight: 700;
				letter-spacing: 0.08em;
				text-transform: uppercase;
				color: var(--tps-text-faint, var(--text-muted, color-mix(in srgb, currentColor 55%, transparent)));
			}

			.${PANEL_CLASS}__preset-name-input {
				height: 30px;
				min-width: 180px;
				padding: 0 10px;
				border: 1px solid var(--tps-border, color-mix(in srgb, currentColor 16%, transparent));
				border-radius: 7px;
				background: var(--tps-bg-input, transparent);
				color: var(--text-default, currentColor);
				font: inherit;
				font-size: 13px;
				font-weight: 600;
			}

			.${PANEL_CLASS}__preset-name-input:focus {
				outline: none;
				border-color: color-mix(in srgb, var(--tps-accent, currentColor) 55%, transparent);
			}

			.${PANEL_CLASS}__preset-editbar-count {
				margin-left: auto;
				font-size: 12px;
				color: var(--text-muted, color-mix(in srgb, currentColor 60%, transparent));
			}

			/* Neutral back button (matches build-title-from-properties) \u2014 never the
			   green primary/Add-Separator look. */
			.${PANEL_CLASS}__back-btn {
				display: inline-flex;
				align-items: center;
				gap: 4px;
				height: 30px;
				padding: 0 12px;
				border: 1px solid var(--tps-border, color-mix(in srgb, currentColor 16%, transparent));
				border-radius: 7px;
				background: var(--tps-bg-input, transparent);
				color: var(--text-default, currentColor);
				font: inherit;
				font-size: 12px;
				font-weight: 600;
				cursor: pointer;
			}

			.${PANEL_CLASS}__back-btn:hover {
				background: var(--tps-bg-hover, color-mix(in srgb, currentColor 6%, transparent));
				border-color: var(--tps-border-strong, color-mix(in srgb, currentColor 28%, transparent));
			}

			.${PANEL_CLASS}__back-btn .ti {
				font-size: 15px;
				line-height: 1;
			}

			/* Save = semantic success action (green), per the panel design system. */
			.${PANEL_CLASS}__preset-save-btn {
				height: 30px;
				padding: 0 16px;
				border: 1px solid color-mix(in srgb, var(--tps-success, #3fb950) 55%, transparent);
				border-radius: 7px;
				background: var(--tps-success-soft, color-mix(in srgb, var(--tps-success, #3fb950) 14%, transparent));
				color: var(--tps-success, #3fb950);
				font: inherit;
				font-size: 12px;
				font-weight: 650;
				cursor: pointer;
			}

			.${PANEL_CLASS}__preset-save-btn:hover {
				background: color-mix(in srgb, var(--tps-success, #3fb950) 24%, transparent);
			}


			.${PANEL_CLASS}__primary {
				height: 28px;
				padding: 0 10px;
				border: 1px solid color-mix(in srgb, var(--tps-accent, currentColor) 50%, transparent);
				border-radius: 6px;
				background: color-mix(in srgb, var(--tps-accent, currentColor) 16%, transparent);
				color: var(--tps-accent, var(--text-default, currentColor));
				font: inherit;
				font-size: 12px;
				font-weight: 650;
				cursor: pointer;
			}

			.${PANEL_CLASS}__primary:hover {
				background: color-mix(in srgb, var(--tps-accent, currentColor) 24%, transparent);
			}

			.${PANEL_CLASS}__preview {
				max-width: 1120px;
				min-height: 52px;
				display: flex;
				align-items: center;
				justify-content: var(--plg-ss-justify, center);
				/* Fixed preview chrome \u2014 obvious interior padding, independent of the
				   separator's own side inset (which is applied to the rail below). */
				padding: 16px 20px;
				margin: 0 0 14px;
				border: 1px solid var(--tps-divider, var(--divider-color, color-mix(in srgb, currentColor 12%, transparent)));
				border-radius: 0;
				/* Exact live sidebar color is set inline; this is the fallback. */
				background: var(--panel-bg-color, var(--bg-default, rgba(127,127,127,0.06)));
			}

			.${PANEL_CLASS}__preview-rail {
				display: flex;
				align-items: center;
				justify-content: var(--plg-ss-justify, center);
				width: 100%;
				/* Separator's own side inset, shown inside the padded preview. */
				padding-inline: var(--plg-ss-inset, 0px);
			}

			.${PANEL_CLASS}__preview + .tps-section {
				padding-top: 0;
				border-top: 0;
			}

			.${PANEL_CLASS} .tps-section + .tps-section {
				margin-top: 16px;
				padding-top: 16px;
				border-top: 1px solid var(--tps-divider, var(--divider-color, color-mix(in srgb, currentColor 14%, transparent)));
			}

			.${PANEL_CLASS} .tps-section-header {
				display: flex;
				align-items: center;
				gap: 10px;
				width: 100%;
				min-height: 34px;
				padding: 0;
				margin: 0;
				border: 0;
				background: transparent;
				color: inherit;
				font: inherit;
				text-align: left;
				cursor: pointer;
				transform: none !important;
			}

			.${PANEL_CLASS} .tps-section-header:hover {
				background: transparent;
			}

			.${PANEL_CLASS} .tps-section-header:active,
			.${PANEL_CLASS} .tps-section-header:focus {
				transform: none !important;
			}

			.${PANEL_CLASS} .tps-section-chev {
				display: inline-flex;
				align-items: center;
				justify-content: center;
				flex: 0 0 18px;
				width: 18px;
				height: 18px;
				font-size: 16px;
				line-height: 1;
				opacity: 0.75;
				transform-origin: center;
				transition: transform var(--tps-dur-base, 160ms) var(--tps-ease-out, ease-out), opacity var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out);
			}

			.${PANEL_CLASS} .tps-section-header:hover .tps-section-chev {
				opacity: 1;
			}

			.${PANEL_CLASS} .tps-section-label {
				display: flex;
				align-items: center;
				min-height: 18px;
				margin: 0 !important;
				line-height: 18px;
			}

			.${PANEL_CLASS} .tps-section-summary {
				min-height: 18px;
				display: flex;
				align-items: center;
				justify-content: flex-end;
				margin-left: auto;
				min-width: 0;
			}

			.${PANEL_CLASS}__section-summary {
				display: block;
				min-width: 0;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}

			.${PANEL_CLASS} .tps-section-body {
				padding: 8px 0 0;
				margin-top: 0;
				border-top: 0;
			}

			.${PANEL_CLASS}__editor-card {
				display: flex;
				flex-direction: column;
				gap: 12px;
			}

			.${PANEL_CLASS}__design-columns {
				display: grid;
				grid-template-columns: repeat(2, minmax(0, 1fr));
				gap: 24px;
				max-width: 1120px;
			}

			.${PANEL_CLASS}__design-column {
				min-width: 0;
				display: flex;
				flex-direction: column;
				gap: 10px;
			}

			.${PANEL_CLASS}__state-title {
				font-size: 14px;
				line-height: 1.2;
				font-weight: 600;
				letter-spacing: 0;
				text-transform: none;
				color: var(--tps-text, var(--text-default, currentColor));
				margin-bottom: 4px;
			}

			.${PANEL_CLASS}__eyebrow {
				font-size: 11px;
				line-height: 1;
				font-weight: 700;
				letter-spacing: 0.06em;
				text-transform: uppercase;
				color: var(--text-muted, color-mix(in srgb, currentColor 62%, transparent));
			}

			.${PANEL_CLASS}__empty-state {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				gap: 10px;
				text-align: center;
				padding: 8px 0 0;
			}

			.${PANEL_CLASS}__helper {
				max-width: 520px;
				margin: 0;
				font-size: 12px;
				line-height: 1.45;
				color: var(--text-muted, color-mix(in srgb, currentColor 62%, transparent));
			}

			.${PANEL_CLASS}__line {
				content: "";
				position: relative;
				display: block;
				width: min(var(--plg-ss-width, 88%), 100%);
				height: max(var(--plg-ss-thickness, 1px), 2px);
				opacity: var(--plg-ss-opacity, 0.86);
				transform: translateY(var(--plg-ss-offset-y, 0px));
			}

			.${PANEL_CLASS}__line::before {
				content: "";
				position: absolute;
				left: 0;
				right: 0;
				top: 50%;
				transform: translateY(-50%);
				border-top: var(--plg-ss-thickness, 1px) var(--plg-ss-style, solid) var(--plg-ss-color, currentColor);
			}

			.${PANEL_CLASS}__line[data-plg-sidebar-seperators-style="gradient"]::before {
				border-top: 0;
				height: max(var(--plg-ss-thickness, 1px), 1px);
				background: var(--plg-ss-gradient);
			}

			.${PANEL_CLASS}__line[data-plg-sidebar-seperators-style="double"] {
				height: calc((var(--plg-ss-thickness, 1px) * 2) + var(--plg-ss-double-gap, 2px));
			}

			.${PANEL_CLASS}__line[data-plg-sidebar-seperators-style="double"]::before {
				border-top: 0;
				top: 0;
				bottom: 0;
				transform: none;
				background:
					linear-gradient(var(--plg-ss-color, currentColor) 0 0) top / 100% var(--plg-ss-thickness, 1px) no-repeat,
					linear-gradient(var(--plg-ss-color, currentColor) 0 0) bottom / 100% var(--plg-ss-thickness, 1px) no-repeat;
			}

			.${PANEL_CLASS}__editor,
			.${PANEL_CLASS}__colors {
				display: flex;
				flex-direction: column;
				gap: 10px;
			}

			.${PANEL_CLASS}__color-hero {
				display: grid;
				grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
				gap: 10px;
				align-items: stretch;
			}

			.${PANEL_CLASS}__color-hero > .${PANEL_CLASS}__preset-row {
				margin: 0;
			}

			@media (max-width: 520px) {
				.${PANEL_CLASS}__color-hero {
					grid-template-columns: minmax(0, 1fr);
				}
			}

			.${PANEL_CLASS}__preset-row {
				display: grid;
				grid-template-columns: 28px minmax(0, 1fr) 18px;
				align-items: center;
				column-gap: 12px;
				width: 100%;
				padding: 12px 14px;
				margin: 0;
				border: 1px solid var(--tps-border, var(--divider-color, color-mix(in srgb, currentColor 18%, transparent)));
				border-radius: 8px;
				background: var(--tps-bg-input, color-mix(in srgb, currentColor 6%, transparent)));
				color: inherit;
				font: inherit;
				text-align: left;
				cursor: pointer;
				transition: background-color 120ms ease-out, border-color 120ms ease-out, box-shadow 120ms ease-out;
			}

			.${PANEL_CLASS}__preset-row:hover {
				background: var(--tps-bg-hover, color-mix(in srgb, currentColor 8%, transparent)));
				border-color: var(--tps-border-strong, var(--divider-color, color-mix(in srgb, currentColor 32%, transparent)));
			}

			.${PANEL_CLASS}__preset-row.is-active {
				background: color-mix(in srgb, var(--tps-accent, currentColor) 12%, var(--tps-bg-input, transparent));
				border-color: color-mix(in srgb, var(--tps-accent, currentColor) 50%, transparent);
				box-shadow: 0 0 0 1px color-mix(in srgb, var(--tps-accent, currentColor) 22%, transparent);
			}

			.${PANEL_CLASS}__preset-swatch {
				display: block;
				width: 22px;
				height: 22px;
				border-radius: 999px;
				box-shadow: inset 0 0 0 1px var(--tps-swatch-inset, color-mix(in srgb, currentColor 10%, transparent)), 0 0 0 1px color-mix(in srgb, currentColor 18%, transparent);
			}

			.${PANEL_CLASS}__preset-text {
				display: flex;
				flex-direction: column;
				min-width: 0;
				gap: 2px;
			}

			.${PANEL_CLASS}__preset-title {
				font-size: 13px;
				font-weight: 600;
				color: var(--tps-text, var(--text-default, currentColor));
			}

			.${PANEL_CLASS}__preset-row.is-active .${PANEL_CLASS}__preset-title {
				color: var(--tps-accent, currentColor);
			}

			.${PANEL_CLASS}__preset-hint {
				font-size: 11.5px;
				line-height: 1.4;
				color: var(--tps-text-muted, var(--text-muted, color-mix(in srgb, currentColor 62%, transparent)));
			}

			.${PANEL_CLASS}__preset-check {
				display: inline-flex;
				align-items: center;
				justify-content: center;
				width: 18px;
				height: 18px;
				font-size: 14px;
				font-weight: 700;
				color: var(--tps-accent, currentColor);
			}

			.${PANEL_CLASS}__custom-row .${PANEL_CLASS}__preset-hint {
				font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
				font-size: 11.5px;
			}

			.${PANEL_CLASS}__field {
				display: grid;
				grid-template-columns: 90px 1fr;
				gap: 12px;
				align-items: center;
			}

			.${PANEL_CLASS}__design-column .${PANEL_CLASS}__field {
				grid-template-columns: 76px minmax(0, 1fr);
			}

			.${PANEL_CLASS}__segmented {
				display: flex;
				flex-wrap: nowrap;
				gap: 4px;
				min-width: 0;
			}

			.${PANEL_CLASS}__seg {
				height: 28px;
				padding: 0 8px;
				border: 1px solid transparent;
				border-radius: 6px;
				background: transparent;
				color: var(--text-muted, color-mix(in srgb, currentColor 62%, transparent));
				font: inherit;
				font-size: 12px;
				cursor: pointer;
			}

			/* Icon buttons flex around ~40px so all fit one row inside a column cell. */
			.${PANEL_CLASS}__seg--icon {
				flex: 1 1 40px;
				min-width: 32px;
				max-width: 44px;
				padding: 0;
				display: inline-flex;
				align-items: center;
				justify-content: center;
			}

			.${PANEL_CLASS}__seg:hover {
				background: var(--tps-bg-hover, color-mix(in srgb, currentColor 6%, transparent));
				color: var(--text-default, currentColor);
			}

			.${PANEL_CLASS}__seg.is-active {
				border-color: color-mix(in srgb, var(--tps-accent, currentColor) 52%, transparent);
				background: color-mix(in srgb, var(--tps-accent, currentColor) 14%, transparent);
				color: var(--tps-accent, var(--text-default, currentColor));
			}

			/* Standard text-align glyphs (inline-SVG masks) tinted via currentColor. */
			.${PANEL_CLASS}__seg-glyph {
				display: block;
				width: 18px;
				height: 18px;
				background-color: currentColor;
				pointer-events: none;
				-webkit-mask: center / 18px 18px no-repeat;
				mask: center / 18px 18px no-repeat;
			}

			.${PANEL_CLASS}__seg[data-align="left"] .${PANEL_CLASS}__seg-glyph {
				-webkit-mask-image: url("data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%3E%3Cpath%20d='M4%206h16'/%3E%3Cpath%20d='M4%2012h10'/%3E%3Cpath%20d='M4%2018h14'/%3E%3C/svg%3E");
				mask-image: url("data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%3E%3Cpath%20d='M4%206h16'/%3E%3Cpath%20d='M4%2012h10'/%3E%3Cpath%20d='M4%2018h14'/%3E%3C/svg%3E");
			}

			.${PANEL_CLASS}__seg[data-align="center"] .${PANEL_CLASS}__seg-glyph {
				-webkit-mask-image: url("data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%3E%3Cpath%20d='M4%206h16'/%3E%3Cpath%20d='M8%2012h8'/%3E%3Cpath%20d='M6%2018h12'/%3E%3C/svg%3E");
				mask-image: url("data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%3E%3Cpath%20d='M4%206h16'/%3E%3Cpath%20d='M8%2012h8'/%3E%3Cpath%20d='M6%2018h12'/%3E%3C/svg%3E");
			}

			.${PANEL_CLASS}__seg[data-align="right"] .${PANEL_CLASS}__seg-glyph {
				-webkit-mask-image: url("data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%3E%3Cpath%20d='M4%206h16'/%3E%3Cpath%20d='M10%2012h10'/%3E%3Cpath%20d='M6%2018h14'/%3E%3C/svg%3E");
				mask-image: url("data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%3E%3Cpath%20d='M4%206h16'/%3E%3Cpath%20d='M10%2012h10'/%3E%3Cpath%20d='M6%2018h14'/%3E%3C/svg%3E");
			}

			/* Border style previews: a real line drawn in the button, tinted via currentColor. */
			.${PANEL_CLASS}__seg-line {
				display: block;
				width: 22px;
				height: 0;
				pointer-events: none;
			}

			.${PANEL_CLASS}__seg[data-shape="solid"] .${PANEL_CLASS}__seg-line {
				border-top: 2px solid currentColor;
			}

			.${PANEL_CLASS}__seg[data-shape="dashed"] .${PANEL_CLASS}__seg-line {
				border-top: 2px dashed currentColor;
			}

			.${PANEL_CLASS}__seg[data-shape="dotted"] .${PANEL_CLASS}__seg-line {
				border-top: 2px dotted currentColor;
			}

			.${PANEL_CLASS}__seg[data-shape="double"] .${PANEL_CLASS}__seg-line {
				border-top: 3px double currentColor;
			}

			.${PANEL_CLASS}__seg[data-shape="gradient"] .${PANEL_CLASS}__seg-line {
				height: 2px;
				border-top: 0;
				background: linear-gradient(90deg, transparent, currentColor 50%, transparent);
			}

			.${PANEL_CLASS}__number {
				display: grid;
				grid-template-columns: 90px auto;
				gap: 12px;
				align-items: center;
			}

			.${PANEL_CLASS}__design-column .${PANEL_CLASS}__number {
				grid-template-columns: 76px auto;
			}

			.${PANEL_CLASS}__slider {
				display: grid;
				grid-template-columns: 90px minmax(120px, 1fr) 42px;
				gap: 12px;
				align-items: center;
				max-width: 520px;
			}

			.${PANEL_CLASS}__design-column .${PANEL_CLASS}__slider {
				grid-template-columns: 76px minmax(80px, 1fr) 38px;
			}

			.${PANEL_CLASS}__slider input {
				width: 100%;
			}

			.${PANEL_CLASS}__slider-value {
				font-size: 12px;
				color: var(--text-muted, color-mix(in srgb, currentColor 62%, transparent));
				font-variant-numeric: tabular-nums;
				text-align: right;
			}

			.${PANEL_CLASS}__number-control {
				display: inline-flex;
				align-items: center;
				gap: 4px;
			}

			.${PANEL_CLASS}__number-control button,
			.${PANEL_CLASS}__number-control input {
				height: 28px;
				border: 1px solid var(--tps-divider, color-mix(in srgb, currentColor 14%, transparent));
				border-radius: 6px;
				background: transparent;
				color: var(--text-default, currentColor);
				font: inherit;
				font-size: 12px;
			}

			.${PANEL_CLASS}__number-control button {
				width: 28px;
				cursor: pointer;
			}

			.${PANEL_CLASS}__number-control button:hover {
				background: var(--tps-bg-hover, color-mix(in srgb, currentColor 6%, transparent));
				border-color: var(--divider-color, color-mix(in srgb, currentColor 22%, transparent));
			}

			.${PANEL_CLASS}__number-control input {
				width: 58px;
				padding: 0 6px;
				text-align: center;
			}

			.${PANEL_CLASS}__number-control input::-webkit-outer-spin-button,
			.${PANEL_CLASS}__number-control input::-webkit-inner-spin-button {
				-webkit-appearance: none;
				margin: 0;
			}

			.${PANEL_CLASS}__number-unit {
				font-size: 12px;
				color: var(--text-muted, color-mix(in srgb, currentColor 62%, transparent));
			}

			.${PANEL_CLASS}__field-label,
			.${PANEL_CLASS}__colors-label,
			.${PANEL_CLASS}__custom-color span {
				font-size: 11px;
				font-weight: 700;
				letter-spacing: 0.06em;
				text-transform: uppercase;
				color: var(--text-muted, color-mix(in srgb, currentColor 62%, transparent));
			}

			.${PANEL_CLASS}__custom-color {
				display: grid;
				grid-template-columns: 90px auto;
				gap: 12px;
				align-items: center;
			}

			.${PANEL_CLASS}__custom-color input {
				width: 42px;
				height: 28px;
				padding: 0;
				border: 1px solid var(--divider-color, color-mix(in srgb, currentColor 20%, transparent));
				border-radius: 6px;
				background: transparent;
			}

			.${PANEL_CLASS}__colors-group {
				display: flex;
				flex-direction: column;
				gap: 6px;
			}

			.${PANEL_CLASS}__colors-grid {
				display: grid;
				grid-template-columns: repeat(auto-fill, minmax(128px, 1fr));
				gap: 6px;
			}

			.${PANEL_CLASS}__colors-grid--compact {
				grid-template-columns: repeat(auto-fill, 26px);
			}

			.${PANEL_CLASS}__color {
				display: inline-flex;
				align-items: center;
				gap: 7px;
				min-width: 0;
				height: 28px;
				padding: 0 8px;
				border-radius: 6px;
				border: 1px solid var(--tps-divider, color-mix(in srgb, currentColor 14%, transparent));
				background: transparent;
				color: var(--text-default, currentColor);
				font: inherit;
				font-size: 12px;
				cursor: pointer;
				pointer-events: auto;
				position: relative;
				z-index: 1;
			}

			.${PANEL_CLASS}__color:hover {
				background: var(--tps-bg-hover, color-mix(in srgb, currentColor 6%, transparent));
			}

			.${PANEL_CLASS}__color.is-active {
				border-color: color-mix(in srgb, var(--tps-accent, currentColor) 52%, transparent);
				background: color-mix(in srgb, var(--tps-accent, currentColor) 14%, transparent);
			}

			.${PANEL_CLASS}__color-dot {
				width: 14px;
				height: 14px;
				flex: 0 0 auto;
				border-radius: 999px;
				box-shadow: inset 0 0 0 1px var(--tps-swatch-inset, color-mix(in srgb, currentColor 10%, transparent)), 0 0 0 1px color-mix(in srgb, currentColor 12%, transparent);
			}

			.${PANEL_CLASS}__color--swatch {
				justify-content: center;
				width: 26px;
				height: 26px;
				padding: 0;
			}

			.${PANEL_CLASS}__color-name {
				min-width: 0;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}

			.${COLLECTION_COLORS_CLASS}__palette-list {
				display: flex;
				flex-direction: column;
				border-top: 1px solid var(--tps-divider, var(--divider-color, color-mix(in srgb, currentColor 10%, transparent)));
			}
			.${COLLECTION_COLORS_CLASS}__palette-row {
				display: flex;
				flex-wrap: nowrap;
				align-items: center;
				gap: 12px;
				padding: 8px 0;
				border-bottom: 1px solid var(--tps-divider, var(--divider-color, color-mix(in srgb, currentColor 8%, transparent)));
			}
			.${COLLECTION_COLORS_CLASS}__palette-row.is-truncated .${COLLECTION_COLORS_CLASS}__palette-row-dots {
				display: none;
			}
			.${COLLECTION_COLORS_CLASS}__palette-row:last-child { border-bottom: 0; }
			.${COLLECTION_COLORS_CLASS}__palette-row:hover { background: var(--tps-bg-hover, color-mix(in srgb, currentColor 4%, transparent)); }
			.${COLLECTION_COLORS_CLASS}__palette-row.is-active {
				background: var(--tps-accent-soft, color-mix(in srgb, var(--tps-accent, currentColor) 12%, transparent));
				padding-left: 8px;
				padding-right: 8px;
			}
			.${COLLECTION_COLORS_CLASS}__palette-row.is-active .${COLLECTION_COLORS_CLASS}__palette-row-name {
				color: var(--tps-accent, currentColor);
				font-weight: 600;
			}
			.${COLLECTION_COLORS_CLASS}__palette-row-name {
				display: flex;
				align-items: center;
				gap: 8px;
				border: 0;
				background: transparent;
				color: inherit;
				font: inherit;
				padding: 0;
				text-align: left;
				cursor: pointer;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				flex: 0 0 auto;
			}
			.${COLLECTION_COLORS_CLASS}__palette-row-dots {
				display: flex;
				flex-wrap: nowrap;
				gap: 4px;
				flex: 1 1 auto;
				min-width: 0;
			}
			.${COLLECTION_COLORS_CLASS}__palette-dot {
				width: 14px;
				height: 14px;
				border-radius: 50%;
				box-shadow: inset 0 0 0 1px var(--tps-swatch-inset, color-mix(in srgb, currentColor 8%, transparent));
				flex: 0 0 auto;
			}
			.${COLLECTION_COLORS_CLASS}__palette-row-reveal {
				display: inline-flex !important;
				align-items: center;
				justify-content: center;
				gap: 4px;
				margin-left: auto;
				width: 28px;
				height: 28px;
				padding: 0;
				border-radius: 4px;
				opacity: 0;
				visibility: hidden;
				font-size: 16px;
				line-height: 1;
				flex: 0 0 28px;
				border: 0;
				background: transparent;
				color: inherit;
				cursor: pointer;
			}
			.${COLLECTION_COLORS_CLASS}__palette-row-reveal:hover {
				background: var(--tps-bg-hover, color-mix(in srgb, currentColor 10%, transparent));
				opacity: 1;
			}
			.${COLLECTION_COLORS_CLASS}__palette-row-reveal::after {
				content: '\u25BE';
				opacity: 0.7;
			}
			.${COLLECTION_COLORS_CLASS}__palette-row.is-revealed .${COLLECTION_COLORS_CLASS}__palette-row-reveal::after {
				content: '\u25B4';
			}
			.${COLLECTION_COLORS_CLASS}__palette-row.is-truncated .${COLLECTION_COLORS_CLASS}__palette-row-reveal,
			.${COLLECTION_COLORS_CLASS}__palette-row.is-revealed .${COLLECTION_COLORS_CLASS}__palette-row-reveal {
				opacity: 0.75;
				visibility: visible;
			}
			.${COLLECTION_COLORS_CLASS}__palette-row.is-truncated,
			.${COLLECTION_COLORS_CLASS}__palette-row.is-revealed {
				cursor: pointer;
			}
			.${COLLECTION_COLORS_CLASS}__palette-row.is-truncated:hover,
			.${COLLECTION_COLORS_CLASS}__palette-row.is-revealed:hover {
				background: var(--tps-bg-hover, color-mix(in srgb, currentColor 6%, transparent));
			}
			.${COLLECTION_COLORS_CLASS}__palette-row.is-revealed {
				flex-wrap: wrap;
				align-items: flex-start;
				overflow: visible;
			}
			.${COLLECTION_COLORS_CLASS}__palette-row.is-revealed .${COLLECTION_COLORS_CLASS}__palette-row-dots {
				display: flex !important;
				flex-wrap: wrap;
				flex: 1 0 100%;
				width: 100%;
				min-width: 0;
				margin-top: 4px;
				overflow: visible;
			}
			.${COLLECTION_COLORS_CLASS}__tailwind-shades {
				display: flex;
				align-items: flex-start;
				gap: 10px;
				padding: 8px;
				background: var(--tps-accent-soft, color-mix(in srgb, var(--tps-accent, currentColor) 12%, transparent));
			}
			.${COLLECTION_COLORS_CLASS}__tailwind-shades-label {
				flex: 0 0 auto;
				min-height: 28px;
				display: inline-flex;
				align-items: center;
				font-size: 11px;
				font-weight: 600;
				opacity: 0.7;
				text-transform: uppercase;
				letter-spacing: 0.04em;
			}
			.${COLLECTION_COLORS_CLASS}__tailwind-shades-seg {
				display: flex;
				flex: 1 1 auto;
				min-width: 0;
				flex-wrap: wrap;
				gap: 4px;
			}
			.${COLLECTION_COLORS_CLASS}__shade-btn {
				min-width: 44px;
				height: 28px;
				border: 1px solid transparent;
				background: transparent;
				color: inherit;
				padding: 0 8px;
				border-radius: 4px;
				cursor: pointer;
				font: inherit;
				font-size: 12px;
			}
			.${COLLECTION_COLORS_CLASS}__shade-btn:hover,
			.${COLLECTION_COLORS_CLASS}__shade-btn:focus-visible {
				background: var(--tps-bg-hover, color-mix(in srgb, currentColor 10%, transparent)));
				border-color: var(--tps-border, color-mix(in srgb, currentColor 22%, transparent));
				color: var(--tps-text, var(--text-default, currentColor));
				outline: none;
			}
			.${COLLECTION_COLORS_CLASS}__shade-btn.is-active {
				background: var(--tps-accent-soft, color-mix(in srgb, var(--tps-accent, currentColor) 15%, transparent));
				border-color: color-mix(in srgb, var(--tps-accent, currentColor) 45%, transparent);
				color: var(--tps-accent, currentColor);
				font-weight: 600;
			}

			.${COLLECTION_COLORS_CLASS}__swatch-wrapper {
				width: 100%;
				min-width: 0;
				overflow: visible;
			}
			.${COLLECTION_COLORS_CLASS}__swatch-wrapper.is-compact,
			.${COLLECTION_COLORS_CLASS}__swatch-wrapper.is-open {
				overflow: visible;
			}
			.${COLLECTION_COLORS_CLASS}__swatch-wrapper:not(.is-compact) .${COLLECTION_COLORS_CLASS}__swatches {
				flex-wrap: nowrap;
			}
			.${COLLECTION_COLORS_CLASS}__swatches {
				display: flex;
				flex-wrap: wrap;
				align-items: center;
				align-content: flex-start;
				gap: 5px;
				width: 100%;
				max-width: 100%;
				min-width: 0;
				overflow: visible;
				padding: 2px 0;
			}
			.${COLLECTION_COLORS_CLASS}__swatch {
				flex: 0 0 18px;
				width: 18px;
				height: 18px;
				border-radius: 50%;
				border: 0;
				padding: 0;
				cursor: pointer;
				outline: none;
				box-shadow: inset 0 0 0 1px var(--tps-swatch-inset, color-mix(in srgb, currentColor 6%, transparent));
				opacity: 0.42;
				transition: transform 0.08s ease, box-shadow 0.08s ease, opacity 0.08s ease;
			}
			.${COLLECTION_COLORS_CLASS}__swatch:hover { transform: scale(1.1); opacity: 0.78; }
			.${COLLECTION_COLORS_CLASS}__swatch.is-active {
				opacity: 1;
				box-shadow: 0 0 0 2px #ffffff, 0 0 0 3px rgba(0,0,0,0.45);
			}
			.${COLLECTION_COLORS_CLASS}__swatch--custom {
				background: linear-gradient(135deg, #ffffff 50%, #111111 50%);
			}
			.${COLLECTION_COLORS_CLASS}__custom-panel {
				display: grid;
				grid-template-columns: minmax(150px, 0.75fr) minmax(180px, 1fr);
				gap: 12px;
				align-items: start;
				padding: 8px 0 0;
				border-radius: 0;
				background: transparent;
				border-top: 1px solid var(--tps-divider, color-mix(in srgb, currentColor 12%, transparent));
				margin-top: 6px;
			}
			.${COLLECTION_COLORS_CLASS}__custom-left,
			.${COLLECTION_COLORS_CLASS}__custom-right {
				display: flex;
				flex-direction: column;
				gap: 8px;
				min-width: 0;
			}
			.${COLLECTION_COLORS_CLASS}__sv {
				position: relative; width: 100%; aspect-ratio: 1.35 / 1;
				max-height: 150px;
				border-radius: 6px;
				background:
					linear-gradient(to top, #000, transparent),
					linear-gradient(to right, #fff, hsl(var(--hue, 0), 100%, 50%));
				cursor: crosshair; touch-action: none; user-select: none;
			}
			.${COLLECTION_COLORS_CLASS}__sv-thumb {
				position: absolute; width: 12px; height: 12px;
				border: 2px solid #fff; border-radius: 50%;
				transform: translate(-50%, -50%); pointer-events: none;
				box-shadow: 0 0 0 1px rgba(0,0,0,0.6);
			}
			.${COLLECTION_COLORS_CLASS}__hue {
				width: 100%; height: 10px; appearance: none;
				background: linear-gradient(to right,
					#f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
				border-radius: 6px; outline: none;
			}
			.${COLLECTION_COLORS_CLASS}__hue::-webkit-slider-thumb {
				appearance: none; width: 14px; height: 14px;
				border-radius: 50%; background: #fff;
				border: 2px solid rgba(0,0,0,0.6); cursor: pointer;
			}
			.${COLLECTION_COLORS_CLASS}__formats {
				display: inline-flex; align-self: flex-start;
				background: color-mix(in srgb, currentColor 12%, transparent); border-radius: 6px; padding: 2px;
			}
			.${COLLECTION_COLORS_CLASS}__format-btn {
				border: 0; background: transparent; color: inherit;
				padding: 3px 8px; border-radius: 4px;
				cursor: pointer; font-size: 11px; letter-spacing: 0.04em;
			}
			.${COLLECTION_COLORS_CLASS}__format-btn.is-active {
				background: color-mix(in srgb, currentColor 22%, transparent); font-weight: 600;
			}
			.${COLLECTION_COLORS_CLASS}__inputs { display: flex; gap: 6px; align-items: center; }
			.${COLLECTION_COLORS_CLASS}__hex-input,
			.${COLLECTION_COLORS_CLASS}__num input {
				background: color-mix(in srgb, currentColor 12%, transparent);
				border: 1px solid color-mix(in srgb, currentColor 18%, transparent);
				color: inherit;
				padding: 5px 7px; border-radius: 4px;
				font-size: 12px;
				font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
				outline: none;
			}
			.${COLLECTION_COLORS_CLASS}__hex-input { flex: 1; }
			.${COLLECTION_COLORS_CLASS}__num { display: flex; flex-direction: column; align-items: center; gap: 2px; flex: 1; }
			.${COLLECTION_COLORS_CLASS}__num input { width: 100%; text-align: center; }
			.${COLLECTION_COLORS_CLASS}__num-label,
			.${COLLECTION_COLORS_CLASS}__input-label { font-size: 10px; opacity: 0.6; letter-spacing: 0.04em; }
			.${COLLECTION_COLORS_CLASS}__random {
				align-self: flex-start;
				background: color-mix(in srgb, currentColor 12%, transparent);
				border: 1px solid color-mix(in srgb, currentColor 18%, transparent);
				color: inherit;
				padding: 4px 9px; border-radius: 4px;
				font-size: 12px; cursor: pointer;
			}
			.${COLLECTION_COLORS_CLASS}__random:hover { background: color-mix(in srgb, currentColor 20%, transparent); }
			.${COLLECTION_COLORS_CLASS}__actions {
				display: flex; gap: 6px; justify-content: flex-end;
			}
			.${COLLECTION_COLORS_CLASS}__btn {
				border: 0; padding: 5px 12px; border-radius: 4px;
				font-size: 12px; cursor: pointer;
			}
			.${COLLECTION_COLORS_CLASS}__btn--ghost { background: transparent; color: inherit; opacity: 0.75; }
			.${COLLECTION_COLORS_CLASS}__btn--primary {
				background: color-mix(in srgb, var(--tps-accent, currentColor) 18%, transparent);
				color: var(--tps-accent, currentColor); font-weight: 600;
			}
			.${COLLECTION_COLORS_CLASS}__btn--primary:hover { background: color-mix(in srgb, var(--tps-accent, currentColor) 30%, transparent); }
			@media (max-width: 560px) {
				.${COLLECTION_COLORS_CLASS}__custom-panel {
					grid-template-columns: 1fr;
				}
			}

			.${PANEL_CLASS}__muted,
			.${PANEL_CLASS}__empty {
				font-size: 12px;
				color: var(--text-muted, color-mix(in srgb, currentColor 62%, transparent));
			}

			.${PANEL_CLASS}__actions {
				display: flex;
				align-items: center;
				gap: 8px;
				flex-wrap: wrap;
			}

			.plg-sidebar-seperators-hold {
				position: fixed;
				left: 50%;
				bottom: 24px;
				z-index: 999999;
				transform: translateX(-50%);
				padding: 7px 11px;
				border-radius: 999px;
				border: 1px solid var(--input-border-color, color-mix(in srgb, currentColor 22%, transparent));
				background:
					linear-gradient(90deg, var(--tps-accent, currentColor) 0 0) 0 100% / 0% 2px no-repeat,
					var(--tps-panel-bg, ${THEME_SURFACE_CSS});
				color: var(--text-default, currentColor);
				font: inherit;
				font-size: 12px;
				line-height: 1;
				pointer-events: none;
				animation: plg-sidebar-seperators-hold-fill ${OUTSIDE_HOLD_MS}ms linear forwards;
			}

			.plg-sidebar-seperators-poof {
				position: fixed;
				z-index: 999999;
				width: 2px;
				height: 2px;
				pointer-events: none;
				transform: translate(-1px, -1px);
			}

			.plg-sidebar-seperators-poof span {
				position: absolute;
				left: 0;
				top: 0;
				width: 6px;
				height: 6px;
				border-radius: 999px;
				background: var(--tps-accent, var(--text-default, currentColor));
				transform: rotate(var(--angle)) translateX(0) scale(0.7);
				opacity: 0.9;
				animation: plg-sidebar-seperators-poof 620ms cubic-bezier(0.15, 0.8, 0.2, 1) forwards;
			}

			@keyframes plg-sidebar-seperators-hold-fill {
				to { background-size: 100% 2px, auto; }
			}

			@keyframes plg-sidebar-seperators-poof {
				65% {
					opacity: 0.8;
					transform: rotate(var(--angle)) translateX(var(--distance)) scale(1);
				}
				to {
					opacity: 0;
					transform: rotate(var(--angle)) translateX(calc(var(--distance) + 8px)) scale(0);
				}
			}

			@keyframes plg-sidebar-seperators-edit-heartbeat {
				0%, 100% {
					background: color-mix(in srgb, var(--tps-accent, currentColor) 16%, var(--tps-panel-bg, ${THEME_SURFACE_CSS}));
					box-shadow: 0 0 0 0 color-mix(in srgb, var(--tps-accent, currentColor) 0%, transparent);
				}
				50% {
					background: color-mix(in srgb, var(--tps-accent, currentColor) 28%, var(--tps-panel-bg, ${THEME_SURFACE_CSS}));
					box-shadow: 0 0 0 3px color-mix(in srgb, var(--tps-accent, currentColor) 18%, transparent);
				}
			}

			@media (prefers-reduced-motion: reduce) {
				.plg-sidebar-seperators-hold,
				.plg-sidebar-seperators-poof span {
					animation-duration: 1ms;
				}
			}

			@media (max-width: 900px) {
				.${PANEL_CLASS}__design-columns {
					grid-template-columns: 1fr;
					gap: 18px;
				}
			}
		`);
    }
  };
  return __toCommonJS(plugin_exports);
})();
var Plugin = plugins.Plugin;
