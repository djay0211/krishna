# EmailJS Template Setup - HTML Template

## Template Variables Used:
- `{{name}}` ✅ (sending)
- `{{from_email}}` ✅ (sending)
- `{{phone}}` ✅ (sending)
- `{{text}}` ✅ (sending)
- `{{year}}` ⚠️ (NOT sending - will add)

---

## Step 1: Update Form Code to Send Year

I'll add {{year}} to the form so the template works perfectly.

---

## Step 2: Add This Template to EmailJS

### Go to: https://dashboard.emailjs.com/

1. Click **Email Templates** (left sidebar)
2. Click **Create New Template**
3. **Template Name:** `template_179tpej` (or update existing)

### Step 3: Configure Template

**Template Settings:**
- **To Email:** `jaydarji021103@gmail.com`
- **Subject:** `New Business Inquiry from {{name}}`

**Template Content:** Copy and paste the HTML below:

```html
<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background-color:#f1f5f9;font-family:Arial,Helvetica,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f1f5f9;padding:20px 10px;">
    <tr>
      <td align="center">

        <!-- Main Container -->
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;background-color:#ffffff;border-radius:14px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.1);">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#1e293b,#334155);padding:26px;text-align:center;">
              <h1 style="margin:0;font-size:22px;color:#ffffff;letter-spacing:1px;">
                📩 New Business Inquiry
              </h1>
              <p style="margin:8px 0 0;font-size:13px;color:#cbd5f5;">
                Krishna Ladies Tailor • Website Contact Form
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:22px;animation:fadeIn 1.5s ease-in-out;">

              <p style="font-size:14px;color:#334155;margin:0 0 16px;">
                You have received a new message from your website. Here are the details:
              </p>

              <!-- Info Box -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f8fafc;border-radius:10px;margin-bottom:20px;border-left:4px solid #6366f1;">
                <tr>
                  <td style="padding:14px;font-size:14px;color:#0f172a;">
                    <strong>👤 Name:</strong><br />
                    {{name}}
                  </td>
                </tr>
                <tr>
                  <td style="padding:14px;font-size:14px;color:#0f172a;">
                    <strong>📧 Email:</strong><br />
                    {{from_email}}
                  </td>
                </tr>
                <tr>
                  <td style="padding:14px;font-size:14px;color:#0f172a;">
                    <strong>📞 Phone:</strong><br />
                    {{phone}}
                  </td>
                </tr>
              </table>

              <!-- Message Box -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#eef2ff;border-radius:10px;border-left:4px solid #6366f1;">
                <tr>
                  <td style="padding:18px;">
                    <strong style="font-size:14px;color:#1e293b;">💬 Message:</strong>
                    <p style="margin:10px 0 0;font-size:14px;color:#1e293b;line-height:1.7;white-space:pre-line;">
                      {{text}}
                    </p>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#f8fafc;padding:18px;text-align:center;">
              <p style="margin:0;font-size:12px;color:#64748b;">
                Krishna Ladies Tailor • Nadiad<br />
                Automated Business Email • {{year}}
              </p>
            </td>
          </tr>

        </table>
        <!-- End Container -->

      </td>
    </tr>
  </table>

  <!-- Animation Style -->
  <style>
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  </style>

</body>
</html>
```

### Step 4: Save Template
- Click **Save**

---

## Step 5: Update Form Code to Send Year

I'll now update Contact.tsx to send the year variable.

---

## Testing Checklist:

- [ ] Added template to EmailJS
- [ ] Set "To Email" = jaydarji021103@gmail.com
- [ ] Copied HTML template content
- [ ] Clicked Save
- [ ] Restarted dev server: npm run dev
- [ ] Filled form and submitted
- [ ] Received formatted email at jaydarji021103@gmail.com
- [ ] Email displays beautifully with all information

---

## Result:

✅ Beautiful HTML email  
✅ Includes name, email, phone, message  
✅ Professional formatting  
✅ Sends to jaydarji021103@gmail.com  
✅ No errors
