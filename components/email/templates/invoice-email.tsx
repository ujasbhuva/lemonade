export function InvoiceTemplate() {
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
              padding: "30px 20px",
              textAlign: "center",
              backgroundImage: "linear-gradient(to right, #84CC16, #9AE6B4)",
              backgroundSize: "cover",
            }}
          >
            <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
              <tr>
                <td style={{ textAlign: "center" }}>
                  <h1
                    style={{
                      color: "#FFFFFF",
                      fontSize: "24px",
                      margin: "0",
                      fontWeight: "normal",
                      textShadow: "0 1px 2px rgba(0,0,0,0.1)",
                    }}
                  >
                    Your Monthly Invoice
                  </h1>
                  <p style={{ color: "#FFFFFF", fontSize: "16px", margin: "10px 0 0 0", opacity: "0.9" }}>March 2025</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        {/* Invoice Summary */}
        <tr>
          <td style={{ padding: "30px 20px" }}>
            <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
              <tr>
                <td style={{ paddingBottom: "20px" }}>
                  <p style={{ fontSize: "16px", lineHeight: "1.5", color: "#4A5568", margin: "0 0 20px 0" }}>
                    Hi [Customer Name],
                  </p>
                  <p style={{ fontSize: "16px", lineHeight: "1.5", color: "#4A5568", margin: "0 0 20px 0" }}>
                    Thank you for your continued subscription to Lemonade. Please find your invoice details below.
                  </p>
                </td>
              </tr>

              {/* Invoice Details */}
              <tr>
                <td style={{ padding: "20px", backgroundColor: "#F7FAFC", borderRadius: "8px", marginBottom: "20px" }}>
                  <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
                    <tr>
                      <td style={{ paddingBottom: "15px" }}>
                        <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
                          <tr>
                            <td width="50%" style={{ verticalAlign: "top" }}>
                              <p style={{ fontSize: "14px", color: "#718096", margin: "0 0 5px 0" }}>Invoice Number</p>
                              <p style={{ fontSize: "16px", color: "#2D3748", margin: "0", fontWeight: "bold" }}>
                                INV-2025-0342
                              </p>
                            </td>
                            <td width="50%" style={{ verticalAlign: "top", textAlign: "right" }}>
                              <p style={{ fontSize: "14px", color: "#718096", margin: "0 0 5px 0" }}>Date Issued</p>
                              <p style={{ fontSize: "16px", color: "#2D3748", margin: "0", fontWeight: "bold" }}>
                                March 1, 2025
                              </p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ paddingBottom: "15px", borderBottom: "1px solid #E2E8F0" }}></td>
                    </tr>
                    <tr>
                      <td style={{ paddingTop: "15px", paddingBottom: "15px" }}>
                        <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
                          <tr>
                            <td width="70%" style={{ fontSize: "16px", color: "#4A5568" }}>
                              Lemonade Pro Plan (Monthly)
                            </td>
                            <td width="30%" style={{ fontSize: "16px", color: "#4A5568", textAlign: "right" }}>
                              $49.00
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ paddingTop: "5px", paddingBottom: "5px", borderBottom: "1px solid #E2E8F0" }}>
                        <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
                          <tr>
                            <td width="70%" style={{ fontSize: "14px", color: "#718096" }}>
                              Additional Team Members (3)
                            </td>
                            <td width="30%" style={{ fontSize: "14px", color: "#718096", textAlign: "right" }}>
                              $30.00
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ paddingTop: "15px" }}>
                        <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
                          <tr>
                            <td width="70%" style={{ fontSize: "16px", color: "#4A5568", fontWeight: "bold" }}>
                              Total
                            </td>
                            <td
                              width="30%"
                              style={{ fontSize: "16px", color: "#4A5568", textAlign: "right", fontWeight: "bold" }}
                            >
                              $79.00
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              {/* Payment Status */}
              <tr>
                <td style={{ padding: "20px 0" }}>
                  <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
                    <tr>
                      <td
                        style={{
                          backgroundColor: "#F0FFF4",
                          padding: "15px",
                          borderRadius: "8px",
                          borderLeft: "4px solid #84CC16",
                        }}
                      >
                        <p style={{ fontSize: "16px", color: "#2D3748", margin: "0", fontWeight: "bold" }}>
                          Payment Successful
                        </p>
                        <p style={{ fontSize: "14px", color: "#4A5568", margin: "5px 0 0 0" }}>
                          Your payment was processed successfully on March 1, 2025.
                        </p>
                      </td>
                    </tr>
                  </table>
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
                          href="https://example.com/view-invoice"
                          style={{
                            color: "#FFFFFF",
                            fontSize: "16px",
                            textDecoration: "none",
                            display: "inline-block",
                          }}
                        >
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
                    <a href="https://example.com/billing" style={{ color: "#A0AEC0", textDecoration: "underline" }}>
                      Billing Settings
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

