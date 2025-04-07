"use client";

import { SidebarContent } from "@/components/ui/sidebar";

import {
  BarChart3,
  Bell,
  Calendar,
  Citrus,
  Code,
  FileCode2,
  Home,
  Info,
  LayoutDashboard,
  LogOut,
  Menu,
  MessageSquare,
  Moon,
  Settings,
  Sun,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

import { NotificationsList } from "@/components/notifications/notifications-list";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Sidebar,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import type { RootState } from "@/lib/redux/store";
import { toggleTheme } from "@/lib/redux/themeSlice";

export function AppSidebar() {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.mode);
  const notifications = useSelector(
    (state: RootState) => state.notifications.notifications
  );
  const unreadCount = notifications.filter((n) => !n.read).length;

  const mainNavItems = [
    {
      title: "Dashboard",
      href: "/app/dashboard",
      icon: Home,
    },
    {
      title: "Projects",
      href: "/app/projects",
      icon: LayoutDashboard,
    },
    {
      title: "Calendar",
      href: "/app/calendar",
      icon: Calendar,
    },
    {
      title: "Chat",
      href: "/app/chat",
      icon: MessageSquare,
    },
    {
      title: "Analytics",
      href: "/app/analytics",
      icon: BarChart3,
    },
    {
      title: "Team",
      href: "/app/team",
      icon: Users,
    },
    {
      title: "Email templates",
      href: "/app/email-templates",
      icon: Code,
    },
    {
      title: "Components",
      href: "/app/components",
      icon: FileCode2,
    },
    {
      title: "Settings",
      href: "/app/settings",
      icon: Settings,
    },
  ];

  const sidebarContentSection = (
    <>
      <SidebarHeader>
        <Link href="/">
          <div className="flex items-center px-6 py-4 w-full justify-center">
            <Citrus
              className="h-8 w-8 text-primary rotate-45"
              strokeWidth={"1.5"}
            />
            <div className="flex flex-col">
              <span className="font-light text-3xl text-primary">Lemonade</span>
            </div>
          </div>
        </Link>

        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <Avatar className="h-10 w-10">
              <AvatarImage
                src="/placeholder.svg?height=32&width=32"
                alt="Alesha Hyocinth"
              />
              <AvatarFallback>AH</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm font-light">Alesha Hyocinth</span>
              <span className="text-xs text-sidebar-foreground/70">
                Project Manager
              </span>
            </div>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent className="px-4">
        <SidebarGroup className="py-4">
          <SidebarGroupLabel className="px-4 py-2 font-light">
            Main Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavItems.map((item) => (
                <SidebarMenuItem key={item.href} className="py-1">
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.href}
                    tooltip={item.title}
                    className="rounded-full px-4 py-3 font-light"
                  >
                    <Link href={item.href}>
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="flex items-center justify-center gap-2 w-full">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-xl relative"
              >
                <Bell className="h-5 w-5" />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                    {unreadCount}
                  </span>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="p-0">
              <NotificationsList />
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            variant="ghost"
            size="icon"
            className="relative h-10 w-10 rounded-full"
            onClick={() => dispatch(toggleTheme())}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-xl"
              >
                <Info className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="rounded-xl">
              <DropdownMenuItem asChild>
                <Link href="/app/help" className="rounded-lg px-4 py-2">
                  Help
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/app/documentation" className="rounded-lg px-4 py-2">
                  Documentation
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/app/about" className="rounded-lg px-4 py-2">
                  About
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 text-destructive"
              >
                <LogOut className="text-destructive w-5 h-5" />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. Are you sure you want to log
                  out?
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>
                  <Link href="/signin">Continue</Link>
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
        <div className="px-6 py-4 text-xs text-sidebar-foreground/70">
          <p>© 2024 Lemonade</p>
          <p>v1.0.0</p>
        </div>
      </SidebarFooter>
    </>
  );

  return (
    <>
      {/* Mobile Menu */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 h-16 bg-background border-b">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-[300px]">
            {sidebarContentSection}
          </SheetContent>
        </Sheet>
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-xl relative"
              >
                <Bell className="h-5 w-5" />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                    {unreadCount}
                  </span>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-screen max-w-[100vw] md:max-w-[380px]"
            >
              <NotificationsList />
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            variant="ghost"
            size="icon"
            className="relative h-10 w-10 rounded-full"
            onClick={() => dispatch(toggleTheme())}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
          </Button>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <Sidebar variant="floating">
          {sidebarContentSection}
          <SidebarRail />
        </Sidebar>
      </div>
    </>
  );
}
