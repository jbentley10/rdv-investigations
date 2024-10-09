import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Shield } from "lucide-react"

export default function Component() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">RDV Investigations</h1>
          <p className="text-xl mt-2">A Full Service Private Investigation Agency</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Establishing The Information That You Need</h2>
          <p className="text-lg mb-4">
            Owned and Managed by a former Police Officer, RDV INVESTIGATIONS was established in 1990 and provides professional, confidential and affordable private investigations and related services to clients throughout the Palm Springs area, Riverside County and the State of California.
          </p>
          <p className="text-lg mb-4">
            All Types of investigations conducted: Criminal, Civil, Domestic
          </p>
          <div className="flex items-center text-primary">
            <Shield className="mr-2" />
            <p className="font-semibold">Palm Springs, California</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
          <Card>
            <CardHeader>
              <CardTitle>High Standards & Modern Methods</CardTitle>
              <CardDescription>Combining tradition with state-of-the-art technology</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 text-primary" />
                  <span>Adheres to the highest standards of the Investigative profession</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 text-primary" />
                  <span>Discreet, experienced, affordable, and honest</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 text-primary" />
                  <span>Provides clients with photographic and video evidence when applicable</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 text-primary" />
                  <span>Detailed written reports provided upon request</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 text-primary" />
                  <span>Results oriented approach</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Surveillance, Domestic Investigations",
              "Infidelity and Adultery - Are They Cheating?",
              "Background Screening & Investigations",
              "Skip Tracing / People Locates",
              "Missing Persons",
              "Asset Searches",
              "Insurance Fraud",
              "Process Service",
              "Body Guard/Personal Protection",
              "Attorney Services/Trial Preparation",
              "Corporate Investigations",
              "Criminal Investigations",
              "Civil Investigations",
              "Children's Rights, Child Abuse",
              "Child Custody",
              "Elder Abuse",
              "Accident Investigations/Personal Injury",
              "Identity Theft",
              "Security Consulting",
              "Covert Video",
              "Surveillance Specialists",
            ].map((service, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg">{service}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-12 text-center">
          <Button size="lg">Contact Us for a Consultation</Button>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-4 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 RDV Investigations. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
