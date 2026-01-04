
# Deployment Guide: Muskan Fatima Portfolio on Google Cloud Run

Follow these steps to deploy this portfolio to Google Cloud Run.

### 1. Build the Docker Image
```bash
# Set your project ID
export PROJECT_ID=$(gcloud config get-value project)

# Build the image using Cloud Build
gcloud builds submit --tag gcr.io/$PROJECT_ID/muskan-portfolio .
```

### 2. Deploy to Cloud Run
```bash
gcloud run deploy muskan-portfolio \
  --image gcr.io/$PROJECT_ID/muskan-portfolio \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --set-env-vars API_KEY=YOUR_GEMINI_API_KEY_HERE
```

### 3. Continuous Deployment (Optional)
You can connect your GitHub repository directly to Cloud Run in the Google Cloud Console for automatic redeployment on every push.

### Performance & UI/UX Design Guidance:
- **Image Optimization**: Use WebP format for images to reduce load times.
- **Lazy Loading**: Project cards and images use native lazy loading.
- **Glassmorphism**: The `glass` utility class provides a modern, high-end feel.
- **Dark Mode**: The site is natively designed in dark mode to align with current developer trends.
