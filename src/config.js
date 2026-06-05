/* ─── Contact Configuration ─────────────────────────────────────
   Update email and phone here — changes apply everywhere instantly
──────────────────────────────────────────────────────────────── */

export const CONTACT = {
  email: 'panwadiyatanay@gmail.com',
  phone: '918824437092', // WhatsApp: country code + number, no + or spaces
  linkedin: 'https://www.linkedin.com/in/connectanaysharma/',
  github: 'https://github.com/Tanaypai123',
}

/* ─── Pre-filled Email ─── */
const emailSubject = encodeURIComponent("Let's Work Together, Tanay")
const emailBody = encodeURIComponent(
`Hello Tanay,

I visited your portfolio and was impressed by your work and projects.

I would like to discuss a project, internship, freelance opportunity, collaboration, or full-time role with you.

Looking forward to connecting with you.

Best Regards,`
)
export const MAILTO = `mailto:${CONTACT.email}?subject=${emailSubject}&body=${emailBody}`

/* ─── Pre-filled WhatsApp ─── */
const waMessage = encodeURIComponent(
`Hi Tanay 👋

I came across your portfolio and would like to discuss a project, internship, freelance opportunity, collaboration, or job role with you.

Looking forward to hearing from you.`
)
export const WHATSAPP = `https://wa.me/${CONTACT.phone}?text=${waMessage}`
