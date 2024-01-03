In my pursuit of mastering React, I undertook the task of creating a Movie Details App 🎥. Film-Fanatic allowed me to delve into the intricacies of React while fetching detailed movie information through the [OMDb API](https://www.omdbapi.com/), an open-source API.

🔧 Key Features:
1. Search Movies: Easily find and explore a wide range of movies.
2. Rate Movies: Give your own ratings to movies based on your personal preferences.
3. Watchlist: Curate your own movie watchlist by adding movies you want to see.
4. Average Ratings: See the average ratings of the movies in your watchlist.

🌐 Check it out live: https://film-fanatic-aidaa.netlify.app/
🔧 GitHub Repository: https://github.com/aida708/film-fanatic

👨‍💻 Key Learnings:

- Prop Drilling:
  - Passing props through multiple components can lead to unnecessary complexity.

- Solutions for Prop Drilling:
  - Component Composition:
    - Combine different components using children props for high reusability and flexibility.
    - Useful for scenarios like fixing prop drilling.

- useRef() Hook:
  - DOM Manipulation:
    - Utilize useRef() to interact with DOM elements, enabling dynamic changes without a full re-render.
  - Data Persistence:
    - Use useRef() to persist data between renders, particularly useful for scenarios where you don't want to trigger a re-render.

- Custom Hooks:
  - Employ custom hooks when there's a need to reuse logic containing hooks across different parts of the application.

🔐 Important Note: Ensuring a Secure Connection

To fetch the detailed movie information, I've integrated an open-source API. However, due to security protocols, modern browsers might block the API calls from a secure (https) domain to an insecure (http) one, resulting in a potential Mixed Content issue.Please ensure your browser allows insecure content to see the searched movie results.


