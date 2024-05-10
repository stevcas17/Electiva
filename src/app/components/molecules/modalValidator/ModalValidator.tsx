import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Icon from '@mdi/react';
import { Image, Modal } from '../../atoms';
import { icons } from '../../../../utils/icons/constants';
import { IModalValidator } from './interface';
import './ModalValidator.scss';

/**
 * ModalRedirect component
 * @param {boolean} showModal Show modal or not
 * @param {number} closeModal Close modal or not
 * @returns {JSX.Element}
 */

export const ModalValidator = ({ showModal, closeModal, image, message }: IModalValidator): JSX.Element => {
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
    <Modal showModal={showModalState} className="modal-validator">
      <div className="modal-validator__content">
        <div
          className="content__head"
          data-testid={'modal-button-close'}
          id={'modal-button-close'}
          onClick={() => closeModalAction()}
        >
          <Icon size={1.2} path={icons.mdiCloseCircle} style={{ color: '#d9dbe9' }} />
        </div>
        <div className="content__info">
          <div className="info__image">
            <Image className={'modalImage'} src={image} width={'125'} height={'125'} alt={'modalImage'} />
          </div>
          <h1 dangerouslySetInnerHTML={{ __html: message }} />
        </div>
      </div>
    </Modal>
  );
};
