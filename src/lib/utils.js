import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}


export function formatBytes(bytes) {
  const KB = 1024;
  const MB = 1024 * 1024;
  const GB = 1024 * 1024 * 1024;

  if (bytes >= GB) {
    return (bytes / GB).toFixed(1) + ' GB';
  } else if (bytes >= MB) {
    return (bytes / MB).toFixed(1) + ' MB';
  } else if (bytes >= KB) {
    return (bytes / KB).toFixed(1) + ' KB';
  } else {
    return bytes + ' B';
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

