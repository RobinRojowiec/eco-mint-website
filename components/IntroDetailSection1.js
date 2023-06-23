import { CheckCircleIcon } from '@heroicons/react/20/solid'

const benefits = [
  'Finanzierung vielfältiger Projekte',
  'Schnelle Abwicklung ohne langwierige Prozesse',
  'Wettbewerbsfähige Konditionen',
  'Profitiere von einer großen Investorengemeinschaft',
]

export default function IntroDetailSection1() {
    return (
      <div className="overflow-hidden bg-white py-10">
        <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-0">
          
            <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
              <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                <img
                  src="https://images.unsplash.com/photo-1624397640148-949b1732bb0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                  alt=""
                  className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              

            </div>  
    
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-10 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">

            <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Du bist Projektentwickler?</h2>
              <p className="mt-6 text-xl leading-8 text-gray-600">
                Gemeinsam finanzieren wir Dein Projekt auf dem Weg zur Energiewende ohne Umwege und mit dem klaren Ziel 100% erneuerbare 
                Energien zu erreichen. Dabei steht Geschwindigkeit und eine unkomplizierte Abwicklung für uns im Vordergrund.  
              </p>
              
              <p className="mt-6 text-base font-bold leading-7 text-ecomint-green">
              Nutze die Power der Gemeinschaft und treibe Dein Projekt voran! 
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
          </div>



          
        </div>
      </div>



    )
  }
  