export default function Newsletter() {
    return (
      <div className="bg-ecomint-lightgreen py-6 sm:py-2 lg:py-6">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
          <div className="max-w-xl text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl lg:col-span-6">
            <h2 className="inline sm:block lg:inline xl:block">Du möchtest als Erster von neuen Projekten erfahren?</h2>{' '}
            <p className="inline sm:block lg:inline xl:block">Dann jetzt für unseren Newsletter anmelden.</p>
          </div>
          <form className="w-full max-w-md lg:col-span-5 lg:pt-2" netlify>
            <div className="flex gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Bitte eMail-Adresse eingeben"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-ecomint-green px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Senden
              </button>
            </div>
            <p className="mt-4 text-sm leading-6 text-gray-900">
              Deine Daten sind uns wichtig. Hier findest Du unsere{' '}
              <a href="data-privacy" className="font-semibold fg-ecomint-green">
                Datenschutzerklärung
              </a>
              .
            </p>
          </form>

          <form className="hidden-newsletter" netlify>
               <input type="hidden" name="form-name" value="name_of_my_form" />
          </form>

        </div>
      </div>
    )
  }
  
