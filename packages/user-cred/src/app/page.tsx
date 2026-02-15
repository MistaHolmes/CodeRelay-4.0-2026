"use client";

import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

/* ─── Data ─────────────────────────────────────── */

const sections = [
  {
    title: "Citizen Users",
    icon: "👤",
    color: "blue",
    users: [
      { label: "USER-1", name: "Rihan Kumar", email: "rihankumar2004@gmail.com", password: "123123123" },
    ],
  },
  {
    title: "Staff Accounts",
    icon: "🛡️",
    color: "violet",
    users: [
      { label: "Agent", name: "Ankita", email: "ankita@gmail.com", password: "123123123" },
      { label: "Municipal Admin", name: "Sourab", email: "sourab@gmail.com", password: "123123123" },
      { label: "State Admin", name: "Pani", email: "pani@gmail.com", password: "123123123" },
    ],
  },
];

/* ─── Copy button ──────────────────────────────── */

function CopyBtn({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(text).catch(() => { });
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      onClick={copy}
      className={`ml-3 shrink-0 rounded-lg px-3 py-1.5 text-xs font-medium transition-all cursor-pointer border
        ${copied
          ? "bg-green-100 text-green-700 border-green-300 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800"
          : "bg-slate-100 text-slate-500 border-slate-200 hover:bg-slate-200 hover:text-slate-700 dark:bg-slate-700 dark:border-slate-600 dark:text-slate-400 dark:hover:bg-slate-600 dark:hover:text-slate-200"
        }`}
    >
      {copied ? "✓ Copied" : "Copy"}
    </button>
  );
}

/* ─── Credential row ───────────────────────────── */

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-slate-50 border border-slate-100 px-4 py-3 dark:bg-slate-800/50 dark:border-slate-700">
      <div className="min-w-0">
        <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">{label}</p>
        <p className="text-sm font-mono text-slate-700 truncate dark:text-slate-300">{value}</p>
      </div>
      <CopyBtn text={value} />
    </div>
  );
}

/* ─── Card ─────────────────────────────────────── */

function Card({
  user,
  accentFrom,
  accentTo,
}: {
  user: { label: string; name: string; email: string; password: string };
  accentFrom: string;
  accentTo: string;
}) {
  return (
    <div className="group relative bg-white/70 backdrop-blur-sm rounded-2xl border border-slate-200 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/60 dark:bg-slate-800/40 dark:border-slate-700 dark:hover:shadow-slate-900/50">
      {/* accent top bar */}
      <div className={`absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r ${accentFrom} ${accentTo}`} />

      <div className="flex items-center gap-3 mb-5">
        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${accentFrom} ${accentTo} flex items-center justify-center text-white font-bold text-sm shadow-md`}>
          {user.name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-slate-800 leading-tight dark:text-slate-100">{user.name}</p>
          <p className="text-xs text-slate-400 font-medium dark:text-slate-500">{user.label}</p>
        </div>
      </div>

      <div className="space-y-2.5">
        <Field label="Email" value={user.email} />
        <Field label="Password" value={user.password} />
      </div>
    </div>
  );
}

/* ─── Page ─────────────────────────────────────── */

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 dark:from-slate-950 dark:to-slate-900 transition-colors duration-500">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/60 dark:border-slate-800/60">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Link
              href="https://iit-bbsr-swaraj-user-fe.adityahota.online/"
              className="h-16 w-auto flex items-center justify-center hover:opacity-90 transition-opacity"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://swarajdesk.adityahota.online/logo.png"
                alt="SwarajDesk Logo"
                className="h-full w-auto object-contain"
              />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="https://iit-bbsr-swaraj-user-fe.adityahota.online/"
              className="hidden sm:inline-flex text-xs font-medium text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full dark:bg-slate-800 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              SwarajDesk:Website
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="text-center pt-14 pb-10 px-6 animate-fade-in-up">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
          Demo Credentials
        </h1>

        {/* Warning Badge */}
        <div className="inline-flex items-center gap-3 bg-amber-50/80 backdrop-blur-sm border border-amber-200 rounded-full pl-2 pr-4 py-1.5 dark:bg-amber-900/20 dark:border-amber-800/30">
          <span className="bg-amber-100 text-amber-600 text-xs font-bold px-2 py-0.5 rounded dark:bg-amber-900/40 dark:text-amber-400">WARNING</span>
          <span className="text-xs font-medium text-amber-800 dark:text-amber-200">
            For development & demo purposes only. Not recommended in production.
          </span>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-6 pb-20">
        {sections.map((section) => {
          const isBlue = section.color === "blue";
          const from = isBlue ? "from-blue-500" : "from-violet-500";
          const to = isBlue ? "to-blue-700" : "to-purple-700";

          return (
            <section key={section.title} className="mb-12">
              <div className="flex items-center justify-center gap-3 mb-5">
                <span className="text-xl filter drop-shadow-sm">{section.icon}</span>
                <h2 className="text-lg font-bold text-slate-800 dark:text-slate-200">{section.title}</h2>
              </div>

              <div className={`grid gap-5 ${section.users.length === 1
                ? "max-w-xl mx-auto grid-cols-1"
                : section.users.length === 2
                  ? "grid-cols-1 md:grid-cols-2"
                  : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                }`}>
                {section.users.map((u) => (
                  <Card key={u.email} user={u} accentFrom={from} accentTo={to} />
                ))}
              </div>
            </section>
          );
        })}
      </main>
    </div>
  );
}
