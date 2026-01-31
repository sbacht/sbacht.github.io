import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { ExternalLink } from "lucide-react";
import DATA from "../data/resumeData";
import { translations } from "../data/translations";

export default function ProjectsPage({ language }) {
  const t = translations[language];
  return (
    <main className="max-w-5xl mx-auto px-6 pb-16">
      <section className="space-y-6">
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">{t.projects}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {DATA.projects.map((p, i) => (
                <div key={i} className="border rounded-xl p-4 border-slate-200 dark:border-slate-600">
                  <div className="font-medium">{p.name}</div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{p.description}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {p.tags?.map((tag, j) => (
                      <Badge key={j} variant="secondary" className="rounded-full">{tag}</Badge>
                    ))}
                  </div>
                  {p.link && (
                    <a href={p.link} target="_blank" rel="noreferrer" className="text-sm underline inline-flex items-center mt-2">
                      {t.view} <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
