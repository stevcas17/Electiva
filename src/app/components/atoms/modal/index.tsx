import { modalInterface } from './interface';
import './style.scss';

/**
 * Modal component
 * @param {React.ReactNode} children Children of modal
 * @param {boolean} showModal Show modal or not
 * @param {string} className Class name of modal
 * @returns
 */
export const Modal = ({ children, showModal, className }: modalInterface): JSX.Element => {
  return showModal ? (
    <div className={`modalStyle ${className}`}>
      <div className="modal-content">{children}</div>
    </div>
  ) : null;
};
