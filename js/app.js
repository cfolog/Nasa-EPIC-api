// Variables
const nextButton = document.querySelector('.next-image');
const prevButton = document.querySelector('.prev-image');
// allows me to use Fetch class in this doc
const getInfo = new Fetch;

// keeps track of current image & tells next/prev buttons which one to display next
let imgCount = 0;


// Class holding function to retrieve API data from Fetch then display it 
class Update {

   async updateInfo(data, currentImg){
        const imageTitle = document.querySelector('.data-title');
        const imageSlot = document.querySelector('.data-image');
        const captionSlot = document.querySelector('.caption');
        const dateSlot = document.querySelector('.date');
        const latSlot = document.querySelector('.lat');
        const lonSlot = document.querySelector('.lon');
        
        // limits the returning data to one image out of the 6. starts on 0 on load
        const newData = await data[currentImg];

        // updates all UI info
        imageTitle.textContent = `Image ${currentImg + 1}/6`;
        imageSlot.src =`https://epic.gsfc.nasa.gov/archive/natural/2022/01/24/png/${newData.image}.png`;
        captionSlot.textContent = `Date Taken: ${newData.caption}`;
        dateSlot.textContent = `Date Taken: ${newData.date}`;
        latSlot.textContent = `Lat: ${newData.centroid_coordinates.lat}`;
        lonSlot.textContent = `Lon: ${newData.centroid_coordinates.lon}`;

        // check returning info
        // console.log(newData)
    }
}

const updateKey = new Update;

//main function to get info from API using Fetch class, then use that data in the updateInfo function to display it
async function doTheThing(){

    // call updateInfo function, and pass it the API's returning values from getData, as well as which iteration
    updateKey.updateInfo(await getInfo.getData(), imgCount);
}


nextButton.addEventListener('click', () =>{
    // when next is clicked, +1 image count so updateInfo class can get next iteration
    imgCount = imgCount + 1;
    // if count goes past the number of images, reset it back to 0
    if (imgCount > 5){
        imgCount = 0
    };
    // do the thing
    doTheThing()
})

prevButton.addEventListener('click', () =>{
    // when next is clicked, -1 image count so updateInfo class can get next iteration
    imgCount = imgCount - 1;
    // if count goes negative, circle back to last image
    if (imgCount < 0){
        imgCount = 5
    };
    // do the thing
    doTheThing();
})

