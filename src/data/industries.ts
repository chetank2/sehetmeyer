export interface Industry {
    name: string;
    icon: string;
    description: string;
}

export const industries: Industry[] = [
    {
        name: 'SaaS & Product',
        icon: '☁️',
        description: 'Building scalable products and engineering teams for software-first companies.',
    },
    {
        name: 'Fintech & Banking',
        icon: '💳',
        description: 'Secure and compliant technology solutions for the financial sector.',
    },
    {
        name: 'Logistics & Supply Chain',
        icon: '🚚',
        description: 'Optimizing delivery and tracking with real-time software systems.',
    },
    {
        name: 'Healthcare',
        icon: '🏥',
        description: 'HIPAA-compliant platforms and digital health engineering.',
    },
    {
        name: 'Retail & E-commerce',
        icon: '🛒',
        description: 'Omnichannel solutions and scalable commerce platforms.',
    },
    {
        name: 'Real Estate & Construction',
        icon: '🏗️',
        description: 'Modernizing property and construction management with tech.',
    },
];

