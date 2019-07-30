class App{
  constructor(){
    this.repositories = [];
    this.formEl = document.getElementById('repo-form');
    this.registerHandlers()
  }

  registerHandlers(){
    this.formEl.onsubmit = event => this.addRepository(event);
  }

  addRepository(event){
    event.preventDefault();
    this.repositories.push({
      name: 'louisGustavo',
      description: 'GitHub Pessoal de Luís Gustavo',
      avatar_url: 'https://avatars3.githubusercontent.com/u/26330809?s=460&v=4',
      html_url: 'http://github.com/louisGustavo'
    });
    console.log(this.repositories);
  }
}

new App();