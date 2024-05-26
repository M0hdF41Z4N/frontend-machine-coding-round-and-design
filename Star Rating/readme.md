### For react
> First Appoarch to have both filled and unfilled stars
> maintain a state rating
> for range of rating show filled and unfilled stars * (total-rating)
> And onclick change the rating

Another Approach

In this implementation, the Star component represents an individual star. It receives props for selected (whether the star is selected or not) and onClick (a function to handle the click event).

The StarRating component renders a specified number of stars based on the totalStars prop. It keeps track of the selected rating using React state. When a star is clicked, it updates the rating accordingly.