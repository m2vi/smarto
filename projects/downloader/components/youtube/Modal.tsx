import { useTranslation } from "next-i18next";
import ReactModal from "react-modal";
import { useModal } from "../../context/Modal";
import { Button } from "../Button";
import { MainProps } from "./Page";

const Modal = ({ info }: MainProps) => {
  const { t } = useTranslation();
  const {
    state: { isOpen },
    dispatch,
  } = useModal();

  const handleCloseRequest = () => {
    dispatch({ type: "setOpen", value: false });
  };

  return (
    <ReactModal
      isOpen={isOpen}
      style={{ overlay: { background: "rgba(0, 0, 0, 0.5)" }, content: {} }}
      ariaHideApp={false}
      shouldFocusAfterRender={true}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      onRequestClose={handleCloseRequest}
      role={"dialog"}
      className="max-w-xs w-full shadow-1 bg-primary-800 p-4 rounded-8 flex-col flex"
      overlayClassName="flex justify-center items-center fixed z-50 top-0 left-0 bottom-0 right-0 h-full w-full"
    >
      <h4 className="text-center">{t("actions.configure")}</h4>
      <div className="w-full mb-6 mt-4 py-2">
        <span className="w-full flex items-center justify-between mb-5">
          <p className="text-lg">{t("options.format")}</p>
          <div className="select">
            <select>
              {Object.entries(info.itags).map((option) => {
                return null;
              })}
            </select>
            <div className="select_arrow"></div>
          </div>
        </span>
      </div>
      <Button>{t("actions.download")}</Button>
      <Button color="link" className="mt-1" onClick={handleCloseRequest}>
        {t("actions.cancel")}
      </Button>
    </ReactModal>
  );
};

export default Modal;
