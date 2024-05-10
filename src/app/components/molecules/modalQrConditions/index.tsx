import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Buttons, Image, Modal } from '../../atoms';
import './style.scss';
import { IModalQrConditions } from './interface';
import { mdiClose } from '@mdi/js';
import { images } from '../../../../utils/icons/constants';
import Icon from '@mdi/react';

/**
 * ModalRedirect component
 * @param {boolean} showModal Show modal or not
 * @param {number} closeModal Close modal or not
 * @returns {JSX.Element}
 */

export const ModalQrConditions = ({ showModal, closeModal }: IModalQrConditions): JSX.Element => {
  const { t } = useTranslation();

  const [showModalState, setShowModalState] = useState<boolean>(false);

  const closeModalAction = () => {
    setShowModalState(false);
    closeModal();
  };

  useEffect(() => {
    setShowModalState(showModal);
  }, [showModal]);

  return (
    <Modal showModal={showModalState}>
      <div className="qr-conditions">
        <div
          className="qr-conditions__close-icon-qr-conditions"
          data-testid="onCloseFunctionButton"
          onClick={() => closeModalAction()}
        >
          <Icon size={1.5} path={mdiClose} />
        </div>

        <div className="qr-conditions__header">
          <p>{t('Cost.terms.title')}</p>
        </div>

        <div className="qr-conditions__body">
          <p dangerouslySetInnerHTML={{ __html: t('Cost.terms.description') }} />

          <div className="body__aditional-info">
            <Image src={images.Easy} width="45" height="45" alt="chat-security" className="chat-security" />
            <p dangerouslySetInnerHTML={{ __html: t('Cost.terms.aditionalInfo') }} />
          </div>
        </div>

        <div className="qr-conditions__footer">
          <Buttons label={'Aceptar'} className="primary" onClick={() => closeModalAction()} />
        </div>
      </div>
    </Modal>
  );
};
