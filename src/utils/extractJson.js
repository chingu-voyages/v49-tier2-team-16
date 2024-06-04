const extractJSON = (chatResponse) => {
  const str = chatResponse.replaceAll("json", ""); // This removes the word 'json' from the string if it exists
  const jsonRegex = /```(.*?)```/s; // regEx for finding a JSON object within a string
  const jsonMatch = str.match(jsonRegex); // This extracts the JSON object from the string

  if (!jsonMatch) {
    console.error("No JSON object found.");
    return;
  }

  const schemeObj = JSON.parse(jsonMatch[1]); // This parses the JSON object into a JavaScript object
  return schemeObj;
};

export default extractJSON;
