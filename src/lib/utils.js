import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}


export function formatBytes(bytes) {
  const MB = 1024 * 1024;
  const GB = 1024 * 1024 * 1024;

  if (bytes >= GB) {
    return (bytes / GB).toFixed(1) + ' GB';
  } else {
    return (bytes / MB).toFixed(1) + ' MB';
  }
};


export function formatISODate(isoString) {
  const date = new Date(isoString);

  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();

  const timezoneOffsetMinutes = date.getTimezoneOffset();
  const offsetHours = -Math.floor(timezoneOffsetMinutes / 60);
  const offsetSign = offsetHours >= 0 ? '+' : '-';
  const formattedOffset = `GMT ${offsetSign}${offsetHours}`;

  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

  return `${formattedTime} (${formattedOffset})`;
}

