import * as React from 'react';

/**
 * Modal interface
 */
export interface modalInterface {
  /**
   * Children of modal
   */
  children?: React.ReactNode;
  /**
   * Class name of modal
   */
  className?: string;
  /**
   * Show modal or not
   */
  showModal: boolean;
  /**
   * Function to execute when modal is closed
   */
  onCloseFunction?: Function;
  /**
   * Function to accion when click button
   */
  onButtonClickFunction?: Function;
  /**
   * Modal size
   */
  size?: string;
}
