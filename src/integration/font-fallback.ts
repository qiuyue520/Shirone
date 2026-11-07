import type { FontRole } from "../types/fontConfig.ts";

/**
 * Astro 字体声明的 fallback 选项：组合栈由主题自己拼接，因此参与组合的
 * 角色必须关闭 Astro 的自动 fallback，避免第二层 fallback 插在组合之前。
 */
export function getFontFallbackOptions(
	role: FontRole,
	hasMonoCjk: boolean,
): { fallbacks?: string[]; optimizedFallbacks?: boolean } {
	// 全角色关闭 Astro 自动 fallback 度量优化：该优化在 buildStart 需要
	// 联网拉取字体度量数据（离线/沙箱环境会直接失败），且主题自行拼接
	// fallback 栈，自动插入的第二层 fallback 反而会插在组合之前。
	return { fallbacks: [], optimizedFallbacks: false };
}
