/**
 * Modal interface
 */
export interface IModalValidator {
  /**
   * Show modal or not
   */
  showModal: boolean;

  /**
   * Close modal or not
   */
  closeModal?: () => void;

  /**
   * Src to image
   */
  image: string;

  /**
   * Message of modal
   */
  message: string;
}
