# Adding Images & Blog Posts Guide

## 📸 Adding Project Thumbnails

### Step 1: Add Your Images
1. Create a folder: `public/projects/`
2. Add your project images (e.g., `legal-rag.jpg`, `dental-agent.png`)
3. Recommended size: 800x600px or 16:9 aspect ratio

### Step 2: Update Project Data
Open `lib/data.ts` and add the `image` property to your projects:

```typescript
{
  id: "legal-rag",
  title: "Legal RAG System",
  category: ["AI & LLM"],
  description: "...",
  keyMetric: "...",
  techStack: [...],
  image: "/projects/legal-rag.jpg", // ← Add this line
  links: {
    github: "...",
  },
}
```

### Placeholder Behavior
If no image is provided, a grey placeholder with an icon will show automatically.

---

## 📝 Adding Blog Posts

### Step 1: Add Blog Images (Optional)
1. Create a folder: `public/blog/`
2. Add blog post images (e.g., `rag-systems.jpg`)
3. Recommended size: 1200x630px (social media friendly)

### Step 2: Add Blog Posts to Data
Open `lib/data.ts` and add your blog posts to the `blogPosts` array:

```typescript
export const blogPosts: BlogPost[] = [
  {
    id: "understanding-rag-systems",
    title: "Understanding RAG Systems: A Deep Dive",
    description: "An in-depth exploration of Retrieval-Augmented Generation systems and how they're revolutionizing LLM applications.",
    date: "February 15, 2026",
    readTime: "8 min read",
    tags: ["LLM", "RAG", "AI"],
    image: "/blog/rag-systems.jpg", // Optional
    link: "https://medium.com/@yourname/understanding-rag-systems",
  },
  {
    id: "multi-agent-workflows",
    title: "Building Multi-Agent Workflows with LangGraph",
    description: "A practical guide to orchestrating multiple AI agents for complex tasks.",
    date: "January 28, 2026",
    readTime: "12 min read",
    tags: ["LangGraph", "Multi-Agent", "Tutorial"],
    image: "/blog/multi-agent.jpg",
    link: "https://dev.to/yourname/multi-agent-workflows",
  },
];
```

### Blog Links
You can link to:
- Medium posts
- Dev.to articles
- Your personal blog
- GitHub gists
- Any URL

---

## 🎨 Image Best Practices

### Project Thumbnails
- **Format**: JPG or PNG
- **Size**: 800x600px or similar 4:3/16:9 ratio
- **Content**: Screenshot of the app, architecture diagram, or demo
- **File size**: Keep under 200KB (use compression tools)

### Blog Images
- **Format**: JPG or PNG
- **Size**: 1200x630px (perfect for social sharing)
- **Content**: Blog cover image, infographic, or diagram
- **File size**: Keep under 300KB

### Optimization Tools
- [TinyPNG](https://tinypng.com/) - Compress images
- [Squoosh](https://squoosh.app/) - Image optimizer
- [ImageOptim](https://imageoptim.com/) - Mac app

---

## 🔄 Quick Examples

### Example 1: Add Image to Existing Project
```typescript
// In lib/data.ts, find your project and add:
{
  id: "uav-disease-detection",
  title: "UAV Maize Disease Detection",
  // ... existing fields ...
  image: "/projects/uav-detection.jpg", // ← Add this
  links: { ... }
}
```

### Example 2: Add First Blog Post
```typescript
export const blogPosts: BlogPost[] = [
  {
    id: "my-first-blog",
    title: "My Journey into AI/ML Engineering",
    description: "From mechatronics to machine learning — lessons learned along the way.",
    date: "March 1, 2026",
    readTime: "5 min read",
    tags: ["Career", "AI", "Personal"],
    link: "https://medium.com/@sikirulahi/my-journey",
  },
];
```

---

## 📁 Folder Structure

```
public/
├── projects/
│   ├── legal-rag.jpg
│   ├── dental-agent.png
│   ├── estate-minder.jpg
│   └── ...
├── blog/
│   ├── rag-systems.jpg
│   ├── multi-agent.jpg
│   └── ...
├── resume-industry.pdf
└── resume-academic.pdf
```

---

## ✨ What Changed

1. **Increased Spacing**: Sections now have more breathing room (12rem on desktop vs 8rem before)
2. **Project Images**: All project cards now show thumbnail images at the top
3. **Publications Section**: Renamed from "Research & Publications" to just "Publications"
4. **New Blogs Section**: Added between Publications and Education with full blog post support
5. **Better Card Layout**: Increased padding and margins throughout

---

## 🚀 Deploy Changes

After adding images and blog posts:

```bash
git add .
git commit -m "Add project thumbnails and blog posts"
git push origin main
```

Vercel will auto-deploy in ~30 seconds!
