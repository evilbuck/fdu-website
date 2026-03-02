---
name: Testing Plan
domain: testing
description: Manual testing execution plan with Chrome DevTools MCP + API calls, logging, and automated test building workflow
---

# Testing Plan - FDU Website

## Overview

Execute manual tests via Chrome DevTools MCP + API calls, log results, then build automated Playwright tests from the notes.

## Prerequisites

```bash
npm run dev  # Ensure dev server running on port 3000
```

## Log File

**Location:** `.context/testing-log.md`  
**Format:** Appends test results per session (accumulates over time)

## Agent Workflow

1. Start Chrome DevTools MCP session
2. Execute each test from the test cases below
3. **Retry logic:** On failure, retry up to 2 times (3 attempts total) before marking FAIL
4. **Screenshots:** Save to `.context/testing-screenshots/` only on failures
5. **Log results:** Append to `.context/testing-log.md` after each test

---

## Test Cases with Assertions

### T1. Homepage Load (`/`)

| Step | Tool | Action | Assertion |
|------|------|--------|-----------|
| T1.1 | `chrome-devtools_navigate_page` | Navigate to `http://localhost:3000` | `response.status === 200` |
| T1.2 | `chrome-devtools_take_snapshot` | Capture page | Verify "Fire Detection Unlimited" text visible |
| T1.3 | `chrome-devtools_list_console_messages` | Check for JS errors | `errors.length === 0` |

### T2. Navigation - Desktop

| Step | Tool | Action | Assertion |
|------|------|--------|-----------|
| T2.1 | `chrome-devtools_take_snapshot` | Verify nav visible | `nav` element present |
| T2.2 | `chrome-devtools_hover` | Hover on "Services" element | Dropdown becomes visible |
| T2.3 | `chrome-devtools_click` | Click "Get a Quote" button | URL contains `/contact/quote` |

### T3. Navigation - Mobile

| Step | Tool | Action | Assertion |
|------|------|--------|-----------|
| T3.1 | `chrome-devtools_resize_page` | Set viewport 375x667 | - |
| T3.2 | `chrome-devtools_take_snapshot` | Check for menu toggle | `aria-label="Toggle menu"` present |
| T3.3 | `chrome-devtools_click` | Click menu toggle button | Mobile nav expanded |
| T3.4 | `chrome-devtools_resize_page` | Reset to 1280x800 | Desktop nav restored |

### T4. Contact Form - Validation (`/contact`)

| Step | Tool | Action | Assertion |
|------|------|--------|-----------|
| T4.1 | `chrome-devtools_navigate_page` | Navigate to `/contact` | Page loads |
| T4.2 | `chrome-devtools_fill` | Fill name field "Test" | - |
| T4.3 | `chrome-devtools_fill` | Fill email field "test@test.com" | - |
| T4.4 | `chrome-devtools_press_key` | Press Enter on submit | Form does not submit (message required) |

### T5. Contact Form - Submission (`/contact`)

| Step | Tool | Action | Assertion |
|------|------|--------|-----------|
| T5.1 | `chrome-devtools_fill_form` | Fill: name="Test User", email="test@example.com", message="Test message" | All fields filled |
| T5.2 | `chrome-devtools_click` | Click submit button | Loading state appears |
| T5.3 | `chrome-devtools_wait_for` | Wait for "Thank You!" text | Text appears within 10s |
| T5.4 | `chrome-devtools_take_snapshot` | Capture success state | "within 24 hours" text visible |

### T6. Contact Form - Reset

| Step | Tool | Action | Assertion |
|------|------|--------|-----------|
| T6.1 | `chrome-devtools_click` | Click "Send Another Message" button | Form resets |
| T6.2 | `chrome-devtools_take_snapshot` | Capture reset form | Name and email fields empty |

### T7. Quote Page (`/contact/quote`)

| Step | Tool | Action | Assertion |
|------|------|--------|-----------|
| T7.1 | `chrome-devtools_navigate_page` | Navigate to `/contact/quote` | Page loads |
| T7.2 | `chrome-devtools_take_snapshot` | Verify form present | ContactForm renders with default service |

### T8. API - Valid Request

| Step | Tool | Action | Assertion |
|------|------|--------|-----------|
| T8.1 | `bash curl` | `curl -X POST http://localhost:3000/api/contact -H "Content-Type: application/json" -d '{"name":"Test","email":"test@test.com","message":"Hi"}'` | `status === 200`, `success: true` |

### T9. API - Missing Fields

| Step | Tool | Action | Assertion |
|------|------|--------|-----------|
| T9.1 | `bash curl` | `curl -X POST http://localhost:3000/api/contact -H "Content-Type: application/json" -d '{"name":"Test"}'` | Returns success: false OR graceful handling |

### T10. API - Invalid JSON

| Step | Tool | Action | Assertion |
|------|------|--------|-----------|
| T10.1 | `bash curl` | `curl -X POST http://localhost:3000/api/contact -H "Content-Type: application/json" -d 'invalid'` | `status === 500` |

### T11. Page Availability - All Routes

Test each route via navigation or fetch:

| Route | Expected Status | Notes |
|-------|-----------------|-------|
| `/` | 200 | Homepage |
| `/contact` | 200 | Contact page |
| `/contact/quote` | 200 | Quote request |
| `/services` | 200 | Services overview |
| `/services/design-installation` | 200 | - |
| `/services/monitoring` | 200 | - |
| `/services/inspections` | 200 | - |
| `/services/emergency` | 200 | - |
| `/services/upgrades` | 200 | - |
| `/general-contractors` | 200 | - |
| `/property-managers` | 200 | - |
| `/engineers` | 200 | - |
| `/government` | 200 | - |
| `/about` | 200 | - |
| `/about/leadership` | 200 | - |
| `/case-studies` | **404** | Broken nav link (expected) |
| `/resources` | **404** | Broken nav link (expected) |

**For each route:**
1. Navigate to URL
2. Verify response status
3. Log PASS if status matches expected
4. Log FAIL + screenshot if unexpected

### T12. Accessibility

| Step | Tool | Action | Assertion |
|------|------|--------|-----------|
| T12.1 | `chrome-devtools_take_snapshot` | Check menu button | `aria-label="Toggle menu"` present |
| T12.2 | Check phone link | - | `aria-label="Call us"` present |
| T12.3 | Check form | - | All form inputs have labels |

---

## Log Entry Format

```markdown
### Test: [Name] - [YYYY-MM-DD HH:MM]

**Route**: http://localhost:3000[path]  
**Attempts**: 1/3 | 2/3 | 3/3

**Action**: [What was done]

**Assertion**: [Exact check performed]

**Result**: ✅ PASS | ❌ FAIL (after 3 attempts)

**Evidence**: [Screenshot path if FAIL]
```

---

## Screenshot Naming Convention

```
.failure-[test-id]-[timestamp].png
```

Example: `.context/testing-screenshots/T5.2-homepage-submit-2026-03-02-143022.png`

---

## Post-Execution Deliverables

1. **`.context/testing-log.md`** - Accumulated test results
2. **`.context/testing-screenshots/`** - Failure screenshots only
3. **Automated tests:** Create `tests/smoke.spec.ts` based on working assertions

---

## Notes for Agent

- Use Chrome DevTools MCP for browser interactions
- Use curl for API tests
- Retry up to 2 times on failure before marking FAIL
- Only save screenshots on failures
- Append results to `.context/testing-log.md`