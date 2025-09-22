import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User, Lock, LogOut, ChevronDown } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col dark:bg-gray-950">
        <div className="p-6 text-2xl font-bold border-b border-gray-800 dark:border-gray-700">
          Break Portal
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <a
            href="/dashboard"
            className="block rounded px-3 py-2 hover:bg-gray-800 dark:hover:bg-gray-700"
          >
            Dashboard
          </a>
        </nav>
        <div className="p-4">
          <Button asChild variant="secondary" className="w-full">
            <Link to="/login" className="text-secondary">
              Logout
            </Link>
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="h-16 flex items-center justify-between bg-white px-6 shadow dark:bg-gray-800">
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <div className="flex items-center gap-3">
            <ModeToggle />

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex items-center gap-1 cursor-pointer text-gray-800 dark:text-gray-200 font-medium">
                  Hello, Hammad
                  <ChevronDown className="h-4 w-4" />
                </div>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-64" align="end">
                <DropdownMenuLabel>
                  <div className="flex flex-col">
                    <span className="font-semibold">John Parker</span>
                    <span className="text-sm text-gray-500">demo@john.com</span>
                  </div>
                </DropdownMenuLabel>

                <DropdownMenuSeparator />

                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  Profile Settings
                </DropdownMenuItem>

                <DropdownMenuItem>
                  <Lock className="mr-2 h-4 w-4" />
                  Change Password
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem className="text-red-600 focus:text-red-600">
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        <div className="flex-1 p-6">{children}</div>
      </main>
    </div>
  );
}
