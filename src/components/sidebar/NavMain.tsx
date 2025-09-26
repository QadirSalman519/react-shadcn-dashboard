"use client"

import { ChevronRight, Home, Settings, type LucideIcon } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: LucideIcon
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
}) {
  return (
<SidebarGroup>
  <SidebarGroupLabel>Platform</SidebarGroupLabel>
  <SidebarMenu>
    {/* 👇 Normal item (no submenu) */}
    <SidebarMenuItem>
      <SidebarMenuButton asChild>
        <a href="/dashboard">
          <Home className="mr-2 h-4 w-4" />
          <span>Dashboard</span>
        </a>
      </SidebarMenuButton>
    </SidebarMenuItem>

    {/* 👇 Collapsible with submenu */}
    {items.map((item) => (
      <Collapsible
        key={item.title}
        asChild
        defaultOpen={item.isActive}
        className="group/collapsible"
      >
        <SidebarMenuItem>
          <CollapsibleTrigger asChild>
            <SidebarMenuButton tooltip={item.title}>
              {item.icon && <item.icon />}
              <span>{item.title}</span>
              <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
            </SidebarMenuButton>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <SidebarMenuSub>
              {item.items?.map((subItem) => (
                <SidebarMenuSubItem key={subItem.title}>
                  <SidebarMenuSubButton asChild>
                    <a href={subItem.url}>
                      <span>{subItem.title}</span>
                    </a>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              ))}
            </SidebarMenuSub>
          </CollapsibleContent>
        </SidebarMenuItem>
      </Collapsible>
    ))}

    {/* 👇 Another normal item (no submenu) */}
    <SidebarMenuItem>
      <SidebarMenuButton asChild>
        <a href="/settings">
          <Settings className="mr-2 h-4 w-4" />
          <span>Settings</span>
        </a>
      </SidebarMenuButton>
    </SidebarMenuItem>
  </SidebarMenu>
</SidebarGroup>

  )
}
