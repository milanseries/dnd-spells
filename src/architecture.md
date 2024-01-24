# take about the architecture of your project

1: routes

- for route I use react router to manage home page and spell detail page as well as favorite page
- so three routes, '/', 'favorite', '/spell/:index'
- for index, I use useParams() to get the index of the spell, to display the detail of it
- for / routes, I simply fetch data from the spells api list
- for /favorite, since I store in local storage spells as an array whenever favorited it, so for this route I simply has to use the useFavorite hooks to get the favorites data and use it view detail spell ui

2: apis

- i use react-query to fetch spells data and spell/index detail data

3: persist favorites

- for persistance of favorites spell, i use useLocalStorage hook inside the useFavorite hook to store and get the favorited spells

4: favorite handles

- like I said i create a custom hook for favorite items, since two pages use it home and favorite page. the logic is check if the item in the favorites array, if found, filter that array and push the new filtered array to the localstorage, if not, add by spreading to the existing favorite arrays.

5: search handle

- get the favorite items, it filter through it, as a callback for filter function, it use condition if the item filter include with the search query,
- if that exp return true, the filter will return that element in an array

6: pagination handle

- just using mui pagination library,

7: ul

- material ui for pretty music everything, also use css for custom style

8: component & hook testing

- create few common component insides common and other are features related component
- component are tested as they render or not, with specific ui
- hook are tested for it functionality, but mock the localstorage hook
