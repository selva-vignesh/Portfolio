import { Github, Linkedin, Mail, MapPin, Phone, Twitter, Globe } from "lucide-react"

export const PERSONAL_INFO = {
  name: "Selva Vignesh",
  title: "Embedded WiFi Developer",
  description: "Specializing in low-level firmware development, WiFi protocol implementation, and Linux kernel optimization. Passionate about creating robust embedded systems that power the connected world.",
  email: "selvavignesh404@gmail.com",
  phone: "+91 6382 645824",
  location: "Chennai, India",
}

export const SKILLS = [
  {
    icon: "fab fa-linux",
    title: "Linux Kernel",
    description: "Device drivers, kernel modules, memory management, and system optimization",
    tags: ["C", "Assembly", "GDB"],
    color: "electric-blue"
  },
  {
    icon: "fas fa-wifi",
    title: "WiFi Protocols",
    description: "802.11 standards, MAC/PHY layers, mesh networking, and protocol optimization",
    tags: ["802.11ax", "WPA3", "Mesh"],
    color: "cyber-cyan"
  },
  {
    icon: "fas fa-microchip",
    title: "Embedded Systems",
    description: "ARM/RISC-V architectures, real-time systems, and hardware abstraction layers",
    tags: ["ARM", "RISC-V", "FreeRTOS"],
    color: "deep-purple"
  },
  {
    icon: "fas fa-code",
    title: "Firmware Development",
    description: "Bootloaders, HAL development, power management, and OTA updates",
    tags: ["U-Boot", "OpenWRT", "Yocto"],
    color: "green-500"
  },
  {
    icon: "fas fa-tools",
    title: "Development Tools",
    description: "Cross-compilation, debugging tools, version control, and CI/CD pipelines",
    tags: ["GCC", "JTAG", "Git"],
    color: "yellow-500"
  },
  {
    icon: "fas fa-shield-alt",
    title: "Security & Testing",
    description: "Secure boot, cryptography, vulnerability assessment, and automated testing",
    tags: ["TrustZone", "mbedTLS", "Fuzzing"],
    color: "red-500"
  }
]

export const PROJECTS = [
  {
    title: "Automatic Leg Before Wicket (LBW) Detection",
    description: "Automatic LBW detection using Image Processing and Computer vision techniques.",
    image: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
    tags: ["AI", "Python", "Computer Vision", "Image Processing"],
    duration: "2022 - 6 months",
    color: "electric-blue"
  },
  {
    title: "Speckle Denoising using SA-PRIDENet ",
    description: "Building the best neural network model for denoising the speckle noise in medical ultra sound images",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    tags: ["AI", "Neural Network", "Deep Learning", "Denoise"],
    duration: "2024 - 6 months",
    color: "deep-purple"
  },
  {
    title: "Low-Power Mesh Network",
    description: "Designed a custom mesh networking protocol for battery-powered devices with ultra-low power consumption. Achieved 5-year battery life with hourly data transmission.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    tags: ["RISC-V", "Zephyr OS", "Thread", "CoAP"],
    duration: "2023 - 4 months",
    color: "cyber-cyan"
  },
  {
    title: "Network Security Appliance",
    description: "Developed a high-throughput network security appliance with deep packet inspection, intrusion detection, and real-time threat analysis capabilities.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    tags: ["DPDK", "eBPF", "Suricata", "P4"],
    duration: "2022 - 10 months",
    color: "green-500"
  }
]

export const EXPERIENCES = [
  {
    title: "Firmware Development Engineer",
    company: "Qualcomm Technologies Pvt. Ltd",
    period: "2025 - Present",
    description: "Development of next-generation WiFi 6E and 7 firmware solutions.",
    achievements: [
      "Architected high-performance WiFi driver supporting 10Gbps throughput",
      "Implemented advanced beamforming algorithms for improved signal quality",
      "Reduced firmware boot time by 60% through optimization",
      "Led security audit and implemented WPA3-Enterprise features"
    ],
    tags: ["WiFi 6E/7", "Linux Kernel", "Team Lead"],
    color: "electric-blue"
  },
  {
    title: "Embedded Software Engineer",
    company: "Maxlinear Technologies",
    period: "2022 - 2025",
    description: "Developed IoT gateway solutions and mesh networking protocols for smart city applications. Specialized in ultra-low power embedded systems and wireless communication.",
    achievements: [
      "Built custom bootloader supporting secure OTA updates",
      "Implemented Thread and Zigbee protocol stacks",
      "Designed power management system extending battery life 5x",
      "Created automated testing framework reducing QA time by 50%"
    ],
    tags: ["IoT", "Thread/Zigbee", "Low Power"],
    color: "cyber-cyan"
  },
  {
    title: "Software Engineer Trainee",
    company: "Qubercomm Technologies",
    period: "2021 - 2022",
    description: "Started career focusing on ARM Cortex-M microcontrollers and real-time systems. Contributed to automotive and industrial control applications.",
    achievements: [
      "Developed CAN bus communication protocols",
      "Implemented safety-critical automotive firmware (ISO 26262)",
      "Created device drivers for various sensor interfaces",
      "Optimized real-time task scheduling for FreeRTOS"
    ],
    tags: ["ARM Cortex-M", "FreeRTOS", "Automotive"],
    color: "deep-purple"
  }
]

export const SOCIAL_LINKS = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Globe, href: "#", label: "Website" },
]

export const CONTACT_INFO = [
  { icon: Mail, label: "Email", value: PERSONAL_INFO.email, color: "electric-blue" },
  { icon: Phone, label: "Phone", value: PERSONAL_INFO.phone, color: "cyber-cyan" },
  { icon: MapPin, label: "Location", value: PERSONAL_INFO.location, color: "deep-purple" },
]
