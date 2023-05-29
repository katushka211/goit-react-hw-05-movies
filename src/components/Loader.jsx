import { Vortex } from 'react-loader-spinner';
export const Loader = () => {
  return (
    <div>
      <Vortex
        visible={true}
        height="80"
        width="80"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={['blue', 'yellow', 'blue', 'yellow', 'blue', 'yellow']}
      />
    </div>
  );
};
