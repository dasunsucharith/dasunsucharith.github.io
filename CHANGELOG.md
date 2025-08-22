# Changelog

All notable changes to Dasun's Pixel Lab will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- KGTN website entry with proper description and cultural tourism tags
- Redesigned app cards with enhanced pixel aesthetics
- New card layout with dedicated header, content, and footer sections
- Larger icon containers (40x40px) with styled borders and gradients
- Colorful top borders using accent colors (cyan, pink, gold)
- Enhanced hover effects with lift, scale, and glow animations
- 3D button styling with pixel font and press animations
- Subtle background gradients with radial overlays for depth

### Changed
- All app and website links now open in new browser windows/tabs for better user experience
- Replaced TripForge app with Image Cropper & Exporter app
- Updated app cards to use new visual hierarchy
- Improved button styling with "OPEN" text and pixel font
- Enhanced tag styling with background colors and hover states
- Increased card minimum height for consistent layout
- Updated hover animations to be more pronounced

### Technical
- Added `target="_blank"` and `rel="noopener"` attributes to all OPEN links for security
- Updated keyboard navigation to open links in new windows when pressing Enter
- Restructured card HTML with `.card-header`, `.card-footer` components
- Added `.card-icon` container with styled background
- Updated JavaScript render function for new card structure
- Enhanced CSS transitions and animations
- Improved responsive design and spacing