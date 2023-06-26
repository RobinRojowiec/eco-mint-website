import { ChartPieIcon, LightBulbIcon, AcademicCapIcon, RocketLaunchIcon  } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Token-Investments.',
    description:
      'Bei Token-Investments handelt es sich um regulierte, elektronische Wertpapiere im Sinne des eWpG. Jeder Token repräsentiert einen Anteil an dem Projekt als tokenisierten Schuldverschreibung. Damit werden schuldrechtliche Ansprüche an einem Vermögenswert auf Investoren übertragen.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Energieprojekte.',
    description: 'Gemeinsam haben Investoren die Möglichkeit in den Ausbau von Projekten der erneuerbaren Energien zu investiere, wie Solarparks, Wind- oder Wasserkraftanlagen sowie Ladeinfrastruktur für Elektroautos.',
    icon: LightBulbIcon,
  },
  {
    name: 'Expertise.',
    description: 'EcoMint arbeitet mit einem Netzwerk von Experten im Bereich der erneuerbaren Energien, der Finanzierungen und der Regulatorik zusammen, um Projekte sorgfältig auszusuchen, zu planen und sicher umzusetzen.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Investment-Anteil.',
    description: 'Investments in EcoMint Token sind schon ab kleinen Beträgen möglich. Damit wird eine Vermögensklasse, die bisher exklusiv professionellen Kunden zugänglich war, für alle geöffnet. Die Token sind 24/7 frei handelbar.',
    icon: ChartPieIcon,
  },
]

export default function IntroMain() {
  return (
    <div className="overflow-hidden bg-white py-2 sm:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-2">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-ecomint-green">Gemeinsam für eine grüne Zukunft</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Investments in die Energiewende</p>
              <p className="mt-6 text-lg leading-2 text-gray-600">
              Die Bewältigung der Klimakrise ist die größte Herausforderung der Gegenwart. Nur gemeinsam können wir unseren Energieverbrauch 
              reduzieren und den erforderlichen Energieverbrauch mit erneuerbaren Energien decken. Im Jahr 2022 wurden erst 49,6% des Energiebedarfs 
              aus erneuerbaren Quellen gewonnen. Die Anzahl der Projekte für erneuerbare Energien muss also stark steigen, damit wir das Ziel der 
              Bundesregierung, bis 2030 80% erneuerbare Energien zu nutzen, erreichen zu können, während die Energienachfrage gleichzeitig durch 
              eAutos, verstärkten Bahnverkehr, Wärmepumpen und die Erzeugung von grünem Wasserstoff massiv steigern.
              </p>
              <p className="mt-6 text-lg leading-2 text-gray-600">
              Um diese große gesamtgesellschaftliche Anstrengung erfolgreich umzusetzen, benötigt es neben vielfältigen Projekten der erneuerbaren 
              Energien auch entsprechendes Kapital.
              </p>

              <p className="mt-6 text-lg leading-2 text-gray-600">
              Bislang waren diese Investments professionellen Investoren, wie Energiehandelsunternehmen, Projektentwicklern und ähnlichen vorenthalten. 
              EcoMint öffnet diesen Markt für Privatinvestoren und ermöglicht dadurch die zusätzliche Entwicklung von Projekten im Bereich der 
              erneuerbaren Energien. Privatinvestoren können mit EcoMint über Token in transparente Projekte investieren, die den gesetzlichen 
              Regelungen und aktuellen Marktstandrads entsprechen.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-ecomint-green" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}
