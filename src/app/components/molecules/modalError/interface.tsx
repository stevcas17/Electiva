/**
 * Modal interface
 */
export interface IModalError {
  /**
   * Show modal or not
   */
  showModal: boolean;

  /**
   * Close modal or not
   */
  closeModal?: () => void;
}
