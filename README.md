# This is my take on the assessment put forward by BraveGen & Team.
This repository contains my implementation of the BraveGen front-end technical assessment.
The goal was to recreate the Integrations page UI with pixel accuracy, clean architecture, reusable components, and a mock API layer to simulate real data flows.

## Features Implemented
### Layout + Navigation
+ Primary sidebar (icons, active state, green theme)
+ Topbar with company dropdown, search, notifications, user menu
+ Subnavigator with grouped items + active highlighting

## Integrations Page
+ “Choose a Service to Connect” grid
+ Pixel-perfect responsive card layout
+ Icon, title, description, CTA button
+ Clean reusable card component

### Existing Connections Table
+ Search bar with live filtering
+ Fixed column widths
+ Pagination (8 items per page)
+ Badges for Carbon / Utility
+ “Copy to Clipboard” with Toast
+ “View” opens new tab
+ Edit + Delete modals

### Modals
+ Edit modal with warning theme
+ Delete modal with destructive theme
+ Buttons equally spaced (50/50 layout)
+ Click-outside + ESC support

### Mock API Layer
+ Decoupled data loading for:
+ Available services
+ Existing connections
+ Tenants
+ User data
+ (Uses simulated latency to mimic real-world API behavior.)

## Architecture Notes
+ No UI component uses hard-coded data directly
+ All data is fetched through a mock API + useIntegrations hook
+ Shared constants (GREEN, TABLE_BORDER, PAGINATION_GRAY) keep styling consistent
+ Dropdowns and modals use a reusable useClickOutside hook
+ Clean folder structure separating (layout, common reusable components, integrations module, data layer, hooks, utilities)