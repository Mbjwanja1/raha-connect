# 🛡️ Raha Connect
**Real-time safety & trust platform for live events in Kenya.**

> "The Waze for live events" — helping fans verify events, report hazards, and receive emergency updates, while giving organizers the tools to prevent crowd disasters.


---
## 📌 The Problem (Backed by Evidence)

Kenya's live entertainment industry is in crisis. Poor planning, rogue promoters, and weak crowd control have led to financial losses, damaged trust, and tragic loss of life.

### 🚨 Real Incidents from 2025–2026

| Incident | What Happened | Source |
|---|---|---|
| **Demo Concert Crush** (Dec 2025, Nyayo Stadium) | A crowd crush killed a 20-year-old attendee and injured others. A witness described chaos at the entrance, with no clear crowd direction. | [Add article link] |
| **Fake Tour Announcement** | An unauthorized Kenyan tour was announced for a major artist. The artist himself publicly warned fans it was fraudulent, sparking calls for verified event announcements. | [Add article link] |
| **Blankets & Wine Festival** | Attendees faced long queues, overcrowded spaces, and slow service. A formal complaint was filed with the Competition Authority over misleading marketing. | [Add article link] |
| **Walker Town Festival** | Security was overwhelmed, attendees breached the venue, and heavy rain caused technical failures. Organizers issued full refunds and a public apology. | [Add article link] |
| **Raha Fest** (Dec 2024) | Crowd unrest forced a headline act to cut their set short. Security deployed tear gas, and organizers warned it might be their last event in Kenya. | [Add article link] |

### 📊 The Root Causes

These incidents strain organizers financially, erode public trust, and damage the reputation of Kenya's live entertainment industry — exposing real gaps in planning, venue security, and access control.

Industry professionals are calling for:

- ✅ Mandatory crowd safety audits
- ✅ Clearer regulatory standards
- ✅ Licensing requirements for promoters

**Raha Connect is the technological answer to these calls.**

---

## 💡 The Solution

Raha Connect bridges the gap between fans and organizers using Africa's Talking APIs, providing the verification, communication, and safety tools that the industry desperately needs.

### ✨ Features & How They Solve Real Problems

| Feature | Problem It Solves |
|---|---|
| **Event Verification** | Fans can confirm if an event is legitimate before buying tickets or showing up |
| **Safety Reporting** | Anonymous reports for overcrowding, emergencies, or security issues in real time |
| **Emergency Broadcasts** | Organizers send instant SMS alerts & voice calls when things go wrong |
| **Gate Status** | Real-time updates on which gates are open, busy, or full |
| **Promoter Trust Score** | Public ratings to hold organizers accountable over time |
| **Organizer Dashboard** | Live view of all incoming safety reports in one place |

---

## 🔧 Tech Stack

| Layer | Technology |
|---|---|
| APIs | Africa's Talking (USSD, SMS, Voice) |
| Backend | Node.js + Express |
| Dashboard | HTML/CSS/JavaScript |
| Tunneling | ngrok |

---

## 🚀 Quick Start

### 1. Clone & Install
```bash
git clone https://github.com/Mbjwanja1/raha-connect.git
cd raha-connect
npm install
```

### 2. Set Up Africa's Talking
- Create a free Sandbox account
- Get your API key
- Create a USSD channel

### 3. Run the Server
```bash
node index.js
```

### 4. Expose with ngrok
```bash
ngrok http 3000
```

### 5. Configure Callback URL
In your Africa's Talking dashboard:
https://your-ngrok-url.ngrok-free.dev/ussd

### 6. Test the USSD Menu
Dial `*384*8024#` in the simulator.

---

## 📱 USSD Menu Flow

```text
                     Welcome to Raha Connect
                           *384#

1. Verify Event
2. Report Safety Issue
3. Check Gate Status
4. Emergency Updates
0. Exit

──────────────────────────────────────────

1. Verify Event

Enter Event Code:
DEMO2026

✅ EVENT VERIFIED

🎵 Sample Concert Name
📍 Venue: KICC
📅 Date: 29 Aug 2026
👤 Organiser: Raha Events Ltd

0. Back

──────────────────────────────────────────

2. Report Safety Issue

Select Issue:

1. Overcrowding
2. Medical Emergency
3. Fighting / Chaos
4. Blocked Exit
5. Security Concern

──────────────────────────────────────────

Issue Submitted Successfully ✅

Thank you for helping keep everyone safe.
Our security team has been notified.

0. Back

──────────────────────────────────────────

3. Check Gate Status

Current Gate Availability

1. Gate A  🟢 OPEN
2. Gate B  🟡 BUSY
3. Gate C  🔴 FULL

Please use Gate A for faster entry.

0. Back

──────────────────────────────────────────

4. Emergency Updates

🚨 SAFETY ALERTS

• Gate C is temporarily closed.
• Please proceed to Gate A.
• Medical tent is beside the main stage.

Stay calm and follow security instructions.

0. Back

```

## 📊 Organizer Dashboard

Live safety reports displayed in real-time at:
http://localhost:3000/dashboard

---

## 🔭 What's Next
- SMS-based promoter verification (KYC integration)
- Partnerships with venues for direct gate-status feeds
- Public promoter trust score API for ticketing platforms

---

## 🎯 Why "Raha Connect"?

"Raha" means "happiness" or "fun" in Swahili.
We're connecting Kenyans to safe, enjoyable events.
Because the only thing that should be lit at a concert... is the stage. 🎵

---
## 🚀 Future Enhancements

### Short-term
- **SMS Alerts** - Organizers send mass emergency alerts
- **Voice Broadcasting** - Emergency voice calls for critical incidents
- **Multi-language Support** - Swahili + English USSD menus
- **Promoter Dashboard** - Analytics and trust score tracking

### Medium-term
- **Airtime Rewards** - Fans earn airtime for reporting safety issues
- **Event Check-in** - USSD-based attendance tracking
- **Real-time Heatmaps** - Crowd density visualization
- **Organizer Verification** - Official badges for trusted promoters

### Long-term
- **AI Safety Predictions** - Predict overcrowding before it happens
- **Emergency Services Integration** - Direct alerts to police, fire, and ambulance
- **Event Insurance** - Partner with insurers for verified events
- **National Rollout** - Expand beyond Nairobi to all major Kenyan cities

### Wishlist ✨
- Celebrity Endorsements 🎤
- Concert History & Ratings 📊
- Voice Memo Reports 🎙️
- Group Safety Features 👥
  
---  

## 🏆 Hackathon Submission

- **Event:** Africa's Talking Women in Tech Nairobi Hackathon 2026
- **Theme:** Sports, Music & Entertainment
- **Category:** Mobile-First Solutions
- **APIs Used:** USSD, SMS, Voice
- **Team:** Solo

---

## 🔗 Resources
- [Africa's Talking Documentation](https://developers.africastalking.com/)
- [USSD API Guide](https://developers.africastalking.com/docs/ussd/overview)
- [SMS API Guide](https://developers.africastalking.com/docs/sms/overview)
- [Evidence article links](https://www.standardmedia.co.ke/business/features/article/2001542950/concert-chaos-how-poor-planning-and-rogue-promoters-are-undermining-kenyas-live-music-scene)]

---

## 📸 Screenshots

Go back up, you'll see it in the files!!

---

## 🙏 Acknowledgements
Built with ❤️ for the Africa's Talking Women in Tech Hackathon, inspired by the need for safer live events in Kenya.

© 2026 Raha Connect | Making Kenya's live events safer, one USSD session at a time.
