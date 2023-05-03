
    async function  fetchItems() {
        const response = await fetch('https://s01bc.nyc3.cdn.digitaloceanspaces.com/static/hobbies/hobbies.json');
        const data = await response.json();
        this.items = data.items;
        const Hobbies = fetchItems();

         return Hobbies;
    };