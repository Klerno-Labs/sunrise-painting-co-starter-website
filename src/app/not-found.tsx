import Link from "next/link";
import Button from "@/components/ui/Button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
      <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
        <span className="text-4xl font-bold text-secondary">404</span>
      </div>
      <h1 className="text-4xl font-bold text-primary mb-4">Page Not Found</h1>
      <p className="text-text-body text-lg mb-8 max-w-md">
        Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been removed or renamed.
      </p>
      <Button variant="primary" asChild>
        <Link href="/">
          <Home className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
      </Button>
    </div>
  );
}