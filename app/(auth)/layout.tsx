import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="auth-layout">
      <div className="auth-left-section">
        <Image
          className="auth-logo"
          alt="Exness logo"
          src="/assets/icons/logo.svg"
          width={100}
          height={100}
        />
        {children}
      </div>
      <div className="auth-right-section h-screen justify-between">
        <div>
          <div className="auth-blockquote w-4/5">
            I'm so impressed by this Exness Clone. This might be the best out
            there !!!. All the features are very cool and production level
          </div>
          <div className="flex flex-row justify-between">
            <div>
              <p className="auth-testimonial-author">-- Harkirat Singh.</p>
              <p>Youtuber</p>
            </div>
            <div className="flex flex-row space-y-2 mx-20">
              <Image
                alt="star"
                width={24}
                height={24}
                src="/assets/icons/star.svg"
              />
              <Image
                alt="star"
                width={24}
                height={24}
                src="/assets/icons/star.svg"
              />
              <Image
                alt="star"
                width={24}
                height={24}
                src="/assets/icons/star.svg"
              />
              <Image
                alt="star"
                width={24}
                height={24}
                src="/assets/icons/star.svg"
              />
              <Image
                alt="star"
                width={24}
                height={24}
                src="/assets/icons/star.svg"
              />
              <Image
                alt="star"
                className="hidden"
                width={24}
                height={24}
                src="/assets/icons/star.svg"
              />
            </div>
          </div>
        </div>
        <div className="auth-dashboard-preview relative">
          <Image
            src="/assets/images/dashboard-preview.png"
            alt="dashboard-preview"
            width={1200}
            height={1500}
            className="absolute"
          />
        </div>
      </div>
    </main>
  );
}
