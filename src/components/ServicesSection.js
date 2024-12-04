// src/components/ServicesSection.js

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 px-4 animate-fade-in bg-gray text-white">
      <h2 className="text-4xl font-bold text-center mb-10">Services</h2>
      <div className="max-w-4xl mx-auto space-y-10">
        <div>
          <h3 className="text-2xl font-semibold mb-2">Aufguss Ceremony</h3>
          <p>
            Immerse yourself in the authentic Aufguss Ceremony, a sensory journey that
            combines aromatic essential oils, expert heat distribution, and meditative
            guidance to elevate your wellness experience.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-2">Guided Breath Work</h3>
          <p>
            Experience transformative breathing techniques designed to enhance your
            well-being:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>
              <strong>Wim Hof Method:</strong> Engage in controlled deep breathing
              exercises that increase oxygen levels, reduce stress, and boost your immune
              system.
            </li>
            <li>
              <strong>Box Breathing:</strong> Practice a rhythmic breathing
              pattern—inhale, hold, exhale, hold—to promote relaxation and mental clarity.
            </li>
            <li>
              <strong>Slow Breathing:</strong> Adopt deliberate, deep breaths to activate
              the parasympathetic nervous system, fostering calmness and reducing anxiety.
            </li>
            <li>
              <strong>Sound Therapy Integration:</strong> Combine breath work with
              therapeutic sounds to enhance relaxation and facilitate a deeper meditative
              state.
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-2">Custom Requests</h3>
          <p>
            I understand that each individual's wellness journey is unique. Whether you're
            seeking personalized breath work sessions, specialized sauna experiences, or
            tailored wellness programs, we are committed to accommodating your specific
            needs to ensure an optimal and personalized experience.
          </p>
        </div>
        {/* Add more services as needed */}
      </div>
    </section>
  );
};

export default ServicesSection;
