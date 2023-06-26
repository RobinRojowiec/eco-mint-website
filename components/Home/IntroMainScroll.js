import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

export default function IntroMainScroll() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-25 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
             <h2 className="text-base font-semibold leading-7 text-ecomint-green">Gemeinsam für eine grüne Zukunft</h2>
             <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Gemeinsam in erneuerbare Energien investieren – jederzeit & von wo ich will </p>
              <p className="mt-6 text-xl leading-8 text-gray-700">
              Die Bewältigung der Klimakrise ist die größte Herausforderung der Gegenwart. Nur gemeinsam können wir unseren Energieverbrauch reduzieren 
              und den erforderlichen Energieverbrauch mit erneuerbaren Energien decken. 
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
              Im Jahr 2022 wurden erst 49,6% des Energiebedarfs aus erneuerbaren Quellen gewonnen. Die Anzahl der Projekte für erneuerbare 
              Energien muss also stark steigen, damit wir das Ziel der Bundesregierung, bis 2030 80% erneuerbare Energien zu nutzen, erreichen 
              zu können, während die Energienachfrage gleichzeitig durch eAutos, verstärkten Bahnverkehr, Wärmepumpen und die Erzeugung von 
              grünem Wasserstoff massiv steigern. 
              </p>
              
              
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Die Lösung? Gemeinsames Handeln!</h2>
              
              <p className="mt-8">
              Um diese große gesamtgesellschaftliche Anstrengung erfolgreich umzusetzen, benötigt es neben vielfältigen Projekten der 
              erneuerbaren Energien auch entsprechendes Kapital.
              </p>

              <p className="mt-6">
              Bislang waren diese Investments professionellen Investoren, wie Energiehandelsunternehmen, Projektentwicklern und ähnlichen 
              vorenthalten. EcoMint öffnet diesen Markt für Privatinvestoren und ermöglicht dadurch die zusätzliche Entwicklung von Projekten 
              im Bereich der erneuerbaren Energien. Privatinvestoren können mit EcoMint über Token in transparente Projekte investieren, die den 
              gesetzlichen Regelungen und aktuellen Marktstandrads entsprechen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
