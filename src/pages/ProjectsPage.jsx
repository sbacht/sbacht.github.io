import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Building2, Calendar, Briefcase, Target, ListChecks, Code2 } from "lucide-react";
import { Badge } from "../components/ui/badge";
import { translations, getTranslatedData } from "../data/translations";

function ProjectCard({ project, t }) {
  const [open, setOpen] = useState(false);
  const isSabbatical = project.type === "sabbatical";
  const hasStack = project.stack && project.stack.length > 0;

  return (
    <div className="relative pl-10 pb-5">
      {/* Vertical timeline line */}
      <div className="absolute left-3 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-700" />
      {/* Timeline dot */}
      <div
        className={`absolute left-[7px] top-5 w-3 h-3 rounded-full border-2 ${
          isSabbatical
            ? "bg-amber-400 border-amber-500 dark:bg-amber-500 dark:border-amber-400"
            : "bg-blue-500 border-blue-600 dark:bg-blue-400 dark:border-blue-300"
        }`}
      />

      <div
        className={`rounded-2xl border shadow-sm overflow-hidden transition-shadow hover:shadow-md ${
          isSabbatical
            ? "border-amber-200 dark:border-amber-800/40 bg-amber-50/40 dark:bg-amber-950/10"
            : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900"
        }`}
      >
        {/* ── Header (always visible) ── */}
        <button
          onClick={() => setOpen(!open)}
          className="w-full text-left px-5 py-4 flex items-start justify-between gap-3 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors"
        >
          <div className="flex-1 min-w-0">
            {/* Period + Company */}
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span
                className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                  isSabbatical
                    ? "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400"
                    : "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400"
                }`}
              >
                <Calendar className="w-3 h-3" />
                {project.period}
              </span>
              {project.company && (
                <span className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-full">
                  <Building2 className="w-3 h-3 flex-shrink-0" />
                  <span className="truncate max-w-[220px]">{project.company}</span>
                </span>
              )}
            </div>

            {/* Title */}
            <div className="font-semibold text-[15px] text-slate-900 dark:text-slate-100 leading-snug">
              {project.title}
            </div>

            {/* Role */}
            {project.role && (
              <div className="flex items-center gap-1.5 mt-1 text-sm text-slate-500 dark:text-slate-400">
                <Briefcase className="w-3.5 h-3.5 flex-shrink-0" />
                {project.role}
              </div>
            )}
          </div>

          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="flex-shrink-0 mt-1"
          >
            <ChevronDown className="h-4 w-4 text-slate-400" />
          </motion.div>
        </button>

        {/* ── Expandable body ── */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-5 pb-5 pt-3 space-y-4 border-t border-slate-100 dark:border-slate-800">

                {/* Project Goal */}
                {project.goal && (
                  <div>
                    <h4 className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1.5">
                      <Target className="w-3.5 h-3.5" />
                      {t.projectGoal}
                    </h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {project.goal}
                    </p>
                  </div>
                )}

                {/* Tasks / Focus Areas */}
                {project.tasks && project.tasks.length > 0 && (
                  <div>
                    <h4 className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1.5">
                      <ListChecks className="w-3.5 h-3.5" />
                      {isSabbatical ? t.focusAreas : t.mainTasks}
                    </h4>
                    <ul className="space-y-1.5">
                      {project.tasks.map((task, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                          <span
                            className={`mt-[7px] w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                              isSabbatical ? "bg-amber-400" : "bg-blue-400"
                            }`}
                          />
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technology Stack */}
                {hasStack && (
                  <div>
                    <h4 className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
                      <Code2 className="w-3.5 h-3.5" />
                      {t.techStack}
                    </h4>
                    <div className="space-y-2">
                      {project.stack.map(({ category, items }) => (
                        <div key={category} className="flex flex-wrap items-start gap-x-2 gap-y-1">
                          <span className="text-xs font-medium text-slate-500 dark:text-slate-400 w-full sm:w-36 shrink-0 pt-0.5">
                            {category}:
                          </span>
                          <div className="flex flex-wrap gap-1">
                            {items.map((item, j) => (
                              <Badge
                                key={j}
                                variant="secondary"
                                className="rounded-full text-xs px-2 py-0.5 font-normal"
                              >
                                {item}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function ProjectsPage({ language }) {
  const t = translations[language];
  const data = getTranslatedData(language);

  return (
    <main className="max-w-4xl mx-auto px-6 pb-16">
      <section>
        <h2 className="text-2xl font-bold mb-8 text-slate-900 dark:text-slate-100">
          {t.projects}
        </h2>
        <div className="relative">
          {data.projectsHistory.map((project, i) => (
            <ProjectCard key={i} project={project} t={t} />
          ))}
          {/* Timeline end cap */}
          <div className="relative pl-10">
            <div className="absolute left-3 top-0 h-3 w-px bg-slate-200 dark:bg-slate-700" />
            <div className="absolute left-[9px] top-2 w-2 h-2 rounded-full bg-slate-200 dark:bg-slate-700" />
          </div>
        </div>
      </section>
    </main>
  );
}
