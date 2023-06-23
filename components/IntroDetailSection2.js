import { CheckCircleIcon } from '@heroicons/react/20/solid'

const benefits = [
  'Investment ab kleinen Beträgen',
  'Keine Mindesthaltedauer',
  'Feste & planbare Auszahlungen',
  'Sichere Rendite ohne Spekulation',
]

export default function IntroDetailSection2() {
    return (
      <div className="overflow-hidden bg-white py-6">
        <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-40">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
            <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Du möchtest investieren?</h2>
              <p className="mt-6 text-xl leading-8 text-gray-600">
                Profitiere von der Energiewende und investiere unmittelbar und ohne Umwege direkt in Projekte zum Aus- und Aufbau erneuerbarer Energien.
                Dein Investment fließt zu 100% in das von Dir ausgewählte Projekt.
              </p>

              <p className="mt-6 text-base font-bold leading-7 text-ecomint-green">
              Werde Teil der Gemeinschaft und gestalte die grüne Zukunft! 
              </p>
            

              <ul
                role="list"
                className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-gray-600 sm:grid-cols-2"
              >
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-x-3">
                    <CheckCircleIcon className="h-7 w-5 flex-none" aria-hidden="true" />
                    {benefit}
                  </li>
                ))}
              </ul>

            </div>
            <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
              <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                <img
                  src="https://images.unsplash.com/photo-1606189934732-1c274f894bf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                  alt=""
                  className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                />

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  