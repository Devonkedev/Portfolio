import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";

const NotFound = () => (
  <PageLayout title="Not found">
    <div className="container-page pt-40 pb-24 graph-paper min-h-[70vh]">
      <p className="eyebrow mb-4">Error 404</p>
      <h1 className="font-serif text-6xl sm:text-7xl text-foreground">404 is not prime.</h1>
      <p className="mt-4 text-lg text-muted-foreground">It's 2² × 101, and this page doesn't exist.</p>
      <Link
        to="/"
        className="mt-8 inline-flex rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium hover:opacity-90"
      >
        Back to home
      </Link>
    </div>
  </PageLayout>
);

export default NotFound;
