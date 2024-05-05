import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import FilterTiles from './components/filtertiles';
import JobSection from './components/jobsection';
import { useEffect, useRef } from 'react';

function App() {
  const scrollContainerRef = useRef(null);

  const handleScroll = () => {
    const scrollContainer = scrollContainerRef.current;

    if (scrollContainer.scrollHeight - scrollContainer.scrollTop === scrollContainer.clientHeight) {
      // End of scroll reached
      console.log('End of scroll');
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    scrollContainer.addEventListener('scroll', handleScroll);

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div >

      <Header />
      <div ref={scrollContainerRef}>
        <FilterTiles />
        <JobSection />
      </div>



    </div >
  );
}

export default App;
