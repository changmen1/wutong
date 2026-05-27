"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Home, Menu, MessageCircle, PenTool, X } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "首页", href: "#top", icon: Home },
  { label: "工作台", href: "#services" },
  { label: "流程", href: "#process" },
  { label: "案例", href: "#results" },
  { label: "问答", href: "#faq" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <div className="mx-0 flex w-full max-w-[22rem] items-center justify-between gap-3 sm:mx-auto sm:max-w-5xl">
        <a
          href="#top"
          onClick={closeMenu}
          className="soft-card flex items-center gap-2 rounded-full px-2.5 py-2 text-zinc-900"
          aria-label="返回首页"
        >
          <Image
            src="/beta-avatar.png"
            alt="贝塔文创头像"
            width={34}
            height={34}
            className="size-8 rounded-full object-cover"
          />
          <span className="hidden pr-2 text-sm font-semibold sm:inline">
            贝塔文创
          </span>
        </a>

        <nav
          className={cn(
            "soft-card hidden items-center gap-1 rounded-full p-1.5 transition md:flex",
            scrolled && "shadow-[0_18px_70px_rgba(56,44,38,0.12)]",
          )}
        >
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  buttonVariants({ variant: "ghost", size: "sm" }),
                  "font-medium",
                )}
              >
                {Icon ? <Icon className="size-4" /> : null}
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href="#contact"
            className={buttonVariants({ variant: "glass", size: "md" })}
          >
            <MessageCircle className="size-4 text-rose-500" />
            来聊聊
          </a>
          <a
            href="#services"
            className={buttonVariants({ variant: "primary", size: "md" })}
          >
            <PenTool className="size-4" />
            看服务
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "关闭导航" : "打开导航"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="soft-card inline-flex size-11 items-center justify-center rounded-full text-zinc-900 md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <div className="soft-card mx-auto mt-3 flex max-w-[22rem] flex-col gap-1 rounded-3xl p-2 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="rounded-2xl px-4 py-3 text-sm font-medium text-zinc-700 transition hover:bg-zinc-950 hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={closeMenu}
            className="mt-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-zinc-950 px-4 py-3 text-sm font-semibold text-white"
          >
            <MessageCircle className="size-4" />
            预约沟通
          </a>
        </div>
      ) : null}
    </header>
  );
}
