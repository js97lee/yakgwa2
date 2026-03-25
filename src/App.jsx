import { useState } from 'react';
import KrTrack from './pages/KrTrack';
import GlobalTrack from './pages/GlobalTrack';
import './index.css';

function App() {
  const [track, setTrack] = useState('kr'); // 'kr' | 'global'
  return track === 'kr'
    ? <KrTrack onLangSwitch={() => setTrack('global')} />
    : <GlobalTrack onLangSwitch={() => setTrack('kr')} />;
}

export default App;
