import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

/**
 * Standard Shadcn UI utility for merging Tailwind classes.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Extracts the creation timestamp from a MongoDB ObjectId string.
 * A MongoDB ObjectId is a 24-character hex string.
 * The first 8 characters (4 bytes) represent the Unix timestamp (seconds).
 * 
 * @param {string} id - The 24-character MongoDB ObjectId
 * @returns {string} - Formatted local date and time
 */
export function formatCreationTime(id) {
  if (!id || id.length !== 24) return "Unknown date";
  
  try {
    // Extract first 8 chars (hex timestamp)
    const timestampHex = id.substring(0, 8);
    // Convert hex to decimal (integer)
    const timestampInSeconds = parseInt(timestampHex, 16);
    // Convert to JavaScript Date (milliseconds)
    const date = new Date(timestampInSeconds * 1000);
    
    // Format to a readable local string
    return date.toLocaleString(undefined, {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  } catch (error) {
    console.error("Failed to parse MongoDB ID for timestamp:", error);
    return "Invalid ID";
  }
}
