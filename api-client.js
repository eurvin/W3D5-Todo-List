async function apiTodo(method, endpoint, todo) {
    // capture todo details
    let data = {
      'todo': `${todo}`,
      'done': false
    };

    // create dynamic api string - endpoint
    const apiString = `https://wincacademydatabase.firebaseio.com/eurvin${endpoint}.json`;

    // empty options
    let options = {
      method: `${method}`,
      headers: {'Content-Type': 'application/json'}
    };

    // add body or not
    const apiOptions = function() {
      if(method !== 'GET') {
        return options = {
          method: `${method}`,
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(data)
        }
      }
    }
    apiOptions();

    // fetch data from API
    const apiData = fetch(apiString, options)
      .then(res => res.json())
      .catch(error => {
        console.log(error + ' bewerking data is niet gelukt');
      });
      return await apiData;

  };
