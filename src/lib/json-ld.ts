const DOMAIN_URL = process.env.DOMAIN_URL || "https://www.ansh-singh.in";

export function generateJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ansh Singh",
    "givenName": "Ansh",
    "familyName": "Singh",
    "alternateName": ["Ansh Singh SRM", "Ansh Singh Chennai", "Ansh Singh Developer"],
    "url": DOMAIN_URL,
    "image": `${DOMAIN_URL}/me.jpeg`,
    "sameAs": [
      "https://www.linkedin.com/in/ansh-singh-484215253/",
      "https://github.com/AnshhSingh",
      "https://www.instagram.com/_anshsingh_",
      "https://x.com/ansh50421466",
      "https://www.geeksforgeeks.org/user/user_41sajic4oat/"
    ],
    "jobTitle": "Computer Science Student & Full Stack Developer",
    "description": "Ansh Singh is a Computer Science Engineering student at SRM Institute of Science and Technology (SRMIST), Chennai. Specializing in web development with React, Next.js, and modern JavaScript frameworks, Ansh Singh creates responsive and innovative web applications.",
    "skills": "Web Development, React, Next.js, JavaScript, TypeScript, Node.js, MongoDB, PostgreSQL",
    "knowsAbout": [
      "Web Development",
      "Frontend Development",
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "SRM University Projects"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "SRM Institute of Science and Technology",
      "alternateName": ["SRMIST", "SRM University"],
      "sameAs": "https://www.srmist.edu.in/",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${DOMAIN_URL}/`
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    },
    "nationality": "Indian"
  };
}

export function generatePortfolioJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Ansh Singh - SRM University Student Portfolio",
    "alternateName": "Ansh Singh Developer Portfolio",
    "url": DOMAIN_URL, 
    "description": "Official portfolio of Ansh Singh, a Computer Science Engineering student at SRM Institute of Science and Technology (SRMIST), Chennai. Showcasing web development projects, skills, and academic achievements with technologies like React, Next.js, and modern JavaScript frameworks.",
    "author": {
      "@type": "Person",
      "name": "Ansh Singh",
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "SRM Institute of Science and Technology",
        "alternateName": "SRM University"
      }
    },
    "about": {
      "@type": "Person",
      "name": "Ansh Singh",
      "description": "Computer Science Engineering student at SRM Institute of Science and Technology (2022-2026)"
    },
    "inLanguage": "en-US",
    "copyrightYear": new Date().getFullYear(),
    "keywords": "Ansh Singh, Ansh Singh SRM, SRM Institute of Science and Technology, student portfolio, Chennai student developer, React developer, Next.js projects, Computer Science Engineering, JavaScript, TypeScript, web development, SRM University, SRMIST",
    "creator": {
      "@type": "Person",
      "name": "Ansh Singh"
    },
    "publisher": {
      "@type": "Person",
      "name": "Ansh Singh"
    }
  };
}

export function generatePortfolioProjectsJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Ansh Singh's Portfolio Projects",
    "description": "Web development projects created by Ansh Singh, a Computer Science Engineering student at SRM Institute of Science and Technology",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "SoftwareSourceCode",
          "name": "Ecom - E-commerce Platform",
          "description": "A full-featured e-commerce website built using React with CMS integration. Created by Ansh Singh as part of web development portfolio at SRM University.",
          "codeRepository": "https://github.com/AnshhSingh/Ecom",
          "programmingLanguage": ["JavaScript", "React.JS", "Strapi", "Tailwind CSS"],
          "url": "https://appproject-git-main-anshhsingh.vercel.app/",
          "author": {
            "@type": "Person",
            "name": "Ansh Singh",
            "identifier": {
              "@type": "PropertyValue",
              "propertyID": "Github",
              "value": "AnshhSingh"
            }
          },
          "headline": "E-commerce website with React and CMS",
          "keywords": ["e-commerce", "React", "Strapi", "web development", "SRM student project"],
          "dateCreated": "2023"
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "SoftwareSourceCode",
          "name": "PDF RAG - Document Analysis System",
          "description": "Advanced document query system developed by Ansh Singh at SRM Institute of Science and Technology. This system enables users to upload and parse PDFs and query indexed content using LlamaIndex and AI technologies.",
          "codeRepository": "https://github.com/AnshhSingh/RAG_PDF_Backend",
          "programmingLanguage": ["Python", "React.js", "FastAPI", "LlamaIndex", "Hugging Face"],
          "url": "https://colab.research.google.com/drive/1Xha2XgoOQQ8oLurqG8-g0LyrIONF7fkd?usp=sharing",
          "author": {
            "@type": "Person",
            "name": "Ansh Singh",
            "identifier": {
              "@type": "PropertyValue",
              "propertyID": "Github",
              "value": "AnshhSingh"
            }
          },
          "headline": "PDF document analysis with RAG and LLMs",
          "keywords": ["document analysis", "PDF parsing", "RAG", "retrieval augmented generation", "LlamaIndex", "AI", "SRM student project"],
          "dateCreated": "2023"
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "SoftwareSourceCode",
          "name": "Micro Bench",
          "description": "Benchmarking tool for Arduino microcontrollers developed by Ansh Singh, Computer Science student at SRM University. Determines performance metrics using standardized scoring system.",
          "codeRepository": "https://github.com/AnshhSingh/microcontrollerbench",
          "programmingLanguage": ["Arduino", "C++"],
          "author": {
            "@type": "Person",
            "name": "Ansh Singh"
          },
          "keywords": ["Arduino", "benchmark", "microcontroller", "performance testing", "SRM student project"],
          "dateCreated": "2023"
        }
      }
    ]
  };
}

// Function to generate FAQ schema for common questions
export function generateFAQJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is Ansh Singh and where does he study?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ansh Singh is a Computer Science Engineering student at SRM Institute of Science and Technology (SRMIST) in Chennai, India. He is pursuing a Bachelor of Technology degree (B.Tech) from 2022-2026. He specializes in web development and creates projects with modern technologies."
        }
      },
      {
        "@type": "Question",
        "name": "What technologies and programming languages does Ansh Singh work with?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ansh Singh works with a variety of web technologies including React, Next.js, TypeScript, JavaScript, Node.js, Express.js, MongoDB, PostgreSQL, AWS, Docker, Python, C++, HTML, CSS, Tailwind CSS, and various other frameworks and tools for full-stack development."
        }
      },
      {
        "@type": "Question",
        "name": "What projects has Ansh Singh created as an SRM student?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "As an SRM student, Ansh Singh has developed several projects including an E-commerce platform using React and Strapi, a PDF document analysis system using RAG and LlamaIndex, a microcontroller benchmarking tool for Arduino boards, and an image conversion web application using Next.js and Express.js."
        }
      },
      {
        "@type": "Question",
        "name": "How can I contact Ansh Singh from SRM University?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `You can reach out to Ansh Singh through the contact form on his portfolio website (${DOMAIN_URL}), by emailing directly at anshsingh25bd@gmail.com, or by connecting with him on LinkedIn at https://www.linkedin.com/in/ansh-singh-484215253/.`
        }
      },
      {
        "@type": "Question",
        "name": "What skills does Ansh Singh have as a web developer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ansh Singh possesses skills in front-end development (React, Next.js, HTML, CSS, Tailwind CSS), back-end development (Node.js, Express.js), database management (MongoDB, PostgreSQL, SQL), programming languages (JavaScript, TypeScript, Python, C++), and various tools and technologies like Git, Docker, and AWS."
        }
      }
    ]
  };
}

// Export all schemas for use in pages
export function getAllSchemas() {
  return {
    person: generateJsonLd(),
    website: generatePortfolioJsonLd(),
    projects: generatePortfolioProjectsJsonLd(),
    faq: generateFAQJsonLd()
  };
}
