import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 lg:px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <h4>Personal Information</h4>
                <p>We collect information you provide directly to us, such as:</p>
                <ul>
                  <li>Name and contact information (email, phone number)</li>
                  <li>Payment information for processing transactions</li>
                  <li>Pet information (breed, age, health conditions, dietary preferences)</li>
                  <li>Communication preferences and feedback</li>
                </ul>

                <h4>Automatically Collected Information</h4>
                <ul>
                  <li>Website usage data through analytics tools</li>
                  <li>Device information and IP address</li>
                  <li>Cookies and similar technologies for website functionality</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>We use the collected information for:</p>
                <ul>
                  <li>Providing and delivering our services (meal plans, consultations)</li>
                  <li>Processing payments and sending receipts</li>
                  <li>Communicating with you about your orders and providing support</li>
                  <li>Improving our services and website functionality</li>
                  <li>Sending promotional communications (with your consent)</li>
                  <li>Complying with legal obligations</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Information Sharing</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>We do not sell your personal information. We may share your information with:</p>
                <ul>
                  <li>Payment processors (Razorpay) for transaction processing</li>
                  <li>Email service providers for communication</li>
                  <li>Analytics services (Google Analytics) for website improvement</li>
                  <li>Legal authorities when required by law</li>
                </ul>
                <p>
                  All third-party services are required to protect your information and use it only for specified purposes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Data Security</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes:
                </p>
                <ul>
                  <li>Secure SSL encryption for data transmission</li>
                  <li>Secure payment processing through certified providers</li>
                  <li>Regular security assessments and updates</li>
                  <li>Limited access to personal information on a need-to-know basis</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Cookies and Tracking</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                  We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, and understand visitor behavior. You can control cookie settings through your browser preferences.
                </p>
                <p>Types of cookies we use:</p>
                <ul>
                  <li>Essential cookies for website functionality</li>
                  <li>Analytics cookies for understanding user behavior</li>
                  <li>Marketing cookies for advertising (with consent)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Your Rights</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>You have the right to:</p>
                <ul>
                  <li>Access your personal information we hold</li>
                  <li>Correct inaccurate or incomplete information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of promotional communications</li>
                  <li>Port your data to another service provider</li>
                  <li>File a complaint with data protection authorities</li>
                </ul>
                <p>
                  To exercise these rights, please contact us using the information provided below.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Data Retention</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                  We retain your personal information only for as long as necessary to provide our services and comply with legal obligations. Specifically:
                </p>
                <ul>
                  <li>Account information: Until account deletion or 3 years of inactivity</li>
                  <li>Transaction records: 7 years for tax and legal compliance</li>
                  <li>Consultation records: 5 years for professional practice requirements</li>
                  <li>Marketing communications: Until you unsubscribe</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Children's Privacy</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                  Our services are not directed to children under 18 years of age. We do not knowingly collect personal information from children under 18. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. International Data Transfers</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                  Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with applicable data protection laws.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>10. Changes to This Policy</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the "Last updated" date.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>11. Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                  If you have any questions about this Privacy Policy or our data practices, please contact us at:
                </p>
                <p>
                  Email: privacy@vinaypendyala.com<br />
                  Instagram: @pet.nutritioncoach<br />
                  Address: [Your Business Address]
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;