function run() {
  let input = document.getElementById("dict_input");
  let output = document.getElementById("output");
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "71ed1df2dbmsh4582fe8b7b08bf0p1e1e2ajsne1b178b88477",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  fetch(
    "https://jsearch.p.rapidapi.com/search?query="+input.value+"&num_pages=1",
    options
  )
    .then((response) => response.json())
    .then((response) => {
    console.log(response)
		for(i=0; i<response.data.length; i++){
			output.innerHTML+= `${i}. ${response.data[i].employer_name}, Official Website: ${response.data[i].employer_website}, Apply Link For the Job: ${response.data[i].job_apply_link}, Job Description: ${response.data[i].job_description}`;
			output.innerHTML+= '<br>'
		}
	})
    .catch((err) => console.error(err));
}
