import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";

export const NotFoundPage = () => (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm">
            <span className="text-2xl text-cp365-primary">404</span>
        </div>
        <h1 className="mt-6 text-3xl font-semibold text-cp365-textMain">
            Page not found
        </h1>
        <p className="mt-2 max-w-md text-sm text-cp365-textMuted">
            The page you’re looking for doesn’t exist or has been moved. Let’s
            get you back to the dashboard.
        </p>
        <Link to="/dashboard" className="mt-6">
            <Button>Return to Dashboard</Button>
        </Link>
    </div>
);
