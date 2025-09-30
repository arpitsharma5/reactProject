const EventEmitter = require('events');

class Search extends EventEmitter {
  constructor(data) {
    super();
    this.data = data;
  }

  async search(query) {
   try {
     const result = await this.simulateSearch(query);
     this.emit('searchComplete', result);
   } catch (error) {
     this.emit('error in search', error);
   }
  }

  simulateSearch(query) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const count = this.data.filter(item => item.includes(query)).length;
        if(count > 0) {
          resolve({query, count});
        } else {
          reject(new Error('No results found'));
        }
      }, 1000);
    });
  }
}

module.exports = Search;