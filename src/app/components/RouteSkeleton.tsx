export function RouteSkeleton() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <div className="mx-auto w-[min(1240px,calc(100%-48px))] px-0 py-10">
        <div className="animate-pulse">
          <div className="mb-10 h-14 w-full rounded-2xl bg-white/6" />
          <div className="mb-6 h-10 w-40 rounded-xl bg-white/7" />
          <div className="mb-4 h-16 w-[min(720px,90%)] rounded-2xl bg-white/8" />
          <div className="mb-12 h-6 w-[min(860px,100%)] rounded-xl bg-white/6" />

          <div className="mb-12 grid gap-6 md:grid-cols-3">
            <div className="h-44 rounded-[28px] bg-white/5" />
            <div className="h-44 rounded-[28px] bg-white/5" />
            <div className="h-44 rounded-[28px] bg-white/5" />
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
            <div className="h-[420px] rounded-[32px] bg-white/4" />
            <div className="space-y-6">
              <div className="h-48 rounded-[28px] bg-white/5" />
              <div className="h-40 rounded-[28px] bg-white/5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
