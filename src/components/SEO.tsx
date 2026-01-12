import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    url?: string;
    image?: string;
    type?: string;
    keywords?: string;
}

const SEO = ({
    title = "Amir Khan - Best Frontend Developer in KSA",
    description = "Looking for the best frontend developer in KSA? Amir Khan is a Senior Full Stack Developer specializing in React, MERN Stack, and modern web technologies in Saudi Arabia.",
    url = "https://www.amircodes.online", // Keeping a default, but should be updated with actual domain
    image = "/og-image.png", // Assuming an OG image exists or will be added
    type = "website",
    keywords = "Best Frontend Developer in KSA, Amir Khan, Full Stack Developer, MERN Stack, React Developer, Web Developer, Portfolio, React developer Saudi Arabia, Frontend developer KSA, React UI developer, MUI React developer, Top Developer Riyadh"
}: SEOProps) => {
    const siteTitle = title === "Amir Khan - Senior Full Stack Developer" ? title : `${title} | Amir Khan`;

    // Structured Data (JSON-LD) for Person/Portfolio
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Amir Khan",
        "url": url,
        "image": `${url}${image}`,
        "sameAs": [
            "https://github.com/amir-khann",
            "https://linkedin.com/in/amir-khan-dev" // Replace with actual LinkedIn if known or keep generic
        ],
        "jobTitle": "Senior Full Stack Developer",
        "worksFor": {
            "@type": "Organization",
            "name": "Freelance"
        },
        "description": description
    };

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{siteTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="canonical" href={url} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={url} />
            <meta name="twitter:title" content={siteTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
        </Helmet>
    );
};

export default SEO;
