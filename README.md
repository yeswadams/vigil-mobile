# 🛡️ Vigil

### **The Proactive Subscription Command Center**

![Vigil Mobile Banner](https://raw.githubusercontent.com/adams-yeswa/vigil-assets/main/banner.png)

[![React Native](https://img.shields.io/badge/Mobile-React_Native-61DAFB?logo=react&logoColor=white)](https://reactnative.dev/)
[![Expo Router](https://img.shields.io/badge/Navigation-Expo_Router-000000?logo=expo&logoColor=white)](https://docs.expo.dev/router/introduction/)
[![Node.js](https://img.shields.io/badge/Backend-Node.js-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Prisma](https://img.shields.io/badge/ORM-Prisma-2D3748?logo=prisma&logoColor=white)](https://www.prisma.io/)
[![Design Engineering](https://img.shields.io/badge/Philosophy-Design_Engineering-orange)](https://#)
[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Vigil** is an engineering-grade subscription intelligence platform built to eliminate "subscription creep." While most trackers are passive logs, Vigil is an active participant in your financial hygiene—identifying underutilized digital liabilities and providing the infrastructure to prune them with zero friction.

---

## ⚡ The Problem: "Subscription Blindness"

Digital-first professionals and modern households are suffering from financial leakage. It's not caused by big purchases; it's caused by the slow, silent accumulation of digital liabilities.

* **Fragmentation:** Monthly charges hit multiple cards and accounts at different times, masking the total burn rate.
* **Utility Gap:** We pay for tools based on *intent*, not actual *usage*.
* **Predatory Cancellation:** intentionally complex "dark pattern" cancellation flows make it difficult to stop paying.

**Vigil acts as a proactive firewall between your bank account and your digital stack.**

---

## 🎨 Product Vision & User Personas

Vigil addresses two critical segments with distinct needs:

### The "Stack-Saturated" Professional (Alex)
* **The Problem:** Overwhelmed by B2B SaaS sprawl, seat licenses, and premium tools.
* **The Need:** Granular usage data, ROI scoring, and simplified tax-season expense reporting.

### The "Digital Household" Manager (Jordan)
* **The Problem:** managing 5+ streaming services, family plans, and identity theft protection.
* **The Need:** duplication detection, "budget rotation," and shared family dashboard.

---

## ✨ Key Features (The "Wow" Factors)

Vigil is distinguished by its engineering-led approach to financial optimization.

#### 1. 🎯 The "Kill List" (Predictive Intervention)
An AI-prioritized dashboard ranking subscriptions by **Financial Weight** vs. **Actual Utility**. It actively suggests what to cancel next.

#### 2. ⚖️ ROI/Utility Scoring (Usage-to-Value)
Calculates a **Cost-Per-Use** metric by correlating transaction data (Node.js backend) with actual tool usage (browser extensions/email scraping).
> *"You paid KSH 5,000 for this tool last month, but used it for 12 minutes. That's KSH 416 per minute."*

#### 3. 🔒 Trial Shield & Shadow Cards
Integrated virtual card management (via Stripe Issuing). Generate single-use virtual cards for "7-day trials" that automatically expire, preventing forced annual conversions.

#### 4. 📁 Tax-Season Automator
A specialized module for the professional persona (Alex) to tag business vs. personal expenses on the fly, exporting audit-ready reports with one tap.

#### 5. 🔄 "Pause-and-Pivot" Rotation (Household Economy)
A "Rotation" engine for streaming services. Jordan can set a rule: *"Only keep two entertainment services active at once."* The app handles the monthly activation/deactivation of services like Netflix, Hulu, and HBO Max.

---

## 🛠 Technical Architecture

Vigil uses a modern fullstack architecture optimized for mobile performance.

### System Overview

```mermaid
graph TD
    User[📱 Vigil Mobile App\n(React Native / Expo Router)] --> API_G[REST/GraphQL API]
    API_G --> BE[Node.js / Express Backend]
    
    BE --> DB[(PostgreSQL \n Prisma ORM)]
    BE --> Plaid[Plaid Link API\n(Bank Syncing)]
    BE --> Clerk[Clerk Auth API\n(Authentication)]
    BE --> Stripe[Stripe Issuing API\n(Virtual Cards)]
    BE --> Email[SMTP/OAuth\n(Receipt Scraping)]
    
    User --(Optimistic Updates)--> LocalCache[TanStack Query Cache]