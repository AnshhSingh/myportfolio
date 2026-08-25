"use server";

import { z } from "zod";
import { Resend } from "resend";

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Form validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

// Handle form submission
export async function sendContactForm(data: FormData) {
  const parsedData = contactSchema.safeParse({
    name: data.get("name"),
    email: data.get("email"),
    message: data.get("message"),
  });

  if (!parsedData.success) {
    return { success: false, errors: parsedData.error.flatten().fieldErrors };
  }

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "anshsingh25bd@gmail.com",
      subject: `New Contact Message from ${parsedData.data.name}`,
      text: `Name: ${parsedData.data.name}\nEmail: ${parsedData.data.email}\nMessage: ${parsedData.data.message}`,
    });

    return { success: true };
  } catch (error) {
    return { success: false, message: `Failed to send email.Try again later.: ${error}` };
  }
}

// Generate dynamic meta description based on content
export async function generateMetaDescription(content: string): Promise<string> {
  // Trim content to a reasonable length for meta description (150-160 characters)
  const trimmed = content.substring(0, 157).trim();
  return trimmed.length < content.length ? `${trimmed}...` : trimmed;
}

// Function to add structured data testing to log
export async function logStructuredDataTest(data: Record<string, unknown>, type: string): Promise<boolean> {
  if (!data['@context'] || !data['@type']) {
    console.error(`Invalid structured data for ${type}: Missing required properties`);
    return false;
  }
  
  // Check for minimum required properties based on type
  let isValid = true;
  
  switch (data['@type']) {
    case 'Person':
      isValid = !!data.name && !!data.url;
      break;
    case 'WebSite':
      isValid = !!data.name && !!data.url;
      break;
    case 'BreadcrumbList':
      isValid = Array.isArray(data.itemListElement) && data.itemListElement.length > 0;
      break;
    case 'FAQPage':
      isValid = Array.isArray(data.mainEntity) && data.mainEntity.length > 0;
      break;
    case 'SoftwareApplication':
      isValid = !!data.name && !!data.description;
      break;
    default:
      console.warn(`Unknown schema type: ${data['@type']}`);
      isValid = true; // Allow custom types
  }
  
  if (!isValid) {
    console.error(`Invalid structured data for ${type}: Missing required properties for type ${data['@type']}`);
  }
  
  return isValid;
}

// Generate a sitemap URL entry with lastmod date
export async function getSitemapUrl(path: string, priority: number = 0.5, changeFrequency: string = 'monthly'): Promise<{
  url: string;
  lastModified: Date;
  changeFrequency: string;
  priority: number;
}> {
  const baseUrl = process.env.DOMAIN_URL || 'https://www.ansh-singh.in';
  return {
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  };
}
