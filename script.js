const { body } = document;

function changeBackground(number) {
    // Check if background is already showing
    let previousBackground;
    if (body.className) { // if we have a previous background (i.e. if we clicked background-1 previously and the class is assigned, otherwise dont run this if statement)
        previousBackground = body.className; // then background-1 will be assigned to previousBackground(it will make no change)
    }
    // Reset CSS class for body
    body.className = ''; // this will reset the body className but will not delete previousbackground variable.
    // console.log(number);
    switch (number) {
        case '1':
            return (previousBackground === 'background-1' ? false : body.classList.add('background-1')); // if 1 is clicked and previousBackground is also background-1 then it does nothing(false argument runs) and then the line10  body.className = '' remains unchanged, thus resetting the class to default. Otherwise, if you click a different toggle it will assign new class. 
        case '2':
            return (previousBackground === 'background-2' ? false : body.classList.add('background-2'));
        case '3':
            return (previousBackground === 'background-3' ? false : body.classList.add('background-3'));
        default:
            break; // by default we just want it to break and not set a background(will use as per css stylesheet.)
    }
}