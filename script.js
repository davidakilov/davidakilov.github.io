// Get the h1 element in the header
const headerTitle = document.querySelector('header h1');

// Set the text of the h1 element
headerTitle.textContent = "David's Version of American History";

// Get the button element by its ID
const myButton = document.getElementById('myButton');

// Add a click event listener to the button
myButton.addEventListener('click', function() {
  // Change the text when the button is clicked
  const contentTitle = document.querySelector('.american-flag h2');
  contentTitle.textContent = 'New Content Title';
  
  const contentText = document.querySelector('.american-flag p');
  contentText.textContent = 'This content has been updated by clicking the button!';
});

// Function to change background color gradient based on mouse movement
document.body.addEventListener('mousemove', function(event) {
  const xPos = Math.round((event.clientX / window.innerWidth) * 255);
  const yPos = Math.round((event.clientY / window.innerHeight) * 255);
  
  document.body.style.background = `radial-gradient(at ${event.pageX}px ${event.pageY}px, rgb(${xPos}, ${yPos}, 100), yellow, green)`;
});

// Set initial background gradient
document.body.style.background = 'radial-gradient(rgb(255, 0, 0), yellow, green)';

// Change the header text and revert to American flag background when header is clicked
headerTitle.addEventListener('click', function() {
  headerTitle.textContent = "David's 100 Top Ranked Athletes";
  const contentTitle = document.querySelector('.american-flag h2');
  contentTitle.textContent = 'Your Content Goes Here';
  const contentText = document.querySelector('.american-flag p');
  contentText.textContent = 'This is a stylish website with a red, white, and blue background.';
  document.body.style.background = 'url("american-flag.jpg")'; // Replace "american-flag.jpg" with the path to your American flag image
});
