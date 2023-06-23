import { RocketLaunchIcon, UserGroupIcon, GlobeAltIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Projektfinanzierung.',
    description:
      'Gemeinsam finanzieren wir Auf- und Ausbauprojekte für erneuerbare Energien von Solarinstallationen, über Windkraft bis hin zur Ladeinfrastruktur für eAutos.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Investmentchance für Jeden.',
    description: 'Gemeinsam können wir großes bewirken, daher hat auch jeder die Chance in unsere Projekte bereits ab kleinen Beträgen zu investieren und aktiv an der Energiewende zu partizipieren.',
    icon: UserGroupIcon,
  },
  {
    name: 'Dezentral.',
    description: 'So dezentral wie es die Energieerzeugung wird, so dezentral sind es auch unsere Projektinvestments. Dazu setzen wir auf digitale Wertpapiere nach dem eWPG, die vollständig dezentral gehandelt und gehalten werden können.',
    icon: GlobeAltIcon,
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
              Der erfolgreiche Ausbau der erneuerbaren Energien bestimmt maßgeblich über den Erfolg in der Energiewende und legt damit den 
              Grundstein für unsere grüne Zukunft. Der Ausbau hat bereits begonnen, doch die großen Hürden in Richtung 100% erneuerbarer 
              Energien und das nicht nur in der heutigen Stromerzeugung, liegen noch vor uns. Während eAutos, verstärkter Bahnverkehr, 
              Wärmepumpen und die Erzeugung von grünem Wasserstoff die Energienachfrage gleichzeitig massiv steigern.    
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
