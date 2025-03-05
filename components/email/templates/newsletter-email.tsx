export function NewsletterTemplate() {
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
        {/* Header with Image */}
        <tr>
          <td
            style={{
              padding: "0",
              textAlign: "center",
              backgroundColor: "#84CC16",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600&h=200&fit=crop&crop=top"
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

        {/* Newsletter Title */}
        <tr>
          <td
            style={{
              padding: "30px 20px 20px 20px",
              textAlign: "center",
              backgroundColor: "#FFFFFF",
            }}
          >
            <h1 style={{ color: "#2D3748", fontSize: "24px", margin: "0", fontWeight: "normal" }}>
              Lemonade Monthly Newsletter
            </h1>
            <p style={{ color: "#718096", fontSize: "16px", margin: "10px 0 0 0" }}>
              March 2025 • Latest Updates & Tips
            </p>
          </td>
        </tr>

        {/* Main Content */}
        <tr>
          <td style={{ padding: "20px" }}>
            {/* Feature Article */}
            <table width="100%" cellPadding="0" cellSpacing="0" border={0} style={{ marginBottom: "30px" }}>
              <tr>
                <td>
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=300&fit=crop"
                    alt="Team collaboration"
                    width="600"
                    style={{
                      display: "block",
                      width: "100%",
                      maxWidth: "600px",
                      height: "auto",
                      border: "0",
                      borderRadius: "8px",
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td style={{ padding: "20px 0" }}>
                  <h2 style={{ color: "#2D3748", fontSize: "20px", margin: "0 0 10px 0", fontWeight: "normal" }}>
                    Introducing: Advanced Team Collaboration Features
                  </h2>
                  <p style={{ fontSize: "16px", lineHeight: "1.5", color: "#4A5568", margin: "0 0 15px 0" }}>
                    We're excited to announce our new suite of team collaboration tools designed to help your team work
                    more efficiently together.
                  </p>
                  <p style={{ fontSize: "16px", lineHeight: "1.5", color: "#4A5568", margin: "0 0 20px 0" }}>
                    The new features include real-time document editing, improved commenting system, and integrated
                    video conferencing.
                  </p>
                  <a
                    href="https://example.com/blog/team-collaboration"
                    style={{
                      color: "#84CC16",
                      textDecoration: "none",
                      fontWeight: "bold",
                    }}
                  >
                    Read the full article →
                  </a>
                </td>
              </tr>
            </table>

            {/* News & Updates */}
            <table width="100%" cellPadding="0" cellSpacing="0" border={0} style={{ marginBottom: "30px" }}>
              <tr>
                <td style={{ borderBottom: "1px solid #E2E8F0", paddingBottom: "10px", marginBottom: "20px" }}>
                  <h2 style={{ color: "#2D3748", fontSize: "18px", margin: "0", fontWeight: "normal" }}>
                    News & Updates
                  </h2>
                </td>
              </tr>

              {/* Update 1 */}
              <tr>
                <td style={{ padding: "15px 0" }}>
                  <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
                    <tr>
                      <td width="120" style={{ verticalAlign: "top" }}>
                        <img
                          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=120&h=120&fit=crop"
                          alt="Analytics"
                          width="120"
                          style={{
                            display: "block",
                            width: "100%",
                            maxWidth: "120px",
                            height: "auto",
                            border: "0",
                            borderRadius: "6px",
                          }}
                        />
                      </td>
                      <td width="20"></td>
                      <td style={{ verticalAlign: "top" }}>
                        <h3 style={{ color: "#2D3748", fontSize: "16px", margin: "0 0 5px 0", fontWeight: "bold" }}>
                          Enhanced Analytics Dashboard
                        </h3>
                        <p style={{ fontSize: "14px", lineHeight: "1.5", color: "#4A5568", margin: "0 0 10px 0" }}>
                          Our analytics dashboard now includes customizable reports and improved data visualization
                          options.
                        </p>
                        <a
                          href="https://example.com/updates/analytics"
                          style={{
                            color: "#84CC16",
                            textDecoration: "none",
                            fontSize: "14px",
                          }}
                        >
                          Learn more →
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              {/* Update 2 */}
              <tr>
                <td style={{ padding: "15px 0", borderTop: "1px solid #E2E8F0" }}>
                  <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
                    <tr>
                      <td width="120" style={{ verticalAlign: "top" }}>
                        <img
                          src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72?w=120&h=120&fit=crop"
                          alt="Mobile app"
                          width="120"
                          style={{
                            display: "block",
                            width: "100%",
                            maxWidth: "120px",
                            height: "auto",
                            border: "0",
                            borderRadius: "6px",
                          }}
                        />
                      </td>
                      <td width="20"></td>
                      <td style={{ verticalAlign: "top" }}>
                        <h3 style={{ color: "#2D3748", fontSize: "16px", margin: "0 0 5px 0", fontWeight: "bold" }}>
                          Mobile App Update
                        </h3>
                        <p style={{ fontSize: "14px", lineHeight: "1.5", color: "#4A5568", margin: "0 0 10px 0" }}>
                          Version 2.5 of our mobile app is now available with offline mode and improved performance.
                        </p>
                        <a
                          href="https://example.com/updates/mobile-app"
                          style={{
                            color: "#84CC16",
                            textDecoration: "none",
                            fontSize: "14px",
                          }}
                        >
                          Learn more →
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>

            {/* Tips & Tricks */}
            <table
              width="100%"
              cellPadding="0"
              cellSpacing="0"
              border={0}
              style={{
                marginBottom: "30px",
                backgroundColor: "#F7FAFC",
                borderRadius: "8px",
                padding: "20px",
              }}
            >
              <tr>
                <td style={{ borderBottom: "1px solid #E2E8F0"}}>
                  <h2 style={{ color: "#2D3748", fontSize: "18px", margin: "0", fontWeight: "normal", padding: "10px" }}>
                    Tip of the Month
                  </h2>
                </td>
              </tr>
              <tr>
                <td style={{ padding: "10px 0" }}>
                  <h3 style={{ color: "#2D3748", fontSize: "16px", margin: "0 0 10px 0", fontWeight: "bold",padding: "10px" }}>
                    Keyboard Shortcuts to Boost Productivity
                  </h3>
                  <p style={{ fontSize: "14px", lineHeight: "1.5", color: "#4A5568", margin: "0 0 15px 0", padding: "10px" }}>
                    Did you know you can use Ctrl+Shift+P (or Cmd+Shift+P on Mac) to quickly access the command palette?
                    This gives you instant access to over 50 actions without navigating through menus.
                  </p>
                  <a
                    href="https://example.com/tips/keyboard-shortcuts"
                    style={{
                      color: "#84CC16",
                      textDecoration: "none",
                      fontSize: "14px",
                      fontWeight: "bold",
                      padding: "10px"
                    }}
                  >
                    View all keyboard shortcuts →
                  </a>
                </td>
              </tr>
            </table>

            {/* Upcoming Webinar */}
            <table width="100%" cellPadding="0" cellSpacing="0" border={0} style={{ marginBottom: "30px" }}>
              <tr>
                <td
                  style={{
                    padding: "20px",
                    backgroundColor: "#F0FFF4",
                    borderRadius: "8px",
                    borderLeft: "4px solid #84CC16",
                  }}
                >
                  <h3 style={{ color: "#2D3748", fontSize: "16px", margin: "0 0 10px 0", fontWeight: "bold" }}>
                    Upcoming Webinar: Mastering Project Management
                  </h3>
                  <p style={{ fontSize: "14px", lineHeight: "1.5", color: "#4A5568", margin: "0 0 15px 0" }}>
                    Join us on March 15th at 11:00 AM PST for a live webinar on advanced project management techniques.
                  </p>
                  <a
                    href="https://example.com/webinars/register"
                    style={{
                      display: "inline-block",
                      backgroundColor: "#84CC16",
                      color: "#FFFFFF",
                      textDecoration: "none",
                      fontSize: "14px",
                      padding: "8px 16px",
                      borderRadius: "20px",
                    }}
                  >
                    Register Now
                  </a>
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
                  <p style={{ fontSize: "12px", color: "#A0AEC0", margin: "0 0 15px 0" }}>
                    123 Main Street, Suite 100, San Francisco, CA 94105
                  </p>
                  <p style={{ fontSize: "12px", color: "#A0AEC0", margin: "0 0 15px 0" }}>
                    <a href="https://example.com/preferences" style={{ color: "#A0AEC0", textDecoration: "underline" }}>
                      Email Preferences
                    </a>{" "}
                    •
                    <a href="https://example.com/unsubscribe" style={{ color: "#A0AEC0", textDecoration: "underline" }}>
                      {" "}
                      Unsubscribe
                    </a>{" "}
                    •
                    <a href="https://example.com/privacy" style={{ color: "#A0AEC0", textDecoration: "underline" }}>
                      {" "}
                      Privacy Policy
                    </a>
                  </p>
                  <p style={{ fontSize: "12px", color: "#A0AEC0", margin: "0" }}>
                    © 2025 Lemonade. All rights reserved.
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

