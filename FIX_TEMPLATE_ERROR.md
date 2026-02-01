# Fixing: "Invalid email template configuration" Error

## What This Error Means
Status 422 = Your EmailJS template variables don't match the form parameters.

## Your Form Sends These Variables:
```
- from_name (user's name)
- phone (user's phone)
- from_email (user's email)
- message (user's message)
```

## Fix: Update Your EmailJS Template

### Step-by-Step:

1. **Go to EmailJS Dashboard**
   - Visit: https://dashboard.emailjs.com/
   - Sign in to your account

2. **Find Your Template**
   - Click "Email Templates" in the left sidebar
   - Find template: `template_179tpej`

3. **Edit the Template**
   - Click on the template to open it
   - In the email subject and content, use EXACTLY these variables:
   
   **Subject (Example):**
   ```
   New Contact Form Message from {{from_name}}
   ```

   **Content (Example):**
   ```
   New message from:
   Name: {{from_name}}
   Phone: {{phone}}
   Email: {{from_email}}
   
   Message:
   {{message}}
   ```

4. **IMPORTANT: Set Recipient Email**
   - Scroll down to "To Email" field
   - Enter YOUR email: jaydarji021103@gmail.com
   - This is where you'll receive emails

5. **Save the Template**
   - Click "Save" button

## Common Mistakes:

❌ Using wrong variable names like:
- `{{email}}` instead of `{{from_email}}`
- `{{name}}` instead of `{{from_name}}`
- `{{text}}` instead of `{{message}}`

✅ Use EXACTLY these names:
- `{{from_name}}`
- `{{phone}}`
- `{{from_email}}`
- `{{message}}`

## Alternative: If Your Template Uses Different Variables

If you want to use different variable names in your template, I can update the Contact.tsx form to match.

For example, if your template expects:
- `{{sender_name}}` instead of `{{from_name}}`
- `{{user_email}}` instead of `{{from_email}}`

Just tell me what variable names your template uses, and I'll update the form to send those instead.

## After Fixing:

1. **Restart dev server:**
   ```
   npm run dev
   ```

2. **Test the form again:**
   - Open browser → F12 (Console)
   - Fill form completely
   - Click Send
   - Check console for success message

3. **Check email:**
   - Check your inbox: jaydarji021103@gmail.com
   - Check spam folder too!

## Verify Template Variables

If you're unsure what variables your template uses, they will show like this:

```
{{variable_name}}
```

They're surrounded by double curly braces `{{ }}`.

Example template with variables highlighted:
```
From: {{from_name}}
Phone: {{phone}}
Email: {{from_email}}
Message:
{{message}}
```

## Need Help?

Share a screenshot of your EmailJS template and I can tell you exactly what to change!
