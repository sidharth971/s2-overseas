# Certificates Page Management Guide

## How to Add New Certificates

The certificates page is designed to be easily extensible. To add a new certificate, follow these steps:

### 1. Add Certificate Data

In `src/pages/Certificates.tsx`, locate the `certificates` array and add a new certificate object:

```typescript
{
  id: 5, // Increment the ID
  title: "Your Certificate Title",
  category: "legal", // Choose from: "legal", "quality", "regulatory"
  type: "Certificate Type",
  description: "Brief description of the certificate",
  longDescription: "Detailed description of the certificate and its significance",
  filePath: "/assets/certificates/your-certificate-file.pdf",
  issueDate: "2024",
  validUntil: "2027", // or "Permanent" for permanent certificates
  issuingAuthority: "Name of the issuing authority",
  status: "Active", // or "Expired", "Pending", etc.
  icon: Building2, // Choose from available Lucide React icons
  tags: ["Tag1", "Tag2", "Tag3"] // Relevant tags for filtering
}
```

### 2. Available Categories

- **legal**: Legal documents, company registrations, etc.
- **quality**: Quality standards, ISO certifications, etc.
- **regulatory**: Regulatory compliance, licenses, permits, etc.

### 3. Available Icons

Import and use any of these Lucide React icons:
- `Building2` - For company/legal documents
- `Shield` - For safety/security certifications
- `Award` - For quality awards/certifications
- `Globe` - For international certifications
- `FileText` - For general documents
- `Calendar` - For time-based certifications
- `CheckCircle` - For compliance certificates
- `Star` - For premium certifications

### 4. File Management

1. Place your PDF certificate file in the `public/assets/certificates/` directory
2. Use the correct file path in the `filePath` property
3. Ensure the file name matches exactly (case-sensitive)

### 5. Adding New Categories

If you need a new category:

1. Add the category to the `categories` array:
```typescript
{ id: "new-category", name: "New Category Name", count: certificates.filter(c => c.category === "new-category").length }
```

2. Update the grid layout in the TabsList if needed:
```typescript
<TabsList className="grid w-full grid-cols-2 sm:grid-cols-5 h-auto bg-card">
```

### 6. Certificate Status Options

- `"Active"` - Currently valid certificates
- `"Expired"` - Expired certificates
- `"Pending"` - Certificates under review
- `"Renewal"` - Certificates up for renewal

### 7. Best Practices

1. **File Naming**: Use descriptive, consistent file names
2. **Image Quality**: Ensure PDF files are clear and readable
3. **File Size**: Optimize PDF files for web viewing
4. **Descriptions**: Write clear, professional descriptions
5. **Tags**: Use relevant tags for better categorization
6. **Dates**: Keep issue and expiry dates accurate

### 8. Example Certificate Entry

```typescript
{
  id: 6,
  title: "Organic Certification",
  category: "quality",
  type: "Organic Standards",
  description: "Certification for organic farming and processing standards.",
  longDescription: "Our organic certification ensures that all our farming and processing methods meet international organic standards. This certification covers our entire supply chain from seed to final product.",
  filePath: "/assets/certificates/organic-certification-2024.pdf",
  issueDate: "2024",
  validUntil: "2026",
  issuingAuthority: "Organic Certification Body",
  status: "Active",
  icon: Leaf, // Import Leaf from lucide-react
  tags: ["Organic", "Quality", "International Standard"]
}
```

### 9. Testing

After adding a new certificate:
1. Test the preview functionality
2. Test the download functionality
3. Verify the certificate appears in the correct category
4. Check that all tags are displayed correctly
5. Ensure the file path is correct

This structure makes it easy to maintain and expand your certificates page as your business grows! 