export function setCookie(
  name: string,
  value: string | null,
  daysToLive: number | null
): void {
  const date = new Date();
  if (daysToLive !== null) {
    date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000);
  }
  const expires = daysToLive !== null ? `expires=${date.toUTCString()}` : "";
  document.cookie = `${name}=${value}; ${expires}`;
}

export function deleteCookie(name: string): void {
  setCookie(name, null, -1);
}

export function getCookie(name: string): string | null {
  const cDecode = decodeURIComponent(document.cookie);
  const cArray = cDecode.split("; ");
  let result: string | null = null;

  cArray.forEach((element) => {
    if (element.indexOf(name + "=") === 0) {
      result = element.substring(name.length + 1);
    }
  });
  return result;
}

interface User {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
}

export const updateUserDetails = (currentUser: User): void => {
  setCookie("userId", currentUser.id, 1);
  setCookie("userEmail", currentUser.email, 1);
  setCookie("userFirstName", currentUser.first_name, 1);
  setCookie("userLastName", currentUser.last_name, 1);
};