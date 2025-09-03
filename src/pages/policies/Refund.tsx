import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, AlertCircle } from "lucide-react";

const Refund = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 lg:px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Refund & Reschedule Policy</h1>
            <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          {/* Quick Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center shadow-soft">
              <CardHeader>
                <CheckCircle className="h-8 w-8 text-success mx-auto mb-4" />
                <CardTitle className="text-lg">7-Day Guarantee</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Full refund on digital products within 7 days
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft">
              <CardHeader>
                <Clock className="h-8 w-8 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">24-Hour Cancellation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Cancel consultations 24 hours in advance for full refund
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft">
              <CardHeader>
                <AlertCircle className="h-8 w-8 text-booking mx-auto mb-4" />
                <CardTitle className="text-lg">Easy Rescheduling</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Reschedule sessions up to 12 hours before at no cost
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Digital Products Refund Policy</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none space-y-4">
                <h4>7-Day Money-Back Guarantee</h4>
                <p>
                  We offer a 7-day money-back guarantee on all our digital meal plans and diet sheets. If you're not completely satisfied with your purchase, you can request a full refund within 7 days of purchase.
                </p>

                <h4>Refund Conditions</h4>
                <ul>
                  <li>Refund request must be made within 7 days of purchase</li>
                  <li>You must provide specific feedback about why the product didn't meet your expectations</li>
                  <li>Refunds will be processed back to the original payment method</li>
                  <li>Processing time: 5-7 business days</li>
                </ul>

                <h4>Non-Refundable Situations</h4>
                <ul>
                  <li>Requests made after the 7-day period</li>
                  <li>Products that have been shared or distributed to others</li>
                  <li>Unreasonable or fraudulent refund requests</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Consultation Sessions Policy</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none space-y-4">
                <h4>Cancellation for Full Refund</h4>
                <p>
                  You can cancel your consultation session for a full refund if you notify us at least 24 hours before your scheduled appointment time.
                </p>

                <h4>Rescheduling Policy</h4>
                <p>
                  You can reschedule your session up to 12 hours before the scheduled time at no additional cost. We understand that life happens, and we're flexible with rescheduling.
                </p>

                <h4>Late Cancellation & No-Show Policy</h4>
                <ul>
                  <li><strong>12-24 hours notice:</strong> 50% refund or free rescheduling</li>
                  <li><strong>Less than 12 hours:</strong> No refund, but one-time rescheduling allowed</li>
                  <li><strong>No-show:</strong> No refund or rescheduling (except emergency situations)</li>
                </ul>

                <h4>Emergency Situations</h4>
                <p>
                  We understand that genuine emergencies can occur. In cases of medical emergencies, family emergencies, or other unforeseen circumstances, please contact us as soon as possible. We'll work with you to find a suitable solution.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How to Request a Refund or Reschedule</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none space-y-4">
                <h4>For Digital Products</h4>
                <ol>
                  <li>Email us at refunds@vinaypendyala.com within 7 days of purchase</li>
                  <li>Include your order number and reason for refund</li>
                  <li>We'll respond within 24-48 hours</li>
                  <li>If approved, refund will be processed within 5-7 business days</li>
                </ol>

                <h4>For Consultation Sessions</h4>
                <ol>
                  <li>Contact us via email or Instagram DM</li>
                  <li>Provide your booking reference number</li>
                  <li>Specify whether you want to cancel or reschedule</li>
                  <li>We'll confirm the changes and process any applicable refunds</li>
                </ol>

                <h4>Contact Information</h4>
                <ul>
                  <li>Email: refunds@vinaypendyala.com</li>
                  <li>Instagram: @pet.nutritioncoach</li>
                  <li>Response time: Within 24-48 hours</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Refund Processing Information</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none space-y-4">
                <h4>Payment Method</h4>
                <p>
                  Refunds will be processed back to the original payment method used for the purchase. This includes:
                </p>
                <ul>
                  <li>Credit/Debit cards</li>
                  <li>UPI payments</li>
                  <li>Net banking</li>
                  <li>Digital wallets</li>
                </ul>

                <h4>Processing Time</h4>
                <ul>
                  <li><strong>Digital wallets/UPI:</strong> 1-3 business days</li>
                  <li><strong>Credit/Debit cards:</strong> 5-7 business days</li>
                  <li><strong>Net banking:</strong> 3-5 business days</li>
                </ul>

                <h4>Partial Refunds</h4>
                <p>
                  In certain circumstances, partial refunds may be offered:
                </p>
                <ul>
                  <li>Late cancellations (as per policy above)</li>
                  <li>Special promotional purchases</li>
                  <li>Bundle packages where only part of the service was unsatisfactory</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Disputes and Escalation</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none space-y-4">
                <p>
                  If you're not satisfied with our refund decision, you can escalate the matter by:
                </p>
                <ol>
                  <li>Requesting a review of your case with detailed explanation</li>
                  <li>Speaking directly with Vinay Pendyala for resolution</li>
                  <li>Providing additional documentation if applicable</li>
                </ol>
                <p>
                  We're committed to fair and reasonable resolution of all refund requests and will work with you to find a satisfactory solution.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Policy Updates</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                  This refund policy may be updated from time to time to reflect changes in our services or legal requirements. Any changes will be posted on our website with an updated date. Continued use of our services after changes indicates acceptance of the updated policy.
                </p>
                <p>
                  For any questions about this refund policy, please don't hesitate to contact us using the information provided above.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Refund;