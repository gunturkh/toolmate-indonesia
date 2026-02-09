/**
 * Centralized Downloads Configuration
 *
 * Update the URLs here when you upload files to Google Drive, Dropbox, or any cloud storage.
 *
 * How to get a direct download link from Google Drive:
 * 1. Upload your PDF to Google Drive
 * 2. Right-click > Share > Anyone with the link
 * 3. Copy the link (format: https://drive.google.com/file/d/FILE_ID/view)
 * 4. Convert to direct download: https://drive.google.com/uc?export=download&id=FILE_ID
 */

export interface DownloadItem {
  id: string;
  title: string;
  subtitle: string;
  url: string;
  icon?: string;
  iconColor?: string;
}

// Single company profile PDF containing all catalogues and information
const COMPANY_PROFILE_URL = "https://drive.google.com/file/d/148P1xFtj8nJMgbx5HdwZo2SNR5jF2YS2/view?usp=sharing";

export const downloads = {
  // Company Profile - main document containing all information
  companyProfile: {
    id: "company-profile",
    title: "Company Profile",
    subtitle: "PDF Document",
    url: COMPANY_PROFILE_URL,
    icon: "fa-file-pdf",
    iconColor: "text-red-500",
  },

  // All catalogues point to the same company profile
  servicesBrochure: {
    id: "services-brochure",
    title: "Services Brochure",
    subtitle: "PDF Document",
    url: COMPANY_PROFILE_URL,
    icon: "fa-file-pdf",
    iconColor: "text-red-500",
  },

  productBrochure: {
    id: "product-brochure",
    title: "Download Product Brochure",
    subtitle: "PDF format",
    url: COMPANY_PROFILE_URL,
    icon: "fa-file-alt",
    iconColor: "text-green-600",
  },

  msdsLabReport: {
    id: "msds-lab-report",
    title: "Download MSDS / Lab Report",
    subtitle: "PDF format",
    url: COMPANY_PROFILE_URL,
    icon: "fa-flask",
    iconColor: "text-green-600",
  },

  hvacCatalogue: {
    id: "hvac-catalogue",
    title: "HVAC Equipment Catalogue",
    subtitle: "PDF Document",
    url: COMPANY_PROFILE_URL,
    icon: "fa-file-pdf",
    iconColor: "text-blue-500",
  },

  wtpCatalogue: {
    id: "wtp-catalogue",
    title: "WWTP Solutions Catalogue",
    subtitle: "PDF Document",
    url: COMPANY_PROFILE_URL,
    icon: "fa-file-pdf",
    iconColor: "text-green-500",
  },
} as const;

// Helper function to get downloads as array (useful for mapping in templates)
export function getDownloadsArray(keys: (keyof typeof downloads)[]): DownloadItem[] {
  return keys.map(key => downloads[key]);
}

// Get all downloads as array
export function getAllDownloads(): DownloadItem[] {
  return Object.values(downloads);
}
