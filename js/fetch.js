
// Fetches API data
class Fetch {
    
    async getData(){
        const apiKey = 'vJELerL2lY6wKsWxKHeijrJTwVFbYpbnSkXYALTV';

        const response = await fetch(`https://api.nasa.gov/EPIC/api/natural/images?api_key=${apiKey}`);
        const data = await response.json();

        //returns the API response to be used as an argument in the updateInfo function
        return data;
    }

}