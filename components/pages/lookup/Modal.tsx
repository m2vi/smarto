import { Input } from '@components/Input';
import ReactModal from 'react-modal';
import { useLookupModal } from '@context/lookupModal';
import { useRef } from 'react';
import { useRouter } from 'next/router';

const Modal = () => {
  const Router = useRouter();
  const { state } = useLookupModal();
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
    </>
  );
};

export default Modal;
