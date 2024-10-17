import AuthFlowNavigationTop from "@/app/(pwa)/auth-flow-navigation-top";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function EmailVerificatinoPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <AuthFlowNavigationTop
        renderCTA={() => (
          <Button as={Link} color="default" size="sm" radius="sm" href="/login">
            Login
          </Button>
        )}
      />

      <main>
        <section className="pt-12 py-8 px-4 max-w-lg mx-auto"></section>
      </main>
    </div>
  );
}
