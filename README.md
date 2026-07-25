# FUD Health Centre — Hospital Management System

Role-based web app for FUD Health Centre: appointment booking, prescriptions, payments, staff, and pharmacy stock management — backed by Supabase.

---

## Files

| File | Role | Purpose |
|---|---|---|
| `index.html` | **Public / Auth** | Landing page, login, patient sign-up, Google OAuth (patients), forgot password, role-based redirect |
| `admin.html` | **Administrator** | Staff management, roster scheduling, payment verification, appointments, patients, drug stock overview |
| `doctor.html` | **Doctor** | Roster view, appointment queue (pending/upcoming/history), patient list, consultations |
| `patient.html` | **Patient** | Book appointments, view prescriptions, make payments, manage profile |
| `pharmacist.html` | **Pharmacist** | Drug stock management, prescription queue (Awaiting → Ready → Dispensed) |

---

## Key Features

**Landing / Auth (`index.html`)**
- Marketing-style hero + login/sign-up modals
- Patient self-registration; staff accounts created by admin only
- Google Sign-In restricted to patients (non-patients get bounced back with an error toast)
- Forgot password via Supabase Edge Function → `reset-password.html`
- Enter-key field navigation, inline validation, toast notifications

**Admin**
- Create/manage doctor & pharmacist accounts with shareable credential cards
- Roster scheduling + bulk-cancel empty shifts
- Payment verification queue (pending → paid/rejected)
- Dashboard stats: active doctors, pharmacists, patients, pending verifications, low stock

**Doctor**
- Personal roster, appointment pipeline, patient history access, consultation notes

**Patient**
- Appointment booking/tracking, prescriptions, payments (₦), profile & password management

**Pharmacist**
- Stock levels with reorder threshold flags, prescription fulfillment pipeline

---

## Tech Stack

- **Frontend:** Static single-file HTML/CSS/JS per screen — no build step, no bundler
- **Backend:** Supabase (Postgres + Auth + Edge Functions)
- **Icons:** Phosphor Icons (`@phosphor-icons/web`)
- **Font:** Poppins (Google Fonts)
- **Theming:** Light/dark mode, persisted via `localStorage`, driven by CSS custom properties

```js
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
