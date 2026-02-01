# Email Setup & Troubleshooting Guide

## What Was Fixed

1. ✅ **EmailJS Initialization** - Added proper initialization in `useEffect` hook
2. ✅ **Email Validation** - Email is now required (was optional before)
3. ✅ **Better Error Messages** - Detailed error logging for debugging
4. ✅ **Template Parameters** - Updated parameter names to match your EmailJS template
5. ✅ **Detailed Console Logging** - Better debugging information

## Current Configuration

Your `.env` file has:
- Service ID: `service_hnukd6v`
- Template ID: `template_179tpej`
- Public Key: `-nvLVnd5mxkd5hLi6`

## Step-by-Step Verification

### 1. **Verify Environment Variables are Loaded**
The app will now log "EmailJS initialized successfully" to the browser console when the Contact component loads.

### 2. **Check EmailJS Template Parameters**
Your form sends these parameters to EmailJS:
```
- from_name: user's name
- phone: user's phone number
- from_email: user's email address
- message: user's message
```

⚠️ **IMPORTANT**: These parameter names MUST match exactly with your EmailJS template variables.

Visit https://dashboard.emailjs.com/ and verify your template uses these variable names:
- `{{from_name}}`
- `{{phone}}`
- `{{from_email}}`
- `{{message}}`

### 3. **Common Issues & Solutions**

#### Issue: "Invalid service ID"
- Service ID doesn't match your EmailJS account
- Solution: Copy the correct Service ID from EmailJS Dashboard

#### Issue: "Invalid email template configuration" (Status 422)
- Template variables don't match form parameters
- Solution: Update template to use: `{{from_name}}`, `{{phone}}`, `{{from_email}}`, `{{message}}`

#### Issue: "Email sent but I didn't receive it"
- Recipient email not configured in template
- Solution: Set your email address as recipient in EmailJS template

#### Issue: Nothing happens when clicking Send
- Check browser console for errors (F12 → Console)
- Public key might be invalid
- Environment variables not reloaded (restart dev server)

### 4. **How to Properly Update EmailJS Template**

1. Go to https://dashboard.emailjs.com/
2. Select your Template: `template_179tpej`
3. Edit the template to use these variables:
   ```
   From: {{from_name}}
   Phone: {{phone}}
   Email: {{from_email}}
   Message: {{message}}
   ```
4. Make sure you set the "To Email" field to receive emails
5. Save the template

### 5. **Testing the Email**

To test if everything is working:
1. Open your website in a browser
2. Open Developer Tools (F12)
3. Go to Console tab
4. Fill out the contact form and submit
5. Look for log messages starting with "Sending email with params:" and "Email sent successfully:"

## Debug Information That Will Be Logged

When you submit the form, you'll see logs like:
```
EmailJS initialized successfully
Sending email with params: {
  serviceId: "service_hnukd6v",
  templateId: "template_179tpej",
  from_name: "User Name",
  phone: "+91 9427548302",
  from_email: "user@example.com",
  message: "Your message here"
}
Email sent successfully: [Response object]
```

If there's an error, you'll see:
```
EmailJS Error Details: {
  message: "Error details",
  status: 422,
  text: "Specific error",
  fullError: {...}
}
```

## Need More Help?

1. **Check EmailJS Documentation**: https://www.emailjs.com/docs/
2. **Verify credentials** in your EmailJS dashboard
3. **Check spam folder** - emails might be going there
4. **Restart dev server** after making `.env` changes: `npm run dev`

## Files Modified

- `src/components/Contact.tsx` - Updated with proper initialization and error handling
