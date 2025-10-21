import React, { useEffect } from 'react';
import Cal, { getCalApi } from "@calcom/embed-react";

const BookingPage = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"padel-termin"});
      cal("ui", {"theme":"light","cssVarsPerTheme":{"light":{"cal-brand":"#baa070"},"dark":{"cal-brand":"#fafafa"}},"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  return (
    <>
      <header className="text-center mb-8 w-full max-w-md sm:max-w-lg lg:max-w-2xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold font-display text-gray-900 leading-tight mb-2">
          Rezerviši svoj padel termin
        </h1>
        <p className="text-lg sm:text-xl text-gray-600">
          Izaberi trajanje termina, željeni dan i vreme.
        </p>
      </header>

      <div className="w-full max-w-md sm:max-w-lg lg:max-w-2xl rounded-xl shadow-custom">
        <main className="w-full bg-white rounded-xl overflow-hidden">
          <div className="min-h-[650px] w-full">
            <Cal
              namespace="padel-termin"
              calLink="padel-subotica/padel-termin"
              style={{ width: "100%", height: "100%", overflow: "scroll" }}
              config={{ "layout": "month_view", "theme": "light" }}
            />
          </div>
        </main>
      </div>
    </>
  );
};

export default BookingPage;
