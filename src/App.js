import React from 'react';
import './global.css';
import './Sidebar.css';

function App() { 
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
            <label htmlFor="github_username">Usuario do Github</label>
            <input name="github_username" id="github_username" required></input>              
          </div>
         
          <div class="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required></input>
          </div>
          
          <div class="input-group">
			<div class="input-block">
			  <label htmlFor="latitude">Latitude</label>
			  <input name="latitude" id="latitude" required></input>
			</div>  
			<div class="input-block">
			  <label htmlFor="longitude">Longitude</label>
			  <input name="longitude" id="longitude" required></input>
			</div>			  
		  </div>                   

		  <button type="submit" value="Salvar">Salvar</button>
        </form>
      </aside>
      <main>
		<ul>
			<li className="dev-item">
				<header>
					<img src="https://avatars0.githubusercontent.com/u/5419445?s=460&v=4" />
				</header>
			</li>
		</ul>
      </main>
    </div>      
  );
}

export default App;
