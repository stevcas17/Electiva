/**
 * Modal interface
 */
export interface IModalQrConditions {
  /**
   * Show modal or not
   */
  showModal: boolean;

  /**
   * Close modal or not
   */
  closeModal?: () => void;
}
