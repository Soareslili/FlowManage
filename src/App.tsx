import { Hero } from "./components/landing/Hero"
import { Header } from "./components/landing/Header"
import { Benefits } from "./components/landing/Beneficio"
import { HowItWorks } from "./components/landing/HowItWorks"
import { DashboardPreview } from "./components/landing/DashboardPreview"
import { TargetAudience } from "./components/landing/TargetAudience"
import { Testimonials } from "./components/landing/Testimonials"
import { FAQ } from "./components/landing/FAQ"
import { FinalCTA } from "./components/landing/FinalCTA"
import { Footer } from "./components/landing/Footer"
import { ChatBot } from "./components/landing/ChatBot"


function App() {


  return (
    <>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <Benefits />
          <HowItWorks />
          <DashboardPreview />
          <TargetAudience />
          <Testimonials />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
        <ChatBot />

      </div>

    </>

  )
}

export default App
