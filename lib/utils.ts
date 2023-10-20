// Helper Function To Validate String
export const validateString = (value: unknown, maxLength: number) => {
  if (!value || typeof value != "string" || value.length > maxLength) {
    return false;
  }
  return true;
};

// Helper Function for Error Message Retrievel
export const getErrorMessage = (error: unknown): string => {
  let message: string;
  if (error instanceof Error) {
    return error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Unknown error";
  }
  return message;
};
