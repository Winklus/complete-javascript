
    // searching with params

    const cocktailInput = document.querySelector('#cocktailInput');
    const searchBtn = document.getElementById('searchBtn');
    const cocktailImage = document.getElementById('cocktailImage')

      
      async function fetchCocktailImage() {
        const cocktailName = cocktailInput.value;
        const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`;
        

        try {
          const res = await fetch(url, {
            method: 'GET',
          })

          const data = await res.json()
          if(data.drinks && data.drinks.length > 0) {
    
            const cocktail = data.drinks[0];
            const imageUrl = cocktail.strDrinkThumb;
            cocktailImage.src = imageUrl;
            console.log(cocktail);
          } else {
            console.log('No cocktails found');
          }
        } catch (error) {
          console.log('Error fetching cocktail image:', error);  // Handle errors
        }
    
      
      }

      searchBtn.addEventListener('click', fetchCocktailImage)