import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { translations } from "../data/translations";

const SAMPLE_POSTS = [
  {
    title: "Introducing SmartYachtMonitor",
    date: "2025-01-10",
    excerpt: "A short walkthrough of the SmartYachtMonitor MLOps demo project and deployment choices.",
  },
  {
    title: "MLOps: Monitoring Models in Production",
    date: "2024-11-02",
    excerpt: "Notes on metrics, alerts, and logging for models running in Kubernetes.",
  },
];

export default function BlogPage({ language }) {
  const t = translations[language];
  return (
    <main className="max-w-5xl mx-auto px-6 pb-16">
      <section className="space-y-6">
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">{t.blog}</h2>
            <div className="space-y-4">
              {SAMPLE_POSTS.map((p, i) => (
                <article key={i} className="border rounded-lg p-4 bg-white/50 dark:bg-slate-800/50">
                  <div className="text-sm text-slate-500 dark:text-slate-400">{p.date}</div>
                  <h3 className="font-medium mt-1">{p.title}</h3>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mt-2">{p.excerpt}</p>
                </article>
              ))}
              {!SAMPLE_POSTS.length && (
                <div className="text-sm text-slate-500 dark:text-slate-400">No posts yet.</div>
              )}
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
