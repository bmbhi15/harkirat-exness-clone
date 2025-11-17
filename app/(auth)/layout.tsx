import Image from "next/image";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="auth-layout">
      <section className="auth-left-section scrollbar-hide-default">
        <Link href="/" className="auth-logo">
          <Image
            className="h-8 w-auto"
            alt="Exness logo"
            src="/assets/icons/logo.svg"
            width={140}
            height={32}
          />
        </Link>
        <div className="pb-6 lg:pb-8 flex-1">{children}</div>
      </section>
      <section className="auth-right-section h-screen justify-between">
        <div className="z-10 relative lg:mt-4 lg:mb-16">
          <blockquote className="auth-blockquote">
            I'm so impressed by this Exness Clone. This might be the best out
            there !!!. All the features are very cool and production level
          </blockquote>
          <div className="flex flex-row justify-between items-center">
            <div>
              <cite className="auth-testimonial-author">
                -- Harkirat Singh.
              </cite>
              <p className="max-md:text-xs text-gray-500">Youtuber</p>
            </div>
            <div className="flex flex-row space-y-2 mx-20">
              {[1, 2, 3, 4, 5].map((item) => (
                <Image
                  key={item}
                  alt="star"
                  width={20}
                  height={20}
                  src="/assets/icons/star.svg"
                  className="w-5 h-5"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="relative flex-1">
          <Image
            src="/assets/images/dashboard.png"
            alt="dashboard-preview"
            width={1440}
            height={1150}
            className="auth-dashboard-preview absolute top-0"
          />
        </div>
      </section>
    </main>
  );
}
