import { Toast } from 'components/Toast';
import Typograpgy from 'components/Typography';
import { useState } from 'react';

const App = () => {
  const [isclick, setisclick] = useState(false);
  return (
    <div style={{ display: 'grid', placeItems: 'center', minHeight: '100vh' }}>
      <button onClick={() => setisclick(!isclick)}>Click</button>
      {isclick && <Toast text="This is a success message" type="success" direction="top-left" />}
      <Typograpgy.Body>Hola ! 👋🏻</Typograpgy.Body>
    </div>
  );
};

export default App;

// for svg to component conversion use
// npx @svgr/cli src/assets/icons --out-dir src/assets/iconComponents --icon --typescript --replace-attr-values "#323232=currentColor"
