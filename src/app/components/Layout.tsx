import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import { NavigationBar } from "./NavigationBar";
import { FooterNew } from "./FooterNew";
import { ScrollToTop } from "./ScrollToTop";
import { PageTransition } from "./PageTransition";
import { LayoutSEO } from "./LayoutSEO";

export function Layout() {
  const { pathname } = useLocation();
  const isDevelopersRoute = pathname.startsWith("/developers");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
      <LayoutSEO />
      {!isDevelopersRoute && <NavigationBar />}

      <main>
        {isDevelopersRoute ? (
          <Outlet />
        ) : (
          <PageTransition>
            <Outlet />
          </PageTransition>
        )}
      </main>

      {!isDevelopersRoute && <FooterNew />}
      <ScrollToTop />
    </div>
  );
}
