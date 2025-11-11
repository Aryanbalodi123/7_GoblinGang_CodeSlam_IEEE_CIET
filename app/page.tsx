import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black font-sans p-6">
      <main className="w-full max-w-4xl">
        {/* Single framed card that contains all content (one view) */}
        <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl ring-1 ring-zinc-100 dark:ring-zinc-800 overflow-hidden">
          <div className="flex flex-col md:flex-row items-stretch">
            {/* Left: logo, title and two paragraphs (stacked) */}
            <div className="flex-1 p-10 sm:p-12">
              <Image
                className="dark:invert mb-6"
                src="/next.svg"
                alt="Next.js logo"
                width={110}
                height={28}
                priority
              />

              <h1 className="text-2xl sm:text-3xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
                To get started, edit the page.tsx file.
              </h1>

              {/* Two paragraphs that sit together on the left column */}
              <div className="text-base leading-7 text-zinc-600 dark:text-zinc-400 max-w-2xl space-y-4">
                <p>
                  Looking for a starting point or more instructions? Head over to{' '}
                  <a
                    href="https://vercel.com/templates?framework=next.js"
                    className="font-medium text-zinc-900 dark:text-zinc-50 underline"
                  >
                    Templates
                  </a>{' '}
                  or the{' '}
                  <a
                    href="https://nextjs.org/learn"
                    className="font-medium text-zinc-900 dark:text-zinc-50 underline"
                  >
                    Learning
                  </a>{' '}
                  center.
                </p>

                <p>
                  This small demo provides a single framed card layout with a
                  compact, modern navigation on the right. The navigation is
                  intentionally transparent and integrated into the card so the
                  whole view reads as one clean surface.
                </p>
              </div>
            </div>

            {/* Right: navigation component (transparent, modern) */}
            <nav
              aria-label="Quick actions"
              className="w-full md:w-56 p-6 sm:p-8 bg-transparent flex flex-col gap-3 items-stretch"
            >
              <a
                className="flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-medium text-zinc-900/90 dark:text-zinc-50/90 hover:bg-zinc-100/60 dark:hover:bg-zinc-800/60 transition backdrop-blur-sm"
                href="https://vercel.com/new"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="dark:invert"
                  src="/vercel.svg"
                  alt="Vercel logomark"
                  width={16}
                  height={16}
                />
                Deploy Now
              </a>

              <a
                className="flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-medium text-zinc-900/85 dark:text-zinc-50/90 hover:bg-zinc-100/60 dark:hover:bg-zinc-800/60 transition"
                href="https://nextjs.org/docs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Documentation
              </a>

              <div className="mt-3 text-xs text-zinc-500 dark:text-zinc-400 text-center">
                Navigation has no separate background — it sits inside the card for a
                single-view, modern layout.
              </div>
            </nav>
          </div>
        </div>
      </main>
    </div>
  );
}
