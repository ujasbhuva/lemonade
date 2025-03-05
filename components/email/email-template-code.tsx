import { welcomeEmailCode } from "./templates/welcome-email-code"
// import { passwordResetCode } from "./templates/password-reset-code"
import { invoiceEmailCode } from "./templates/invoice-email-code"
import { newsletterEmailCode } from "./templates/newsletter-email-code"
import { verificationEmailCode } from "./templates/verification-email-code"
import { trialEndingEmailCode } from "./templates/trial-ending-email-code"

interface EmailTemplateCodeProps {
  templateId: string
}

export function EmailTemplateCode({ templateId }: EmailTemplateCodeProps) {
  let code: string

  switch (templateId) {
    case "welcome":
      code = welcomeEmailCode
      break
    // case "password-reset":
    //   code = passwordResetCode
      break
    case "invoice":
      code = invoiceEmailCode
      break
    case "newsletter":
      code = newsletterEmailCode
      break
    case "verification":
      code = verificationEmailCode
      break
    case "trial-ending":
      code = trialEndingEmailCode
      break
    default:
      code = "<p>Template code not found</p>"
  }

  return <pre className="text-sm overflow-auto whitespace-pre-wrap">{code}</pre>
}

