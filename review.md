## Code review from Kate 11.5.2024

# commit 5ffc50af4d45fbe5ec679ee8a1d73615a28824a2

[] deploy app somewhere (e.g. github pages) and add link to repo
[] readme: add install, run, build, deploy, https://www.makeareadme.com/
[x] gitignore ok, consider adding license
[] main.jsx ok, but no strict mode
[] base structure kinda complicated (header with just one h1; footer completely empty; all eshop functionality in an extra subdirectory)
[] naming, see https://dlinau.wordpress.com/2016/02/22/how-to-name-props-for-react-components/
especially event props
[] name props based on their function in their component, not the parent component – these can be two different things
[] use one name for each entity consistently (article vs product vs item; cartItem vs itemInCart vs item; cart vs selectedItems)
[] destructuring props on a separate line is unnecessary – const Component = ({ someProp }) => { is fine
[] there’s a difference between hyphen (“-” on your keyboard) and minus

# Shop

[] error handling while loading categories and products
[] line 9: disabledButtons is basically “items in cart”, but that’s already available in cart (selectedItems)
[] lines 38-44: simplify to if-elseif-else – there is no possible fourth variant
[] line 41: limit param is different here – unify limit param values across all urls
[] isLoading is used for two different API calls during initialization – when one API call finishes, state isLoading is set to false even though the other one is still loading

# Cart

[] line 74: can be extracted to utility function so you have one implementation used in different places; also can be simplified to one reduce with regexp
[] line 65: why destructure just these two properties?

# Categories

[] line 16: do not use index as key if other identifier is available (e.g. item.id)
[] when formatting category names, replace Mens with Men’s and Womens with Women’s

# Checkout

[] isEmailFieldEmpty is false when email field is pristine (empty) and true afterwards, naming doesn’t make sense
[] events are mixed together – input event should be on input; change event does nothing; submit event only triggers on form, not on input; form submit should be [] detected by listening to submit event on form, not click event on button
[] random places for preventDefault() and stopPropagation()
[] line 20: do not add class outside React ecosystem
[] overall really difficult to follow the logic, very unclear

# Item

[] line 25: same as Cart line 74 above
[] lines 40, 42: same as Shop line 9 above

# Rating

[] logic rounds the rating down to half a point which means 5 stars are shown only for perfect 5 rating, consider using usual rounding instead (i.e. 3.25-3.74 is 3 and half stars; 3.75-4.24 is 4 stars; 4.25-4.74 is 4 and half stars; 4.75-5 is 5 stars)

# Search

[] events are handled just right here (in contrast with Checkout) – input has change event listener, form has submit event listener, both are clear and concise
