import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Input from './Input';
import Button from './Button';
import List from './List';
import Person from './Person';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      entries: [{id: 1, name: 'Auroth'}, 
                {id: 2, name: 'Traxex'}, 
                {id: 3, name: 'Morted'}, 
                {id: 4, name: 'Rizzrack'},
                {id: 5, name: 'Rigwarl'},
                {id: 6, name: 'Banehallow'},
                {id: 7, name: 'Mogul Khan'},
                {id: 8, name: 'Rylai'},
                {id: 9, name: 'Ezalor'},
                {id: 10, name: 'N\'aix'}],
      entriesLength: 10,
      currentValue: '',
      searchValue: '',
      activeHero: ''
      }
  }
  updateCurrentValue = (e) => {
    this.setState({
      currentValue: e.target.value
          })
  }
  updateSearchValue = (e) => {
    this.setState({
      searchValue: e.target.value
          })
  }
  addHero = () => {
          if (this.state.currentValue !== '') {
            this.setState({
            entries: [...this.state.entries, {id: this.state.entriesLength+1, name: this.state.currentValue}],
            entriesLength: this.state.entriesLength + 1,
            currentValue: ''
          })
          }
        }
  searchHeroes = () => {
    let searchTerm = this.state.searchValue;
    return searchTerm ? this.state.entries.filter(hero => hero.name.toLowerCase().includes(searchTerm.toLowerCase())) : this.state.entries;
  }
  deleteHero = (id) => {
    this.setState({
      entries: [...this.state.entries.slice(0, id), ...this.state.entries.slice(id+1)],
    })
  }
  editHero = (id) => {
    this.setState({
      activeHero: id
    })
  }
  saveHero = (id) => {
      this.setState({
        activeHero: ''
      })
      }
  updateActiveHero = (e) => {
    this.state.entries.find(hero => hero.id === this.state.activeHero).name = e.target.value;
  }
  render(){
    return <div className="wrap">
    <h1>List <span className="tiny">of</span> Heroes</h1>
    <div className="newHero">
      <Input placeholder='Enter a new hero' className='addHeroInput' value={this.state.currentValue} onChange={this.updateCurrentValue}/>
      <Button btnVal={"Add"} onClick={this.addHero}/>
      <Input className='searchInput' placeholder='Search here' value={this.state.searchValue} onChange={this.updateSearchValue}/>
        </div>
        <div>
      <List entries={this.searchHeroes()} 
            deleteHero={this.deleteHero} 
            editHero={this.editHero}
            saveHero={this.saveHero}
            updateActiveHero={this.updateActiveHero}
            activeHero={this.state.activeHero}/>
      </div>
    </div>
  }
}


Person.propTypes = {
  name: React.PropTypes.string,
  id: React.PropTypes.number,
}

Button.propTypes = {
  btnVal: React.PropTypes.string
}

ReactDOM.render(
  <App />
  ,
  document.getElementById('root')
);
