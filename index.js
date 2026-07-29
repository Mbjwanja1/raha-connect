const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: false }));

let reports = [];
let verifiedEvents = {
    'ASAKE': {
        name: 'Asake Live in Nairobi',
        venue: 'KICC',
        date: '15th December 2026',
        organizer: 'Live Nation KE',
        status: 'Verified ✅'
    },
    'SOLO': {
        name: 'Nairobi Solo Concert',
        venue: 'Uhuru Gardens',
        date: '22nd December 2026',
        organizer: 'Safaricom',
        status: 'Verified ✅'
    }
};

app.post('/ussd', (req, res) => {
    const { text, phoneNumber } = req.body;
    const input = text.split('*');
    let response = '';

    // MAIN MENU
    if (text === '') {
        response = `CON Welcome to Raha Connect - Your Safe Concert Companion!
1. Verify Event
2. Report Safety Issue
3. Check Gate Status
4. Emergency Updates`;
    }
    // 1. VERIFY EVENT
    else if (input[0] === '1') {
        if (input.length === 1) {
            response = `CON Enter the event verification code (e.g., ASAKE):`;
        } else {
            const code = input[1].toUpperCase();
            const event = verifiedEvents[code];
            if (event) {
                response = `END ✅ EVENT VERIFIED
${event.name}
Venue: ${event.venue}
Date: ${event.date}
Organizer: ${event.organizer}
Status: ${event.status}
Stay safe and enjoy the show!`;
            } else {
                response = `END ❌ Event not found. Please check the code and try again.`;
            }
        }
    }
    // 2. REPORT SAFETY ISSUE
    else if (input[0] === '2') {
        if (input.length === 1) {
            response = `CON Report a safety issue:
1. Overcrowding
2. Medical Emergency
3. Fighting/Chaos
4. Blocked Exit
5. Security Concern`;
        } else {
            const issueTypes = {
                '1': 'Overcrowding',
                '2': 'Medical Emergency',
                '3': 'Fighting/Chaos',
                '4': 'Blocked Exit',
                '5': 'Security Concern'
            };
            const issue = issueTypes[input[1]] || 'Unknown Issue';
            reports.push({ phone: phoneNumber, issue: issue, time: new Date().toISOString() });
            response = `END ✅ Thank you for your report! Your feedback has been sent to organizers.`;
        }
    }
    // 3. CHECK GATE STATUS
    else if (input[0] === '3') {
        if (input.length === 1) {
            response = `CON Check gate status:
1. Gate A
2. Gate B
3. Gate C`;
        } else {
            const gateStatus = {
                '1': 'Gate A: 🟢 OPEN - No queues',
                '2': 'Gate B: 🟡 BUSY - 10 min wait',
                '3': 'Gate C: 🔴 FULL - Use Gate A'
            };
            response = `END ${gateStatus[input[1]] || 'Gate not found'}`;
        }
    }
    // 4. EMERGENCY UPDATES
    else if (input[0] === '4') {
        response = `END 🚨 EMERGENCY UPDATES
For real-time safety alerts:
- Listen to PA system
- Follow @RahaConnectKE
- Check our web dashboard
Stay safe! 🛡️`;
    }
    else {
        response = `END Invalid option. Please try again.`;
    }

    res.set('Content-Type', 'text/plain');
    res.send(response);
});

app.get('/reports', (req, res) => {
    res.json(reports);
});

app.get('/', (req, res) => {
    res.send('Raha Connect API is running! 🚀');
});

app.listen(3000, () => {
    console.log('✅ Raha Connect server running on port 3000!');
});