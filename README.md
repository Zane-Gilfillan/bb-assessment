# Americaneagle.com Assessment

## Goal / Feedback

After reviewing the project I decided to fully reformat the code base using React and SASS to make it more readable for future devs which will also make it easier to develop the project further down the road. I will include photos of areas that were added and code snippets of some basic functionality.
<br><br>
## Improvements
<br>

### Fonts

All fonts have been updated to reflect 'Barlow' and will revert to sans serif if needed
<br>
<br>

### Main Navigation Menu - Mobile View

![full navbar display](/src/assets/readme/mainnav.png)

The menu will now collapse into a hidden hamburger menu when the screen is below 900px. It is styled to highlight the navigation links while still allowing users to login as well as search. 


### Site Search Bar
When the search icon is clicked the login link will disapear and a search bar will apear. The user can click the search icon to remove the search bar as well which will bring back the login link to its originall positon.

![search bar activated](/src//assets/readme/mainnav_activesearch.png)
<br>

The search bar appears by setting its inherit state to not visble. The icon then acts as a button toggling on/off its visiblity. This hook is also used to show the hamburger menu as well as open/collapse the mobile view of the footer.
```
    const [visible, setVisible] = useState(false);

    <img  style={{ cursor: isHovering ? 'pointer' : ''}} 
        onClick={() => setVisible(!visible)}
        src={images.search} 
        alt="searchbar icon"
    />

```

<br>
<br>

![full mobilenav display](/src//assets/readme/mobilenav.png)

<br>
There is still a visual glitch while the menu slides out. It does NOT affect usability, but I am still looking for a solution on debugging.
<br>
<br>

### Icons
Icons have been added in the navigation menu: Hamburger navigation, Cart Icon, as well as Search Icon
<br>
<br>

### Hero Banner Slideshow
The hero slide show is now fully functional. The sale banners will be displayed until the screen reaches 1024px.

![hero image with banner 2](/src/assets/readme/heroimg-2.png)
![hero image with banner 3](/src/assets/readme/heroimg-3.png)
<br>
<br>

### Footer Responsiveness
The footer is now fully responsive and will collapse on itself when the screen is in a mobile view (it is currently set on 412px which is the largest iPhone screen on the market, it can be changed to a wider screen if desired). An icon will appear on the right side of the screen for users to open/collapse each section of the footer
![mobile footer closed](/src/assets/readme/mobile-footer-closed.png)
![mobile footer open](/src/assets/readme/mobile-footer-open.png)

<br>
<br>

### Responsive View
The homepage is fully mobile friendly and will respond to all of the offered device dimensions that Chrome's dev tools show.
