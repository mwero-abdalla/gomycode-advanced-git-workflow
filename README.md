# Advanced Workflow Project

A collaborative student project where each contributor designs and ships one website section, then all sections are integrated into one landing page.

This repository is intentionally organized to practice real team workflows:
- feature ownership by section
- branch based collaboration
- integration and review discipline
- consistency across independently built UI blocks

## Project Goal

Build a complete landing page by composing independent sections created by different students.

Current section files in the project:
- index.html (page entry and host shell)
- my-services.html
- price-plans.html
- recommendations.html

JavaScript composition layer:
- js/utils.js (fetch and parse section files)
- js/main.js (loads selected sections into the main page)

## Who Should Read This

Use this README if you are:
- a student contributing a new section
- a reviewer merging student work
- an integrator assembling all sections into the final page

## Quick Start

1. Clone the repository.
2. Open the folder in VS Code.
3. Run with a local web server (recommended) so fetch based section loading works.

Example local server commands:

### Option A: Python
```bash
python3 -m http.server 5500
```

### Option B: Node
```bash
npx serve .
```

Then open:
- http://localhost:5500

## Collaboration Model

Each student should build one section in isolation using their own branch.

### Branch Naming

Use this format:
- dev/<your-name>

Examples:
- dev/abdulahi
- dev/alex
- dev/mary
- dev/pamela

### One Student, One Section

Each student should own one feature section file, for example:
- pricing -> price-plans.html
- services -> my-services.html
- testimonials -> recommendations.html

## Contribution Workflow

1. Sync from latest main
```bash
git switch main
git pull origin main
```

2. Create your branch
```bash
git switch -c dev/<your-name>
```

3. Create or update your section file and required assets.

4. Commit your changes
```bash
git add .
git commit -m "feat(section): add <section-name> section"
```

5. Push your branch
```bash
git push -u origin dev/<your-name>
```

6. Open a Pull Request to main.

## Section File Rules (Important)

Because the integration script in js/utils.js parses only the first section from each section file, follow these rules strictly:

1. Your section file must contain at least one section element.
2. The main content to integrate should be the first section element in that file.
3. Keep your section self contained (its own spacing, typography, and responsive behavior).
4. Do not rely on styles or markup that only exist in another student's section.

## How Integration Works

The page loader in js/main.js uses a section list array and appends loaded sections to the document body.

If you add a new section file, add its base filename to the list in js/main.js.

Example:
- if your file is team-section.html
- add team-section to the section list array

## Current Known Contributors and Sections

Based on existing branch history:
- dev/mary -> hero section in index.html
- dev/abdulahi -> price plans
- dev/alex -> services
- dev/pamela -> recommendations

## Missing or Open Sections

The project still has room for additional student contributions. Suggested missing sections:
- navigation/header enhancement
- about me section
- portfolio/projects section
- contact section
- footer
- call to action section

If you are a new student, pick one missing section and implement it as an independent section file.

## Section Requirements (Short Version)

Before opening a PR, make sure your section follows these rules:
- Use a file name like `your-section.html`.
- Include a `<section>` element as the first section in that file.
- Keep the section responsive on mobile and desktop.
- Use correct image paths and include required image assets.
- Add your section file name (without `.html`) to `js/main.js` for integration.
- Verify there are no console errors when loading via `index.html`.

## Design and Code Standards

### HTML
- Use semantic elements where possible.
- Keep heading levels logical.
- Provide meaningful alt text for informative images.
- Avoid duplicated ids.

### Styling
- Use one Tailwind CDN/style approach consistently across pages.
- Prefer responsive classes for mobile first behavior.
- Keep spacing and typography consistent with existing sections.

### Asset Paths
- Use a consistent image path strategy across the project.
- Prefer relative paths when possible for easier deployment in subfolders.

### JavaScript
- Handle fetch errors gracefully.
- Do not leave noisy debug logs in production code.
- Keep utility functions small and single purpose.

## Contributor Checklist Before PR

- My section renders on desktop and mobile.
- My file includes a section element as the primary section.
- Image paths are correct.
- Text content is spell checked.
- No broken links or missing image references.
- No console errors while loading my section.
- I tested integration through index.html.

## Reviewer Checklist

- Branch follows naming convention.
- Section file follows first section parsing rule.
- No regression in existing sections.
- Responsive behavior verified.
- Accessibility basics verified (alt text, heading order, contrast).
- JS integration list updated when a new section is added.

## Suggested PR Template

Use this format in your pull request description:

- Section name:
- Branch name:
- What I built:
- Screenshots (desktop + mobile):
- Assets added:
- Integration changes required in js/main.js:
- Known limitations:

## Common Issues and Fixes

### Section not showing on index page
Possible causes:
- file name in js/main.js does not match actual file name
- section file has no section tag
- syntax error in section HTML
- local file opened without web server, causing fetch to fail

### Images not loading
Possible causes:
- wrong path style (absolute vs relative mismatch)
- filename typo or case mismatch
- image not committed to git

### Tailwind classes not behaving as expected
Possible causes:
- mixed Tailwind CDN versions across files
- typo in class names

## Maintainer Notes

When integrating many student branches:
1. merge one section PR at a time
2. test index.html after every merge
3. resolve naming and path consistency early
4. keep a running list of missing sections in this README

## License

No license is currently defined.
If this project is meant to be shared publicly, add a license file.
