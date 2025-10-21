import React, { useState } from 'react';
import Header from './components/Header';
import BookingPage from './pages/BookingPage';
import LocationPage from './pages/LocationPage';

type Page = 'rezervacije' | 'kako-do-nas';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('rezervacije');

  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col items-center py-4 sm:py-8 font-sans">
      <Header currentPage={currentPage} onNavClick={setCurrentPage} />
      
      <main className="flex-grow w-full flex flex-col items-center justify-center px-4">
        {currentPage === 'rezervacije' && <BookingPage />}
        {currentPage === 'kako-do-nas' && <LocationPage />}
      </main>

      <footer className="text-center text-gray-500 text-sm w-full mt-auto pt-8 pb-4">
        <p>Izrada sistema: PGP Systems, info@pgpsystems.com</p>
      </footer>
    </div>
  );
}

export default App;
