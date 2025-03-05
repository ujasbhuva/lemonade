export function VerificationTemplate() {
  return (
    <div style={{ maxWidth: "100%", overflowX: "auto" }}>
      <table
        width="100%"
        cellPadding="0"
        cellSpacing="0"
        border={0}
        style={{
          fontFamily: "Arial, sans-serif",
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "#ffffff",
        }}
      >
        {/* Header with Gradient */}
        <tr>
          <td
            style={{
              padding: "0",
              textAlign: "center",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=600&h=150&fit=crop"
              alt="Purple gradient"
              width="600"
              style={{
                display: "block",
                width: "100%",
                maxWidth: "600px",
                height: "auto",
                border: "0",
              }}
            />
          </td>
        </tr>

        {/* Content */}
        <tr>
          <td style={{ padding: "40px 20px 30px 20px" }}>
            <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
              <tr>
                <td style={{ textAlign: "center", paddingBottom: "30px" }}>
                  <h1 style={{ color: "#2D3748", fontSize: "24px", margin: "0 0 10px 0", fontWeight: "normal" }}>
                    Verify Your Email Address
                  </h1>
                  <p style={{ fontSize: "16px", lineHeight: "1.5", color: "#718096", margin: "0" }}>
                    Thanks for signing up for Lemonade!
                  </p>
                </td>
              </tr>
              <tr>
                <td style={{ paddingBottom: "30px" }}>
                  <p style={{ fontSize: "16px", lineHeight: "1.5", color: "#4A5568", margin: "0 0 20px 0" }}>
                    Hi [Customer Name],
                  </p>
                  <p style={{ fontSize: "16px", lineHeight: "1.5", color: "#4A5568", margin: "0 0 20px 0" }}>
                    Please verify your email address to complete your Lemonade account setup. This ensures we have
                    the right email in case we need to contact you.
                  </p>
                  <p style={{ fontSize: "16px", lineHeight: "1.5", color: "#4A5568", margin: "0 0 20px 0" }}>
                    Simply click the button below to verify your email address:
                  </p>
                </td>
              </tr>

              {/* CTA Button */}
              <tr>
                <td style={{ padding: "0 0 30px 0", textAlign: "center" }}>
                  <table cellPadding="0" cellSpacing="0" border={0} style={{ margin: "0 auto" }}>
                    <tr>
                      <td
                        style={{
                          backgroundColor: "#84CC16",
                          borderRadius: "28px",
                          padding: "14px 28px",
                          textAlign: "center",
                        }}
                      >
                        <a
                          href="https://example.com/verify-email?token=123456789"
                          style={{
                            color: "#FFFFFF",
                            fontSize: "16px",
                            textDecoration: "none",
                            display: "inline-block",
                            fontWeight: "bold",
                          }}
                        >
                          Verify Email Address
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              {/* Verification Code */}
              <tr>
                <td style={{ padding: "20px", backgroundColor: "#F7FAFC", borderRadius: "8px", marginBottom: "30px" }}>
                  <p style={{ fontSize: "14px", lineHeight: "1.5", color: "#4A5568", margin: "0 0 10px 0" }}>
                    If the button above doesn't work, you can also verify your account by entering this verification
                    code:
                  </p>
                  <p
                    style={{
                      fontSize: "24px",
                      letterSpacing: "5px",
                      color: "#2D3748",
                      margin: "0",
                      fontWeight: "bold",
                      textAlign: "center",
                      padding: "10px 0",
                    }}
                  >
                    OXLM-583924
                  </p>
                </td>
              </tr>

              {/* Help Section */}
              <tr>
                <td style={{ padding: "30px 0 0 0" }}>
                  <p style={{ fontSize: "14px", lineHeight: "1.5", color: "#718096", margin: "0 0 10px 0" }}>
                    If you didn't create an account with Lemonade, you can safely ignore this email.
                  </p>
                  <p style={{ fontSize: "14px", lineHeight: "1.5", color: "#718096", margin: "0" }}>
                    If you have any questions, please contact our support team at{" "}
                    <a href="mailto:support@Lemonade.com" style={{ color: "#84CC16", textDecoration: "none" }}>
                      support@Lemonade.com
                    </a>
                    .
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        {/* Footer */}
        <tr>
          <td
            style={{ padding: "20px", backgroundColor: "#F7FAFC", textAlign: "center", borderTop: "1px solid #E2E8F0" }}
          >
            <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
              <tr>
                <td style={{ textAlign: "center" }}>
                  <p style={{ fontSize: "14px", color: "#718096", margin: "0 0 10px 0" }}>Lemonade, Inc.</p>
                  <p style={{ fontSize: "12px", color: "#A0AEC0", margin: "0 0 10px 0" }}>
                    123 Main Street, Suite 100, San Francisco, CA 94105
                  </p>
                  <p style={{ fontSize: "12px", color: "#A0AEC0", margin: "0" }}>
                    <a href="https://example.com/privacy" style={{ color: "#A0AEC0", textDecoration: "underline" }}>
                      Privacy Policy
                    </a>{" "}
                    •
                    <a href="https://example.com/terms" style={{ color: "#A0AEC0", textDecoration: "underline" }}>
                      {" "}
                      Terms of Service
                    </a>
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  )
}

