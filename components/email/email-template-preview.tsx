import { WelcomeEmailTemplate } from "./templates/welcome-email"
// import { PasswordResetTemplate } from "./templates/password-reset"
import { InvoiceTemplate } from "./templates/invoice-email"
import { NewsletterTemplate } from "./templates/newsletter-email"
import { VerificationTemplate } from "./templates/verification-email"
import { TrialEndingTemplate } from "./templates/trial-ending-email"

interface EmailTemplatePreviewProps {
  templateId: string
}

export function EmailTemplatePreview({ templateId }: EmailTemplatePreviewProps) {
  switch (templateId) {
    case "welcome":
      return <WelcomeEmailTemplate />
    // case "password-reset":
    //   return <PasswordResetTemplate />
    case "invoice":
      return <InvoiceTemplate />
    case "newsletter":
      return <NewsletterTemplate />
    case "verification":
      return <VerificationTemplate />
    case "trial-ending":
      return <TrialEndingTemplate />
    default:
      return <div>Template not found</div>
  }
}
