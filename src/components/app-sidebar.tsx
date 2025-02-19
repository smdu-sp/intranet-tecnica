"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Wrench ,
  Command,
  Frame,
  GalleryVerticalEnd,
  Home,
  Map,
  Phone,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },  
  navMain: [
    {
      title: "Home",
      url: "#",
      icon: Home,
      isActive: true,    
    },
    {
      title: "Contatos",
      url: "#",
      icon: Phone,
      items: [
        {
          title: "ATIC",
          url: "/contatos-atic",
        },
        {
          title: "Coordenadores",
          url: "#",
        },
        {
          title: "Prédio Martinelli",
          url: "#",
        },
        {
          title: "Manutenção CAF/DSUP",
          url:"#",          
        }
      ],
    },
    {
      title: "Ferramentas de Segurança",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Computadores ociosos",
          url: "#",
        },
        {
          title: "Usuários Inativos",
          url: "#",
        },
        {
          title: "Usuários bloqueados",
          url: "#",
        },
        {
          title: "Usuários exonerados/transferi",
          url: "#",
        },
      ],
    },
    {
      title: "Suporte",
      url: "#",
      icon: Wrench,
      items: [
        {
          title: "Informática - GLPI",
          url: "#",
        },
        {
          title: "Manutenção CAF/DSUP",
          url: "http://dsup.smul.pmsp",
        },
       
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
