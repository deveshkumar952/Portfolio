export const projectsData = [
    {
        id: 1,
        name: 'Apna Video Call',
        description: "Developed a full-stack video conferencing application using React, WebRTC, Node.js, and Socket.IO, enabling seamless real-time audio/video communication for 6+ concurrent users with low-latency signaling. Implemented secure JWT-based authentication and guest access workflows to ensure protected sessions and reliable API communication. Designed a responsive and interactive UI with Material UI, optimizing component state management to improve rendering performance and deliver a smooth cross-device user experience.",
        tools: ['Express', 'MongoDB', 'React','Node.js','Socket.io','WebRTC'],
        role: 'Full Stack Developer',
        code: 'https://github.com/deveshkumar952/Apna-Video-Call',
        demo: '',
    },
    {
        id: 2,
        name: 'ScanNShare',
        description: 'Developed ScanNShare, a dual-mode file transfer platform enabling secure and seamless cross-device sharing through both cloud-based and peer-to-peer (P2P) communication. Implemented QR-based device pairing with multiple fallback mechanisms, achieving near 100% pairing reliability across different devices and network conditions. Built WebRTC-powered encrypted file transfers supporting 100MB+ file sharing with low-latency communication and transfer speeds 15–17% faster than comparable P2P solutions. Designed automated session management using MongoDB TTL indexing and cloud cleanup workflows, reducing temporary storage overhead and improving security through auto-expiring sessions within 2 minutes. Optimized real-time signaling and event handling to maintain sub-100ms communication latency while delivering a responsive cross-platform user experience.',
        tools: ['HTML','TailWindCSS','Express', 'MongoDB', 'React','Node.js','Socket.io','WebRTC'],
        role: 'Full Stack Developer',
        code: 'https://github.com/deveshkumar952/Reverse_QR_Share',
        demo: '',
    },
    {
        id: 3,
        name: 'Wanderlust',
        description: 'Developed Wanderlust, a full-stack accommodation booking platform inspired by modern vacation rental systems, enabling users to explore, list, and manage properties through a responsive and interactive interface. Implemented secure authentication, property listing management, image uploads, booking workflows, and location-based search features to enhance user experience. Designed dynamic REST APIs and optimized database operations for efficient data handling and faster page interactions. Integrated responsive UI components and modern frontend practices to deliver a seamless cross-device browsing experience with scalable backend architecture.',
        tools: ['React', 'Bootstrap', 'JWT','Passport.js','RBAC','Node.js','Express.js','MongoDB','Cloudinary',],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
    },
    {
        id: 4,
        name: 'Plinko Game',
        description: "Developed a full-stack Provably Fair Plinko gaming application using React, Express, Prisma, and SQLite, featuring a deterministic physics engine and cryptographic commit-reveal protocol to guarantee transparent and tamper-proof gameplay. Implemented a custom XorShift32 pseudo-random number generator with SHA-256–based seed generation, enabling fully reproducible game outcomes and independent verification. Built a high-performance HTML5 Canvas interface supporting smooth 60 FPS animations with deterministic path interpolation. Designed a structured game state machine and secure backend validation workflows to maintain fairness, consistency, and reliable gameplay execution.",
        tools: ['React.js','HTML','Node.js','Express.js','SHA-256', 'Commit-Reveal Protocol', 'XorShift32 PRNG',],
        code: 'https://github.com/deveshkumar952/PlinkoGame',
        demo: '',
        role: 'Full Stack Developer',
    }
]

