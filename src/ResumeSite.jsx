import { useEffect, useState } from "react";
import { Button } from "./components/ui/button";
import { Sun, Moon, Globe } from "lucide-react";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import BlogPage from "./pages/BlogPage";
import { motion } from "framer-motion";
import DATA from "./data/resumeData";
import { translations } from "./data/translations";

export default function ResumeSite() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    return localStorage.getItem("theme") || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  });

  const [language, setLanguage] = useState(() => {
    if (typeof window === "undefined") return "en";
    return localStorage.getItem("language") || "en";
  });

  const [showThemeToggle, setShowThemeToggle] = useState(true);
  const [page, setPage] = useState("about");

  const t = translations[language];

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  useEffect(() => {
    let lastScrollY = 0;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowThemeToggle(false);
      } else if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setShowThemeToggle(true);
      }
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-transparent dark:to-transparent text-slate-900 dark:text-white">
      {/* Fixed theme toggle at top-right */}
      <div className={`fixed top-6 right-6 z-50 transition-opacity duration-300 flex gap-2 ${showThemeToggle ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        {/* Language toggle */}
        <Button
          onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}
          variant="ghost"
          className="rounded-2xl bg-white dark:bg-slate-800 shadow-md hover:shadow-lg"
        >
          <Globe className="h-4 w-4 mr-2"/>
          {language === 'en' ? 'DE' : 'EN'}
        </Button>

        {/* Theme toggle */}
        <Button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          variant="ghost"
          className="rounded-2xl bg-white dark:bg-slate-800 shadow-md hover:shadow-lg"
        >
          {theme === 'dark' ? <Sun className="h-4 w-4 mr-2"/> : <Moon className="h-4 w-4 mr-2"/>}
          {theme === 'dark' ? t.light : t.dark}
        </Button>
      </div>
      {/* Navigation */}
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button onClick={() => setPage('about')} className={`px-3 py-1 rounded ${page === 'about' ? 'bg-blue-600 text-white' : 'text-slate-600 dark:text-slate-300'}`}>
            {t.about}
          </button>
          <button onClick={() => setPage('projects')} className={`px-3 py-1 rounded ${page === 'projects' ? 'bg-blue-600 text-white' : 'text-slate-600 dark:text-slate-300'}`}>
            {t.projects}
          </button>
          <button onClick={() => setPage('blog')} className={`px-3 py-1 rounded ${page === 'blog' ? 'bg-blue-600 text-white' : 'text-slate-600 dark:text-slate-300'}`}>
            {t.blog}
          </button>
        </div>
        <div className="text-sm text-slate-500 dark:text-slate-400">{DATA.name}</div>
      </nav>

      {page === 'about' && <AboutPage language={language} />}

      {page === 'projects' && <ProjectsPage language={language} />}

      {page === 'blog' && <BlogPage language={language} />}

      <motion.footer 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 0.7 }}
        className="max-w-5xl mx-auto px-6 pb-12 text-center text-slate-400 text-sm"
      >
        <p>
          Serge Bacht, 2026
        </p>
      </motion.footer>
    </div>
  );
}
