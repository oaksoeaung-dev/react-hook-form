"use client"
import {ClipboardList} from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel, SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem, useSidebar,
} from "@/components/ui/sidebar"
import {cn} from "@/lib/utils";
import {usePathname} from "next/navigation";
import Link from "next/link";

// Menu items.
const items = [
    {
        title: "First Form",
        url: "/first-form",
        icon: ClipboardList,
    }
]

export function AppSidebar()
{
    const pathName = usePathname();
    const {state} = useSidebar();
    return (
        <Sidebar collapsible={"icon"}>
            <SidebarHeader>
                <SidebarContent className={cn("text-2xl font-bold", state == "collapsed" ? "hidden" : "")}>
                    <Link href={"/"}>React Hook Form</Link>
                </SidebarContent>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild isActive={pathName == item.url}>
                                        <a href={item.url}>
                                            <item.icon/>
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
