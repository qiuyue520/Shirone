import type { ProfileConfig } from "@/types/config";
import { withUserConfig } from "../utils/config-overlay.ts";

/**
 * 博主资料：头像 / 名称 / 简介 / 社交链接（侧栏 Profile 卡片、页脚、RSS 作者等消费）。
 * 类型见 src/types/config.ts。
 */
export const profileConfig: ProfileConfig = withUserConfig("profile", {
	avatar: "assets/images/demo-avatar.webp", // Relative to the /src directory. Relative to the /public directory if it starts with '/' — 换成你自己的头像图
	name: "星乃一歌",
	bio: "Leo/need ボーカル＆ギター 🎸 Mikuのように、歌でみんなをつなぎたい。",
	links: [
		{
			name: "Bilibili",
			icon: "simple-icons:bilibili",
			// 把下面的链接换成你自己的 B 站主页
			url: "https://space.bilibili.com",
		},
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/qiuyue520",
		},
	],
});
