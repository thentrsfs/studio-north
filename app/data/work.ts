interface Work {
    id: number;
    title: string;
    description: string;
    images: {
        id: number;
        title: string;
        src: string;
        alt: string;
        description: string;
    }[];
}

export const work: Work[] = [
    {
        id: 1,
        title: "Creative development",
        description: "We design and build digital experiences that feel fast, intuitive, and culturally relevant. From concept to launch, every detail is crafted to connect brands with modern audiences.",
        images: [
            {
                id: 1,
                title: "AETHER",
                src: "/work/image1.jpg",
                alt: "Creative development 1",
                description: "We design and build digital experiences that feel fast, intuitive, and culturally relevant. From concept to launch, every detail is crafted to connect brands with modern audiences."
            },
            {
                id: 2,
                title: "NOVA",
                src: "/work/image2.jpg",
                alt: "Creative development 2",
                description: "An experimental UI project exploring motion design, immersive layouts, and fluid page transitions."
            },
        ]
    },
    {
        id: 2,
        title: "BRAND EXPERIENCES",
        description: "We help brands express themselves online through clear design, strong motion systems, and thoughtful digital storytelling.",
        images: [
            {
                id: 1,
                title: "ATLAS",
                src: "/work/image3.jpg",
                alt: "Brand experiences 1",
                description: "Brand identity and website design for a modern creative studio." 
            },
            {
                id: 2,
                title: "Echo",
                src: "/work/image4.jpg",
                alt: "Brand experiences 2",
                description: "Digital experience for a culture-driven lifestyle brand."
            }
        ]
    },
    {
        id: 3,
        title: "FRONTEND ENGINEERING",
        description: "We build fast, scalable web experiences using modern technologies and thoughtful interaction design.",
        images: [
            {
                id: 1,
                title: "PORTFOLIO V2",
                src: "/work/image5.jpg",
                alt: "Frontend engineering 1",
                description: "A personal developer portfolio built with Next.js, TypeScript, and GSAP animations."
            },
            {
                id: 2,
                title: "INTERACTIVE LANDING",
                src: "/work/image6.jpg",
                alt: "Frontend engineering 2",
                description: "A high-performance landing page featuring scroll animations and advanced UI interactions."
            }
        ]
    }
]