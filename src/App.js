import React, { useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';

const Atom = () => {
  const ref = useRef();
  useFrame(() => (ref.current.rotation.z += 0.01));
  return (
      <mesh
          ref={ref}
          position={ [0, 0, 0] }
          onClick={e => console.log('click')}
          onPointerOver={e => console.log('hover')}
          onPointerOut={e => console.log('unhover')}
      >
          <sphereBufferGeometry attach="geometry" args={[1, 32, 32]} />
          <meshBasicMaterial
              attach='material'
              color='#9acc14'
              opacity={0.5}
              transparent
          />
      </mesh>
  );
};

const App = () => {
  return (
      <Canvas>
          <Atom />
      </Canvas>
  );
};

export default App;
