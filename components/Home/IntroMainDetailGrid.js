import { ChartPieIcon, LightBulbIcon, AcademicCapIcon, RocketLaunchIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Token-Investments.',
    description:
      'Bei Token-Investments handelt es sich um regulierte, elektronische Wertpapiere im Sinne des eWpG. Jeder Token repräsentiert einen Anteil an dem Projekt als tokenisierten Schuldverschreibung. Damit werden schuldrechtliche Ansprüche an einem Vermögenswert auf Investoren übertragen.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Energieprojekte.',
    description:
      'Gemeinsam haben Investoren die Möglichkeit in den Ausbau von Projekten der erneuerbaren Energien zu investiere, wie Solarparks, Wind- oder Wasserkraftanlagen sowie Ladeinfrastruktur für Elektroautos.',
    icon: LightBulbIcon,
  },
  {
    name: 'Expertise.',
    description:
      'EcoMint arbeitet mit einem Netzwerk von Experten im Bereich der erneuerbaren Energien, der Finanzierungen und der Regulatorik zusammen, um Projekte sorgfältig auszusuchen, zu planen und sicher umzusetzen.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Investment-Anteil.',
    description:
      'Investments in EcoMint Token sind schon ab kleinen Beträgen möglich. Damit wird eine Vermögensklasse, die bisher exklusiv professionellen Kunden zugänglich war, für alle geöffnet. Die Token sind 24/7 frei handelbar.',
    icon: ChartPieIcon,
  },
]

export default function IntroMainDetailGrid() {
  return (
    <div className="bg-white py-24 sm:py-15">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            EcoMint auf einen Blick
          </h2>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-ecomint-green-nonHover">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
