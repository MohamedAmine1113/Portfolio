/// <reference types="vite/client" />



declare module 'swiper/css';
declare module 'swiper/css/navigation';
declare module 'swiper/css/pagination';

declare module 'react-push-notification' {
  interface NotificationOptions {
    title: string;
    message: string;
    duration?: number;
    theme?: 'light' | 'success' | 'warning' | 'error';
  }

  export default function addNotification(options: NotificationOptions): void;
}