 
/*
Fetch()

  assign space for data from request <== fetch() ==>  web-browser ==> Network request(sent,error)


*/
async function fetchUserData() {
  try {
    const response = await fetch('https://api.example.com/users');
    const data = await response.json();  // Wait for the response to be converted into JSON
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchUserData();
