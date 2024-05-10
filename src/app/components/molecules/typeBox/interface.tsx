import { AlertInterface } from '../alerts/interface';

export interface typeBox {
  className?: string;
  children: any;
  Emoji?: any;
  EmojiString?: any;
  title?: string;
  alertConfig?: AlertInterface;
  navBack?: boolean;
  onNavBackFunc?: () => any;
  footer?: boolean;
}
