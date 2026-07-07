/* SelfEra App Logic - Interactive widgets and brand integrations */

document.addEventListener('DOMContentLoaded', () => {
  initROICalculator();
  initCaseStudyTabs();
  initBookingCalendar();
  initTechDeckConsole();
  initHeaderScrollFallback();
  initBrandPreviewTriggers();
});

/* ==========================================================================
   1. ROI Time Reclaimer Calculator
   ========================================================================== */
function initROICalculator() {
  const sectorSelect = document.getElementById('sector-select');
  const empSlider = document.getElementById('employees-slider');
  const hoursSlider = document.getElementById('hours-slider');
  const wageSlider = document.getElementById('wage-slider');
  
  const empVal = document.getElementById('employees-val');
  const hoursVal = document.getElementById('hours-val');
  const wageVal = document.getElementById('wage-val');
  
  const savingsMain = document.getElementById('savings-main');
  const statHours = document.getElementById('stat-hours');
  const statAnnual = document.getElementById('stat-annual');
  
  const gaugeLabel = document.getElementById('gauge-label');
  const gaugeFill = document.getElementById('gauge-fill');

  // Sector multiplier to adjust calculations slightly based on industry overheads
  const sectorMultipliers = {
    professional: 1.0,
    retail: 0.9,
    logistics: 1.15,
    realestate: 1.05,
    trades: 0.95
  };

  function formatGBP(num) {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      maximumFractionDigits: 0
    }).format(num);
  }

  function calculate() {
    const employees = parseInt(empSlider.value);
    const hours = parseInt(hoursSlider.value);
    const wage = parseInt(wageSlider.value);
    const sector = sectorSelect.value;
    const multiplier = sectorMultipliers[sector] || 1.0;

    // Update UI value labels
    empVal.textContent = employees;
    hoursVal.textContent = `${hours} hrs`;
    wageVal.textContent = `£${wage}/hr`;

    // Calculations
    const weeklyHoursSaved = employees * hours;
    const monthlyHoursSaved = Math.round(weeklyHoursSaved * 4.33); // 4.33 weeks per month average
    const monthlySavings = Math.round(monthlyHoursSaved * wage * multiplier);
    const annualSavings = monthlySavings * 12;

    // Update results
    savingsMain.textContent = formatGBP(monthlySavings);
    statHours.textContent = `${monthlyHoursSaved} hrs`;
    statAnnual.textContent = formatGBP(annualSavings);

    // Update Gauge State
    let rank = 'BRONZE';
    let fillPct = 25;
    let labelColor = '#86868b'; // gray

    if (monthlySavings >= 25000) {
      rank = 'PLATINUM';
      fillPct = 100;
      labelColor = '#0071e3'; // signature blue
    } else if (monthlySavings >= 10000) {
      rank = 'GOLD';
      fillPct = 75;
      labelColor = '#3b82f6'; // bright blue
    } else if (monthlySavings >= 3000) {
      rank = 'SILVER';
      fillPct = 50;
      labelColor = '#60a5fa'; // light blue
    }

    gaugeLabel.textContent = rank;
    gaugeLabel.style.color = labelColor;
    gaugeFill.style.width = `${fillPct}%`;
    
    // Dynamic color matching for gauge fill
    if (rank === 'PLATINUM') {
      gaugeFill.style.background = 'linear-gradient(90deg, #005fc0 0%, #0071e3 100%)';
    } else if (rank === 'GOLD') {
      gaugeFill.style.background = 'linear-gradient(90deg, #3b82f6 0%, #60a5fa 100%)';
    } else if (rank === 'SILVER') {
      gaugeFill.style.background = 'linear-gradient(90deg, #60a5fa 0%, #93c5fd 100%)';
    } else {
      gaugeFill.style.background = 'linear-gradient(90deg, #86868b 0%, #cbd5e1 100%)';
    }
  }

  // Bind Listeners
  [sectorSelect, empSlider, hoursSlider, wageSlider].forEach(element => {
    element.addEventListener('input', calculate);
    element.addEventListener('change', calculate);
  });

  // Run initial calculation
  calculate();
}

/* ==========================================================================
   2. Case Studies Tab Selector
   ========================================================================== */
function initCaseStudyTabs() {
  const tabs = document.querySelectorAll('.tab-btn');
  const cards = document.querySelectorAll('.case-card');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute('data-tab');

      // Update active button state
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Update active card container
      cards.forEach(card => {
        card.classList.remove('active');
        if (card.getAttribute('id') === targetId) {
          card.classList.add('active');
        }
      });
    });
  });
}

/* ==========================================================================
   3. Custom Consultation Booking Calendar Widget
   ========================================================================== */
function initBookingCalendar() {
  const monthTitle = document.getElementById('month-title');
  const prevMonthBtn = document.getElementById('prev-month');
  const nextMonthBtn = document.getElementById('next-month');
  const daysContainer = document.getElementById('days-container');
  
  const selectedDateLabel = document.getElementById('selected-date-label');
  const slotsContainer = document.getElementById('slots-container');
  const bookingForm = document.getElementById('booking-details-form');
  const successView = document.getElementById('form-success');
  const interactiveView = document.getElementById('form-interactive');
  
  // Form elements to enable/disable
  const formInputs = bookingForm.querySelectorAll('.form-input');
  const submitBtn = document.getElementById('submit-booking-btn');
  const dateInput = document.getElementById('selected-date');
  const timeInput = document.getElementById('selected-time');
  const resetBtn = document.getElementById('reset-booking-btn');

  // Local System Time is 2026-06-16. Lock calendar view to June 2026 initially.
  let currentYear = 2026;
  let currentMonth = 5; // June is 5 (0-indexed)

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Simulated slot availability mapping (Date strings as keys)
  const slotAvailability = {
    "2026-06-17": ["09:30", "11:00", "14:30"],
    "2026-06-18": ["10:00", "13:30", "15:00"],
    "2026-06-19": ["09:30", "10:30", "14:00", "15:30"],
    "2026-06-22": ["11:00", "13:30", "16:00"],
    "2026-06-23": ["09:00", "10:00", "14:30", "15:30"],
    "2026-06-24": ["11:30", "13:00", "15:00"],
    "2026-06-25": ["10:30", "14:00"],
    "2026-06-26": ["09:30", "11:00", "15:00"],
    "2026-06-29": ["10:00", "13:30", "14:30", "16:00"],
    "2026-06-30": ["09:00", "11:30", "15:30"],
    // July slots
    "2026-07-01": ["10:00", "14:00", "15:30"],
    "2026-07-02": ["09:30", "13:30"],
    "2026-07-03": ["11:00", "15:00"]
  };

  function renderCalendar(year, month) {
    daysContainer.innerHTML = '';
    monthTitle.textContent = `${monthNames[month]} ${year}`;

    // Get first day of the month and last day of the month
    const firstDayIndex = new Date(year, month, 1).getDay(); // Sun=0, Mon=1, etc.
    const lastDate = new Date(year, month + 1, 0).getDate();
    const prevLastDate = new Date(year, month, 0).getDate();

    // Adjust first day index so Monday is first (0=Mon, 6=Sun)
    // Javascript getDay(): 0=Sun, 1=Mon, 2=Tue, 3=Wed, 4=Thu, 5=Fri, 6=Sat
    let startOffset = firstDayIndex === 0 ? 6 : firstDayIndex - 1;

    // 1. Fill previous month dates (disabled cells)
    for (let i = startOffset; i > 0; i--) {
      const day = prevLastDate - i + 1;
      const cell = document.createElement('div');
      cell.classList.add('day-cell', 'other-month');
      cell.textContent = day;
      daysContainer.appendChild(cell);
    }

    // 2. Fill current month dates
    // System date is 16th June 2026
    const sysYear = 2026;
    const sysMonth = 5; // June
    const sysDay = 16;

    for (let day = 1; day <= lastDate; day++) {
      const cell = document.createElement('div');
      cell.classList.add('day-cell');
      cell.textContent = day;

      const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const cellDate = new Date(year, month, day);

      // Determine state
      const isPast = year < sysYear || (year === sysYear && month < sysMonth) || (year === sysYear && month === sysMonth && day <= sysDay);
      const isWeekend = cellDate.getDay() === 0 || cellDate.getDay() === 6;

      if (isPast) {
        cell.classList.add('past');
      } else if (isWeekend) {
        cell.classList.add('other-month'); // Disable weekends
      } else if (slotAvailability[dateStr]) {
        cell.classList.add('available');
        cell.dataset.date = dateStr;
        cell.dataset.formattedDate = cellDate.toLocaleDateString('en-GB', {
          weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
        });
        
        // Add click listener to available cells
        cell.addEventListener('click', () => selectDate(cell));
      } else {
        // Weekday but no slots defined
        cell.classList.add('other-month');
      }

      // Check if this date was already selected
      if (dateInput.value === dateStr) {
        cell.classList.add('selected');
      }

      daysContainer.appendChild(cell);
    }

    // 3. Fill next month trailing cells to balance grid (6 rows of 7 = 42 cells)
    const totalCells = daysContainer.children.length;
    const remainingCells = 42 - totalCells;
    for (let i = 1; i <= remainingCells; i++) {
      const cell = document.createElement('div');
      cell.classList.add('day-cell', 'other-month');
      cell.textContent = i;
      daysContainer.appendChild(cell);
    }
  }

  function selectDate(cellElement) {
    // Clear previous selections
    document.querySelectorAll('.day-cell.selected').forEach(c => c.classList.remove('selected'));
    
    // Set active element
    cellElement.classList.add('selected');

    const dateStr = cellElement.dataset.date;
    const formatted = cellElement.dataset.formattedDate;

    dateInput.value = dateStr;
    timeInput.value = ""; // Reset time slot
    submitBtn.disabled = true;

    selectedDateLabel.innerHTML = `Selected Date: <strong>${formatted}</strong>`;

    // Populate time slots
    populateSlots(dateStr);
  }

  function populateSlots(dateStr) {
    slotsContainer.innerHTML = '';
    const slots = slotAvailability[dateStr] || [];

    if (slots.length === 0) {
      slotsContainer.innerHTML = `<span class="text-muted" style="grid-column: span 3; text-align: center;">No slots left.</span>`;
      disableFormInputs();
      return;
    }

    // Enable form input text fields now that date is chosen
    enableFormInputs();

    slots.forEach(time => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.classList.add('time-slot-btn');
      btn.textContent = time;
      
      btn.addEventListener('click', () => {
        document.querySelectorAll('.time-slot-btn.active').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        timeInput.value = time;
        
        // Check if entire form is valid to enable submit button
        checkFormValidity();
      });

      slotsContainer.appendChild(btn);
    });
  }

  function enableFormInputs() {
    formInputs.forEach(input => input.disabled = false);
  }

  function disableFormInputs() {
    formInputs.forEach(input => {
      input.disabled = true;
      input.value = '';
    });
    timeInput.value = '';
    submitBtn.disabled = true;
  }

  function checkFormValidity() {
    const hasDate = !!dateInput.value;
    const hasTime = !!timeInput.value;
    const nameVal = document.getElementById('user-name').value.trim();
    const emailVal = document.getElementById('user-email').value.trim();
    const compVal = document.getElementById('user-company').value.trim();
    const botVal = document.getElementById('user-bottleneck').value.trim();

    if (hasDate && hasTime && nameVal && emailVal && compVal && botVal) {
      submitBtn.disabled = false;
    } else {
      submitBtn.disabled = true;
    }
  }

  // Bind input listeners for validation checks
  formInputs.forEach(input => {
    input.addEventListener('input', checkFormValidity);
  });

  // Calendar navigation
  prevMonthBtn.addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }
    renderCalendar(currentYear, currentMonth);
  });

  nextMonthBtn.addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
    renderCalendar(currentYear, currentMonth);
  });

  // Handle Form Submission
  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (submitBtn.disabled) return;

    // Retrieve details for display
    const dateFormatted = document.querySelector('.day-cell.selected').dataset.formattedDate;
    const timeSelected = timeInput.value;
    const company = document.getElementById('user-company').value;
    const name = document.getElementById('user-name').value;

    // Show success panel
    interactiveView.style.display = 'none';
    successView.style.display = 'flex';

    document.getElementById('success-summary').innerHTML = `
      Hello <strong>${name}</strong>, your consultation for <strong>${company}</strong> has been successfully booked on <strong>${dateFormatted}</strong> at <strong>${timeSelected} GMT (London Time)</strong>. 
      A calendar invitation and automated brief have been sent to your email.
    `;
  });

  // Handle Reset / Book another call
  resetBtn.addEventListener('click', () => {
    bookingForm.reset();
    dateInput.value = '';
    timeInput.value = '';
    selectedDateLabel.innerHTML = 'Please select a date on the calendar first.';
    slotsContainer.innerHTML = `<span class="text-muted" style="font-size: 0.85rem; grid-column: span 3; text-align: center; padding: 12px 0;">No date selected.</span>`;
    disableFormInputs();
    
    // Clear selection classes
    document.querySelectorAll('.day-cell.selected').forEach(c => c.classList.remove('selected'));
    
    // Show form layout again
    successView.style.display = 'none';
    interactiveView.style.display = 'block';
  });

  // Render Initial Calendar
  renderCalendar(currentYear, currentMonth);
}

/* ==========================================================================
   4. Automaitee Live Engine Logs & Webhook Pipeline Simulation
   ========================================================================== */
function initTechDeckConsole() {
  const container = document.getElementById('console-logs-container');
  const nodes = [
    document.getElementById('node-webhook'),
    document.getElementById('node-agent'),
    document.getElementById('node-integration'),
    document.getElementById('node-monitor')
  ];

  // Logs database to roll
  const mockLogs = [
    { tag: "[WEBHOOK]", msg: "Received Shopify order webhook payload. Size: 1.2KB", status: "info" },
    { tag: "[AUTH]", msg: "Validated OAuth2 token for SelfEra UK Node. Scope: read/write", status: "success" },
    { tag: "[OCR-ENGINE]", msg: "Extracting metadata from 'customs_invoice_89102.pdf' using AI vision model", status: "info" },
    { tag: "[OCR-ENGINE]", msg: "Extraction success. Confidence: 99.85%. Subtotal: £4,120.50 VAT: £824.10", status: "success" },
    { tag: "[INTEGRATION]", msg: "Checking Sage 50 customer database. Entity ID 'SE-8891' exists.", status: "info" },
    { tag: "[AI-AGENT]", msg: "Analysing tenant application bottlenecks. Matching parameters for viewing slots...", status: "info" },
    { tag: "[AI-AGENT]", msg: "Success: Dispatched auto-booking text invitation to applicant +447700900077", status: "success" },
    { tag: "[DB-SYNC]", msg: "Pushed dispatch manifest records to Automaitee main storage layer.", status: "success" },
    { tag: "[ROUTER]", msg: "Re-routing webhook request payload. Latency: 42ms. Hops: 2", status: "info" },
    { tag: "[INTEGRATION]", msg: "Shopify stock quantity successfully synced for SKU: 'TSHIRT-BLK-M' (New Stock: 42)", status: "success" },
    { tag: "[CRM-POST]", msg: "Pushed consultation request for 'Kesav Tech Systems' to HubSpot CRM.", status: "success" },
    { tag: "[SECURITY]", msg: "API authorization call passed. Key hash: sha256:d84f...991a", status: "success" }
  ];

  let logCount = 0;

  function formatTime(date) {
    const hours = String(date.getHours()).padStart(2, '0');
    const mins = String(date.getMinutes()).padStart(2, '0');
    const secs = String(date.getSeconds()).padStart(2, '0');
    return `${hours}:${mins}:${secs}`;
  }

  function addLogLine() {
    const timestamp = formatTime(new Date());
    const logIndex = Math.floor(Math.random() * mockLogs.length);
    const log = mockLogs[logIndex];

    const logDiv = document.createElement('div');
    logDiv.classList.add('console-log');
    
    // Generate text formatting
    const isSuccess = log.status === 'success';
    logDiv.innerHTML = `
      <span class="log-time">${timestamp}</span>
      <span class="log-tag">${log.tag}</span>
      <span class="log-msg ${isSuccess ? 'success' : ''}">${log.msg}</span>
    `;

    container.appendChild(logDiv);

    // Keep scroll at bottom
    container.scrollTop = container.scrollHeight;

    // Prune logs if too long
    if (container.children.length > 25) {
      container.removeChild(container.firstChild);
    }

    // Toggle active state in visual pipeline diagrams to represent simulated activity
    updateActiveNode(log.tag);
  }

  function updateActiveNode(logTag) {
    // Deactivate nodes
    nodes.forEach(n => n.classList.remove('active'));
    nodes.forEach(n => {
      const statusSpan = n.querySelector('.node-status');
      if (statusSpan.textContent !== 'STREAMING') {
        statusSpan.textContent = 'STANDBY';
      }
    });

    if (logTag.includes('WEBHOOK') || logTag.includes('ROUTER') || logTag.includes('SECURITY')) {
      const n = document.getElementById('node-webhook');
      n.classList.add('active');
      n.querySelector('.node-status').textContent = 'INGESTING';
    } else if (logTag.includes('AI-AGENT') || logTag.includes('OCR')) {
      const n = document.getElementById('node-agent');
      n.classList.add('active');
      n.querySelector('.node-status').textContent = 'REASONING';
    } else if (logTag.includes('INTEGRATION') || logTag.includes('CRM') || logTag.includes('DB')) {
      const n = document.getElementById('node-integration');
      n.classList.add('active');
      n.querySelector('.node-status').textContent = 'SYNCING';
    }

    // Always keep monitoring active in background
    document.getElementById('node-monitor').classList.add('active');
    document.getElementById('node-monitor').querySelector('.node-status').textContent = 'STREAMING';
  }

  // Populate first few logs initially
  for (let i = 0; i < 4; i++) {
    setTimeout(addLogLine, i * 400);
  }

  // Launch intervals
  setInterval(addLogLine, 3000);
}

/* ==========================================================================
   5. Fallback Header Shrink on Scroll (For Firefox/Older Safari/Edge)
   ========================================================================== */
function initHeaderScrollFallback() {
  // Check if browser natively supports scroll-driven timelines
  const supportsScrollTimeline = CSS.supports('(animation-timeline: scroll()) and (animation-range: 0% 100%)');
  
  if (!supportsScrollTimeline) {
    const header = document.getElementById('main-header');
    const scrollDistance = 100;

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      
      if (scrollY > scrollDistance) {
        header.style.height = '64px';
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.05)';
        header.style.borderColor = 'rgba(0, 0, 0, 0.08)';
      } else {
        // Linear interpolation back to original height
        const scrollPercent = Math.max(0, 1 - (scrollY / scrollDistance));
        const newHeight = 64 + (80 - 64) * scrollPercent;
        header.style.height = `${newHeight}px`;
        header.style.background = `rgba(255, 255, 255, ${0.8 + (0.15 * (1 - scrollPercent))})`;
        header.style.boxShadow = scrollY > 0 ? '0 5px 15px rgba(0, 0, 0, 0.04)' : 'none';
        header.style.borderColor = `rgba(0, 0, 0, ${0.08 * scrollPercent})`;
      }
    });
  }
}

/* ==========================================================================
   6. Global Brand Interactive Previews
   ========================================================================== */
function initBrandPreviewTriggers() {
  const docBtns = document.querySelectorAll('.preview-docs-btn');
  const prodBtns = document.querySelectorAll('.preview-product-btn');
  const careerBtns = document.querySelectorAll('.preview-careers-btn');

  function showTemporaryAlert(featureName, brandContext) {
    alert(`[PREVIEW DIALOG] You are navigating from SelfEra (UK Operating Brand) to the Automaitee (Global Platform HQ) ${featureName} site.\n\nContext:\n"Automaitee powers SelfEra and global SME automation systems."`);
  }

  docBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      showTemporaryAlert('Developer API Documentation', 'Automaitee');
    });
  });

  prodBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      showTemporaryAlert('Global SaaS Product Dashboard', 'Automaitee');
    });
  });

  careerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      showTemporaryAlert('Careers, Hiring & Platform Teams', 'Automaitee');
    });
  });
}
