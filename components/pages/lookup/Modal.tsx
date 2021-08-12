import { useRef } from 'react';
import ReactModal from 'react-modal';
import { Input } from '@components/Input';
import { useLookupModal } from '@context/lookupModal';
import { useRouter } from 'next/router';

const Modal = () => {
  const Router = useRouter();
  const { state, dispatch } = useLookupModal();
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const handleClick = () => {
    if (inputRef.current && state[1] !== '') {
      Router.push(`/s/lookup/${state[1]}/${inputRef.current.value}`);
    }
  };

  return (
    <>
      <ReactModal
        isOpen={state[0]}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        ariaHideApp={false}
        overlayClassName="inset-0 fixed z-50 bg-modal grid place-items-center"
        className="max-w-md w-full h-12 bg-primary-700 rounded-15 grid place-items-center p-3"
      >
        <Input placeholder="Id" ref={inputRef} onKeyDown={e => e.key === 'Enter' && handleClick()} />
      </ReactModal>
      {/* <div className={`absolute inset-0 w-screen h-full`} style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        <div className="max-w-md w-full h-12 bg-primary-700 rounded-15 grid place-items-center p-3">
          <Input placeholder="Id" ref={inputRef} onKeyDown={e => e.key === 'Enter' && handleClick(`${showModal[1]}/${inputRef.current.value}`)} />
        </div>
      </div> */}
    </>
  );
};

export default Modal;
