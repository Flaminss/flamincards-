import NavigationBarTop from "@app/navigation-bar-top";
import { Link, Button } from "@nextui-org/react";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <NavigationBarTop />

      <main className="flex-grow">
        <section id="hero" className="pt-20 md:pt-28 pb-20 px-4">
          <div className="mx-auto max-w-lg sm:max-w-[900px] lg:max-w-2xl">
            <h1 className="mb-6 text-3xl font-semibold text-center text-white sm:text-5xl">
              Trade, <span className="text-success">Earn</span>, Vibe:
              <br />
              <span className="inline-block pt-2">
                Your Go-To Platform for{" "}
                <span className="text-primary">Giftcards</span>, Crypto, and{" "}
                <span className="text-warning">Music</span>!
              </span>
            </h1>
            <p className="mx-auto mb-9 max-w-[500px] md:text-lg text-center">
              Trade, earn rewards, and immerse yourself in a vibrant digital
              marketplace tailored to your interests.
            </p>
            <Button
              as={Link}
              color="primary"
              variant="solid"
              size="lg"
              href="/register"
              radius="md"
              className="block w-fit h-auto py-3 mx-auto"
            >
              Register with us Today!
            </Button>
          </div>
        </section>
      </main>

      <footer className="py-4 px-4 grid place-content-center">
        <Link
          isExternal
          href="https://t.me/everurstruly"
          title="Development team portfolio website"
          className="text-default-600 font-mono font-medium flex items-center gap-x-2"
        >
          Developed by
          <span className="text-primary font-semibold">YoursTruly</span>
        </Link>
      </footer>
    </div>
  );
}
