import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 lg:px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>
            <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                  By accessing and using the services provided by Vinay Pendyala Pet Nutrition Coach, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, you must not use our services.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Services Description</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>We provide the following services:</p>
                <ul>
                  <li>Digital pet nutrition meal plans and diet sheets</li>
                  <li>One-on-one pet nutrition consultation sessions</li>
                  <li>Educational content and guidance on pet nutrition</li>
                  <li>Email support related to purchased plans and services</li>
                </ul>
                <p>
                  Our services are for informational and educational purposes only and do not replace professional veterinary advice.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Digital Products</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                  Our digital meal plans are delivered as downloadable Google Sheets or PDF files. Once purchased and downloaded, these products are non-returnable except as specified in our refund policy.
                </p>
                <p>
                  You are granted a personal, non-transferable license to use the digital products for your own pets only. Redistribution, resale, or sharing of these materials is strictly prohibited.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Consultation Services</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                  Consultation sessions are conducted online via video call platforms such as Zoom or Google Meet. Sessions are typically 45-60 minutes long.
                </p>
                <p>
                  Cancellations must be made at least 24 hours in advance for a full refund. Rescheduling is allowed up to 12 hours before the scheduled session.
                </p>
                <p>
                  We reserve the right to record sessions for quality assurance purposes with your consent.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Payment Terms</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                  All payments are processed in Indian Rupees (INR) through secure payment gateways including Razorpay. Applicable taxes will be added at checkout.
                </p>
                <p>
                  Payment must be completed before access to digital products or consultation services is granted.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Disclaimer</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                  The information and recommendations provided are for educational purposes only and should not replace professional veterinary care. Always consult with a qualified veterinarian before making significant changes to your pet's diet, especially if your pet has health conditions.
                </p>
                <p>
                  We are not liable for any adverse effects resulting from the implementation of our recommendations. Pet owners are responsible for monitoring their pets and seeking veterinary care when necessary.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                  All content, including but not limited to meal plans, educational materials, and consultation advice, is the intellectual property of Vinay Pendyala Pet Nutrition Coach and is protected by copyright laws.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Privacy</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                  Your privacy is important to us. Please refer to our Privacy Policy for information on how we collect, use, and protect your personal information.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                  To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>10. Governing Law</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                  These terms are governed by the laws of India. Any disputes will be subject to the jurisdiction of the courts in [Your City/State].
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>11. Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                  If you have any questions about these Terms & Conditions, please contact us at:
                </p>
                <p>
                  Email: contact@vinaypendyala.com<br />
                  Instagram: @pet.nutritioncoach
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;