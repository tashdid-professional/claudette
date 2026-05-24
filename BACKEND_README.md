# Backend Development Integration Guide - Claudette

This project is currently a Next.js 15 (App Router) frontend using static TypeScript data files. To transition to a dynamic backend (PHP, Node.js, Python, etc.), follow this guide to set up the database, API, and admin panel.

## 1. Project Overview
- **Frontend Stack:** Next.js 15, React 19, Tailwind CSS 4, Framer Motion.
- **Current Data:** Located in `public/datas/*.ts`.
- **Primary Goal:** Replace static imports with Fetch API calls to your backend endpoints.

---

## 2. Recommended Database Schema (MySQL/PostgreSQL)

### Table: `products`
| Column | Type | Description |
| :--- | :--- | :--- |
| `id` | INT (PK) | Unique Identifier |
| `name` | VARCHAR(255)| Product Name |
| `slug` | VARCHAR(255)| URL-friendly name (Unique) |
| `category` | VARCHAR(100)| e.g., Lip Gloss, Skincare |
| `price` | DECIMAL(10,2)| Current Price |
| `old_price` | DECIMAL(10,2)| Original Price (Nullable) |
| `image` | VARCHAR(255)| Primary image path/URL |
| `description`| TEXT | Detailed product info |
| `badge` | ENUM | 'Sale', 'New', or NULL |
| `purchase_link`| VARCHAR(255)| Link to external shop (Nullable) |
| `tags` | JSON / TEXT | Comma-separated tags |
| `gallery` | JSON / TEXT | Array of alternative image paths |

### Table: `blogs`
| Column | Type | Description |
| :--- | :--- | :--- |
| `id` | INT (PK) | Unique Identifier |
| `title` | VARCHAR(255)| Blog Title |
| `slug` | VARCHAR(255)| URL-friendly identifier |
| `author` | VARCHAR(100)| Author name |
| `category` | VARCHAR(100)| e.g., Lipstick, Trends |
| `image` | VARCHAR(255)| Feature image |
| `excerpt` | TEXT | short summary for list views |
| `description`| LONGTEXT | Full blog content (HTML/Markdown) |
| `created_at` | TIMESTAMP | Post date |

### Table: `contact_submissions`
| Column | Type | Description |
| :--- | :--- | :--- |
| `id` | INT (PK) | Unique Identifier |
| `name` | VARCHAR(255)| Sender name |
| `email` | VARCHAR(255)| Sender email |
| `subject` | VARCHAR(255)| Subject line |
| `message` | TEXT | Inquiry detail |
| `submitted_at`| TIMESTAMP | Submission time |

### Table: `site_settings` (Key-Value pair for simple elements)
This table stores simple strings and configurations used across the site.
| Column | Type | Description |
| :--- | :--- | :--- |
| `key` | VARCHAR(255) (PK)| Unified key (e.g., 'social_facebook', 'banner_title') |
| `value` | TEXT | The content or link |
| `group` | VARCHAR(50) | Categorization (e.g., 'social', 'hero', 'contact_info') |

**Keys to implement:**
- `social_facebook`, `social_instagram`, `social_tiktok`
- `banner_subtitle`, `banner_title`, `banner_description`, `banner_image`
- `brand_story_title`, `brand_story_description`, `brand_story_image`
- `shop_banner_title`, `shop_banner_description`, `shop_banner_image`
- `contact_email`, `contact_fax`

---

## 3. Managing Footer & Navigation Links

Since footers often have changing links, it's best to manage them in a dedicated table.

### Table: `navigation_links` 
| Column | Type | Description |
| :--- | :--- | :--- |
| `id` | INT (PK) | Unique Identifier |
| `label` | VARCHAR(100)| Display text (e.g., 'Our History') |
| `href` | VARCHAR(255)| URL path (e.g., '/history') |
| `position` | ENUM | 'footer_about', 'footer_shop', 'footer_support' |
| `sort_order` | INT | For ordering links (1, 2, 3...) |

---

## 4. Integrating the Contact Form

The frontend form is located in `app/contact/page.tsx`. Currently, it uses a local `handleSubmit` function.

### Backend Task:
1. Create a POST endpoint (e.g., `POST /api/contact`).
2. Validate required fields (`name`, `email`, `subject`).
3. Save data to the `contact_submissions` table.
4. (Optional) Trigger an email notification to the site admin.

### Frontend Update (Instruction):
The developer should update `handleSubmit` to:
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  const response = await fetch('YOUR_BACKEND_URL/api/contact', {
    method: 'POST',
    body: JSON.stringify(formData)
  });
};
```

---

## 5. Legal & Support Content (FAQ, Privacy, Terms)

The Legal pages (Privacy Policy, Terms & Conditions) and the FAQ page are dynamic and should be manageable via an admin panel.

### Table: `legal_pages`
| Column | Type | Description |
| :--- | :--- | :--- |
| `id` | INT (PK) | Unique Identifier |
| `slug` | VARCHAR(50) | 'privacy', 'terms', 'faq' |
| `title` | VARCHAR(255)| Page Title |

### Table: `legal_sections`
Used for Privacy and Terms pages which follow a Title/Content section structure.
| Column | Type | Description |
| :--- | :--- | :--- |
| `id` | INT (PK) | Unique Identifier |
| `page_id` | INT (FK) | Reference to `legal_pages.id` |
| `title` | VARCHAR(255)| Section Heading |
| `content` | LONGTEXT | Section Body |
| `sort_order` | INT | For ordering sections |

### Table: `faq_items`
Used specifically for the FAQ accordion.
| Column | Type | Description |
| :--- | :--- | :--- |
| `id` | INT (PK) | Unique Identifier |
| `question` | TEXT | The Question |
| `answer` | TEXT | The Answer |
| `sort_order` | INT | For ordering questions |
    method: 'POST',
    body: JSON.stringify(formData),
    headers: { 'Content-Type': 'application/json' }
  });
  if (response.ok) alert("Message sent!");
};
```

---

## 5. Admin Panel & Content Management

The backend developer should provide an Admin UI to manage the following:

1. **Product CRUD:** Manage prices, images, and "Sale" badges.
2. **Blog Management:** A WYSIWYG editor for blog posts.
3. **Global Settings:** 
   - Edit social media URLs.
   - Update Contact Page hero text and sidebar info.
   - Change Homepage Banner and Brand Story images/text.
4. **Link Manager:** Add, remove, or reorder links in the footer columns.

---

## 6. Security & Deployment
- **CORS:** Ensure the backend allows requests from the frontend domain.
- **Authentication:** Protect the Admin Panel endpoints with JWT or Session-based auth.
- **Environment Variables:** Use `.env` files for DB credentials and API keys.

## 7. Migration Map
Replace the following static imports with API calls:
- `import { products } from "@/public/datas/products"` -> `GET /api/products`
- `import { blogs } from "@/public/datas/blogs"` -> `GET /api/blogs`
- `import { socialLinks, footerData, ... } from "@/public/datas/homepage"` -> `GET /api/settings`
- `contact_submissions` -> `POST /api/contact`
