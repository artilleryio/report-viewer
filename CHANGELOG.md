
# Documentation
You can see the main documentation [here.](readme.md)

# Changelog

All notable changes to this project will be documented in this file.

## Version 2.0.0
- New cleaner and revamped UI
- Lightmode / Darkmode
- Added report summary components
- Average performance health rating
- Navigation Sidebar
- Quick anchors for each section
- Migrated solution to typescript
- Migrated state to context
- Migrated styles to SCSS
- Refactored naming conventions and organized components
- Added version endpoint `/api/version`
- Added health endpoint `/api/health`
- Updated sample payloads
- Added Phases table component
- Published docker image to Docker Hub, name: `cfryerdev/artilleryio-report-viewer`
- Added more styles to metrics-by-endpoint addon
- Cleaned up print view (save as pdf)
- Standardized all components and pages to Fast Refresh requirements
- Updates to documentation
- Countless other things I am probably forgetting...

## Version 1.2.0
- Refactoring some payload logic into a utility

## Version 1.1.0
- Adding Raw custom stats and counters
- Added first addon handler, Metrics by Endpoint

## Version 1.0.3
- Added formatting to numbers for readability (Easier to read larger numbers)
- Added spacing to badges for readability (Periods hard to make out)

## Version 1.0.2
- p95 & p99 Added to Latency over time graph
- Stubbed out in Aggregate Latency component, but untested.

## Version 1.0.1
- Added support for Artillery Pro v2 report files

## Version 1.0.0
- Initial Release