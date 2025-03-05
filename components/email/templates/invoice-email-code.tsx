export const invoiceEmailCode = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Monthly Invoice</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" border={0} style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
    <!-- Header with Gradient -->
    <tr>
      <td style="padding: 30px 20px; text-align: center; background-image: linear-gradient(to right, #84CC16, #9AE6B4); background-size: cover;">
        <table width="100%" cellpadding="0" cellspacing="0" border={0}>
          <tr>
            <td style="text-align: center;">
              <h1 style="color: #FFFFFF; font-size: 24px; margin: 0; font-weight: normal; text-shadow: 0 1px 2px rgba(0,0,0,0.1);">
                Your Monthly Invoice
              </h1>
              <p style="color: #FFFFFF; font-size: 16px; margin: 10px 0 0 0; opacity: 0.9;">
                March 2025
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    
    <!-- Invoice Summary -->
    <tr>
      <td style="padding: 30px 20px;">
        <table width="100%" cellpadding="0" cellspacing="0" border={0}>
          <tr>
            <td style="padding-bottom: 20px;">
              <p style="font-size: 16px; line-height: 1.5; color: #4A5568; margin: 0 0 20px 0;">
                Hi [Customer Name],
              </p>
              <p style="font-size: 16px; line-height: 1.5; color: #4A5568; margin: 0 0 20px 0;">
                Thank you for your continued subscription to Lemonade. Please find your invoice details below.
              </p>
            </td>
          </tr>
          
          <!-- Invoice Details -->
          <tr>
            <td style="padding: 20px; background-color: #F7FAFC; border-radius: 8px; margin-bottom: 20px;">
              <table width="100%" cellpadding="0" cellspacing="0" border={0}>
                <tr>
                  <td style="padding-bottom: 15px;">
                    <table width="100%" cellpadding="0" cellspacing="0" border={0}>
                      <tr>
                        <td width="50%" style="vertical-align: top;">
                          <p style="font-size: 14px; color: #718096; margin: 0 0 5px 0;">
                            Invoice Number
                          </p>
                          <p style="font-size: 16px; color: #2D3748; margin: 0; font-weight: bold;">
                            INV-2025-0342
                          </p>
                        </td>
                        <td width="50%" style="vertical-align: top; text-align: right;">
                          <p style="font-size: 14px; color: #718096; margin: 0 0 5px 0;">
                            Date Issued
                          </p>
                          <p style="font-size: 16px; color: #2D3748; margin: 0; font-weight: bold;">
                            March 1, 2025
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom: 15px; border-bottom: 1px solid #E2E8F0;"></td>
                </tr>
                <tr>
                  <td style="padding-top: 15px; padding-bottom: 15px;">
                    <table width="100%" cellpadding="0" cellspacing="0" border={0}>
                      <tr>
                        <td width="70%" style="font-size: 16px; color: #4A5568;">
                          Lemonade Pro Plan (Monthly)
                        </td>
                        <td width="30%" style="font-size: 16px; color: #4A5568; text-align: right;">
                          $49.00
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding-top: 5px; padding-bottom: 5px; border-bottom: 1px solid #E2E8F0;">
                    <table width="100%" cellpadding="0" cellspacing="0" border={0}>
                      <tr>
                        <td width="70%" style="font-size: 14px; color: #718096;">
                          Additional Team Members (3)
                        </td>
                        <td width="30%" style="font-size: 14px; color: #718096; text-align: right;">
                          $30.00
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding-top: 15px;">
                    <table width="100%" cellpadding="0" cellspacing="0" border={0}>
                      <tr>
                        <td width="70%" style="font-size: 16px; color: #4A5568; font-weight: bold;">
                          Total
                        </td>
                        <td width="30%" style="font-size: 16px; color: #4A5568; text-align: right; font-weight: bold;">
                          $79.00
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Payment Status -->
          <tr>
            <td style="padding: 20px 0;">
              <table width="100%" cellpadding="0" cellspacing="0" border={0}>
                <tr>
                  <td style="background-color: #F0FFF4; padding: 15px; border-radius: 8px; border-left: 4px solid #84CC16;">
                    <p style="font-size: 16px; color: #2D3748; margin: 0; font-weight: bold;">
                      Payment Successful
                    </p>
                    <p style="font-size: 14px; color: #4A5568; margin: 5px 0 0 0;">
                      Your payment was processed successfully on March 1, 2025.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- CTA Button -->
          <tr>
            <td style="padding: 10px 0 30px 0; text-align: center;">
              <table cellpadding="0" cellspacing="0" border={0} style="margin: 0 auto;">
                <tr>
                  <td style="background-color: #84CC16; border-radius: 28px; padding: 12px 24px; text-align: center;">
                    <a href="https://example.com/view-invoice" style="color: #FFFFFF; font-size: 16px; text-decoration: none; display: inline-block;">
                      View Invoice Details
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    
    <!-- Footer -->
    <tr>
      <td style="padding: 20px; background-color: #F7FAFC; text-align: center; border-top: 1px solid #E2E8F0;">
        <table width="100%" cellpadding="0" cellspacing="0" border={0}>
          <tr>
            <td style="text-align: center;">
              <p style="font-size: 14px; color: #718096; margin: 0 0 10px 0;">
                Lemonade, Inc.
              </p>
              <p style="font-size: 12px; color: #A0AEC0; margin: 0 0 10px 0;">
                123 Main Street, Suite 100, San Francisco, CA 94105
              </p>
              <p style="font-size: 12px; color: #A0AEC0; margin: 0;">
                <a href="https://example.com/billing" style="color: #A0AEC0; text-decoration: underline;">Billing Settings</a> • 
                <a href="https://example.com/privacy" style="color: #A0AEC0; text-decoration: underline;"> Privacy Policy</a> • 
                <a href="https://example.com/terms" style="color: #A0AEC0; text-decoration: underline;"> Terms of Service</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`

