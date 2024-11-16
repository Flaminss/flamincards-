import TopNavigationBar from "@/app/(marketing)/top-navigation";
import DeveloperAttributionLink from "./developer-attribution-link";
import { Link, Button } from "@nextui-org/react";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <TopNavigationBar />

      <main className="flex-grow">
        <section id="hero" className="pt-20 md:pt-24 pb-20 px-4">
          <div className="mx-auto max-w-lg sm:max-w-[900px] lg:max-w-2xl">
            <h1 className="mb-6 text-3xl font-semibold text-center text-white sm:text-5xl">
              Trade, <span className="text-success">Earn</span>, Vibe:
              <br />
              <span className="inline-block pt-2">
                Your Go-To Platform for{" "}
                <span className="text-primary">Gift Cards</span>, Crypto, and{" "}
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

      <DeveloperAttributionLink />
    </div>
  );
}
