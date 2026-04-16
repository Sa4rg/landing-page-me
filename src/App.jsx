import { Hero } from './features/hero/Hero'
import { Projects } from './features/projects/Projects'
import { TechStack } from './features/tech-stack/TechStack'
import { Certifications } from './features/certifications/Certifications'
import { Contact } from './features/contact/Contact'

function App() {
  // Flag to show/hide certifications section (activate when certificate arrives)
  const showCertifications = false

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Hero />
      <Projects />
      <TechStack />
      
      {/* Certifications Section - Hidden until certificate arrives */}
      {showCertifications && <Certifications />}
      
      <Contact />
    </div>
  )
}

export default App
