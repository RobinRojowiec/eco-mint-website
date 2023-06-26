export default function AboutTeam() {
    return (
      <div className="relative bg-ecomint-lightgreen">
        <div className="relative h-80 overflow-hidden bg-indigo-300 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1499540633125-484965b60031?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
            alt=""
          />
          <svg
            viewBox="0 0 926 676"
            aria-hidden="true"
            className="absolute -bottom-24 left-24 w-[57.875rem] transform-gpu blur-[118px]"
          >
            <path
              fill="url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)"
              fillOpacity=".4"
              d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z"
            />
            <defs>
              <linearGradient
                id="60c3c621-93e0-4a09-a0e6-4c228a0116d8"
                x1="926.392"
                x2="-109.635"
                y1=".176"
                y2="321.024"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#776FFF" />
                <stop offset={1} stopColor="#FF4694" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
            <h2 className="text-base font-semibold leading-7 text-ecomint-green">EcoMint</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl">Wer wir sind.</p>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Zusammen haben wir über 10 Jahre Erfahrung in der Umsetzung von Blockchain- & Tokenisierungs-Projekten, wobei wir uns sowohl auf die technische
              und Business-Seite, als auch die rechtlichen Aspekte konzentriert haben.
            </p>
            
            <p className="mt-6 text-base leading-7 text-gray-600">
              Diese Erfahrung gibt uns heute die notwendigen Werkzeuge, um mit EcoMint eine Lösung für Projektentwickler und Investoren zu schaffen, 
              gemeinsam der Klimakrise entgegenzutreten.
            </p>
            
          </div>
        </div>
      </div>
    )
  }
  