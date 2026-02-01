# Step-by-Step Visual Guide to Fix Template

## STEP 1: Open EmailJS Dashboard
- URL: https://dashboard.emailjs.com/
- Login with your account

**You'll see:**
- Left sidebar with options
- Your service: service_hnukd6v

---

## STEP 2: Navigate to Templates
- Click "Email Templates" in left sidebar
- You'll see a list of your templates
- Look for template with ID: `template_179tpej`

---

## STEP 3: Open Your Template
- Click on `template_179tpej` to edit it
- You'll see:
  - **Template ID**: template_179tpej
  - **To Email**: (field where you receive emails)
  - **Subject** field
  - **Content/Body** field (where variables go)
  - **Save** button

---

## STEP 4: Check What Variables Are Currently In Your Template

Look at the "Content/Body" section and note what you see.

**Common old variable names (DELETE THESE):**
- `{{email}}` → DELETE, replace with `{{from_email}}`
- `{{name}}` → DELETE, replace with `{{from_name}}`
- `{{text}}` → DELETE, replace with `{{message}}`
- `{{contact_number}}` → DELETE, replace with `{{phone}}`

**What should remain:**
- `{{from_name}}` ✓
- `{{phone}}` ✓
- `{{from_email}}` ✓
- `{{message}}` ✓

---

## STEP 5: Update Subject (Example)
**Old Subject (DELETE):**
```
New Message
{{email}} sent you a message
```

**New Subject (USE THIS):**
```
New Contact Form Message from {{from_name}}
```

---

## STEP 6: Update Content/Body (Example)

**Old Content (DELETE ALL OLD VARIABLES):**
```
You received a new message:

Name: {{name}}
Email: {{email}}
Contact: {{contact_number}}
Message: {{text}}
```

**New Content (COPY THIS):**
```
You have a new contact form submission:

From: {{from_name}}
Phone: {{phone}}
Email: {{from_email}}

Message:
{{message}}
```

---

## STEP 7: Set "To Email" Field

Scroll down and find "To Email" field (or "Recipient Email"):
- Enter: `jaydarji021103@gmail.com`
- This is where YOU will receive contact form emails

---

## STEP 8: Save Changes
- Click the **Save** button
- Wait for confirmation: "Template updated successfully"
- You should see a success message

---

## STEP 9: Restart Your Dev Server
In terminal where your app runs:
```bash
# Stop current server with Ctrl+C
# Then run:
npm run dev
```

---

## STEP 10: Test the Fix

1. **Open your website in browser**
2. **Press F12 to open Developer Tools**
3. **Go to Console tab** (where all messages show)
4. **Scroll down to Contact section**
5. **Fill out the form completely:**
   - Name: (any name)
   - Phone: +91 9427548302
   - Email: test@example.com
   - Message: (any message)
6. **Click "Send Message" button**
7. **Check Console for output:**
   - Should see: `=== EMAIL SENDING DEBUG INFO ===`
   - Followed by template parameters
   - Then either:
     - ✅ `Email sent successfully: [object Object]`
     - ❌ `STATUS 422: Template variable mismatch!`

---

## STEP 11: Check Your Email

- Go to: `jaydarji021103@gmail.com` (or whatever email you set in Step 7)
- Check **Inbox** for the email
- Also check **Spam/Junk folder**

---

## If Still Getting Error 422:

This means template variables STILL don't match.

**Check these:**

1. **Variable names are EXACTLY:**
   - `{{from_name}}` - with double braces and exact spelling
   - `{{phone}}` - exact spelling
   - `{{from_email}}` - exact spelling  
   - `{{message}}` - exact spelling

2. **No typos:**
   - `from_name` not `from_Name` or `fromName`
   - `from_email` not `from_Email` or `fromEmail`

3. **No extra spaces:**
   - `{{from_name}}` ✓
   - `{{ from_name }}` ✗ (WRONG - has spaces)
   - `{ { from_name } }` ✗ (WRONG - wrong braces)

4. **All old variables removed:**
   - No more `{{email}}` anywhere
   - No more `{{name}}` anywhere
   - No more `{{text}}` anywhere

---

## Summary

1. Open template_179tpej
2. Replace ALL variables with:
   - `{{from_name}}`
   - `{{phone}}`
   - `{{from_email}}`
   - `{{message}}`
3. Set "To Email" to your email
4. Save
5. Restart dev server
6. Test again
7. Check console for success/error

That's it! 🎯
