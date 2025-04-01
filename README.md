# Personal Resume Frontend

A responsive Angular application for showcasing personal resume/profile information.

## Project Structure

- **Components**: Modular components for profile, education, experience, skills, and projects
- **Services**: API communication with the backend
- **Models**: TypeScript interfaces matching backend entities
- **Styling**: Responsive design using Bootstrap and custom SCSS

## Features

- Modern, responsive UI for displaying resume information
- Component-based architecture for maintainability
- Services for API communication with the backend
- Environment configuration for development and production

## Local Development

```bash
# Install dependencies
npm install

# Start development server
ng serve
```

The application will be available at http://localhost:4200

## Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Deployment

This frontend is configured for deployment on Render:
- Static site deployment
- Environment configuration for production API endpoints
- Automatic builds from GitHub repository

## Backend API

This frontend is designed to work with the Personal Resume Backend API. Make sure to set up the backend service as well.
