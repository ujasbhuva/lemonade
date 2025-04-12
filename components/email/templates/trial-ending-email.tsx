export function TrialEndingTemplate() {
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
              src="https://images.unsplash.com/photo-1579546929662-711aa81148cf?w=600&h=150&fit=crop"
              alt="Colorful gradient"
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
                    Your Trial is Ending Soon
                  </h1>
                  <p style={{ fontSize: "16px", lineHeight: "1.5", color: "#718096", margin: "0" }}>
                    Only 3 days left in your free trial
                  </p>
                </td>
              </tr>
              <tr>
                <td style={{ paddingBottom: "30px" }}>
                  <p style={{ fontSize: "16px", lineHeight: "1.5", color: "#4A5568", margin: "0 0 20px 0" }}>
                    Hi [Customer Name],
                  </p>
                  <p style={{ fontSize: "16px", lineHeight: "1.5", color: "#4A5568", margin: "0 0 20px 0" }}>
                    We hope you've been enjoying your Lemonade trial! Just a friendly reminder that your free trial
                    period will end in 3 days on <strong>March 7, 2025</strong>.
                  </p>
                  <p style={{ fontSize: "16px", lineHeight: "1.5", color: "#4A5568", margin: "0 0 20px 0" }}>
                    To continue using Lemonade without interruption, please select a plan and set up your payment
                    information before your trial ends.
                  </p>
                </td>
              </tr>

              {/* Trial Usage Summary */}
              <tr>
                <td style={{ padding: "0 0 30px 0" }}>
                  <table
                    width="100%"
                    cellPadding="0"
                    cellSpacing="0"
                    border={0}
                    style={{
                      backgroundColor: "#F7FAFC",
                      borderRadius: "8px",
                      padding: "20px",
                    }}
                  >
                    <tr>
                      <td style={{ paddingBottom: "15px" }}>
                        <h2 style={{ color: "#2D3748", fontSize: "18px", margin: "0", fontWeight: "normal" }}>
                          Your Trial Usage Summary
                        </h2>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
                          <tr>
                            <td width="33%" style={{ verticalAlign: "top", padding: "0 10px 15px 0" }}>
                              <p style={{ fontSize: "14px", color: "#718096", margin: "0 0 5px 0" }}>
                                Projects Created
                              </p>
                              <p style={{ fontSize: "24px", color: "#2D3748", margin: "0", fontWeight: "bold" }}>7</p>
                            </td>
                            <td width="33%" style={{ verticalAlign: "top", padding: "0 10px 15px 10px" }}>
                              <p style={{ fontSize: "14px", color: "#718096", margin: "0 0 5px 0" }}>Team Members</p>
                              <p style={{ fontSize: "24px", color: "#2D3748", margin: "0", fontWeight: "bold" }}>4</p>
                            </td>
                            <td width="33%" style={{ verticalAlign: "top", padding: "0 0 15px 10px" }}>
                              <p style={{ fontSize: "14px", color: "#718096", margin: "0 0 5px 0" }}>Storage Used</p>
                              <p style={{ fontSize: "24px", color: "#2D3748", margin: "0", fontWeight: "bold" }}>
                                1.2 GB
                              </p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              {/* Plans */}
              <tr>
                <td style={{ padding: "0 0 30px 0" }}>
                  <h2 style={{ color: "#2D3748", fontSize: "18px", margin: "0 0 20px 0", fontWeight: "normal" }}>
                    Choose a Plan That's Right for You
                  </h2>

                  <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
                    {/* Pro Plan */}
                    <tr>
                      <td
                        style={{
                          padding: "20px",
                          backgroundColor: "#F0FFF4",
                          borderRadius: "8px",
                          marginBottom: "15px",
                          border: "1px solid #9AE6B4",
                        }}
                      >
                        <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
                          <tr>
                            <td>
                              <h3
                                style={{ color: "#2D3748", fontSize: "18px", margin: "0 0 5px 0", fontWeight: "bold" }}
                              >
                                Pro Plan
                              </h3>
                              <p style={{ fontSize: "14px", color: "#4A5568", margin: "0 0 15px 0" }}>
                                Perfect for growing teams
                              </p>
                              <p
                                style={{ fontSize: "24px", color: "#2D3748", margin: "0 0 15px 0", fontWeight: "bold" }}
                              >
                                $49<span style={{ fontSize: "14px", fontWeight: "normal" }}>/month</span>
                              </p>
                              <ul
                                style={{
                                  padding: "0",
                                  margin: "0 0 20px 0",
                                  listStyle: "none",
                                }}
                              >
                                <li
                                  style={{
                                    fontSize: "14px",
                                    color: "#4A5568",
                                    margin: "0 0 10px 0",
                                    backgroundImage:
                                      "url('https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/check.svg')",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "16px",
                                    backgroundPosition: "left center",
                                    paddingLeft: "25px",
                                  }}
                                >
                                  Unlimited projects
                                </li>
                                <li
                                  style={{
                                    fontSize: "14px",
                                    color: "#4A5568",
                                    margin: "0 0 10px 0",
                                    backgroundImage:
                                      "url('https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/check.svg')",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "16px",
                                    backgroundPosition: "left center",
                                    paddingLeft: "25px",
                                  }}
                                >
                                  Up to 10 team members
                                </li>
                                <li
                                  style={{
                                    fontSize: "14px",
                                    color: "#4A5568",
                                    margin: "0 0 10px 0",
                                    backgroundImage:
                                      "url('https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/check.svg')",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "16px",
                                    backgroundPosition: "left center",
                                    paddingLeft: "25px",
                                  }}
                                >
                                  10GB storage
                                </li>
                                <li
                                  style={{
                                    fontSize: "14px",
                                    color: "#4A5568",
                                    margin: "0",
                                    backgroundImage:
                                      "url('https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/check.svg')",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "16px",
                                    backgroundPosition: "left center",
                                    paddingLeft: "25px",
                                  }}
                                >
                                  Priority support
                                </li>
                              </ul>
                              <div style={{ textAlign: "center" }}>
                                <a
                                  href="https://example.com/subscribe/pro"
                                  style={{
                                    display: "inline-block",
                                    backgroundColor: "#84CC16",
                                    color: "#FFFFFF",
                                    textDecoration: "none",
                                    fontSize: "16px",
                                    padding: "10px 20px",
                                    borderRadius: "24px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  Choose Pro Plan
                                </a>
                              </div>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              {/* Need Help */}
              <tr>
                <td style={{ padding: "20px 0", borderTop: "1px solid #E2E8F0" }}>
                  <p style={{ fontSize: "16px", lineHeight: "1.5", color: "#4A5568", margin: "0 0 10px 0" }}>
                    If you have any questions about our plans or need help choosing the right option for your team, our
                    support team is here to help.
                  </p>
                  <p style={{ fontSize: "16px", lineHeight: "1.5", color: "#4A5568", margin: "0" }}>
                    Contact us at{" "}
                    <a href="mailto:support@Lemonade.com" style={{ color: "#84CC16", textDecoration: "none" }}>
                      support@Lemonade.com
                    </a>{" "}
                    or schedule a call with our customer success team.
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
