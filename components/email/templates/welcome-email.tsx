export function WelcomeEmailTemplate() {
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
        {/* Header */}
        <tr>
          <td style={{ padding: "20px", backgroundColor: "#9AE6B4", textAlign: "center" }}>
            <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
              <tr>
                <td style={{ textAlign: "center" }}>
                  <h1 style={{ color: "#2D3748", fontSize: "24px", margin: "0", fontWeight: "normal" }}>
                    Welcome to Lemonade
                  </h1>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        {/* Content */}
        <tr>
          <td style={{ padding: "30px 20px" }}>
            <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
              <tr>
                <td style={{ paddingBottom: "20px" }}>
                  <p style={{ fontSize: "16px", lineHeight: "1.5", color: "#4A5568", margin: "0 0 20px 0" }}>
                    Hi [Customer Name],
                  </p>
                  <p style={{ fontSize: "16px", lineHeight: "1.5", color: "#4A5568", margin: "0 0 20px 0" }}>
                    Thank you for signing up for Lemonade! We're excited to have you on board.
                  </p>
                  <p style={{ fontSize: "16px", lineHeight: "1.5", color: "#4A5568", margin: "0 0 20px 0" }}>
                    Our platform helps teams collaborate more effectively, manage projects efficiently, and achieve
                    better results together.
                  </p>
                </td>
              </tr>

              {/* CTA Button */}
              <tr>
                <td style={{ padding: "10px 0 30px 0", textAlign: "center" }}>
                  <table cellPadding="0" cellSpacing="0" border={0} style={{ margin: "0 auto" }}>
                    <tr>
                      <td
                        style={{
                          backgroundColor: "#84CC16",
                          borderRadius: "28px",
                          padding: "12px 24px",
                          textAlign: "center",
                        }}
                      >
                        <a
                          href="https://example.com/get-started"
                          style={{
                            color: "#FFFFFF",
                            fontSize: "16px",
                            textDecoration: "none",
                            display: "inline-block",
                          }}
                        >
                          Get Started
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              {/* Features */}
              <tr>
                <td style={{ padding: "20px 0" }}>
                  <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
                    <tr>
                      <td style={{ padding: "0 0 20px 0" }}>
                        <h2 style={{ fontSize: "18px", color: "#2D3748", margin: "0 0 15px 0", fontWeight: "normal" }}>
                          Here's what you can do with Lemonade:
                        </h2>
                      </td>
                    </tr>

                    {/* Feature 1 */}
                    <tr>
                      <td style={{ padding: "0 0 15px 0" }}>
                        <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
                          <tr>
                            <td width="60" valign="top">
                              <div
                                style={{
                                  width: "40px",
                                  height: "40px",
                                  borderRadius: "20px",
                                  backgroundColor: "#F0FFF4",
                                  textAlign: "center",
                                  lineHeight: "40px",
                                  color: "#84CC16",
                                  fontSize: "18px",
                                  fontWeight: "bold",
                                }}
                              >
                                1
                              </div>
                            </td>
                            <td>
                              <p style={{ fontSize: "16px", margin: "0", color: "#4A5568", fontWeight: "bold" }}>
                                Team Collaboration
                              </p>
                              <p style={{ fontSize: "14px", margin: "5px 0 0 0", color: "#718096" }}>
                                Connect with your team in real-time
                              </p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>

                    {/* Feature 2 */}
                    <tr>
                      <td style={{ padding: "0 0 15px 0" }}>
                        <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
                          <tr>
                            <td width="60" valign="top">
                              <div
                                style={{
                                  width: "40px",
                                  height: "40px",
                                  borderRadius: "20px",
                                  backgroundColor: "#F0FFF4",
                                  textAlign: "center",
                                  lineHeight: "40px",
                                  color: "#84CC16",
                                  fontSize: "18px",
                                  fontWeight: "bold",
                                }}
                              >
                                2
                              </div>
                            </td>
                            <td>
                              <p style={{ fontSize: "16px", margin: "0", color: "#4A5568", fontWeight: "bold" }}>
                                Project Management
                              </p>
                              <p style={{ fontSize: "14px", margin: "5px 0 0 0", color: "#718096" }}>
                                Track progress and manage tasks efficiently
                              </p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>

                    {/* Feature 3 */}
                    <tr>
                      <td style={{ padding: "0 0 15px 0" }}>
                        <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
                          <tr>
                            <td width="60" valign="top">
                              <div
                                style={{
                                  width: "40px",
                                  height: "40px",
                                  borderRadius: "20px",
                                  backgroundColor: "#F0FFF4",
                                  textAlign: "center",
                                  lineHeight: "40px",
                                  color: "#84CC16",
                                  fontSize: "18px",
                                  fontWeight: "bold",
                                }}
                              >
                                3
                              </div>
                            </td>
                            <td>
                              <p style={{ fontSize: "16px", margin: "0", color: "#4A5568", fontWeight: "bold" }}>
                                Analytics
                              </p>
                              <p style={{ fontSize: "14px", margin: "5px 0 0 0", color: "#718096" }}>
                                Gain insights with powerful reporting tools
                              </p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              {/* Help Section */}
              <tr>
                <td style={{ padding: "20px 0", borderTop: "1px solid #E2E8F0" }}>
                  <p style={{ fontSize: "16px", lineHeight: "1.5", color: "#4A5568", margin: "0 0 10px 0" }}>
                    If you have any questions, feel free to reach out to our support team at{" "}
                    <a href="mailto:support@Lemonade.com" style={{ color: "#84CC16", textDecoration: "none" }}>
                      support@Lemonade.com
                    </a>
                    .
                  </p>
                  <p style={{ fontSize: "16px", lineHeight: "1.5", color: "#4A5568", margin: "0" }}>
                    We're looking forward to helping you achieve your goals!
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
                    <a href="https://example.com/unsubscribe" style={{ color: "#A0AEC0", textDecoration: "underline" }}>
                      Unsubscribe
                    </a>{" "}
                    •
                    <a href="https://example.com/privacy" style={{ color: "#A0AEC0", textDecoration: "underline" }}>
                      {" "}
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
