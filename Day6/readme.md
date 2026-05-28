

##  Core JavaScript Concepts Used
*   **Array Methods (`map`, `filter`, `sort`):** To traverse, transform, and refine data without mutating the original arrays.
*   **String Manipulation (`split`, `trim`):** To break down raw strings into usable data parts and clean up extra whitespaces.
*   **Type Coercion (`Number()`, `isNaN()`):** To safely convert string numbers into actual Number types and handle corrupted data gracefully.
*   **Callbacks / Higher-Order Functions:** To separate logic (like discount rules or tax rules) from the main processing function, making the code more modular.
*   **Spread Operator (`...`):** To create shallow copies of objects, ensuring I didn't mutate the original input data.
*   **Template Literals (`` ` ``):** To cleanly format output strings with embedded variables.
*   **Promises & `setTimeout`:** To simulate asynchronous server responses and delay the return of data.

---

## Problem 1: The Flight Booking Data Cleaner

The data was given as a single string per flight (`"London-Paris:150"`). I needed to extract the cities and the price separately, handle potential formatting issues (like "invalid" prices), filter out flights outside my budget, and sort them.

### Steps & Reasoning
1.  **Parsing with `map()` and `split()`:** I iterated over the array using `.map()`. I used `.split(':')` to separate the route from the price, and then `.split('-')` on the route to get the `from` and `to` cities.
2.  **Cleaning the Data (`trim` & `Number`):** I used `.trim()` to remove accidental spaces. I wrapped the price in `Number()`. Since some prices were `"invalid"`, I used a ternary operator with `isNaN()` to set corrupted prices to `0`.
3.  **Filtering (`filter`):** I chained a `.filter()` method to keep only the flights where the price was `>= 100` and `<= 500`.
4.  **Sorting (`sort`):** I used `.sort((a,b) => a.price - b.price)` to arrange the objects in ascending order (cheapest first).
5.  **Output:** Finally, I wrapped the result in `JSON.stringify()` to return a valid JSON string as requested.

---

##  Problem 2: The E-Commerce Discount Applicator

This problem required processing a shopping cart while tracking overall savings. I also needed to implement an external rule (a callback) to determine discount eligibility, and then simulate a delayed server response.

### Steps & Reasoning
1.  **Defining the Callback (`isEligible`):** I created an arrow function that returns `true` only if the category is "Electronics" and the price is `> 200`. Separating this makes the rule easily swappable in the future.
2.  **Tracking Variables:** I declared `totalSaving` and `discountedCount` with `let` outside my loop to keep a running total.
3.  **Transformation (`map` & Spread Operator):** I used `.map()` to iterate through the cart. *Crucially*, I used `const newItem = { ...item };` to create a shallow copy. This prevents mutating the original cart objects.
4.  **Applying Logic:** If the callback returned `true`, I calculated the 10% discount, subtracted it, updated the tracking variables, and added `isDiscounted: true`. 
5.  **Summary String:** I used a template literal to inject the totals into a clean console message, using `.toFixed(2)` just in case of floating-point math issues.
6.  **Delayed Return (Promises):** To properly return data after a `setTimeout` of 1000ms, I wrapped it in a `Promise`. This allows the function caller to use `.then()` to receive the updated cart.

---

##  Problem 3: The Movie Stream Analytics

Similar to Problem 1, I was given raw strings (`"MOVIE_NAME|GENRE|VIEW_COUNT"`). I needed to structure this, clean the view counts, filter by multiple strict conditions, and sort them in reverse.

### Steps & Reasoning
1.  **Parsing (`map` & `split`):** I mapped over the array and used `.split('|')` through array destructuring to grab `[name, genre, views]`.
2.  **Data Coercion:** Just like in Q1, I converted `views` to a Number and used `isNaN()` to default bad data to `0`.
3.  **Complex Filtering (`filter`):** I used `.filter()` to check two things:
    *   Views must be `> 5000`
    *   Genre must be "Action" OR "Sci-Fi". *(I wrapped the OR condition in parentheses `( ... || ... )` to ensure the logic evaluated correctly alongside the AND condition).*
4.  **Sorting Descending (`sort`):** I used `.sort((a,b) => b.Views - a.Views)` to put the highest viewed movies at the top.
5.  **Output:** Returned the final array as a JSON string using `JSON.stringify()`.

---

## Problem 4: The Automated Payroll Processor

I needed to calculate employee net pay based on a dynamic tax bracket. Like Q2, it required a callback, running totals, object manipulation, and an asynchronous delay.

### Steps & Reasoning
1.  **Tax Callback (`taxLogic`):** I wrote a simple function utilizing a ternary operator to return `0.20` if the salary is `> 5000`, otherwise `0.10`.
2.  **Transformation (`map`):** Inside `.map()`, I called the callback to get the exact rate, calculated the `taxAmount`, and figured out the `netSalary`.
3.  **Object Merging (`...`):** I returned a new object using the spread operator (`...employee`) to keep the existing `id`, `name`, and `salary`, while seamlessly appending `taxRate`, `taxAmount`, `netSalary`, and the dynamic `status` ("Premium" vs "Standard").
4.  **Logging Totals:** Added `netSalary` to my `totalNetPayout` tracker and printed the summary using template literals.
5.  **Asynchronous Return:** Wrapped the final array in a `Promise` with a `setTimeout` of 2000ms. I used a Promise because `setTimeout` by itself doesn't pause code execution or return values directly to the caller. The Promise makes it work beautifully with `.then()`.

---

###  Final Takeaways
*   **Immutability:** Throughout the code, I prioritized not altering the original input arrays/objects. 
*   **Modularity:** Using callbacks for business logic (like taxes and discounts) makes the core functions (`applyPromo` and `calculatePayroll`) highly reusable.
*   **Asynchronous JavaScript:** By combining `setTimeout` with `Promises`, I effectively simulated real-world API behavior.