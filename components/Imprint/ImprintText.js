export default function ImprintText() {
    return (
      <div className="bg-white px-6 py-10 sm:py-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">Impressum<br /><br /></h2>

          <h3 className="text-2xl font-bold tracking-tight text-black sm:text-2xl">Angaben gemäß § 5 TMG</h3> 
           
           <p className="mt-6 text-lg leading-8 text-black">
            
           EcoMint<br />
           Hasselwerderstr. 30<br />
           12439 Berlin <br /> <br />

      {/*       Handelsregister: Folgt<br />
           Registergericht: Folgt<br /> <br />

           <strong>Vertreten durch:</strong><br />
           Folgt  
           <br /><br /> */}
           </p> 

           <h3 className="text-2xl font-bold tracking-tight text-black sm:text-2xl">Kontakt</h3> 
           <p className="mt-6 text-lg leading-8 text-black">
              Telefon: 0175-26 90 766<br />
              E-Mail: info@eco-mint.de
              <br /><br />
          </p>
          
      {/*    <h3 className="text-2xl font-bold tracking-tight text-black sm:text-2xl">Umsatzsteuer-ID</h3> 
          <p className="mt-6 text-lg leading-8 text-black">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              Folgt
              <br /><br />
          </p>
    */}
          <h3 className="text-2xl font-bold tracking-tight text-black sm:text-2xl">Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle</h3> 
          <p className="mt-6 text-lg leading-8 text-black">
              Wir sind nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              <br /><br /><br /><br />
          </p>

          <p>Quelle: <a href="https://www.e-recht24.de" className="fg-ecomint-green" >https://www.e-recht24.de</a></p>
   
        </div>
      </div>
    )
  }
  