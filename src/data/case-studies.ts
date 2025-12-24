export interface CaseStudy {
    slug: string;
    title: string;
    client: string;
    industry: string;
    excerpt: string;
    result: string;
    challenge: string;
    solution: string;
    outcome: string;
    testimonial?: {
        quote: string;
        author: string;
        role: string;
    };
}

export const caseStudies: CaseStudy[] = [
    {
        slug: 'fintech-platform-modernization',
        title: 'Modernizing a Legacy FinTech Platform',
        client: 'FinanceFlow',
        industry: 'FinTech',
        excerpt: 'Helped a leading payment processor migrate from monolithic architecture to microservices, reducing deployment time by 80%.',
        result: '80% faster deployments',
        challenge: 'FinanceFlow was struggling with a 10-year-old monolithic application that made it nearly impossible to release new features without risking system stability. Their deployment cycles stretched to weeks, and developer productivity was declining.',
        solution: 'We assembled a team of 8 senior engineers to work alongside their internal team. Over 12 months, we incrementally extracted services from the monolith, implementing event-driven architecture and containerization with Kubernetes. We also established CI/CD pipelines and comprehensive testing strategies.',
        outcome: 'The platform now handles 3x more transactions with 99.99% uptime. Deployment time reduced from 2 weeks to 2 hours. The engineering team can now release multiple times per day with confidence.',
        testimonial: {
            quote: 'Sehetmeyer transformed how we build and ship software. Their team integrated seamlessly with ours and left us with a platform we\'re proud of.',
            author: 'Sarah Chen',
            role: 'VP of Engineering',
        },
    },
    {
        slug: 'healthcare-data-integration',
        title: 'Building a Unified Healthcare Data Platform',
        client: 'HealthSync Pro',
        industry: 'Healthcare',
        excerpt: 'Created a HIPAA-compliant data integration platform connecting 50+ healthcare providers with real-time patient data sharing.',
        result: '50+ providers connected',
        challenge: 'HealthSync Pro needed to unify patient data across multiple hospitals, clinics, and labs, each with different EHR systems. They required HIPAA compliance, real-time synchronization, and the ability to scale to millions of patient records.',
        solution: 'We designed and built a cloud-native data mesh architecture using AWS services. Our team implemented secure FHIR APIs, real-time data streaming with Kafka, and a comprehensive consent management system. All while maintaining strict HIPAA compliance.',
        outcome: 'The platform now processes over 1 million patient records daily across 50+ healthcare providers. Patient data is available in real-time, reducing administrative delays by 60% and improving care coordination.',
        testimonial: {
            quote: 'The expertise Sehetmeyer brought to healthcare data integration was exceptional. They understood both the technical and regulatory challenges.',
            author: 'Dr. Michael Torres',
            role: 'Chief Medical Information Officer',
        },
    },
    {
        slug: 'saas-talent-transformation',
        title: 'Scaling Engineering Teams for Rapid Growth',
        client: 'CloudScale SaaS',
        industry: 'SaaS',
        excerpt: 'Recruited and onboarded 40+ engineers in 6 months to support a Series B expansion, maintaining high quality standards.',
        result: '40+ engineers hired',
        challenge: 'After raising Series B funding, CloudScale needed to triple their engineering team within 6 months. They struggled to find qualified candidates who could pass their rigorous technical interviews while maintaining their collaborative culture.',
        solution: 'Our recruitment team embedded with CloudScale to deeply understand their technical requirements and culture. We built a custom sourcing pipeline targeting passive candidates in emerging tech hubs. We pre-screened candidates through technical assessments designed with their CTO.',
        outcome: 'Delivered 40+ qualified engineers within the 6-month timeline. 95% of hires passed probation and remain with the company. CloudScale successfully launched 3 new product features ahead of schedule.',
        testimonial: {
            quote: 'Sehetmeyer didn\'t just fill seats—they found people who truly fit our team. Their understanding of what makes a great engineer goes beyond resumes.',
            author: 'Alex Rivera',
            role: 'CTO',
        },
    },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
    return caseStudies.find(cs => cs.slug === slug);
}
