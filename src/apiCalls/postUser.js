export function postUser(userInfo) {
  return fetch("https://rancid-tomatillos.herokuapp.com/api/v1/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userInfo)
  })
}
