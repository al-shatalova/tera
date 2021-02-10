var colorArray = ["url('https://www.freezone.net/upload/medialibrary/7e9/7e9ba16fe427b1dfd99e07ea7cc522d2.jpg')", "url('https://content.skyscnr.com/m/19c2f095795549eb/original/GettyImages-468903912.jpg')", "url('https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?cs=srgb&dl=pexels-thorsten-technoman-338515.jpg&fm=jpg')", "url('https://cdni.rbth.com/rbthmedia/images/2019.01/original/5c4b20cc85600a7dce392233.jpg')"];
var i = 0;

function changeColor(){
    document.body.style.backgroundImage = colorArray[i];
    //document.body.style.backgroundImage = "url('https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?cs=srgb&dl=pexels-thorsten-technoman-338515.jpg&fm=jpg')"; 
    i++;
    if( i >= colorArray.length) {
        i = 0;
    }
}