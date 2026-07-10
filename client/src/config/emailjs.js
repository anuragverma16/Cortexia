import emailjs from "@emailjs/browser";

const EMAILJS_CONFIG = {
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  contactTemplateId: import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
  scheduleTemplateId: import.meta.env.VITE_EMAILJS_SCHEDULE_TEMPLATE_ID,
};

export function isEmailJsConfigured() {
  const { publicKey, serviceId, contactTemplateId, scheduleTemplateId } =
    EMAILJS_CONFIG;

  return Boolean(
    publicKey &&
      serviceId &&
      contactTemplateId &&
      scheduleTemplateId &&
      !publicKey.includes("your_") &&
      !serviceId.includes("xxxx")
  );
}

async function sendTemplate(templateId, templateParams) {
  if (!isEmailJsConfigured()) {
    throw new Error(
      "Email service is not configured. Add your EmailJS keys to client/.env"
    );
  }

  return emailjs.send(
    EMAILJS_CONFIG.serviceId,
    templateId,
    templateParams,
    { publicKey: EMAILJS_CONFIG.publicKey }
  );
}

export function sendContactEmail({ name, email, phone, message }) {
  return sendTemplate(EMAILJS_CONFIG.contactTemplateId, {
    from_name: name,
    from_email: email,
    phone: phone || "Not provided",
    message,
  });
}

export function sendScheduleEmail(
  { fullName, email, phone, company, projectType, budget, date, time, message },
  services
) {
  return sendTemplate(EMAILJS_CONFIG.scheduleTemplateId, {
    full_name: fullName,
    email,
    phone,
    company: company || "Not provided",
    project_type: projectType || "Not provided",
    budget,
    date,
    time,
    services: services.join(", "),
    message: message || "Not provided",
  });
}
