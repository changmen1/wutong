import Image from "next/image";
import { Mail, MapPin, MessageCircle } from "lucide-react";

export function SiteFooter() {
  return (
    <footer id="contact" className="px-4 pb-12 pt-20 sm:px-6 lg:px-8">
      <div className="soft-card mx-0 w-full max-w-[22rem] rounded-[2rem] p-6 sm:mx-auto sm:max-w-5xl sm:p-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/beta-avatar.png"
                alt="贝塔文创头像"
                width={48}
                height={48}
                className="size-12 rounded-full object-cover"
              />
              <div>
                <div className="font-semibold text-zinc-950">贝塔文创</div>
                <div className="mt-1 text-xs text-zinc-500">
                  Beta Creative Studio
                </div>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-7 text-zinc-600">
              专注内容创作思路辅导、方法指导、资料阅读辅助、结构建议与专业表达优化。坚持合规边界，不替代创作、不承诺发布或通过。
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold text-zinc-950">服务</h3>
              <ul className="mt-4 space-y-3 text-sm text-zinc-600">
                <li>内容创作思路辅导</li>
                <li>资料结构整理</li>
                <li>表达语气优化</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-zinc-950">场景</h3>
              <ul className="mt-4 space-y-3 text-sm text-zinc-600">
                <li>品牌内容</li>
                <li>个人 IP</li>
                <li>知识内容</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-zinc-950">联系</h3>
              <ul className="mt-4 space-y-3 text-sm text-zinc-600">
                <li className="flex items-center gap-2">
                  <MessageCircle className="size-4 text-rose-500" />
                  右侧扫码咨询
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="size-4 text-rose-500" />
                  hello@example.com
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="size-4 text-rose-500" />
                  线上远程协作
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-zinc-200/70 pt-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 贝塔文创. All rights reserved.</p>
          <p>合规创作支持服务，不提供替代创作、抄袭、买卖内容等行为。</p>
        </div>
      </div>
    </footer>
  );
}
